import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [nameError, setNameError] = useState("");
  const [ageError, setAgeError] = useState("");

  const nameDetails = (event) => {
    setName(event.target.value);
    if (event.target.value.trim() === "") {
      setNameError("Name is required");
    } else {
      setNameError("");
    }
  };

  const ageDetails = (event) => {
    setAge(event.target.value);
    if (event.target.value.trim() === "") {
      setAgeError("Age is required");
    } else {
      setAgeError("");
    }
  };

  const SubmitDetails = (event) => {
    event.preventDefault();
    if (name === "") {
      setNameError("Name is required");
      return;
    }
    if (age === "") {
      setAgeError("Age is required");
      return;
    }
    const obj = { name: name, age: age };
    console.log(obj);
    setName("");
    setAge("");
    setNameError("");
    setAgeError("");
  };

  return (
    <form className="container form-container" onSubmit={SubmitDetails}>
      <div className="form-group">
        <h2>Enter Your Details</h2>
      </div>
      <div className="form-group">
        <label htmlFor="name">Enter Your Name:</label>
        <input
          type="text"
          id="name"
          className="input-field"
          value={name}
          onChange={nameDetails}
        />
        {nameError && <div className="error">{nameError}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="age">Enter Your Age:</label>
        <input
          type="number"
          id="age"
          className="input-field"
          value={age}
          onChange={ageDetails}
        />
        {ageError && <div className="error">{ageError}</div>}
      </div>
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
};

export default Form;
