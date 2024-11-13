"use client";
import { useState, useEffect } from 'react';
import HumanResponse from './HumanResponse';
import BotResponse from './BotResponse';
import axiosInstance from '../helper/base_api';
import DummyData from './DummyData';

const ChatThread = ({ trigger }) => { // Accept trigger as a prop
    // Initialize convoHistory as an empty array to avoid undefined issues
    const [convoHistory, setConvoHistory] = useState([]);

    // Fetch conversation data from the API
    const getData = async () => {
        try {
            const response = await axiosInstance.get('/v01/api/query/', {
                headers: {
                    'accept': 'application/json',
                }
            });
            
            // Map API response to the convoHistory structure
            const formattedData = response.data.flatMap((item) => ([
                {
                    speaker: "Human",
                    message: [item.query_text],
                    action: false,
                    actionMessage: "",
                    actionLink: ""
                },
                {
                    speaker: "Chatbot",
                    message: [item.response_text],
                    action: false,
                    actionMessage: "",
                    actionLink: ""
                }
            ]));

            setConvoHistory(formattedData);
        } catch (error) {
            console.error("Error fetching data:", error);
            setConvoHistory(DummyData); // Fallback to DummyData if API call fails
        }
    };

    // Fetch data when the component mounts or when trigger changes
    useEffect(() => {
        getData();
    }, [trigger]); // Add trigger to dependency array

    useEffect(() => {
        console.log("ChatThread convoHistory updated", convoHistory);
    }, [convoHistory]);

    return (
        <section className='h-auto mb-[100px] shadow-sm flex flex-col gap-4 justify-end overflow-y-scroll'>
            {convoHistory.map(({ speaker, message, action, actionMessage = "", actionLink = "" }, i) => (
                <div key={i}>
                    {speaker === "Chatbot" ? (
                        <BotResponse message={message} action={action} actionMessage={actionMessage} actionLink={actionLink} />
                    ) : (
                        <HumanResponse message={message} />
                    )}
                </div>
            ))}
        </section>
    );
};

export default ChatThread;