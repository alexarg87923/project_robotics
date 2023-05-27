import React, { useEffect, useRef } from 'react';
import { Wrapper } from './VideoStyle';

function Video() {
  // Define your refs here
  const videoRef = useRef(null);
  const thumbnailRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const thumbnail = thumbnailRef.current;

    const canPlayThroughHandler = () => {
      thumbnail.style.display = 'none';
      video.play();
    };

    video.addEventListener('canplaythrough', canPlayThroughHandler);

    return () => {
      video.removeEventListener('canplaythrough', canPlayThroughHandler);
    };
  }, []);

  return (
    <Wrapper>
      <section>
        <div id="video-container" className="center-text">
          <img
            id="thumbnail"
            ref={thumbnailRef}
            src="promo-bg.jpg"
            alt="Promo Thumbnail"
          />
          <video
            id="video"
            ref={videoRef}
            preload="auto"
            muted
            loop
            poster="promo-bg.jpg"
          >
            <source src="vid.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </Wrapper>
  );
}

export default Video;
