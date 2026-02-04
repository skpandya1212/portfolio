import React from 'react';
import './Myskills.css';   
import htmlLogo from './../assets/image/HTML.webp';
import cssLogo from './../assets/image/CSS.webp';
import jsLogo from './../assets/image/JS.webp';
import reactLogo from './../assets/image/react.webp'; 
import cLogo from './../assets/image/C.webp';
import mongodb from './../assets/image/mongoDB.png';
import nodejs from './../assets/image/nodejs.png';
import github from './../assets/image/Github.png';
import express from './../assets/image/express.png';
import word from './../assets/image/Word.png';
import powerpoint from './../assets/image/Powerpoint.png';
import excel from './../assets/image/Excel.png';

function Myskills() {
    return(
        <div className='myskills-container'>

            <div className='skillheading'>
                <h1>TOP SKILLS</h1>
            </div>

            <div className='skillslogocontainer'>

                <div className='skillcard1'>
                
                    <div className='cardbox'>
                        <img src={htmlLogo} alt="" />
                        <h3>HTML</h3>
                        <span className='border HTML'></span>
                    </div>

                     <div className='cardbox'>
                        <img src={cssLogo} alt="" />
                        <h3>CSS</h3>
                        <span className='border CSS'></span>
                    </div>

                     <div className='cardbox'>
                        <img src={jsLogo} alt="" />
                        <h3>JavaScript</h3>
                        <span className='border JAVASCRIPT'></span>
                    </div>

                     <div className='cardbox'>
                        <img src={reactLogo} alt="" />
                        <h3>React</h3>
                        <span className='border REACT'></span>
                    </div>

                </div>    

                 <div className='skillcard2'>
                
                    <div className='cardbox'>
                        <img src={cLogo} alt="" />
                        <h3>C</h3>
                        <span className='border C'></span>
                    </div>

                     <div className='cardbox'>
                        <img src={mongodb} alt="" />
                        <h3>mongoDB</h3>
                        <span className='border MONGODB'></span>
                    </div>

                     <div className='cardbox'>
                        <img src={nodejs} alt="" />
                        <h3>NodeJS</h3>
                        <span className='border NODEJS'></span>
                    </div>

                     <div className='cardbox'>
                        <img  src={github} alt="" />
                        <h3>Github</h3>
                        <span className='border GITHUB'></span>
                    </div>

                </div> 



                <div className='skillcard3'>
                
                    <div className='cardbox'>
                        <img src={express} alt="" />
                        <h3>Express</h3>
                        <span className='border EXPRESS'></span>
                    </div>

                     <div className='cardbox'>
                        <img src={word} alt="" />
                        <h3>Word</h3>
                        <span className='border WORD'></span>
                    </div>

                     <div className='cardbox'>
                        <img src={powerpoint} alt="" />
                        <h3>PowerPoint</h3>
                        <span className='border POWERPOINT'></span>
                    </div>

                     <div className='cardbox'>
                        <img src={excel} alt="" />
                        <h3>Exel</h3>
                        <span className='border EXCEL'></span>
                    </div>

                </div>     

            </div>

        </div>


    )};

export default Myskills;