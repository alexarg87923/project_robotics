import React from 'react';
import { Wrapper } from './MoreInfoBodyStyles';

function AboutBody() {
  return (
    <Wrapper>
      <section className="featured-section">
        <div
          className="featured-bg set-bg"
          style={{ backgroundImage: `url(assets/images/featured-bg.jpg)` }}
        ></div>
        <div className="featured-box">
          <div className="text-box">
            <h3>A Celebration of Robotics Innovation</h3>
            <p>
              Immerse yourself in the realm of robotics, where innovation meets
              creativity. Participate in our intriguing competition the
              spectacle of our members' robotic creations in action. From
              beginner-friendly introductions to advanced robotics discussions,
              there's something for everyone at Tomatothon.
            </p>
            <a href="#" className="read-more">
              Read More <img src="assets/images/double-arrow.png" alt="#" />
            </a>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}

export default AboutBody;
