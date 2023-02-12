import { useRef, useState, useEffect } from 'react';
import { GiGoldBar } from 'react-icons/gi';
import { SlBadge } from 'react-icons/sl';
import { FaCrown } from 'react-icons/fa';
import { AiFillCheckCircle } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import styles from './Funnel.module.css';

export default function funnel() {
    const [smallScreen, setSmallScreen] = useState(null);

    useEffect(() => {
        if (window.innerWidth < 879) {
            setSmallScreen(true);
        } else {
            setSmallScreen(false);
        }
    }, [])

    let formRef = useRef();

    const formSubmit = (e) => {
        e.preventDefault();

        const formInfo = {
            "Name": e.target['name'].value,
            "Email": e.target['email'].value,
            "Phone": e.target['phone'].value,
            "Year": e.target['year'].value,
            "Make": e.target['make'].value,
            "Model": e.target['model'].value,
            "Message": e.target['message'].value,
            "For Myself": e.target['myself'].checked ? 'Yes' : 'No',
            "Gift Card": e.target['someone'].checked ? 'Yes' : 'No',
            "Service": e.target['service'].value
        }

        const formData = new FormData();
        Object.entries(formInfo).forEach(([key, value]) => {
            if (key === "Name" || key === "Email" || key === "Message" || key === "Phone" || key === "Year" || key === "Make" || key === "Model" || key === "Service") {
                formData.append(key, value);
            } else if (value === 'Yes') {
                formData.append(key, value);
            }
        });

        console.log("SENT DATA: ", formData)

        // fetch("https://getform.io/f/10015c2d-db32-409b-884d-54c141a3b141", {
        //     method: "POST",
        //     body: formData
        // }).then((test) => {
        //     toast.success("Form submitted! Expect an email, text, or phone call soon!", {
        //         position: "bottom-center",
        //         autoClose: 5000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined
        //     })
        //     e.target.reset()
        //     window.scrollTo(0, 0)
        // }).catch(error => {
        //     toast.error("An error occurred, please try again." + error, {
        //         position: "bottom-center",
        //         autoClose: 5000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined
        //     })
        // });
    };

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

            <div className={styles.diagonal} style={{marginTop: 10 + 'vh'}}>
                <h2 className={styles.textXl}>Contact Us</h2>
                <p className={styles.diagonalP}>And bring your car back to life!</p>
            </div>

            <form className="form" onSubmit={(e) => formSubmit(e)} ref={formRef}>
                <div className={styles.formContainer}>
                    <div>
                        <label htmlFor="name" className='text-input-label'>Name<span className='special-package'>*</span></label>
                        <input type="text" id="name" name="name" className='text-input' placeholder="Name" required />
                        <label htmlFor="email" className='text-input-label'>Email<span className='special-package'>*</span></label>
                        <input type="email" id="email" name="email" className='text-input' placeholder="Email" required />
                        <label htmlFor="phone" className='text-input-label'>Phone<span className='special-package'>*</span><small> (Ex: 111-123-4567)</small></label>
                        <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className='text-input' placeholder="Phone Number" required />

                        <div className='select-field'>
                            <label htmlFor="year" className='text-input-label'>Year<span className='special-package'>*</span></label>
                            <select id="year" name="year" className='text-input year-input' placeholder="Year" required>
                                <option>Year</option>
                                <option>2023</option>
                                <option>2022</option>
                                <option>2021</option>
                                <option>2020</option>
                                <option>2019</option>
                                <option>2018</option>
                                <option>2017</option>
                                <option>2016</option>
                                <option>2015</option>
                                <option>2014</option>
                                <option>2013</option>
                                <option>2012</option>
                                <option>2011</option>
                                <option>2010</option>
                                <option>2009</option>
                                <option>2008</option>
                                <option>2007</option>
                                <option>2006</option>
                                <option>2005</option>
                                <option>2004</option>
                                <option>2003</option>
                                <option>2002</option>
                                <option>2001</option>
                                <option>2000</option>
                                <option>1999</option>
                                <option>1998</option>
                                <option>1997</option>
                                <option>1996</option>
                                <option>1995</option>
                                <option>1994</option>
                                <option>1993</option>
                                <option>1992</option>
                                <option>1991</option>
                                <option>1990</option>
                                <option>1989</option>
                                <option>1988</option>
                                <option>1987</option>
                                <option>1986</option>
                                <option>1985</option>
                                <option>1984</option>
                                <option>1983</option>
                                <option>1982</option>
                                <option>1981</option>
                                <option>1980</option>
                                <option>1979</option>
                                <option>1978</option>
                                <option>1977</option>
                                <option>1976</option>
                                <option>1975</option>
                                <option>1974</option>
                                <option>1973</option>
                                <option>1972</option>
                                <option>1971</option>
                                <option>1970</option>
                                <option>1969</option>
                                <option>1968</option>
                                <option>1967</option>
                                <option>1966</option>
                                <option>1965</option>
                                <option>1964</option>
                                <option>1963</option>
                                <option>1962</option>
                                <option>1961</option>
                                <option>1960</option>
                            </select>
                        </div>
                        <div className='select-field'>
                            <label htmlFor="make" className='text-input-label'>Make<span className='special-package'>*</span></label>
                            <select id="make" name="make" className='text-input make-input' placeholder="Make" required>
                                <option>Make</option>
                                <option>Acura</option>
                                <option>Airstream</option>
                                <option>Alfa Romeo</option>
                                <option>American Coach</option>
                                <option>Aston Martin</option>
                                <option>Audi</option>
                                <option>Autocar</option>
                                <option>Bentley</option>
                                <option>Blue Bird</option>
                                <option>BMW</option>
                                <option>Bugatti</option>
                                <option>Buick</option>
                                <option>Cadillac</option>
                                <option>Capacity</option>
                                <option>Chevrolet</option>
                                <option>Chrysler</option>
                                <option>Coach House</option>
                                <option>Coachmen</option>
                                <option>Crane Carrier</option>
                                <option>Dodge</option>
                                <option>Dynamax Corp</option>
                                <option>E-One</option>
                                <option>El Dorado</option>
                                <option>Entegra Coach</option>
                                <option>Ferrari</option>
                                <option>Fiat</option>
                                <option>Ford</option>
                                <option>Freightliner</option>
                                <option>Genesis</option>
                                <option>Gillig</option>
                                <option>GMC</option>
                                <option>Grande West</option>
                                <option>Hino</option>
                                <option>Honda</option>
                                <option>Hyundai</option>
                                <option>IC Co</option>
                                <option>Infiniti</option>
                                <option>International</option>
                                <option>Isuzu</option>
                                <option>Jaguar</option>
                                <option>Jeep</option>
                                <option>Kalmar</option>
                                <option>Karma</option>
                                <option>Kenworth</option>
                                <option>Kia</option>
                                <option>Lamborghini</option>
                                <option>Land Rover</option>
                                <option>Lexus</option>
                                <option>Lincoln</option>
                                <option>Lotus</option>
                                <option>Mack</option>
                                <option>Maserati</option>
                                <option>Mazda</option>
                                <option>MCI</option>
                                <option>McLaren</option>
                                <option>Mercedes Benz</option>
                                <option>Mini</option>
                                <option>Mitsubishi</option>
                                <option>New Flyer</option>
                                <option>Nissan/Datsun</option>
                                <option>Nova Bus</option>
                                <option>Peterbilt</option>
                                <option>Polestar</option>
                                <option>Porsche</option>
                                <option>Prevost</option>
                                <option>Rolls Royce</option>
                                <option>Rosenbauer Am</option>
                                <option>Spartan</option>
                                <option>Subaru</option>
                                <option>Temsa Bus</option>
                                <option>Terex</option>
                                <option>Tesla</option>
                                <option>Thomas Built</option>
                                <option>Tiffin</option>
                                <option>Toyota</option>
                                <option>Van Hool</option>
                                <option>Volkswagen</option>
                                <option>Volvo</option>
                                <option>Western Star</option>
                                <option>Winnebago</option>
                            </select>
                        </div>
                        <div className='select-field'>
                            <label htmlFor="model" className='text-input-label'>Model<span className='special-package'>*</span></label>
                            <input type="text" id="model" name="model" className='text-input model-input' placeholder="Model" required />
                        </div>

                        <div style={{ width: 100 + '%' }}>
                            <label htmlFor="message" className='text-input-label'>Additional Information:</label>
                            <textarea type="textarea" name="message" id='message' className='textarea' placeholder='Do you want our mobile service or to schedule a drop off? Do you have any other questions/concerns?' />
                        </div>

                        <div className='select-field'>
                            <label htmlFor="service" className='text-input-label'>Service Package</label>
                            <select name='service' id='service' style={{width: 'auto'}} className='text-input make-input'>
                                <option value="No Service Selected" selected hidden disabled>Please Select a Package Below</option>   
                                <option value="Gold">Gold</option>
                                <option value="Platinum">Platinum</option>
                                <option value="Iridium">Iridium</option>
                            </select>
                        </div>
                    </div>
                    <button className='submit-button'>Submit</button>
                </div>
            </form>

            <div className={styles.diagonal} style={{marginTop: 10 + 'vh'}}>
                <h2 className={styles.textXl}>5 Star Reviews</h2>
                <p className={styles.diagonalP}>Read some of the great reviews made by our great customers!</p>
            </div>

            <div className={styles.reviewsContainer}>
                <div className={styles.reviewCard}>
                    <div className="popular-img" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/d3ac6cf4-b415-476d-8286-5f169f4dca00/public')`}}></div>
                    <div className={styles.reviewTop}>
                        <CgProfile className={styles.profile} />
                        <strong className={styles.name}>Brandon B.</strong>
                        <strong className={styles.review}>★★★★★</strong>
                        <p className={styles.servicesP}>Services: <span className={styles.subtext}>Wheel washing, Paint repair, Auto interior vacuuming, Auto detailing, Full body wash, Car waxing</span></p>
                    </div>
                    <hr className={styles.cardHr} />
                    <div className={styles.reviewBottom}>
                        <p>Brenden is a very experienced, organized, and detailed person who has done an amazing job detailing my car twice now! No matter what questions I have for him he responds right away and always has an answer. You can tell that he's done his research and uses only the best products for the job. He was even able to remove scratches from my trunk lid that I had after uninstalling an old rear wing! I would highly recommend Dirt-Less Detailing to anyone who needs a detail!</p>
                    </div>
                </div>

                <div className={styles.reviewCard}>
                    <div className="popular-img" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/89cde8ad-b8a8-4d15-5a65-786ad9772d00/public')`}}></div>
                    <div className={styles.reviewTop}>
                        <CgProfile className={styles.profile} />
                        <strong className={styles.name}>Mark B.</strong>
                        <strong className={styles.review}>★★★★★</strong>
                        <p className={styles.servicesP}>Services: <span className={styles.subtext}>Full body wash, Car waxing, Headlight polishing, Auto detailing, Paint repair, Exhaust tip polishing, Clay bar treatment, Wheel washing</span></p>
                    </div>
                    <hr className={styles.cardHr} />
                    <div className={styles.reviewBottom}>
                        <p>Amazing experience amazing Owner had no issues with the work and had amazing time communicating with him my truck turned out beautiful</p>
                    </div>
                </div>

                <div className={styles.reviewCard}>
                    <div className="popular-img" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0a564c14-dde7-4018-e403-c646a78af000/public')`}}></div>
                    <div className={styles.reviewTop}>
                        <CgProfile className={styles.profile} />
                        <strong className={styles.name}>Nathan M.</strong>
                        <strong className={styles.review}>★★★★★</strong>
                        <p className={styles.servicesP}>Services: <span className={styles.subtext}>Engine detailing, Auto interior vacuuming, Full body wash, Car waxing, Auto detailing, Interior scenting, Exhaust tip polishing, Steam cleaning, Seat shampooing, Clay bar treatment, Wheel washing</span></p>
                    </div>
                    <hr className={styles.cardHr} />
                    <div className={styles.reviewBottom}>
                        <p>I was just astounded by the quality of his performance as a detailer. My car has never been cleaner. From simple maintenance to even stage 1 buff; the quality has been on point every single time. He's a very good friend of mine and his dedication to detailing is proven to be remarkable.</p>
                    </div>
                </div>
            </div>

            <div className={styles.bottomCTA}>
                <a href="/Contact" className="quote-btn service-page-quote-btn">Get a Free Quote Today!</a>
            </div>

        </div>
    )
}