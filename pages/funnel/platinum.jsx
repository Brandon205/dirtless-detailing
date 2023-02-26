import { useState } from 'react';
import Head from 'next/head';
import { SlBadge } from 'react-icons/sl';
import { AiFillCheckCircle } from 'react-icons/ai';
import { MdOutlinePermPhoneMsg } from 'react-icons/md';
import styles from '../../utils/Funnel.module.css';

export default function Platinum() {
    const [service, setService] = useState('interior');

    let content;
    switch (service) {
        case 'interior':
            content = (
                <div>
                    <h2>Our Interior Detailing Process</h2>
                    <hr className={styles.cardHr} />
                    <ul className={styles.detailCardUl}>
                        <li key={1} style={{animationDuration: 0.5 + 's'}} className={styles.detailCardLi}>
                            <div className={styles.stepNumberContainer}>
                                <h3 className={styles.stepNumber}>1</h3><div className={styles.verticalRule}></div>
                            </div>
                            <p className={styles.stepDesc}>Expose Hidden Dirt, and Vacuum the Vehicle.</p>
                        </li>
                        <li key={2} style={{animationDuration: 0.9 + 's'}} className={styles.detailCardLi}>
                            <div className={styles.stepNumberContainer}>
                                <h3 className={styles.stepNumber}>2</h3><div className={styles.verticalRule}></div>
                            </div>
                            <p className={styles.stepDesc}>(If needed) Perform a Hot Water Extraction.</p>
                        </li>
                        <li key={3} style={{animationDuration: 1.3 + 's'}} className={styles.detailCardLi}>
                            <div className={styles.stepNumberContainer}>
                                <h3 className={styles.stepNumber}>3</h3><div className={styles.verticalRule}></div>
                            </div>
                            <p className={styles.stepDesc}>Clean and Dress Plastics and Leathers.</p>
                        </li>
                        <li key={4} style={{animationDuration: 1.7 + 's'}} className={styles.detailCardLi}>
                            <div className={styles.stepNumberContainer}>
                                <h3 className={styles.stepNumber}>4</h3><div className={styles.verticalRule}></div>
                            </div>
                            <p className={styles.stepDesc}>Clean Door Jambs and Windows.</p>
                        </li>
                    </ul>
                </div>
            )
            break;
        case 'exterior':
            content = (
                <div>
                    <h2>Our Exterior Washing Process</h2>
                    <hr className={styles.cardHr} />
                    <ul className={styles.detailCardUl}>
                        <li key={5} style={{animationDuration: 0.5 + 's'}} className={styles.detailCardLi}>
                            <div className={styles.stepNumberContainer}>
                                <h3 className={styles.stepNumber}>1</h3><div className={styles.verticalRule}></div>
                            </div>
                            <p className={styles.stepDesc}>Thoroughly Wash Vehicle and Wheels.</p>
                        </li>
                        <li key={6} style={{animationDuration: 0.9 + 's'}} className={styles.detailCardLi}>
                            <div className={styles.stepNumberContainer}>
                                <h3 className={styles.stepNumber}>2</h3><div className={styles.verticalRule}></div>
                            </div>
                            <p className={styles.stepDesc}>Remove any Tar and Sap.</p>
                        </li>
                        <li key={7} style={{animationDuration: 1.3 + 's'}} className={styles.detailCardLi}>
                            <div className={styles.stepNumberContainer}>
                                <h3 className={styles.stepNumber}>3</h3><div className={styles.verticalRule}></div>
                            </div>
                            <p className={styles.stepDesc}>Iron Decontamination and Clay Bar the Vehicle.</p>
                        </li>
                        <li key={8} style={{animationDuration: 1.7 + 's'}} className={styles.detailCardLi}>
                            <div className={styles.stepNumberContainer}>
                                <h3 className={styles.stepNumber}>4</h3><div className={styles.verticalRule}></div>
                            </div>
                            <p className={styles.stepDesc}>Dry Vehicle off and Apply Wax</p>
                        </li>
                        <li key={9} style={{animationDuration: 2.1 + 's'}} className={styles.detailCardLi}>
                            <div className={styles.stepNumberContainer}>
                                <h3 className={styles.stepNumber}>5</h3><div className={styles.verticalRule}></div>
                            </div>
                            <p className={styles.stepDesc}>Clean Door Jambs.</p>
                        </li>
                        <li key={10} style={{animationDuration: 2.5 + 's'}} className={styles.detailCardLi}>
                            <div className={styles.stepNumberContainer}>
                                <h3 className={styles.stepNumber}>6</h3><div className={styles.verticalRule}></div>
                            </div>
                            <p className={styles.stepDesc}>Dress Vehicle.</p>
                        </li>
                    </ul>
                </div>
            )
            break;
        case 'engine':
            content = (
                <div>
                    <h2>Our Engine Bay Cleaning Process</h2>
                    <hr className={styles.cardHr} />
                    <ul className={styles.detailCardUl}>
                        <li key={11} style={{animationDuration: 0.5 + 's'}} className={styles.detailCardLi}>
                            <div className={styles.stepNumberContainer}>
                                <h3 className={styles.stepNumber}>1</h3><div className={styles.verticalRule}></div>
                            </div>
                            <p className={styles.stepDesc}>Cover/Close anything that shouldn't get wet.</p>
                        </li>
                        <li key={12} style={{animationDuration: 0.9 + 's'}} className={styles.detailCardLi}>
                            <div className={styles.stepNumberContainer}>
                                <h3 className={styles.stepNumber}>2</h3><div className={styles.verticalRule}></div>
                            </div>
                            <p className={styles.stepDesc}>Rinse the Engine Bay off.</p>
                        </li>
                        <li key={13} style={{animationDuration: 1.3 + 's'}} className={styles.detailCardLi}>
                            <div className={styles.stepNumberContainer}>
                                <h3 className={styles.stepNumber}>3</h3><div className={styles.verticalRule}></div>
                            </div>
                            <p className={styles.stepDesc}>Apply our cleaner and scrub all areas of the engine bay.</p>
                        </li>
                        <li key={14} style={{animationDuration: 1.7 + 's'}} className={styles.detailCardLi}>
                            <div className={styles.stepNumberContainer}>
                                <h3 className={styles.stepNumber}>4</h3><div className={styles.verticalRule}></div>
                            </div>
                            <p className={styles.stepDesc}>Rinse the Engine Bay off again.</p>
                        </li>
                        <li key={15} style={{animationDuration: 2.1 + 's'}} className={styles.detailCardLi}>
                            <div className={styles.stepNumberContainer}>
                                <h3 className={styles.stepNumber}>5</h3><div className={styles.verticalRule}></div>
                            </div>
                            <p className={styles.stepDesc}>Dress Engine Bay.</p>
                        </li>
                    </ul>
                </div>
            )
            break;
        case 'polish':
            content = (
                <div>
                    <h2>Our Paint Correction Process</h2>
                    <hr className={styles.cardHr} />
                    <ul className={styles.detailCardUl}>
                        <li key={16} style={{animationDuration: 0.5 + 's'}} className={styles.detailCardLi}>
                            <div className={styles.stepNumberContainer}>
                                <h3 className={styles.stepNumber}>1</h3><div className={styles.verticalRule}></div>
                            </div>
                            <p className={styles.stepDesc}>Wash the entire vehicle (Premium Dirt-Less Wash).</p>
                        </li>
                        <li key={17} style={{animationDuration: 0.9 + 's'}} className={styles.detailCardLi}>
                            <div className={styles.stepNumberContainer}>
                                <h3 className={styles.stepNumber}>2</h3><div className={styles.verticalRule}></div>
                            </div>
                            <p className={styles.stepDesc}>Tape off vehicle before polishing.</p>
                        </li>
                        <li key={18} style={{animationDuration: 1.3 + 's'}} className={styles.detailCardLi}>
                            <div className={styles.stepNumberContainer}>
                                <h3 className={styles.stepNumber}>3</h3><div className={styles.verticalRule}></div>
                            </div>
                            <p className={styles.stepDesc}>Using Griot's products perform the Paint Correction.</p>
                        </li>
                        <li key={19} style={{animationDuration: 1.7 + 's'}} className={styles.detailCardLi}>
                            <div className={styles.stepNumberContainer}>
                                <h3 className={styles.stepNumber}>4</h3><div className={styles.verticalRule}></div>
                            </div>
                            <p className={styles.stepDesc}>Remove polishing compound and apply Ceramic Coating</p>
                        </li>
                        <li key={20} style={{animationDuration: 2.1 + 's'}} className={styles.detailCardLi}>
                            <div className={styles.stepNumberContainer}>
                                <h3 className={styles.stepNumber}>5</h3><div className={styles.verticalRule}></div>
                            </div>
                            <p className={styles.stepDesc}>Clean Door Jambs and Dress Vehicle</p>
                        </li>
                    </ul>
                </div>
            )
            break;
        case 'ceramicTrim':
            content = (
                <div>
                    <h2>Our Ceramic Trim Process</h2>
                    <hr className={styles.cardHr} />
                    <ul className={styles.detailCardUl}>
                        <li key={21} style={{animationDuration: 0.5 + 's'}} className={styles.detailCardLi}>
                            <div className={styles.stepNumberContainer}>
                                <h3 className={styles.stepNumber}>1</h3><div className={styles.verticalRule}></div>
                            </div>
                            <p className={styles.stepDesc}>After vehicle has been washed, we will apply a coating of ceramic to all the trim on the car.</p>
                        </li>
                    </ul>
                </div>
            )
            break;
        case 'glass':
            content = (
                <div>
                    <h2>Our Glass Treatment Process</h2>
                    <hr className={styles.cardHr} />
                    <ul className={styles.detailCardUl}>
                        <li key={22} style={{animationDuration: 0.5 + 's'}} className={styles.detailCardLi}>
                            <div className={styles.stepNumberContainer}>
                                <h3 className={styles.stepNumber}>1</h3><div className={styles.verticalRule}></div>
                            </div>
                            <p className={styles.stepDesc}>Wash the vehicle.</p>
                        </li>
                        <li key={23} style={{animationDuration: 0.9 + 's'}} className={styles.detailCardLi}>
                            <div className={styles.stepNumberContainer}>
                                <h3 className={styles.stepNumber}>2</h3><div className={styles.verticalRule}></div>
                            </div>
                            <p className={styles.stepDesc}>Apply the Glass Treatment product to the Windshield.</p>
                        </li>
                    </ul>
                </div>
            )
            break;
        case 'tire':
            content = (
                <div>
                    <h2>Our Tire Shine Process</h2>
                    <hr className={styles.cardHr} />
                    <ul className={styles.detailCardUl}>
                        <li key={24} style={{animationDuration: 0.5 + 's'}} className={styles.detailCardLi}>
                            <div className={styles.stepNumberContainer}>
                                <h3 className={styles.stepNumber}>1</h3><div className={styles.verticalRule}></div>
                            </div>
                            <p className={styles.stepDesc}>Wash Wheel Barrels, Wheels, and Tires.</p>
                        </li>
                        <li key={25} style={{animationDuration: 0.5 + 's'}} className={styles.detailCardLi}>
                            <div className={styles.stepNumberContainer}>
                                <h3 className={styles.stepNumber}>2</h3><div className={styles.verticalRule}></div>
                            </div>
                            <p className={styles.stepDesc}>Apply tire shine.</p>
                        </li>
                    </ul>
                </div>
            )
            break;
        case 'ceramic':
            content = (
                <div>
                    <h2>Our Ceramic Coating Process</h2>
                    <hr className={styles.cardHr} />
                    <ul className={styles.detailCardUl}>
                        <li key={26} style={{animationDuration: 0.5 + 's'}} className={styles.detailCardLi}>
                            <div className={styles.stepNumberContainer}>
                                <h3 className={styles.stepNumber}>1</h3><div className={styles.verticalRule}></div>
                            </div>
                            <p className={styles.stepDesc}>Perform a Single Stage Paint Correction.</p>
                        </li>
                        <li key={27} style={{animationDuration: 0.9 + 's'}} className={styles.detailCardLi}>
                            <div className={styles.stepNumberContainer}>
                                <h3 className={styles.stepNumber}>2</h3><div className={styles.verticalRule}></div>
                            </div>
                            <p className={styles.stepDesc}>Carefully apply IGL Kenzo Graphene Ceramic Coating.</p>
                        </li>
                    </ul>
                </div>
            )
            break;
    }

    let serviceImage;
    if (service === 'interior') {
        serviceImage = 'https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/fa5873a1-52da-4477-0ad3-ce763f0ec700/public'
    } else if (service === 'exterior') {
        serviceImage = 'https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/920c592d-31ee-41b9-2d3b-0b95d6ca7500/public'
    } else if (service === 'engine') {
        serviceImage = 'https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/4181890d-4471-47ce-496a-51433a279800/public'
    } else if (service === 'polish') {
        serviceImage = 'https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/05a03dc9-11c9-4ad8-a8a3-eba28b243e00/public'
    } else if (service === 'ceramicTrim') {
        serviceImage = 'https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/942172f8-bb7a-4858-9165-fc94b7dbfc00/public'
    } else if (service === 'glass') {
        serviceImage = 'https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/955e761e-371d-4114-8ac3-550e8be89800/public'
    } else if (service === 'tire') {
        serviceImage = 'https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/c1bf41d1-5f60-454f-ecd2-1887f2172400/public'
    } else if (service === 'ceramic') {
        serviceImage = 'https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/5b0798e5-2648-4845-168b-98e7ff013100/public'
    }

    return (
        <div className={styles.bgContact}>
            <Head>
                <title>Platinum Package Details | Dirt-Less Detailing</title>
                <meta property="og:title" content='Platinum Package Details | Dirt-Less Detailing' />
                <meta name="description" content='Our Platinum package will leave your vehicle completely cleaned and protected from the inside out!' />
                <meta property="og:description" content='Our Platinum package will leave your vehicle completely cleaned and protected from the inside out!' />
                <meta property="og:image" content='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0d30edc6-6afe-4162-1f9e-4b57f8e85300/public' />
                <meta property="og:url" content='https://www.dirtlessdetailing.com/funnel/platinum' />
                <meta property="type" content="website" />
                <meta property="og:type" content="website" />

                <meta name="twitter:title" content='Platinum Package Details | Dirt-Less Detailing' />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@dirtless-detailing" />
                <meta name="twitter:description" content='Our Platinum package will leave your vehicle completely cleaned and protected from the inside out!' />
                <meta name="twitter:image" content='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0d30edc6-6afe-4162-1f9e-4b57f8e85300/public' />

                <link rel="canonical" href='https://www.dirtlessdetailing.com/funnel/platinum' />
            </Head>

            <div className={styles.cover} style={{ backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0d30edc6-6afe-4162-1f9e-4b57f8e85300/cover')` }}></div>
            <div className={styles.servicepageHeader}>
                <h1>PLATINUM PACKAGE</h1>
                <h2 className={styles.pageSubheading}>Looking for the ultimate auto detailing experience? Our Platinum Package has everything you need to keep your car looking and feeling like new for years to come!</h2>

                <div style={{display: 'flex'}}>
                    <a href="#form" className={styles.quoteBtn}>Get a Free Quote</a>
                    <a href="tel:2532529758" className={styles.mainQuoteBtn}><MdOutlinePermPhoneMsg className={styles.callIcon} /> (253) 252-9758</a>
                </div>
            </div>

            <div className={styles.diagonal}>
                <h1 className={styles.textXl}>Our Platinum Package Details</h1>
                <p className={styles.diagonalP}>
                    Our full detailing service topped with a 2 year Ceramic Coating!
                </p>
            </div>

            <main style={{marginTop: 10 + 'vh'}} className={styles.serviceMain}>
                <div className={styles.serviceExplain}>
                    <div className={styles.textLeft}>
                        <h2 className={styles.textLarge}>Platinum Package</h2>
                        <p>This package includes everything offered in our <a href="/funnel/gold" className={styles.asideLink}>Gold Package</a> and more!</p>
                        <p>Our package includes a two-year ceramic coating, which will protect your car's paint from scratches, chips, and other forms of damage. The ceramic coating also provides a high-gloss finish that will make your car shine like never before.</p>
                        <p>But that's not all - this package also includes a full inside and out car wash. We'll clean every inch of your car, from the wheels to the windows, and make sure that every surface is spotless. Our team of detailing experts uses the latest tools and techniques to get your car looking its best.</p>
                        <p>With our Platinum Package, you'll enjoy the peace of mind that comes with knowing your car is protected by the best ceramic coating on the market. And with our top-notch detailing services, you'll always drive a car that looks and feels like it just rolled off the lot.</p>
                        <p>Don't wait any longer to give your car the care it deserves - book your Platinum Package appointment today and experience the ultimate auto detailing experience!</p>
                    </div>
                    <div className={styles.serviceImage} style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/a30c288d-c816-4a42-e313-d7fa80e04200/public')`}}></div>
                </div>
            </main>

            <div className={styles.detailsContainer}>    
                <div style={{boxShadow: 'none', margin: 0}} className={styles.card}>
                    <div className={styles.cardHeader}>
                        <a href='/services/single-stage-correction' className={styles.serviceHeadingLink}><SlBadge style={{color: 'lightblue' }} /> PLATINUM PACKAGE</a>
                        <p className={styles.price}>Starting at: <span>$1,199</span></p>
                    </div>
                    <div className={styles.popularImg} style={{backgroundImage: `url(${serviceImage})`}}></div>

                    <ul className={styles.detailsChecklist}>
                        <li style={{backgroundColor: service === 'interior' ? 'gray' : '#80808000', border: service === 'interior' ? '1px solid white' : 'none'}} onClick={() => setService('interior')} className={styles.packageChecklistItem}>
                            <AiFillCheckCircle style={{color: 'gold'}} className={styles.checkcircle} />
                            <p>Full Interior Detail</p>
                        </li>
                        <li style={{backgroundColor: service === 'exterior' ? 'gray' : '#80808000', border: service === 'exterior' ? '1px solid white' : 'none'}} onClick={() => setService('exterior')} className={styles.packageChecklistItem}>
                            <AiFillCheckCircle style={{color: 'gold'}} className={styles.checkcircle} />
                            <p>Our Premium Dirt-Less Wash</p>
                        </li>
                        <li style={{backgroundColor: service === 'engine' ? 'gray' : '#80808000', border: service === 'engine' ? '1px solid white' : 'none'}} onClick={() => setService('engine')} className={styles.packageChecklistItem}>
                            <AiFillCheckCircle style={{color: 'gold'}} className={styles.checkcircle} />
                            <p>Engine Bay Cleaning</p>
                        </li>
                        <li style={{backgroundColor: service === 'polish' ? 'gray' : '#80808000', border: service === 'polish' ? '1px solid white' : 'none'}} onClick={() => setService('polish')} className={styles.packageChecklistItem}>
                            <AiFillCheckCircle style={{color: 'lightblue'}} className={styles.checkcircle} />
                            <p>Single Stage Paint Correction (Polishing)</p>
                        </li>
                        <li style={{backgroundColor: service === 'ceramicTrim' ? 'gray' : '#80808000', border: service === 'ceramicTrim' ? '1px solid white' : 'none'}} onClick={() => setService('ceramicTrim')} className={styles.packageChecklistItem}>
                            <AiFillCheckCircle style={{color: 'lightblue'}} className={styles.checkcircle} />
                            <p>Apply Ceramic Coating to all Trim</p>
                        </li>
                        <li style={{backgroundColor: service === 'glass' ? 'gray' : '#80808000', border: service === 'glass' ? '1px solid white' : 'none'}} onClick={() => setService('glass')} className={styles.packageChecklistItem}>
                            <AiFillCheckCircle style={{color: 'lightblue'}} className={styles.checkcircle} />
                            <p>Apply Glass Treatment to the Windshield</p>
                        </li>
                        <li style={{backgroundColor: service === 'tire' ? 'gray' : '#80808000', border: service === 'tire' ? '1px solid white' : 'none'}} onClick={() => setService('tire')} className={styles.packageChecklistItem}>
                            <AiFillCheckCircle style={{color: 'lightblue'}} className={styles.checkcircle} />
                            <p>Ceramic Tire Shine</p>
                        </li>
                        <li style={{backgroundColor: service === 'ceramic' ? 'gray' : '#80808000', border: service === 'ceramic' ? '1px solid white' : 'none'}} onClick={() => setService('ceramic')} className={styles.packageChecklistItem}>
                            <AiFillCheckCircle style={{color: 'lightblue'}} className={styles.checkcircle} />
                            <p>2 Year Ceramic Coating</p>
                        </li>
                    </ul>
                </div>


                <div className={styles.detailsCard}>
                    {content}
                </div>
            </div>

            <h3 className={`${styles.pricingTitle} ${styles.textWhite}`}>Platinum Package Pricing</h3>
            <p className={styles.subtext}>*Final pricing may vary based on your vehicle condition and size.</p>
            <div className={styles.pricingContainer}>
                <div className={`${styles.pricingCard} ${styles.textBlack}`}>
                    <strong className={styles.size}>Small</strong>
                    <p className={`${styles.pricingPrice} ${styles.pricingBorder}`}>$1,199</p>
                    <p className={`${styles.exampleVehicle} ${styles.pricingBorder}`}>Smaller Trucks</p>
                    <p className={`${styles.exampleVehicle} ${styles.pricingBorder}`}>Most Cars</p>
                    <a href="/funnel#form" className={styles.pricingQuoteBtn}>Contact Us</a>
                </div>
                <div className={`${styles.pricingCard} ${styles.textBlack}`}>
                    <strong className={styles.size}>Medium</strong>
                    <p className={`${styles.pricingPrice} ${styles.pricingBorder}`}>$1,399</p>
                    <p className={`${styles.exampleVehicle} ${styles.pricingBorder}`}>Mid-Size SUV's</p>
                    <p className={`${styles.exampleVehicle} ${styles.pricingBorder}`}>Most Wagons</p>
                    <a href="/funnel#form" className={styles.pricingQuoteBtn}>Contact Us</a>
                </div>
                <div className={`${styles.pricingCard} ${styles.textBlack}`}>
                    <strong className={styles.size}>Large</strong>
                    <p className={`${styles.pricingPrice} ${styles.pricingBorder}`}>$1,599</p>
                    <p className={`${styles.exampleVehicle} ${styles.pricingBorder}`}>Large SUV's</p>
                    <p className={`${styles.exampleVehicle} ${styles.pricingBorder}`}>Trucks</p>
                    <a href="/funnel#form" className={styles.pricingQuoteBtn}>Contact Us</a>
                </div>
            </div>

            <div className={styles.bottomCTA}>
                <a href="/funnel#form" className={styles.quoteBtn}>Get a Free Quote Today!</a>
                <a href="tel:2532529758" className={styles.mainQuoteBtn}><MdOutlinePermPhoneMsg className={styles.callIcon} /> (253) 252-9758</a>
            </div>
        </div>
    )
}
