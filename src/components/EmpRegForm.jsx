import React, { useState } from 'react';
import './EmployeeReg.css';
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  position: "",
  experience: "",
};

const EmpRegForm = () => {

  const [values, setValues] = useState(initialState);

  const [file, setFile] = useState(null);

  const handleInputChange = (e) => {
    const target = e.target;
    // console.dir(e.target);
    const name = target.name;
    const value = target.value;
    // console.log(e.target.value);
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    // console.dir(e);
    // console.dir(e.target.files[0]);
    // console.log(e.target.files[0].name);
    // console.log(e.target.files[0].size);
    // console.log(e.target.files[0].type);
    // console.log(e.target.computedName);
    const file = e.target.files[0];
    const fileName = e.target.files[0].name;
    // console.log(e.target.files[0].type === "application/pdf");
    // if (e.target.files[0].type !== "application/pdf") {
    //   alert("Not supported");
    //   return;
    // } else {
    //   setFile((prevData) => ({
    //     ...prevData,
    //     filename,
    //   }));
    // }
    e.target.files[0].type !== "application/pdf"
      ? alert("Not Supported! only support .pdf")
      : setFile((prevData) => ({ ...prevData, file, fileName }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values.firstName);
    console.log(values.lastName);
    console.log(values.email);
    console.log(values.phone);
    console.log(values.address);
    console.log(values.position);
    console.log(values.experience);
    console.log(file);

    // reset
    setValues(initialState);
    setFile(file);
  };

  return (
    <>
      <div className="form">
        <section className="left">
          <form onSubmit={handleSubmit}>
            <label htmlFor="">First Name: </label>
            <input
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={handleInputChange} />

            <label htmlFor="">Last Name: </label>
            <input
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={handleInputChange} />


            <label htmlFor="">Email: </label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleInputChange} />


            <label htmlFor="">Phone: </label>
            <input
              type="number"
              name="phone"
              value={values.phone}
              onChange={handleInputChange} />


            <label htmlFor="">Address: </label>
            <textarea
              name="address"
              cols="21"
              rows="3"
              value={values.address}
              onChange={handleInputChange}></textarea>


            <label htmlFor="">Position</label>
            <select
              name="position"
              value={values.position}
              onChange={handleInputChange}>
              <option value="" disabled>Select one</option>
              <option value="Junior Developer">Junior Developer</option>
              <option value="Senior Developer">Senior Developer</option>
              <option value="FS Developer">FS Developer</option>
            </select>


            <label htmlFor="">Experience: </label>
            <input
              type="text"
              name="experience"
              value={values.experience}
              onChange={handleInputChange} />


            <label htmlFor="">Resume</label>
            <input
              type="file"
              name="resume"
              value={""}
              onChange={handleFileChange} />

            <div>
              <button type="submit" className='btn' >Submit</button>
            </div>
          </form>
        </section>

        <section className="right">
          <p>{values.firstName}</p>
          <p>{values.lastName}</p>
          <p>{values.email}</p>
          <p>{values.phone}</p>
          <p>{values.address}</p>
          <p>{values.position}</p>
          <p>{values.experience}</p>
          {file === null ? <p></p> : <p>{file.fileName}</p>}
        </section>
      </div>
    </>
  );
};

export default EmpRegForm;