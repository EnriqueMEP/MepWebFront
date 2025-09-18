import React, { useState } from 'react';
import ButtonSecondarySm from './ButtonSecondarySm.jsx';
import ButtonSecondaryMd from './ButtonSecondaryMd.jsx';
import ButtonSecondaryLg from './ButtonSecondaryLg.jsx';
import ButtonSecondaryXl from './ButtonSecondaryXl.jsx';

export const ButtonSecondaryDemoWithIcons = ({ isDarkMode = false }) => {
  const [selectedButton, setSelectedButton] = useState(null);

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
        
        <h2 style={{
          fontSize: '24px',
          fontWeight: '600',
          marginBottom: '24px',
          color: isDarkMode ? '#ffffff' : '#1f2937'
        }}>
          Demo Interactiva - ButtonSecondary
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

        <div style={{
          fontSize: '14px',
          color: isDarkMode ? '#d1d5db' : '#4b5563',
          backgroundColor: isDarkMode ? '#374151' : '#f1f5f9',
          padding: '16px',
          borderRadius: '8px',
          marginTop: '24px',
          border: `1px solid ${isDarkMode ? '#4b5563' : '#e2e8f0'}`
        }}>
          {/* Instrucciones eliminadas por solicitud */}
        </div>

        <div style={{
          fontSize: '12px',
          fontFamily: 'Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
          color: isDarkMode ? '#9ca3af' : '#6b7280',
          backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
          padding: '16px',
          borderRadius: '8px',
          marginTop: '16px',
          border: `1px solid ${isDarkMode ? '#374151' : '#e5e8eb'}`
        }}>
          
        </div>
      </div>
    </div>
  );
};

export default ButtonSecondaryDemoWithIcons;