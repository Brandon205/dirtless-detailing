export function BasicInfo({name, email, phone, year, make, model, message, updateFields}) {

    function formatPhoneNumber(value) {
        // if input value is falsy eg if the user deletes the input, then just return
        if (!value) return value;

        // clean the input for any non-digit values.
        const phoneNumber = value.replace(/[^\d]/g, '');

        // phoneNumberLength is used to know when to apply our formatting for the phone number
        const phoneNumberLength = phoneNumber.length;

        // we need to return the value with no formatting if its less then four digits
        // this is to avoid weird behavior that occurs if you  format the area code to early
        if (phoneNumberLength < 4) return phoneNumber;

        // if phoneNumberLength is greater than 4 and less the 7 we start to return the formatted number
        if (phoneNumberLength < 7) {
            return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
        }

        // finally, if the phoneNumberLength is greater then seven, we add the last bit of formatting and return it.
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    }

    let handlePhoneNumber = (e) => {
        e.preventDefault()

        const formattedPhoneNumber = formatPhoneNumber(e.target.value);

        updateFields({ phone: formattedPhoneNumber })
    }

    return (
        <div className="form-section">
            <p className="contact-heading">Basic Information</p>
            <p style={{display: gift === 'Myself' ? 'none' : 'block'}} className='contact-subheading'>*When buying a gift certificate for someone else fill out YOUR contact information, but THEIR vehicle information (or as much as you know about their vehicle). We'll then get in contact with you to get the gift card to you!</p>
            <div style={{margin: '0 auto'}} className='basic-info-container'>
                <input type="radio" name="gift" id='myself' value='Myself' onChange={(e) => updateFields({ gift: e.target.value })} checked={gift === 'Myself'} className='radio-button' />
                <label htmlFor="myself" className='checkbox-label'>For Myself</label>

                <input type="radio" name="gift" id='card' value='Gift Card' onChange={(e) => updateFields({ gift: e.target.value })} checked={gift === 'Gift Card'} className='radio-button' />
                <label htmlFor="card" className='checkbox-label'>Gift Card</label>
            </div>
            
            <div style={{marginBottom: 0}} className='basic-info-container'>
                <div style={{position: 'relative', display: 'flex', justifyContent: 'flex-start'}}>
                    <label htmlFor="name" autoFocus className='text-input-label'>Name<span className='special-package'>*</span></label>
                    <input type="text" id="name" name="name" autoComplete='on' className='text-input' value={name} onChange={e => updateFields({ name: e.target.value })} placeholder="Name" required />
                </div>
                <div style={{position: 'relative', display: 'flex', justifyContent: 'flex-start'}}>
                    <label htmlFor="email" className='text-input-label'>Email<span className='special-package'>*</span></label>
                    <input type="email" id="email" autoComplete='email' name="email" value={email} onChange={e => updateFields({ email: e.target.value })} className='text-input' placeholder="Email" required />
                </div>
                <div style={{position: 'relative', display: 'flex', justifyContent: 'flex-start'}}>
                    <label htmlFor="phone" className='text-input-label'>Phone Number<span className='special-package'>*</span></label>
                    <input type="tel" id="phone" name="phone" autoComplete='tel' pattern="\(\d{3}\) \d{3}-\d{4}" value={phone} onChange={(e) => handlePhoneNumber(e)} className='text-input' placeholder="Ex. (123) 456-7890" required />
                </div>
            </div>

            <div style={{marginBottom: '2rem'}} className='basic-info-container'>
                <div className='select-field'>
                    <label htmlFor="year" className='text-input-label'>Year<span className='special-package'>*</span></label>
                    <select id="year" name="year" className='text-input year-input' value={year} onChange={e => updateFields({ year: e.target.value })} placeholder="Year" required>
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
                    <select id="make" name="make" className='text-input make-input' value={make} onChange={e => updateFields({ make: e.target.value })} placeholder="Make" required>
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
                <div style={{position: 'relative', display: 'flex', justifyContent: 'flex-start'}} className='select-field'>
                    <label htmlFor="model" className='text-input-label'>Model<span className='special-package'>*</span></label>
                    <input type="text" id="model" name="model" className='text-input model-input' value={model} onChange={e => updateFields({ model: e.target.value })} placeholder="Model" required />
                </div>
            </div>

            <div style={{ width: 100 + '%', position: 'relative', marginTop: '2rem'}}>
                <label htmlFor="message" style={{bottom: '130px'}} className='text-input-label'>Additional Information:</label>
                <textarea type="textarea" name="message" id='message' className='textarea' value={message} onChange={e => updateFields({ message: e.target.value })} placeholder='Do you want our mobile service or to schedule a drop off at our shop? Do you have any other questions/concerns for us?' />
            </div>

            <p style={{marginTop: '2rem'}} className="contact-heading">Vehicle Size/Classification</p>
            <p style={{marginBottom: 0}} className="contact-subheading">Change this to match your vehicle's size to get accurate price estimates (<span className='special-package'>NOTE: </span>Changing this does reset the options below, but not the information above).</p>
            <div style={{marginTop: 0}} className='basic-info-container'>
                <select name="vehicle size" id="vehicle size" style={{fontSize: '1.2em'}} className='text-input make-input' placeholder='Vehicle Size' value={vehicle} onChange={(e) => changeVehicle(e)}>
                    <option value="0">2 Door Cars</option>
                    <option value="1">Quarter Ton Trucks</option>
                    <option value="2">4-Door Cars</option>
                    <option value="3">Mid-Size SUV's</option>
                    <option value="4">4-Door Trucks</option>
                    <option value="5">3-Row SUV's</option>
                </select>
            </div>

        </div>
    )
}