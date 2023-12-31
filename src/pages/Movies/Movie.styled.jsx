import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledSearch = styled.div`
  top: 0;
  left: 0;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  box-shadow: 0px 2px 4px -1px rgba(135, 83, 172, 0.2),
    0px 4px 5px 0px rgba(135, 83, 172, 0.14),
    0px 1px 10px 0px rgba(135, 83, 172, 0.12);

  .form {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;
    border: 1px solid #8854ad;
  }

  .button {
    display: inline-block;
    width: 48px;
    height: 48px;
    border: 0;
    background-image: url('https://svgsilh.com/svg/305547.svg');
    background-size: 70%;
    background-repeat: no-repeat;
    background-position: center;
    background-color: transparent;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
  }

  .button:hover {
    opacity: 1;
  }

  .button-label {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
    border: 0;
  }

  .input {
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 20px;
    border: none;
    outline: none;
    padding-left: 10px;
    padding-right: 10px;
  }

  .input::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const StyledList = styled.ul`
  list-style: square;
  padding-left: 40px;

  .list-item {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .list-item:hover {
    color: #8854ad;
  }
`;
export const StyledLink = styled(Link)`
  font-size: 32px;
  text-decoration: none;
  color: #000000;
  .item-title {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;
