import React, { useEffect, useState } from 'react';
import '../loading.css';

export const Loading = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prevPercentage) => {
        if (prevPercentage === 100) {
          clearInterval(interval);
          return prevPercentage;
        }
        return prevPercentage + 1;
      });
    }, 15);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading">
      <div className="card-box">
        <div className="card">
          <div className="inner">
            <div className="center">
              <h1>LOADING <span>{percentage}%</span></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
