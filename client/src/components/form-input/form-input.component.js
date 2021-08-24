import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...other }) => (
  <div class="group">
    <input className="form-input" onChange={handleChange} {...other} />
    {label ? (
      <label
        className={`${other.value.length ? "shirnk" : ""} form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
