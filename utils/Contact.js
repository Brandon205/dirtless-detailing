import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FaPhoneAlt, FaFacebookMessenger, FaClock, FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { GoLocation } from "react-icons/go";

export default function Contact() {
    const [showForm, setShowForm] = useState(false);
    const [wideScreen, setWideScreen] = useState(false); // Using for the auto expanded form if screen is wide enough
    
    const form = useRef();

    useEffect(() => {
        if (window.innerWidth > 879) {
            setWideScreen(true);
            setShowForm(true);
        }
    }, [])

    let submit = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'dirtless-detailing', e.target, '')
          .then((result) => {
            toast.success("Form submitted! Expect an email reply soon!", {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            })
            e.target.reset();
          }, (error) => {
            toast.success("An error occurred, please try again.", {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            })
        });
    } 


  return (
    <section className="contact-container" id="contact">
                <div className='contact-container-left'>
                    <h2>CONTACT US</h2>
                    <div className='contact-icon-container'>
                        <FaPhoneAlt className='contact-icon' />
                        <a href="tel:2532529758" target="_blank" rel="noreferrer">(253) 252-9758</a>
                    </div>
                    <div className='contact-icon-container'>
                        <FaFacebookMessenger className='contact-icon' />
                        <a href="https://www.facebook.com/DirtLessDetailing/" target="_blank" rel="noreferrer">Facebook Messenger</a>
                    </div>

                    <h2>WORKING HOURS</h2>
                    <div className="contact-icon-container">
                        <FaClock className='contact-icon' />
                        <p className="hours-p">Monday - Sunday:<br />8 AM - 8 PM</p>
                    </div>

                    <div className='contact-icon-container'>
                        <GoLocation className='contact-icon' />
                        <a href="https://www.google.com/maps/place/9305+205th+Ave+E,+Bonney+Lake,+WA+98391/@47.172835,-122.1589741,17z/data=!3m1!4b1!4m5!3m4!1s0x5490faeb8aa2e3d7:0xe53c2e7cb4aa7549!8m2!3d47.1728314!4d-122.1567854" className="contact-link location-link" target="_blank" rel='noreferrer'>9305 205th Ave E Bonney Lake Washington</a>
                    </div>
                </div>

                <div className='contact-container-right'>
                    <h2>Get In Touch</h2>
                    <a href="tel:2532529758" target="_blank" rel="noreferrer">(253) 252-9758</a>

                    <form action="#" ref={form} className="form" onSubmit={(e) => submit(e)}>
                        <label htmlFor="name" className='input-label'>Name</label><br />
                        <input type="text" id="name" name="name" className='text-input' required /><br />
                        <label htmlFor="email" className='input-label'>Email</label><br />
                        <input type="text" id="email" name="email" className='text-input' required /><br />

                        <span onClick={() => setShowForm(!showForm)} style={{cursor: 'pointer', display: wideScreen ? 'none' : 'block'}}>{showForm ? <FaCaretUp /> : <FaCaretDown />} {showForm ? 'Hide' : 'Show'} the rest of the form {showForm ? <FaCaretUp /> : <FaCaretDown />}</span>

                        <span style={{display: showForm ? 'block' : 'none'}}>
                            <label htmlFor="message" className='input-label'>Additional Details</label><br />
                            <textarea type="textarea" id="message" name="message" className='textarea-input' placeholder='Do you want mobile service or a drop off? Do you have any other questions/concerns?' />

                            <h4 style={{marginBottom: 4}}>Combos:</h4>
                            <input type="checkbox" name="combo" value="Full Interior and Exterior Combo" className='checkbox-input' />
                            <label htmlFor="Full Interior and Exterior Combo" className='input-label'>Full Interior and Exterior Combo</label><br />

                            <h4 style={{marginBottom: 4}}>Interior Cleaning:</h4>
                            <input type="checkbox" name="fullIntEx" value="Full Interior With Extraction" className='checkbox-input' />
                            <label htmlFor="fullIntEx" className='input-label'>Full Interior With Extraction</label><br />
                            <input type="checkbox" name="fullInt" value="Full Interior Without Extraction" className='checkbox-input' />
                            <label htmlFor="fullInt" className='input-label'>Full Interior Without Extraction</label><br />
                            <input type="checkbox" name="bio" value="Biohazard Cleaning" className='checkbox-input' />
                            <label htmlFor="bio" className='input-label'>Biohazard Cleaning</label><br />
                            <input type="checkbox" name="headliners" value="Headliners" className='checkbox-input' />
                            <label htmlFor="headliners" className='input-label'>Headliners</label><br />

                            <h4 style={{marginBottom: 4}}>Exterior Cleaning:</h4>
                            <input type="checkbox" name="dlWash" value="Dirt-Less Wash" className='checkbox-input' />
                            <label htmlFor="dlWash" className='input-label'>Dirt-Less Wash</label><br />
                            <input type="checkbox" name="pdlWash" value="Premium Dirt-Less Wash" className='checkbox-input' />
                            <label htmlFor="pdlWash" className='input-label'>Premium Dirt-Less Wash</label><br />
                            <input type="checkbox" name="engine" value="Engine Bay Cleaning" className='checkbox-input' />
                            <label htmlFor="engine" className='input-label' style={{marginBottom: 16}}>Engine Bay</label><br />

                            <h5 className="form-subheading">Exterior Addons:</h5>
                            <input type="checkbox" name="glass" value="Glass Polishing" className='checkbox-input' />
                            <label htmlFor="glass" className='input-label' style={{marginBottom: 16}}>Glass Polishing</label><br />
                            <input type="checkbox" name="waterspot" value="Waterspot/Overspray Removal" className='checkbox-input' />
                            <label htmlFor="waterspot" className='input-label' style={{marginBottom: 16}}>Waterspot/Overspray Removal</label><br />

                            <h4 style={{marginBottom: 4}}>Paint Correction:</h4>
                            <input type="checkbox" name="singlePC" value="Single Stage Paint Correction" className='checkbox-input' />
                            <label htmlFor="singlePC" className='input-label'>Single Stage Paint Correction</label><br />
                            <input type="checkbox" name="twoPC" value="Two Stage Paint Correction" className='checkbox-input' />
                            <label htmlFor="twoPC" className='input-label' style={{marginBottom: 16}}>Two Stage Paint Correction</label><br />

                            <h5 className="form-subheading">Paint Correction Addons:</h5>
                            <input type="checkbox" name="correctionGlass" value="Glass Polishing" className='checkbox-input' />
                            <label htmlFor="correctionGlass" className='input-label'>Glass Polishing</label><br style={{marginBottom: 16}} />

                            <button className='popular-readmore'>Submit</button>
                        </span>
                        <ToastContainer position="bottom-center"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                        />

                    </form>
                </div>
            </section>
  )
}
