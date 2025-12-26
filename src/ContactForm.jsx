
import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faPaperPlane, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

import BackToTopButton from './BackToTopButton';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus('Sending...');
  try {
    // Force the use of the current domain instead of a hardcoded localhost
    const response = await axios.post(`${window.location.origin}/api/send`, formData);

    setStatus('Message Sent Successfully!');
    alert("✅ Message sent successfully");
    setFormData({ name: '', email: '', message: '' });
  } catch (error) {
    // Detailed logging to see exactly what failed
    console.error('Full Error Object:', error);
    setStatus('Failed to send message.');
    alert(`Error: ${error.response?.data?.error || error.message}`);
  }
};

  return (
    <div className="contact_section" id="contact">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='heading1'
      >
        Contact me
      </motion.h2>

      <div className="contact_container">
        
        {/* --- LEFT SIDE: ACTION CARDS --- */}
        <motion.div 
          className="contact_actions"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="action_text">
            <h3>Start a Conversation</h3>
            <p>I'm open to freelance work, full-time opportunities, or just a friendly chat about tech!</p>
          </div>

          <a href="tel:+918010144372" className="contact_card_link phone_card">
            <div className="icon_box">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className="card_details">
              <span>Call Me Directly</span>
              <h4>+91 80101 44372</h4>
            </div>
            <FontAwesomeIcon icon={faArrowRight} className="arrow_icon" />
          </a>

          <a href="mailto:jprafull40@gmail.com" className="contact_card_link email_card">
            <div className="icon_box">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="card_details">
              <span>Send an Email</span>
              <h4>jprafull40@gmail.com</h4>
            </div>
            <FontAwesomeIcon icon={faArrowRight} className="arrow_icon" />
          </a>

          <div className="social_row">
            <a href="https://github.com/PrafullJ001" target="_blank" rel="noreferrer" className="mini_social_btn">
              <FontAwesomeIcon icon={faGithub} />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/prafulljadhav99" target="_blank" rel="noreferrer" className="mini_social_btn">
              <FontAwesomeIcon icon={faLinkedin} />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>

        {/* --- RIGHT SIDE: FORM --- */}
        <motion.form 
          className="modern_form" 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="form_header">
            <h3>Send a Message</h3>
          </div>

          <div className="input_wrapper">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
            />
          </div>

          <div className="input_wrapper">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
            />
          </div>

          <div className="input_wrapper">
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Message"
            ></textarea>
          </div>

          <button type="submit" className="neon_btn">
            Send Message <FontAwesomeIcon icon={faPaperPlane} />
          </button>

          {status && <p className="form_status">{status}</p>}
        </motion.form>

      </div>

      <footer className="contact_footer">
        <hr className="footer_divider" />
        <div className="footer_content">
          <p className="footer_name">Prafull Jadhav</p>
          <p className="footer_copyright">
            © 2025 Prafull Jadhav. All rights reserved.
          </p>
        </div>
      </footer>

      <BackToTopButton />
    </div>
  );
};

export default ContactForm;
