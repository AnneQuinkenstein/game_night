import React from 'react';
import './Contact.css';
import MyForm from './MyForm';
import Text from './Text';
import ContactMenu from './ContactMenu';

function Contact() {
  return (
    <div className="contactContainer page">
      <Text />
      <div className="contactContainerLeft">
        <ContactMenu />
        <MyForm />
      </div>
      
    </div>
  );
}

export default Contact;