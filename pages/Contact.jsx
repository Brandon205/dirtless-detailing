import React, { useRef, useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useMultistepForm } from '../utils/UseMultistepForm';
import { BasicInfo } from '../utils/BasicInfo';
import { SizeAndType } from '../utils/SizeAndType';
import { ServiceType } from '../utils/ServiceType';
import Head from 'next/head';
import Metatags from '../utils/Metatags';
import prices from '../utils/Prices';
import 'react-toastify/dist/ReactToastify.css';

import dynamic from "next/dynamic";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const INITIAL_DATA = {
    name: "",
    email: "",
    phone: "",
    year: "",
    make: "",
    model: "",
    gift: "Myself",
    message: "",
    serviceType: "",
    vehicleSize: "2 Door",
    interior: "",
    exterior: "",
    addons: [],
}

export default function Contact() {
    // const [dirtiness, setDirtiness] = useState('');
    // const [dogHair, setDogHair] = useState('');

    const [data, setData] = useState(INITIAL_DATA);
    
    // State for pricing section
    const [currentPrice, setCurrentPrice] = useState(0);
    const [animate, setAnimate] = useState(false);
    
    useEffect(() => {
        setTimeout(() => {
            setAnimate(true)
        }, 1500)
    }, [])

    useEffect(() => {
        updatePrices()
    }, [data.vehicleSize, data.interior, data.exterior, data.addons])

    function updatePrices() {
        let tempPrice = 0;
        let dataArr = {interior: data.interior, exterior: data.exterior, addons: data.addons, vehicleSize: data.vehicleSize};

        if (dataArr.interior.length > 0) {
            let tempService = dataArr.interior.replace(/\s/g, '').toLowerCase()
            tempPrice += prices[dataArr.vehicleSize].interior[tempService]
        }
        if (dataArr.exterior.length > 0) {
            let tempService = dataArr.exterior.replace(/\s/g, '').toLowerCase()
            console.log(tempService)
            tempPrice += prices[dataArr.vehicleSize].exterior[tempService]
        }
        if (dataArr.addons.length > 0) {
            dataArr.addons.forEach(addon => {
                tempPrice += prices.addons[addon]
            })
        }

        setCurrentPrice(tempPrice)
    }

    function updateFields(fields) {
        setData(prev => {
            if (fields.addons) { // For adding/removing addons from the addons array
                let tempArr = [...prev.addons];

                if (prev.serviceType === 'Both' && tempArr.length > 0) { // The "Both" serviceType can have both of the addons selected
                    if (tempArr.includes(fields.addons)) {
                        tempArr.splice(tempArr.indexOf(fields.addons), 1)
                    } else {
                        tempArr.push(fields.addons)
                    }
                } else { // If not both then only one addon can be selected
                    if (prev.addons.includes(fields.addons)) {
                        tempArr = []
                    } else {
                        tempArr = []
                        tempArr.push(fields.addons)
                    }
                }

                fields.addons = tempArr
            }

            return { ...prev, ...fields }
        })
    }

    const { steps, currentStepIndex, step, isFirstStep, isLastStep, next, back } =
    useMultistepForm([
        <SizeAndType {...data} updateFields={updateFields} />,
        <ServiceType {...data} updateFields={updateFields} />,
        <BasicInfo {...data} updateFields={updateFields} />,
    ])

    // let formRef = useRef();

    // const formSubmit = (e) => {
    //     e.preventDefault();
    //     let classification;
    //     switch (vehicle) {
    //         case 0:
    //             classification = '2 Door Car';
    //             break;
    //         case 1:
    //             classification = 'Quarter Ton Truck';
    //             break;
    //         case 2:
    //             classification = '4 Door Car';
    //             break;
    //         case 3:
    //             classification = 'Mid-Size SUV';
    //             break;
    //         case 4:
    //             classification = '4 Door Truck';
    //             break;
    //         case 5:
    //             classification = '3 Row SUV';
    //             break;
    //         default:
    //             classification = '2 Door Car';
    //     }

    //     const formInfo = {
    //         "Who's it for?:": gift,
    //         "Name": e.target['name'].value,
    //         "Email": e.target['email'].value,
    //         "Phone": phoneNumber,
    //         "Year": e.target['year'].value,
    //         "Make": e.target['make'].value,
    //         "Model": e.target['model'].value,
    //         "Vehicle Size": classification,

    //         "Exterior Service": exteriorService,
    //         "Exterior Addons": exteriorAddons,
    //         "Interior Service": interiorService,
    //         "Interior Addons": interiorAddons,
    //         "Combo": combo === 'Combo' ? 'Yes' : '',
    //         "Dirtiness": dirtiness,
    //         "Dog Hair": dogHair,
    //         "VIP": vip,
    //         "Price Estimate": currentPrice
    //     }

    //     const formData = new FormData();
    //     Object.entries(formInfo).forEach(([key, value]) => {
    //         if (value.length > 0) {
    //             if (key === 'Interior Addons') {
    //                 let addonStr = '';
    //                 interiorAddons.forEach((item, id) => {
    //                     if (id === 0) {
    //                         addonStr += item;
    //                     } else {
    //                         addonStr += ', ' + item
    //                     }
    //                 })
    //                 formData.append(key, addonStr);
    //             } else if (key === 'Exterior Addons') {
    //                 let addonStr = '';
    //                 exteriorAddons.forEach((item, id) => {
    //                     if (id === 0) {
    //                         addonStr += item;
    //                     } else {
    //                         addonStr += ', ' + item
    //                     }
    //                 })
    //                 formData.append(key, addonStr);
    //             } else {
    //                 formData.append(key, value)
    //             }
    //         } else if (key === 'Price Estimate') {
    //             formData.append(key, value);
    //         }
    //     });
        
    //     if (interiorService.length > 0) {
    //         if (dirtiness === '' || dogHair === '') {
    //             toast.error("Please fill out the Interior Dirtiness and Dog Hair Sections.", {
    //                 position: "bottom-center",
    //                 autoClose: 5000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined
    //             })
    //         } else {
    //             finalSubmit(formData, e);
    //         }
    //     } else if (interiorService.length === 0) {
    //         finalSubmit(formData, e)
    //     }
    // };

    function formSubmit(e) {
        e.preventDefault();
        if (!isLastStep) {
            if (currentStepIndex === 0 && data.serviceType.length === 0) {
                return toast.error('Please select a service type!', {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                })
            } else if (currentStepIndex === 1 && data.interior === "" && data.exterior === "" ) {
                return toast.error('Please select a service!', {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                })
            } else {
                if (data.serviceType !== "Both") {
                    if (data.serviceType === "Interior") {
                        updateFields({exterior: ""})
                    } else if (data.serviceType === "Exterior") {
                        updateFields({interior: ""})
                    }
                }
                return next();
            }
        };
        alert("Successful submit!!!")
        console.log(data)
    }

    // const finalSubmit = (formData, e) => {
    //     console.log(formData);
    //     fetch("https://getform.io/f/10015c2d-db32-409b-884d-54c141a3b141", {
    //         method: "POST",
    //         body: formData
    //     }).then((test) => {
    //         toast.success("Form submitted! Expect a text response from us soon!", {
    //             position: "bottom-center",
    //             autoClose: 5000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined
    //         })
    //         e.target.reset();
    //         setPhoneNumber('');
    //         setDirtiness('');
    //         setDogHair('');
    //         setExteriorService('');
    //         setExteriorAddons([]);
    //         setInteriorService('');
    //         setInteriorAddons([]);
    //         setCombo('');
    //         setVip('');
    //         setVehicle(0);
    //         setGift('Myself');
    //         setCurrentPrice(0);
    //         window.scrollTo(0, 0);

    //     }).catch(error => {
    //         toast.error("An error occurred, please try again." + error, {
    //             position: "bottom-center",
    //             autoClose: 5000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined
    //         })
    //     });
    // }

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
                <p>{currentStepIndex + 1} / {steps.length}</p>
                <form className="form" id="form" onSubmit={(e) => formSubmit(e)}>

                    <div>
                        {step}
                        {/* steps[currStep] */}
                    </div>

                    <div className="form-controls-container">
                        {!isFirstStep && (
                            <button type="button" onClick={back}>Back</button>
                            )}
                        <button type="submit">{isLastStep ? "Finish" : "Next"}</button>

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

                    {/* <div className='submit-info-container'>
                        <button type="submit" className='submit-button'>Submit Form!</button>
                    </div> */}
                    {/* <p style={{marginBottom: 0}}><span className='special-package'>NOTE: </span>The price estimate that you get here may vary from the final price especially if hourly* or conditional** options are selected, but does give a good ballpark as to what to expect!</p>
                    <p>We will be in touch with you via text shortly after you submit the form!</p> */}

                </form>
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
