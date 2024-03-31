import React, { useState } from "react";
import "../styles/Form.css";

const Form = ({ formData }) => {
  const [values, setValues] = useState({});
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });//to create a key to assign value(...values)->store the previou state
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form values:", values);
      alert(JSON.stringify(values, null, 2)); //display the value in json format (stringify),print the values,!values print null,column2
  
  };


 

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {formData.map((field, index) => (
          <div key={index} className="form-group">
            <label htmlFor={field.name}>{field.label}</label>
            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                name={field.name}
                value={values[field.name] || ""}//default assign empty null
                onChange={handleChange}
                className={`form-control "}`}
                required={field.required}
              />
            ) : (
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                value={values[field.name] || ""}
                onChange={handleChange}
                className={`form-control "}`}
                required={field.required}
              />
            )}
          
           
          </div>
        ))}
        <button type="submit" className="btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
