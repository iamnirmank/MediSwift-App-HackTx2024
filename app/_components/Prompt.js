"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';
import axiosInstance from '../helper/base_api';

export default function StyledPrompt({ onToggle, toggle }) { // Accept onToggle as a prop
  const [inputValue, setInputValue] = useState('');
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      console.log("Selected files:", files);
      alert(`You selected ${files.length} file(s): ${Array.from(files).map(f => f.name).join(', ')}`);
    }
  };

  const handlePaperclipClick = () => {
    fileInputRef.current.click();
  };

  const submitQuery = async () => {
    return await axiosInstance.post(
      '/v01/api/query/process_chat/',
      { query: inputValue },
      {
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        },
      }
    );
  };

  const handleSubmit = async () => {
    if (inputValue.trim()) {
      const response = await submitQuery();
      console.log("Server response:", response.data);

      if (response.data.success) {
        // Pass response text to the parent component
        onToggle(prev => !prev); // Toggle the value using a callback function
      }
      setInputValue(''); // Clear input field

    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div style={styles.container}>
      <Image
        src={'/paperclip.svg'}
        width={50}
        height={50}
        alt="Attach file"
        onClick={handlePaperclipClick}
        style={styles.icon}
      />
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
        accept="image/*,application/pdf"
      />
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="How are you feeling today?"
        style={styles.input}
      />
      <button
        onClick={handleSubmit}
        style={styles.sendButton}
        disabled={!inputValue.trim()}
      >
        <Image src={'/send.svg'} width={40} height={40} alt="Send message" style={styles.icon} />
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #4B8A3F',
    borderRadius: '25px',
    padding: '8px 12px',
    width: 'calc(100% - 40px)',
    position: 'fixed',
    left: '20px',
    right: '20px',
    bottom: '20px',
    boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.5)',
    backgroundColor: 'white',
  },
  input: {
    flex: 1,
    border: 'none',
    outline: 'none',
    fontSize: '16px',
  },
  sendButton: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
  },
  icon: {
    cursor: 'pointer',
  },
};
