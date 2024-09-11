import React, { useState } from 'react';

function MainApp() {
  const [message, setMessage] = useState(""); // State to hold message input
  const [messages, setMessages] = useState([]); // State to hold all messages
  const [hideSections, setHideSections] = useState(false); // State to hide sections
  const [chatVisible, setChatVisible] = useState(false); // State to manage chat visibility
  const [isLoading, setIsLoading] = useState(false); // State to manage loading

  
  const handleSendMessage = async () => {
    if (message.trim() !== "") {
      // Hide sections immediately upon button click
      setHideSections(true);
      setChatVisible(true);
  
      // Add user's message to the chat UI and clear input field immediately
      const userMessage = { text: message, type: 'user' };
      setMessages([...messages, userMessage]);
      setMessage(""); // Clear the input field
  
      // Set loading state to true to show "typing..." message
      setIsLoading(true);
  
      try {
        // Initial POST request with user_question and empty messages
        const response = await fetch('http://127.0.0.1:8000/pi/user_question', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user_question: userMessage.text,
            messages: []
          }),
        });
  
        if (response.ok) {
          const data = await response.json();
          const { code } = data;
  
          // Use the 'code' from the response and display it
          const apiMessage = { text: code, type: 'api' };
          setMessages((prevMessages) => [...prevMessages, apiMessage]);
  
          // Prepare for the next API request with the updated messages
          const nextResponse = await fetch('http://127.0.0.1:8000/pi/user_question', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              user_question: userMessage.text,
              messages: [...messages, apiMessage]  // Include both user and API messages
            }),
          });
  
          if (nextResponse.ok) {
            const nextData = await nextResponse.json();
            const { code: nextGeneratedCode } = nextData;
  
            // Use the next 'code' from the second response and display it
            const nextApiMessage = { text: nextGeneratedCode, type: 'api' };
            setMessages((prevMessages) => [...prevMessages, nextApiMessage]);
          } else {
            console.error('Failed to get a proper response from the API for the second request');
          }
        } else {
          console.error('Failed to get a proper response from the API');
        }
      } catch (error) {
        console.error('Error:', error);
        // Optionally handle the error (e.g., display an error message)
      } finally {
        // Set loading state to false after the response is received
        setIsLoading(false);
      }
    }
  }; 
  
  return (
    <div className="font-poppins bg-[#1c1c28] h-screen flex">
      {/* Sidebar */}
      <aside className="bg-[#141426] text-white w-64 p-4 flex flex-col">
        <div className="flex items-center space-x-2 mb-10">
          <span className="text-2xl font-bold">PyQuery</span>
        </div>
        <nav className="flex flex-col space-y-4 flex-grow">
          <a href="#" className="hover:text-[#607AD6] flex items-center space-x-2">
            <span>Chats</span>
          </a>
          <a href="#" className="hover:text-[#607AD6] flex items-center space-x-2">
            <span>Search</span>
          </a>
          <a href="#" className="hover:text-[#607AD6] flex items-center space-x-2">
            <span>Support</span>
          </a>
          <a href="#" className="hover:text-[#607AD6] flex items-center space-x-2">
            <span>Settings</span>
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="bg-[#1c1c28] text-white flex-grow p-10 flex flex-col relative">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl font-bold mb-4">PyQuery</h1>
            <p className="text-gray-400">Your Intelligent Companion for Solving Python Programming Challenges</p>
          </div>
        </div>

        {!hideSections && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Example Section */}
            <div className="bg-[#2d2d3d] p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-[#607AD6] mb-4">Example</h2>
              <ul className="space-y-2 text-gray-300">
                <li>“Explain how list comprehensions work in Python.”</li>
                <li>“Write a Python function to sort a list of dictionaries by a specific key.”</li>
                <li>“Show me how to use regular expressions to validate email addresses in Python.”</li>
              </ul>
            </div>

            {/* Capabilities Section */}
            <div className="bg-[#2d2d3d] p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-[#607AD6] mb-4">Capabilities</h2>
              <ul className="space-y-2 text-gray-300">
                <li>Supports user-provided follow-up corrections to refine answers.</li>
                <li>Programmed to reject inappropriate or irrelevant queries.</li>
                <li>Retains context from previous interactions to provide more accurate responses.</li>
              </ul>
            </div>

            {/* Limitations Section */}
            <div className="bg-[#2d2d3d] p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-[#607AD6] mb-4">Limitations</h2>
              <ul className="space-y-2 text-gray-300">
                <li>May sometimes produce incorrect or suboptimal code snippets.</li>
                <li>Could generate solutions that are overly complex or not the best practice.</li>
                <li>Limited knowledge of very recent Python updates or niche libraries.</li>
              </ul>
            </div>
          </div>
        )}

        {/* Chat Section (Initially Hidden) */}
        {chatVisible && (
          <div className="h-[420px] mt-6 bg-[#2d2d3d] p-6 rounded-lg overflow-y-auto">
            <div className="space-y-4 text-gray-300">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-2 rounded-lg ${msg.type === 'user' ? 'bg-[#3a3a4a]' : 'bg-[#4a4a5a]'}`}
                  style={{ whiteSpace: 'pre-wrap' }} // Ensures newlines are preserved
                >
                  {msg.text}
                </div>
              ))}

              {/* Show "typing..." message while waiting for API response */}
              {isLoading && (
                <div className="p-2 rounded-lg bg-[#4a4a5a] text-gray-400">
                  Typing...
                </div>
              )}
            </div>
          </div>
        )}

        {/* Input and Send Button Fixed at the Bottom */}
        <div className="mt-auto flex">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here"
            className="flex-grow p-3 bg-[#2d2d3d] rounded-lg text-gray-200 focus:outline-none"
          />
          <button
            onClick={handleSendMessage}
            className="ml-2 bg-[#607AD6] px-4 py-3 rounded-lg text-white hover:bg-[#5069b4]">
            Send
          </button>
        </div>
      </main>
    </div>
  );
}

export default MainApp;