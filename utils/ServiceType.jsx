import prices from "./Prices";

export function ServiceType({
  serviceType,
  interior,
  exterior,
  addons,
  dogHair,
  dirtiness,
  vehicleSize,
  updateFields,
}) {
  let content;
  if (serviceType === "Interior") {
    content = (
      <div className="service-type-container">
        <h3 className="contact-heading">
          Interior Services<span className="special-package">*</span>
        </h3>
        <p className="contact-subheading">
          Pricing based on your vehicle size choice: <span className="special-package italic">({vehicleSize})</span>
        </p>

        <input
          type="checkbox"
          name="interior"
          id="interior-swift"
          value="Interior Swift"
          className="radio-button"
          checked={interior === "Interior Swift"}
          onChange={(e) => updateFields({ interior: e.target.value })}
        />
        <label htmlFor="interior-swift" className="checkbox-label">
          Swift Interior Detail{" "}
          <span className="special-package italic">(${prices[vehicleSize].interior.interiorswift})</span>
        </label>

        <input
          type="checkbox"
          name="interior"
          id="interior"
          value="Interior"
          className="radio-button"
          checked={interior === "Interior"}
          onChange={(e) => updateFields({ interior: e.target.value })}
        />
        <label htmlFor="interior" className="checkbox-label">
          Full Interior Detail{" "}
          <span className="special-package italic">(${prices[vehicleSize].interior.interior})</span>
        </label>

        <input
          type="checkbox"
          name="interior"
          id="interior-spill"
          value="Interior Spill"
          className="radio-button"
          checked={interior === "Interior Spill"}
          onChange={(e) => updateFields({ interior: e.target.value })}
        />
        <label htmlFor="interior-spill" className="checkbox-label">
          Interior + Spill Guard{" "}
          <span className="special-package italic">(${prices[vehicleSize].interior.interiorspill})</span>
        </label>

        <h3 className="contact-heading">
          Dog Hair Amount<span className="special-package">*</span>
        </h3>
        <div style={{ gap: "1rem" }}>
          <div className="label-container">
            <div
              style={{
                backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/264a9c3b-d6cd-4575-132a-80d4450cdc00/public')`,
              }}
              className="label-image"
            ></div>
            <input
              type="checkbox"
              name="dogHair"
              id="little or none"
              value="Little or None"
              className="radio-button"
              onChange={(e) => updateFields({ dogHair: e.target.value })}
              checked={dogHair === "Little or None"}
            />
            <label htmlFor="little or none" className="dirty-label" style={{ color: "green" }}>
              Little or None <span className="special-package italic">($0)</span>
            </label>
          </div>
          <div className="label-container">
            <div
              style={{
                backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/53860f31-e2a6-409d-fc5f-018eb1580e00/public')`,
              }}
              className="label-image"
            ></div>
            <input
              type="checkbox"
              name="dogHair"
              id="medium amount"
              value="Medium Amount"
              className="radio-button"
              onChange={(e) => updateFields({ dogHair: e.target.value })}
              checked={dogHair === "Medium Amount"}
            />
            <label htmlFor="medium amount" className="dirty-label" style={{ color: "yellow" }}>
              Medium Amount <span className="special-package italic">($50)</span>
            </label>
          </div>
          <div className="label-container">
            <div
              style={{
                backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/5153d5b2-eae0-4675-361f-5d761349b500/public')`,
              }}
              className="label-image"
            ></div>
            <input
              type="checkbox"
              name="dogHair"
              id="lots of hair"
              value="Lots of Hair"
              className="radio-button"
              onChange={(e) => updateFields({ dogHair: e.target.value })}
              checked={dogHair === "Lots of Hair"}
            />
            <label htmlFor="lots of hair" className="dirty-label" style={{ color: "red" }}>
              Tons of Hair <span className="special-package italic">($100)</span>
            </label>
          </div>
        </div>

        <h3 className="contact-heading">
          Dirtiness<span className="special-package">*</span>
        </h3>
        <p className="contact-subheading">
          No extra charges, just for us to get an idea of the condition of the interior.
        </p>
        <div style={{ gap: "1rem" }}>
          <div className="label-container">
            <div
              style={{
                backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/d69dedc8-dfb3-47bd-80f3-8e76256dfb00/public')`,
              }}
              className="label-image"
            ></div>
            <input
              type="checkbox"
              name="dirtiness"
              id="pretty clean"
              value="Pretty Clean"
              className="radio-button"
              onChange={(e) => updateFields({ dirtiness: e.target.value })}
              checked={dirtiness === "Pretty Clean"}
            />
            <label htmlFor="pretty clean" className="dirty-label" style={{ color: "green" }}>
              Pretty Clean <span className="special-package italic">($0)</span>
            </label>
          </div>
          <div className="label-container">
            <div
              style={{
                backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/7ab9a475-7d86-4a02-22d8-086cdf595200/public')`,
              }}
              className="label-image"
            ></div>
            <input
              type="checkbox"
              name="dirtiness"
              id="normal use"
              value="Normal Use"
              className="radio-button"
              onChange={(e) => updateFields({ dirtiness: e.target.value })}
              checked={dirtiness === "Normal Use"}
            />
            <label htmlFor="normal use" className="dirty-label" style={{ color: "yellow" }}>
              Normal Use <span className="special-package italic">($0)</span>
            </label>
          </div>
          <div className="label-container">
            <div
              style={{
                backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/f06c6b85-4960-420b-0948-e14d69910a00/public')`,
              }}
              className="label-image"
            ></div>
            <input
              type="checkbox"
              name="dirtiness"
              id="extremely dirty"
              value="Extremely Dirty"
              className="radio-button"
              onChange={(e) => updateFields({ dirtiness: e.target.value })}
              checked={dirtiness === "Extremely Dirty"}
            />
            <label htmlFor="extremely dirty" className="dirty-label" style={{ color: "red" }}>
              Extremely Dirty <span className="special-package italic">($0)</span>
            </label>
          </div>
        </div>

        <h3 className="contact-heading">Optional Add-ons</h3>
        <input
          type="checkbox"
          name="addons"
          id="ozone"
          value="Ozone Treatment"
          className="radio-button"
          checked={addons.includes("Ozone Treatment")}
          onChange={(e) => updateFields({ addons: e.target.value })}
        />
        <label htmlFor="ozone" className="checkbox-label">
          Ozone Treatment <span className="special-package italic">($75)</span>
        </label>
      </div>
    );
  } else if (serviceType === "Exterior") {
    content = (
      <div className="service-type-container">
        <h3 className="contact-heading">
          Exterior Services<span className="special-package">*</span>
        </h3>
        <p className="contact-subheading">
          Pricing based on your vehicle size choice: <span className="special-package italic">({vehicleSize})</span>
        </p>

        <input
          type="checkbox"
          name="exterior"
          id="exterior"
          value="Exterior Wash"
          className="radio-button"
          checked={exterior === "Exterior Wash"}
          onChange={(e) => updateFields({ exterior: e.target.value })}
        />
        <label htmlFor="exterior" className="checkbox-label">
          Exterior Decon Wash{" "}
          <span className="special-package italic">(${prices[vehicleSize].exterior.exteriorwash})</span>
        </label>

        <input
          type="checkbox"
          name="exterior"
          id="exterior-seal"
          value="Exterior Seal"
          className="radio-button"
          checked={exterior === "Exterior Seal"}
          onChange={(e) => updateFields({ exterior: e.target.value })}
        />
        <label htmlFor="exterior-seal" className="checkbox-label">
          Exterior Seal and Shine{" "}
          <span className="special-package italic">(${prices[vehicleSize].exterior.exteriorseal})</span>
        </label>

        <input
          type="checkbox"
          name="exterior"
          id="exterior-correct"
          value="Exterior Correct"
          className="radio-button"
          checked={exterior === "Exterior Correct"}
          onChange={(e) => updateFields({ exterior: e.target.value })}
        />
        <label htmlFor="exterior-correct" className="checkbox-label">
          Exterior Correct and Protect{" "}
          <span className="special-package italic">(${prices[vehicleSize].exterior.exteriorcorrect})</span>
        </label>

        <h3 className="contact-heading">Optional Add-ons</h3>
        <input
          type="checkbox"
          name="exterior-addons"
          id="engine-bay"
          value="Engine Bay"
          className="radio-button"
          checked={addons.includes("Engine Bay")}
          onChange={(e) => updateFields({ addons: e.target.value })}
        />
        <label htmlFor="engine-bay" className="checkbox-label">
          Engine Bay Cleaning <span className="special-package italic">($75)</span>
        </label>
      </div>
    );
  } else {
    // Option "Both" selected
    content = (
      <div className="service-type-container">
        <h3 className="contact-heading">
          Interior Services<span className="special-package">*</span>
        </h3>
        <p className="contact-subheading">
          Pricing based on your vehicle size choice: <span className="special-package italic">({vehicleSize})</span>
        </p>

        <input
          type="checkbox"
          name="interior"
          id="interior-swift"
          value="Interior Swift"
          className="radio-button"
          checked={interior === "Interior Swift"}
          onChange={(e) => updateFields({ interior: e.target.value })}
        />
        <label htmlFor="interior-swift" className="checkbox-label">
          Swift Interior Detail{" "}
          <span className="special-package italic">(${prices[vehicleSize].interior.interiorswift})</span>
        </label>

        <input
          type="checkbox"
          name="interior"
          id="interior"
          value="Interior"
          className="radio-button"
          checked={interior === "Interior"}
          onChange={(e) => updateFields({ interior: e.target.value })}
        />
        <label htmlFor="interior" className="checkbox-label">
          Full Interior <span className="special-package italic">(${prices[vehicleSize].interior.interior})</span>
        </label>

        <input
          type="checkbox"
          name="interior"
          id="interior-spill"
          value="Interior Spill"
          className="radio-button"
          checked={interior === "Interior Spill"}
          onChange={(e) => updateFields({ interior: e.target.value })}
        />
        <label htmlFor="interior-spill" className="checkbox-label">
          Interior + Spill Guard{" "}
          <span className="special-package italic">(${prices[vehicleSize].interior.interiorspill})</span>
        </label>

        <h3 className="contact-heading">
          Dog Hair Amount<span className="special-package">*</span>
        </h3>
        <div style={{ gap: "1rem" }}>
          <div className="label-container">
            <div
              style={{
                backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/264a9c3b-d6cd-4575-132a-80d4450cdc00/public')`,
              }}
              className="label-image"
            ></div>
            <input
              type="checkbox"
              name="dogHair"
              id="little or none"
              value="Little or None"
              className="radio-button"
              onChange={(e) => updateFields({ dogHair: e.target.value })}
              checked={dogHair === "Little or None"}
            />
            <label htmlFor="little or none" className="dirty-label" style={{ color: "green" }}>
              Little or None <span className="special-package italic">($0)</span>
            </label>
          </div>
          <div className="label-container">
            <div
              style={{
                backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/53860f31-e2a6-409d-fc5f-018eb1580e00/public')`,
              }}
              className="label-image"
            ></div>
            <input
              type="checkbox"
              name="dogHair"
              id="medium amount"
              value="Medium Amount"
              className="radio-button"
              onChange={(e) => updateFields({ dogHair: e.target.value })}
              checked={dogHair === "Medium Amount"}
            />
            <label htmlFor="medium amount" className="dirty-label" style={{ color: "yellow" }}>
              Medium Amount <span className="special-package italic">($50)</span>
            </label>
          </div>
          <div className="label-container">
            <div
              style={{
                backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/5153d5b2-eae0-4675-361f-5d761349b500/public')`,
              }}
              className="label-image"
            ></div>
            <input
              type="checkbox"
              name="dogHair"
              id="lots of hair"
              value="Lots of Hair"
              className="radio-button"
              onChange={(e) => updateFields({ dogHair: e.target.value })}
              checked={dogHair === "Lots of Hair"}
            />
            <label htmlFor="lots of hair" className="dirty-label" style={{ color: "red" }}>
              Tons of Hair <span className="special-package italic">($100)</span>
            </label>
          </div>
        </div>

        <h3 className="contact-heading">
          Dirtiness<span className="special-package">*</span>
        </h3>
        <div style={{ gap: "1rem" }}>
          <div className="label-container">
            <div
              style={{
                backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/d69dedc8-dfb3-47bd-80f3-8e76256dfb00/public')`,
              }}
              className="label-image"
            ></div>
            <input
              type="checkbox"
              name="dirtiness"
              id="pretty clean"
              value="Pretty Clean"
              className="radio-button"
              onChange={(e) => updateFields({ dirtiness: e.target.value })}
              checked={dirtiness === "Pretty Clean"}
            />
            <label htmlFor="pretty clean" className="dirty-label" style={{ color: "green" }}>
              Pretty Clean <span className="special-package italic">($0)</span>
            </label>
          </div>
          <div className="label-container">
            <div
              style={{
                backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/7ab9a475-7d86-4a02-22d8-086cdf595200/public')`,
              }}
              className="label-image"
            ></div>
            <input
              type="checkbox"
              name="dirtiness"
              id="normal use"
              value="Normal Use"
              className="radio-button"
              onChange={(e) => updateFields({ dirtiness: e.target.value })}
              checked={dirtiness === "Normal Use"}
            />
            <label htmlFor="normal use" className="dirty-label" style={{ color: "yellow" }}>
              Normal Use <span className="special-package italic">($0)</span>
            </label>
          </div>
          <div className="label-container">
            <div
              style={{
                backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/f06c6b85-4960-420b-0948-e14d69910a00/public')`,
              }}
              className="label-image"
            ></div>
            <input
              type="checkbox"
              name="dirtiness"
              id="extremely dirty"
              value="Extremely Dirty"
              className="radio-button"
              onChange={(e) => updateFields({ dirtiness: e.target.value })}
              checked={dirtiness === "Extremely Dirty"}
            />
            <label htmlFor="extremely dirty" className="dirty-label" style={{ color: "red" }}>
              Very Dirty <span className="special-package italic">($0)</span>
            </label>
          </div>
        </div>

        <h3 className="contact-heading">
          Exterior Services<span className="special-package">*</span>
        </h3>
        <input
          type="checkbox"
          name="exterior"
          id="exterior"
          value="Exterior Wash"
          className="radio-button"
          checked={exterior === "Exterior Wash"}
          onChange={(e) => updateFields({ exterior: e.target.value })}
        />
        <label htmlFor="exterior" className="checkbox-label">
          Exterior Decon Wash{" "}
          <span className="special-package italic">(${prices[vehicleSize].exterior.exteriorwash})</span>
        </label>

        <input
          type="checkbox"
          name="exterior"
          id="exterior-seal"
          value="Exterior Seal"
          className="radio-button"
          checked={exterior === "Exterior Seal"}
          onChange={(e) => updateFields({ exterior: e.target.value })}
        />
        <label htmlFor="exterior-seal" className="checkbox-label">
          Exterior Seal and Shine{" "}
          <span className="special-package italic">(${prices[vehicleSize].exterior.exteriorseal})</span>
        </label>

        <input
          type="checkbox"
          name="exterior"
          id="exterior-correct"
          value="Exterior Correct"
          className="radio-button"
          checked={exterior === "Exterior Correct"}
          onChange={(e) => updateFields({ exterior: e.target.value })}
        />
        <label htmlFor="exterior-correct" className="checkbox-label">
          Exterior Correct and Protect{" "}
          <span className="special-package italic">(${prices[vehicleSize].exterior.exteriorcorrect})</span>
        </label>

        <h3 className="contact-heading">Optional Add-ons</h3>
        <input
          type="checkbox"
          name="both-addons"
          id="interior-addon"
          value="Ozone Treatment"
          className="radio-button"
          checked={addons.includes("Ozone Treatment")}
          onChange={(e) => updateFields({ addons: e.target.value })}
        />
        <label htmlFor="interior-addon" className="checkbox-label">
          Ozone Treatment <span className="special-package italic">($75)</span>
        </label>

        <input
          type="checkbox"
          name="both-addons"
          id="exterior-addon"
          value="Engine Bay"
          className="radio-button"
          checked={addons.includes("Engine Bay")}
          onChange={(e) => updateFields({ addons: e.target.value })}
        />
        <label htmlFor="exterior-addon" className="checkbox-label">
          Engine Bay Cleaning <span className="special-package italic">($75)</span>
        </label>
      </div>
    );
  }

  return <div className="form-section">{content}</div>;
}
