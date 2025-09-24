import React, { useState } from 'react';
import { useTheme } from '../../foundations/theme-hooks.js';
import { CardVertical, CardHorizontal } from './index.js';

/**
 * CardDemoUnified - Demo completo del sistema de Cards
 * Siguiendo el mismo patrón visual que ButtonDemoUnified
 */

const CardDemoUnified = () => {
  const [lastAction, setLastAction] = useState('');
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === 'dark';

  const handleCardAction = (cardType, size, action) => {
    setLastAction(`${cardType} ${size}: ${action} ejecutado`);
    setTimeout(() => setLastAction(''), 3000);
  };

  // Datos de ejemplo con texto ajustado para cada tamaño
  const cardExamples = {
    vertical: {
      sm: { badge: 'NEW', title: 'Small', description: 'Compact card' },
      md: { badge: 'HOT', title: 'Medium Card', description: 'Standard size for content' },
      lg: { badge: 'TOP', title: 'Large Card', description: 'Great for important content with details' },
      xl: { badge: 'PRO', title: 'Extra Large', description: 'Maximum impact card with comprehensive information' }
    },
    horizontal: {
      sm: { badge: 'FAST', title: 'Horizontal SM', description: 'Compact horizontal layout' },
      md: { badge: 'PLUS', title: 'Horizontal MD', description: 'Enhanced horizontal with better spacing' }
    }
  };

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
            🃏 Sistema de Cards
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
          margin: '0 0 16px 0',
          lineHeight: '1.6'
        }}>
          Componentes adaptativos para mostrar contenido de manera organizada. 
          Incluye cards verticales y horizontales con texto que se ajusta automáticamente.
        </p>

        {lastAction && (
          <div style={{
            padding: '12px 16px',
            backgroundColor: isDarkMode ? '#065f46' : '#d1fae5',
            color: isDarkMode ? '#6ee7b7' : '#065f46',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500'
          }}>
            ✅ {lastAction}
          </div>
        )}
      </div>

      {/* Cards Verticales */}
      <div style={{
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
            backgroundColor: '#10b981'
          }}></div>
          Cards Verticales
        </h2>

        {/* Comparación de tamaños verticales */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '24px',
          marginBottom: '24px'
        }}>
          {Object.entries(cardExamples.vertical).map(([size, data]) => (
            <div key={size} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              alignItems: 'center'
            }}>
              <h3 style={{
                fontSize: '14px',
                fontWeight: '600',
                color: isDarkMode ? '#cbd5e1' : '#6b7280',
                margin: 0,
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Size: {size} ({size === 'sm' ? '160×240' : size === 'md' ? '180×260' : size === 'lg' ? '200×280' : '240×320'}px)
              </h3>
              
              <CardVertical 
                size={size}
                badgeText={data.badge}
                title={data.title}
                description={data.description}
                buttonText={size.toUpperCase()}
                onButtonClick={() => handleCardAction('Vertical', size.toUpperCase(), 'Click')}
              />
            </div>
          ))}
        </div>

        {/* Código de ejemplo */}
        <div style={{
          marginTop: '20px',
          padding: '16px',
          backgroundColor: isDarkMode ? '#374151' : '#f3f4f6',
          borderRadius: '8px',
          fontSize: '14px',
          fontFamily: 'Monaco, Consolas, "Courier New", monospace',
          color: isDarkMode ? '#e5e7eb' : '#374151',
          overflow: 'auto'
        }}>
{`<CardVertical 
  size="md"
  badgeText="HOT"
  title="Card Title"
  description="Card description that adjusts to container"
  buttonText="Action"
  onButtonClick={() => handleClick()}
/>`}
        </div>
      </div>

      {/* Cards Horizontales */}
      <div style={{
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
            backgroundColor: '#8b5cf6'
          }}></div>
          Cards Horizontales
        </h2>

        {/* Comparación de tamaños horizontales */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          alignItems: 'center',
          marginBottom: '24px'
        }}>
          {Object.entries(cardExamples.horizontal).map(([size, data]) => (
            <div key={size} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              alignItems: 'center'
            }}>
              <h3 style={{
                fontSize: '14px',
                fontWeight: '600',
                color: isDarkMode ? '#cbd5e1' : '#6b7280',
                margin: 0,
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Size: {size} ({size === 'sm' ? '300×120' : '320×128'}px)
              </h3>
              
              <CardHorizontal 
                size={size}
                badgeText={data.badge}
                title={data.title}
                description={data.description}
                buttonText={size.toUpperCase()}
                onButtonClick={() => handleCardAction('Horizontal', size.toUpperCase(), 'Click')}
              />
            </div>
          ))}
        </div>

        {/* Código de ejemplo */}
        <div style={{
          marginTop: '20px',
          padding: '16px',
          backgroundColor: isDarkMode ? '#374151' : '#f3f4f6',
          borderRadius: '8px',
          fontSize: '14px',
          fontFamily: 'Monaco, Consolas, "Courier New", monospace',
          color: isDarkMode ? '#e5e7eb' : '#374151',
          overflow: 'auto'
        }}>
{`<CardHorizontal 
  size="sm"
  badgeText="FAST"
  title="Horizontal Card"
  description="Compact horizontal layout"
  buttonText="Action"
  onButtonClick={() => handleClick()}
/>`}
        </div>
      </div>
    </div>
  );
};

export default CardDemoUnified;