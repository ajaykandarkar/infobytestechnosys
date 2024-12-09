import React, { useState } from 'react';

export const PersonalInfoStep = ({ onNext, personalInfo, setPersonalInfo }) => {
  const [errors, setErrors] = useState({});
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    const newErrors = { ...errors };

    if (name === 'email') {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      newErrors.email = emailRegex.test(value) ? '' : 'Invalid email address.';
    }

    if (name === 'phone') {
      const phoneRegex = /^[6-9]\d{9}$/;
      newErrors.phone = phoneRegex.test(value) ? '' : 'Invalid phone number.';
    }

    setErrors(newErrors);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!personalInfo.name?.trim()) {
      newErrors.name = 'Name is required.';
    }

    if (!personalInfo.email?.trim()) {
      newErrors.email = 'Email is required.';
    }

    if (!personalInfo.phone?.trim()) {
      newErrors.phone = 'Phone is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setValidated(true);
      onNext();
    } else {
      setValidated(false);
    }
  };

  return (
    <div className="container mt-4 w-50">
      <form
        className={`p-4 card shadow-lg ${validated ? 'was-validated' : ''}`}
        noValidate
      >
        <div className="card-title text-center">
          <h2>Personal Information</h2>
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className='form-control'
            id="name"
            name="name"
            onChange={handleChange}
            value={personalInfo.name}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : 'is-valid'}`}
            id="email"
            name="email"
            onChange={handleChange}
            value={personalInfo.email}
            required
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="tel"
            className={`form-control ${errors.phone ? 'is-invalid' : 'is-valid'}`}
            id="phone"
            name="phone"
            onChange={handleChange}
            value={personalInfo.phone}
            required
          />
          {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
        </div>
        <div className="card-footer text-end">
          <button className="btn btn-primary" onClick={handleNext}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
};
