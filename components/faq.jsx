import { useState } from 'react';
import { BsQuestionCircleFill } from 'react-icons/bs';
import { RxCaretUp, RxCaretDown } from 'react-icons/rx';
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
                    <div className={styles.liTop} onClick={() => setQ2(!q2)}>
                        <BsQuestionCircleFill className={styles.faqIcon} />
                        <h4 className={styles.faqQ}>Can I still go through automatic car washes?</h4>
                        {q2 ? <RxCaretUp className={styles.faqCaret} /> : <RxCaretDown className={styles.faqCaret} />}
                    </div>
                    <p style={{maxHeight: q2 ? '300px' : 0, opacity: q2 ? 1 : 0}} className={styles.faqP}>If you want to keep the ceramic coating in good condition and have it last as long as possible, you won't want to go through any automatic car washes, even the touch-less ones.</p>
                </li>

                <li className={styles.liContainer}>
                    <div className={styles.liTop} onClick={() => setQ3(!q3)}>
                        <BsQuestionCircleFill className={styles.faqIcon} />
                        <h4 className={styles.faqQ}> How should I wash/maintain my car after a ceramic coating?</h4>
                        {q3 ? <RxCaretUp className={styles.faqCaret} /> : <RxCaretDown className={styles.faqCaret} />}
                    </div>
                    <p style={{maxHeight: q3 ? '300px' : 0, opacity: q3 ? 1 : 0}} className={styles.faqP}>For washing your coated vehicle you have a couple of options. We recommend scheduling monthly maintenance through us. Or if you choose to do it yourself we can get you set up with the right products to prolong the life of your coating.</p>
                </li>

                <li className={styles.liContainer}>
                    <div className={styles.liTop} onClick={() => setQ5(!q5)}>
                        <BsQuestionCircleFill className={styles.faqIcon} />
                        <h4 className={styles.faqQ}> How long does it take?</h4>
                        {q5 ? <RxCaretUp className={styles.faqCaret} /> : <RxCaretDown className={styles.faqCaret} />}
                    </div>
                    <p style={{maxHeight: q5 ? '300px' : 0, opacity: q5 ? 1 : 0}} className={styles.faqP}>
                        Gold: 4-8 hours <br /> 
                        Platinum and Iridium: Typically around 2 days
                    </p>
                </li>

                <li className={styles.liContainer}>
                    <div className={styles.liTop} onClick={() => setQ1(!q1)}>
                        <BsQuestionCircleFill className={styles.faqIcon} />
                        <h4 className={styles.faqQ}> Does this coating make my vehicle scratch proof?</h4>
                        {q1 ? <RxCaretUp className={styles.faqCaret} /> : <RxCaretDown className={styles.faqCaret} />}
                    </div>
                    <p style={{maxHeight: q1 ? '300px' : 0, opacity: q1 ? 1 : 0}} className={styles.faqP}>No, but it does increase light scratch/swirl mark resistance.</p>
                </li>

                <li className={styles.liContainer}>
                    <div className={styles.liTop} onClick={() => setQ4(!q4)}>
                        <BsQuestionCircleFill className={styles.faqIcon} />
                        <h4 className={styles.faqQ}> How does the warranty work?</h4>
                        {q4 ? <RxCaretUp className={styles.faqCaret} /> : <RxCaretDown className={styles.faqCaret} />}
                    </div>
                    <p style={{maxHeight: q4 ? '300px' : 0, opacity: q4 ? 1 : 0}} className={styles.faqP}>Your vehicle will need ceramic maintenance through us every 6 months to 1 year to keep the 2 or 5 year warranty.</p>
                </li>
            </ul>
        </div>
    )
}