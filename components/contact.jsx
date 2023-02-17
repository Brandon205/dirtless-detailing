import { useState, useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import styles from '../utils/Funnel.module.css';

export default function Contact(props) {
    const [gift, setGift] = useState(false);

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

        fetch("https://getform.io/f/10015c2d-db32-409b-884d-54c141a3b141", {
            method: "POST",
            body: formData
        }).then((test) => {
            toast.success("Form submitted! Expect an email, text, or phone call soon!", {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            })
            e.target.reset()
            window.scrollTo(0, 0)
        }).catch(error => {
            toast.error("An error occurred, please try again." + error, {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            })
        });
    };

    let handleGiftSelect = (giftButton) => {
        setGift(giftButton)
    }

    return (
        <form className={styles.form} onSubmit={(e) => formSubmit(e)} ref={formRef}>
            <div className={styles.formContainer}>
                <div>
                    <label htmlFor="name" className={styles.textInputLabel}>Name<span className={styles.specialPackage}>*</span></label>
                    <input type="text" id="name" name="name" className={styles.textInput} placeholder="Name" required />
                    <label htmlFor="email" className={styles.textInputLabel}>Email<span className={styles.specialPackage}>*</span></label>
                    <input type="email" id="email" name="email" className={styles.textInput} placeholder="Email" required />
                    <label htmlFor="phone" className={styles.textInputLabel}>Phone<span className={styles.specialPackage}>*</span><small> (Ex: 111-123-4567)</small></label>
                    <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className={styles.textInput} placeholder="Phone Number" required />

                    <div className={styles.selectField}>
                        <label htmlFor="year" className={styles.textInputLabel}>Year<span className={styles.specialPackage}>*</span></label>
                        <select value="" id="year" name="year" className={styles.textInput} placeholder="Year" required>
                            <option hidden disabled>Year</option>
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
                    <div className={styles.selectField}>
                        <label htmlFor="make" className={styles.textInputLabel}>Make<span className={styles.specialPackage}>*</span></label>
                        <select value="" id="make" name="make" className={styles.textInput} placeholder="Make" required>
                            <option hidden disabled>Make</option>
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
                    <div className={styles.selectField}>
                        <label htmlFor="model" className={styles.textInputLabel}>Model<span className={styles.specialPackage}>*</span></label>
                        <input type="text" id="model" name="model" className={styles.textInput} placeholder="Model" required />
                    </div>

                    <div className={styles.selectField}>
                        <label htmlFor="service" className={styles.textInputLabel}>Service Package</label>
                        <select name='service' id='service' style={{width: 'auto'}} className={styles.textInput} required>
                            <option value="" selected={props.package === null ? true : false} hidden disabled>Please Select a Package Below</option>   
                            <option value="Gold" selected={props.package === 'gold' ? true : false}>Gold</option>
                            <option value="Platinum" selected={props.package === 'platinum' ? true : false}>Platinum</option>
                            <option value="Iridium" selected={props.package === 'iridium' ? true : false}>Iridium</option>
                        </select>
                    </div>

                    <div style={{ width: 100 + '%' }}>
                        <label htmlFor="message" className={styles.textInputLabel}>Additional Information:</label>
                        <textarea type="textarea" name="message" id='message' className={styles.textarea} placeholder='Do you want our mobile service or to schedule a drop off? Do you have any other questions/concerns?' />
                    </div>


                    <div>
                        <input type="checkbox" name="myself" id='myself' onChange={() => handleGiftSelect(false)} checked={gift ? false : true} />
                        <label htmlFor="myself" className={styles.checkboxLabel}>For Myself</label>
                        <input type="checkbox" name="someone" id='someone' onChange={() => handleGiftSelect(true)} checked={gift ? true : false} />
                        <label htmlFor="someone" className={styles.checkboxLabel}>For Someone Else (Gift Certificate)</label>
                    </div>
                    <p style={{textAlign: 'left', marginTop: 0, visibility: gift ? 'visible' : 'hidden'}}>* When buying a gift certificate for someone else fill out <span className={styles.bold}>your</span> contact information, but <span className={styles.bold}>their</span> vehicle information (or as much as you know about their vehicle). We'll then get in contact with you to get the gift card to you!</p>

                </div>
                <button className={styles.submitButton}>Submit</button>
            </div>
            <ToastContainer position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </form>
    )
}