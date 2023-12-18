import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GifEmbed = () => {
  const width = 1000;
  const height = 300;
  const [userData, setUserData] = useState(null);
  const totalCommits = 343; 

  useEffect(() => {
    axios.get('https://api.github.com/users/Manikantan-S')
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error('Error fetching profile data:', error);
      });
  }, []);

  return (
    <div className="flex flex-col items-start">
      <img
        src={require('../assets/github.gif')}
        alt="Embedded GIF"
        style={{ width: `${width}px`, height: `${height}px` }}
      />

      {userData && (
        <div className="flex mt-4 space-x-4 overflow-hidden">
          {/* First card */}
          <div className="p-6 bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg shadow-lg relative">
            <h2 className="text-2xl font-semibold mb-4 text-white">My Profile</h2>
            <div className="grid grid-cols-2 gap-4 text-white">
              <div>
                <p className="text-lg font-bold">Name</p>
                <p className="text-xl">{userData.name}</p>
              </div>
              <div>
                <p className="text-lg font-bold">Public Repos</p>
                <p className="text-xl">{userData.public_repos}</p>
              </div>
              <div>
                <p className="text-lg font-bold">Followers</p>
                <p className="text-xl">{userData.followers}</p>
              </div>
              <div>
                <p className="text-lg font-bold">Total Commits</p>
                <p className="text-xl">{totalCommits}</p>
              </div>

              {/* Link to GitHub profile with flow-in effect */}
              <div className="mt-4 overflow-hidden">
                <p className="text-sm font-bold text-white">Visit my GitHub:</p>
                <div className="flow-in">
                  <a
                    href="https://github.com/Manikantan-S"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-300 hover:underline"
                  >
                    {userData.login}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Image in the same position */}
          <img
            src={require('../assets/my style.jpg')} // Update the path accordingly
            alt="Second Image"
            style={{ width: `${width}px`, height: `${height}px`, marginLeft: '8px' }} // Adjust marginLeft as needed
          />
        </div>
      )}
    </div>
  );
};

export default GifEmbed;






