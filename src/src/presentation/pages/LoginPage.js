import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FireLogo from '../../assets/fire-logo.svg';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Login logic would go here
    console.log('Login attempt with:', { email, password });
  };

  return (
    <LoginContainer>
      <LoginCard>
        <LogoContainer>
          <Logo src={FireLogo} alt="FireGuard Logo" />
        </LogoContainer>
        <LoginTitle>Login to FireGuard</LoginTitle>
        <LoginSubtitle>Enter your email and password to access your dashboard</LoginSubtitle>
        
        <LoginForm onSubmit={handleSubmit}>
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
            <PasswordContainer>
              <Label htmlFor="password">Password</Label>
              <ForgotPassword to="/forgot-password">Forgot password?</ForgotPassword>
            </PasswordContainer>
            <Input 
              type="password" 
              id="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormGroup>
          
          <LoginButton type="submit">Login</LoginButton>
        </LoginForm>
        
        <SignupPrompt>
          Don't have an account? <RegisterLink to="/register">Register</RegisterLink>
        </SignupPrompt>
      </LoginCard>
    </LoginContainer>
  );
};

// Styled Components
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  font-family: 'Arial', sans-serif;
`;

const LoginCard = styled.div`
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

const LoginTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

const LoginSubtitle = styled.p`
  font-size: 16px;
  color: #666;
  text-align: center;
  margin-bottom: 30px;
`;

const LoginForm = styled.form`
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

const PasswordContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ForgotPassword = styled(Link)`
  color: #e52e2e;
  text-decoration: none;
  font-size: 14px;
  
  &:hover {
    text-decoration: underline;
  }
`;

const LoginButton = styled.button`
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

const SignupPrompt = styled.p`
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: #666;
`;

const RegisterLink = styled(Link)`
  color: #e52e2e;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

export default LoginPage;