import React from 'react';
import { Helmet } from 'react-helmet-async';

import SignInBody from '../../components/SignInBody/SignInBody.js';
import { BootstrapWrapper } from '../../components/BootstrapWrapper/BootstrapWrapper.js';

function SignIn() {
  return (
    <BootstrapWrapper>
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <SignInBody />
    </BootstrapWrapper>
  );
}

export default SignIn;
