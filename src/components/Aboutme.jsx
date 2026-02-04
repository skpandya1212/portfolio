import React from "react";
import './Aboutme.css';
import { IoLogoInstagram } from "react-icons/io5";
import { LuSend } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6"
function Aboutme() {
    return (
        <div className="aboutme-container">
            <div className="mypic">
                <img src="" alt="My Pic" />
            </div>
            <div className="aboutme-text">
                <h2>About Me</h2>
               
                    <ul>
                        <li> I am a BCA graduate with a strong interest in web development and technology. During my studies, I built a solid foundation in computer applications, programming, and problem-solving.</li>
                        <li>Currently, I am learning full-stack development, where I am gaining hands-on experience with both frontend and backend technologies.</li>

                        <li>I enjoy creating clean, responsive, and user-friendly web applications. I am always curious to understand how things work behind the scenes and continuously try to improve my skills by building real-world projects.</li>
                    </ul>
               
                
                <div className="btn2">
                    <button className="btnresume">Resume <span><LuSend /></span></button>                
                    <button className="readmore">Read More <span> <FaArrowRightLong /> </span></button>
                </div>
            



            </div>

        </div>
    )
}
export default Aboutme;