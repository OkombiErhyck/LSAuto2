import React, { useState } from 'react';
import './contact.css';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('xgejewrp');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    handleSubmit(event);
    setIsSubmitted(true);

    setTimeout(() => {
      window.location.href = '/'; // Redirect to the home page
    }, 3000); // Redirect after 3 seconds
  };

  if (state.succeeded) {
    return (
      <div className="container1">
        <div className="row">
          <h1>Contact</h1>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="row input-container" style={{background:"var(--main)" ,borderRadius:"15px"}}>
          <h5>Mesajul a fost trimis! Vom revenii catre dumneavoastra cat de curand posibil</h5>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }

  return (
    <div className="container1">
      <div className="row">
        <h1>Contact</h1>
      </div>

      <div className="row input-container">
        <form onSubmit={handleFormSubmit}>
          <div className="col-xs-12">
            <div className="styled-input wide">
              <input type="text" id="name" name="name" required />
              <label htmlFor="name">Nume</label>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input">
              <input type="email" id="email" name="email" required />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input" >
              <input type="tel" id="phone" name="phone" required />
              <label htmlFor="phone">Nr. Telefon</label>
            </div>
          </div>
          <div className="col-xs-12">
            <div className="styled-input wide">
              <textarea id="message" name="message" required></textarea>
              <label htmlFor="message">Mesaj</label>
            </div>
          </div>
          <div className="col-xs-12">
            <button type="submit" className="btn-lrg submit-btn">Trimite</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
