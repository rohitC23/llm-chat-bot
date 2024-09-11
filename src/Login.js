import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleLogin = async () => {
    if (username.trim() === '' || password.trim() === '') {
      setError('Both fields are required');
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/login_credentials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          navigate('/app'); // Navigate to main chat page after successful login
        } else {
          setError('Invalid username or password');
        }
      } else {
        setError('Login failed');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="h-screen bg-[#1c1c28] flex justify-center items-center">
      <div className="bg-[#2d2d3d] p-6 rounded-lg text-white w-96">
        <h2 className="text-3xl mb-6 text-center font-bold">PyQuery</h2>
        {error && <div className="mb-4 text-red-500">{error}</div>}
        <div className="mb-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="w-full p-3 bg-[#3a3a4a] rounded-lg text-gray-200 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-3 bg-[#3a3a4a] rounded-lg text-gray-200 focus:outline-none"
          />
        </div>
        <button
          onClick={handleLogin}
          className="w-full bg-[#607AD6] px-4 py-3 rounded-lg text-white hover:bg-[#5069b4]"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
