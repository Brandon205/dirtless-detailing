import React, { useRef, useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Head from 'next/head';
import Metatags from '../utils/Metatags';
import prices from '../utils/Prices';
import 'react-toastify/dist/ReactToastify.css';

import dynamic from "next/dynamic";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

export default function Contact() {
    const [gift, setGift] = useState('Myself');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [exteriorService, setExteriorService] = useState('');
    const [interiorService, setInteriorService] = useState('');
    const [combo, setCombo] = useState('');
    const [exteriorAddons, setExteriorAddons] = useState([]);
    const [interiorAddons, setInteriorAddons] = useState([]);
    const [dirtiness, setDirtiness] = useState('');
    const [dogHair, setDogHair] = useState('');
    const [vip, setVip] = useState('');
    
    // State for new pricing estimate
    const [currentPrice, setCurrentPrice] = useState(0);
    const [vehicle, setVehicle] = useState(0);
    const [animate, setAnimate] = useState(false);
    
    useEffect(() => {
        setTimeout(() => {
            setAnimate(true)
        }, 1500)
    }, [])

    let formRef = useRef();

    const formSubmit = (e) => {
        e.preventDefault();
        let classification;
        switch (vehicle) {
            case 0:
                classification = '2 Door Car';
                break;
            case 1:
                classification = 'Quarter Ton Truck';
                break;
            case 2:
                classification = '4 Door Car';
                break;
            case 3:
                classification = 'Mid-Size SUV';
                break;
            case 4:
                classification = '4 Door Truck';
                break;
            case 5:
                classification = '3 Row SUV';
                break;
            default:
                classification = '2 Door Car';
        }

        const formInfo = {
            "Who's it for?:": gift,
            "Name": e.target['name'].value,
            "Email": e.target['email'].value,
            "Phone": phoneNumber,
            "Year": e.target['year'].value,
            "Make": e.target['make'].value,
            "Model": e.target['model'].value,
            "Vehicle Size": classification,

            "Exterior Service": exteriorService,
            "Exterior Addons": exteriorAddons,
            "Interior Service": interiorService,
            "Interior Addons": interiorAddons,
            "Combo": combo === 'Combo' ? 'Yes' : '',
            "Dirtiness": dirtiness,
            "Dog Hair": dogHair,
            "VIP": vip,
            "Price Estimate": currentPrice
        }

        const formData = new FormData();
        Object.entries(formInfo).forEach(([key, value]) => {
            if (value.length > 0) {
                if (key === 'Interior Addons') {
                    let addonStr = '';
                    interiorAddons.forEach((item, id) => {
                        if (id === 0) {
                            addonStr += item;
                        } else {
                            addonStr += ', ' + item
                        }
                    })
                    formData.append(key, addonStr);
                } else if (key === 'Exterior Addons') {
                    let addonStr = '';
                    exteriorAddons.forEach((item, id) => {
                        if (id === 0) {
                            addonStr += item;
                        } else {
                            addonStr += ', ' + item
                        }
                    })
                    formData.append(key, addonStr);
                } else {
                    formData.append(key, value)
                }
            } else if (key === 'Price Estimate') {
                formData.append(key, value);
            }
        });
        
        if (interiorService.length > 0) {
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
        } else if (interiorService.length === 0) {
            finalSubmit(formData, e)
        }
    };

    const finalSubmit = (formData, e) => {
        console.log(formData);
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
            setDirtiness('');
            setDogHair('');
            setExteriorService('');
            setExteriorAddons([]);
            setInteriorService('');
            setInteriorAddons([]);
            setCombo('');
            setVip('');
            setVehicle(0);
            setGift('Myself');
            setCurrentPrice(0);
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

    let changeVehicle = (e) => {
        let currForm = formRef.current;

        currForm['monthly'].checked = false;
        currForm['yearly'].checked = false;
        currForm['combo'].checked = false;
        currForm['intcoating'].checked = false;
        currForm['ozone'].checked = false;
        currForm['headliners'].checked = false;
        currForm['extraction'].checked = false;
        currForm['claybar'].checked = false;
        currForm['engine'].checked = false;
        currForm['glass'].checked = false;
        currForm['waterspot'].checked = false;
        currForm['debadge'].checked = false;

        setDirtiness('');
        setDogHair('');
        setExteriorService('');
        setExteriorAddons([]);
        setInteriorService('');
        setInteriorAddons([]);
        setCombo('');
        setVip('');
        setGift('Myself');
        setCurrentPrice(0);
        setVehicle(e.target.value);
    }

    let handleOptionClick = (e, button, service) => {
        if (button === 'exterior') { // Exterior Service Selected
            if (exteriorService === service) { // Fires when the currently selected item is selected again

                let tempPrice = 0;

                tempPrice -= prices[exteriorService].cost[vehicle]

                if (exteriorAddons.length > 0) {
                    let tempArr = [...exteriorAddons];
    
                    tempArr.forEach(item => {
                        tempPrice -= prices[item].cost[vehicle]
                    })
                    console.log(tempPrice);
    
                    setCurrentPrice(currentPrice - tempPrice);
                    setExteriorAddons([]);
                }

                setCurrentPrice(currentPrice + tempPrice);
                setExteriorService('');
            } else if (exteriorService.length > 0) { // Fires when something else is already selected and a different item was just selected
                setCurrentPrice(currentPrice - prices[exteriorService].cost[vehicle] + prices[service].cost[vehicle]);
                setExteriorService(service);
            } else { // Fires when nothing else is selected in this group 
                setCurrentPrice(currentPrice + prices[service].cost[vehicle]);
                setExteriorService(service);
            }
        } else if (button === 'interior') {
            if (interiorService === service) {

                let tempPrice = 0;
                tempPrice -= prices[interiorService].cost[vehicle]
                
                if (interiorAddons.length > 0) {
                
                    let tempArr = [...interiorAddons];

                    tempArr.forEach(item => {
                        tempPrice -= prices[item].cost[vehicle]
                    })

                    if (dogHair.length > 0) {
                        tempPrice -= prices['Dog Hair'].cost[dogHair]
                    }

                    setInteriorAddons([]);
                }
                setDogHair('');
                setDirtiness('');
                setCurrentPrice(currentPrice + tempPrice);
                setInteriorService('');
            } else if (interiorService.length > 0) {
                setCurrentPrice(currentPrice - prices[interiorService].cost[vehicle] + prices[service].cost[vehicle]);
                setInteriorService(service);
            } else {
                setCurrentPrice(currentPrice + prices[service].cost[vehicle])
                setInteriorService(service);
            }
        } else if (button === 'exteriorAddon') {
            let tempArr = [...exteriorAddons]
            if (tempArr.includes(service)) {
                tempArr.splice(tempArr.indexOf(service), 1)
                setCurrentPrice(currentPrice - prices[service].cost[vehicle])
                setExteriorAddons(tempArr)
            } else {
                tempArr.push(service)
                setCurrentPrice(currentPrice + prices[service].cost[vehicle])
                setExteriorAddons(tempArr)
            }
        } else if (button === 'interiorAddon') {
            let tempArr = [...interiorAddons]
            if (tempArr.includes(service)) {
                tempArr.splice(tempArr.indexOf(service), 1)
                setCurrentPrice(currentPrice - prices[service].cost[vehicle])
                setInteriorAddons(tempArr)
            } else {
                tempArr.push(service)
                setCurrentPrice(currentPrice + prices[service].cost[vehicle])
                setInteriorAddons(tempArr)
            }
        } else if (button === 'dogHair') {
            if (dogHair === service) {
                setCurrentPrice(currentPrice - prices['Dog Hair'].cost[service]);
                setDogHair('');
            } else if (dogHair.length > 0) {
                setCurrentPrice(currentPrice - prices['Dog Hair'].cost[dogHair] + prices['Dog Hair'].cost[service]);
                setDogHair(service);
            } else {
                setCurrentPrice(currentPrice + prices['Dog Hair'].cost[service]);
                setDogHair(service);
            }
        } else if (button === 'vip') {
            if (service === vip) {
                setCurrentPrice(currentPrice - prices[service].cost[vehicle]);
                setVip('');
            } else if (vip.length > 0) {
                setCurrentPrice(currentPrice - prices[vip].cost[vehicle] + prices[service].cost[vehicle]);
                setVip(service);
            } else {
                setCurrentPrice(currentPrice + prices[service].cost[vehicle]);
                setVip(service);
            }
        } else if (button === 'Combo') {
            if (combo.length > 0) {
                let tempPrice = 0;
                tempPrice -= prices['Dirt-Less Detail'].cost[vehicle]
                
                if (interiorAddons.length > 0) {
                
                    let tempArr = [...interiorAddons];

                    tempArr.forEach(item => {
                        tempPrice -= prices[item].cost[vehicle]
                    })

                    setInteriorAddons([]);
                }

                if (dogHair.length > 0) {
                    tempPrice -= prices['Dog Hair'].cost[dogHair]
                    setDogHair('');
                }

                if (exteriorAddons.length > 0) {
                    let tempArr = [...exteriorAddons];
    
                    tempArr.forEach(item => {
                        tempPrice -= prices[item].cost[vehicle]
                    })
    
                    setCurrentPrice(currentPrice - tempPrice);
                    setExteriorAddons([]);
                }

                setDirtiness('');
                setInteriorService('');
                setExteriorService('');
                setCombo('');
                setCurrentPrice(currentPrice + tempPrice);
            } else {
                setCurrentPrice(currentPrice + prices['Dirt-Less Detail'].cost[vehicle]);
                setCombo('Combo');
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

            <div className="cover" style={{backgroundImage: `url(https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0d30edc6-6afe-4162-1f9e-4b57f8e85300/cover)`}}></div>
            <div className="servicepage-header">
                <h1>Get In Touch</h1>
                <h2 className='page-subheading'>Be sure to check out our new Price Estimator below for a quick free quote, or feel free to contact us with any questions!</h2>
                <div className='header-buttons'>
                    <a href="#form" className='top-quote-btn'><img src='../assets/icons/clipboard.png' alt='clipboard' className='btn-icon' /> Get a Free Quote</a>
                    <a href="tel:2532529758" className='top-quote-btn btn-secondary'><img src='../assets/icons/phoneMessage.png' alt='call or message' className='btn-icon' /> (253) 252-9758</a>
                </div>
            </div>

            <div className="contact-information-container">
                <div className='contact-info-cards'>
                    <div className="contact-icon-container">
                        <img src='../assets/icons/clock.png' alt='clock' className='icon-48' />
                        <p className="hours-p">Monday - Sunday: 7 AM - 7 PM</p>
                    </div>
                    <div className='contact-icon-container'>
                        <img src='../assets/icons/placeMarker.png' alt='place marker' className='icon-48' />
                        <a href="https://www.google.com/maps/place/9305+205th+Ave+E,+Bonney+Lake,+WA+98391/@47.172835,-122.1589741,17z/data=!3m1!4b1!4m5!3m4!1s0x5490faeb8aa2e3d7:0xe53c2e7cb4aa7549!8m2!3d47.1728314!4d-122.1567854" className="contact-link location-link" target="_blank" rel='noopener'>9305 205th Ave E, Bonney Lake, Washington 98391</a>
                    </div>
                    <div className='contact-icon-container'>
                        <img src='../assets/icons/phoneMessage.png' alt='phone message' className='icon-48' />
                        <a className='contact-link location-link' href="tel:2532529758" target="_blank" rel="noopener">(253) 252-9758</a><p> Text or Call</p>
                    </div>
                    <div className='contact-icon-container'>
                        <img src='../assets/icons/post.png' alt='post' className='icon-48' />
                        <a className='contact-link location-link' href="mailto:brenden@dirtlessdetailing.com?subject = Schedule a Detail!" target="_blank" rel="noopener" style={{overflow: 'auto', overflowWrap: 'anywhere'}}>brenden@dirtlessdetailing.com</a>
                    </div>
                    <div className='contact-icon-container'>
                        <img src='../assets/icons/gift.png' alt='gift' className='icon-48' />
                        <p style={{textAlign: 'left'}}>We offer gift certificates for all of our services!</p>
                    </div>
                </div>
                <div className="contact-information">
                    <h2 style={{fontSize: '1.75em'}}>Our Contact Information</h2>
                    <hr className="contact-border" />
                    <h3 style={{ marginBottom: 0 }}>Need us to come to you?</h3>
                    <p className="hours-p" style={{ marginBottom: 0 }}>We can perform mobile detailing in the following cities:</p>
                    <p className="hours-p"><span style={{ fontWeight: 'bold', color: '#9f9f9f' }}> Bonney Lake, Buckley, Sumner, Enumclaw, Puyallup, Federal Way, Orting, South Prairie, Tehaleh, Black Diamond, Milton, Edgewood, and Graham.</span></p>
                    <p> <span className="bold">Overnight Detailing:</span> For drop offs we have a safe lockable garage, so if it's more convenient for you feel free to drop your car off the night before! We can usually also do our details at night so you can drop your car off and have it done in the morning! </p>
                    <p className='subtext italic'><span className='special-package'>*Note:</span> If the total of the mobile services you choose is less than $200, there is a $1/mile from our shop fee to cover travel costs.</p>
                </div>
            </div>

            <div className='contact-container-right'>
                <h2>Or Reach Out to Us By Filling Out Our Form:</h2>
                <p className='contact-subheading'><span className='special-package'>Note: </span>The Pricing Estimate below is approximate and some services are hourly or based on vehicle condition. Final prices may vary slightly.</p>
                <form className="form" id="form" ref={formRef} autoComplete="on" onSubmit={(e) => formSubmit(e)}>
                    <div className="form-section form-top-section">
                        <div style={{marginBottom: 0}}>
                            <p className="contact-heading">Basic Information</p>
                            <p style={{display: gift === 'Myself' ? 'none' : 'block'}} className='contact-subheading'>*When buying a gift certificate for someone else fill out YOUR contact information, but THEIR vehicle information (or as much as you know about their vehicle). We'll then get in contact with you to get the gift card to you!</p>
                            <div style={{margin: '0 auto'}} className='basic-info-container'>
                                <input type="radio" name="gift" id='myself' value='Myself' onChange={(e) => setGift(e.target.value)} checked={gift === 'Myself'} className='radio-button' />
                                <label htmlFor="myself" className='checkbox-label'>For Myself</label>

                                <input type="radio" name="gift" id='card' value='Gift Card' onChange={(e) => setGift(e.target.value)} checked={gift === 'Gift Card'} className='radio-button' />
                                <label htmlFor="card" className='checkbox-label'>Gift Card</label>
                            </div>
                            
                            <div style={{marginBottom: 0}} className='basic-info-container'>
                                <div style={{position: 'relative', display: 'flex', justifyContent: 'flex-start'}}>
                                    <label htmlFor="name" className='text-input-label'>Name<span className='special-package'>*</span></label>
                                    <input type="text" id="name" name="name" autoComplete='on' className='text-input' placeholder="Name" required />
                                </div>
                                <div style={{position: 'relative', display: 'flex', justifyContent: 'flex-start'}}>
                                    <label htmlFor="email" className='text-input-label'>Email<span className='special-package'>*</span></label>
                                    <input type="email" id="email" autoComplete='email' name="email" className='text-input' placeholder="Email" required />
                                </div>
                                <div style={{position: 'relative', display: 'flex', justifyContent: 'flex-start'}}>
                                    <label htmlFor="phone" className='text-input-label'>Phone Number<span className='special-package'>*</span></label>
                                    <input type="tel" id="phone" name="phone" autoComplete='tel' pattern="\(\d{3}\) \d{3}-\d{4}" value={phoneNumber} onChange={(e) => handlePhoneNumber(e)} className='text-input' placeholder="Ex. (111) 111-1111" required />
                                </div>
                            </div>

                            <div style={{marginBottom: '2rem'}} className='basic-info-container'>
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
                                <div style={{position: 'relative', display: 'flex', justifyContent: 'flex-start'}} className='select-field'>
                                    <label htmlFor="model" className='text-input-label'>Model<span className='special-package'>*</span></label>
                                    <input type="text" id="model" name="model" className='text-input model-input' placeholder="Model" required />
                                </div>
                            </div>

                            {/* <div style={{width: '100%', padding: '1rem 0', textAlign: 'left'}} className='select-field'>
                                <h3 style={{}}>Sign Up For Our Newletter</h3>
                                <label htmlFor="newsletter" className='newsletter-label' >
                                    <input type="checkbox" name="newsletter" id='newsletter' checked={newsletter} onChange={() => setNewsletter(!newsletter)} className='newsletter-checkbox' />Receive our short emails on our offers and updates, you'll only get 1-3 emails per month and you will be the first to know about our newest offers! Unsubscribe at any time!
                                </label>
                            </div> */}

                            <div style={{ width: 100 + '%', position: 'relative', marginTop: '2rem'}}>
                                <label htmlFor="message" style={{bottom: '130px'}} className='text-input-label'>Additional Information:</label>
                                <textarea type="textarea" name="message" id='message' className='textarea' placeholder='Do you want our mobile service or to schedule a drop off at our shop? Do you have any other questions/concerns for us?' />
                            </div>

                            <p style={{marginTop: '2rem'}} className="contact-heading">Vehicle Size/Classification</p>
                            <p style={{marginBottom: 0}} className="contact-subheading">Change this to match your vehicle's size to get accurate price estimates (<span className='special-package'>NOTE: </span>Changing this does reset the options below, but not the information above).</p>
                            <div style={{marginTop: 0}} className='basic-info-container'>
                                <select name="vehicle size" id="vehicle size" style={{fontSize: '1.2em'}} className='text-input make-input' placeholder='Vehicle Size' onChange={(e) => changeVehicle(e)}>
                                    <option value="0">2 Door Cars</option>
                                    <option value="1">Quarter Ton Trucks</option>
                                    <option value="2">4-Door Cars</option>
                                    <option value="3">Mid-Size SUV's</option>
                                    <option value="4">4-Door Trucks</option>
                                    <option value="5">3-Row SUV's</option>
                                </select>
                            </div>

                        </div>
                    </div>

                    <div className="form-section">
                        <p className='contact-heading'>Exterior Services</p>
                        <p className='contact-subheading'>All of our exterior services from a simple wash all the way up to a 5 Year Ceramic Coating.</p>
                        <div>
                            <input type="checkbox" name="exterior" id="protect" value="Protect" className='radio-button' checked={exteriorService === "Protect"} onChange={(e) => handleOptionClick(e, 'exterior', 'Protect')} disabled={combo === 'Combo'} />
                            <label htmlFor="protect" className='checkbox-label'>Protect Ceramic Coating <span className='special-package italic'>(${prices['Protect'].cost[vehicle]})</span></label>

                            <input type="checkbox" name="exterior" id="protect+" value="Protect+" className='radio-button' checked={exteriorService === "Protect+"} onChange={(e) => handleOptionClick(e, 'exterior', 'Protect+')} disabled={combo === 'Combo'} />
                            <label htmlFor="protect+" className='checkbox-label'>Protect+ Ceramic Coating <span className='special-package italic'>(${prices['Protect+'].cost[vehicle]})</span></label>

                            <input type="checkbox" name="exterior" id="wash" value="Dirt-Less Wash" className='radio-button' checked={exteriorService === 'Dirt-Less Wash'} onChange={(e) => handleOptionClick(e, 'exterior', 'Dirt-Less Wash')} disabled={combo === 'Combo'} />
                            <label htmlFor="wash" title={combo === 'Combo' ? 'Our Dirt-Less Wash is already included in The Dirt-Less Detail' : ''} className='checkbox-label'>Dirt-Less Wash <span className='special-package italic'>(${prices['Dirt-Less Wash'].cost[vehicle]})</span></label>

                            <input type="checkbox" name="exterior" id="single stage" value="Single Stage" className='radio-button' checked={exteriorService === 'Single Stage'} onChange={(e) => handleOptionClick(e, 'exterior', 'Single Stage')} disabled={combo === 'Combo'} />
                            <label htmlFor="single stage" className='checkbox-label'>Single Stage Paint Correction <span className='special-package italic'>(${prices['Single Stage'].cost[vehicle]})</span></label>

                            <input type="checkbox" name="exterior" id="two stage" value="Two Stage" className='radio-button' checked={exteriorService === 'Two Stage'} onChange={(e) => handleOptionClick(e, 'exterior', 'Two Stage')} disabled={combo === 'Combo'} />
                            <label htmlFor="two stage" className='checkbox-label'>Two Stage Paint Correction <span className='special-package italic'>(${prices['Two Stage'].cost[vehicle]})</span></label>
                        </div>
                        <hr className="contact-border" />

                        <p className="contact-heading">Exterior Add-ons <a href='/services/add-ons#exterior' className='aside-link'><img src='../assets/icons/linking.png' alt='external link' className='icon-36' /></a></p>
                        <p style={{marginBottom: '0.5rem'}} className='contact-subheading'><span className='special-package'>Note: </span>Most of our exterior add-ons require an exterior service to be selected.</p>
                        <p className='contact-subheading'><span className='special-package'>*</span>For services billed hourly, the Price Estimator includes the equivalent of one hour's work.</p>
                        <div>
                            <input type="checkbox" name="exteriorAddon" id='claybar' className='checkbox-input' onChange={(e) => handleOptionClick(e, 'exteriorAddon', 'Clay Bar')} checked={exteriorAddons.includes('Clay Bar')} disabled={exteriorService.length == 0 && combo.length == 0 || exteriorService.includes('Protect') || exteriorService.includes('Stage')} />
                            <label htmlFor="claybar" className='checkbox-label' title={exteriorService.includes('Protect') || exteriorService.includes('Stage') ? `Clay Bar treatment is already included with our ${exteriorService} service.` : 'An Exterior Service must be selected.'} >Clay Bar Treatment <span className='special-package italic'>(${prices['Clay Bar'].cost[vehicle]})</span></label>

                            <input type="checkbox" name="exteriorAddon" id='engine' className='checkbox-input' onChange={(e) => handleOptionClick(e, 'exteriorAddon', 'Engine')} checked={exteriorAddons.includes('Engine')} disabled={combo === 'Combo'} />
                            <label htmlFor="engine" className='checkbox-label' title={combo === 'Combo' ? 'Our Engine Bay Cleaning is included in The Dirt-Less Detail.' : ''}>Engine Bay <span className='special-package italic'>(${prices['Engine'].cost[vehicle]})</span></label>

                            <input type="checkbox" name="exteriorAddon" id='glass' className='checkbox-input' onChange={(e) => handleOptionClick(e, 'exteriorAddon', 'Glass')} checked={exteriorAddons.includes('Glass')} disabled={exteriorService.length == 0 && combo.length == 0 || exteriorService.includes('Protect') || exteriorService.includes('Stage')} />
                            <label htmlFor="glass" className='checkbox-label' title={exteriorService.includes('Protect') || exteriorService.includes('Stage') ? `Glass Polishing is already included with our ${exteriorService} service.` : 'An Exterior Service must be selected.'} ><span className='special-package'>*</span>Glass Polishing <span className='special-package italic'>($80/hour)</span></label>

                            <input type="checkbox" name="exteriorAddon" id='waterspot' className='checkbox-input' onChange={(e) => handleOptionClick(e, 'exteriorAddon', 'Waterspot')} checked={exteriorAddons.includes('Waterspot')} disabled={exteriorService.length == 0 && combo.length == 0} />
                            <label htmlFor="waterspot" className='checkbox-label' title='An Exterior Service must be selected.'><span className='special-package'>*</span>Waterspot, Overspray, or Road Paint Removal <span className='special-package italic'>($80/hour)</span></label>

                            <input type="checkbox" name="exteriorAddon" id='debadge' className='checkbox-input' onChange={(e) => handleOptionClick(e, 'exteriorAddon', 'Debadging')} checked={exteriorAddons.includes('Debadging')} />
                            <label htmlFor="debadge" className='checkbox-label'><span className='special-package'>*</span>Debadging <span className='special-package italic'>($80/hour)</span></label>

                            <input type="hidden" name="_gotcha" style={{ display: 'none !important' }} />
                        </div>
                        <hr className="contact-border" />

                        <p style={{paddingTop: '2rem'}} className="contact-heading">VIP Options <a href='/services/exterior-ceramic-coating' className='aside-link'><img src='../assets/icons/linking.png' alt='external link' className='icon-36' /></a></p>
                        <p className='contact-subheading'>Our maintenance options that also keep your Ceramic Coating Warranties. (You can set this up with us later too!)</p>
                        <div>
                            <input type="checkbox" name="vip" id='monthly' className='checkbox-input' onChange={(e) => handleOptionClick(e, 'vip', 'Monthly')} checked={vip === 'Monthly'} />
                            <label htmlFor="monthly" className='checkbox-label'>Monthly VIP <span className='special-package italic'>(${prices['Monthly'].cost[vehicle]})</span></label>

                            <input type="checkbox" name="vip" id='yearly' className='checkbox-input' onChange={(e) => handleOptionClick(e, 'vip', 'Yearly')} checked={vip === 'Yearly'} />
                            <label htmlFor="yearly" className='checkbox-label'>Yearly VIP <span className='special-package italic'>(${prices['Yearly'].cost[vehicle]})</span></label>
                        </div>
                    </div>

                    <div className="form-section">
                        <p className='contact-heading'>Interior + Exterior Combo <a href='/services/interior-exterior-detailing-combo' className='aside-link'><img src='../assets/icons/linking.png' alt='external link' className='icon-36' /></a></p>
                        <p className='contact-subheading'>Includes a Full Interior Cleaning, our Dirt-Less Wash, and a <span className='special-package'>FREE</span> Engine Bay Cleaning!</p>
                        <div>
                            <input type="checkbox" name="combo" id='combo' value='Dirt-Less Detail' className='checkbox-input' onChange={(e) => handleOptionClick(e, 'Combo', 'Dirt-Less Detail')} disabled={interiorService.length > 0 || exteriorService.length > 0} />
                            <label htmlFor="combo" title={interiorService.length > 0 || exteriorService.length > 0 ? `Can't have an interior or exterior service selected before selecting the Dirt-Less Detail` : ''} className='checkbox-label'>The Dirt-Less Detail <span className='special-package italic'>(${prices['Dirt-Less Detail'].cost[vehicle]})</span></label>
                        </div>
                    </div>

                    <div className="form-section">
                        <p className='contact-heading'>Interior Services <a href='/services/full-interior-detail' className='aside-link'><img src='../assets/icons/linking.png' alt='external link' className='icon-36' /></a></p>
                        <p className='contact-subheading'><span className='special-package'>**</span>Biohazard cleaning is priced based on the condition of the vehicle, selecting it here adds the base price of $500 to the Price Estimator.</p>
                        <div>
                            <input type="checkbox" name="interior" id="fullint" value="Full Interior" className='radio-button' checked={interiorService === "Full Interior"} onChange={(e) => handleOptionClick(e, 'interior', 'Full Interior')} disabled={combo === 'Combo'} />
                            <label htmlFor="fullint" title={combo === 'Combo' ? 'Full Interior Cleaning is included in The Dirt-Less Detail' : ''} className='checkbox-label'>Full Interior Cleaning <span className='special-package italic'>(${prices['Full Interior'].cost[vehicle]})</span></label>    

                            <input type="checkbox" name="interior" id="Bio" value="Biohazard Cleaning" className='radio-button' checked={interiorService === "Bio"} onChange={(e) => handleOptionClick(e, 'interior', 'Bio')} disabled={combo === 'Combo'} />
                            <label htmlFor="Bio" className='checkbox-label'>Biohazard Cleaning<span className='special-package'>**</span> <span className='special-package italic'>($500-$1000)</span></label>
                        </div>
                        <hr className="contact-border" />

                        <p className="contact-heading">Interior Add-ons <a href='/services/add-ons#interior' className='aside-link'><img src='../assets/icons/linking.png' alt='external link' className='icon-36' /></a></p>
                        <p style={{marginBottom: '0.5rem'}} className='contact-subheading'><span className='special-package'>Note: </span>All add-ons need an Interior Service selected.</p>
                        <p className='contact-subheading'><span className='special-package'>**</span>Headliner cleaning is based on condition, selecting it here adds the base price of $35 to the Price Estimator.</p>
                        <div>
                            <input type="checkbox" name="interiorAddon" id='extraction' className={'checkbox-input'} onChange={(e) => handleOptionClick(e, 'interiorAddon', 'Extraction')} checked={interiorAddons.includes('Extraction')} disabled={interiorService.length == 0 && combo.length == 0 || interiorService === 'Bio'} />
                            <label htmlFor="extraction" className='checkbox-label' title={interiorService === 'Bio' ? 'Extraction is already included with Biohazard Cleaning' : 'An Interior Service must be selected.'}>Extraction <span className='special-package italic'>(${prices['Extraction'].cost[vehicle]})</span></label>

                            <input type="checkbox" name="interiorAddon" id='intcoating' className={'checkbox-input'} onChange={(e) => handleOptionClick(e, 'interiorAddon', 'Interior Coating')} checked={interiorAddons.includes('Interior Coating')} disabled={interiorService.length == 0 && combo.length == 0} />
                            <label htmlFor="intcoating" className='checkbox-label' title='An Interior Service must be selected.'>Interior Ceramic Coating <span className='special-package italic'>(${prices['Interior Coating'].cost[vehicle]})</span></label>

                            <input type="checkbox" name="interiorAddon" id='headliners' className={'checkbox-input'} onChange={(e) => handleOptionClick(e, 'interiorAddon', 'Headliners')} checked={interiorAddons.includes('Headliners')} disabled={interiorService.length == 0 && combo.length == 0 || interiorService === 'Bio'} />
                            <label htmlFor="headliners" className='checkbox-label' title={interiorService === 'Bio' ? 'Headliner cleaning is already included with Biohazard Cleaning' : 'An Interior Service must be selected.'}><span className='special-package'>**</span>Headliners <span className='special-package italic'>(${prices['Headliners'].cost[vehicle]})</span></label>

                            <input type="checkbox" name="interiorAddon" id='ozone' className='checkbox-input' onChange={(e) => handleOptionClick(e, 'interiorAddon', 'Ozone')} checked={interiorAddons.includes('Ozone')} disabled={interiorService.length == 0 && combo.length == 0 || interiorService === 'Bio'} />
                            <label htmlFor="ozone" className='checkbox-label' title={interiorService === 'Bio' ? 'Ozone Treatment is already included with Biohazard Cleaning' : 'An Interior Service must be selected.'}>Ozone Treatment <span className='special-package italic'>(${prices['Ozone'].cost[vehicle]})</span></label>
                        </div>
                        <hr style={{display: interiorService.length > 0 || combo.length > 0 ? 'block' : 'none'}} className="contact-border" />

                        <p style={{display: interiorService.length > 0 || combo.length > 0 ? 'block' : 'none'}} className="contact-heading">Vehicle Interior Dirtiness<span className='special-package'>*</span></p>
                        <p style={{display: interiorService.length > 0 || combo.length > 0 ? 'block' : 'none'}} className='contact-subheading'><span className='special-package'>Note: </span>Only required when an Interior Cleaning is selected. Does not raise cost, just gives us a basic idea of what we'll be dealing with.</p>
                        <div style={{display: interiorService.length > 0 || combo.length > 0 ? 'flex' : 'none', justifyContent: 'center', gap: '1rem'}}>
                            <div className="label-container">
                                <div style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/d69dedc8-dfb3-47bd-80f3-8e76256dfb00/public')`}} className="label-image"></div>
                                <input type="checkbox" name="dirtiness" id="pretty clean" value="Pretty Clean" className='radio-button' onChange={(e) => {e.target.checked ? setDirtiness('Pretty Clean') : setDirtiness('')}} checked={dirtiness === "Pretty Clean"} />
                                <label htmlFor="pretty clean" className='dirty-label' style={{color: 'green'}}>Pretty Clean</label>
                            </div>
                            <div className='label-container'>
                                <div style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/7ab9a475-7d86-4a02-22d8-086cdf595200/public')`}} className="label-image"></div>
                                <input type="checkbox" name="dirtiness" id="normal use" value="Normal Use" className='radio-button' onChange={(e) => {e.target.checked ? setDirtiness('Normal Use') : setDirtiness('')}} checked={dirtiness === "Normal Use"} />
                                <label htmlFor="normal use" className='dirty-label' style={{color: 'yellow'}}>Normal Use</label>
                            </div>
                            <div className="label-container">
                                <div style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/f06c6b85-4960-420b-0948-e14d69910a00/public')`}} className="label-image"></div>
                                <input type="checkbox" name="dirtiness" id="extremely dirty" value="Extremely Dirty" className='radio-button' onChange={(e) => {e.target.checked ? setDirtiness('Extremely Dirty') : setDirtiness('')}} checked={dirtiness === "Extremely Dirty"} />
                                <label htmlFor="extremely dirty" className='dirty-label' style={{color: 'red'}}>Extremely Dirty</label>
                            </div>
                        </div>

                        <p style={{display: interiorService.length > 0 || combo.length > 0 ? 'block' : 'none'}} className="contact-heading">Interior Dog Hair Amount<span className='special-package'>*</span></p>
                        <p style={{display: interiorService.length > 0 || combo.length > 0 ? 'block' : 'none'}} className='contact-subheading'><span className='special-package'>Note: </span>Only required when an Interior Cleaning is selected.</p>
                        <div style={{display: interiorService.length > 0 || combo.length > 0 ? 'flex' : 'none', justifyContent: 'center', gap: '1rem'}}>
                            <div className="label-container">
                                <div style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/264a9c3b-d6cd-4575-132a-80d4450cdc00/public')`}} className="label-image"></div>
                                <input type="checkbox" name="dogHair" id="little or none" value="Little or None" className='radio-button' onChange={(e) => handleOptionClick(e, 'dogHair', 'Little or None')} checked={dogHair === "Little or None"} />
                                <label htmlFor="little or none" className='dirty-label' style={{color: 'green'}}>Little or None</label>
                            </div>
                            <div className="label-container">
                                <div style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/53860f31-e2a6-409d-fc5f-018eb1580e00/public')`}} className="label-image"></div>
                                <input type="checkbox" name="dogHair" id="medium amount" value="Medium Amount" className='radio-button' onChange={(e) => handleOptionClick(e, 'dogHair', 'Medium Amount')} checked={dogHair === "Medium Amount"} />
                                <label htmlFor="medium amount" className='dirty-label' style={{color: 'yellow'}}>Medium Amount</label>
                            </div>
                            <div className="label-container">
                                <div style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/5153d5b2-eae0-4675-361f-5d761349b500/public')`}} className="label-image"></div>
                                <input type="checkbox" name="dogHair" id="lots of hair" value="Lots of Hair" className='radio-button' onChange={(e) => handleOptionClick(e, 'dogHair', 'Lots of Hair')} checked={dogHair === "Lots of Hair"} />
                                <label htmlFor="lots of hair" className='dirty-label' style={{color: 'red'}}>Plenty of Hair</label>
                            </div>
                        </div>

                    </div>

                    <div className='pricing__positioner'>
                        <p style={{margin: 0}}>Price Estimate:</p>
                        <div className='pricing__pricecard-container'>
                            <strong style={{backgroundColor: '#c0c0c000'}} className='pricing__pricecard-pricebox'>
                                <span className='pricing__pricecard-price'>
                                    ${animate ? 
                                        <AnimatedNumbers includeComma animateToNumber={currentPrice} configs={[
                                            { mass: 1, tension: 320, friction: 100 },
                                        ]}></AnimatedNumbers> : 
                                        currentPrice
                                    }
                                </span>
                            </strong>
                        </div>
                    </div>
                    <div className='submit-info-container'>
                        <button className='submit-button'>Submit Form!</button>
                    </div>
                    <p style={{marginBottom: 0}}><span className='special-package'>NOTE: </span>The price estimate that you get here may vary from the final price especially if hourly* or conditional** options are selected, but does give a good ballpark as to what to expect!</p>
                    <p>We will be in touch with you via text shortly after you submit the form!</p>

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

                {/* <form style={{marginTop: 10 + 'vh'}} action="https://dirtlessdetailing.us9.list-manage.com/subscribe/post?u=752a73821b38b96d23f195a09&amp;id=d2a4976ed6&amp;f_id=00e011e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" noValidate>
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
                </form> */}
            </div>
        </section>
    )
}