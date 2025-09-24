import React, { useState } from 'react';
import { useTheme } from '../../foundations/theme-hooks.js';
import ButtonPrimary from './ButtonPrimary.jsx';
import ButtonSecondary from './ButtonSecondary.jsx';
import ButtonOutline from './ButtonOutline.jsx';
import ButtonGhost from './ButtonGhost.jsx';

/**
 * ButtonDemoUnified - Demo completo del sistema de botones unificado
 * Muestra todos los tipos de botones (Primary, Secondary, Outline, Ghost)
 * con todos los tamaños (sm, md, lg, xl) y estados
 */

const ButtonDemoUnified = () => {
  const [selectedButtons, setSelectedButtons] = useState(new Set());
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === 'dark';

  const handleButtonClick = (buttonId) => {
    const newSelected = new Set(selectedButtons);
    if (newSelected.has(buttonId)) {
      newSelected.delete(buttonId);
    } else {
      newSelected.add(buttonId);
    }
    setSelectedButtons(newSelected);
  };

  const sizes = ['sm', 'md', 'lg', 'xl'];
  const buttonTypes = [
    { Component: ButtonPrimary, name: 'Primary', color: '#6366f1' },
    { Component: ButtonSecondary, name: 'Secondary', color: '#8b5cf6' },
    { Component: ButtonOutline, name: 'Outline', color: '#0ea5e9' },
    { Component: ButtonGhost, name: 'Ghost', color: '#10b981' }
  ];

  return (
    <div style={{
      padding: '24px',
      fontFamily: 'Ubuntu, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      backgroundColor: isDarkMode ? '#0f172a' : '#ffffff',
      color: isDarkMode ? '#f1f5f9' : '#0f172a',
      minHeight: '100vh'
    }}>

      {/* Header */}
      <div style={{
        marginBottom: '32px',
        padding: '24px',
        backgroundColor: isDarkMode ? '#1e293b' : '#f8fafc',
        borderRadius: '12px',
        border: `1px solid ${isDarkMode ? '#334155' : '#e2e8f0'}`
      }}>
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px'
        }}>
          <h1 style={{
            fontSize: '28px',
            fontWeight: '700',
            color: isDarkMode ? '#f1f5f9' : '#1f2937',
            margin: 0
          }}>
            🎯 Sistema de Botones Unificado
          </h1>
          
          <button
            onClick={toggleTheme}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              border: `1px solid ${isDarkMode ? '#475569' : '#d1d5db'}`,
              backgroundColor: isDarkMode ? '#475569' : '#f3f4f6',
              color: isDarkMode ? '#f1f5f9' : '#374151',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            {isDarkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>

        <p style={{
          color: isDarkMode ? '#cbd5e1' : '#6b7280',
          fontSize: '16px',
          margin: 0,
          lineHeight: '1.6'
        }}>
          Cada botón ahora usa un solo componente con prop <code style={{
            background: isDarkMode ? '#374151' : '#f3f4f6',
            padding: '2px 6px',
            borderRadius: '4px',
            fontSize: '14px'
          }}>size</code>. Haz clic en los botones para activar el estado "selected".
        </p>
      </div>

      {/* Demo Grid por tipo de botón */}
      {buttonTypes.map(({ Component, name, color }) => (
        <div key={name} style={{
          marginBottom: '40px',
          padding: '24px',
          backgroundColor: isDarkMode ? '#1e293b' : '#ffffff',
          borderRadius: '12px',
          border: `1px solid ${isDarkMode ? '#334155' : '#e2e8f0'}`,
          boxShadow: isDarkMode ? '0 4px 6px -1px rgba(0, 0, 0, 0.3)' : '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
        }}>
          
          <h2 style={{
            fontSize: '20px',
            fontWeight: '600',
            color: isDarkMode ? '#f1f5f9' : '#1f2937',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <div style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: color
            }}></div>
            Button{name}
          </h2>

          {/* Todos los tamaños */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
            marginBottom: '24px'
          }}>
            {sizes.map(size => {
              const buttonId = `${name.toLowerCase()}-${size}`;
              const isSelected = selectedButtons.has(buttonId);
              
              return (
                <div key={size} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}>
                  <h3 style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: isDarkMode ? '#cbd5e1' : '#6b7280',
                    margin: 0,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Size: {size}
                  </h3>
                  
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px'
                  }}>
                    {/* Normal */}
                    <Component
                      size={size}
                      onClick={() => handleButtonClick(buttonId)}
                      selected={isSelected}
                    >
                      {size.toUpperCase()} Button
                    </Component>
                    
                    {/* Con iconos */}
                    <Component
                      size={size}
                      leftIcon="userLocation"
                      rightIcon="userShared"
                      onClick={() => handleButtonClick(`${buttonId}-icons`)}
                      selected={selectedButtons.has(`${buttonId}-icons`)}
                    >
                      Con Iconos
                    </Component>
                    
                    {/* Disabled */}
                    <Component
                      size={size}
                      disabled
                    >
                      Disabled
                    </Component>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Código de ejemplo */}
          <div style={{
            marginTop: '20px',
            padding: '16px',
            backgroundColor: isDarkMode ? '#0f172a' : '#f1f5f9',
            borderRadius: '8px',
            border: `1px solid ${isDarkMode ? '#475569' : '#cbd5e1'}`
          }}>
            <h4 style={{
              fontSize: '14px',
              fontWeight: '600',
              color: isDarkMode ? '#cbd5e1' : '#6b7280',
              margin: '0 0 8px 0'
            }}>
              📝 Código:
            </h4>
            <code style={{
              fontSize: '13px',
              color: isDarkMode ? '#e2e8f0' : '#475569',
              fontFamily: 'Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
            }}>
              {`<Button${name} size="lg" leftIcon="userLocation">Button</Button${name}>`}
            </code>
          </div>
        </div>
      ))}

      {/* Footer informativo */}
      <div style={{
        marginTop: '40px',
        padding: '20px',
        backgroundColor: isDarkMode ? '#1e293b' : '#f8fafc',
        borderRadius: '8px',
        border: `1px solid ${isDarkMode ? '#334155' : '#e2e8f0'}`
      }}>
        <h3 style={{
          fontSize: '16px',
          fontWeight: '600',
          color: isDarkMode ? '#f1f5f9' : '#1f2937',
          marginBottom: '12px'
        }}>
          ✅ Ventajas del Sistema Unificado:
        </h3>
        <ul style={{
          color: isDarkMode ? '#cbd5e1' : '#6b7280',
          fontSize: '14px',
          lineHeight: '1.6',
          paddingLeft: '20px'
        }}>
          <li>Un solo componente por tipo de botón (vs 4 archivos antes)</li>
          <li>Configuración centralizada de tamaños e iconos</li>
          <li>Soporte automático para dark/light mode</li>
          <li>API consistente: <code>size="sm|md|lg|xl"</code></li>
          <li>Fácil mantenimiento y menor duplicación de código</li>
        </ul>
      </div>
    </div>
  );
};

export default ButtonDemoUnified;