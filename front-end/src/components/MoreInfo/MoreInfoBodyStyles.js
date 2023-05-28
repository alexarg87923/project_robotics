import styled from 'styled-components';

export const Wrapper = styled.div`
  .featured-section {
    position: relative;
    overflow: hidden;
  }
  * {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
    line-height: 1.5;
  }

  .featured-bg {
    width: calc(50% - 156px);
    float: left;
    height: 100%;
    left: 0;
    right: 0;
    position: absolute;
  }

  h3 {
    font-size: 30px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    color: #111111;
    font-weight: 500;
  }

  .text-box h3 {
    margin-bottom: 40px;
    max-width: 370px;
  }
  .text-box .top-meta {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 20px;
  }

  .set-bg {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
  }

  a:hover,
  a:focus {
    text-decoration: none;
    outline: none;
  }

  .text-box .read-more img {
    margin-left: 13px;
  }

  a {
    text-decoration: none;
    background-color: transparent;
  }

  .text-box h3 {
    margin-bottom: 40px;
    max-width: 370px;
  }

  .featured-box {
    float: right;
    width: calc(50% + 156px);
    background: #fff;
    padding: 100px 50px 130px 79px;
  }

  .featured-box .text-box {
    max-width: 810px;
  }

  .featured-box .text-box .top-meta {
    color: #68647d;
  }

  .featured-box .text-box h3 {
    font-size: 60px;
    max-width: 100%;
  }

  .featured-box .text-box p {
    font-size: 16px;
  }

  .featured-box .text-box .read-more {
    color: #251e2f;
  }

  .gradient-bg,
  .newsletter-section {
    background: #3e0f3d;
    /* Old browsers */
    /* FF3.6-15 */
    background: -webkit-linear-gradient(left, #3e0f3d 0%, #1c0f3b 100%);
    /* Chrome10-25,Safari5.1-6 */
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(#3e0f3d),
      to(#1c0f3b)
    );
    background: -o-linear-gradient(left, #3e0f3d 0%, #1c0f3b 100%);
    background: linear-gradient(to right, #3e0f3d 0%, #1c0f3b 100%);
    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3e0f3d', endColorstr='#1c0f3b', GradientType=1);
    /* IE6-9 */
  }
  @media only screen and (max-width: 767px) {
    .header-bar-warp {
      padding: 25px 20px 10px;
    }
    .main-menu.primary-menu {
      display: none;
    }
    .slicknav_menu {
      display: block;
      background: #081624;
    }
    .slicknav_btn {
      margin-right: 10px;
      background: #3a3a3a;
    }
    .slicknav_nav a:hover,
    .slicknav_nav .slicknav_row:hover {
      background: #25394c;
      color: #fff;
    }
    .hero-item h2 {
      font-size: 70px;
    }
    .hero-item p {
      font-size: 18px;
    }
    .footer-right-pic,
    .footer-left-pic {
      display: none;
    }
    .hero-slider .owl-nav .owl-next {
      top: auto;
      bottom: 33px;
      right: 15px;
      z-index: 99;
    }
    .hero-slider .owl-dots {
      width: 100%;
      left: 0;
      padding-left: 15px;
    }
    .intro-text-box {
      margin-bottom: 40px;
    }
    .blog-item .blog-thumb {
      float: none;
      margin-right: 0;
      width: 100%;
      margin-bottom: 30px;
    }
    .sidebar {
      padding-top: 60px;
    }
    .featured-bg {
      display: none;
    }
    .featured-box {
      float: none;
      width: 100%;
    }
    .featured-box .text-box h3 {
      font-size: 45px;
    }
    .newsletter-form {
      padding-left: 0;
    }
    .newsletter-form input {
      width: 100%;
      margin-right: 0;
      margin-bottom: 40px;
    }
    .video-text:after {
      left: 0;
    }
    .page-top-section {
      height: 400px;
      padding-top: 250px;
    }
    .game-filter {
      text-align: center;
    }
    .game-filter li {
      margin-bottom: 5px;
    }
    .game-single-content .gs-title {
      font-size: 40px;
    }
    .review-pic img {
      min-width: 100%;
      margin-bottom: 30px;
    }
    .contact-text {
      margin-bottom: 50px;
    }
    .review-content .rating {
      position: relative;
      margin-bottom: 20px;
    }
    .review-content .rating h5 {
      text-align: left;
      padding-right: 0;
    }
  }

  @media only screen and (max-width: 479px) {
    .hero-item h2 {
      font-size: 55px;
      margin-bottom: 20px;
    }
    .hero-item p {
      font-size: 15px;
    }
    .video-text h2 {
      font-size: 30px;
    }
    .video-play-btn {
      top: calc(30% - 61px);
    }
    .featured-box {
      padding: 100px 15px;
    }
    .featured-box .text-box h3,
    .newsletter-section h2 {
      font-size: 35px;
    }
    .main-menu li a {
      margin-right: 20px;
    }
    .game-author-pic {
      float: none;
      margin-bottom: 20px;
    }
  }
  .text-box p {
    font-size: 15px;
    font-weight: 500;
    color: #68647d;
    margin-bottom: 35px;
  }
  .text-box .read-more {
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 700;
    font-style: italic;
    color: #fff;
  }
`;
