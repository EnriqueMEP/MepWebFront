import React from 'react';
import { useComponentColors, useTheme } from '../../foundations/theme-hooks.js';
import { injectResponsiveClasses } from '../../foundations/responsive-classes.js';
import ButtonGhost from '../Button/ButtonGhost.jsx';
import ButtonPrimary from '../Button/ButtonPrimary.jsx';
import Icon from '../../foundations/icons/Icon.jsx';
import mepLogo from '../../foundations/img/mep_logo.svg';

/**
 * Header - Cabecera principal de la aplicación
 * 
 * Estructura:
 * - Logo MEP a la izquierda
 * - Navegación central con botones Ghost MD
 * - Sección derecha con botón Login Primary SM + icono menu
 * 
 * Usa colores semánticos primary-container para background
 * ACTUALIZADO: Usa clases CSS escalables como Home para comportamiento de zoom consistente
 */

const Header = ({
  activeNavItem = null,
  isLoginSelected = false,
  onNavClick = () => {},
  onLoginClick = () => {},
  onMenuClick = () => {},
  className = '',
  ...props
}) => {
  // Inyectar clases CSS responsivas al montar
  React.useEffect(() => {
    injectResponsiveClasses();
  }, []);

  // Colores semánticos para el header y sistema de tema
  const headerColors = useComponentColors('header');
  const { toggleTheme } = useTheme();

  const navigationItems = [
    { id: 'about', label: 'Sobre MEP Engineering'},
    { id: 'projects', label: 'Lineas de negocio' },
    { id: 'contact', label: 'Contacto' }
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

        {/* Navigation Area - Hidden on mobile */}
        <nav className="header-nav" style={{ display: 'none' }}>
          {navigationItems.map((item) => (
            <ButtonGhost
              key={item.id}
              size="md"
              selected={activeNavItem === item.id}
              onClick={() => onNavClick(item.id)}
            >
              {item.label}
            </ButtonGhost>
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
            Iniciar sesión
          </ButtonPrimary>
          
          {/* Botón de cambio de tema - siempre visible */}
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
              name="menu" 
              size={20}
              color={headerColors.text || 'currentColor'}
            />
          </button>
          
          {/* Botón de menú original - solo visible en mobile */}
          <button
            className="header-menu-button"
            onClick={onMenuClick}
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

      {/* Navigation visible on tablet/desktop */}
      <style jsx>{`
        @media (min-width: 768px) {
          .header-nav {
            display: flex !important;
            width: clamp(33.5rem, 37.18vw, 37.18vw);
          }
          
          .header-menu-button {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;