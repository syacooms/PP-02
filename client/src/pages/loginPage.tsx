import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: #f9f4ee;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  width: 300px;
  height: 400px;
  border-radius: 5px;
  box-shadow: 1px 1px 1px 1px black;
`;

const Img = styled.img`
  margin-top: 50px;
  margin-bottom: 30px;
  width: 200px;
  border-radius: 5%;
  border: 1px solid #000000;
`;

const Button = styled.button`
  margin-top: 50px;
`;

const LoginPage: React.FC = () => {
  return (
    <Container>
      <Section>
        <Img className="Logo" alt="logo" src="img/Schedule.jpg" />
        <p>
          <strong>Login</strong>
        </p>
        <Button>구글 로그인</Button>
      </Section>
    </Container>
  );
};

export default LoginPage;
