// src/register.js
import React, { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Validate form fields
  const validate = () => {
    let tempErrors = {};

    if (formData.name.length < 5) {
      tempErrors.name = "Name must be at least 5 characters long.";
    }

    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      tempErrors.email = "Email must contain @ and .";
    }

    if (formData.password.length < 8) {
      tempErrors.password = "Password must be at least 8 characters long.";
    }

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Form submitted successfully!");
      console.log(formData);
      // Reset form if needed:
      setFormData({ name: "", email: "", password: "" });
      setErrors({});
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Register Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <div style={{ color: "red" }}>{errors.name}</div>
        </div>

        <div>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <div style={{ color: "red" }}>{errors.email}</div>
        </div>

        <div>
          <label>Password:</label><br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <div style={{ color: "red" }}>{errors.password}</div>
        </div>

        <button type="submit" style={{ marginTop: "15px" }}>
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
