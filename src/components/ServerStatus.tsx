import React, { useState, useEffect } from 'react';

const SERVER_URL = 'https://use-bit.gl.at.ply.gg:49493'; // Replace with your actual tunnel URL

const ServerStatus: React.FC = () => {
  const [status, setStatus] = useState<'checking' | 'online' | 'offline'>(
    'checking'
  );

  const checkServerStatus = async () => {
    try {
      setStatus('checking');
      const response = await fetch(SERVER_URL, { method: 'HEAD' });
      if (response.ok) {
        setStatus('online');
      } else {
        setStatus('offline');
      }
    } catch (error) {
      console.error('Connection error:', error);
      setStatus('offline');
    }
  };

  useEffect(() => {
    checkServerStatus();
    const interval = setInterval(checkServerStatus, 60000); // Check every 60 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center space-x-2">
      <span
        className={`w-3 h-3 rounded-full ${
          status === 'online'
            ? 'bg-green-500'
            : status === 'offline'
            ? 'bg-red-500'
            : 'bg-yellow-500'
        }`}
      ></span>
      <span className="text-white">
        {status === 'checking'
          ? 'Checking...'
          : status === 'online'
          ? 'Server Online'
          : 'Server Offline'}
      </span>
    </div>
  );
};

export default ServerStatus;
