import Head from 'next/head';
import { MdOutlinePermPhoneMsg } from 'react-icons/md';
import styles from '../../utils/Funnel.module.css';

export default function Gold() {
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
                <h2 className={styles.pageSubheading}>Upgrade your cars armor and appearance with a Graphene Ceramic Coating for a long lasting shine, protection, UV resistance and more! Invest in your cars future to keep it looking like the day you got it!</h2>

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
        </div>
    )
}