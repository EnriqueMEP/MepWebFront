import React, { useState } from 'react';
import { useTheme } from '../../../foundations/theme-hooks.js';
import ButtonPrimarySm from './ButtonPrimarySm.jsx';
import ButtonPrimaryMd from './ButtonPrimaryMd.jsx';
import ButtonPrimaryLg from './ButtonPrimaryLg.jsx';
import ButtonPrimaryXl from './ButtonPrimaryXl.jsx';

// Componente interno que usa el contexto de tema
const ButtonPrimaryDemoContent = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <div style={{
      padding: '16px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff',
      color: isDarkMode ? '#ffffff' : '#1a1a1a'
    }}>

      <div style={{
        marginBottom: '24px',
        padding: '24px',
        backgroundColor: isDarkMode ? '#2d2d2d' : '#f8fafc',
        borderRadius: '12px',
        border: `1px solid ${isDarkMode ? '#404040' : '#e2e8f0'}`
      }}>
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '24px'
        }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: '600',
            color: isDarkMode ? '#ffffff' : '#1f2937'
          }}>
            Demo Interactiva - ButtonPrimary (Sistema Semántico)
          </h2>
          
          <button
            onClick={toggleTheme}
            style={{
              padding: '8px 16px',
              borderRadius: '6px',
              border: `1px solid ${isDarkMode ? '#404040' : '#e2e8f0'}`,
              backgroundColor: isDarkMode ? '#374151' : '#f3f4f6',
              color: isDarkMode ? '#ffffff' : '#1f2937',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
        
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

// Componente principal que provee el contexto de tema
export const ButtonPrimaryDemoWithIcons = () => {
  return (      <ButtonPrimaryDemoContent />  );
};

export default ButtonPrimaryDemoWithIcons;
