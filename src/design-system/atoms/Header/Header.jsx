import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useComponentColors, useTheme } from '../../foundations/theme-hooks.js';
import { injectResponsiveClasses } from '../../foundations/responsive-classes.js';
import ButtonGhost from '../Button/ButtonGhost.jsx';
import ButtonPrimary from '../Button/ButtonPrimary.jsx';
import ButtonOutline from '../Button/ButtonOutline.jsx';
import Icon from '../../foundations/icons/Icon.jsx';

/**
 * Header - Cabecera principal de la aplicación
 * 
 * Estructura:
 * - Logo MEP a la izquierda
 * - Navegación central con botones Ghost MD con dropdowns
 * - Sección derecha con botón Login Primary SM + icono menu
 * 
 * Usa colores semánticos primary-container para background
 * ACTUALIZADO: Usa clases CSS escalables como Home para comportamiento de zoom consistente
 * 
 * Ejemplo de uso con estado:
 * const [selectedDropdownItem, setSelectedDropdownItem] = useState(null);
 * 
 * <Header
 *   selectedDropdownItem={selectedDropdownItem}
 *   onDropdownItemClick={(itemId) => setSelectedDropdownItem(itemId)}
 * />
 */

const Header = ({
  activeNavItem = null,
  isLoginSelected = false,
  selectedDropdownItem = null,
  onNavClick = () => {},
  onLoginClick = () => {},
  onMenuClick = () => {},
  onDropdownItemClick = () => {},
  className = '',
  currentPage, // Extraer currentPage para que no se pase al DOM
  ...props
}) => {
  // Estado local para controlar el menú desplegable móvil
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Estado para controlar qué dropdown está abierto en móvil
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

  // Inyectar clases CSS responsivas al montar
  React.useEffect(() => {
    injectResponsiveClasses();
  }, []);

  // Colores semánticos para el header y sistema de tema
  const headerColors = useComponentColors('header');
  const ghostButtonColors = useComponentColors('buttonGhost');
  const { theme, toggleTheme } = useTheme();

  // Hooks de React Router
  const location = useLocation();
  const navigate = useNavigate();

  // Función para manejar el toggle del menú móvil
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveMobileDropdown(null); // Cerrar cualquier dropdown abierto
  };

  // Función para manejar clic en navegación móvil (igual que PC)
  const handleMobileNavClick = (itemId) => {
    const item = navigationItems.find(nav => nav.id === itemId);
    
    if (item && item.hasDropdown) {
      // Si tiene dropdown, navegar a la ruta principal y toggle del dropdown
      if (item.path) {
        navigate(item.path);
      }
      setActiveMobileDropdown(activeMobileDropdown === itemId ? null : itemId);
    } else if (item && item.path) {
      // Si no tiene dropdown, navegar y cerrar menú
      navigate(item.path);
      setIsMobileMenuOpen(false);
      setActiveMobileDropdown(null);
    }
    onNavClick(itemId);
  };

  // Función para manejar clic en dropdown item desde móvil
  const handleMobileDropdownClick = (dropdownItem) => {
    if (dropdownItem.path) {
      navigate(dropdownItem.path);
    }
    onDropdownItemClick(dropdownItem.id);
    setIsMobileMenuOpen(false);
    setActiveMobileDropdown(null);
  };

  // Función para manejar login desde móvil
  const handleMobileLoginClick = () => {
    onLoginClick();
    setIsMobileMenuOpen(false);
    setActiveMobileDropdown(null);
  };

  // Función para manejar cambio de tema desde móvil
  const handleMobileThemeToggle = () => {
    toggleTheme();
    setIsMobileMenuOpen(false);
    setActiveMobileDropdown(null);
  };

  const navigationItems = [
    { 
      id: 'about', 
      label: 'Sobre MEP Engineering',
      path: '/sobre_nosotros',
      hasDropdown: true,
      dropdownItems: [
        { id: 'about-nosotros', label: 'Sobre Nosotros', path: '/sobre_nosotros' },
        { id: 'about-historia', label: 'Historia', path: '/historia' },
        { id: 'about-equipo', label: 'Equipo', path: '/equipo' },
        { id: 'about-mision', label: 'Misión y Visión', path: '/mision' }
      ]
    },
    { 
      id: 'projects', 
      label: 'Ingenierías',
      path: '/energia',
      hasDropdown: true,
      dropdownItems: [
        { id: 'projects-energia', label: 'Energía', path: '/energia' },
        { id: 'projects-agua', label: 'Agua', path: '/agua' },
        { id: 'projects-industria', label: 'Industria', path: '/industria' },
        { id: 'projects-infraestructura', label: 'Infraestructura', path: '/infraestructura' }
      ]
    },
    { 
      id: 'contact', 
      label: 'Contacto',
      path: '/contacto',
      hasDropdown: false
    }
  ];

  // Estilos base mínimos (solo colores y propiedades no escalables)
  const headerStyles = {
    background: headerColors.background,
    ...props.style
  };

  // Generar className combinando clases escalables
  const headerClassName = [
    'component-base',
    'header-component',
    className
  ].filter(Boolean).join(' ');

  return (
    <header
      className={headerClassName}
      style={headerStyles}
      {...props}
    >
      <div className="header-container">
        {/* Logo Area */}
        <Link to="/" className="header-logo">
          <img 
            src={theme === 'dark' ? '/img/mep_logodark.png' : '/img/mep_logo.png'}
            alt="MEP Engineering"
          />
        </Link>

        {/* Navigation Area - Hidden on mobile, visible on tablet and desktop */}
        <nav className="header-nav" style={{ display: 'none' }}>
          {navigationItems.map((item) => (
            <div key={item.id} className="nav-item-container">
              <ButtonGhost
                size="md"
                selected={activeNavItem === item.id || location.pathname === item.path}
                onClick={() => {
                  if (item.path) {
                    navigate(item.path);
                  }
                  onNavClick(item.id);
                }}
                rightIcon={item.hasDropdown ? "arrowDownS" : undefined}
              >
                {item.label}
              </ButtonGhost>
              
              {/* Dropdown menu - solo se muestra en hover */}
              {item.hasDropdown && (
                <div className="dropdown-menu">
                  <div className="dropdown-content">
                    {/* Botones Ghost dinámicos con navegación */}
                    {item.dropdownItems && item.dropdownItems.map((dropdownItem) => (
                      <ButtonGhost 
                        key={dropdownItem.id}
                        size="md"
                        selected={selectedDropdownItem === dropdownItem.id || location.pathname === dropdownItem.path}
                        onClick={() => {
                          if (dropdownItem.path) {
                            navigate(dropdownItem.path);
                          }
                          onDropdownItemClick(dropdownItem.id);
                        }}
                      >
                        {dropdownItem.label}
                      </ButtonGhost>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          
          {/* Sección Theme integrada en la navegación - visible en PC/tablet */}
          <div className="nav-item-container">
            <div className="theme-section" style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.42vw',
              height: '2.22vw',
              padding: '0.56vw 0.83vw',
              backgroundColor: 'transparent',
              border: 'none',
              boxSizing: 'border-box'
            }}>
              <span 
                className="text-label-medium"
                style={{ 
                  color: ghostButtonColors.text || 'currentColor',
                  fontFamily: 'Ubuntu, sans-serif'
                }}
              >
                Theme
              </span>
              <button
                className="header-theme-button"
                onClick={toggleTheme}
                aria-label={`Cambiar a tema ${theme === 'light' ? 'oscuro' : 'claro'}`}
                style={{
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img 
                  src={theme === 'light' ? '/img/switchLight.png' : '/img/switchDark.png'}
                  alt={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
                  style={{
                    width: '3.33vw',
                    height: '1vw',
                    objectFit: 'contain'
                  }}
                />
              </button>
            </div>
          </div>
        </nav>

        {/* Right Actions Area - Vacía temporalmente */}
        <div className="header-actions">
          {/* Botón Login - COMENTADO temporalmente - solo visible en PC/tablet */}
          {/*
          <ButtonPrimary
            className="header-login-button"
            size="sm"
            leftIcon="user"
            selected={isLoginSelected}
            onClick={onLoginClick}
          >
            Log In
          </ButtonPrimary>
          */}
          
          {/* Botón de menú móvil - solo visible en mobile */}
          <button
            className="header-menu-button"
            onClick={handleMobileMenuToggle}
            aria-label="Menu"
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <Icon 
              name="menu" 
              size={24}
              color={headerColors.text || 'currentColor'}
            />
          </button>
        </div>
      </div>

      {/* Menú móvil desplegable - usa estilos del header */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-menu"
          style={{
            background: headerColors.background, // Mismo fondo que header
            borderTop: `1px solid ${headerColors.border || 'rgba(0, 0, 0, 0.1)'}`
          }}
        >
          <div className="mobile-menu-content">
            {/* Elementos de navegación */}
            {navigationItems.map((item) => (
              <div key={item.id} className="mobile-nav-section">
                <ButtonGhost
                  size="md"
                  selected={activeNavItem === item.id}
                  onClick={() => handleMobileNavClick(item.id)}
                  rightIcon={item.hasDropdown ? "arrowDownS" : undefined}
                >
                  {item.label}
                </ButtonGhost>
                
                {/* Subelementos del dropdown - solo si está activo */}
                {item.hasDropdown && activeMobileDropdown === item.id && (
                  <div className="mobile-dropdown-items">
                    {item.dropdownItems.map(dropdownItem => (
                      <ButtonGhost 
                        key={dropdownItem.id}
                        size="md"
                        selected={selectedDropdownItem === dropdownItem.id}
                        onClick={() => handleMobileDropdownClick(dropdownItem)}
                      >
                        {dropdownItem.label}
                      </ButtonGhost>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Botón Login en el menú móvil - OCULTO */}
            {/*
            <div className="mobile-login-section">
              <ButtonPrimary
                size="md"
                leftIcon="user"
                selected={isLoginSelected}
                onClick={handleMobileLoginClick}
              >
                Log In
              </ButtonPrimary>
            </div>
            */}
            
            {/* Sección Theme + switch en el menú móvil */}
            <div className="mobile-theme-section" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              padding: '0.75rem 1rem',
              marginTop: '0.5rem'
            }}>
              <span style={{
                color: headerColors.text || 'currentColor',
                fontSize: '1rem',
                fontWeight: '500',
                fontFamily: 'Ubuntu, sans-serif'
              }}>
                Theme
              </span>
              <button
                onClick={toggleTheme}
                aria-label={`Cambiar a tema ${theme === 'light' ? 'oscuro' : 'claro'}`}
                style={{
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img 
                  src={theme === 'light' ? '/img/switchLight.png' : '/img/switchDark.png'}
                  alt={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
                  style={{
                    width: '3.5rem',
                    height: '1rem',
                    objectFit: 'contain'
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Navigation visible on tablet/desktop - Comportamiento original para PC/tablet */}
      <style jsx>{`
        /* Media query para tablet/desktop - APLICAR SISTEMA VW */
        @media (min-width: 768px) {
          .header-nav {
            display: flex !important;
            flex: 1;
            justify-content: flex-end;
            gap: 0.5vw;
            margin-right: 2vw;
          }
          
          .header-menu-button {
            display: none !important;
          }
          
          .theme-section {
            display: flex !important;
          }
          
          .mobile-menu {
            display: none !important;
          }
        }

        /* Estilos SOLO para móvil - aquí se aplican los nuevos cambios */
        @media (max-width: 767px) {
          .theme-section {
            display: none !important;
          }
          
          .header-menu-button {
            display: block !important;
          }
          
          /* .header-login-button {
            display: none !important;
          } */
          
          .mobile-menu {
            display: block !important;
          }
        }

        /* Estilos del menú móvil desplegable - SOLO para móvil */
        @media (max-width: 767px) {
          .mobile-menu {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            /* Fondo y bordes se aplican inline para usar colores del tema */
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            max-height: 80vh;
            overflow-y: auto;
          }

          .mobile-menu-content {
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 16px;
          }

          .mobile-nav-section {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }

          .mobile-dropdown-items {
            padding-left: 20px;
            display: flex;
            flex-direction: column;
            gap: 8px;
            padding-top: 8px;
            border-left: 2px solid rgba(255, 255, 255, 0.2);
            margin-left: 12px;
          }

          .mobile-login-section {
            border-top: 1px solid rgba(255, 255, 255, 0.2);
            padding-top: 16px;
            margin-top: 8px;
          }

          .mobile-theme-section {
            border-top: 1px solid rgba(255, 255, 255, 0.2);
            padding-top: 16px;
            margin-top: 8px;
          }
        }

        /* Dropdown Styles para desktop/tablet - MANTENER ORIGINAL */
        .nav-item-container {
          position: relative;
          display: inline-block;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          min-width: 200px;
          z-index: 1000;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.2s ease-in-out;
          margin-top: 8px;
        }

        .dropdown-content {
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: center;
        }

        .nav-item-container:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        /* ButtonGhost dentro del dropdown centrados con select funcional */
        .dropdown-content button {
          width: auto;
          justify-content: center;
        }

        /* Asegurar que el estado selected sea visible */
        .dropdown-content button.selected,
        .dropdown-content button[data-selected="true"] {
          border-bottom: 2px solid currentColor !important;
        }
      `}</style>
    </header>
  );
};

export default Header;