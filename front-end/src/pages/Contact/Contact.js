import React from 'react';
import { Helmet } from 'react-helmet-async';

import ContactBody from '../../components/ContactBody/ContactBody';
import { BootstrapWrapper } from '../../components/BootstrapWrapper/BootstrapWrapper';

function Contact() {
  return (
    <BootstrapWrapper>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <div
        style={{
          backgroundImage: `url(assets/images/contact.webp)`,
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          minHeight: '80vh',
          width: 'auto',
          overflow: 'hidden'
        }}
      >
        <ContactBody />
      </div>
    </BootstrapWrapper>
  );
}

export default Contact;
