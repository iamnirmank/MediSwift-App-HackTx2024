"use client";

import React, { useState, useEffect } from "react";
import axiosInstance from "../helper/base_api"; // Make sure axiosInstance is correctly configured
import Navbar from "./Navbar";
import Link from "next/link";

export default function PatientReport() {
  const [report, setReport] = useState(null); // State to hold the report data
  const [medications, setMedications] = useState([]);

  useEffect(() => {
    // Fetch data from the API with axios
    const fetchReport = async () => {
    
      try {
        const response = await axiosInstance.get("/v01/api/treatment/", {
          headers: {
            accept: "application/json",
          },
        });


        const data = response.data;

        // Filter for reports with status 'Approved' and take the first approved one
        const approvedReport = data.find((item) => item.status === "Approved");

        // If an approved report exists, set it as the report data
        if (approvedReport) {
          setReport(approvedReport);
          setMedications(
            approvedReport.medication.split(",").map((med) => {
              const [name, frequency, duration] = med.trim().split("|"); // Assuming medication data is in "name|frequency|duration" format
              return { name, frequency, duration };
            })
          );
        } else {
          setReport(data[0]); // If no approved report, set the first report
        }
      } catch (error) {
        console.error("Error fetching report data:", error);
      }
    };

    fetchReport();
  }, []);

 

  return (
    <>
      <Navbar />
      {report ?   (<div className="p-8 bg-gray-100 min-h-screen">
        <div className="bg-white p-8 rounded-md shadow-md max-w-3xl mx-auto">
          <header className="flex items-center justify-between mb-8">
            <div className="flex items-center justify-between w-full space-x-4">
              <div className="w-full">
                <h2 className="text-xs">Name</h2>
                <p className="border-b border-gray-300 pb-1">{report.patient_name}</p>
              </div>
              <div className="w-full">
                <h2 className="text-xs">Date of Illness</h2>
                <p className="border-b border-gray-300 pb-1">{report.date_of_illness}</p>
              </div>
              <div className="w-full">
                <h2 className="text-xs">Disease</h2>
                <p className="border-b border-gray-300 pb-1 ">{report.disease}</p>
              </div>
            </div>
          </header>

          <div className="mb-6">
            <h2 className="text-xs">Symptoms</h2>
            <p className="border-b border-gray-300 pb-1">{report.symptoms}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-xs">Diagnosis</h2>
            <p className="border border-gray-300 p-2 rounded-md">{report.diagnosis}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-xs">Current Medication</h2>
            {medications.map((medication, index) => (
              <div key={index} className="border-b border-gray-300 pb-1 mb-2">
                <p><strong>Name:</strong> {medication.name}</p>
                <p><strong>Frequency:</strong> {medication.frequency}</p>
                <p><strong>Duration:</strong> {medication.duration}</p>
              </div>
            ))}
          </div>

          <div className="flex space-x-4">
            <button className="bg-green-600 text-white px-6 py-2 rounded-md">
              See Next Steps
            </button>
            <Link href={'/'} ><button className="bg-gray-300 px-6 py-2 rounded-md">
              Close
            </button>
            </Link>
          </div>
        </div>
      </div>):
      (    <div className="p-8 bg-gray-100 min-h-screen">
        <div className="bg-white p-8 rounded-md shadow-md max-w-3xl mx-auto">
          <header className="flex items-center justify-between mb-8">
            <div className="flex items-center justify-between w-full space-x-4">
              <div className="w-full">
                <h2 className="text-xs">Name</h2>
                <p className="border-b border-gray-300 pb-1">Richard Esselman</p>
              </div>
              <div className="w-full">
                <h2 className="text-xs">Date of Birth</h2>
                <p className="border-b border-gray-300 pb-1">Jan 1ˢᵗ, 1989</p>
              </div>
              <div className="w-full">
                <h2 className="text-xs">Sex</h2>
                <p className="border-b border-gray-300 pb-1 ">Male</p>
              </div>
            </div>
          </header>
  
          <div className="mb-6">
            <h2 className="text-xs">Date of Illness</h2>
            <p className="border-b border-gray-300 pb-1">Nov 3ʳᵈ, 2024</p>
          </div>
  
          <div className="mb-6">
            <h2 className="text-xs">Symptoms</h2>
            <p className="border-b border-gray-300 pb-1">
              Stomach ache with fever of 102°F. Patient also reported his blood
              pressure to be 110/68. Absence of body pain and muscle pain.
            </p>
          </div>
  
          <div className="mb-6">
            <h2 className="text-xs">Active Allergies</h2>
            <p className="border-b border-gray-300 pb-1">
              Patient has dust allergy. Upon exposure has bouts of sneezing and
              rashes.
            </p>
          </div>
  
          <div className="mb-6">
            <h2 className="text-xs">Current Medication</h2>
            <p className="border-b border-gray-300 pb-1">Vitamin D Tablet. 6000 IU, Once a month.</p>
          </div>
  
          <div className="mb-6">
            <h2 className="text-xs">Diagnosis</h2>
            <p className="border border-gray-300 p-2 rounded-md">
              Patient seems to have a case of food poisoning.
            </p>
          </div>
  
  
          <div className="flex space-x-4">
            <button className="bg-green-600 text-white px-6 py-2 rounded-md">
              See Next Steps
            </button>
            <button className="bg-gray-300 px-6 py-2 rounded-md">
              Close
            </button>
          </div>
        </div>
      </div>)
      }
    
    </>
  );
}


