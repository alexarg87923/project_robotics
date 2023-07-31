import React from 'react';
import { Helmet } from 'react-helmet-async';

import { BootstrapWrapper } from '../../components/common/BootstrapWrapper/BootstrapWrapper';

function SignUp() {
  return (
    <BootstrapWrapper>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
    </BootstrapWrapper>
  );
}

export default SignUp;
