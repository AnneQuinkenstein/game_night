import React from 'react';
import './Contact.css';
import MyForm from './MyForm';
import Text from './Text';

function Contact() {
  return (
    <div className="contactContainer">
      <MyForm />
      <Text />
    </div>
  );
}

export default Contact;