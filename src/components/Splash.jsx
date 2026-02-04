import React, { useEffect, useState } from 'react';
import './Splash.css';
import images from './../assets/image/download.jfif';

function Splash() {
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30); // speed control

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='splash-container'>
      <div className='splash'>
        <div className="splash-head">
          <img src={images} alt="" />
          <h1>Welcome</h1>
        </div>

        <div className="progressbar-pare">
          <div
            className="progressbar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="splash_footer">
          <h3>{progress}%</h3>
        </div>
      </div>
    </div>
  );
}

export default Splash;
