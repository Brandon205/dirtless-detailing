import React, { useState, useEffect } from 'react';
import submit from './submit.js';
import '../../App.css';

import { FaPhoneAlt, FaFacebookMessenger, FaClock, FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { GoLocation } from "react-icons/go";

export default function Contact() {
    const [showForm, setShowForm] = useState(false);
    const [wideScreen, setWideScreen] = useState(false); // Using for the auto expanded form if screen is wide enough

    useEffect(() => {
        if (window.innerWidth > 879) {
            setWideScreen(true);
            setShowForm(true);
        }
    }, [])

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

                    <form action="#" className="form" onSubmit={(e) => submit(e)}>
                        <label htmlFor="name" className='input-label'>Name</label><br />
                        <input type="text" id="name" name="name" className='text-input' required /><br />
                        <label htmlFor="email" className='input-label'>Email</label><br />
                        <input type="text" id="email" name="email" className='text-input' required /><br />

                        <span onClick={() => setShowForm(!showForm)} style={{cursor: 'pointer', display: wideScreen ? 'none' : 'block'}}>{showForm ? <FaCaretUp /> : <FaCaretDown />} {showForm ? 'Hide' : 'Show'} the rest of the form {showForm ? <FaCaretUp /> : <FaCaretDown />}</span>

                        <span style={{display: showForm ? 'block' : 'none'}}>
                            <label htmlFor="message" className='input-label'>Additional Details</label><br />
                            <textarea type="textarea" id="message" name="message" className='textarea-input' placeholder='Do you want mobile service or a drop off? Do you have any other questions/concerns?' />

                            <h5 style={{marginBottom: 4}}>Combos:</h5>
                            <input type="checkbox" name="Combo" value="Combo" className='checkbox-input' />
                            <label htmlFor="Combo" className='input-label'>Full Interior and Exterior Combo</label><br />

                            <h5 style={{marginBottom: 4}}>Interior Cleaning:</h5>
                            <input type="checkbox" name="FullInt" value="FullInt" className='checkbox-input' />
                            <label htmlFor="FullInt" className='input-label'>Full Interior With Extraction</label><br />
                            <input type="checkbox" name="Bio" value="Bio" className='checkbox-input' />
                            <label htmlFor="Bio" className='input-label'>Biohazard Cleaning</label><br />
                            <input type="checkbox" name="Headliners" value="Headliners" />
                            <label htmlFor="Headliners" className='input-label'>Headliners</label><br />

                            <h5 style={{marginBottom: 4}}>Exterior Cleaning:</h5>
                            <input type="checkbox" name="DLWash" value="DLWash" className='checkbox-input' />
                            <label htmlFor="DLWash" className='input-label'>Dirt-Less Wash</label><br />
                            <input type="checkbox" name="PDLWash" value="PDLWash" className='checkbox-input' />
                            <label htmlFor="PDLWash" className='input-label'>Premium Dirt-Less Wash</label><br />
                            <input type="checkbox" name="Engine" value="Engine" />
                            <label htmlFor="Engine" className='input-label' style={{marginBottom: 16}}>Engine Bay</label><br />

                            <h6 className="form-subheading">Exterior Addons:</h6>
                            <input type="checkbox" name="Glass" value="Glass" />
                            <label htmlFor="Glass" className='input-label' style={{marginBottom: 16}}>Glass Polishing</label><br />
                            <input type="checkbox" name="Waterspot" value="Waterspot" />
                            <label htmlFor="Waterspot" className='input-label' style={{marginBottom: 16}}>Waterspot/Overspray Removal</label><br />

                            <h5 style={{marginBottom: 4}}>Paint Correction:</h5>
                            <input type="checkbox" name="SinglePC" value="SinglePC" className='checkbox-input' />
                            <label htmlFor="SinglePC" className='input-label'>Single Stage Paint Correction</label><br />
                            <input type="checkbox" name="TwoPC" value="TwoPC" />
                            <label htmlFor="TwoPC" className='input-label' style={{marginBottom: 16}}>Two Stage Paint Correction</label><br />

                            <h6 className="form-subheading">Paint Correction Addons:</h6>
                            <input type="checkbox" name="Glass" value="Glass" className='checkbox-input' />
                            <label htmlFor="Glass" className='input-label'>Glass Polishing</label><br style={{marginBottom: 16}} />

                            <button className='popular-readmore'>Submit</button>
                        </span>

                    </form>
                </div>
            </section>
  )
}
