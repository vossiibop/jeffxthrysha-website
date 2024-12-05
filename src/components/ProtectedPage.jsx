// ProtectedPage.js
import React from 'react';
import { useState, useRef } from "react"
import { motion } from 'motion/react';
import axios from 'axios'
import "../styles.css"

import fullName from '../assets/fullNamesWhite.png'
import names from '../assets/Names White.png'
import monogram from "../assets/Monogram White.png"
import bridesmaids from "../assets/JeffThrysha-Bridesmaids.png"
import groomsmen from "../assets/JeffThrysha-Groomsmen.png"
import scallop from "../assets/Scallop2.png"

const faq = [
    {
        question: 'When and where is the wedding?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        question: 'What is the dress code?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        question: 'Are children invited?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        question: 'What is the RSVP deadline?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        question: 'How do I RSVP?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        question: 'Is there a wedding registry?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        question: 'What accommodations are available?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        question: 'Will transportation be provided?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        question: 'What should I do if I have dietary restrictions?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        question: 'Can I bring a plus-one?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
]

const ProtectedPage = () => {
    const [selected, setSelected] = useState(null)
    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null);
        }

        setSelected(i);
    }

    const formRef = useRef(null)
    const scriptUrl = "https://script.google.com/macros/s/AKfycbyJPjl_Sk02igUqY-gyTU2uv6X04aNQgnn7tvhkSg38KOK2KPuhDmco8Meelh5oYh0b/exec"
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setLoading(true)

        fetch(scriptUrl, {
        method: 'POST', 
        body: new FormData(formRef.current),

    }).then(res => {
            console.log("SUCCESSFULLY SUBMITTED")
            setLoading(false)
        })
        .catch(err => console.log(err))
    }

  return (
    <>
        {/* This div is for the first part of the site you will see */}
        <div className="landingPage">
            <motion.div className="landingCenter">
            <motion.p
                style={{fontSize: '1rem', color: '#FBF6EE', marginBottom: '-1.2%'}}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{ duration: .3}}>
                    welcome to the wedding of
            </motion.p>
            <motion.img 
                src={names}
                style={{width: '18em', height: 'auto', marginTop: '-2em', marginBottom: '-1.5em'}} 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{ duration: 1, type: 'tween'}}>
            </motion.img>
                <h2 style={{fontSize: '1.2rem', fontWeight: '310', color: '#FBF6EE'}}>03 08 2025</h2>
            </motion.div>
        </div>

        <motion.img src={scallop} style={{marginTop: '-25px', width: '100%'}}>
        </motion.img>
        
        {/* This div contains the main body of the website */}
        <div className="mainPage">
            {/* Wedding Details */}
            <div className="detailsPage">
                <motion.h1 style={{color: '#0047bb'}}>details for the big day!</motion.h1>
                <div className="locationDetails">
                    <h2 style={{color: '#f2533f', fontSize: '2vw', margin: '0'}}>CEREMONY</h2>
                    <strong style={{margin: '0', color: '#0047bb'}}>Chapel on the Hill</strong>
                    <p style={{color: '#0047bb'}}>Batulao, Batangas</p>
                    <div className="mapLinks">
                        <a href="https://www.waze.com/en/live-map/directions/don-bosco-chapel-on-the-hill-caleruega-rd-1-nasugbu?to=place.w.79167629.791938430.1565906" target="_blank" rel="noopener noreferrer">Waze</a>
                        <a href="https://maps.app.goo.gl/fUjwvsez7kF67Jro9" target="_blank" rel="noopener noreferrer">Google Maps</a>
                    </div>
                </div>

                <div className="locationDetails">
                    <h2 style={{color: '#f2533f', fontSize: '2vw', margin: '0'}}>RECEPTION</h2>
                    <strong style={{margin: '0', color: '#0047bb'}}>Arocarria</strong>
                    <p style={{color: '#0047bb'}}>Alfonso, Cavite</p>
                    <div className="mapLinks">
                        <a href="https://www.waze.com/en/live-map/directions/ph/calabarzon/alfonso/arocarria?to=place.ChIJ05ll0M-dvTMReLTDpkKEvsw" target="_blank" rel="noopener noreferrer">Waze</a>
                        <a href="https://maps.app.goo.gl/zq46HwGTNAFs4tTE8" target="_blank" rel="noopener noreferrer">Google Maps</a>
                    </div>
                </div>
            </div>

            {/* Schedule of Events */}
            <motion.div>
                <h1 style={{color: '#0047bb'}}>schedule of events</h1>
            </motion.div>

            {/* Attire Details */}
            <div className="attirePage">
                <h1 className="heading" style={{color: '#0047BB'}}>what to wear</h1>
                <div className="attireRow">
                <div className="attireClass">
                    <img src={groomsmen} style={{width: '90%', height: 'auto'}} />
                    <h2 className="subHeading" style={{color: '#0047BB', margin: '0'}}>MEN</h2>
                    <p className="bodyText" style={{margin: '0'}}>Barong and Pants</p>
                </div>
                <div className="attireClass">
                    <img src={bridesmaids} style={{width: '90%', height: 'auto'}} />
                    <h2 className="subHeading" style={{color: '#9A0051', margin: '0'}}>WOMEN</h2>
                    <p className="bodyText" style={{color: '#9A0051', margin: '0'}}>Formal Dress</p>
                </div>
                </div>
            </div>

            {/* FAQ Segment */}
            <div className="faqPage">
                <h1 className="heading" style={{color: '#0047BB'}}>FAQs</h1>
                {/* <div className="accordion">
                    {faq.map((item, i) => (
                        <div className='item'>
                            <div className='title' onClick={() => toggle(i)}>
                                <h2>{item.question}</h2>
                                <span>{selected === i ? '-' : '+'}</span>
                            </div>
                            <div className={selected === i ? 'content show' : 'content'}>
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div> */}
                <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            When and where is the wedding?
                        </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            What is the dress code?
                        </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Are children invited?
                        </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            When is the RSVP deadline?
                        </button>
                        </h2>
                        <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                            How do I RSVP?
                        </button>
                        </h2>
                        <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                            Is there a wedding registry?
                        </button>
                        </h2>
                        <div id="flush-collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                            What accommodations are available?
                        </button>
                        </h2>
                        <div id="flush-collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                            Will transportation be provided?
                        </button>
                        </h2>
                        <div id="flush-collapseEight" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
                                What should I do if I have dietary restrictions?
                            </button>
                        </h2>
                        <div id="flush-collapseNine" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
                                Can I bring a plus-one?
                            </button>
                        </h2>
                        <div id="flush-collapseTen" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                            </div>
                    </div>
                </div>
            </div>

            {/* This div contains the RSVP form segment */}
            <motion.div
            className="rsvpPage"
            initial={{opacity: 0}}
            whileInView={{
            opacity: 1, 
            transition: {duration: .4}}}
            viewport={{once: true, amount: 'some'}}>
                <h1 className="heading" style={{color: '#9A0051'}}>RSVP</h1>
                <section className="rsvpForm">
                    <form method='post' ref={formRef} onSubmit={handleSubmit} className="rsvp-form">
                        <div className='input-box' style={{marginTop: "0"}}>
                            <label for="main-guest">I AM RSVP-ING FOR:</label>
                            <input type='text' name='main-guest' id="main-guest" placeholder='Name of Main Guest' required/>
                        </div>

                        <div class="select-box">
                            <p>FOR HOW MANY PEOPLE:</p>
                            <select name='pax' id='pax' required>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                        </div>

                        <div className='input-box'>
                            <label for="guests">INPUT NAMES HERE (INCLUDING YOURSELF):</label>
                            <textarea rows="6" name='guests' id="guests" placeholder='Last name, First name' required></textarea>
                        </div>

                        <div className="main-box">
                            <p>CHOOSE YOUR MAIN:</p>
                            <div className="main-option">
                                <div className="main">
                                    <input type="radio" id="check-beef" name="main" value="beef" checked required />
                                    <label for="check-beef">Beef</label>
                                </div>
                                <div class="main-option">
                                    <input type="radio" id="check-fish" value="fish" name="main" />
                                    <label for="check-fish">Fish</label>
                                </div>
                            </div>
                        </div>

                        <div className='input-box'>
                            <label for="allergies">PLEASE LET US KNOW IF YOU HAVE ANY FOOD ALLERGIES:</label>
                            <input type='text' name='allergies' id="allergies" placeholder='List any allergies here' required/>
                        </div>

                        <div className='input-box'>
                            <label for="song-request">DJ, PLEASE PLAY THIS SONG FOR ME:</label>
                            <input type='text' name='song-request' id="song-request" placeholder='Song requests' required/>
                        </div>

                        <button type='submit' value={loading ? "Loading..." : "SEND MESSAGE"}>SUBMIT</button>
                    </form>
                </section>
            </motion.div>

            <motion.div className='photoGallery'>
                <h1 style={{color: '#0047BB'}}>have a look at our prenup!</h1>
            </motion.div>
        </div>
    </>
  )
};

export default ProtectedPage;
