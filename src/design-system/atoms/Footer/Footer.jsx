import React from 'react';
import { useComponentColors } from '../../foundations/theme-hooks.js';
import { injectResponsiveClasses } from '../../foundations/responsive-classes.js';
import { textStyles } from '../../foundations/typography.js';
import ButtonGhost from '../Button/ButtonGhost.jsx';
import mepLogo from '../../foundations/img/mep_logo.svg';
import licenciasImg from '../../foundations/img/licencias.png';

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
  selectedItem = null,
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

  // Datos de navegación organizados por columnas como en la imagen
  const navigationColumns = [
    {
      title: 'Sobre MEP Engineering',
      items: [
        { id: 'vision', label: 'Ingenieria con visión de futuro' },
        { id: 'nosotros', label: 'Nosotros' }
      ]
    },
    {
      title: 'Lineas de negocio',
      items: [
        { id: 'energia', label: 'Energia' },
        { id: 'agua', label: 'Agua' },
        { id: 'industria', label: 'Industria' },
        { id: 'infraestructuras', label: 'Infraestructuras' }
      ]
    },
    {
      title: 'Grupo',
      items: [
        { id: 'facilities', label: 'MEP Facilities' },
        { id: 'canada', label: 'MEP Canada' },
        { id: 'industria-grupo', label: 'Industria' },
        { id: 'infraestructuras-grupo', label: 'Infraestructuras' }
      ]
    },
    {
      title: 'Contacto',
      items: [
        { id: 'conocenos', label: '¡Conócenos!' }
      ]
    }
  ];

  // Estilos base simplificados - las dimensiones ya están en .footer-component CSS
  const footerStyles = {
    background: footerColors.background,
    ...props.style
  };

  // Estilos simplificados - usar clases CSS para dimensiones y espaciado
  const leftSectionStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  };

  const logoStyles = {
    position: 'relative',
    overflow: 'hidden'
  };

  const addressContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  };

  const addressTextStyles = {
    color: footerColors.text,
    fontFamily: textStyles.bodyLarge.fontFamily,
    fontWeight: textStyles.bodyLarge.fontWeight,
    lineHeight: textStyles.bodyLarge.lineHeight,
    margin: 0
  };

  const licenciasStyles = {
    // Dimensiones manejadas por CSS class
  };

  // Estilos para la sección derecha
  const rightSectionStyles = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  };

  const columnStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  };

  const columnTitleStyles = {
    color: footerColors.text,
    fontFamily: textStyles.titleLargeEmphasis.fontFamily,
    fontWeight: textStyles.titleLargeEmphasis.fontWeight,
    lineHeight: textStyles.titleLargeEmphasis.lineHeight,
    margin: 0
  };

  const columnItemsStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
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
      {/* Estructura para PC/Tablet (>= 768px) */}
      <div className="footer-desktop">
        {/* Sección Izquierda */}
        <div style={leftSectionStyles}>
          <div className="footer-nav">
            {/* Logo */}
            <div style={logoStyles} className="footer-logo">
              <img 
                src={mepLogo}
                alt="MEP Engineering"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>

            {/* Dirección */}
            <div style={addressContainerStyles} className="footer-address-gap">
              <p style={addressTextStyles} className="footer-address-text">Calle Diego LLorente, 40.</p>
              <p style={addressTextStyles} className="footer-address-text">Los Palacios y Villafranca.</p>
              <p style={addressTextStyles} className="footer-address-text">41720 Sevilla</p>
            </div>
          </div>

          {/* Imagen de licencias */}
          <img 
            src={licenciasImg}
            alt="Licencias"
            style={licenciasStyles}
            className="footer-licencias"
          />
        </div>

        {/* Sección Derecha - Columnas de navegación */}
        <div style={rightSectionStyles} className="footer-right-gap">
          {navigationColumns.map((column, index) => (
            <div key={index} style={columnStyles} className="footer-column-gap">
              <h3 style={columnTitleStyles} className="footer-column-title">{column.title}</h3>
              <div style={columnItemsStyles} className="footer-column-items-gap">
                {column.items.map((item) => (
                  <ButtonGhost
                    key={item.id}
                    size="md"
                    selected={selectedItem === item.id}
                    disabled={false}
                    onClick={() => onNavClick(item.id)}
                  >
                    {item.label}
                  </ButtonGhost>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Estructura para Móvil (< 768px) - Completamente nueva */}
      <div className="footer-mobile">
        {/* Navegación primero */}
        <div className="footer-mobile-navigation">
          {navigationColumns.map((column, index) => (
            <div key={index} className="footer-mobile-column">
              <h3 className="footer-mobile-title">{column.title}</h3>
              <div className="footer-mobile-buttons">
                {column.items.map((item) => (
                  <ButtonGhost
                    key={item.id}
                    size="md"
                    selected={selectedItem === item.id}
                    disabled={false}
                    onClick={() => onNavClick(item.id)}
                  >
                    {item.label}
                  </ButtonGhost>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Logo y dirección al final */}
        <div className="footer-mobile-info">
          <div className="footer-mobile-logo">
            <img 
              src={mepLogo}
              alt="MEP Engineering"
            />
          </div>
          <div className="footer-mobile-address">
            <p>Calle Diego LLorente, 40.</p>
            <p>Los Palacios y Villafranca.</p>
            <p>41720 Sevilla</p>
          </div>
          <img 
            className="footer-mobile-licenses"
            src={licenciasImg}
            alt="Licencias"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
