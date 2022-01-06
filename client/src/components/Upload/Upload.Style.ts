import { Button } from '@material-ui/core';
import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Preview = styled.img`
  width: 60%;
  height: 100px;
  display: block;
  margin: 0 auto 20px auto;
  border-radius: 10px;
  border: 5px solid grey;
`;

export const Title = styled.h2`
  font-family: MonoSpace;
  font-size: 30px;
  position: relative;
`;

export const Dropper = styled.div`
  border: 1px dashed black;
  width: 60%;
  height: 200px;
  background-color: bisque;
  border-radius: 10px;
  margin-top: 20px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: grey;
    color: white;
    transition: 0.5s;
  }

  input {
    width: 100%;
    height: 100%;
    opacity: 0;
    position: absolute;
    cursor: pointer;
  }
`;

export const SubmitButton = styled(Button)`
  width: 60%;
  height: 40px;
  margin-top: 20px;
  border-radius: 3;
  color: white;
  cursor: pointer;
  background-color: #3f51b5;

  :hover {
    background-color: black;
    color: white;
    transition: 0.5s;
  }
`;
