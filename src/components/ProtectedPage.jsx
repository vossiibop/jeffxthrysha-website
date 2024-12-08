// ProtectedPage.js
import React from 'react';
import { useState, useEffect, useRef } from "react"
import { motion, useInView } from 'motion/react';
import "../styles.css"
import Slider from "react-slick";

import names from '../assets/Names White.png'
import bridesmaids from "../assets/Bridesmaid.svg"
import groomsmen from "../assets/Groomsmen.svg"
import scallop from "../assets/Scallop.svg"
import footerScallop from "../assets/ScallopOrange.svg"
import ceremonySched from "../assets/Ceremony.png"
import cocktailsSched from "../assets/Cocktails.png"
import drinksSched from "../assets/Drinks.png"
import receptionSched from "../assets/Reception.png"
import chapel from "../assets/Chapel Colored.svg"
import entourage from "../assets/Entourage Colored.png"
import drivePath from "../assets/DrivePath.svg"
import scheduleText from "../assets/schedEvents.svg"
import landingBG from "../assets/LandingBG.svg"

const ProtectedPage = () => {
    const [selected, setSelected] = useState(null)
    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null);
        }
        setSelected(i);
    }

    //Show confirmation modal after submitting the RSVP form
    function showModal() { 
        var myModal = new bootstrap.Modal(document.getElementById('confirmationModal')); 
        myModal.show(); 
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
            showModal()
        })
        .catch(err => console.log(err))
    }

    //Dynamically add guest form inputs based on the number of guests inputted through the dropdown
    const [guests, setGuests] = useState(1);
    const guestDropdownChange = (e) => {
        setGuests(Number(e.target.value));
    }

    //React Slick settings
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    //Wait for Landing page image to load before firing animations
    const [isLoaded, setIsLoaded] = useState(false); 
    const handleImageLoad = () => { setIsLoaded(true); };

    const ref = React.useRef(null); 
    const isInView = useInView(ref, { once: true });

  return (
    <>
        {/* This div is for the first part of the site you will see */}
        <div className="landingPage">
            <img 
                src={landingBG} 
                alt="Background" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'none' }} 
                onLoad={handleImageLoad} 
            />

            {isLoaded && (
                // Navbar
                <motion.nav 
                    class="navbar navbar-expand-lg navbar-dark bg-transparent p-4 m-2"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{ duration: .3}}
                >
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
                                    <a class="nav-link" href="#schedule">schedule</a>
                                </li>
                                <li class="nav-item mx-3">
                                    <a class="nav-link" href="#attire">attire</a>
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
                </motion.nav>
            )}

            {isLoaded && (
                <motion.div className="landingCenter">
                    <motion.p
                        style={{fontSize: '1rem', color: '#FBF6EE', marginBottom: '-1.2%'}}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{ duration: 1}}>
                            welcome to the wedding of
                    </motion.p>
                    <motion.img 
                        src={names}
                        style={{width: '25%', marginTop: '-2em', marginBottom: '-1.5em'}} 
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{ duration: 1, type: 'tween', delay: 0.5}}>
                    </motion.img>
                    <motion.h2 
                        style={{fontSize: '1.2rem', fontWeight: '310', color: '#FBF6EE'}}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{ duration: 1, delay: 0.8}}
                    >
                            03 08 2025
                    </motion.h2>
                </motion.div>
            )}
        </div>

        <motion.img src={scallop} style={{marginTop: '-25px', width: '100%'}}>
        </motion.img>
        
        {/* This div contains the main body of the website */}
        <div className="mainPage">
            {/* Wedding Details */}
            <div className="detailsPage" id='details'>
                <motion.h1 style={{color: '#0047bb', marginBottom: '1em'}}>details for the big day!</motion.h1>
                <div className='detailsRow'>
                    <div className='locationColumn'>
                        <motion.div 
                            className="locationDetails"
                            initial={{opacity: 0}}
                            whileInView={{
                                opacity: 1, 
                                transition: {duration: .4}
                            }}
                            viewport={{once: true, amount: 'all'}}
                            >
                            <h2 style={{color: '#f2533f', fontSize: '2vw', margin: '0'}}>CEREMONY</h2>
                            <motion.img src={chapel} style={{width: '50%'}}></motion.img>
                            <strong style={{margin: '0', color: '#0047bb'}}>Chapel on the Hill</strong>
                            <h4 style={{color: '#0047bb'}}>Batulao, Batangas</h4>
                            <div className="mapLinks">
                                <a href="https://www.waze.com/en/live-map/directions/don-bosco-chapel-on-the-hill-caleruega-rd-1-nasugbu?to=place.w.79167629.791938430.1565906" target="_blank" rel="noopener noreferrer">Waze</a>
                                <a href="https://maps.app.goo.gl/fUjwvsez7kF67Jro9" target="_blank" rel="noopener noreferrer">Google Maps</a>
                            </div>
                        </motion.div>
                        <motion.div 
                            className="locationDetails"
                            initial={{opacity: 0}}
                            whileInView={{
                                opacity: 1, 
                                transition: {duration: .4}
                            }}
                            viewport={{once: true, amount: 'some'}}
                            >
                            <h2 style={{color: '#f2533f', fontSize: '2vw', margin: '0'}}>RECEPTION</h2>
                            <motion.img src={entourage} style={{width: '40%'}}></motion.img>
                            <strong style={{margin: '0', color: '#0047bb'}}>Arocarria</strong>
                            <h4 style={{color: '#0047bb'}}>Alfonso, Cavite</h4>
                            <div className="mapLinks">
                                <a href="https://www.waze.com/en/live-map/directions/ph/calabarzon/alfonso/arocarria?to=place.ChIJ05ll0M-dvTMReLTDpkKEvsw" target="_blank" rel="noopener noreferrer">Waze</a>
                                <a href="https://maps.app.goo.gl/zq46HwGTNAFs4tTE8" target="_blank" rel="noopener noreferrer">Google Maps</a>
                            </div>
                        </motion.div>
                    </div>
                    <motion.img className='drivePath' src={drivePath} style={{width: '45%'}}></motion.img>
                </div>
            </div>

            {/* Schedule of Events */}
            <motion.div id='schedule' className='schedPage'>
                <img src={scheduleText} style={{width: '30%'}}></img>
                <motion.div className='schedRow'>
                    <motion.img 
                        src={ceremonySched} class="img-fluid" alt="..."
                        initial={{opacity: 0}}
                        whileInView={{
                            opacity: 1, 
                            transition: {duration: .4}
                        }}
                        viewport={{once: true, amount: 'all'}}
                    >
                    </ motion.img>
                    <motion.img 
                        src={cocktailsSched} class="img-fluid" alt="..."
                        initial={{opacity: 0}}
                        whileInView={{
                            opacity: 1, 
                            transition: {duration: .4, delay: 0.2}
                        }}
                        viewport={{once: true, amount: 'all'}}
                    >
                    </motion.img>
                    <motion.img 
                        src={receptionSched} class="img-fluid" alt="..."
                        initial={{opacity: 0}}
                        whileInView={{
                            opacity: 1, 
                            transition: {duration: .4, delay: 0.4}
                        }}
                        viewport={{once: true, amount: 'all'}}
                    >    
                    </motion.img>
                    <motion.img 
                        src={drinksSched} class="img-fluid" alt="..."
                        initial={{opacity: 0}}
                        whileInView={{
                            opacity: 1, 
                            transition: {duration: .4, delay: 0.6}
                        }}
                        viewport={{once: true, amount: 'all'}}
                    >
                    </motion.img>
                </motion.div>
            </motion.div>

            {/* Attire Details */}
            <div className="attirePage" id='attire'>
                <motion.h1 style={{color: '#0047BB'}}>what to wear</motion.h1>
                <div className="attireRow">
                    <div className="attireClass">
                        <img src={groomsmen} />
                        <motion.div 
                            className='attireDescription'
                            initial={{opacity: 0}}
                            whileInView={{
                                opacity: 1, 
                                transition: {duration: .4}
                            }}
                            viewport={{once: true, amount: 'all'}}
                        >
                            <h2 className="subHeading" style={{color: '#0047BB', margin: '0'}}>FOR THE GENTLEMEN:</h2>
                            <a style={{color: '#0047BB', margin: '0'}}>Barong Tagalog</a>
                            <p style={{color: '#0047BB'}}>Bring out the best and fanciest Barong out of your closet! Please wear a traditional Barong with that classic beige/cream color, slacks, and leather shoes.</p>
                        </motion.div>
                    </div>
                </div>
                <div className="attireRow">
                    <div className="attireClass">
                        <img src={bridesmaids} />
                        <motion.div 
                            className='attireDescription'
                            initial={{opacity: 0}}
                            whileInView={{
                                opacity: 1, 
                                transition: {duration: .4}
                            }}
                            viewport={{once: true, amount: 'all'}}
                        >
                            <h2 className="subHeading" style={{color: '#9A0051', margin: '0'}}>FOR THE LADIES:</h2>
                            <a style={{color: '#9A0051', margin: '0'}}>Formal Dress</a>
                            <p style={{color: '#9A0051'}}>We hope you like color! Ladies, please wear your most colorful formal dress. Don’t be afraid to be bold with your outfit, we’d love to see as much color as we can at our big day!</p>
                        </motion.div>
                    </div>
                </div>
                <motion.div 
                    className='attireNote'
                    initial={{opacity: 0}}
                    whileInView={{
                        opacity: 1, 
                        transition: {duration: .4}
                    }}
                    viewport={{once: true, amount: 'all'}}
                >
                    <h3 style={{color: '#FBF6EE'}}>take note!</h3>
                    <p style={{color: '#FBF6EE', fontSize: '1.25em'}}>because color is a big part and theme of our wedding, we would like to kindly ask our guests to refrain from wearing black and white.</p>
                </motion.div>
            </div>

            <motion.img src={scallop} style={{marginTop: '-25px', width: '100%'}}>
            </motion.img>

            {/* FAQ Segment */}
            <div className="faqPage" id='faq'>
                <h1 className="heading" style={{color: '#0047BB'}}>FAQs</h1>
                <motion.div 
                    class="accordion accordion-flush" 
                    id="accordionFlushExample"
                    initial={{opacity: 0}}
                    whileInView={{
                        opacity: 1, 
                        transition: {duration: .4, delay: .5}
                    }}
                    viewport={{once: true, amount: 'some'}}
                >
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            When and where is the wedding?
                        </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class='accordion-body'>The date of the wedding is March 8, 2025. The ceremony will be at the Chapel on the Hill in Batulao, Batangas, while the reception will be held at Arrocaria in Alfonso, Cavite</div>
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
                </motion.div>
            </div>

            <motion.img src={scallop} style={{marginTop: '-25px', width: '100%'}}>
            </motion.img>

            {/* This div contains the RSVP form segment */}
            <motion.div
            id='rsvp'
            className="rsvpPage"
            >
                <motion.h1 style={{color: '#FBF6EE'}}>RSVP</motion.h1>
                <motion.section 
                    className="rsvpForm"
                    initial={{opacity: 0}}
                    whileInView={{
                    opacity: 1, 
                    transition: {duration: .4}}}
                    viewport={{once: true, amount: 'some'}}>
                    <form method='post' ref={formRef} onSubmit={handleSubmit} id='rsvp-form'>
                        <div class='row mb-10 form-part'>
                            <div class='col'>
                                <p>NUMBER OF GUESTS</p>
                                <select 
                                    class="form-select form-select-sm" 
                                    aria-label="small select example"
                                    name='pax' 
                                    id='pax' 
                                    required
                                    onChange={guestDropdownChange}>
                                    <option selected value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                </select>
                            </div>
                        </div>

                        {Array.from({ length: guests}).map((_, index) => (
                            <div class='row mb-10 form-part'>
                                <div class='col-lg-6'>
                                    <div class='col-lg-12 mb-2 rsvp-item'>
                                        <label for={index == 0? "main-guest" : "guest-name" + String(index)}>{index == 0? "MAIN GUEST:" : "GUEST " + String(index) + ":"}</label>
                                        <input class='rsvp-input' type='text' name={index == 0? "main-guest" : "guest-name" + String(index)} id={index == 0? "main-guest" : "guest-name" + String(index)} placeholder='Last name, First name'required/>
                                    </div>
                                </div>
                                <div class='col-log-6'>
                                </div>

                                
                                <div class='col-lg-6'>
                                    <p>CHOOSE YOUR MAIN:</p>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name={"main" + String(index+1)} value="beef" id="check-beef" checked required/>
                                        <label class="form-check-label" for="check-beef">
                                            Beef
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name={"main" + String(index+1)} id="check-fish" />
                                        <label class="form-check-label" for="check-fish">
                                            Fish
                                        </label>
                                    </div>
                                </div>
                                
                                <div class='col-lg-6'>
                                    <p>FOOD ALLERGIES:</p>
                                    <textarea rows='3' name={"allergies" + String(index+1)} id="allergies" placeholder=' Allergies'/>
                                </div>
                            </div>
                        ))}

                        <div class='row g-3 mb-3 rsvp-item'>
                            <label for="song-request">DJ, PLEASE PLAY THIS SONG FOR ME:</label>
                            <input class='rsvp-input' type='text' name='song-request' id="song-request" placeholder='Song name/Spotify link' required/>
                        </div>
                        
                        <div class='d-flex justify-content-center'>
                            <button type='submit' value={loading ? "Loading..." : "SEND MESSAGE"} disabled={loading}>
                                {loading ? 'SENDING...' : 'SUBMIT'}
                            </button>
                        </div>
                    </form>
                </motion.section>

                <div style={{marginTop: '3em', maxWidth: '80%'}}>
                    <p style={{textAlign: 'center'}}>if you find yourself pregnant or being married 100 days before or after the wedding, please do inform us by messaging Thrysha through her <a href="https://www.facebook.com/reyesthrysha">Facebook</a></p>
                </div>
            </motion.div>

            <div class="modal fade" id="confirmationModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">RSVP confirmed</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        thank you for your RSVP!
                        see you on March 8, 2025
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                close
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <motion.div className='photoGallery' id='photos'>
                <h1 style={{color: '#0047BB'}}>prenup photos otw!</h1>
            </motion.div>
            
            <img src={footerScallop} style={{marginBottom: '-3rem', width: '100%'}}/>
            <div className='footer'>
                <motion.h3 
                    style={{color: '#FBF6EE', marginBottom: '.5rem'}}
                    initial={{opacity: 0}}
                    whileInView={{
                        opacity: 1, 
                        transition: {duration: .4}
                    }}
                    viewport={{once: true, amount: 'all'}}
                >
                    baby come back!
                </motion.h3>
                <motion.p 
                    style={{fontSize: '1.5rem', color: '#FBF6EE', textAlign: 'center'}}
                    initial={{opacity: 0}}
                    whileInView={{
                        opacity: 1, 
                        transition: {duration: .4, delay: .5}
                    }}
                    viewport={{once: true, amount: 'all'}}
                >
                    feel free to check in to this website again to view all the photos from the event
                </motion.p>
            </div>
        </div>
    </>
  )
};

export default ProtectedPage;
