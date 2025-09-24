import { useState } from 'react'
import './App.css'
import ThemeProvider from './design-system/foundations/ThemeContext.jsx'
import FoundationsShowcase from './design-system/foundations-showcase.jsx'
import ButtonDemoUnified from './design-system/atoms/Button/ButtonDemoUnified.jsx'
import BadgeDemoWithAllTypes from './design-system/atoms/Badge/BadgeDemoWithAllTypes.jsx'

function App() {
  const [currentView, setCurrentView] = useState('home')
  const [isDarkMode, setIsDarkMode] = useState(false)

  const navigationStyle = {
    padding: '24px',
    borderBottom: `2px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
    backgroundColor: isDarkMode ? '#111827' : '#f8f9fa',
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    flexWrap: 'wrap'
  }

  const buttonStyle = {
    padding: '12px 24px',
    border: `2px solid ${isDarkMode ? '#6b7280' : '#374151'}`,
    borderRadius: '8px',
    backgroundColor: isDarkMode ? '#1f2937' : '#fff',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'all 0.2s ease-in-out',
    textDecoration: 'none',
    color: isDarkMode ? '#d1d5db' : '#374151'
  }

  const activeButtonStyle = {
    ...buttonStyle,
    backgroundColor: isDarkMode ? '#6366f1' : '#374151',
    color: '#fff',
    borderColor: isDarkMode ? '#6366f1' : '#374151'
  }

  const toggleButtonStyle = {
    padding: '8px 12px',
    border: `2px solid ${isDarkMode ? '#6b7280' : '#374151'}`,
    borderRadius: '8px',
    backgroundColor: isDarkMode ? '#374151' : '#fff',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'all 0.2s ease-in-out',
    color: isDarkMode ? '#ffffff' : '#374151',
    marginLeft: '12px'
  }

  const renderContent = () => {
    switch(currentView) {
      case 'foundations':
        return (
          <div style={{
            minHeight: 'calc(100vh - 90px)',
            color: isDarkMode ? '#ffffff' : '#1a1a1a'
          }}>
            <FoundationsShowcase isDarkMode={isDarkMode} />
          </div>
        )
      case 'components':
        return (
          <div style={{
            minHeight: 'calc(100vh - 90px)',
            color: isDarkMode ? '#ffffff' : '#1a1a1a'
          }}>
            <div className="components-section">
              <div className="component-demo" style={{ marginBottom: '48px' }}>
                <ButtonDemoUnified />
              </div>
              <div className="component-demo" style={{ marginBottom: '24px' }}>
                <h3 style={{ 
                  marginBottom: '16px', 
                  padding: '0 24px',
                  fontSize: '24px',
                  fontWeight: '600'
                }}>
                  🏷️ Badge System
                </h3>
                <BadgeDemoWithAllTypes />
              </div>
            </div>
          </div>
        )
      default:
        return (
          <div style={{ 
            padding: '48px 24px',
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto',
            minHeight: 'calc(100vh - 90px)',
            color: isDarkMode ? '#ffffff' : '#1a1a1a'
          }}>
            <h1 style={{ 
              fontSize: '48px',
              margin: '0 0 24px 0',
              color: isDarkMode ? '#ffffff' : '#1f2937',
              fontWeight: '700'
            }}>
              MEP Design System
            </h1>
            <p style={{ 
              fontSize: '20px',
              color: isDarkMode ? '#9ca3af' : '#6b7280',
              margin: '0 0 48px 0',
              lineHeight: '1.6'
            }}>
              Explora nuestro sistema de diseño con foundations y componentes reutilizables
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
              margin: '48px 0'
            }}>
              <div 
                onClick={() => setCurrentView('foundations')}
                style={{
                  padding: '32px',
                  border: `2px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease-in-out',
                  backgroundColor: isDarkMode ? '#111827' : '#fff'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#6366f1'
                  e.target.style.transform = 'translateY(-4px)'
                  e.target.style.boxShadow = isDarkMode ? '0 10px 25px rgba(0,0,0,0.3)' : '0 10px 25px rgba(0,0,0,0.1)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = isDarkMode ? '#374151' : '#e5e7eb'
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = 'none'
                }}
              >
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎨</div>
                <h3 style={{ 
                  fontSize: '24px',
                  margin: '0 0 12px 0',
                  color: isDarkMode ? '#ffffff' : '#1f2937'
                }}>
                  Foundations
                </h3>
                <p style={{ 
                  fontSize: '16px',
                  color: isDarkMode ? '#9ca3af' : '#6b7280',
                  margin: 0,
                  lineHeight: '1.5'
                }}>
                  Colores, tipografía, elevación e iconos del sistema
                </p>
              </div>

              <div 
                onClick={() => setCurrentView('components')}
                style={{
                  padding: '32px',
                  border: `2px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease-in-out',
                  backgroundColor: isDarkMode ? '#111827' : '#fff'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#10b981'
                  e.target.style.transform = 'translateY(-4px)'
                  e.target.style.boxShadow = isDarkMode ? '0 10px 25px rgba(0,0,0,0.3)' : '0 10px 25px rgba(0,0,0,0.1)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = isDarkMode ? '#374151' : '#e5e7eb'
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = 'none'
                }}
              >
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>🧩</div>
                <h3 style={{ 
                  fontSize: '24px',
                  margin: '0 0 12px 0',
                  color: isDarkMode ? '#ffffff' : '#1f2937'
                }}>
                  Componentes
                </h3>
                <p style={{ 
                  fontSize: '16px',
                  color: isDarkMode ? '#9ca3af' : '#6b7280',
                  margin: 0,
                  lineHeight: '1.5'
                }}>
                  Botones, tarjetas y otros elementos reutilizables
                </p>
              </div>
            </div>
          </div>
        )
    }
  }

  return (
    <ThemeProvider>
      <div style={{
        minHeight: '100vh',
        backgroundColor: isDarkMode ? '#2B2B2B' : '#ffffff',
        transition: 'background-color 0.2s ease-in-out'
      }}>
        {/* Navigation Bar */}
        <nav style={navigationStyle}>
          <h2 style={{ 
            margin: 0, 
            color: isDarkMode ? '#ffffff' : '#1f2937',
            fontSize: '20px',
            fontWeight: '600'
          }}>
            MEP Design System
          </h2>
          
          <div style={{ display: 'flex', gap: '12px', marginLeft: 'auto', alignItems: 'center' }}>
            <button
              onClick={() => setCurrentView('home')}
            style={currentView === 'home' ? activeButtonStyle : buttonStyle}
            onMouseEnter={(e) => {
              if (currentView !== 'home') {
                e.target.style.backgroundColor = isDarkMode ? '#374151' : '#f3f4f6'
              }
            }}
            onMouseLeave={(e) => {
              if (currentView !== 'home') {
                e.target.style.backgroundColor = isDarkMode ? '#1f2937' : '#fff'
              }
            }}
          >
            🏠 Inicio
          </button>
          
          <button
            onClick={() => setCurrentView('foundations')}
            style={currentView === 'foundations' ? activeButtonStyle : buttonStyle}
            onMouseEnter={(e) => {
              if (currentView !== 'foundations') {
                e.target.style.backgroundColor = isDarkMode ? '#374151' : '#f3f4f6'
              }
            }}
            onMouseLeave={(e) => {
              if (currentView !== 'foundations') {
                e.target.style.backgroundColor = isDarkMode ? '#1f2937' : '#fff'
              }
            }}
          >
            🎨 Foundations
          </button>
          
          <button
            onClick={() => setCurrentView('components')}
            style={currentView === 'components' ? activeButtonStyle : buttonStyle}
            onMouseEnter={(e) => {
              if (currentView !== 'components') {
                e.target.style.backgroundColor = isDarkMode ? '#374151' : '#f3f4f6'
              }
            }}
            onMouseLeave={(e) => {
              if (currentView !== 'components') {
                e.target.style.backgroundColor = isDarkMode ? '#1f2937' : '#fff'
              }
            }}
          >
            🧩 Componentes
          </button>

          {/* Toggle Dark Mode */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            style={toggleButtonStyle}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = isDarkMode ? '#4b5563' : '#e5e7eb'
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = isDarkMode ? '#374151' : '#fff'
            }}
            title={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>

      {/* Content */}
      <main>
        {renderContent()}
      </main>
    </div>
    </ThemeProvider>
  )
}

export default App
