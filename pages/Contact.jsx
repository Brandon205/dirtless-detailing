import React, { useRef, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Head from 'next/head';
import Metatags from '../utils/Metatags';
import 'react-toastify/dist/ReactToastify.css';

import { FaFacebookMessenger, FaClock } from 'react-icons/fa';
import { MdOutlinePermPhoneMsg } from 'react-icons/md';
import { AiFillGift } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { MdOutlineEmail } from 'react-icons/md';
import { BiLinkExternal } from 'react-icons/bi';

export default function Contact() {
    const [intSelected, setIntSelected] = useState(false);
    const [coatingSelected, setCoatingSelected] = useState(false);
    const [gift, setGift] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');

    //State for the "Radio" buttons
    const [paintCorrection, setPaintCorrection] = useState('');
    const [exteriorWash, setExteriorWash] = useState('');
    const [interiorCleaning, setInteriorCleaning] = useState('');
    const [exteriorCoating, setExteriorCoating] = useState('');
    const [dirtiness, setDirtiness] = useState('');
    const [dogHair, setDogHair] = useState('');

    const [nameVal, setNameVal] = useState('');
    const [emailVal, setEmailVal] = useState('');

    let formRef = useRef();

    const formSubmit = (e) => {
        e.preventDefault();

        const formInfo = {
            "For Myself": e.target['myself'].checked ? 'Yes' : 'No',
            "Gift Card": e.target['someone'].checked ? 'Yes' : 'No',
            "Name": e.target['name'].value,
            "Email": e.target['email'].value,
            "Phone": phoneNumber,
            "Year": e.target['year'].value,
            "Make": e.target['make'].value,
            "Model": e.target['model'].value,
            "Message": e.target['message'].value,

            "Exterior Coating": formRef.current['Protect'].checked ? 'Protect' : formRef.current['Protect+'].checked ? 'Protect+' : '',

            "Combo": e.target['combo'].checked ? 'Yes' : 'No',

            "Interior Cleaning": formRef.current['FullInt'].checked ? 'Full Interior Without Extraction' : formRef.current['FullIntEx'].checked ? 'Full Interior With Extraction' : formRef.current['Bio'].checked ? 'Biohazard Cleaning' : '',
            "Fabric Coating": e.target['fabric'].checked ? 'Yes' : 'No',
            "Leather Coating": e.target['leather'].checked ? 'Yes' : 'No',
            "Ozone": e.target['ozone'].checked ? 'Yes' : 'No',
            "Dirtiness": formRef.current['Pretty Clean'].checked ? 'Pretty Clean' : formRef.current['Normal Use'].checked ? 'Normal Use' : formRef.current['Extremely Dirty'].checked ? 'Extremely Dirty' : '',
            "Dog Hair": formRef.current['Little to None'].checked ? 'Little to None' : formRef.current['Medium Amount'].checked ? 'Medium Amount' : formRef.current['Lots of Hair'].checked ? 'Lots of Hair' : '',

            "Exterior Wash": formRef.current['Dirt-Less Wash'].checked ? 'Dirt-Less Wash' : '',
            "Clay Bar": e.target['claybar'].checked ? 'Yes' : 'No',
            "Engine Bay": e.target['engine'].checked ? 'Yes' : 'No',
            "Glass Polishing": e.target['glassEx'].checked ? 'Yes' : 'No',
            "Waterspot Removal": e.target['waterspotEx'].checked ? 'Yes' : 'No',
            "Debadging": e.target['debadge'].checked ? 'Yes' : 'No',

            "Paint Correction": formRef.current['Single Stage'].checked ? 'Single Stage' : formRef.current['Two Stage'].checked ? 'Two Stage' : '',

            "Monthly Maintenance": e.target['monthly'].checked ? 'Yes' : 'No',
            "Yearly Maintenance": e.target['yearly'].checked ? 'Yes' : 'No'
        }

        const formData = new FormData();
        Object.entries(formInfo).forEach(([key, value]) => {
            if (key === "Name" || key === "Email" || key === "Message" || key === "Phone" || key === "Year" || key === "Make" || key === "Model" || key === "Exterior Coating" || key === "Interior Cleaning" || key === "Dirtiness" || key === "Dog Hair" || key === "Exterior Wash" || key === "Paint Correction" || key === "Dirtiness" || key === "Dog Hair") {
                if (value !== '') {
                    formData.append(key, value);
                }
            } else if (value === 'Yes') {
                formData.append(key, value);
            }
        });

        
        if (intSelected) {
            if (dirtiness === '' || dogHair === '') {
                toast.error("Please fill out the Interior Dirtiness and Dog Hair Sections.", {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                })
            } else {
                finalSubmit(formData, e);
            }
        } else if (!intSelected || dirtiness !== '' && dogHair !== '') {
            finalSubmit(formData, e)
        }
    };

    const finalSubmit = (formData, e) => {
        fetch("https://getform.io/f/10015c2d-db32-409b-884d-54c141a3b141", {
            method: "POST",
            body: formData
        }).then((test) => {
            toast.success("Form submitted! Expect a text response from us soon!", {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            })
            e.target.reset();
            setPhoneNumber('');
            setPaintCorrection('');
            setExteriorWash('');
            setInteriorCleaning('');
            setExteriorCoating('');
            setDirtiness('');
            setDogHair('');
            setIntSelected(false);
            setCoatingSelected(false);
            window.scrollTo(0, 0);

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
    }

    let handleGiftSelect = (giftButton) => {
        setGift(giftButton)
    }

    let handleIntSelect = () => {
        let currForm = formRef.current;

        // Interior Cleaning selected check
        if (!currForm['interiorCleaning'][0].checked && !currForm['interiorCleaning'][1].checked && !currForm['interiorCleaning'][2].checked && !currForm['combo'].checked) {
            currForm['fabric'].checked = false;
            currForm['leather'].checked = false;
            setIntSelected(false);
        } else {
            setIntSelected(true);
        }

        // Coating selected check
        if (!currForm['exteriorCoating'][0].checked && !currForm['exteriorCoating'][1].checked) {
            setCoatingSelected(false);
        } else {
            setPaintCorrection('')
            setCoatingSelected(true);
        }
    }

    function formatPhoneNumber(value) {
        // if input value is falsy eg if the user deletes the input, then just return
        if (!value) return value;

        // clean the input for any non-digit values.
        const phoneNumber = value.replace(/[^\d]/g, '');

        // phoneNumberLength is used to know when to apply our formatting for the phone number
        const phoneNumberLength = phoneNumber.length;

        // we need to return the value with no formatting if its less then four digits
        // this is to avoid weird behavior that occurs if you  format the area code to early
        if (phoneNumberLength < 4) return phoneNumber;

        // if phoneNumberLength is greater than 4 and less the 7 we start to return the formatted number
        if (phoneNumberLength < 7) {
            return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
        }

        // finally, if the phoneNumberLength is greater then seven, we add the last bit of formatting and return it.
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    }

    let handlePhoneNumber = (e) => {
        e.preventDefault()

        const formattedPhoneNumber = formatPhoneNumber(e.target.value);

        setPhoneNumber(formattedPhoneNumber)
    }

    let handleRadioClick = (e, button) => {
        if (button === "interiorCleaning") { // INTERIOR
            if (e.target.id === interiorCleaning) {
                setInteriorCleaning('')
            } else {
                setInteriorCleaning(e.target.id)
            }
            
        } else if (button === "exteriorCoating") { // COATING
            if (e.target.id === exteriorCoating) {
                setExteriorCoating('')
            } else {
                setExteriorCoating(e.target.id)
            }
            
        } else if (button === "exteriorWash") { // EXTERIOR
            if (e.target.id === exteriorWash) {
                setExteriorWash('')
            } else {
                setExteriorWash(e.target.id)
            }

        } else if (button === "paintCorrection") { // PAINT CORRECTION
            if (e.target.id === paintCorrection) {
                setPaintCorrection('')
            } else {
                setPaintCorrection(e.target.id)
            }
        } else if (button === "dirtiness") { // DIRTINESS
            if (e.target.id === dirtiness) {
                setDirtiness('')
            } else {
                setDirtiness(e.target.id)
            }
        } else if (button === "dogHair") { // DOG HAIR
            if (e.target.id === dogHair) {
                setDogHair('')
            } else {
                setDogHair(e.target.id)
            }
        }
    }

    return (
        <section className="contact-container" id="contact">
            <Head>
                <title>Contact Us | Dirt-Less Detailing</title>
                <Metatags
                    title='Contact Us | Dirt-Less Detailing'
                    description='Contact us here! Let us know any additional information we may need to know before your detail. Feel free to reach out with any questions!'
                    image='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0d30edc6-6afe-4162-1f9e-4b57f8e85300/public'
                    canonical='/Contact'
                />
            </Head>

            <div className="contact-information-container">
                <div className="contact-information">
                    <h1 style={{fontSize: '1.75em'}}>Our Contact Information</h1>
                    <hr className="contact-border" />
                    <h3 style={{ marginBottom: 0 }}>Need us to come to you?</h3>
                    <p className="hours-p" style={{ marginBottom: 0 }}>We can perform mobile detailing in the following cities:</p>
                    <p className="hours-p"><span style={{ fontWeight: 'bold', color: '#9f9f9f' }}> Bonney Lake, Buckley, Sumner, Enumclaw, Puyallup, Federal Way, Orting, South Prairie, Tehaleh, Black Diamond, Milton, Edgewood, and Graham.</span></p>
                    <p className='subtext italic'><span className='special-package'>*Note:</span> If the total of the services you choose is less than $200, there is a $1/mile from our shop fee to cover travel costs.</p>
                    <hr className="contact-border" />
                    <div className="contact-icon-container">
                        <FaClock className='contact-icon' />
                        <p className="hours-p">Monday - Sunday: 7 AM - 7 PM</p>
                    </div>
                    <hr className="contact-border" />
                    <div className='contact-icon-container'>
                        <GoLocation className='contact-icon' />
                        <a href="https://www.google.com/maps/place/9305+205th+Ave+E,+Bonney+Lake,+WA+98391/@47.172835,-122.1589741,17z/data=!3m1!4b1!4m5!3m4!1s0x5490faeb8aa2e3d7:0xe53c2e7cb4aa7549!8m2!3d47.1728314!4d-122.1567854" className="contact-link location-link" target="_blank" rel='noopener'>9305 205th Ave E, Bonney Lake, Washington 98391</a>
                    </div>
                    <hr className="contact-border" />
                    <div className='contact-icon-container'>
                        <FaFacebookMessenger className='contact-icon' />
                        <a href="https://www.facebook.com/DirtLessDetailing/" className="contact-link location-link" target="_blank" rel="noopener">Facebook Messenger</a>
                    </div>
                    <hr className="contact-border" />
                    <div className='contact-icon-container'>
                        <MdOutlinePermPhoneMsg className='contact-icon' />
                        <a className='contact-link location-link' href="tel:2532529758" target="_blank" rel="noopener">(253) 252-9758</a><p style={{ display: 'inline' }}> (Text or Call)</p>
                    </div>
                    <hr className="contact-border" />
                    <div className='contact-icon-container'>
                        <MdOutlineEmail className='contact-icon' />
                        <a className='contact-link location-link' href="mailto:brenden@dirtlessdetailing.com?subject = Schedule a Dirt-Less Detail" target="_blank" rel="noopener">brenden@dirtlessdetailing.com</a>
                    </div>
                    <hr className="contact-border" />
                    <div className='contact-icon-container'>
                        <AiFillGift className='contact-icon' />
                        <p>Looking to get a gift for someone? All of our services can be bought as a gift certificate, just select "For Someone Else" below!</p>
                    </div>
                </div>
            </div>

            <div className='contact-container-right'>
                <h2>Or Email us by filling out our form:</h2>
                <p style={{ marginTop: 0 }}><span className='special-package'>*</span>Pricing is approximate and may vary inside of the listed ranges based on vehicle size and condition.</p>
                <form className="form" ref={formRef} autoComplete="on" onSubmit={(e) => formSubmit(e)}>
                    <div className="form-section form-top-section">
                        <div>
                            <div>
                                <input type="checkbox" name="myself" id='myself' className='checkbox-input' onChange={() => handleGiftSelect(false)} checked={gift ? false : true} />
                                <label htmlFor="myself" className='checkbox-label'>For Myself</label>
                                <input type="checkbox" name="someone" id='someone' className='checkbox-input' onChange={() => handleGiftSelect(true)} checked={gift ? true : false} />
                                <label htmlFor="someone" className='checkbox-label'>For Someone Else</label>
                            </div>
                            <p style={{textAlign: 'left', marginTop: 0, display: gift ? 'block' : 'none'}}>* When buying a gift certificate for someone else fill out YOUR contact information, but THEIR vehicle information (or as much as you know about their vehicle). We'll then get in contact with you to get the gift card to you!</p>
                            
                            <div>
                                <label htmlFor="name" className='text-input-label'>Name<span className='special-package'>*</span></label>
                                <input type="text" id="name" name="name" className='text-input' placeholder="Name" required />
                                <label htmlFor="email" className='text-input-label'>Email<span className='special-package'>*</span></label>
                                <input type="email" id="email" name="email" className='text-input' placeholder="Email" required />
                                <label htmlFor="phone" className='text-input-label'>Phone Number<span className='special-package'>*</span></label>
                                <input type="tel" id="phone" name="phone" pattern="\(\d{3}\) \d{3}-\d{4}" value={phoneNumber} onChange={(e) => handlePhoneNumber(e)} className='text-input' placeholder="Ex. (111) 111-1111" required />
                            </div>

                            <div className='select-field'>
                                <label htmlFor="year" className='text-input-label'>Year<span className='special-package'>*</span></label>
                                <select id="year" name="year" className='text-input year-input' placeholder="Year" required>
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
                                <select id="make" name="make" className='text-input make-input' placeholder="Make" required>
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
                                <input type="text" id="model" name="model" className='text-input model-input' placeholder="Model" required />
                            </div>

                            <div style={{ width: 100 + '%' }}>
                                <label htmlFor="message" className='text-input-label'>Additional Information:</label>
                                <textarea type="textarea" name="message" id='message' className='textarea' placeholder='Do you want our mobile service or to schedule a drop off? Do you have any other questions/concerns?' />
                            </div>

                        </div>
                    </div>

                    <div className="form-section">
                        <p className='form-section-heading'>Ceramic Coating Services <a href='/services/exterior-ceramic-coating' className='aside-link'><BiLinkExternal /></a></p>
                        <p style={{ marginTop: 0 }}>(Both Coating services also include a Wash, Paint Correction, and Engine Bay Wash)</p>
                        <div>
                            <input type="checkbox" name="exteriorCoating" id="Protect" value="Protect" className='radio-button' onChange={(e) => {handleRadioClick(e, 'exteriorCoating'); handleIntSelect()}} checked={exteriorCoating === "Protect"} />
                            <label htmlFor="Protect" className='checkbox-label'>Protect <span className='special-package italic'>($950-$1,250)</span></label>
                            <input type="checkbox" name="exteriorCoating" id="Protect+" value="Protect+" className='radio-button' onChange={(e) => {handleRadioClick(e, 'exteriorCoating'); handleIntSelect()}} checked={exteriorCoating === "Protect+"} />
                            <label htmlFor="Protect+" className='checkbox-label'>Protect+ <span className='special-package italic'>($1,400-$1,850)</span></label>
                        </div>
                    </div>

                    <div className="form-section">
                        <p className='form-section-heading'>Combo Deal <a href='/services/interior-exterior-detailing-combo' className='aside-link'><BiLinkExternal /></a></p>
                        <p style={{ marginTop: 0 }}>(Includes a Full Interior With Extraction, Dirt-Less Wash, and a <span className='special-package'>FREE</span> Engine Bay Cleaning!)</p>
                        <div>
                            <input type="checkbox" name="combo" id='combo' className='checkbox-input' onClick={() => handleIntSelect()} />
                            <label htmlFor="combo" className='checkbox-label'>The Dirt-Less Detail <span className='special-package italic'>($350-$700)</span></label>
                        </div>
                    </div>

                    <div className="form-section">
                        <p className='form-section-heading'>Interior Cleaning Services <a href='/services/full-interior-detail' className='aside-link'><BiLinkExternal /></a></p>
                        <div>
                            <input type="checkbox" name="interiorCleaning" id="FullInt" value="Full Interior Without Extraction" className='radio-button' onChange={(e) => {handleRadioClick(e, 'interiorCleaning'); handleIntSelect()}} checked={interiorCleaning === "FullInt"} />
                            <label htmlFor="FullInt" className='checkbox-label'>Full Interior Without Extraction <span className='special-package italic'>($300-$400)</span></label>
                            <input type="checkbox" name="interiorCleaning" id="FullIntEx" value="Full Interior With Extraction" className='radio-button' onChange={(e) => {handleRadioClick(e, 'interiorCleaning'); handleIntSelect()}} checked={interiorCleaning === "FullIntEx"} />
                            <label htmlFor="FullIntEx" className='checkbox-label'>Full Interior With Extraction <span className='special-package italic'>($335-$500)</span></label>     
                            <input type="checkbox" name="interiorCleaning" id="Bio" value="Biohazard Cleaning" className='radio-button' onChange={(e) => {handleRadioClick(e, 'interiorCleaning'); handleIntSelect()}} checked={interiorCleaning === "Bio"} />
                            <label htmlFor="Bio" className='checkbox-label'>Biohazard Cleaning <span className='special-package italic'>($500-$1,000)</span></label>

                        </div>
                        <hr className="contact-border" />

                        <p className="form-section-heading">Interior Add-ons <a href='/services/add-ons#interior' className='aside-link'><BiLinkExternal /></a></p>
                        <p style={{ marginTop: 0}}>(Coatings need a Full Interior Cleaning service selected)</p>
                        <div>
                            <input type="checkbox" name="fabric" id='fabric' className={'checkbox-input'} disabled={!intSelected ? "disabled" : ""} />
                            <label title="Need to have an Interior Cleaning option selected." htmlFor="fabric" className='checkbox-label'>Fabric Coating <span className='special-package italic'>($75)</span></label>

                            <input type="checkbox" name="leather" id='leather' className={'checkbox-input'} disabled={!intSelected ? "disabled" : ""} />
                            <label title="Need to have an Interior Cleaning option selected." htmlFor="leather" className='checkbox-label'>Leather Coating <span className='special-package italic'>($150)</span></label>

                            <input type="checkbox" id='ozone' name="ozone" className='checkbox-input' />
                            <label htmlFor="ozone" className='checkbox-label'>Ozone Treatment <span className='special-package italic'>($100)</span></label>
                        </div>
                        <hr className="contact-border" />

                        <p className="form-section-heading">Vehicle Interior Dirtiness{intSelected ? <span className='special-package'>*</span> : ''}</p>
                        <p style={{ marginTop: 0 }}>(Only required when an Interior Cleaning is selected)</p>
                        <div style={{display: 'flex', justifyContent: 'center', gap: '1rem'}}>
                            <div className="label-container">
                                <div style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/d69dedc8-dfb3-47bd-80f3-8e76256dfb00/public')`}} className="label-image"></div>
                                <input type="checkbox" name="dirtiness" id="Pretty Clean" value="Pretty Clean" className='radio-button' onChange={(e) => handleRadioClick(e, 'dirtiness')} checked={dirtiness === "Pretty Clean"} />
                                <label htmlFor="Pretty Clean" className='dirty-label' style={{color: 'green'}}>Pretty Clean</label>
                            </div>
                            <div className='label-container'>
                                <div style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/7ab9a475-7d86-4a02-22d8-086cdf595200/public')`}} className="label-image"></div>
                                <input type="checkbox" name="dirtiness" id="Normal Use" value="Normal Use" className='radio-button' onChange={(e) => handleRadioClick(e, 'dirtiness')} checked={dirtiness === "Normal Use"} />
                                <label htmlFor="Normal Use" className='dirty-label' style={{color: 'yellow'}}>Normal Use</label>
                            </div>
                            <div className="label-container">
                                <div style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/f06c6b85-4960-420b-0948-e14d69910a00/public')`}} className="label-image"></div>
                                <input type="checkbox" name="dirtiness" id="Extremely Dirty" value="Extremely Dirty" className='radio-button' onChange={(e) => handleRadioClick(e, 'dirtiness')} checked={dirtiness === "Extremely Dirty"} />
                                <label htmlFor="Extremely Dirty" className='dirty-label' style={{color: 'red'}}>Extremely Dirty</label>
                            </div>
                        </div>

                        <p className="form-section-heading">Interior Dog Hair Amount{intSelected ? <span className='special-package'>*</span> : ''}</p>
                        <p style={{ marginTop: 0 }}>(Only required when an Interior Cleaning is selected)</p>
                        <div style={{display: 'flex', justifyContent: 'center', gap: '1rem'}}>
                            <div className="label-container">
                                <div style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/264a9c3b-d6cd-4575-132a-80d4450cdc00/public')`}} className="label-image"></div>
                                <input type="checkbox" name="dogHair" id="Little to None" value="Little to None" className='radio-button' onChange={(e) => handleRadioClick(e, 'dogHair')} checked={dogHair === "Little to None"} />
                                <label htmlFor="Little to None" className='dirty-label' style={{color: 'green'}}>Little to None</label>
                            </div>
                            <div className="label-container">
                                <div style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/53860f31-e2a6-409d-fc5f-018eb1580e00/public')`}} className="label-image"></div>
                                <input type="checkbox" name="dogHair" id="Medium Amount" value="Medium Amount" className='radio-button' onChange={(e) => handleRadioClick(e, 'dogHair')} checked={dogHair === "Medium Amount"} />
                                <label htmlFor="Medium Amount" className='dirty-label' style={{color: 'yellow'}}>Medium Amount</label>
                            </div>
                            <div className="label-container">
                                <div style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/5153d5b2-eae0-4675-361f-5d761349b500/public')`}} className="label-image"></div>
                                <input type="checkbox" name="dogHair" id="Lots of Hair" value="Lots of Hair" className='radio-button' onChange={(e) => handleRadioClick(e, 'dogHair')} checked={dogHair === "Lots of Hair"} />
                                <label htmlFor="Lots of Hair" className='dirty-label' style={{color: 'red'}}>Plenty of Hair</label>
                            </div>
                        </div>

                    </div>

                    <div className="form-section">
                        <p className='form-section-heading'>Exterior Cleaning Services <a href='/services/dirtless-wash' className='aside-link'><BiLinkExternal /></a></p>
                        <div>
                            <input type="checkbox" name="exteriorWash" id="Dirt-Less Wash" value="Dirt-Less Wash" className='radio-button' disabled={!coatingSelected ? "" : "disabled"} onChange={(e) => handleRadioClick(e, 'exteriorWash')} checked={exteriorWash === 'Dirt-Less Wash'} />
                            <label htmlFor="Dirt-Less Wash" className='checkbox-label'>Dirt-Less Wash <span className='special-package italic'>($75-$150)</span></label>
                        </div>
                        <hr className="contact-border" />

                        <p className="form-section-heading">Exterior Add-ons <a href='/services/add-ons#exterior' className='aside-link'><BiLinkExternal /></a></p>
                        <div>
                            <input type="checkbox" id='claybar' name="claybar" className='checkbox-input' disabled={!coatingSelected ? "" : "disabled"} />
                            <label htmlFor="claybar" className='checkbox-label' style={{ marginBottom: 16 }}>Clay Bar Treatment <span className='special-package italic'>($50-$75)</span></label>
                            <input type="checkbox" id='engine' name="engine" className='checkbox-input' disabled={!coatingSelected ? "" : "disabled"} />
                            <label htmlFor="engine" className='checkbox-label' style={{ marginBottom: 16 }}>Engine Bay <span className='special-package italic'>($80)</span></label>

                            <input type="checkbox" id='glassEx' name="glass" className='checkbox-input' />
                            <label htmlFor="glassEx" className='checkbox-label'>Glass Polishing <span className='special-package italic'>($80/hour)</span></label>

                            <input type="checkbox" id='waterspotEx' name="waterspot" className='checkbox-input' />
                            <label htmlFor="waterspotEx" className='checkbox-label'>Waterspot/Overspray Removal <span className='special-package italic'>($80/hour)</span></label>

                            <input type="checkbox" id='debadge' name="debadge" className='checkbox-input' />
                            <label htmlFor="debadge" className='checkbox-label'>Debadging <span className='special-package italic'>($80/hour)</span></label>
                        </div>
                    </div>

                    <div className="form-section">
                        <p className='form-section-heading'>Paint Correction Services <a href='/services/single-stage-correction' className='aside-link'><BiLinkExternal /></a></p>
                        <p style={{ marginTop: 0 }}>(The exterior add-ons above go great with our Paint Correction Services too!)</p>
                        <div>
                            <input type="checkbox" name="paintCorrection" id="Single Stage" value="Single Stage" className='radio-button' disabled={!coatingSelected ? "" : "disabled"} onChange={(e) => handleRadioClick(e, 'paintCorrection')} checked={paintCorrection === 'Single Stage'} />
                            <label htmlFor="Single Stage" className='checkbox-label'>Single Stage Paint Correction <span className='special-package italic'>($550-$850)</span></label>
                            <input type="checkbox" name="paintCorrection" id="Two Stage" value="Two Stage" className='radio-button' disabled={!coatingSelected ? "" : "disabled"} onChange={(e) => handleRadioClick(e, 'paintCorrection')} checked={paintCorrection === 'Two Stage'} />
                            <label htmlFor="Two Stage" className='checkbox-label'>Two Stage Paint Correction <span className='special-package italic'>($700-$1,000)</span></label>
                        </div>
                        <input type="hidden" name="_gotcha" style={{ display: 'none !important' }} />
                    </div>

                    <div className="form-section">
                        <p className="form-section-heading">VIP Options <a href='/services/exterior-ceramic-coating' className='aside-link'><BiLinkExternal /></a></p>
                        <p style={{ marginTop: 0 }}>(For Ceramic Coating Maintenance)</p>
                        <div>
                            <input type="checkbox" name="monthly" id='monthly' className='checkbox-input' />
                            <label htmlFor="monthly" className='checkbox-label'>Monthly VIP <span className='special-package italic'>($130-$190)</span></label>

                            <input type="checkbox" name="yearly" id='yearly' className='checkbox-input' />
                            <label htmlFor="yearly" className='checkbox-label'>Yearly VIP <span className='special-package italic'>($200-$300)</span></label>
                        </div>
                    </div>

                    <button className='submit-button'>Submit Quote Form!</button>

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

                <form style={{marginTop: 10 + 'vh'}} action="https://dirtlessdetailing.us9.list-manage.com/subscribe/post?u=752a73821b38b96d23f195a09&amp;id=d2a4976ed6&amp;f_id=00e011e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" noValidate>
                    <div className="form-section form-top-section">
                        <h2 style={{marginBottom: 0}}>Subscribe to us!</h2><br />
                        <p style={{marginTop: 0}}>Get news about Dirt-Less Detailing, along with special offers, deals and tips!</p>

                        <div className="mc-field-group">
                            <label htmlFor="mce-FNAME"  className='text-input-label'>First Name<span className="special-package">*</span></label>
                            <input type="text" value={nameVal} onChange={() => setNameVal()} name="FNAME" className="text-input" id="mce-FNAME" />
                        </div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-EMAIL" className='text-input-label'>Email Address<span className="special-package">*</span></label>
                            <input type="email" value={emailVal} onChange={() => setEmailVal()} className="text-input" name="EMAIL" id="mce-EMAIL" required />
                        </div>
                        <div id="mce-responses" className="clear foot">
                            <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
                            <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
                        </div>
                        <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
                            <input type="text" name="b_752a73821b38b96d23f195a09_d2a4976ed6" tabIndex="-1" />
                        </div>
                        <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="submit-button" />
                    </div>
                </form>
            </div>
        </section>
    )
}
