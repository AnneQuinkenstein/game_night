import React from 'react';
import './Contact.css';
import MyForm from './MyForm';
import Text from './Text';
import ContactMenu from './ContactMenu';

function Contact() {
  return (
    <>
    <div className="contactContainer page">
    <ContactMenu />
      <Text />
      <div className="contactFormContainer">
        <MyForm />
      </div>
    </div>
    </>
  );
}

export default Contact;