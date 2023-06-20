import React from 'react';
import { Helmet } from 'react-helmet-async';

import SignUpBody from '../../components/SignUpBody/SignUpBody';
import { BootstrapWrapper } from '../../components/BootstrapWrapper/BootstrapWrapper';

function SignUp() {
  return (
    <BootstrapWrapper>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <SignUpBody />
    </BootstrapWrapper>
  );
}

export default SignUp;
