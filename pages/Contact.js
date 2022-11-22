import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Head from 'next/head';
import 'react-toastify/dist/ReactToastify.css';

import { FaPhoneAlt, FaFacebookMessenger, FaClock } from 'react-icons/fa';
import { GoLocation } from "react-icons/go";
import { MdOutlineEmail } from 'react-icons/md';

export default function Contact() {

    const formSubmit = (e) => {
        e.preventDefault();

        const formInfo = {
            "Name": e.target[0].value,
            "Email": e.target[1].value,
            "Phone": e.target[2].value,
            "Year": e.target[3].value,
            "Make": e.target[4].value,
            "Model": e.target[5].value,
            "Message": e.target[6].value,
            "Protect Package": e.target[7].checked,
            "Protect+ Package": e.target[8].checked,
            "Fabric Coating": e.target[9].checked,
            "Leather Coating": e.target[10].checked,
            "Fabric re-coating": e.target[11].checked,
            "Trim re-coating": e.target[12].checked,
            "Leather re-coating": e.target[13].checked,
            "Wheel Faces re-coating": e.target[14].checked,
            "Combo": e.target[15].checked ? 'Yes': 'No',
            "Full Interior With Extraction": e.target[16].checked ? 'Yes': 'No',
            "Full Interior Without Extraction": e.target[17].checked ? 'Yes': 'No',
            "Biohazard Cleaning": e.target[18].checked ? 'Yes': 'No',
            "Headliners": e.target[19].checked ? 'Yes': 'No',
            "Ozone": e.target[20].checked ? 'Yes': 'No',
            "Dirtiness": e.target[21].value,
            "Dog Hair": e.target[22].value,
            "Dirt-Less Wash": e.target[23].checked ? 'Yes': 'No',
            "Premium Dirt-LessWash": e.target[24].checked ? 'Yes': 'No',
            "Engine Bay": e.target[25].checked ? 'Yes': 'No',
            "Glass Polishing (Exterior Add-on)": e.target[26].checked ? 'Yes': 'No',
            "Waterspot Removal (Exterior Add-on)": e.target[27].checked ? 'Yes': 'No',
            "Truck Bed Cleaning (Exterior Add-on)": e.target[28].checked ? 'Yes': 'No',
            "Debadging (Exterior Add-on)": e.target[29].checked ? 'Yes': 'No',
            "Single Stage Paint Correction": e.target[30].checked ? 'Yes': 'No',
            "Two Stage Paint Correction": e.target[31].checked ? 'Yes': 'No',
            "Glass Polishing (Correction Add-on)": e.target[32].checked ? 'Yes': 'No'
        }
        const formData = new FormData();
        Object.entries(formInfo).forEach(([key, value]) => {
            if (key === "Name" || key === "Email" || key === "Message" || key === "Dirtiness" || key === "Dog Hair" || key === "Phone" || key === "Year" || key === "Make" || key === "Model") {
                formData.append(key, value);
            } else if (value === 'Yes') {
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
            window.scrollTo(0,0)
        }).catch(error => {
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
            <title>Dirt-Less Detailing | Contact Us</title>
            <meta property="og:description" content="Find out how to contact us here to ask any questions, or to set up an appointment!" />
            <link rel="canonical" href="https://www.dirtlessdetailing.com/Contact" />
        </Head>

        <div className="contact-information-container">
            <div className="contact-information">
                <h1>Contact Information</h1>
                <hr className="contact-border" />
                <h3 style={{marginBottom: 0}}>Need us to come to you?</h3>
                <p className="hours-p" style={{marginBottom: 0}}>We are currently servicing:</p>
                <p className="hours-p"><span style={{fontWeight: 'bold', color: '#9f9f9f'}}> Bonney Lake, Buckley, Sumner, Enumclaw, Puyallup, Federal Way, Orting, South Prairie, Black Diamond, Milton, Edgewood, and Graham.</span></p>
                <hr className="contact-border" />
                <div className="contact-icon-container">
                    <FaClock className='contact-icon' />
                    <p className="hours-p">Monday - Sunday: 7 AM - 7 PM</p>
                </div>
                <hr className="contact-border" />
                <div className='contact-icon-container'>
                    <GoLocation className='contact-icon' />
                    <a href="https://www.google.com/maps/place/9305+205th+Ave+E,+Bonney+Lake,+WA+98391/@47.172835,-122.1589741,17z/data=!3m1!4b1!4m5!3m4!1s0x5490faeb8aa2e3d7:0xe53c2e7cb4aa7549!8m2!3d47.1728314!4d-122.1567854" className="contact-link location-link" target="_blank" rel='noreferrer'>9305 205th Ave E Bonney Lake Washington</a>
                </div>
                <hr className="contact-border" />
                <div className='contact-icon-container'>
                    <FaFacebookMessenger className='contact-icon' />
                    <a href="https://www.facebook.com/DirtLessDetailing/" className="contact-link location-link" target="_blank" rel="noreferrer">Facebook Messenger</a>
                </div>
                <hr className="contact-border" />
                <div className='contact-icon-container'>
                    <FaPhoneAlt className='contact-icon' />
                    <div>
                        <a className='contact-link location-link' href="tel:2532529758" target="_blank" rel="noreferrer">(253) 252-9758</a><p style={{display: 'inline'}}> (Text or Call)</p>
                    </div>
                </div>
                <hr className="contact-border" />
                <div className='contact-icon-container'>
                    <MdOutlineEmail className='contact-icon' />
                    <div>
                        <a className='contact-link location-link' href="mailto:brenden@dirtlessdetailing.com?subject = Schedule a Dirt-Less Detail" target="_blank" rel="noreferrer">brenden@dirtlessdetailing.com</a>
                    </div>
                </div>
            </div>
        </div>

        <div className='contact-container-right'>
            <h2>Or Email us by filling out our form:</h2>
            <form className="form" onSubmit={(e) => formSubmit(e)}>
                <div className="form-section form-top-section">
                    <div>
                        <label htmlFor="name" className='text-input-label'>Name<span className='special-package'>*</span></label>
                        <input type="text" id="name" name="Name" className='text-input' placeholder="Name" required />
                        <label htmlFor="email" className='text-input-label'>Email<span className='special-package'>*</span></label>
                        <input type="email" id="email" name="Email" className='text-input' placeholder="Email" required />
                        <label htmlFor="phone" className='text-input-label'>Phone<span className='special-package'>*</span><small> (Ex: 111-123-4567)</small></label>
                        <input type="tel" id="phone" name="Phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className='text-input' placeholder="Phone Number" required />

                        <div className='select-field'>
                            <label htmlFor="year" className='text-input-label'>Year<span className='special-package'>*</span></label>
                            <select id="year" name="Year" className='text-input year-input' placeholder="Year" required>
                                <option>Year</option>
                                <option>2023</option>
                                <option>2022</option>
                                <option>2021</option>
                                <option>2020</option>
                                <option>2019</option>
                                <option>2018</option>
                                <option>2017</option>
                                <option>2016</option>
                                <option>2015</option>
                                <option>2014</option>
                                <option>2013</option>
                                <option>2012</option>
                                <option>2011</option>
                                <option>2010</option>
                                <option>2009</option>
                                <option>2008</option>
                                <option>2007</option>
                                <option>2006</option>
                                <option>2005</option>
                                <option>2004</option>
                                <option>2003</option>
                                <option>2002</option>
                                <option>2001</option>
                                <option>2000</option>
                                <option>1999</option>
                                <option>1998</option>
                                <option>1997</option>
                                <option>1996</option>
                                <option>1995</option>
                                <option>1994</option>
                                <option>1993</option>
                                <option>1992</option>
                                <option>1991</option>
                                <option>1990</option>
                                <option>1989</option>
                                <option>1988</option>
                                <option>1987</option>
                                <option>1986</option>
                                <option>1985</option>
                                <option>1984</option>
                                <option>1983</option>
                                <option>1982</option>
                                <option>1981</option>
                                <option>1980</option>
                                <option>1979</option>
                                <option>1978</option>
                                <option>1977</option>
                                <option>1976</option>
                                <option>1975</option>
                                <option>1974</option>
                                <option>1973</option>
                                <option>1972</option>
                                <option>1971</option>
                                <option>1970</option>
                                <option>1969</option>
                                <option>1968</option>
                                <option>1967</option>
                                <option>1966</option>
                                <option>1965</option>
                                <option>1964</option>
                                <option>1963</option>
                                <option>1962</option>
                                <option>1961</option>
                                <option>1960</option>
                            </select>
                        </div>
                        <div className='select-field'>
                            <label htmlFor="make" className='text-input-label'>Make<span className='special-package'>*</span></label>
                            <select id="make" name="Make" className='text-input make-input' placeholder="Make" required>
                                <option>Make</option>
                                <option>Acura</option>
                                <option>Airstream</option>
                                <option>Alfa Romeo</option>
                                <option>American Coach</option>
                                <option>Aston Martin</option>
                                <option>Audi</option>
                                <option>Autocar</option>
                                <option>Bentley</option>
                                <option>Blue Bird</option>
                                <option>BMW</option>
                                <option>Bugatti</option>
                                <option>Buick</option>
                                <option>Cadillac</option>
                                <option>Capacity</option>
                                <option>Chevrolet</option>
                                <option>Chrysler</option>
                                <option>Coach House</option>
                                <option>Coachmen</option>
                                <option>Crane Carrier</option>
                                <option>Dodge</option>
                                <option>Dynamax Corp</option>
                                <option>E-One</option>
                                <option>El Dorado</option>
                                <option>Entegra Coach</option>
                                <option>Ferrari</option>
                                <option>Fiat</option>
                                <option>Ford</option>
                                <option>Freightliner</option>
                                <option>Genesis</option>
                                <option>Gillig</option>
                                <option>GMC</option>
                                <option>Grande West</option>
                                <option>Hino</option>
                                <option>Honda</option>
                                <option>Hyundai</option>
                                <option>IC Co</option>
                                <option>Infiniti</option>
                                <option>International</option>
                                <option>Isuzu</option>
                                <option>Jaguar</option>
                                <option>Jeep</option>
                                <option>Kalmar</option>
                                <option>Karma</option>
                                <option>Kenworth</option>
                                <option>Kia</option>
                                <option>Lamborghini</option>
                                <option>Land Rover</option>
                                <option>Lexus</option>
                                <option>Lincoln</option>
                                <option>Lotus</option>
                                <option>Mack</option>
                                <option>Maserati</option>
                                <option>Mazda</option>
                                <option>MCI</option>
                                <option>McLaren</option>
                                <option>Mercedes Benz</option>
                                <option>Mini</option>
                                <option>Mitsubishi</option>
                                <option>New Flyer</option>
                                <option>Nissan/Datsun</option>
                                <option>Nova Bus</option>
                                <option>Peterbilt</option>
                                <option>Polestar</option>
                                <option>Porsche</option>
                                <option>Prevost</option>
                                <option>Rolls Royce</option>
                                <option>Rosenbauer Am</option>
                                <option>Spartan</option>
                                <option>Subaru</option>
                                <option>Temsa Bus</option>
                                <option>Terex</option>
                                <option>Tesla</option>
                                <option>Thomas Built</option>
                                <option>Tiffin</option>
                                <option>Toyota</option>
                                <option>Van Hool</option>
                                <option>Volkswagen</option>
                                <option>Volvo</option>
                                <option>Western Star</option>
                                <option>Winnebago</option>
                            </select>
                        </div>
                        <div className='select-field'>
                            <label htmlFor="model" className='text-input-label'>Model<span className='special-package'>*</span></label>
                            <input type="text" id="model" name="Model" className='text-input model-input' placeholder="Model" required />
                        </div>

                        <div style={{width: 100 + '%'}}>
                            <label htmlFor="message" className='text-input-label'>Additional Information:</label>
                            <textarea type="textarea" name="message" className='textarea' placeholder='Do you want our mobile service or to schedule a drop off? Do you have any other questions/concerns?' />
                        </div>
                    </div>
                </div>

                <div className="form-section">
                    <p className="form-section-heading">Exterior Ceramic Coatings:</p>
                    <div>
                        <input type="checkbox" name="protect" id='protect' className='checkbox-input' />
                        <label htmlFor="protect" className='checkbox-label'>Protect</label>

                        <input type="checkbox" name="protect+" id='protect+' className='checkbox-input' />
                        <label htmlFor="protect+" className='checkbox-label'>Protect<span className='special-package'>+</span></label>
                    </div>

                    <p className="form-section-heading">Interior Coatings:</p>
                    <div>
                        <input type="checkbox" name="fabric" id='fabric' className='checkbox-input' />
                        <label htmlFor="fabric" className='checkbox-label'>Fabric</label>

                        <input type="checkbox" name="leather" id='leather' className='checkbox-input' />
                        <label htmlFor="leather" className='checkbox-label'>Leather</label>
                    </div>

                    <p className="form-section-heading">Re-coating options:</p>
                    <div>
                        <input type="checkbox" name="fabric" id='fabric' className='checkbox-input' />
                        <label htmlFor="fabric" className='checkbox-label'>Fabric</label>

                        <input type="checkbox" name="fabric" id='fabric' className='checkbox-input' />
                        <label htmlFor="fabric" className='checkbox-label'>Trim</label>

                        <input type="checkbox" name="leather" id='leather' className='checkbox-input' />
                        <label htmlFor="leather" className='checkbox-label'>Leather</label>

                        <input type="checkbox" name="leather" id='leather' className='checkbox-input' />
                        <label htmlFor="leather" className='checkbox-label'>Wheel Faces</label>
                    </div>
                </div>

                <div className="form-section">
                    <p className='form-section-heading'>Combo Deal (Comes with FREE engine bay cleaning):</p>
                    <div>
                        <input type="checkbox" name="combo" id='combo' className='checkbox-input' />
                        <label htmlFor="combo" className='checkbox-label'>Full Interior and Exterior Combo</label>
                    </div>
                </div>

                <div className="form-section">
                    <p className='form-section-heading'>Interior Cleaning Services:</p>
                    <div>
                        <input type="checkbox" id='fullIntEx' name="fullIntEx" className='checkbox-input' />
                        <label htmlFor="fullIntEx" className='checkbox-label'>Full Interior With Extraction</label>

                        <input type="checkbox" id='fullInterior' name="fullInterior" className='checkbox-input' />
                        <label htmlFor="fullInterior" className='checkbox-label'>Full Interior Without Extraction</label>

                        <input type="checkbox" id='bio' name="bio" className='checkbox-input' />
                        <label htmlFor="bio" className='checkbox-label'>Biohazard Cleaning</label>
                    </div>

                    <p className="form-section-heading">Interior Add-ons:</p>
                        <div>
                            <input type="checkbox" id='headliners' name="headliners" className='checkbox-input' />
                            <label htmlFor="headliners" className='checkbox-label'>Headliners</label>
                            <input type="checkbox" id='ozone' name="ozone" className='checkbox-input' />
                            <label htmlFor="ozone" className='checkbox-label'>Ozone Treatment</label>
                        </div>

                    <p className="form-section-heading">Vehicle Dirtiness</p>
                    <input type="range" name="dirtiness" id="dirtiness" min="1" max="5" step="1" list="dirtiness-tickmarks" />
                    <datalist id="dirtiness-tickmarks">
                        <option value="1" label="Pretty Clean"></option>
                        <option value="2" label=""></option>
                        <option value="3" label=""></option>
                        <option value="4" label=""></option>
                        <option value="5" label="Very Dirty"></option>
                    </datalist>
                    <p className="form-section-heading">Dog Hair Amount</p>
                    <input type="range" name="dogHair" id="dogHair" min="1" max="5" step="1" list="hair-tickmarks" />
                    <datalist id="hair-tickmarks">
                        <option value="1" label="No Hair"></option>
                        <option value="2" label=""></option>
                        <option value="3" label=""></option>
                        <option value="4" label=""></option>
                        <option value="5" label="Lots of Hair"></option>
                    </datalist>
                </div>

                <div className="form-section">
                    <p className='form-section-heading'>Exterior Cleaning Services:</p>
                    <div>
                        <input type="checkbox" id='dirtlessWash' name="dirtlessWash" className='checkbox-input' />
                        <label htmlFor="dirtlessWash" className='checkbox-label'>Dirt-Less Wash</label>

                        <input type="checkbox" id='premium dirtlessWash' name="premium dirtlessWash" className='checkbox-input' />
                        <label htmlFor="premium dirtlessWash" className='checkbox-label'>Premium Dirt-Less Wash</label>
                    </div>

                    <p className="form-section-heading">Exterior Add-ons:</p>
                    <div>
                        <input type="checkbox" id='engine' name="engine" className='checkbox-input' />
                        <label htmlFor="engine" className='checkbox-label' style={{marginBottom: 16}}>Engine Bay</label>

                        <input type="checkbox" id='glass' name="glass" className='checkbox-input' />
                        <label htmlFor="glass" className='checkbox-label'>Glass Polishing</label>

                        <input type="checkbox" id='waterspot' name="waterspot" className='checkbox-input' />
                        <label htmlFor="waterspot" className='checkbox-label'>Waterspot/Overspray Removal</label>

                        <input type="checkbox" id='truckBed' name="truckBed" className='checkbox-input' />
                        <label htmlFor="truckBed" className='checkbox-label'>Truck Bed Cleaning</label>

                        <input type="checkbox" id='debadge' name="debadge" className='checkbox-input' />
                        <label htmlFor="debadge" className='checkbox-label'>Debadging</label>
                    </div>
                </div>

                <div className="form-section">
                    <p className='form-section-heading'>Paint Correction Services:</p>
                    <div>
                        <input type="checkbox" id='singlePC' name="singlePC" className='checkbox-input' />
                        <label htmlFor="singlePC" className='checkbox-label'>Single Stage Paint Correction</label>

                        <input type="checkbox" id='twoPC' name="twoPC" className='checkbox-input' />
                        <label htmlFor="twoPC" className='checkbox-label' style={{marginBottom: 16}}>Two Stage Paint Correction</label>
                    </div>

                    <p className="form-section-heading">Paint Correction Add-ons:</p>
                    <div>
                        <input type="checkbox" id='correctionGlass' name="correctionGlass" className='checkbox-input' />
                        <label htmlFor="correctionGlass" className='checkbox-label'>Glass Polishing</label>
                    </div>
                </div>

                <button className='submit-button'>Submit</button>

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
