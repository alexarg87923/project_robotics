import styled from 'styled-components';

export const Wrapper = styled.div`
  .header {
    font-family: Impact, 'impact-w01-2010', 'impact-w02-2010', 'impact-w10-2010',
      sans-serif;
    font-weight: normal;
    font-style: normal;
    font-size: 70px;
    line-height: 1.4em;
    color: white;
    margin-top: 50px;
  }

  .second_header {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
    line-height: 1.5em;
    font-size: 20px;
    font-weight: bold;
    color: rgb(194, 160, 109);
  }

  .custom-input {
    background-color: transparent;
    color: white;
    border-color: grey;
    border-radius: 0;
    transition: border-color 0.3s ease-in-out;
  }

  .custom-input::placeholder {
    color: white;
  }

  .custom-input:focus,
  .custom-textarea:focus {
    outline: none;
    box-shadow: none;
    background-color: transparent;
    border-color: rgb(194, 160, 109);
  }

  .custom-input:focus:hover,
  .custom-textarea:focus:hover {
    outline: none;
    box-shadow: none;
    background-color: transparent;
    border-color: rgb(194, 160, 109);
  }

  .custom-input:hover,
  .custom-textarea:hover {
    border-color: white; /* Completely white color on hover */
  }

  .custom-input:focus,
  .custom-textarea:focus {
    color: white; /* Completely white color on hover */
  }

  .custom-textarea {
    min-height: 150px; /* Adjust to your liking */
    background-color: transparent;
    color: white;
    border-color: grey;
    border-radius: 0;
    transition: border-color 0.3s ease-in-out;
  }

  .custom-textarea::placeholder {
    color: white;
  }

  hr {
    height: 2px; /* Set the height of the horizontal line */
    background-color: rgb(123, 121, 117); /* Set the color using RGB values */
    border: none; /* Remove the default border */
    width: 50%;
  }
  .hr-container {
    display: flex;
    justify-content: center;
  }
  .text-white {
    color: rgb(250, 246, 233) !important;
  }
  .text-14 {
    font-size: 14px;
    line-height: 5px;
  }
`;
