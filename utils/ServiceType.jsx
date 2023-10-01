export function ServiceType({serviceType, interior, exterior, addons, updateFields}) {
    let content;
    if (serviceType === 'Interior') {
        content = (
            <div className="service-type-container">
                <h3 className="contact-heading">Interior Services<span className='special-package'>*</span></h3>
                <input type="checkbox" name="interior" id="interior" value="Interior" className='radio-button' checked={interior === "Interior"} onChange={(e) => updateFields({interior: e.target.value})} />
                <label htmlFor="interior" className='checkbox-label'>Full Interior</label>

                <input type="checkbox" name="interior" id="interior-spill" value="Interior Spill" className='radio-button' checked={interior === "Interior Spill"} onChange={(e) => updateFields({interior: e.target.value})} />
                <label htmlFor="interior-spill" className='checkbox-label'>Interior + Spill Guard</label>

                <h3 className="contact-heading">Optional Add-ons</h3>
                <input type="checkbox" name="addons" id="ozone" value="Ozone Treatment" className='radio-button' checked={addons.includes('Ozone Treatment')} onChange={(e) => updateFields({addons: e.target.value})} />
                <label htmlFor="ozone" className='checkbox-label'>Ozone Treatment</label>
            </div>
        )
    } else if (serviceType === 'Exterior') {
        content = (
            <div className="service-type-container">
                <h3 className="contact-heading">Exterior Services<span className='special-package'>*</span></h3>
                <input type="checkbox" name="exterior" id="exterior" value="Exterior Wash" className='radio-button' checked={exterior === "Exterior Wash"} onChange={(e) => updateFields({exterior: e.target.value})} />
                <label htmlFor="exterior" className='checkbox-label'>Exterior Decon Wash</label>

                <input type="checkbox" name="exterior" id="exterior-seal" value="Exterior Seal" className='radio-button' checked={exterior === "Exterior Seal"} onChange={(e) => updateFields({exterior: e.target.value})} />
                <label htmlFor="exterior-seal" className='checkbox-label'>Exterior Seal and Shine</label>

                <input type="checkbox" name="exterior" id="exterior-correct" value="Exterior Correct" className='radio-button' checked={exterior === "Exterior Correct"} onChange={(e) => updateFields({exterior: e.target.value})} />
                <label htmlFor="exterior-correct" className='checkbox-label'>Exterior Correct and Protect</label>

                <h3 className="contact-heading">Optional Add-ons</h3>
                <input type="checkbox" name="exterior-addons" id="engine-bay" value="Engine Bay" className='radio-button' checked={addons.includes('Engine Bay')} onChange={(e) => updateFields({addons: e.target.value})} />
                <label htmlFor="engine-bay" className='checkbox-label'>Engine Bay Cleaning</label>
            </div>
        )
    } else { // Option "Both" selected
        content = (
            <div className="service-type-container">
                <h3 className="contact-heading">Interior Services<span className='special-package'>*</span></h3>
                <input type="checkbox" name="interior" id="interior" value="Interior" className='radio-button' checked={interior === "Interior"} onChange={(e) => updateFields({interior: e.target.value})} />
                <label htmlFor="interior" className='checkbox-label'>Full Interior</label>

                <input type="checkbox" name="interior" id="interior-spill" value="Interior Spill" className='radio-button' checked={interior === "Interior Spill"} onChange={(e) => updateFields({interior: e.target.value})} />
                <label htmlFor="interior-spill" className='checkbox-label'>Interior + Spill Guard</label>

                <h3 className="contact-heading">Exterior Services<span className='special-package'>*</span></h3>
                <input type="checkbox" name="exterior" id="exterior" value="Exterior Wash" className='radio-button' checked={exterior === "Exterior Wash"} onChange={(e) => updateFields({exterior: e.target.value})} />
                <label htmlFor="exterior" className='checkbox-label'>Exterior Decon Wash</label>

                <input type="checkbox" name="exterior" id="exterior-seal" value="Exterior Seal" className='radio-button' checked={exterior === "Exterior Seal"} onChange={(e) => updateFields({exterior: e.target.value})} />
                <label htmlFor="exterior-seal" className='checkbox-label'>Exterior Seal and Shine</label>

                <input type="checkbox" name="exterior" id="exterior-correct" value="Exterior Correct" className='radio-button' checked={exterior === "Exterior Correct"} onChange={(e) => updateFields({exterior: e.target.value})} />
                <label htmlFor="exterior-correct" className='checkbox-label'>Exterior Correct and Protect</label>

                <h3 className="contact-heading">Optional Add-ons</h3>
                <input type="checkbox" name="both-addons" id="interior-addon" value="Ozone Treatment" className='radio-button' checked={addons.includes('Ozone Treatment')} onChange={(e) => updateFields({addons: e.target.value})} />
                <label htmlFor="interior-addon" className='checkbox-label'>Ozone Treatment</label>

                <input type="checkbox" name="both-addons" id="exterior-addon" value="Engine Bay" className='radio-button' checked={addons.includes('Engine Bay')} onChange={(e) => updateFields({addons: e.target.value})} />
                <label htmlFor="exterior-addon" className='checkbox-label'>Engine Bay Cleaning</label>
            </div>

        )
    }

    return (
        <div className="form-section">
            {/* <p className='contact-heading'>Choose a Service</p> */}
            {/* <p className='contact-subheading'>All of our exterior services from a simple wash all the way up to a 5 Year Ceramic Coating.</p> */}
            {content}
        </div>
    )
}