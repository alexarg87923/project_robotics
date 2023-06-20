import React from 'react';
import { Helmet } from 'react-helmet-async';

import SubmitBody from '../../components/SubmitBody/SubmitBody';
import { BootstrapWrapper } from '../../components/BootstrapWrapper/BootstrapWrapper';

function Submit() {
  return (
    <BootstrapWrapper>
      <Helmet>
        <title>Submit</title>
      </Helmet>
      <SubmitBody />
    </BootstrapWrapper>
  );
}

export default Submit;
