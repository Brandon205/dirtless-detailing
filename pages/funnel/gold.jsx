import { useState } from 'react';
import Head from 'next/head';
import { GiGoldBar } from 'react-icons/gi';
import { AiFillCheckCircle } from 'react-icons/ai';
import { MdOutlinePermPhoneMsg } from 'react-icons/md';
import styles from '../../utils/Funnel.module.css';

export default function Gold() {
    const [service, setService] = useState('interior');

    let content;
    switch (service) {
        case 'interior':
            content = (
                <div>
                    <h2>Our Interior Detailing Process</h2>
                    <ul className={styles.detailCardUl}>
                        <li key={1} style={{animationDuration: 0.5 + 's'}} className={styles.detailCardLi}>
                            <div className='step-number-container'>
                                <h3 className='step-number'>1</h3><div className="vertical-rule"></div>
                            </div>
                            <div className='step-container'>
                                <p className='step-desc'>Expose Hidden Dirt, and Vacuum the Vehicle.</p>
                            </div>
                        </li>
                        <li key={2} style={{animationDuration: 0.9 + 's'}} className={styles.detailCardLi}>
                            <div className='step-number-container'>
                                <h3 className='step-number'>2</h3><div className="vertical-rule"></div>
                            </div>
                            <div className='step-container'>
                                <p className='step-desc'>(If needed) Perform a Hot Water Extraction.</p>
                            </div>
                        </li>
                        <li key={3} style={{animationDuration: 1.3 + 's'}} className={styles.detailCardLi}>
                            <div className='step-number-container'>
                                <h3 className='step-number'>3</h3><div className="vertical-rule"></div>
                            </div>
                            <div className='step-container'>
                                <p className='step-desc'>Clean and Dress Plastics and Leathers.</p>
                            </div>
                        </li>
                        <li key={4} style={{animationDuration: 1.7 + 's'}} className={styles.detailCardLi}>
                            <div className='step-number-container'>
                                <h3 className='step-number'>4</h3><div className="vertical-rule"></div>
                            </div>
                            <div className='step-container'>
                                <p className='step-desc'>Clean Door Jambs and Windows.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            )
            break;
        case 'exterior':
            content = (
                <div>
                    <h2>Our Exterior Washing Process</h2>
                    <ul className={styles.detailCardUl}>
                        <li key={5} style={{animationDuration: 0.5 + 's'}} className={styles.detailCardLi}>
                            <div className='step-number-container'>
                                <h3 className='step-number'>1</h3><div className="vertical-rule"></div>
                            </div>
                            <div className='step-container'>
                                <p className='step-desc'>Thoroughly Wash Vehicle and Wheels.</p>
                            </div>
                        </li>
                        <li key={6} style={{animationDuration: 0.9 + 's'}} className={styles.detailCardLi}>
                            <div className='step-number-container'>
                                <h3 className='step-number'>2</h3><div className="vertical-rule"></div>
                            </div>
                            <div className='step-container'>
                                <p className='step-desc'>Remove any Tar and Sap.</p>
                            </div>
                        </li>
                        <li key={7} style={{animationDuration: 1.3 + 's'}} className={styles.detailCardLi}>
                            <div className='step-number-container'>
                                <h3 className='step-number'>3</h3><div className="vertical-rule"></div>
                            </div>
                            <div className='step-container'>
                                <p className='step-desc'>Iron Decontamination and Clay Bar the Vehicle.</p>
                            </div>
                        </li>
                        <li key={8} style={{animationDuration: 1.7 + 's'}} className={styles.detailCardLi}>
                            <div className='step-number-container'>
                                <h3 className='step-number'>4</h3><div className="vertical-rule"></div>
                            </div>
                            <div className='step-container'>
                                <p className='step-desc'>Dry Vehicle off and Apply Wax</p>
                            </div>
                        </li>
                        <li key={9} style={{animationDuration: 2.1 + 's'}} className={styles.detailCardLi}>
                            <div className='step-number-container'>
                                <h3 className='step-number'>5</h3><div className="vertical-rule"></div>
                            </div>
                            <div className='step-container'>
                                <p className='step-desc'>Clean Door Jambs.</p>
                            </div>
                        </li>
                        <li key={10} style={{animationDuration: 2.5 + 's'}} className={styles.detailCardLi}>
                            <div className='step-number-container'>
                                <h3 className='step-number'>6</h3><div className="vertical-rule"></div>
                            </div>
                            <div className='step-container'>
                                <p className='step-desc'>Dress Vehicle.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            )
            break;
        case 'engine':
            content = (
                <div>
                    <h2>Our Engine Bay Cleaning Process</h2>
                    <ul className={styles.detailCardUl}>
                        <li key={11} style={{animationDuration: 0.5 + 's'}} className={styles.detailCardLi}>
                            <div className='step-number-container'>
                                <h3 className='step-number'>1</h3><div className="vertical-rule"></div>
                            </div>
                            <div className='step-container'>
                                <p className='step-desc'>Cover/Close anything that shouldn't get wet.</p>
                            </div>
                        </li>
                        <li key={12} style={{animationDuration: 0.9 + 's'}} className={styles.detailCardLi}>
                            <div className='step-number-container'>
                                <h3 className='step-number'>2</h3><div className="vertical-rule"></div>
                            </div>
                            <div className='step-container'>
                                <p className='step-desc'>Rinse the Engine Bay off.</p>
                            </div>
                        </li>
                        <li key={13} style={{animationDuration: 1.3 + 's'}} className={styles.detailCardLi}>
                            <div className='step-number-container'>
                                <h3 className='step-number'>3</h3><div className="vertical-rule"></div>
                            </div>
                            <div className='step-container'>
                                <p className='step-desc'>Apply our cleaner and scrub all areas of the engine bay.</p>
                            </div>
                        </li>
                        <li key={14} style={{animationDuration: 1.7 + 's'}} className={styles.detailCardLi}>
                            <div className='step-number-container'>
                                <h3 className='step-number'>4</h3><div className="vertical-rule"></div>
                            </div>
                            <div className='step-container'>
                                <p className='step-desc'>Rinse the Engine Bay off again.</p>
                            </div>
                        </li>
                        <li key={15} style={{animationDuration: 2.1 + 's'}} className={styles.detailCardLi}>
                            <div className='step-number-container'>
                                <h3 className='step-number'>5</h3><div className="vertical-rule"></div>
                            </div>
                            <div className='step-container'>
                                <p className='step-desc'>Dress Engine Bay.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            )
            break;
    }

    let serviceImage;
    if (service === 'interior') {
        serviceImage = 'https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/65eea438-142c-4422-24fe-16ec7eac3700/public'
    } else if (service === 'exterior') {
        serviceImage = 'https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/920c592d-31ee-41b9-2d3b-0b95d6ca7500/public'
    } else if (service === 'engine') {
        serviceImage = 'https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/4181890d-4471-47ce-496a-51433a279800/public'
    }

    console.log(service)

    return (
        <div className={styles.bgContact}>
            <Head>
                <title>Gold Package Details | Dirt-Less Detailing</title>
                <meta property="og:title" content='Gold Package Details | Dirt-Less Detailing' />
                <meta name="description" content='Our Gold package will get your whole vehicle washed from inside out, leaving it cleaner than ever!' />
                <meta property="og:description" content='Our Gold package will get your whole vehicle washed from inside out, leaving it cleaner than ever!' />
                <meta property="og:image" content='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0d30edc6-6afe-4162-1f9e-4b57f8e85300/public' />
                <meta property="og:url" content='https://www.dirtlessdetailing.com/funnel/gold' />
                <meta property="type" content="website" />
                <meta property="og:type" content="website" />

                <meta name="twitter:title" content='Gold Package Details | Dirt-Less Detailing' />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@dirtless-detailing" />
                <meta name="twitter:description" content='Our Gold package will get your whole vehicle washed from inside out, leaving it cleaner than ever!' />
                <meta name="twitter:image" content='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0d30edc6-6afe-4162-1f9e-4b57f8e85300/public' />

                <link rel="canonical" href='https://www.dirtlessdetailing.com/funnel/gold' />
            </Head>

            <div className={styles.cover} style={{ backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0d30edc6-6afe-4162-1f9e-4b57f8e85300/cover')` }}></div>
            <div className={styles.servicepageHeader}>
                <h1>GOLD PACKAGE</h1>
                <h2 className={styles.pageSubheading}>Looking for a comprehensive auto detailing service that will make your car look and feel like new again? Look no further than our Gold Package!</h2>

                <div style={{display: 'flex'}}>
                    <a href="#form" className={styles.quoteBtn}>Get a Free Quote</a>
                    <a href="tel:2532529758" className={styles.mainQuoteBtn}><MdOutlinePermPhoneMsg className={styles.callIcon} /> (253) 252-9758</a>
                </div>
            </div>

            <div className={styles.diagonal}>
                <h1 className={styles.textXl}>Our Gold Package Details</h1>
                <p className={styles.diagonalP}>
                    Our most simple but cost effective package yet! We'll cover the interior, exterior, and even the engine bay with this package!
                </p>
            </div>

            <main style={{marginTop: 10 + 'vh'}} className="service-main">
                <div className="service-explain">
                    <div className="text-left">
                        <h2 className='text-large'>Gold Package</h2>
                        <p>Our Full Interior Detail service includes a thorough cleaning of every nook and cranny inside your car. We'll remove all dirt, dust, and debris from your carpets, seats, and upholstery, and make sure your dashboard, door panels, and console are spotless. We'll also clean your windows, leaving them crystal clear and streak-free.</p>
                        <p>Our Premium Dirt-Less Wash service uses the latest technology to wash your car safely, preventing dirt and grime from sticking to your freshly cleaned car. Not only does this give your car a superior clean, but it's also environmentally friendly.</p>
                        <p>Finally, our Engine Bay Cleaning service will give your engine a thorough cleaning, removing any built-up grime or grease. Not only will your engine bay look great, but a clean engine can also run more efficiently and last longer.</p>
                        <p>Together, these three services will leave your car looking and feeling like new again, both inside and out. Don't settle for a subpar detailing job - trust our team of experts to give your car the care it deserves. Book your appointment today!</p>
                    </div>
                    <div className="service-image" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/5b0798e5-2648-4845-168b-98e7ff013100/public')`}}></div>
                </div>
            </main>

            <div className={styles.detailsContainer}>
                <div style={{boxShadow: 'none', margin: 0}} className={styles.card}>
                    <div className={styles.cardHeader}>
                        <a href='/services/single-stage-correction' className={styles.serviceHeadingLink}><GiGoldBar style={{color: 'gold' }} /> GOLD PACKAGE</a>
                        <p className={styles.price}>Starting at: <span>$399</span></p>
                    </div>
                    <div className={styles.popularImg} style={{backgroundImage: `url(${serviceImage})`}}></div>

                    <ul className={styles.detailsChecklist}>
                        <li style={{backgroundColor: service === 'interior' ? 'gray' : '#80808000'}} onClick={() => setService('interior')} className={styles.packageChecklistItem}>
                            <AiFillCheckCircle style={{color: 'gold'}} className={styles.checkcircle} />
                            <p>Full Interior Detail</p>
                        </li>
                        <li style={{backgroundColor: service === 'exterior' ? 'gray' : '#80808000'}} onClick={() => setService('exterior')} className={styles.packageChecklistItem}>
                            <AiFillCheckCircle style={{color: 'gold'}} className={styles.checkcircle} />
                            <p>Our Premium Dirt-Less Wash</p>
                        </li>
                        <li style={{backgroundColor: service === 'engine' ? 'gray' : '#80808000'}} onClick={() => setService('engine')} className={styles.packageChecklistItem}>
                            <AiFillCheckCircle style={{color: 'gold'}} className={styles.checkcircle} />
                            <p>Engine Bay Cleaning</p>
                        </li>
                    </ul>
                </div>

                <div className={styles.detailsCard}>
                    {content}
                </div>
            </div>
        </div>
    )
}