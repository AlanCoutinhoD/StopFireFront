import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validar que las contraseñas coincidan
    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    setLoading(true);

    try {
      // Preparar los datos para enviar al backend
      const userData = {
        username: formData.username,
        email: formData.email,
        password: formData.password
      };


      const response = await fetch('http://54.208.102.30:8080/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(userData),
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
      });

      // Verificar si la respuesta es JSON
      const contentType = response.headers.get('content-type');
      let data;
      
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        data = { message: await response.text() };
      }

      if (!response.ok) {
        throw new Error(data.message || 'Error al registrar usuario');
      }

      // Si el registro es exitoso (status 201), redirigir al login
      if (response.status === 201) {
        navigate('/login');
      }
    } catch (error) {
      console.error('Error de registro:', error);
      setError(error.message || 'Error al conectar con el servidor');
    } finally {
      setLoading(false);
    }
  };

  return (
    <RegisterContainer>
      <RegisterCard>
        <LogoContainer>
          <Logo />
          <LogoText>FireGuard</LogoText>
        </LogoContainer>
        
        <Title>Crear Cuenta</Title>
        <Subtitle>Regístrate para comenzar a proteger tu propiedad</Subtitle>
        
        {error && <ErrorMessage>{error}</ErrorMessage>}
        
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="username">Nombre de Usuario</Label>
            <Input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              placeholder="Elige un nombre de usuario"
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="email">Correo Electrónico</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Ingresa tu correo electrónico"
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="password">Contraseña</Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Crea una contraseña segura"
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="confirmPassword">Confirmar Contraseña</Label>
            <Input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Confirma tu contraseña"
            />
          </FormGroup>
          
          <SubmitButton type="submit" disabled={loading}>
            {loading ? 'Registrando...' : 'Registrarse'}
          </SubmitButton>
        </Form>
        
        <LoginPrompt>
          ¿Ya tienes una cuenta? <LoginLink to="/login">Inicia Sesión</LoginLink>
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
  padding: 20px;
`;

const RegisterCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 40px;
  width: 100%;
  max-width: 450px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

const Logo = styled.div`
  width: 30px;
  height: 30px;
  background-color: #e52e2e;
  border-radius: 50%;
  margin-right: 10px;
`;

const LogoText = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  color: #333;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 0 0 10px 0;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #666;
  margin: 0 0 30px 0;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: #e52e2e;
  }
`;

const SubmitButton = styled.button`
  background-color: #e52e2e;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 12px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #d42020;
  }
  
  &:disabled {
    background-color: #e57f7f;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  background-color: #ffebee;
  color: #c62828;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
  font-size: 14px;
`;

const LoginPrompt = styled.p`
  text-align: center;
  margin-top: 30px;
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