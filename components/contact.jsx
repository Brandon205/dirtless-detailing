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
                            <option hidden disabled selected>Year</option>
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
                            <option hidden selected disabled>Make</option>
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

                    <div className='select-field'>
                        <label htmlFor="service" className='text-input-label'>Service Package</label>
                        <select name='service' id='service' style={{width: 'auto'}} className='text-input make-input' required>
                            <option value="" selected={props.package === null ? true : false} hidden disabled>Please Select a Package Below</option>   
                            <option value="Gold" selected={props.package === 'gold' ? true : false}>Gold</option>
                            <option value="Platinum" selected={props.package === 'platinum' ? true : false}>Platinum</option>
                            <option value="Iridium" selected={props.package === 'iridium' ? true : false}>Iridium</option>
                        </select>
                    </div>

                    <div style={{ width: 100 + '%' }}>
                        <label htmlFor="message" className='text-input-label'>Additional Information:</label>
                        <textarea type="textarea" name="message" id='message' className='textarea' placeholder='Do you want our mobile service or to schedule a drop off? Do you have any other questions/concerns?' />
                    </div>


                    <div>
                        <input type="checkbox" name="myself" id='myself' className='checkbox-input' onChange={() => handleGiftSelect(false)} checked={gift ? false : true} />
                        <label htmlFor="myself" className='checkbox-label'>For Myself</label>
                        <input type="checkbox" name="someone" id='someone' className='checkbox-input' onChange={() => handleGiftSelect(true)} checked={gift ? true : false} />
                        <label htmlFor="someone" className='checkbox-label'>For Someone Else (Gift Certificate)</label>
                    </div>
                    <p style={{textAlign: 'left', marginTop: 0, display: gift ? 'block' : 'none'}}>* When buying a gift certificate for someone else fill out <span className={styles.bold}>your</span> contact information, but <span className={styles.bold}>their</span> vehicle information (or as much as you know about their vehicle). We'll then get in contact with you to get the gift card to you!</p>

                </div>
                <button className='submit-button'>Submit</button>
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