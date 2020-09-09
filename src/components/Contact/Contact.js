import React from 'react';
import './Contact.css';
import MyForm from './MyForm';
import Text from './Text';
import ContactMenu from './ContactMenu';

function Contact() {
  return (
    <div className="contactContainer page">
      <div className="contactContainer2">
        <ContactMenu />
        <MyForm />
      </div>
      <Text />
    </div>
  );
}

export default Contact;