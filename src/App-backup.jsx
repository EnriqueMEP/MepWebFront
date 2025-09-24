import { useState } from 'react'
import './App.css'
import ThemeProvider from './design-system/foundations/ThemeContext.jsx'
import FoundationsShowcase from './design-system/foundations-showcase.jsx'
import ButtonDemoUnified from './design-system/atoms/Button/ButtonDemoUnified.jsx'
import BadgeDemoWithAllTypes from './design-system/atoms/Badge/BadgeDemoWithAllTypes.jsx'
import CardDemoUnified from './design-system/atoms/Card/CardDemoUnified.jsx'
import Header from './design-system/atoms/Header/Header.jsx'

function App() {
  const [currentView, setCurrentView] = useState('home')
  const [isDarkMode, setIsDarkMode] = useState(false)

  const renderContent = () => {
    switch(currentView) {
      case 'foundations':
        return (
          <div style={{
            minHeight: 'calc(100vh - 90px)',
            color: isDarkMode ? '#ffffff' : '#1a1a1a',
            padding: '24px'
          }}>
            <FoundationsShowcase isDarkMode={isDarkMode} />
          </div>
        )
      case 'header':
        return (
          <div style={{
            minHeight: 'calc(100vh - 90px)',
            color: isDarkMode ? '#ffffff' : '#1a1a1a',
            padding: '24px'
          }}>
            <div style={{ marginBottom: '24px' }}>
              <h2 style={{ marginBottom: '12px', fontSize: '24px', fontWeight: '700' }}>Header Component</h2>
              <p style={{ marginBottom: '24px', opacity: 0.8 }}>Header reutilizable con logo, navegación y controles de usuario</p>
            </div>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center',
              overflow: 'auto',
              padding: '20px',
              backgroundColor: isDarkMode ? '#1f2937' : '#f8f9fa',
              borderRadius: '12px'
            }}>
              <Header 
                activeNavItem="about"
                onNavClick={(item) => console.log('Navigation clicked:', item)}
                onLoginClick={() => console.log('Login clicked')}
                onMenuClick={() => console.log('Menu clicked')}
              />
            </div>
          </div>
        )
      case 'components':
        return (
          <div style={{
            minHeight: 'calc(100vh - 90px)',
            color: isDarkMode ? '#ffffff' : '#1a1a1a',
            padding: '24px'
          }}>
            <div className="components-section">
              <div className="component-demo" style={{ marginBottom: '48px' }}>
                <ButtonDemoUnified />
              </div>
              <div className="component-demo" style={{ marginBottom: '48px' }}>
                <h3 style={{ 
                  marginBottom: '16px', 
                  fontSize: '24px',
                  color: isDarkMode ? '#ffffff' : '#1f2937'
                }}>
                  Badge Components
                </h3>
                <BadgeDemoWithAllTypes />
              </div>
              <div className="component-demo" style={{ marginBottom: '48px' }}>
                <h3 style={{ 
                  marginBottom: '16px', 
                  fontSize: '24px',
                  color: isDarkMode ? '#ffffff' : '#1f2937'
                }}>
                  Card Components
                </h3>
                <CardDemoUnified />
              </div>
            </div>
          </div>
        )
      default:
        // HOME PAGE CON HEADER INTEGRADO
        return (
          <div style={{ 
            minHeight: '100vh',
            backgroundColor: isDarkMode ? '#111827' : '#f8f9fa',
            color: isDarkMode ? '#ffffff' : '#1a1a1a'
          }}>
            {/* Header MEP */}
            <Header 
              activeNavItem="about"
              onNavClick={(item) => console.log('Navigation clicked:', item)}
              onLoginClick={() => console.log('Login clicked')}
              onMenuClick={() => console.log('Menu clicked')}
            />
            
            {/* Contenido del Home */}
            <div style={{
              padding: '48px 64px',
              textAlign: 'center',
              maxWidth: '1440px',
              margin: '0 auto'
            }}>
              <h1 style={{ 
                fontSize: '48px',
                margin: '0 0 24px 0',
                fontWeight: '700'
              }}>
                Bienvenido a MEP
              </h1>
              <p style={{ 
                fontSize: '20px',
                opacity: 0.8,
                margin: '0 0 48px 0',
                lineHeight: '1.6'
              }}>
                Página Home con Header integrado - Sistema de Diseño MEP
              </p>
              
              {/* Botón para ir al visor de componentes */}
              <div style={{ marginTop: '32px' }}>
                <button 
                  onClick={() => setCurrentView('components')}
                  style={{
                    padding: '16px 32px',
                    fontSize: '16px',
                    fontWeight: '600',
                    backgroundColor: '#3F762F',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    marginRight: '16px',
                    transition: 'all 0.2s ease-in-out'
                  }}
                >
                  Ver Componentes
                </button>
                <button 
                  onClick={() => setCurrentView('foundations')}
                  style={{
                    padding: '16px 32px',
                    fontSize: '16px',
                    fontWeight: '600',
                    backgroundColor: '#92C482',
                    color: '#3F762F',
                    border: '2px solid #3F762F',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease-in-out'
                  }}
                >
                  Ver Foundations
                </button>
              </div>
            </div>
          </div>
        )
    }
  }

  const buttonStyle = {
    padding: '12px 24px',
    border: `2px solid ${isDarkMode ? '#6b7280' : '#374151'}`,
    borderRadius: '8px',
    backgroundColor: isDarkMode ? '#1f2937' : '#fff',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'all 0.2s ease-in-out',
    color: isDarkMode ? '#d1d5db' : '#374151'
  }

  const activeButtonStyle = {
    ...buttonStyle,
    backgroundColor: isDarkMode ? '#6366f1' : '#374151',
    color: '#fff',
    borderColor: isDarkMode ? '#6366f1' : '#374151'
  }

  return (
    <ThemeProvider initialTheme={isDarkMode ? 'dark' : 'light'}>
      <div style={{
        backgroundColor: isDarkMode ? '#111827' : '#ffffff',
        minHeight: '100vh',
        transition: 'background-color 0.2s ease-in-out'
      }}>
        {/* Navegación del Design System - Solo visible cuando NO estamos en Home */}
        {currentView !== 'home' && (
          <nav style={{
            padding: '24px',
            borderBottom: `2px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
            backgroundColor: isDarkMode ? '#111827' : '#f8f9fa',
            display: 'flex',
            gap: '16px',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <h2 style={{ 
              margin: 0, 
              color: isDarkMode ? '#ffffff' : '#1f2937',
              fontSize: '20px',
              fontWeight: '600'
            }}>
              MEP Design System - Visor de Demos
            </h2>
            
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <button
                onClick={() => setCurrentView('home')}
                style={currentView === 'home' ? activeButtonStyle : buttonStyle}
              >
                🏠 Home
              </button>
              
              <button
                onClick={() => setCurrentView('foundations')}
                style={currentView === 'foundations' ? activeButtonStyle : buttonStyle}
              >
                🎨 Foundations
              </button>
              
              <button
                onClick={() => setCurrentView('header')}
                style={currentView === 'header' ? activeButtonStyle : buttonStyle}
              >
                📋 Header
              </button>
              
              <button
                onClick={() => setCurrentView('components')}
                style={currentView === 'components' ? activeButtonStyle : buttonStyle}
              >
                🧩 Componentes
              </button>

              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                style={{
                  padding: '8px 12px',
                  border: `2px solid ${isDarkMode ? '#6b7280' : '#374151'}`,
                  borderRadius: '8px',
                  backgroundColor: isDarkMode ? '#374151' : '#fff',
                  cursor: 'pointer',
                  fontSize: '14px',
                  transition: 'all 0.2s ease-in-out',
                  color: isDarkMode ? '#ffffff' : '#374151'
                }}
                title={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
              >
                {isDarkMode ? '☀️' : '🌙'}
              </button>
            </div>
          </nav>
        )}

        {/* Content */}
        <main>
          {renderContent()}
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App