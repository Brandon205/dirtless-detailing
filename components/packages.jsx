import { GiGoldBar } from 'react-icons/gi';
import { SlBadge } from 'react-icons/sl';
import { FaCrown } from 'react-icons/fa';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';
import styles from '../utils/Funnel.module.css';

export default function Packages() {
    return (
        <div className={styles.cards}>
            <div style={{boxShadow: '0 0 10px 5px gold'}} className={styles.card}>
                <div className={styles.cardHeader}>
                    <a href='/services/single-stage-correction' className={styles.serviceHeadingLink}><GiGoldBar style={{color: 'gold' }} /> GOLD PACKAGE</a>
                    <p className={styles.price}>Starting at: <span>$399</span></p>
                </div>
                <div className={styles.popularImg} style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/920c592d-31ee-41b9-2d3b-0b95d6ca7500/public')`}}></div>

                <ul className={styles.checklist}>
                    <li className={styles.checklistItem}>
                        <AiFillCheckCircle style={{color: 'gold'}} className={styles.checkcircle} />
                        <p>Full Interior Detail</p>
                    </li>
                    <li className={styles.checklistItem}>
                        <AiFillCheckCircle style={{color: 'gold'}} className={styles.checkcircle} />
                        <p>Our Premium Dirt-Less Wash</p>
                    </li>
                    <li className={styles.checklistItem}>
                        <AiFillCheckCircle style={{color: 'gold'}} className={styles.checkcircle} />
                        <p>Engine Bay Cleaning</p>
                    </li>
                    <li className={styles.checklistItem}>
                        <AiFillCloseCircle style={{color: 'lightblue'}} className={styles.checkcircle} />
                        <p className={styles.strikethrough}>Single Stage Paint Correction (Polishing)</p>
                    </li>
                    <li className={styles.checklistItem}>
                        <AiFillCloseCircle style={{color: 'lightblue'}} className={styles.checkcircle} />
                        <p className={styles.strikethrough}>Apply Ceramic Coating to all Trim</p>
                    </li>
                    <li className={styles.checklistItem}>
                        <AiFillCloseCircle style={{color: 'lightblue'}} className={styles.checkcircle} />
                        <p className={styles.strikethrough}>Apply Glass Treatment to Windshield</p>
                    </li>
                    <li className={styles.checklistItem}>
                        <AiFillCloseCircle style={{color: 'lightblue'}} className={styles.checkcircle} />
                        <p className={styles.strikethrough}>Ceramic Tire Shine</p>
                    </li>
                    <li className={styles.checklistItem}>
                        <AiFillCloseCircle style={{color: 'silver'}} className={styles.checkcircle} />
                        <p className={styles.strikethrough}>Apply Glass Treatment to all glass</p>
                    </li>
                    <li className={styles.checklistItem}>
                        <AiFillCloseCircle style={{color: 'silver'}} className={styles.checkcircle} />
                        <p className={styles.strikethrough}>Lifetime Graphene Ceramic Coating</p>
                    </li>
                    <li className={styles.checklistItem}>
                        <AiFillCloseCircle style={{color: 'silver'}} className={styles.checkcircle} />
                        <p className={styles.strikethrough}>Ceramic Coat Wheel Faces</p>
                    </li>
                </ul>

                <div className={styles.popularLinkContainer}>
                    <a href="#form" className={styles.popularReadmore}>Gold Package {'>'}</a>
                    <a href="/funnel/gold" className={styles.detailsLink}>More Info</a>
                </div>
            </div>

            <div style={{boxShadow: '0 0 10px 5px lightblue'}} className={styles.card}>
                <div className={styles.cardHeader}>
                    <a href='/services/single-stage-correction' className={styles.serviceHeadingLink}><SlBadge style={{color: 'lightblue'}} /> PLATINUM PACKAGE</a>
                    <p className={styles.price}>Starting at: <span>$1,199</span></p>
                </div>
                <div className={styles.popularImg} style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/de5ece74-66af-46cb-8460-7e0246257b00/public')`}}></div>

                    <ul className={styles.checklist}>
                        <li className={styles.checklistItem}>
                            <AiFillCheckCircle style={{color: 'gold'}} className={styles.checkcircle} />
                            <p>Full Interior Detail</p>
                        </li>
                        <li className={styles.checklistItem}>
                            <AiFillCheckCircle style={{color: 'gold'}} className={styles.checkcircle} />
                            <p>Our Premium Dirt-Less Wash</p>
                        </li>
                        <li className={styles.checklistItem}>
                            <AiFillCheckCircle style={{color: 'gold'}} className={styles.checkcircle} />
                            <p>Engine Bay Cleaning</p>
                        </li>
                        <li className={styles.checklistItem}>
                            <AiFillCheckCircle style={{color: 'lightblue'}} className={styles.checkcircle} />
                            <p>Single Stage Paint Correction (Polishing)</p>
                        </li>
                        <li className={styles.checklistItem}>
                            <AiFillCheckCircle style={{color: 'lightblue'}} className={styles.checkcircle} />
                            <p>Apply Ceramic Coating to all Trim</p>
                        </li>
                        <li className={styles.checklistItem}>
                            <AiFillCheckCircle style={{color: 'lightblue'}} className={styles.checkcircle} />
                            <p>Apply Glass Treatment to the Windshield</p>
                        </li>
                        <li className={styles.checklistItem}>
                            <AiFillCheckCircle style={{color: 'lightblue'}} className={styles.checkcircle} />
                            <p>Ceramic Tire Shine</p>
                        </li>
                        <li className={styles.checklistItem}>
                            <AiFillCheckCircle style={{color: 'lightblue'}} className={styles.checkcircle} />
                            <p>2 Year Ceramic Coating</p>
                        </li>
                        <li className={styles.checklistItem}>
                            <AiFillCloseCircle style={{color: 'silver'}} className={styles.checkcircle} />
                            <p className={styles.strikethrough}>Ceramic Coat Wheel Faces</p>
                        </li>
                    </ul>

                    <div className={styles.popularLinkContainer}>
                        <a href="#form" className={styles.popularReadmore}>Platinum Package {'>'}</a>
                        <a href="/funnel/platinum" className={styles.detailsLink}>More Info</a>
                    </div>
            </div>

            <div style={{boxShadow: '0 0 10px 5px #c0c3c1'}} className={styles.card}>
                <div className={styles.cardHeader}>
                    <a href='/services/single-stage-correction' className={styles.serviceHeadingLink}><FaCrown style={{color: '#c0c3c1'}} /> IRIDIUM PACKAGE</a>
                    <p className={styles.price}>Starting at: <span>$1,699</span></p>
                </div>
                <div className={styles.popularImg} style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/c7f409bd-c823-4598-6c56-5da726d30b00/public')`}}></div>

                <ul className={styles.checklist}>
                    <li className={styles.checklistItem}>
                        <AiFillCheckCircle style={{color: 'gold'}} className={styles.checkcircle} />
                        <p>Full Interior Detail</p>
                    </li>
                    <li className={styles.checklistItem}>
                        <AiFillCheckCircle style={{color: 'gold'}} className={styles.checkcircle} />
                        <p>Our Premium Dirt-Less Wash</p>
                    </li>
                    <li className={styles.checklistItem}>
                        <AiFillCheckCircle style={{color: 'gold'}} className={styles.checkcircle} />
                        <p>Engine Bay Cleaning</p>
                    </li>
                    <li className={styles.checklistItem}>
                        <AiFillCheckCircle style={{color: 'lightblue'}} className={styles.checkcircle} />
                        <p>Single Stage Paint Correction (Polishing)</p>
                    </li>
                    <li className={styles.checklistItem}>
                        <AiFillCheckCircle style={{color: 'lightblue'}} className={styles.checkcircle} />
                        <p>Apply Ceramic Coating to all Trim</p>
                    </li>
                    <li className={styles.checklistItem}>
                        <AiFillCheckCircle style={{color: 'lightblue'}} className={styles.checkcircle} />
                        <p>Apply Glass Treatment to ALL glass</p>
                    </li>
                    <li className={styles.checklistItem}>
                        <AiFillCheckCircle style={{color: 'lightblue'}} className={styles.checkcircle} />
                        <p>Ceramic Tire Shine</p>
                    </li>
                    <li className={styles.checklistItem}>
                        <AiFillCheckCircle style={{color: 'silver'}} className={styles.checkcircle} />
                        <p>Lifetime Graphene Ceramic Coating</p>
                    </li>
                    <li className={styles.checklistItem}>
                        <AiFillCheckCircle style={{color: 'silver'}} className={styles.checkcircle} />
                        <p>Ceramic Coat Wheel Faces</p>
                    </li>
                </ul>

                <div className={styles.popularLinkContainer}>
                    <a href="#form" className={styles.popularReadmore}>Iridium Package {'>'}</a>
                    <a href="/funnel/iridium" className={styles.detailsLink}>More Info</a>
                </div>
            </div>
        </div>
    )
}