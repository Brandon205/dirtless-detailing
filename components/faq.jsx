import { useState } from 'react';
import { BsQuestionCircleFill } from 'react-icons/bs';
import { RxCaretUp } from 'react-icons/rx';
import { RxCaretDown } from 'react-icons/rx';
import styles from '../utils/Funnel.module.css';

export default function Faq() {
    const [q1, setQ1] = useState(false)
    const [q2, setQ2] = useState(false)
    const [q3, setQ3] = useState(false)
    const [q4, setQ4] = useState(false)
    const [q5, setQ5] = useState(false)

    return (
        <div className={styles.faqContainer}>
            <ul className={styles.faqUl}>
                <li className={styles.liContainer}>
                    <h4 onClick={() => setQ2(!q2)} className={styles.faqQ}><BsQuestionCircleFill className={styles.faqIcon} /> Can I still go through automatic car washes? {q2 ? <RxCaretUp className={styles.faqCaret} /> : <RxCaretDown className={styles.faqCaret} />}</h4>
                    <p style={{maxHeight: q2 ? '300px' : 0, opacity: q2 ? 1 : 0}} className={styles.faqP}>If you want to keep the ceramic coat in good condition and have it last as long as possible, you won't want to go through any car washes, even the touch-less ones.</p>
                </li>

                <li className={styles.liContainer}>
                    <h4 onClick={() => setQ3(!q3)} className={styles.faqQ}><BsQuestionCircleFill className={styles.faqIcon} /> How should I wash/maintain my car after a ceramic coating? {q3 ? <RxCaretUp className={styles.faqCaret} /> : <RxCaretDown className={styles.faqCaret} />}</h4>
                    <p style={{maxHeight: q3 ? '300px' : 0, opacity: q3 ? 1 : 0}} className={styles.faqP}>For washing your coated vehicle you have a couple of options. We recommend scheduling monthly maintenance through us especially if you get our Protect+ Package. Or we can give you a run down on our techniques and recommend you some products to use to prolong the life of your ceramic coating!</p>
                </li>

                <li className={styles.liContainer}>
                    <h4 onClick={() => setQ1(!q1)} className={styles.faqQ}><BsQuestionCircleFill className={styles.faqIcon} /> How long does the ceramic coating last? {q1 ? <RxCaretUp className={styles.faqCaret} /> : <RxCaretDown className={styles.faqCaret} />}</h4>
                    <p style={{maxHeight: q1 ? '300px' : 0, opacity: q1 ? 1 : 0}} className={styles.faqP}>The paint coating should last 5 years, 50,000 miles, or a Lifetime<span className='special-package'>*</span> with our warranty. The coating on any trim, glass, lights, or wheels will typically last about 1 year when taken care of.</p>
                </li>

                <li className={styles.liContainer}>
                    <h4 onClick={() => setQ4(!q4)} className={styles.faqQ}><BsQuestionCircleFill className={styles.faqIcon} /> How does the 5 year warranty work? {q4 ? <RxCaretUp className={styles.faqCaret} /> : <RxCaretDown className={styles.faqCaret} />}</h4>
                    <p style={{maxHeight: q4 ? '300px' : 0, opacity: q4 ? 1 : 0}} className={styles.faqP}>If we do our yearly maintenance on the vehicle we guarantee that the ceramic coat will last 5 years or more.</p>
                </li>

                <li className={styles.liContainer}>
                    <h4 onClick={() => setQ5(!q5)} className={styles.faqQ}><BsQuestionCircleFill className={styles.faqIcon} /> How does the Lifetime warranty work? {q5 ? <RxCaretUp className={styles.faqCaret} /> : <RxCaretDown className={styles.faqCaret} />}</h4>
                    <p style={{maxHeight: q5 ? '300px' : 0, opacity: q5 ? 1 : 0}} className={styles.faqP}>Your vehicles paint coating is guaranteed for life as long as you are on our monthly maintenance schedule. If you ever wish to cancel monthly maintenance, the remainder of your 5 year 50,000 mile warranty you had before takes effect.</p>
                </li>
            </ul>
        </div>
    )
}