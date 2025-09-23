import React, { useState } from 'react';
import { useTheme } from '../../../foundations/theme-hooks.js';
import ButtonSecondarySm from './ButtonSecondarySm.jsx';
import ButtonSecondaryMd from './ButtonSecondaryMd.jsx';
import ButtonSecondaryLg from './ButtonSecondaryLg.jsx';
import ButtonSecondaryXl from './ButtonSecondaryXl.jsx';

// Componente interno que usa el contexto de tema
const ButtonSecondaryDemoContent = () => {
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
            Demo Interactiva - ButtonSecondary (Sistema Semántico)
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
            <ButtonSecondarySm
              selected={selectedButton === 'sm'}
              onClick={() => setSelectedButton(selectedButton === 'sm' ? null : 'sm')}
            >
              Small
            </ButtonSecondarySm>
            <div style={{
              fontSize: '12px',
              fontWeight: '600',
              color: isDarkMode ? '#e5e7eb' : '#374151',
              textAlign: 'center'
            }}>
              ButtonSecondarySm
            </div>
            <div style={{
              fontSize: '10px',
              color: isDarkMode ? '#9ca3af' : '#6b7280',
              textAlign: 'center',
              maxWidth: '120px'
            }}>
              Sin iconos (básico)
            </div>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            alignItems: 'center'
          }}>
            <ButtonSecondaryMd
              leftIcon="user"
              selected={selectedButton === 'md'}
              onClick={() => setSelectedButton(selectedButton === 'md' ? null : 'md')}
            >
              Medium
            </ButtonSecondaryMd>
            <div style={{
              fontSize: '12px',
              fontWeight: '600',
              color: isDarkMode ? '#e5e7eb' : '#374151',
              textAlign: 'center'
            }}>
              ButtonSecondaryMd
            </div>
            <div style={{
              fontSize: '10px',
              color: isDarkMode ? '#9ca3af' : '#6b7280',
              textAlign: 'center',
              maxWidth: '120px'
            }}>
              Icono izquierda (user)
            </div>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            alignItems: 'center'
          }}>
            <ButtonSecondaryLg
              rightIcon="arrowRight"
              selected={selectedButton === 'lg'}
              onClick={() => setSelectedButton(selectedButton === 'lg' ? null : 'lg')}
            >
              Large
            </ButtonSecondaryLg>
            <div style={{
              fontSize: '12px',
              fontWeight: '600',
              color: isDarkMode ? '#e5e7eb' : '#374151',
              textAlign: 'center'
            }}>
              ButtonSecondaryLg
            </div>
            <div style={{
              fontSize: '10px',
              color: isDarkMode ? '#9ca3af' : '#6b7280',
              textAlign: 'center',
              maxWidth: '120px'
            }}>
              Icono derecha (arrowRight)
            </div>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            alignItems: 'center'
          }}>
            <ButtonSecondaryXl
              leftIcon="userLocation"
              rightIcon="userShared"
              selected={selectedButton === 'xl'}
              onClick={() => setSelectedButton(selectedButton === 'xl' ? null : 'xl')}
            >
              Extra Large
            </ButtonSecondaryXl>
            <div style={{
              fontSize: '12px',
              fontWeight: '600',
              color: isDarkMode ? '#e5e7eb' : '#374151',
              textAlign: 'center'
            }}>
              ButtonSecondaryXl
            </div>
            <div style={{
              fontSize: '10px',
              color: isDarkMode ? '#9ca3af' : '#6b7280',
              textAlign: 'center',
              maxWidth: '120px'
            }}>
              Ambos iconos (userLocation + userShared)
            </div>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            alignItems: 'center'
          }}>
            <ButtonSecondaryMd
              disabled={true}
              leftIcon="user"
            >
              Disabled
            </ButtonSecondaryMd>
            <div style={{
              fontSize: '12px',
              fontWeight: '600',
              color: isDarkMode ? '#e5e7eb' : '#374151',
              textAlign: 'center'
            }}>
              ButtonSecondaryMd
            </div>
            <div style={{
              fontSize: '10px',
              color: isDarkMode ? '#9ca3af' : '#6b7280',
              textAlign: 'center',
              maxWidth: '120px'
            }}>
              Estado Disabled
            </div>
          </div>
        </div>

        

       
      </div>
    </div>
  );
};

// Componente principal que provee el contexto de tema
export const ButtonSecondaryDemoWithIcons = () => {
  return (      <ButtonSecondaryDemoContent />  );
};

export default ButtonSecondaryDemoWithIcons;
