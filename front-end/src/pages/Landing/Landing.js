import React from 'react';
import { Helmet } from 'react-helmet-async';

// import Video from '../../components/Video/Video';
// import MoreInfo from '../../components/MoreInfo/MoreInfoBody';

function Landing() {
  return (
    <div
      style={{
        backgroundImage: `url(assets/images/bg.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        height: '100vh',
        width: 'auto'
      }}
    >
      <Helmet>
        <title>Home</title>
      </Helmet>
      {/* <Video /> */}
      {/* <MoreInfo /> */}
    </div>
  );
}

export default Landing;
