import React from 'react';
import { useComponentColors } from '../../foundations/theme-hooks.js';
import ButtonGhost from '../Button/ButtonGhost.jsx';
import ButtonPrimary from '../Button/ButtonPrimary.jsx';
import Icon from '../../foundations/icons/Icon.jsx';
import mepLogo from '../../foundations/img/mep_logo.svg';

/**
 * Header - Cabecera principal de la aplicación
 * 
 * Estructura:
 * - Logo MEP a la izquierda (104x40px)
 * - Navegación central con 4 botones Ghost MD
 * - Sección derecha con botón Login Primary SM + icono menu
 * 
 * Dimensiones: 1440x80px con padding lateral 64px y vertical 16px
 * Usa colores semánticos primary-container para background
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
  // Colores semánticos para el header
  const headerColors = useComponentColors('header');

  const navigationItems = [
    { id: 'about', label: 'Sobre nosotros' },
    { id: 'projects', label: 'Nuestros proyectos' },
    { id: 'sectors', label: 'Sectores' },
    { id: 'contact', label: 'Contacto' }
  ];

  // Estilos del contenedor principal
  const headerStyles = {
    width: '100%',
    minWidth: '100vw', // Se extiende de principio a fin
    height: '80px',
    paddingLeft: 'max(80px, 4vw)', // Responsive padding
    paddingRight: 'max(80px, 4vw)',
    paddingTop: '16px',
    paddingBottom: '16px',
    background: headerColors.background,
    justifyContent: 'space-between',
    alignItems: 'center',
    display: 'flex',
    position: 'relative',
    boxSizing: 'border-box',
    // Mantiene la forma en todos los zoom levels
    '@media (min-resolution: 1dppx)': {
      transform: 'scale(1)',
    }
  };

  // Estilos del área del logo
  const logoAreaStyles = {
    width: '104px',
    height: '40px',
    position: 'relative',
    overflow: 'hidden'
  };

  const logoStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  };

  // Estilos del área de navegación
  const navigationStyles = {
    width: '535.33px',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '16px',
    display: 'flex',
    flex: '0 0 auto' // No se comprime en pantallas pequeñas
  };

  // Estilos del área derecha
  const rightAreaStyles = {
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '16px',
    display: 'flex'
  };

  const menuIconStyles = {
    width: '24px',
    height: '24px',
    cursor: 'pointer',
    color: '#3f762f' // olive.500 desde colors.js
  };

  return (
    <header
      className={`header ${className}`}
      style={headerStyles}
      {...props}
    >
      {/* Logo MEP */}
      <div style={logoAreaStyles}>
        <img 
          src={mepLogo} 
          alt="MEP Logo" 
          style={logoStyles}
        />
      </div>

      {/* Navegación Central */}
      <nav style={navigationStyles}>
        {navigationItems.map((item) => (
          <ButtonGhost
            key={item.id}
            size="lg"
            selected={activeNavItem === item.id}
            onClick={() => onNavClick(item.id)}
          >
            {item.label}
          </ButtonGhost>
        ))}
      </nav>

      {/* Área Derecha */}
      <div style={rightAreaStyles}>
        {/* Botón Login */}
        <ButtonPrimary
          size="sm"
          leftIcon="user"
          selected={isLoginSelected}
          onClick={onLoginClick}
        >
          Log in
        </ButtonPrimary>

        {/* Icono Menu */}
        <div 
          style={menuIconStyles}
          onClick={onMenuClick}
        >
          <Icon 
            name="menu" 
            size="md"
            style={{ color: '#3f762f' }} // olive.500 aplicado al icono
          />
        </div>
      </div>
    </header>
  );
};

export default Header;