import { useState, useEffect } from 'react';
import Head from 'next/head';
import { BsFillTelephoneFill, BsFillChatLeftTextFill } from 'react-icons/bs';
import styles from '../../utils/Funnel.module.css';

import Packages from '../../components/packages';
import Reviews from '../../components/reviews';
import Contact from '../../components/contact';
import Faq from '../../components/faq';
import Gallery from '../../components/gallery';

export default function funnel() {
    const [smallScreen, setSmallScreen] = useState(null);
    const [service, setService] = useState(null);
    const [gallery, setGallery] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 879) {
            setSmallScreen(true);
        } else {
            setSmallScreen(false);
        }
    }, [])

    return (
        <div style={{minHeight: 100 + 'vh'}} className={styles.bgContact}>
            <Head>
                <title>Bonney Lakes Trusted Auto Detailing & Ceramic Coating Detailers</title>
                <meta property="og:title" content='Bonney Lakes Auto Detailing & Ceramic Coating Specialists' />
                <meta name="description" content='Bonney Lakes trusted Auto Detailing Specialists. From normal Inside and out Details to Ceramic Coating Dirt-Less Detailing has you covered!' />
                <meta property="og:description" content='Bonney Lakes trusted Auto Detailing Specialists. From normal Inside and out Details to Ceramic Coating Dirt-Less Detailing has you covered!' />
                <meta property="og:image" content='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0d30edc6-6afe-4162-1f9e-4b57f8e85300/public' />
                <meta property="og:url" content='https://www.dirtlessdetailing.com/funnel' />
                <meta property="type" content="website" />

                <meta name="twitter:title" content='Bonney Lakes Auto Detailing & Ceramic Coating Specialists' />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@dirtless-detailing" />
                <meta name="twitter:description" content='Bonney Lakes trusted Auto Detailing Specialists. From normal Inside and out Details to Ceramic Coating Dirt-Less Detailing has you covered!' />
                <meta name="twitter:image" content='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0d30edc6-6afe-4162-1f9e-4b57f8e85300/public' />

                <link rel="canonical" href='https://www.dirtlessdetailing.com/funnel' />
            </Head>

            <div className={styles.cover} style={{ backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0d30edc6-6afe-4162-1f9e-4b57f8e85300/cover')` }}></div>
            {/* <div className={styles.cover} style={{ backgroundImage: `url('https://res.cloudinary.com/brandon205/video/upload/v1674493877/Dirt-Less%20Detailing/Videos/received_1200318400918064_3_qteejy.mp4')` }}></div> */}
            <div className={styles.servicepageHeader}>
                <div className={styles.headerLogo} style={{ backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0a945e76-f4c0-4e29-ef16-463490d0db00/public')`}}></div>
                <h2 className={styles.pageSubheading}>Upgrade your car's protection and appearance with graphene ceramic coating for a long-lasting shine, scratch, and UV resistance. Invest in your car's future and keep it looking new.</h2>

                <div style={{display: smallScreen ? 'none' : 'flex', alignItems: 'center', justifyContent: 'center', gap: 32}}>
                    <a href="https://www.bbb.org/us/wa/bonney-lake/profile/auto-detailing/dirt-less-detailing-1296-1000135733/#sealclick" target="_blank" rel="noopener">
                        <div className={styles.headerCert} style={{ backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/242a2248-1f41-4edf-b2c5-d508a10bef00/public')`, height: 134 + 'px', width: 134 + 'px' }}></div>
                    </a>

                    <a href="https://iglcoatingsusa.com/" target="_blank" rel="noopener">
                        <div className={styles.headerCert} style={{ backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/833088d3-ca7b-41b9-561f-21f8517f3300/public')`, height: 165 + 'px', width: 145 + 'px' }}></div>
                    </a>
                </div>

                <div>
                    <a href="#form" className={styles.quoteBtn}>Get a Free Quote</a>
                    <a href="tel:2532529758" className={styles.mainQuoteBtn}><BsFillTelephoneFill className={styles.callIcon} /> (253) 252-9758 <BsFillChatLeftTextFill className={styles.callIcon} /></a>
                </div>
            </div>

            <div className={styles.diagonal}>
                <h1 className={styles.textXl}>Bonney Lake's Trusted Auto Detailing Specialists</h1>
                <p className={styles.diagonalP}>
                    We are Bonney Lake's go to spot for Ceramic Coatings and all of your detailing needs. Getting you car detailed couldn't be easier through us!
                </p>
            </div>

            <Packages setPackage={setService} />

            <div className={styles.diagonal} style={{marginTop: 10 + 'vh', marginBottom: 8 + 'vh'}}>
                <h2 id='form' className={styles.textXl}>Contact Us</h2>
                <p className={styles.diagonalP}>And bring your car back to life!</p>
            </div>

            <div className={styles.contactContainer}>
                <Contact package={service} />
                <div className={styles.contactPhoto} style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/5b0798e5-2648-4845-168b-98e7ff013100/public')`}}></div>
            </div>

            <div className={styles.diagonal} style={{marginTop: 10 + 'vh'}}>
                <h2 className={styles.textXl}>5 Star Reviews</h2>
                <p className={styles.diagonalP}>Read some of the great reviews made by our great customers!</p>
            </div>

            <Reviews />

            <h2 className={styles.textXl}>Gallery</h2>
            <p className={styles.diagonalP}>Small showcase of the vehicles we have been able to work on!</p>

            <Gallery show={gallery} />
            <button onClick={() => setGallery(!gallery)}>Show More</button>

            <h2 className={styles.textXl}>FAQ</h2>
            <p className={styles.diagonalP}>Get answers to some of our most commonly asked questions about ceramic coatings.</p>

            <Faq />

            <div className={styles.bottomCTA}>
                <a href="#form" className={styles.quoteBtn}>Get a Free Quote Today!</a>
                <a href="tel:2532529758" className={styles.quoteBtn}><BsFillTelephoneFill className={styles.callIcon} /> (253) 252-9758 <BsFillChatLeftTextFill className={styles.callIcon} /></a>
            </div>

        </div>
    )
}