import React, { useState } from 'react';
import { useComponentColors, useTheme } from '../../foundations/theme-hooks.js';
import { injectResponsiveClasses } from '../../foundations/responsive-classes.js';
import ButtonGhost from '../Button/ButtonGhost.jsx';
import ButtonPrimary from '../Button/ButtonPrimary.jsx';
import ButtonOutline from '../Button/ButtonOutline.jsx';
import Icon from '../../foundations/icons/Icon.jsx';
import mepLogo from '../../foundations/img/mep_logo.svg';

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
  const { toggleTheme } = useTheme();

  // Función para manejar el toggle del menú móvil
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveMobileDropdown(null); // Cerrar cualquier dropdown abierto
  };

  // Función para manejar clic en navegación móvil (igual que PC)
  const handleMobileNavClick = (itemId) => {
    const item = navigationItems.find(nav => nav.id === itemId);
    
    if (item && item.hasDropdown) {
      // Si tiene dropdown, toggle del dropdown (igual que PC)
      setActiveMobileDropdown(activeMobileDropdown === itemId ? null : itemId);
    } else {
      // Si no tiene dropdown, navegar y cerrar menú
      onNavClick(itemId);
      setIsMobileMenuOpen(false);
      setActiveMobileDropdown(null);
    }
  };

  // Función para manejar clic en dropdown item desde móvil
  const handleMobileDropdownClick = (itemId) => {
    onDropdownItemClick(itemId);
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
      hasDropdown: true,
      dropdownItems: [] // Se llenará después con los botones ghost
    },
    { 
      id: 'projects', 
      label: 'Ingenierías',
      hasDropdown: true,
      dropdownItems: [] // Se llenará después con los botones ghost
    },
    { 
      id: 'contact', 
      label: 'Contacto',
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
        <div className="header-logo">
          <img 
            src={mepLogo}
            alt="MEP Engineering"
          />
        </div>

        {/* Navigation Area - Hidden on mobile, visible on tablet and desktop */}
        <nav className="header-nav" style={{ display: 'none' }}>
          {navigationItems.map((item) => (
            <div key={item.id} className="nav-item-container">
              <ButtonGhost
                size="md"
                selected={activeNavItem === item.id}
                onClick={() => onNavClick(item.id)}
                rightIcon={item.hasDropdown ? "arrowDownS" : undefined}
              >
                {item.label}
              </ButtonGhost>
              
              {/* Dropdown menu - solo se muestra en hover */}
              {item.hasDropdown && (
                <div className="dropdown-menu">
                  <div className="dropdown-content">
                    {/* Botones Ghost directos con funcionalidad de selección */}
                    {item.id === 'about' && (
                      <>
                        <ButtonGhost 
                          size="md"
                          selected={selectedDropdownItem === 'about-historia'}
                          onClick={() => onDropdownItemClick('about-historia')}
                        >
                          Historia
                        </ButtonGhost>
                        <ButtonGhost 
                          size="md"
                          selected={selectedDropdownItem === 'about-equipo'}
                          onClick={() => onDropdownItemClick('about-equipo')}
                        >
                          Equipo
                        </ButtonGhost>
                        <ButtonGhost 
                          size="md"
                          selected={selectedDropdownItem === 'about-mision'}
                          onClick={() => onDropdownItemClick('about-mision')}
                        >
                          Misión y Visión
                        </ButtonGhost>
                      </>
                    )}
                    {item.id === 'projects' && (
                      <>
                        <ButtonGhost 
                          size="md"
                          selected={selectedDropdownItem === 'projects-energia'}
                          onClick={() => onDropdownItemClick('projects-energia')}
                        >
                          Energía
                        </ButtonGhost>
                        <ButtonGhost 
                          size="md"
                          selected={selectedDropdownItem === 'projects-agua'}
                          onClick={() => onDropdownItemClick('projects-agua')}
                        >
                          Agua
                        </ButtonGhost>
                        <ButtonGhost 
                          size="md"
                          selected={selectedDropdownItem === 'projects-industria'}
                          onClick={() => onDropdownItemClick('projects-industria')}
                        >
                          Industria
                        </ButtonGhost>
                        <ButtonGhost 
                          size="md"
                          selected={selectedDropdownItem === 'projects-infraestructura'}
                          onClick={() => onDropdownItemClick('projects-infraestructura')}
                        >
                          Infraestructura
                        </ButtonGhost>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Actions Area */}
        <div className="header-actions">
          <ButtonPrimary
            size="sm"
            leftIcon="user"
            selected={isLoginSelected}
            onClick={onLoginClick}
          >
            Log In
          </ButtonPrimary>
          
          {/* Botón de cambio de tema - visible en PC/tablet, usa energia.svg */}
          <button
            className="header-theme-button"
            onClick={toggleTheme}
            aria-label="Cambiar tema"
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '8px'
            }}
          >
            <Icon 
              name="energia" 
              size={20}
              color={headerColors.text || 'currentColor'}
            />
          </button>
          
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
                    {item.id === 'about' && (
                      <>
                        <ButtonGhost 
                          size="md"
                          selected={selectedDropdownItem === 'about-historia'}
                          onClick={() => handleMobileDropdownClick('about-historia')}
                        >
                          Historia
                        </ButtonGhost>
                        <ButtonGhost 
                          size="md"
                          selected={selectedDropdownItem === 'about-equipo'}
                          onClick={() => handleMobileDropdownClick('about-equipo')}
                        >
                          Equipo
                        </ButtonGhost>
                        <ButtonGhost 
                          size="md"
                          selected={selectedDropdownItem === 'about-mision'}
                          onClick={() => handleMobileDropdownClick('about-mision')}
                        >
                          Misión y Visión
                        </ButtonGhost>
                      </>
                    )}
                    {item.id === 'projects' && (
                      <>
                        <ButtonGhost 
                          size="md"
                          selected={selectedDropdownItem === 'projects-energia'}
                          onClick={() => handleMobileDropdownClick('projects-energia')}
                        >
                          Energía
                        </ButtonGhost>
                        <ButtonGhost 
                          size="md"
                          selected={selectedDropdownItem === 'projects-agua'}
                          onClick={() => handleMobileDropdownClick('projects-agua')}
                        >
                          Agua
                        </ButtonGhost>
                        <ButtonGhost 
                          size="md"
                          selected={selectedDropdownItem === 'projects-industria'}
                          onClick={() => handleMobileDropdownClick('projects-industria')}
                        >
                          Industria
                        </ButtonGhost>
                        <ButtonGhost 
                          size="md"
                          selected={selectedDropdownItem === 'projects-infraestructura'}
                          onClick={() => handleMobileDropdownClick('projects-infraestructura')}
                        >
                          Infraestructura
                        </ButtonGhost>
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
            
            {/* Botón de cambio de tema en el menú móvil */}
            <div className="mobile-theme-section">
              <ButtonGhost
                size="md"
                leftIcon="energia"
                onClick={handleMobileThemeToggle}
              >
                Cambiar tema
              </ButtonGhost>
            </div>
          </div>
        </div>
      )}

      {/* Navigation visible on tablet/desktop - Comportamiento original para PC/tablet */}
      <style jsx>{`
        /* Media query para tablet/desktop - Mantener comportamiento original */
        @media (min-width: 768px) {
          .header-nav {
            display: flex !important;
            width: clamp(33.5rem, 37.18vw, 37.18vw);
            gap: 1rem;
          }
          
          .header-menu-button {
            display: none !important;
          }
          
          .header-theme-button {
            display: block !important;
          }
          
          .mobile-menu {
            display: none !important;
          }
        }

        /* Estilos SOLO para móvil - aquí se aplican los nuevos cambios */
        @media (max-width: 767px) {
          .header-theme-button {
            display: none !important;
          }
          
          .header-menu-button {
            display: block !important;
          }
          
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