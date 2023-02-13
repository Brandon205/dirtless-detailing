import { GiGoldBar } from 'react-icons/gi';
import { SlBadge } from 'react-icons/sl';
import { FaCrown } from 'react-icons/fa';
import { AiFillCheckCircle } from 'react-icons/ai';
import styles from './Funnel.module.css';

export default function Packages() {
    return (
        <div className={styles.cards}>
            <div style={{boxShadow: '0 0 10px 5px gold'}} className={styles.card}>
                <div className={styles.cardHeader}>
                    <a href='/services/single-stage-correction' className="service-heading-link popular-service-title"><GiGoldBar style={{color: 'gold'}} /> GOLD PACKAGE</a>
                    <p className="price">Starting at: <span>$399</span></p>
                </div>
                <div className="popular-img" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/920c592d-31ee-41b9-2d3b-0b95d6ca7500/public')`}}></div>

                <ul className={styles.checklist}>
                    <li className="checklist-item">
                        <AiFillCheckCircle style={{color: 'gold'}} className='checkcircle' />
                        <p>Full Interior Detail</p>
                    </li>
                    <li className="checklist-item">
                        <AiFillCheckCircle style={{color: 'gold'}} className='checkcircle' />
                        <p>Premium Dirt-Less Wash</p>
                    </li>
                    <li className="checklist-item">
                        <AiFillCheckCircle style={{color: 'gold'}} className='checkcircle' />
                        <p>Engine Bay Cleaning</p>
                    </li>
                    <li className="checklist-item">
                        <AiFillCheckCircle style={{color: 'lightblue'}} className='checkcircle' />
                        <p className={styles.strikethrough}>Single Stage Polish</p>
                    </li>
                    <li className="checklist-item">
                        <AiFillCheckCircle style={{color: 'lightblue'}} className='checkcircle' />
                        <p className={styles.strikethrough}>Apply Stoner Ceramic to all Trim</p>
                    </li>
                    <li className="checklist-item">
                        <AiFillCheckCircle style={{color: 'lightblue'}} className='checkcircle' />
                        <p className={styles.strikethrough}>Apply Aquapel to Windshield</p>
                    </li>
                    <li className="checklist-item">
                        <AiFillCheckCircle style={{color: 'lightblue'}} className='checkcircle' />
                        <p className={styles.strikethrough}>Coating of Premier on top of Ceramic</p>
                    </li>
                    <li className="checklist-item">
                        <AiFillCheckCircle style={{color: 'lightblue'}} className='checkcircle' />
                        <p className={styles.strikethrough}>Ceramic Tire Shine</p>
                    </li>
                    <li className="checklist-item">
                        <AiFillCheckCircle style={{color: 'silver'}} className='checkcircle' />
                        <p className={styles.strikethrough}>Lifetime Ceramic Coating</p>
                    </li>
                    <li className="checklist-item">
                        <AiFillCheckCircle style={{color: 'silver'}} className='checkcircle' />
                        <p className={styles.strikethrough}>Eclipse Wheel Faces</p>
                    </li>
                </ul>

                <a href="/services/exterior-ceramic-coating" className="popular-readmore">Gold Package {'>'}</a>
            </div>

            <div style={{boxShadow: '0 0 10px 5px lightblue'}} className={styles.card}>
                <div className={styles.cardHeader}>
                    <a href='/services/single-stage-correction' className="service-heading-link popular-service-title"><SlBadge style={{color: 'lightblue'}} /> PLATINUM PACKAGE</a>
                    <p className="price">Starting at: <span>$1,199</span></p>
                </div>
                <div className="popular-img" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/de5ece74-66af-46cb-8460-7e0246257b00/public')`}}></div>

                    <ul className={styles.checklist}>
                        <li className="checklist-item">
                            <AiFillCheckCircle style={{color: 'gold'}} className='checkcircle' />
                            <p>Full Interior Detail</p>
                        </li>
                        <li className="checklist-item">
                            <AiFillCheckCircle style={{color: 'gold'}} className='checkcircle' />
                            <p>Premium Dirt-Less Wash</p>
                        </li>
                        <li className="checklist-item">
                            <AiFillCheckCircle style={{color: 'gold'}} className='checkcircle' />
                            <p>Engine Bay Cleaning</p>
                        </li>
                        <li className="checklist-item">
                            <AiFillCheckCircle style={{color: 'lightblue'}} className='checkcircle' />
                            <p>Single Stage Polish</p>
                        </li>
                        <li className="checklist-item">
                            <AiFillCheckCircle style={{color: 'lightblue'}} className='checkcircle' />
                            <p>2 Year Ceramic Coating</p>
                        </li>
                        <li className="checklist-item">
                            <AiFillCheckCircle style={{color: 'lightblue'}} className='checkcircle' />
                            <p>Apply Stoner Ceramic to all Trim</p>
                        </li>
                        <li className="checklist-item">
                            <AiFillCheckCircle style={{color: 'lightblue'}} className='checkcircle' />
                            <p>Apply Aquapel to Windshield</p>
                        </li>
                        <li className="checklist-item">
                            <AiFillCheckCircle style={{color: 'lightblue'}} className='checkcircle' />
                            <p>Coating of Premier on top of Ceramic</p>
                        </li>
                        <li className="checklist-item">
                            <AiFillCheckCircle style={{color: 'lightblue'}} className='checkcircle' />
                            <p>Ceramic Tire Shine</p>
                        </li>
                        <li className="checklist-item">
                            <AiFillCheckCircle style={{color: 'silver'}} className='checkcircle' />
                            <p className={styles.strikethrough}>Lifetime Ceramic Coating</p>
                        </li>
                        <li className="checklist-item">
                            <AiFillCheckCircle style={{color: 'silver'}} className='checkcircle' />
                            <p className={styles.strikethrough}>Eclipse Wheel Faces</p>
                        </li>
                    </ul>

                <a href="/services/exterior-ceramic-coating" className="popular-readmore">Platinum Package {'>'}</a>
            </div>

            <div style={{boxShadow: '0 0 10px 5px silver'}} className={styles.card}>
                <div className={styles.cardHeader}>
                    <a href='/services/single-stage-correction' className="service-heading-link popular-service-title"><FaCrown style={{color: 'gold'}} /> IRIDIUM PACKAGE</a>
                    <p className="price">Starting at: <span>$1,699</span></p>
                </div>
                <div className="popular-img" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/c7f409bd-c823-4598-6c56-5da726d30b00/public')`}}></div>

                <ul className={styles.checklist}>
                    <li className="checklist-item">
                        <AiFillCheckCircle style={{color: 'gold'}} className='checkcircle' />
                        <p>Full Interior Detail</p>
                    </li>
                    <li className="checklist-item">
                        <AiFillCheckCircle style={{color: 'gold'}} className='checkcircle' />
                        <p>Premium Dirt-Less Wash</p>
                    </li>
                    <li className="checklist-item">
                        <AiFillCheckCircle style={{color: 'gold'}} className='checkcircle' />
                        <p>Engine Bay Cleaning</p>
                    </li>
                    <li className="checklist-item">
                        <AiFillCheckCircle style={{color: 'lightblue'}} className='checkcircle' />
                        <p>Single Stage Polish</p>
                    </li>
                    <li className="checklist-item">
                        <AiFillCheckCircle style={{color: 'lightblue'}} className='checkcircle' />
                        <p>Apply Stoner Ceramic to all Trim</p>
                    </li>
                    <li className="checklist-item">
                        <AiFillCheckCircle style={{color: 'lightblue'}} className='checkcircle' />
                        <p>Apply Aquapel to Windshield</p>
                    </li>
                    <li className="checklist-item">
                        <AiFillCheckCircle style={{color: 'lightblue'}} className='checkcircle' />
                        <p>Coating of Premier on top of Ceramic</p>
                    </li>
                    <li className="checklist-item">
                        <AiFillCheckCircle style={{color: 'lightblue'}} className='checkcircle' />
                        <p>Ceramic Tire Shine</p>
                    </li>
                    <li className="checklist-item">
                        <AiFillCheckCircle style={{color: 'silver'}} className='checkcircle' />
                        <p>Lifetime Ceramic Coating</p>
                    </li>
                    <li className="checklist-item">
                        <AiFillCheckCircle style={{color: 'silver'}} className='checkcircle' />
                        <p>Eclipse Wheel Faces</p>
                    </li>
                </ul>

                <a href="/services/exterior-ceramic-coating" className="popular-readmore">Iridium Package {'>'}</a>
            </div>
        </div>
    )
}