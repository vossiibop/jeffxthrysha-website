// ProtectedPage.js
import React from 'react';
import { useState, useRef } from "react"
import { motion, useInView } from 'motion/react';
import "../styles.css"

import names from '../assets/NamesWhite.png'
import bridesmaids from "../assets/Bridesmaid.svg"
import groomsmen from "../assets/Groomsmen.svg"
import scallop from "../assets/Scallop2.png"
import footerScallop from "../assets/FooterScallop.png"
import ceremonySched from "../assets/Ceremony.png"
import cocktailsSched from "../assets/Cocktails.png"
import drinksSched from "../assets/Drinks.png"
import receptionSched from "../assets/Reception.png"
import chapel from "../assets/ChapelColored.svg"
import entourage from "../assets/EntourageColored.png"
import drivePath from "../assets/DrivePath.svg"
import scheduleText from "../assets/schedEvents.svg"
import landingBG from "../assets/LandingBG.svg"
import QR from "../assets/BDO_QR.svg"
import gcashLogo from "../assets/banco-de-oro-bdo-seeklogo.png"

// import prenup from "../assets/Prenups/IMG_0831.webp"
// import { 
//     prenup1, prenup2, prenup3,
//     prenup4, prenup5, prenup6,
//     prenup7, prenup8, prenup9,
//     prenup10, prenup11, prenup12,
//     prenup13, prenup14, prenup15,
//     prenup16, prenup17, prenup18,
//     prenup19, prenup20, prenup21,
//     prenup22, prenup23, prenup24,
//     prenup25, prenup26
// } from '../assets/Prenups/index.js'

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
                    class="navbar navbar-expand-lg navbar-dark bg-transparent custom-nav m-2"
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
                                <button type="button" class="btn-close btn-close-white shadow-none p" data-bs-dismiss="offcanvas" aria-label="Close"></button>
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
                        id='landingNames'
                        src={names}
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

        <div style={{width: '100%'}}>
            <motion.img src={scallop} id='landingScallop' className='scallop'>
            </motion.img>
        </div>
        
        {/* This div contains the main body of the website */}
        <div className="mainPage">
            {/* Wedding Details */}
            <div className="detailsPage" id='details'>
                <motion.h1 style={{color: '#0047bb', marginBottom: '1em'}}>details for the big day!</motion.h1>
                <div className='detailsRow'>
                    <div className='locationColumn'>
                        <motion.div 
                            className="locationDetails"
                            id="ceremony"
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
                <img id='scheduleText' src={scheduleText} style={{width: '30%'}}></img>
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

            {/* <div className="giftsPage" id='gift'>
                <motion.h1 style={{color: '#0047BB'}}>gifts</motion.h1>
                <motion.p style={{color: '#9A0051'}}>we appreciate your contribution to our new home.</motion.p>
                
            </div> */}

            <div style={{width: '100%'}}>
                <motion.img src={scallop} style={{marginTop: '-25px'}} className='scallop'>
                </motion.img>
            </div>

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
                            <div class='accordion-body'>
                                Wedding is on March 8, 2025.
                                Ceremony will be held at Chapel on the Hill Don Bosco, Batulao and Reception to follow at Arocarria Alfonso, Cavite.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            What is the dress code?
                        </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                Let’s make the day pop with color - skip the black and white, and join us in something that’s vibrant, colorful, and full of life!
                                We kindly request that all guests come in strictly formal attire - no wearing of t-shirts, denim, slippers and sports shoes please! Barong and pants for the Gentlemen, Formal dresses for the Ladies. 
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Are children invited?
                        </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                As much as we love your little ones, our wedding is exclusively for adults, with the exception of immediate family who are part of the wedding party.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            When is the RSVP deadline?
                        </button>
                        </h2>
                        <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                To help us with our planning, please RSVP to the event as soon as possible. However, the deadline is on February 8, 2025. If we don’t receive your RSVP by this date, we cannot make exceptions and will have to mark you as “no”. We need to provide the venue with a total guest count in a timely manner, we hope you can understand.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                            How do I RSVP?
                        </button>
                        </h2>
                        <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                You can find the RSVP at the bottom of this website.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                            Is there a wedding registry?
                        </button>
                        </h2>
                        <div id="flush-collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body" id='accordion-registry'>
                                Your presence is the greatest gift to us. However, if you'd like to honor us with something more, we would greatly appreciate a monetary contribution as we start our new journey together.
                                <motion.div id='gcashQR'>
                                    <motion.img 
                                        src={gcashLogo} 
                                        id='gcashLogo'
                                        initial={{opacity: 0}}
                                        whileInView={{
                                            opacity: 1, 
                                            transition: {duration: .4}
                                        }}
                                        viewport={{once: true, amount: 'all'}}></motion.img>
                                    <motion.img 
                                        src={QR} 
                                        id='qrCode'
                                        initial={{opacity: 0}}
                                        whileInView={{
                                            opacity: 1, 
                                            transition: {duration: .4}
                                        }}
                                        viewport={{once: true, amount: 'all'}}></motion.img>
                                    <motion.a><span style={{color: '#0047BB'}}>Thrysha Angelica Reyes | </span><span style={{color: '#9A0051'}}>004390090804</span></motion.a>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
                                What should I do if I have dietary restrictions?
                            </button>
                        </h2>
                        <div id="flush-collapseNine" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                Please let us know about any dietary restrictions when you RSVP, and we will do our best to accommodate them.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
                                Can I bring a plus-one?
                            </button>
                        </h2>
                        <div id="flush-collapseTen" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                Due to limited space, we are only able to accommodate those guests formally invited on our wedding invitation. Thank you for your understanding and feel free to reach out with any questions.
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div style={{width: '100%'}}>
                <motion.img src={scallop} className='scallop' id='rsvpScallop'>
                </motion.img>
            </div>

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
                    <p style={{textAlign: 'center'}}>if you find yourself pregnant or getting married 100 days before or after the wedding, please inform us by messaging Thrysha or Jeff via Facebook.</p>
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

            <motion.div style={{ color:"#000000" }} className='photoGallery' id='photos'>
                <h1 style={{color: '#0047BB'}}>prenup photos coming soon!</h1>
                {/* <div id="carouselGallery" class="carousel slide carousel-dark">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="row"> 
                                <div class="col-4 gallery-photo"> 
                                    <img src={prenup1} class="d-block w-100" alt="Image 1"/> 
                                </div> 
                                <div class="col-4 gallery-photo"> 
                                    <img src={prenup2} class="d-block w-100" alt="Image 2" /> 
                                </div> 
                                <div class="col-4 gallery-photo"> 
                                    <img src={prenup3} class="d-block w-100" alt="Image 3" /> 
                                </div> 
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row"> 
                                <div class="col-4 gallery-photo"> 
                                    <img src={prenup4} loading='lazy' class="d-block w-100" alt="Image 4"/> 
                                </div> 
                                <div class="col-4 gallery-photo"> 
                                    <img src={prenup5} loading='lazy' class="d-block w-100" alt="Image 5" /> 
                                </div> 
                                <div class="col-4 gallery-photo"> 
                                    <img src={prenup6} loading='lazy' class="d-block w-100" alt="Image 6" /> 
                                </div> 
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row"> 
                                <div class="col-4 gallery-photo"> 
                                    <img src={prenup7} loading='lazy' class="d-block w-100" alt="Image 7"/> 
                                </div> 
                                <div class="col-4 gallery-photo"> 
                                    <img src={prenup8} loading='lazy' class="d-block w-100" alt="Image 8" /> 
                                </div> 
                                <div class="col-4 gallery-photo"> 
                                    <img src={prenup9} loading='lazy' class="d-block w-100" alt="Image 9" /> 
                                </div> 
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row"> 
                                <div class="col-4 gallery-photo"> 
                                    <img src={prenup10} loading='lazy' class="d-block w-100" alt="Image 7"/> 
                                </div> 
                                <div class="col-4 gallery-photo"> 
                                    <img src={prenup11} loading='lazy' class="d-block w-100" alt="Image 8" /> 
                                </div> 
                                <div class="col-4 gallery-photo"> 
                                    <img src={prenup12} loading='lazy' class="d-block w-100" alt="Image 9" /> 
                                </div> 
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row"> 
                                <div class="col-4 gallery-photo"> 
                                    <img src={prenup13} loading='lazy' class="d-block w-100" alt="Image 7"/> 
                                </div> 
                                <div class="col-4 gallery-photo"> 
                                    <img src={prenup14} loading='lazy' class="d-block w-100" alt="Image 8" /> 
                                </div> 
                                <div class="col-4 gallery-photo"> 
                                    <img src={prenup15} loading='lazy' class="d-block w-100" alt="Image 9" /> 
                                </div> 
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row"> 
                                <div class="col-4 gallery-photo"> 
                                    <img src={prenup16} loading='lazy' class="d-block w-100" alt="Image 7"/> 
                                </div> 
                                <div class="col-4 gallery-photo"> 
                                    <img src={prenup17} loading='lazy' class="d-block w-100" alt="Image 8" /> 
                                </div> 
                                <div class="col-4 gallery-photo"> 
                                    <img src={prenup18} loading='lazy' class="d-block w-100" alt="Image 9" /> 
                                </div> 
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row"> 
                                <div class="col-4 gallery-photo"> 
                                    <img src={prenup19} loading='lazy' class="d-block w-100" alt="Image 7"/> 
                                </div> 
                                <div class="col-4 gallery-photo"> 
                                    <img src={prenup20} loading='lazy' class="d-block w-100" alt="Image 8" /> 
                                </div> 
                                <div class="col-4 gallery-photo"> 
                                    <img src={prenup21} loading='lazy' class="d-block w-100" alt="Image 9" /> 
                                </div> 
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row"> 
                                <div class="col-4 gallery-photo"> 
                                    <img src={prenup22} loading='lazy' class="d-block w-100" alt="Image 7"/> 
                                </div> 
                                <div class="col-4 gallery-photo"> 
                                    <img src={prenup23} loading='lazy' class="d-block w-100" alt="Image 8" /> 
                                </div> 
                                <div class="col-4 gallery-photo"> 
                                    <img src={prenup24} loading='lazy' class="d-block w-100" alt="Image 9" /> 
                                </div> 
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row"> 
                                <div class="col-4 gallery-photo"> 
                                    <img src={prenup25} loading='lazy' class="d-block w-100" alt="Image 7"/> 
                                </div> 
                                <div class="col-4 gallery-photo"> 
                                    <img src={prenup26} loading='lazy' class="d-block w-100" alt="Image 8" /> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselGallery" data-bs-slide="prev">
                        <span className='carouselArrows'>&lt;</span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselGallery" data-bs-slide="next">
                        <span className='carouselArrows'>&gt;</span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div> */}
            </motion.div>
            

            <div style={{width: '100%'}}>
                <img src={footerScallop} className='scallop' id='footerScallop'/>
            </div>

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
