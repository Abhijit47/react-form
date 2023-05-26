import './RegistrationForm.css';
import React, { useState } from 'react';

const initialValues = {
  name: "",
  email: "",
  age: "",
  gender: "",
  address: "",
  country: "",
  interests: [],
  agree: false
};

const RegistrationForm = () => {
  // eslint-disable-next-line
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setValues({
      ...values,
      [name]: value,
    });
  };
  // eslint-disable-next-line
  const handleInterestChange = (e) => {
    console.log(e.target.checked);
    const isChecked = e.target.checked;
    if (isChecked) {
      setValues(values.interests.push(e.target.value));
      // interests.push(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    // Form default behavior controll
    e.preventDefault();
    console.log(values.name);
    console.log(values.email);
    console.log(values.age);
    console.log(values.gender);
    console.log(values.address);
    console.log(values.country);

    // reset data
    setValues(initialValues);
  };



  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleInputChange} />

        <br /><br />

        <label htmlFor="name">Email</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleInputChange} />

        <br /><br />

        <label htmlFor="name">Age</label>
        <input
          type="number"
          name="age"
          value={values.age}
          onChange={handleInputChange} />

        <br /><br />

        <label htmlFor="gender">Gender</label>
        <select name="gender" value={values.gender} onChange={handleInputChange}>
          <option value="" disabled>Specify one</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </select>

        <br /><br />

        <label htmlFor="address">Address</label>
        <textarea
          name='address'
          value={values.address}
          draggable="false"
          onChange={handleInputChange}>
        </textarea>

        <br /><br />

        <label htmlFor="country">Country</label>
        <input
          type="text"
          name="country"
          value={values.country}
          onChange={handleInputChange} />

        <br /><br />

        <p>Select your interest</p>
        <input
          type="checkbox"
          name="interests"
          value="Music"
          onChange={handleInterestChange} />
        <label htmlFor="interest">Music</label>

        <input
          type="checkbox"
          name="interests"
          value="Reading"
          onChange={handleInterestChange} />
        <label htmlFor="interest">Reading</label>

        <input
          type="checkbox"
          name="interests"
          value="Travelling"
          onChange={handleInterestChange} />
        <label htmlFor="interest">Travelling</label>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </>
  );
};

export default RegistrationForm;