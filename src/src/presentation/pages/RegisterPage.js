import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FireLogo from '../../assets/fire-logo.svg';

const RegisterPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Registration logic would go here
    console.log('Registration attempt with:', { fullName, email, password, confirmPassword });
  };

  return (
    <RegisterContainer>
      <RegisterCard>
        <LogoContainer>
          <Logo src={FireLogo} alt="FireGuard Logo" />
        </LogoContainer>
        <RegisterTitle>Create an account</RegisterTitle>
        <RegisterSubtitle>Enter your information to create a FireGuard account</RegisterSubtitle>
        
        <RegisterForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="fullName">Full Name</Label>
            <Input 
              type="text" 
              id="fullName" 
              placeholder="John Doe"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input 
              type="email" 
              id="email" 
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input 
              type="password" 
              id="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input 
              type="password" 
              id="confirmPassword" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </FormGroup>
          
          <RegisterButton type="submit">Register</RegisterButton>
        </RegisterForm>
        
        <LoginPrompt>
          Already have an account? <LoginLink to="/login">Login</LoginLink>
        </LoginPrompt>
      </RegisterCard>
    </RegisterContainer>
  );
};

// Styled Components
const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  font-family: 'Arial', sans-serif;
`;

const RegisterCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 40px;
  width: 100%;
  max-width: 450px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Logo = styled.img`
  height: 40px;
  color: #e52e2e;
`;

const RegisterTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

const RegisterSubtitle = styled.p`
  font-size: 16px;
  color: #666;
  text-align: center;
  margin-bottom: 30px;
`;

const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-weight: 500;
  font-size: 16px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: #e52e2e;
  }
`;

const RegisterButton = styled.button`
  background-color: #e52e2e;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 10px;
  
  &:hover {
    background-color: #d42020;
  }
`;

const LoginPrompt = styled.p`
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: #666;
`;

const LoginLink = styled(Link)`
  color: #e52e2e;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

export default RegisterPage;