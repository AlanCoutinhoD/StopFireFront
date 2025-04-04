import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomePage = () => {
  return (
    <HomeContainer>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 0'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ 
            width: '30px', 
            height: '30px', 
            backgroundColor: '#e52e2e',
            borderRadius: '50%',
            marginRight: '10px'
          }}></div>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>FireGuard</h1>
        </div>
        <div style={{ display: 'flex', gap: '30px' }}>
          <a href="#features" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Características</a>
          <a href="#how-it-works" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Cómo Funciona</a>
          <a href="#pricing" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Precios</a>
        </div>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <Link to="/login" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Iniciar Sesión</Link>
          <Link to="/register" style={{ 
            backgroundColor: '#1a1a1a',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            textDecoration: 'none',
            fontWeight: '500'
          }}>Registrarse</Link>
        </div>
      </nav>
      
      <HeroSection>
        <HeroTitle>Protege tu hogar con detección avanzada de incendios</HeroTitle>
        <HeroSubtitle>
          FireGuard proporciona monitoreo de temperatura en tiempo real y alertas
          instantáneas para mantener tu propiedad segura contra riesgos de incendio.
        </HeroSubtitle>
        <ButtonContainer>
          <GetStartedButton to="/register">
            Comenzar <span style={{ marginLeft: '10px' }}>→</span>
          </GetStartedButton>
          <LearnMoreButton href="#features">Saber Más</LearnMoreButton>
        </ButtonContainer>
      </HeroSection>

      {/* Features Section */}
      <FeaturesSection id="features">
        <SectionTag>Características Principales</SectionTag>
        <SectionTitle>Solución Completa de Monitoreo de Incendios</SectionTitle>
        <SectionDescription>
          Nuestro sistema proporciona capacidades completas de detección y monitoreo de incendios para garantizar tu seguridad.
        </SectionDescription>

        <FeatureCards>
          <FeatureCard>
            <FeatureIconContainer>
              <TemperatureIcon />
            </FeatureIconContainer>
            <FeatureTitle>Monitoreo de Temperatura</FeatureTitle>
            <FeatureDescription>
              Seguimiento de temperatura en tiempo real con visualización de datos históricos y análisis de tendencias.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureIconContainer>
              <AlertIcon />
            </FeatureIconContainer>
            <FeatureTitle>Alertas Instantáneas</FeatureTitle>
            <FeatureDescription>
              Recibe notificaciones inmediatas cuando se detectan temperaturas anormales.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureIconContainer>
              <AnalyticsIcon />
            </FeatureIconContainer>
            <FeatureTitle>Análisis Avanzado</FeatureTitle>
            <FeatureDescription>
              Panel de control completo con visualización de datos e historial de alertas.
            </FeatureDescription>
          </FeatureCard>
        </FeatureCards>
      </FeaturesSection>

      {/* How It Works Section */}
      <HowItWorksSection id="how-it-works">
        <SectionTitle>Cómo Funciona FireGuard</SectionTitle>
        <SectionDescription>
          Nuestro proceso simple de tres pasos asegura que siempre estés protegido
        </SectionDescription>

        <StepsContainer>
          <StepCard>
            <StepNumber>1</StepNumber>
            <StepTitle>Instalar Sensores</StepTitle>
            <StepDescription>
              Coloca nuestros sensores inteligentes en ubicaciones clave de tu propiedad.
            </StepDescription>
          </StepCard>

          <StepCard>
            <StepNumber>2</StepNumber>
            <StepTitle>Conectar a la Plataforma</StepTitle>
            <StepDescription>
              Vincula tus sensores a nuestra plataforma en la nube para un monitoreo continuo.
            </StepDescription>
          </StepCard>

          <StepCard>
            <StepNumber>3</StepNumber>
            <StepTitle>Monitorear y Responder</StepTitle>
            <StepDescription>
              Visualiza datos en tiempo real y recibe alertas cuando se necesite actuar.
            </StepDescription>
          </StepCard>
        </StepsContainer>
      </HowItWorksSection>

      {/* Call to Action Section */}
      <CTASection>
        <SectionTitle>¿Listo para proteger tu propiedad?</SectionTitle>
        <SectionDescription>
          Únete a miles de clientes satisfechos que confían en FireGuard para sus necesidades de seguridad contra incendios.
        </SectionDescription>
        <CTAButton to="/register">Comenzar Hoy</CTAButton>
      </CTASection>
    </HomeContainer>
  );
};

// Styled Components
const HomeContainer = styled.div`
  font-family: 'Arial', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const HeroSection = styled.div`
  text-align: left;
  padding: 80px 0;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
  max-width: 800px;
`;

const HeroSubtitle = styled.p`
  font-size: 20px;
  color: #666;
  margin-bottom: 40px;
  max-width: 700px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const GetStartedButton = styled(Link)`
  background-color: #e52e2e;
  color: white;
  padding: 15px 30px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  display: flex;
  align-items: center;
`;

const LearnMoreButton = styled.a`
  background-color: white;
  color: #333;
  padding: 15px 30px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  border: 1px solid #ddd;
`;

// Features Section Styles
const FeaturesSection = styled.section`
  padding: 80px 0;
  background-color: #f5f5f5;
  margin: 0 -20px;
  padding: 80px 20px;
  text-align: center;
`;

const SectionTag = styled.div`
  color: #e52e2e;
  font-weight: 500;
  margin-bottom: 10px;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const SectionDescription = styled.p`
  font-size: 18px;
  color: #666;
  max-width: 700px;
  margin: 0 auto 40px;
`;

const FeatureCards = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 40px;
  flex-wrap: wrap;
`;

const FeatureCard = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  text-align: center;
  flex: 1;
  min-width: 250px;
  max-width: 350px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const FeatureIconContainer = styled.div`
  width: 60px;
  height: 60px;
  background-color: rgba(229, 46, 46, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
`;

const FeatureTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const FeatureDescription = styled.p`
  font-size: 16px;
  color: #666;
`;

// How It Works Section Styles
const HowItWorksSection = styled.section`
  padding: 80px 0;
  text-align: center;
`;

const StepsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 40px;
  flex-wrap: wrap;
`;

const StepCard = styled.div`
  flex: 1;
  min-width: 250px;
  max-width: 350px;
  text-align: center;
`;

const StepNumber = styled.div`
  width: 40px;
  height: 40px;
  background-color: rgba(229, 46, 46, 0.1);
  color: #e52e2e;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-weight: bold;
`;

const StepTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const StepDescription = styled.p`
  font-size: 16px;
  color: #666;
`;

// CTA Section Styles
const CTASection = styled.section`
  padding: 80px 0;
  text-align: center;
  background-color: #f5f5f5;
  margin: 0 -20px;
  padding: 80px 20px;
`;

const CTAButton = styled(Link)`
  background-color: #e52e2e;
  color: white;
  padding: 15px 30px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  display: inline-block;
  margin-top: 20px;
`;

// Icons
const TemperatureIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#e52e2e">
    <path d="M12 2C11.172 2 10.5 2.672 10.5 3.5V14.689C9.045 15.382 8 16.881 8 18.5C8 20.985 10.015 23 12.5 23C14.985 23 17 20.985 17 18.5C17 16.881 15.955 15.382 14.5 14.689V3.5C14.5 2.672 13.828 2 13 2H12ZM12 4H13V15.5L13.5 15.75C14.5 16.25 15 17.312 15 18.5C15 19.879 13.879 21 12.5 21C11.121 21 10 19.879 10 18.5C10 17.312 10.5 16.25 11.5 15.75L12 15.5V4Z" />
  </svg>
);

const AlertIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#e52e2e">
    <path d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.63 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z" />
  </svg>
);

const AnalyticsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#e52e2e">
    <path d="M5 9.2H8V19H5V9.2ZM10.6 5H13.4V19H10.6V5ZM16.2 13H19V19H16.2V13Z" />
  </svg>
);

export default HomePage;