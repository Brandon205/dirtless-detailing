export function SizeAndType({vehicleSize, serviceType, mobile, updateFields}) {
    return (
        <div className="form-section">
            <p className='contact-heading' style={{marginTop: '1.5rem'}}>Vehicle Size<span className='special-package'>*</span></p>
            <p style={{marginBottom: 0}} className="contact-subheading">Change this to match your vehicle's size to get accurate price estimates.</p>
            <div style={{marginTop: 0}} className='basic-info-container'>
                <select name="vehicle size" id="vehicle size" style={{fontSize: '1.2em'}} className='text-input make-input' placeholder='Vehicle Size' value={vehicleSize} onChange={(e) => updateFields({vehicleSize: e.target.value})}>
                    <option value="2 Door">2 Door Cars</option>
                    <option value="Quarter Ton">Quarter Ton Trucks</option>
                    <option value="4 Door">4-Door Cars</option>
                    <option value="Mid Size">Mid-Size SUV's</option>
                    <option value="Trucks">4-Door Trucks</option>
                    <option value="3 Row">3-Row SUV's</option>
                </select>
            </div>

            <p className='contact-heading'>Service Type<span className='special-package'>*</span></p>
            <p style={{marginBottom: '1rem'}} className="contact-subheading">Choose one service type to get started.</p>
            <div>
                <input type="checkbox" name="service" id="interior" value="Interior" className='radio-button' checked={serviceType === 'Interior'} onChange={(e) => updateFields({serviceType: e.target.value})} />
                <label htmlFor="interior" className='checkbox-label'>Interior Service</label>

                <input type="checkbox" name="service" id="both-service" value="Both" className='radio-button' checked={serviceType === 'Both'} onChange={(e) => updateFields({serviceType: e.target.value})} />
                <label htmlFor="both-service" className='checkbox-label'>Both Services</label>

                <input type="checkbox" name="service" id="exterior-service" value="Exterior" className='radio-button' checked={serviceType === 'Exterior'} onChange={(e) => updateFields({serviceType: e.target.value})} />
                <label htmlFor="exterior-service" className='checkbox-label'>Exterior Service</label>

            </div>

            <p className='contact-heading'>Mobile or Shop based service?<span className='special-package'>*</span></p>
            <p style={{marginBottom: '1rem'}} className="contact-subheading">There are <span className="bold">no</span> additional charges if you are within 30 minutes from our shop! (We'll get your address from you later)</p>
            <div>
                <input type="checkbox" name="mobile" id="shop" value="Shop" className='radio-button' checked={mobile === 'Shop'} onChange={(e) => updateFields({mobile: e.target.value})} />
                <label htmlFor="shop" className='checkbox-label'>Shop</label>

                <input type="checkbox" name="mobile" id="mobile" value="Mobile" className='radio-button' checked={mobile === 'Mobile'} onChange={(e) => updateFields({mobile: e.target.value})} />
                <label htmlFor="mobile" className='checkbox-label'>Mobile</label>
            </div>
        </div>
    )
}