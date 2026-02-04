import React from 'react'
import './contact.css'

function contact() {
  return (
    <div className='contact-container'>

        <h3>../contact</h3>
        <h1>Contact</h1>
        <h2>Conatct Form</h2>

        <p>So if you are looking for someone hardworking, authentic and always up for a good challenge, look no further than yours truly! Lets connect and see how we can make a difference together:)</p>

        <div className='contactmedia'>
            
            <div className='messageform'>

                <h1>Send me a message</h1>

                <div>
                    <input type="text" />
                    <label htmlFor=""> <span></span> Your name</label>
                </div>
                
                <div>
                    <input type="Email" />
                    <label htmlFor=""> <span></span> Your Email</label>
                </div>

                <div>
                    <input type="text" />
                    <label htmlFor=""> <span></span>Subject</label>
                </div>

                <div>
                    <input type="text" />
                    <label htmlFor=""> <span></span> Your Message</label>
                </div>

                <button>Send Message</button>
            </div>

            <div className='Mymediacontainer'></div>

        </div>

    </div>
  )
}

export default contact