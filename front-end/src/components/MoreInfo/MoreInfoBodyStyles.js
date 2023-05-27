import styled from 'styled-components';

export const Wrapper = styled.div`
  .featured-section {
    position: relative;
    overflow: hidden;
  }

  .featured-bg {
    width: calc(50% - 156px);
    float: left;
    height: 100%;
    left: 0;
    right: 0;
    position: absolute;
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
`;
