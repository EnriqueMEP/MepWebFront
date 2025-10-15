import React, { useState } from 'react';
import ButtonPrimarySm from './ButtonPrimarySm.jsx';
import ButtonPrimaryMd from './ButtonPrimaryMd.jsx';
import ButtonPrimaryLg from './ButtonPrimaryLg.jsx';
import ButtonPrimaryXl from './ButtonPrimaryXl.jsx';

export const ButtonPrimaryDemoWithIcons = ({ isDarkMode = false }) => {
  const [selectedButton, setSelectedButton] = useState(null);

  return (
    <div style={{
      padding: '32px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff',
      minHeight: '100vh',
      color: isDarkMode ? '#ffffff' : '#1a1a1a'
    }}>
      <h1 style={{
        fontSize: '32px',
        fontWeight: '700',
        marginBottom: '8px',
        color: isDarkMode ? '#ffffff' : '#1a1a1a'
      }}>
        ButtonPrimary Components
      </h1>
      
      <p style={{
        fontSize: '16px',
        color: isDarkMode ? '#9ca3af' : '#6b7280',
        marginBottom: '40px',
        fontWeight: '400'
      }}>
        Sistema completo de botones primarios con diferentes tamaños y configuraciones de iconos
      </p>

      <div style={{
        marginBottom: '48px',
        padding: '32px',
        backgroundColor: isDarkMode ? '#2d2d2d' : '#f8fafc',
        borderRadius: '12px',
        border: `1px solid ${isDarkMode ? '#404040' : '#e2e8f0'}`
      }}>
        
        <h2 style={{
          fontSize: '24px',
          fontWeight: '600',
          marginBottom: '24px',
          color: isDarkMode ? '#ffffff' : '#1f2937'
        }}>
          Demo Interactiva - ButtonPrimary
        </h2>
        
        <div style={{
          display: 'flex',
          gap: '20px',
          alignItems: 'center',
          flexWrap: 'wrap',
          marginBottom: '24px'
        }}>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            alignItems: 'center'
          }}>
            <ButtonPrimarySm
              selected={selectedButton === 'sm'}
              onClick={() => setSelectedButton(selectedButton === 'sm' ? null : 'sm')}
            >
              Small
            </ButtonPrimarySm>
            <div>ButtonPrimarySm</div>
            <div>Sin iconos</div>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            alignItems: 'center'
          }}>
            <ButtonPrimaryMd
              leftIcon="user"
              selected={selectedButton === 'md'}
              onClick={() => setSelectedButton(selectedButton === 'md' ? null : 'md')}
            >
              Medium
            </ButtonPrimaryMd>
            <div>ButtonPrimaryMd</div>
            <div>Icono izquierda</div>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            alignItems: 'center'
          }}>
            <ButtonPrimaryLg
              rightIcon="arrowRight"
              selected={selectedButton === 'lg'}
              onClick={() => setSelectedButton(selectedButton === 'lg' ? null : 'lg')}
            >
              Large
            </ButtonPrimaryLg>
            <div>ButtonPrimaryLg</div>
            <div>Icono derecha</div>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            alignItems: 'center'
          }}>
            <ButtonPrimaryXl
              leftIcon="userLocation"
              rightIcon="userShared"
              selected={selectedButton === 'xl'}
              onClick={() => setSelectedButton(selectedButton === 'xl' ? null : 'xl')}
            >
              Extra Large
            </ButtonPrimaryXl>
            <div>ButtonPrimaryXl</div>
            <div>Ambos iconos</div>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            alignItems: 'center'
          }}>
            <ButtonPrimaryMd
              disabled={true}
              leftIcon="user"
            >
              Disabled
            </ButtonPrimaryMd>
            <div>ButtonPrimaryMd</div>
            <div>Estado Disabled</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonPrimaryDemoWithIcons;