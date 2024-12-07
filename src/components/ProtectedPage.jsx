// ProtectedPage.js
import React from 'react';
import { useState, useEffect, useRef } from "react"
import { motion } from 'motion/react';
import "../styles.css"

import names from '../assets/Names White.png'
import bridesmaids from "../assets/JeffThrysha-Bridesmaids.png"
import groomsmen from "../assets/JeffThrysha-Groomsmen.png"
import scallop from "../assets/Scallop2.png"
import ceremonySched from "../assets/Ceremony.png"
import cocktailsSched from "../assets/Cocktails.png"
import drinksSched from "../assets/Drinks.png"
import receptionSched from "../assets/Reception.png"

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

    //For sending RSVP form data to Google Sheets
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
            {/* Navbar */}
            <nav class="navbar navbar-expand-lg navbar-dark bg-transparent p-4 m-2">
                <div class="container">
                <a class="navbar-brand" href="#"></a>
                    {/* Hamburger Button */}
                    <button class="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>

                    {/* Sidebar */}
                    <div class="sidebar offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    
                        {/* Sidebar Header */}
                        <div class="offcanvas-header text-white">
                            <button type="button" class="btn-close btn-close-white shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>

                        {/* Sidebar Body */}
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 navbarLinks">
                            <li class="nav-item mx-3">
                                <a class="nav-link active" aria-current="page" href="#">home</a>
                            </li>
                            <li class="nav-item mx-3">
                                <a class="nav-link" href="#details">details</a>
                            </li>
                            <li class="nav-item mx-3">
                                <a class="nav-link" href="#attire">attire</a>
                            </li>
                            <li class="nav-item mx-3">
                                <a class="nav-link" href="#schedule">schedule</a>
                            </li>
                            <li class="nav-item mx-3">
                                <a class="nav-link" href="#faq">faq</a>
                            </li>
                            <li class="nav-item mx-3">
                                <a class="nav-link" href="#photos">photos</a>
                            </li>
                            </ul>
                            <a class="btn custom-btn" href="#rsvp" role="button">RSVP</a>
                        </div>
                    </div>
                </div>
            </nav>

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
                    style={{width: '25%', marginTop: '-2em', marginBottom: '-1.5em'}} 
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
            <div className="detailsPage" id='details'>
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
            <motion.div id='schedule' className='schedPage'>
                <h1 style={{color: '#0047bb'}}>schedule of events</h1>
                <motion.div className='schedRow'>
                    <motion.img src={ceremonySched}></motion.img>
                    <motion.img src={cocktailsSched}></motion.img>
                    <motion.img src={receptionSched}></motion.img>
                    <motion.img src={drinksSched}></motion.img>
                </motion.div>
            </motion.div>

            {/* Attire Details */}
            <div className="attirePage" id='attire'>
                <motion.h1 style={{color: '#0047BB'}}>what to wear</motion.h1>
                <div className="attireRow">
                <div className="attireClass">
                    <img src={groomsmen} style={{width: '50%', marginTop: '-4em', marginBottom: '-4em'}} />
                    <div className='attireDescription'>
                        <h2 className="subHeading" style={{color: '#0047BB', margin: '0'}}>FOR THE GENTLEMEN:</h2>
                        <a style={{margin: '0'}}>Barong Tagalog</a>
                        <p style={{color: '#0047BB'}}>Bring out the best and fanciest Barong out of your closet! Please wear a traditional Barong with that classic beige/cream color, slacks, and leather shoes.</p>
                    </div>
                </div>
                </div>
                <div className="attireRow">
                <div className="attireClass">
                    <img src={bridesmaids} style={{width: '50%', marginTop: '-4em', marginBottom: '-4em'}} />
                    <div className='attireDescription'>
                        <h2 className="subHeading" style={{color: '#9A0051', margin: '0'}}>FOR THE LADIES:</h2>
                        <a style={{color: '#9A0051', margin: '0'}}>Formal Dress</a>
                        <p style={{color: '#9A0051'}}>We hope you like color! Ladies, please wear your most colorful formal dress. Don’t be afraid to be bold with your outfit, we’d love to see as much color as we can at our big day!</p>
                    </div>
                </div>
                </div>
            </div>

            <motion.img src={scallop} style={{marginTop: '-25px', width: '100%'}}>
            </motion.img>

            {/* FAQ Segment */}
            <div className="faqPage" id='faq'>
                <h1 className="heading" style={{color: '#0047BB'}}>FAQs</h1>
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

            <motion.img src={scallop} style={{marginTop: '-25px', width: '100%'}}>
            </motion.img>

            {/* This div contains the RSVP form segment */}
            <motion.div
            id='rsvp'
            className="rsvpPage"
            initial={{opacity: 0}}
            whileInView={{
            opacity: 1, 
            transition: {duration: .4}}}
            viewport={{once: true, amount: 'some'}}>
                <motion.h1 style={{color: '#FBF6EE'}}>RSVP</motion.h1>
                <section className="rsvpForm">
                    <form method='post' ref={formRef} onSubmit={handleSubmit} className="rsvp-form">
                        <div className='input-box' style={{marginTop: "0"}}>
                            <label for="main-guest">I AM RSVP-ING FOR:</label>
                            <input type='text' name='main-guest' id="main-guest" placeholder='Name of Main Guest' required/>
                        </div>

                        <div className="select-box">
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

            <motion.div className='photoGallery' id='photos'>
                <h1 style={{color: '#0047BB'}}>have a look at our prenup!</h1>
            </motion.div>
        </div>
    </>
  )
};

export default ProtectedPage;
