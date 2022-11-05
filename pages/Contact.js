import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Head from 'next/head';
import 'react-toastify/dist/ReactToastify.css';

import { FaPhoneAlt, FaFacebookMessenger, FaClock, FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { GoLocation } from "react-icons/go";

export default function Contact() {

    const formSubmit = (e) => {
        e.preventDefault();

        const formInfo = {
            "Name": e.target[0].value,
            "Email": e.target[1].value,
            "Message": e.target[2].value,
            "Combo": e.target[3].checked,
            "Full Interior With Extraction": e.target[4].checked,
            "Full Interior Without Extraction": e.target[5].checked,
            "Biohazard Cleaning": e.target[6].checked,
            "Headliners": e.target[7].checked,
            "Dirt-Less Wash": e.target[8].checked,
            "Premium Dirt-LessWash": e.target[9].checked,
            "Engine Bay": e.target[10].checked,
            "Glass Polishing (Exterior Addon)": e.target[11].checked,
            "Waterspot Removal (Exterior Addon)": e.target[12].checked,
            "Single Stage Paint Correction": e.target[13].checked,
            "Two Stage Paint Correction": e.target[14].checked,
            "Glass Polishing (Correction Addon)": e.target[15].checked,
        }
        const formData = new FormData();

        Object.entries(formInfo).forEach(([key, value]) => {
            if (key === "Name" || key === "Email" || key === "Message") {
                formData.append(key, value);
            } else if (value === true) {
                formData.append(key, value);
            }
        });
        
        fetch("https://getform.io/f/10015c2d-db32-409b-884d-54c141a3b141", {
          method: "POST",
          body: formData
        }).then((test) => {
            toast.success("Form submitted! Expect an email reply soon!", {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            })
            e.target.reset()
        })
        .catch(error => {
            toast.error("An error occurred, please try again." + error, {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            })
        });
    };

  return (
    <section className="contact-container" id="contact">
        <Head>
            <title>Dirt-Less Detailing | Contact</title>
            <meta name="description" content="Contact us to ask questions or set up an appointment here!" />
        </Head>
        {/* <div className='contact-container-left'>
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

            <h2>Location</h2>
            <div className='contact-icon-container'>
                <GoLocation className='contact-icon' />
                <a href="https://www.google.com/maps/place/9305+205th+Ave+E,+Bonney+Lake,+WA+98391/@47.172835,-122.1589741,17z/data=!3m1!4b1!4m5!3m4!1s0x5490faeb8aa2e3d7:0xe53c2e7cb4aa7549!8m2!3d47.1728314!4d-122.1567854" className="contact-link location-link" target="_blank" rel='noreferrer'>9305 205th Ave E Bonney Lake Washington</a>
            </div>
        </div> */}

        <div className='contact-container-right'>
            <form className="form" onSubmit={(e) => formSubmit(e)}>
                <div className="form-section form-top-section">
                    <label htmlFor="name" className='text-input-label'>Name</label><br />
                    <input type="text" id="name" name="Name" className='text-input' required /><br />
                    <label htmlFor="email" className='text-input-label'>Email</label><br />
                    <input type="text" id="email" name="Email" className='text-input' required /><br />

                    <label htmlFor="message" className='input-label'>Additional Details</label><br />
                    <textarea type="textarea" name="message" className='textarea-input' placeholder='Do you want mobile service or a drop off? Do you have any other questions/concerns?' />
                </div>

                <div className="form-section">
                    <p className='form-section-heading'>Combos:</p>
                    <div>
                        <input type="checkbox" name="combo" id='combo' className='checkbox-input' />
                        <label htmlFor="combo" className='checkbox-label'>Full Interior and Exterior Combo</label><br />
                    </div>
                </div>

                <div className="form-section">
                    <p className='form-section-heading'>Interior Cleaning:</p>
                    <div>
                        <input type="checkbox" id='fullIntEx' name="fullIntEx" className='checkbox-input' />
                        <label htmlFor="fullIntEx" className='checkbox-label'>Full Interior With Extraction</label><br />

                        <input type="checkbox" id='fullInterior' name="fullInterior" className='checkbox-input' />
                        <label htmlFor="fullInterior" className='checkbox-label'>Full Interior Without Extraction</label><br />

                        <input type="checkbox" id='bio' name="bio" className='checkbox-input' />
                        <label htmlFor="bio" className='checkbox-label'>Biohazard Cleaning</label><br />

                        <input type="checkbox" id='headliners' name="headliners" className='checkbox-input' />
                        <label htmlFor="headliners" className='checkbox-label'>Headliners</label><br />
                    </div>

                    <p className="form-section-heading">Interior Addons:</p>
                    <div>
                        <input type="checkbox" id='ozone' name="ozone" className='checkbox-input' />
                        <label htmlFor="ozone" className='checkbox-label'>Ozone Treatment</label><br />
                    </div>
                </div>

                <div className="form-section">
                    <p className='form-section-heading'>Exterior Cleaning:</p>
                    <div>
                        <input type="checkbox" id='dirtlessWash' name="dirtlessWash" className='checkbox-input' />
                        <label htmlFor="dirtlessWash" className='checkbox-label'>Dirt-Less Wash</label><br />

                        <input type="checkbox" id='premium dirtlessWash' name="premium dirtlessWash" className='checkbox-input' />
                        <label htmlFor="premium dirtlessWash" className='checkbox-label'>Premium Dirt-Less Wash</label><br />

                        <input type="checkbox" id='engine' name="engine" className='checkbox-input' />
                        <label htmlFor="engine" className='checkbox-label' style={{marginBottom: 16}}>Engine Bay</label><br />
                    </div>

                    <p className="form-section-heading">Exterior Addons:</p>
                    <div>
                        <input type="checkbox" id='glass' name="glass" className='checkbox-input' />
                        <label htmlFor="glass" className='checkbox-label'>Glass Polishing</label><br />

                        <input type="checkbox" id='waterspot' name="waterspot" className='checkbox-input' />
                        <label htmlFor="waterspot" className='checkbox-label'>Waterspot/Overspray Removal</label><br />
                    </div>
                </div>

                <div className="form-section">
                    <p className='form-section-heading'>Paint Correction:</p>
                    <div>
                        <input type="checkbox" id='singlePC' name="singlePC" className='checkbox-input' />
                        <label htmlFor="singlePC" className='checkbox-label'>Single Stage Paint Correction</label><br />

                        <input type="checkbox" id='twoPC' name="twoPC" className='checkbox-input' />
                        <label htmlFor="twoPC" className='checkbox-label' style={{marginBottom: 16}}>Two Stage Paint Correction</label><br />
                    </div>

                    <p className="form-section-heading">Paint Correction Addons:</p>
                    <div>
                        <input type="checkbox" id='correctionGlass' name="correctionGlass" className='checkbox-input' />
                        <label htmlFor="correctionGlass" className='checkbox-label'>Glass Polishing</label>
                    </div>
                </div>

                <button className='popular-readmore'>Submit</button>

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
