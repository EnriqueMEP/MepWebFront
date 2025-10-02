import React from 'react';
import { useComponentColors } from '../../foundations/theme-hooks.js';
import { injectResponsiveClasses, getTypographyClass } from '../../foundations/responsive-classes.js';
import ButtonPrimary from '../Button/ButtonPrimary.jsx';
import BadgeText from '../Badge/BadgeText.jsx';

/**
 * CardHorizontal - Tarjeta horizontal con imagen, badge, título, descripción y botón
 * 
 * Estructura:
 * - Imagen a la izquierda
 * - Badge outline absoluto posicionado sobre la imagen
 * - Contenido con título, descripción y botón primary con icono arrowRightLong
 * 
 * Tamaños: sm, md
 * Usa colores semánticos adaptativos para light/dark mode
 * ACTUALIZADO: Usa clases CSS escalables como Home para comportamiento de zoom consistente
 */

export const CardHorizontal = ({
  size = 'sm',
  image = 'https://placehold.co/120x120',
  badgeText = 'Badge',
  title = 'Title',
  description = 'Description',
  buttonText = 'Button',
  onButtonClick,
  className = '',
  style = {},
  ...props
}) => {
  // Inyectar clases CSS responsivas al montar
  React.useEffect(() => {
    injectResponsiveClasses();
  }, []);

  const cardColors = useComponentColors('cardDefault');
  
  // Obtener clases CSS escalables
  const titleTypographyClass = getTypographyClass('card', size);
  const descriptionTypographyClass = size === 'md' ? 'text-label-large' : 'text-label-small';
  
  // Generar imagen con dimensiones base para el tamaño (se escalará con CSS)
  const baseImageSizes = {
    sm: { width: 120, height: 120 },
    md: { width: 128, height: 128 }
  };
  
  const imageSize = baseImageSizes[size] || baseImageSizes.sm;
  const imageSrc = image.includes('placehold.co') 
    ? `https://placehold.co/${imageSize.width}x${imageSize.height}`
    : image;

  // Estilos base mínimos (solo colores y propiedades no escalables)
  const cardStyles = {
    position: 'relative',
    boxShadow: '0px 2px 6px 2px rgba(0, 0, 0, 0.15)',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    display: 'inline-flex',
    // Dimensiones escalables via CSS classes
    ...style
  };

  const imageContainerStyles = {
    position: 'relative',
    overflow: 'hidden'
  };

  const imageStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  };

  const contentStyles = {
    flex: '1 1 0',
    alignSelf: 'stretch',
    backgroundColor: cardColors.background,
    borderLeft: `1px solid ${cardColors.border}`,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    display: 'inline-flex',
    flexDirection: 'column'
  };

  const contentInnerStyles = {
    flex: '1 1 0',
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    display: 'inline-flex'
  };

  const textAreaStyles = {
    alignSelf: 'stretch',
    flex: '1 1 0',
    flexShrink: 0,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    display: 'flex'
  };

  const textContentStyles = {
    alignSelf: 'stretch',
    flex: '1 1 0',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    display: 'flex'
  };

  const titleStyles = {
    alignSelf: 'stretch',
    justifyContent: 'center',
    flexDirection: 'column',
    color: cardColors.text,
    wordBreak: 'break-word',
    overflowWrap: 'break-word',
    hyphens: 'auto',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    fontWeight: 700
  };

  const descriptionStyles = {
    alignSelf: 'stretch',
    flex: '1 1 0',
    color: cardColors.text,
    wordBreak: 'break-word',
    overflowWrap: 'break-word',
    hyphens: 'auto',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical'
  };

  const badgeContainerStyles = {
    position: 'absolute',
    left: 'clamp(0.625rem, 0.69vw, 0.69vw)',
    top: 'clamp(0.625rem, 0.69vw, 0.69vw)',
    zIndex: 1
  };

  // Generar className para el card usando clases escalables
  const cardClassName = [
    'component-base',
    'component-flex-start',
    size === 'sm' ? 'card-size-sm' : 'card-size-md',
    className
  ].filter(Boolean).join(' ');

  return (
    <div
      className={cardClassName}
      style={cardStyles}
      {...props}
    >
      {/* Imagen Container */}
      <div style={imageContainerStyles} className={size === 'sm' ? 'card-image-sm' : 'card-image-md'}>
        <img 
          src={imageSrc}
          alt=""
          style={imageStyles}
        />
        
        {/* Badge posicionado absolutamente sobre la imagen */}
        <div style={badgeContainerStyles}>
          <BadgeText variant="outline" size="sm">
            {badgeText}
          </BadgeText>
        </div>
      </div>

      {/* Content Area */}
      <div style={contentStyles} className="spacing-md">
        <div style={contentInnerStyles} className="spacing-md">
          <div style={textAreaStyles} className="spacing-xs">
            <div style={textContentStyles} className="spacing-xs">
              <div style={titleStyles} className={titleTypographyClass}>
                {title}
              </div>
              <div style={descriptionStyles} className={descriptionTypographyClass}>
                {description}
              </div>
            </div>
          </div>
          
          <ButtonPrimary
            size="sm"
            rightIcon="arrowRightLong"
            onClick={onButtonClick}
          >
            {buttonText}
          </ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default CardHorizontal;