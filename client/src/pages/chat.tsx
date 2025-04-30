import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import ReactMarkdown from 'react-markdown';

interface Message {
    text: string;
    sender: 'user' | 'bot';
    format?: 'markdown' | 'plain';
}

const Chat = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([
        {
            text: `
# Welcome to the Vet Assistant Chat. 
# My specialty is just in **Cats** and **Dogs**.

How can I help you today?
            `,
            sender: 'bot',
            format: 'markdown'
        }
    ]);

    const handleSend = async () => {
        if (input.trim()) {
            const userMessage: Message = { text: input, sender: 'user', format: 'plain' };
            setMessages([...messages, userMessage]);

            try {
                const response = await fetch('http://127.0.0.1:5000/post', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ query: input }),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log("Backend response:", data);  // Log the response to debug

                if (data && data.message) {
                    const botMessage: Message = { text: data.message, sender: 'bot', format: 'markdown' };
                    setMessages([...messages, userMessage, botMessage]);
                } else {
                    throw new Error('Invalid response structure');
                }
            } catch (error) {
                console.error('Fetch error:', error);
                const errorMessage: Message = { text: 'Error: Unable to fetch response', sender: 'bot', format: 'plain' };
                setMessages([...messages, userMessage, errorMessage]);
            }

            setInput('');
        }
    };

    const handleImageUpload = async (event: any) => {
        const file = event.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('image', file);

        try {
            // Handle image upload if needed
        } catch (error) {
            console.error('Image upload error:', error);
        }
    };

    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            event.preventDefault();  // Prevent the default action (form submission)
            handleSend();
        }
    };

    return (
        <div className="container mx-auto px-4 py-2">
            <h1 className="text-xl sm:text-2xl font-bold text-center mb-2 sm:mb-4 pt-5">Chat with Vet Assistant</h1>
            <div className="flex flex-col h-[70vh] sm:h-[500px] bg-white shadow-md rounded-lg overflow-hidden">
                <div className="flex-grow overflow-y-auto p-4">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`m-1 sm:m-3 p-2 rounded-lg shadow-sm ${msg.sender === 'user' ? 'bg-blue-100 ml-auto' : 'bg-gray-100 mr-auto'}`}>
                            <p className={`font-bold text-xs sm:text-sm mb-1 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                                {msg.sender === 'user' ? '@User' : '@Vet Assistant'}
                            </p>
                            <div className={`text-xs sm:text-sm ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                                {msg.format === 'markdown' ? (
                                    <ReactMarkdown>{msg.text}</ReactMarkdown>
                                ) : (
                                    <p>{msg.text}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="p-2 sm:p-4 bg-gray-200">
                    <div className="flex items-center">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            id="fileInput"
                            style={{ display: 'none' }}
                        />
                        <label htmlFor="fileInput" className="cursor-pointer">
                            <FontAwesomeIcon icon={faCamera} className="text-xl text-gray-600 hover:text-gray-800 px-1 sm:px-3 py-1 sm:py-2" />
                        </label>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Type your message..."
                            className="flex-grow border rounded py-1 sm:py-2 px-2 sm:px-4 mr-1 sm:mr-2 focus:outline-none"
                        />
                        <button onClick={handleSend} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 sm:py-2 px-2 sm:px-4 rounded">
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
