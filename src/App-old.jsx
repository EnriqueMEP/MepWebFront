import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import ThemeProvider from './design-system/foundations/ThemeContext.jsx'
import Home from './pages/Home.jsx'

function App() {

  const renderContent = () => {
    switch(currentView) {
      case 'home':
        return (
          <>
            {/* Header fijo en la parte superior */}
            <Header 
              activeNavItem={activeNavItem}
              isLoginSelected={isLoginSelected}
              onNavClick={handleNavClick}
              onLoginClick={handleLoginClick}
              onMenuClick={handleMenuClick}
            />
            
            {/* Contenido principal sin padding-top para eliminar espacio bajo header */}
            <main style={{ paddingTop: '0', width: '100%' }}>
              <Home />
              
              {/* Footer al final del contenido */}
              <Footer 
                activeNavItem={activeNavItem}
                onNavClick={handleNavClick}
              />
            </main>
          </>
        )
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
                activeNavItem={activeNavItem}
                isLoginSelected={isLoginSelected}
                onNavClick={handleNavClick}
                onLoginClick={handleLoginClick}
                onMenuClick={handleMenuClick}
              />
            </div>
          </div>
        )
      case 'footer':
        return (
          <div style={{
            minHeight: 'calc(100vh - 90px)',
            color: isDarkMode ? '#ffffff' : '#1a1a1a',
            padding: '24px'
          }}>
            <div style={{ marginBottom: '24px' }}>
              <h2 style={{ marginBottom: '12px', fontSize: '24px', fontWeight: '700' }}>Footer Component</h2>
              <p style={{ marginBottom: '24px', opacity: 0.8 }}>Footer reutilizable con logo y navegación vertical</p>
            </div>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center',
              overflow: 'auto',
              padding: '20px',
              backgroundColor: isDarkMode ? '#1f2937' : '#f8f9fa',
              borderRadius: '12px'
            }}>
              <Footer 
                activeNavItem={activeNavItem}
                onNavClick={handleNavClick}
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
        transition: 'background-color 0.2s ease-in-out',
        width: '100%',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
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
                onClick={() => setCurrentView('footer')}
                style={currentView === 'footer' ? activeButtonStyle : buttonStyle}
              >
                📄 Footer
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