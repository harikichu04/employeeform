import React, { useState } from "react";
import "./App.css";

function EmployeeForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    email: "",
    phoneNumber: "",
    gender: "",
    startTime: "",
    endTime: "",
    jobPosition: "",
    teams: "",
    designation: "",
    billableHours: "",
    isBillable: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.firstName) tempErrors.firstName = "First Name is required";
    if (!formData.lastName) tempErrors.lastName = "Last Name is required";
    if (!formData.dob) tempErrors.dob = "Date is required";
    if (!formData.email) tempErrors.email = "Email is required";
    if (!formData.phoneNumber) tempErrors.phoneNumber = "Phone Number is required";
    if (!formData.gender) tempErrors.gender = "Gender is required";
    if (!formData.startTime) tempErrors.startTime = "Start Time is required";
    if (!formData.endTime) tempErrors.endTime = "End Time is required";
    if (!formData.jobPosition) tempErrors.jobPosition = "Job Position is required";
    if (!formData.teams) tempErrors.teams = "Team selection is required";
    if (!formData.designation) tempErrors.designation = "Designation is required";
    if (!formData.billableHours || formData.billableHours <= 0) tempErrors.billableHours = "Billable Hours is required and must be a positive number";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      // Process the formData as needed
    }
  };

  return (
    <form onSubmit={handleSubmit} className="employee-form">
      <div>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className={errors.firstName ? "error-border" : ""}
        />
        {errors.firstName && <p className="error">{errors.firstName}</p>}
      </div>

      <div>
        <label>Middle Name</label>
        <input
          type="text"
          name="middleName"
          value={formData.middleName}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className={errors.lastName ? "error-border" : ""}
        />
        {errors.lastName && <p className="error">{errors.lastName}</p>}
      </div>

      <div>
        <label>Birth Date</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          className={errors.dob ? "error-border" : ""}
        />
        {errors.dob && <p className="error">{errors.dob}</p>}
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? "error-border" : ""}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div>
        <label>Phone Number</label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className={errors.phoneNumber ? "error-border" : ""}
        />
        {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
      </div>

      <div>
        <label>Select Gender</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className={errors.gender ? "error-border" : ""}
        >
          <option value="">Choose Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && <p className="error">{errors.gender}</p>}
      </div>

      <div>
        <label>Start Time</label>
        <input
          type="time"
          name="startTime"
          value={formData.startTime}
          onChange={handleChange}
          className={errors.startTime ? "error-border" : ""}
        />
        {errors.startTime && <p className="error">{errors.startTime}</p>}
      </div>

      <div>
        <label>End Time</label>
        <input
          type="time"
          name="endTime"
          value={formData.endTime}
          onChange={handleChange}
          className={errors.endTime ? "error-border" : ""}
        />
        {errors.endTime && <p className="error">{errors.endTime}</p>}
      </div>

      <div>
        <label>Job Position</label>
        <input
          type="text"
          name="jobPosition"
          value={formData.jobPosition}
          onChange={handleChange}
          className={errors.jobPosition ? "error-border" : ""}
        />
        {errors.jobPosition && <p className="error">{errors.jobPosition}</p>}
      </div>

      <div>
        <label>Select Teams</label>
        <select
          name="teams"
          value={formData.teams}
          onChange={handleChange}
          className={errors.teams ? "error-border" : ""}
        >
          <option value="">Select...</option>
          <option value="teamA">Team A</option>
          <option value="teamB">Team B</option>
        </select>
        {errors.teams && <p className="error">{errors.teams}</p>}
      </div>

      <div>
        <label>Select Designation</label>
        <select
          name="designation"
          value={formData.designation}
          onChange={handleChange}
          className={errors.designation ? "error-border" : ""}
        >
          <option value="">Select...</option>
          <option value="junior">Junior</option>
          <option value="senior">Senior</option>
        </select>
        {errors.designation && <p className="error">{errors.designation}</p>}
      </div>

      <div>
        <label>Billable Hours</label>
        <input
          type="number"
          name="billableHours"
          value={formData.billableHours}
          onChange={handleChange}
          className={errors.billableHours ? "error-border" : ""}
        />
        {errors.billableHours && <p className="error">{errors.billableHours}</p>}
      </div>

      <div>
        <label>Is Billable</label>
        <input
          type="checkbox"
          name="isBillable"
          checked={formData.isBillable}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default EmployeeForm;