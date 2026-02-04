import React from 'react'
import TypeWriter from './TypeWriter'
import images from './../assets/image/home.webp';
import './Introduction.css';
function introduction() {
  return (
    <div className='introduction-container'>
      <div className='introduction'>
        <h2><span>🖐</span>Hello,my name is </h2>
        <h1>Sidhdharth Pandya</h1>
        <TypeWriter />
        <button className="btn1">
          <span className="btn-text">See Portfolio</span>
        </button>

      </div>
      <div className='flotimage'>
        <img src={images} alt="" />
      </div>
    </div>
  )
}

export default introduction