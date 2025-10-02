import React from 'react';
import { useComponentColors } from '../../foundations/theme-hooks.js';
import { injectResponsiveClasses } from '../../foundations/responsive-classes.js';
import ButtonGhost from '../Button/ButtonGhost.jsx';
import Icon from '../../foundations/icons/Icon.jsx';
import mepLogo from '../../foundations/img/mep_logo.svg';

/**
 * Footer - Pie de página principal de la aplicación
 * 
 * Estructura:
 * - Logo MEP arriba a la izquierda
 * - Navegación vertical con botones Ghost MD con iconos left/right
 * 
 * Usa colores semánticos primary-container para background
 * ACTUALIZADO: Usa clases CSS escalables como Home para comportamiento de zoom consistente
 */

const Footer = ({
  activeNavItem = null,
  onNavClick = () => {},
  className = '',
  ...props
}) => {
  // Inyectar clases CSS responsivas al montar
  React.useEffect(() => {
    injectResponsiveClasses();
  }, []);

  // Colores semánticos para el footer
  const footerColors = useComponentColors('footer');

  const navigationItems = [
    { id: 'about', label: 'Sobre nosotros' },
    { id: 'projects', label: 'Nuestros proyectos' },
    { id: 'sectors', label: 'Sectores' },
    { id: 'contact', label: 'Contacto' }
  ];

  // Estilos base mínimos (solo colores y propiedades no escalables)
  const footerStyles = {
    background: footerColors.background,
    ...props.style
  };

  // Generar className combinando clases escalables
  const footerClassName = [
    'component-base',
    'footer-component',
    className
  ].filter(Boolean).join(' ');

  return (
    <footer
      className={footerClassName}
      style={footerStyles}
      {...props}
    >
      <div className="footer-container">
        {/* Logo Area */}
        <div className="footer-logo">
          <img 
            src={mepLogo}
            alt="MEP Engineering"
          />
        </div>

        {/* Navigation Area */}
        <nav className="footer-nav">
          {navigationItems.map((item) => (
            <ButtonGhost
              key={item.id}
              size="md"
              selected={activeNavItem === item.id}
              onClick={() => onNavClick(item.id)}
              leftIcon="arrowRight"
            >
              {item.label}
            </ButtonGhost>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;