import React from 'react';
import { useComponentColors } from '../../foundations/theme-hooks.js';
import ButtonGhost from '../Button/ButtonGhost.jsx';
import Icon from '../../foundations/icons/Icon.jsx';
import mepLogo from '../../foundations/img/mep_logo.svg';

/**
 * Footer - Pie de página principal de la aplicación
 * 
 * Estructura:
 * - Logo MEP arriba a la izquierda (104x40px)
 * - Navegación vertical con 4 botones Ghost MD con iconos left/right
 * 
 * Dimensiones: 1440x314px con padding lateral 64px y vertical 40px
 * Usa colores semánticos primary-container para background
 */

const Footer = ({
  activeNavItem = null,
  onNavClick = () => {},
  className = '',
  ...props
}) => {
  // Colores semánticos para el footer
  const footerColors = useComponentColors('footer');

  const navigationItems = [
    { id: 'about', label: 'Sobre nosotros' },
    { id: 'projects', label: 'Nuestros proyectos' },
    { id: 'sectors', label: 'Sectores' },
    { id: 'contact', label: 'Contacto' }
  ];

  // Estilos del contenedor principal - al final del contenido
  const footerStyles = {
    width: '100%', // Todo el ancho del contenedor padre
    height: '314px', // Altura fija
    paddingLeft: '64px', // Padding fijo
    paddingRight: '64px',
    paddingTop: '40px',
    paddingBottom: '40px',
    background: footerColors.background,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    position: 'relative', // Posición normal al final del contenido
    boxSizing: 'border-box',
    flexShrink: 0 // No se encoge nunca
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

  // Estilos del área de navegación vertical
  const navigationStyles = {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '16px',
    display: 'flex'
  };

  return (
    <footer
      className={`footer ${className}`}
      style={footerStyles}
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

      {/* Navegación Vertical */}
      <nav style={navigationStyles}>
        {navigationItems.map((item) => (
          <ButtonGhost
            key={item.id}
            size="md"
            leftIcon="userFollow" // Icono de flecha hacia la derecha a la izquierda
            rightIcon="userFollow" // Icono de flecha hacia la derecha a la derecha
            selected={activeNavItem === item.id}
            onClick={() => onNavClick(item.id)}
          >
            {item.label}
          </ButtonGhost>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;