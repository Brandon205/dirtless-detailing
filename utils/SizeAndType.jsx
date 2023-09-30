export function SizeAndType({vehicleSize, serviceType, updateFields}) {
    let changeVehicle = (e) => {
        updateFields({vehicleSize: e.target.value})
    }
    return (
        <div className="form-section">
            <p className='contact-heading'>Vehicle Size/Service Info</p>
            <p style={{marginTop: '2rem'}} className="contact-heading">Vehicle Size/Classification</p>
            <p style={{marginBottom: 0}} className="contact-subheading">Change this to match your vehicle's size to get accurate price estimates (<span className='special-package'>NOTE: </span>Changing this does reset the options below, but not the information above).</p>
            <div style={{marginTop: 0}} className='basic-info-container'>
                <select name="vehicle size" id="vehicle size" style={{fontSize: '1.2em'}} className='text-input make-input' placeholder='Vehicle Size' value={vehicleSize} onChange={(e) => changeVehicle(e)}>
                    <option value="0">2 Door Cars</option>
                    <option value="1">Quarter Ton Trucks</option>
                    <option value="2">4-Door Cars</option>
                    <option value="3">Mid-Size SUV's</option>
                    <option value="4">4-Door Trucks</option>
                    <option value="5">3-Row SUV's</option>
                </select>
            </div>
            <div>
                <input type="checkbox" name="service" id="interior" value="Interior" className='radio-button' checked={serviceType === 'Interior'} onChange={(e) => updateFields({serviceType: e.target.value})} />
                <label htmlFor="interior" className='checkbox-label'>Interior Service</label>

                <input type="checkbox" name="service" id="exterior-service" value="Exterior" className='radio-button' checked={serviceType === 'Exterior'} onChange={(e) => updateFields({serviceType: e.target.value})} />
                <label htmlFor="exterior-service" className='checkbox-label'>Exterior Service</label>

                <input type="checkbox" name="service" id="both-service" value="Both" className='radio-button' checked={serviceType === 'Both'} onChange={(e) => updateFields({serviceType: e.target.value})} />
                <label htmlFor="both-service" className='checkbox-label'>Both Services</label>
            </div>
        </div>
    )
}