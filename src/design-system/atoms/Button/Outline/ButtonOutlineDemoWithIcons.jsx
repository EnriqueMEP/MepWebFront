import React, { useState } from 'react';
import ButtonOutlineSm from './ButtonOutlineSm.jsx';
import ButtonOutlineMd from './ButtonOutlineMd.jsx';
import ButtonOutlineLg from './ButtonOutlineLg.jsx';
import ButtonOutlineXl from './ButtonOutlineXl.jsx';

export const ButtonOutlineDemoWithIcons = ({ isDarkMode = false }) => {
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
          Demo Interactiva - ButtonOutline
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
            <ButtonOutlineSm
              selected={selectedButton === 'sm'}
              onClick={() => setSelectedButton(selectedButton === 'sm' ? null : 'sm')}
            >
              Small
            </ButtonOutlineSm>
            <div style={{
              fontSize: '12px',
              fontWeight: '600',
              color: isDarkMode ? '#e5e7eb' : '#374151',
              textAlign: 'center'
            }}>
              ButtonOutlineSm
            </div>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            alignItems: 'center'
          }}>
            <ButtonOutlineMd
              leftIcon="user"
              selected={selectedButton === 'md'}
              onClick={() => setSelectedButton(selectedButton === 'md' ? null : 'md')}
            >
              Medium
            </ButtonOutlineMd>
            <div style={{
              fontSize: '12px',
              fontWeight: '600',
              color: isDarkMode ? '#e5e7eb' : '#374151',
              textAlign: 'center'
            }}>
              ButtonOutlineMd<br/>
              Icono izquierda
            </div>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            alignItems: 'center'
          }}>
            <ButtonOutlineLg
              rightIcon="arrowRight"
              selected={selectedButton === 'lg'}
              onClick={() => setSelectedButton(selectedButton === 'lg' ? null : 'lg')}
            >
              Large
            </ButtonOutlineLg>
            <div style={{
              fontSize: '12px',
              fontWeight: '600',
              color: isDarkMode ? '#e5e7eb' : '#374151',
              textAlign: 'center'
            }}>
              ButtonOutlineLg<br/>
              Icono derecha
            </div>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            alignItems: 'center'
          }}>
            <ButtonOutlineXl
              leftIcon="userLocation"
              rightIcon="userShared"
              selected={selectedButton === 'xl'}
              onClick={() => setSelectedButton(selectedButton === 'xl' ? null : 'xl')}
            >
              Extra Large
            </ButtonOutlineXl>
            <div style={{
              fontSize: '12px',
              fontWeight: '600',
              color: isDarkMode ? '#e5e7eb' : '#374151',
              textAlign: 'center'
            }}>
              ButtonOutlineXl<br/>
              Ambos iconos
            </div>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            alignItems: 'center'
          }}>
            <ButtonOutlineMd
              disabled={true}
            >
              Disabled
            </ButtonOutlineMd>
            <div style={{
              fontSize: '12px',
              fontWeight: '600',
              color: isDarkMode ? '#e5e7eb' : '#374151',
              textAlign: 'center'
            }}>
              ButtonOutlineMd<br/>
              Estado Disabled
            </div>
          </div>
          
        </div>
        
      </div>

     
    </div>
  );
};

export default ButtonOutlineDemoWithIcons;