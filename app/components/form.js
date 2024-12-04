import { useState } from 'react';

const ContactForm = () => {
  // state to store form data 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // state to track form submission
  const [isSubmitted, setIsSubmitted] = useState(false);

  // handles changes in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // handles form submission
  const handleSubmit = (e) => {
    e.preventDefault(); 

    console.log('Form Data Submitted:', formData);

    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="contact-form">
      {/* Heading */}
      <h1 className="section-title">Contact Us</h1>
      {/* show success message */}
      {isSubmitted && <div className="alert alert-success">Form submitted successfully!</div>}
      
      {/* triggers handleSubmit when submitted */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            className="form-control"
            id="subject"
            name="subject"
            value={formData.subject} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="5"
            value={formData.message} 
            onChange={handleChange} 
            required 
          ></textarea>
        </div>

        {/* submit form button */}
        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
