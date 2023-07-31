import React from 'react';
import { Helmet } from 'react-helmet-async';

import { BootstrapWrapper } from '../../components/common/BootstrapWrapper/BootstrapWrapper';

function SignIn() {
  return (
    <BootstrapWrapper>
      <Helmet>
        <title>Sign In</title>
      </Helmet>
    </BootstrapWrapper>
  );
}

export default SignIn;
