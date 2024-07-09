import React, { useState } from 'react';
import styled from 'styled-components';

const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #ff9a9e, #fad0c4);
`;

const SignUpCard = styled.div`
  width: 400px;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  background: #fff;
`;

const SignUpTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  color: #333;
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormInput = styled.input`
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
`;

const SignUpButton = styled.button`
  background-color: #6a0572;
  color: #fff;
  padding: 15px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: #ab83a1;
  }
`;

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Add your signup logic here
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <SignUpContainer>
      <SignUpCard>
        <SignUpTitle>Sign Up</SignUpTitle>
        <SignUpForm>
          <FormInput
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FormInput
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <SignUpButton type="button" onClick={handleSignUp}>
            Sign Up
          </SignUpButton>
        </SignUpForm>
      </SignUpCard>
    </SignUpContainer>
  );
};

export default SignUpPage;
