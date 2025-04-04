import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: '',
    email: ''
  });

  // Cargar datos del usuario al montar el componente
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      // Si no hay token, redirigir al login
      navigate('/login');
      return;
    }

    // Obtener datos del usuario del localStorage
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    
    if (username && email) {
      setUserData({ username, email });
    }
  }, [navigate]);

  // Función para cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('userId');
    localStorage.removeItem('user');
    navigate('/login');
  };

  // Mock data para el gráfico de temperatura
  const hours = [
    '03:45 a.m.', '05:45 a.m.', '07:45 a.m.', '09:45 a.m.', '11:45 a.m.',
    '01:45 p.m.', '03:45 p.m.', '05:45 p.m.', '07:45 p.m.', '09:45 p.m.', '10:45 p.m.', '10:50 p.m.'
  ];
  
  const temperatureData = [
    24, 22, 23, 21, 22, 24, 26, 28, 29, 27, 25, 24
  ];

  const chartData = {
    labels: hours,
    datasets: [
      {
        label: 'Temperatura (°C)',
        data: temperatureData,
        borderColor: '#e52e2e',
        backgroundColor: 'rgba(229, 46, 46, 0.1)',
        tension: 0.4,
        fill: false,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      y: {
        min: 20,
        max: 30,
        ticks: {
          stepSize: 5,
          callback: function(value) {
            return value + '°C';
          }
        },
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.05)',
        }
      },
      x: {
        grid: {
          display: false,
        }
      }
    },
    elements: {
      point: {
        radius: 0,
      },
      line: {
        borderWidth: 2,
      }
    },
  };

  const [activeTab, setActiveTab] = useState('Temperatura');

  return (
    <DashboardContainer>
      <Sidebar>
        <LogoContainer>
          <Logo />
          <LogoText>FireGuard</LogoText>
        </LogoContainer>
        
        <NavItems>
          <NavItem active={true}>
            <DashboardIcon />
            <span>Panel</span>
          </NavItem>
          <NavItem>
            <TemperatureIcon />
            <span>Temperatura</span>
          </NavItem>
          <NavItem>
            <AlertIcon />
            <span>Alertas</span>
          </NavItem>
          <NavItem>
            <AnalyticsIcon />
            <span>Análisis</span>
          </NavItem>
          <NavItem>
            <SettingsIcon />
            <span>Configuración</span>
          </NavItem>
        </NavItems>

        <UserInfo>
          <UserInitials>{userData.username ? userData.username.substring(0, 2).toUpperCase() : 'US'}</UserInitials>
          <UserDetails>
            <UserName>{userData.username || 'Usuario'}</UserName>
            <UserEmail>{userData.email || 'correo@ejemplo.com'}</UserEmail>
          </UserDetails>
          <LogoutButton onClick={handleLogout}>
            <LogoutIcon />
          </LogoutButton>
        </UserInfo>
      </Sidebar>

      <MainContent>
        <MetricsContainer>
          <MetricCard>
            <MetricValue>24.5°C</MetricValue>
            <MetricTrend positive>
              <TrendIcon positive />
              2.5% desde ayer
            </MetricTrend>
          </MetricCard>

          <MetricCard>
            <MetricValue>28.7°C</MetricValue>
            <MetricTrend negative>
              <TrendIcon negative />
              15% desde ayer
            </MetricTrend>
          </MetricCard>

          <MetricCard>
            <MetricValue>0</MetricValue>
            <MetricStatus positive>
              <StatusIcon positive />
              Todos los sistemas normales
            </MetricStatus>
          </MetricCard>

          <MetricCard>
            <MetricValue>5/5</MetricValue>
            <MetricStatus positive>
              <StatusIcon positive />
              Todos los sensores operativos
            </MetricStatus>
          </MetricCard>
        </MetricsContainer>

        <TabsContainer>
          <Tab 
            active={activeTab === 'Temperatura'} 
            onClick={() => setActiveTab('Temperatura')}
          >
            Temperatura
          </Tab>
          <Tab 
            active={activeTab === 'Alertas Recientes'} 
            onClick={() => setActiveTab('Alertas Recientes')}
          >
            Alertas Recientes
          </Tab>
        </TabsContainer>

        <ChartContainer>
          <ChartHeader>
            <ChartTitle>Historial de Temperatura</ChartTitle>
            <ChartSubtitle>Lecturas de temperatura durante las últimas 24 horas</ChartSubtitle>
          </ChartHeader>
          <ChartWrapper>
            <Line data={chartData} options={chartOptions} />
          </ChartWrapper>
        </ChartContainer>
      </MainContent>
    </DashboardContainer>
  );
};

// Styled Components
const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
  font-family: 'Arial', sans-serif;
  background-color: #ffffff;
`;

const Sidebar = styled.div`
  width: 180px;
  background-color: #ffffff;
  color: #333;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #eaeaea;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

const Logo = styled.div`
  width: 24px;
  height: 24px;
  background-color: #e52e2e;
  border-radius: 50%;
  margin-right: 10px;
`;

const LogoText = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  color: #333;
`;

const NavItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  flex-grow: 1;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  color: ${props => props.active ? '#333' : '#666'};
  font-weight: ${props => props.active ? '500' : 'normal'};
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  
  svg {
    margin-right: 10px;
    fill: ${props => props.active ? '#e52e2e' : '#666'};
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #eaeaea;
`;

const UserInitials = styled.div`
  width: 32px;
  height: 32px;
  background-color: #f3f4f6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 10px;
  color: #333;
`;

const UserDetails = styled.div`
  flex-grow: 1;
`;

const UserName = styled.div`
  font-weight: 500;
  font-size: 14px;
`;

const UserEmail = styled.div`
  font-size: 12px;
  color: #666;
`;

const LogoutButton = styled.button`
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
`;

const MainContent = styled.div`
  flex-grow: 1;
  padding: 20px;
  background-color: #ffffff;
`;

const MetricsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 30px;
`;

const MetricCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid #eaeaea;
`;

const MetricValue = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
`;

const MetricTrend = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: ${props => props.positive ? '#22c55e' : '#ef4444'};
`;

const MetricStatus = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #22c55e;
`;

const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #eaeaea;
  margin-bottom: 20px;
`;

const Tab = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  border-bottom: 2px solid ${props => props.active ? '#e52e2e' : 'transparent'};
  color: ${props => props.active ? '#e52e2e' : '#666'};
  font-weight: ${props => props.active ? '500' : 'normal'};
  
  &:hover {
    color: #e52e2e;
  }
`;

const ChartContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid #eaeaea;
`;

const ChartHeader = styled.div`
  margin-bottom: 20px;
`;

const ChartTitle = styled.h3`
  font-size: 18px;
  margin: 0 0 5px 0;
  color: #333;
`;

const ChartSubtitle = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
`;

const ChartWrapper = styled.div`
  height: 300px;
`;

// Icons
const DashboardIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
  </svg>
);

const TemperatureIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C11.172 2 10.5 2.672 10.5 3.5V14.689C9.045 15.382 8 16.881 8 18.5C8 20.985 10.015 23 12.5 23C14.985 23 17 20.985 17 18.5C17 16.881 15.955 15.382 14.5 14.689V3.5C14.5 2.672 13.828 2 13 2H12ZM12 4H13V15.5L13.5 15.75C14.5 16.25 15 17.312 15 18.5C15 19.879 13.879 21 12.5 21C11.121 21 10 19.879 10 18.5C10 17.312 10.5 16.25 11.5 15.75L12 15.5V4Z" />
  </svg>
);

const AlertIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.63 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z" />
  </svg>
);

const AnalyticsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M5 9.2H8V19H5V9.2ZM10.6 5H13.4V19H10.6V5ZM16.2 13H19V19H16.2V13Z" />
  </svg>
);

const SettingsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
  </svg>
);

const LogoutIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" />
  </svg>
);

const TrendIcon = ({ positive, negative }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill={positive ? "#22c55e" : "#ef4444"} style={{ marginRight: '4px' }}>
    <path d={positive ? "M7 14l5-5 5 5z" : "M7 10l5 5 5-5z"} />
  </svg>
);

const StatusIcon = ({ positive }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#22c55e" style={{ marginRight: '4px' }}>
    <circle cx="12" cy="12" r="8" />
  </svg>
);

export default Dashboard;