import styled from 'styled-components';

import { Twitter } from 'styled-icons/icomoon';
import Button from '../Button';
import { Divider } from '@mui/material';


export const DividerCustom = styled(Divider)`
  background: gray;
  width: 52%;
  margin-right: 270px;
`;

export const EditButton = styled(Button)`
  padding: 4px 16px;
  font-size: 13px;

  border: 1px solid white;
  border-width: inherit;
  background: white;
  font-size: 12px;
  margin-top: 20px;


  &:hover,
  &:focus {
    background: white;
  }

  @media (min-width: 320px) {
    padding: 10px 19px;
    font-size: 12px;
  }
`;


export const EditData = styled.div`
  border-radius: 0;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, Arial, sans-serif;
  padding: 0; 
  background: black;

  > h5 {
    font-weight: inherit;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    > h5 {
      color: blue;
      font-weight: inherit;
      width: 52%;
      > a {
        color: blue;
        cursor: pointer;
      }
    }
  }

  > div:nth-child(1) {
    > div {
      display: flex;
      justify-content: center;
      width: 52%;
    }
  }
  
  @media (min-width: 426px) {
    /* font: normal 20pt; */ 
    border-radius: 25px;
    min-width: 600px; 
    height: 600px;
  }
`;

export const Container = styled.div`
    top: 0; 
    left: 0; 
    width: 100%;
    height: 100%; 
    background: #000; 
    position: fixed;
    display: flex;
    justify-content: center; 
    align-items: center; 
    flex-direction: column;
`;

export const Logo = styled(Twitter)`
  height: 5%;
  cursor: pointer;

  > path {
    fill: white;
  }
`;

export const Header = styled.div`

  > button {
    padding: 0;
    border: 0;
    outline: 0;
    cursor: pointer
  }
`;


export const Form = styled.div`
  position: relative;
  margin-top: 25px;
  width: 52%;
  
  border-radius: 5px;
 
  > p {
    :first-of-type {
      color: gray;
      font-size: 13px;
      margin-bottom: 4px;
    }
    :last-of-type {
      color: gray;
      font-size: 16px;
      margin-bottom: 4px;
    }
  }
`;

export const FormInput = styled.input`
  font-size: 16px;
  width: 96.5%;
  padding: 40px 10px 15px 10px;
  overflow: hidden;
  resize: none;

  outline: 1px solid gray;
  border-radius: 5px;
  border-width: inherit;

  

  background: black;
  color: white;
  
  :nth-child(2),
  :nth-child(4)
  {
    padding: 40px 10px 60px 10px;
  }
  
  @media (min-width: 300px) {
    &:focus {
    outline: 1px solid blue;
    border-radius: 5px;
  }
  }
`;

export const FormLabel = styled.label`
  box-sizing: border-box;
  font-size: 90%;
  position: absolute;
  top: 0.68rem;
  color: gray;
  left: 0.59rem;
  padding: 0 5px;
`;