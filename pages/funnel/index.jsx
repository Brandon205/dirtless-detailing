import { useState, useEffect } from 'react';
import styles from './Funnel.module.css';

import Packages from './packages';
import Reviews from './reviews';
import Contact from './contact';
import Faq from './faq';

export default function funnel() {
    const [smallScreen, setSmallScreen] = useState(null);

    useEffect(() => {
        if (window.innerWidth < 879) {
            setSmallScreen(true);
        } else {
            setSmallScreen(false);
        }
    }, [])

    return (
        <div style={{minHeight: 100 + 'vh'}} className={styles.bgContact}>
            <div className="cover" style={{ backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0d30edc6-6afe-4162-1f9e-4b57f8e85300/cover')` }}></div>
            <div className="servicepage-header">
                <h1>DIRT-LESS DETAILING</h1>
                <h2 className='page-subheading'>CERAMIC COATING • EXTERIOR WASH • INTERIOR DETAILING • PAINT CORRECTION</h2>

                <div style={{display: smallScreen ? 'none' : 'flex', alignItems: 'center', justifyContent: 'center', gap: 32}}>
                    <a href="https://www.bbb.org/us/wa/bonney-lake/profile/auto-detailing/dirt-less-detailing-1296-1000135733/#sealclick" target="_blank" rel="noopener">
                        <div className="header-cert" style={{ backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/242a2248-1f41-4edf-b2c5-d508a10bef00/public')`, height: 134 + 'px', width: 134 + 'px' }}></div>
                    </a>

                    <a href="https://iglcoatingsusa.com/" target="_blank" rel="noopener">
                        <div className="header-cert" style={{ backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/833088d3-ca7b-41b9-561f-21f8517f3300/public')`, height: 165 + 'px', width: 145 + 'px' }}></div>
                    </a>
                </div>

                <a href="/Contact" className="quote-btn service-page-quote-btn">Get a Quote</a>
                <p className='inline text-small'>
                    Call/Text: <a href="tel:2532529758" className="contact-link footer-contact-link" target="_blank" rel="noopener">(253) 252-9758</a>
                </p>
            </div>

            <div className={styles.diagonal}>
                <h1 className={styles.textXl}>Bonney Lake's Trusted Auto Detailing Specialists</h1>
                <p className={styles.diagonalP}>
                    We are Bonney Lake's go to spot for Ceramic Coatings and all of your detailing needs. Getting you car detailed couldn't be easier through us!
                    <br />
                    Below you will find our trusted and best services grouped into simple package structures. 
                </p>
            </div>

            <Packages />

            <div className={styles.diagonal} style={{marginTop: 10 + 'vh'}}>
                <h2 className={styles.textXl}>Contact Us</h2>
                <p className={styles.diagonalP}>And bring your car back to life!</p>
            </div>

            <Contact />

            <div className={styles.diagonal} style={{marginTop: 10 + 'vh'}}>
                <h2 className={styles.textXl}>5 Star Reviews</h2>
                <p className={styles.diagonalP}>Read some of the great reviews made by our great customers!</p>
            </div>

            <Reviews />

            <h2 className={styles.textXl}>FAQ</h2>
            <p className={styles.diagonalP}>Get answers to some of our most commonly asked questions</p>

            <Faq />

            <div className={styles.bottomCTA}>
                <a href="/Contact" className="quote-btn service-page-quote-btn">Get a Free Quote Today!</a>
            </div>

        </div>
    )
}