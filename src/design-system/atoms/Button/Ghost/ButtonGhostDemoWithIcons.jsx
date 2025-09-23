import React, { useState } from 'react';
import ButtonGhostSm from './ButtonGhostSm.jsx';
import ButtonGhostMd from './ButtonGhostmD.jsx';
import ButtonGhostLg from './ButtonGhostLg.jsx';
import ButtonGhostXl from './ButtonGhostXl.jsx';

export const ButtonGhostDemoWithIcons = ({ isDarkMode = false }) => {
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
          Demo Interactiva - ButtonGhost
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
            <ButtonGhostSm
              selected={selectedButton === 'sm'}
              onClick={() => setSelectedButton(selectedButton === 'sm' ? null : 'sm')}
            >
              Small
            </ButtonGhostSm>
            <div style={{
              fontSize: '12px',
              fontWeight: '600',
              color: isDarkMode ? '#e5e7eb' : '#374151',
              textAlign: 'center'
            }}>
              ButtonGhostSm
            </div>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            alignItems: 'center'
          }}>
            <ButtonGhostMd
              leftIcon="user"
              selected={selectedButton === 'md'}
              onClick={() => setSelectedButton(selectedButton === 'md' ? null : 'md')}
            >
              Medium
            </ButtonGhostMd>
            <div style={{
              fontSize: '12px',
              fontWeight: '600',
              color: isDarkMode ? '#e5e7eb' : '#374151',
              textAlign: 'center'
            }}>
              ButtonGhostMd<br/>
              Icono izquierda
            </div>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            alignItems: 'center'
          }}>
            <ButtonGhostLg
              rightIcon="arrowRight"
              selected={selectedButton === 'lg'}
              onClick={() => setSelectedButton(selectedButton === 'lg' ? null : 'lg')}
            >
              Large
            </ButtonGhostLg>
            <div style={{
              fontSize: '12px',
              fontWeight: '600',
              color: isDarkMode ? '#e5e7eb' : '#374151',
              textAlign: 'center'
            }}>
              ButtonGhostLg<br/>
              Icono derecha
            </div>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            alignItems: 'center'
          }}>
            <ButtonGhostXl
              leftIcon="userLocation"
              rightIcon="userShared"
              selected={selectedButton === 'xl'}
              onClick={() => setSelectedButton(selectedButton === 'xl' ? null : 'xl')}
            >
              Extra Large
            </ButtonGhostXl>
            <div style={{
              fontSize: '12px',
              fontWeight: '600',
              color: isDarkMode ? '#e5e7eb' : '#374151',
              textAlign: 'center'
            }}>
              ButtonGhostXl<br/>
              Ambos iconos
            </div>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            alignItems: 'center'
          }}>
            <ButtonGhostMd
              disabled={true}
            >
              Disabled
            </ButtonGhostMd>
            <div style={{
              fontSize: '12px',
              fontWeight: '600',
              color: isDarkMode ? '#e5e7eb' : '#374151',
              textAlign: 'center'
            }}>
              ButtonGhostMd<br/>
              Estado Disabled
            </div>
          </div>
          
        </div>
        
      </div>

    </div>
  );
};

export default ButtonGhostDemoWithIcons;
