import React from 'react';
import { useComponentColors } from '../../foundations/theme-hooks.js';
import { textStyles } from '../../foundations/typography.js';
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
 */

const SIZES = {
  sm: {
    width: '300px',
    height: '120px',
    imageWidth: '120px',
    imageHeight: '120px',
    contentPadding: '14px',
    badgePosition: { left: '10px', top: '10px' },
    titleTypography: { ...textStyles.buttonMedium, fontWeight: 700 }, // 14px, 700
    descriptionTypography: { ...textStyles.captionRegular, fontSize: '11px' }, // Más pequeño
    buttonSize: 'sm'
  },
  md: {
    width: '320px',
    height: '128px',
    imageWidth: '128px',
    imageHeight: '128px',
    contentPadding: '18px',
    badgePosition: { left: '12px', top: '12px' },
    titleTypography: { ...textStyles.buttonMedium, fontWeight: 700 }, // 14px, 700
    descriptionTypography: textStyles.captionRegular, // 12px, 400
    buttonSize: 'sm'
  }
};

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
  const sizeConfig = SIZES[size] || SIZES.sm;
  const cardColors = useComponentColors('cardDefault');

  // Generar imagen con dimensiones correctas para el tamaño
  const imageWidth = parseInt(sizeConfig.imageWidth);
  const imageHeight = parseInt(sizeConfig.imageHeight);
  const imageSrc = image.includes('placehold.co') 
    ? `https://placehold.co/${imageWidth}x${imageHeight}`
    : image;

  const cardStyles = {
    width: sizeConfig.width,
    height: sizeConfig.height,
    position: 'relative',
    boxShadow: '0px 2px 6px 2px rgba(0, 0, 0, 0.15)',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    display: 'inline-flex',
    ...style
  };

  const imageContainerStyles = {
    position: 'relative',
    width: sizeConfig.imageWidth,
    height: sizeConfig.imageHeight
  };

  const imageStyles = {
    width: sizeConfig.imageWidth,
    height: sizeConfig.imageHeight,
    objectFit: 'cover'
  };

  const contentStyles = {
    flex: '1 1 0',
    alignSelf: 'stretch',
    padding: sizeConfig.contentPadding,
    backgroundColor: cardColors.background,
    borderLeft: `1px solid ${cardColors.border}`,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    display: 'inline-flex',
    flexDirection: 'column',
    gap: size === 'sm' ? '8px' : '12px'
  };

  const contentInnerStyles = {
    flex: '1 1 0',
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    gap: '12px',
    display: 'inline-flex'
  };

  const textAreaStyles = {
    alignSelf: 'stretch',
    flex: '1 1 0',
    flexShrink: 0,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '4px',
    display: 'flex',
    minHeight: size === 'sm' ? '50px' : '60px'
  };

  const textContentStyles = {
    alignSelf: 'stretch',
    flex: '1 1 0',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '2px',
    display: 'flex'
  };

  const titleStyles = {
    alignSelf: 'stretch',
    justifyContent: 'center',
    flexDirection: 'column',
    color: cardColors.text,
    ...sizeConfig.titleTypography,
    wordBreak: 'break-word',
    overflowWrap: 'break-word',
    hyphens: 'auto',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 2, // Permitir 2 líneas para títulos largos
    WebkitBoxOrient: 'vertical',
    lineHeight: '1.3',
    minHeight: '26px' // Altura mínima para evitar colapso
  };

  const descriptionStyles = {
    alignSelf: 'stretch',
    flex: '1 1 0',
    color: cardColors.text,
    ...sizeConfig.descriptionTypography,
    wordBreak: 'break-word',
    overflowWrap: 'break-word',
    hyphens: 'auto',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: size === 'sm' ? 2 : 3, // Más líneas para mejor ajuste
    WebkitBoxOrient: 'vertical',
    lineHeight: '1.4',
    opacity: 0.8,
    minHeight: size === 'sm' ? '24px' : '36px' // Altura mínima para evitar colapso
  };

  const buttonAreaStyles = {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    gap: '10px',
    display: 'flex',
    flexShrink: 0,
    minHeight: '32px'
  };

  const badgeStyles = {
    position: 'absolute',
    left: sizeConfig.badgePosition.left,
    top: sizeConfig.badgePosition.top,
    zIndex: 1
  };

  return (
    <div
      className={`card-horizontal-${size} ${className}`}
      style={cardStyles}
      {...props}
    >
      {/* Contenedor de imagen */}
      <div style={imageContainerStyles}>
        <img style={imageStyles} src={imageSrc} alt={title} />
        
        {/* Badge absoluto */}
        <div style={badgeStyles}>
          <BadgeText variant="outline" size="sm">
            {badgeText}
          </BadgeText>
        </div>
      </div>
      
      {/* Contenido */}
      <div style={contentStyles}>
        <div style={contentInnerStyles}>
          {/* Área de texto */}
          <div style={textAreaStyles}>
            <div style={textContentStyles}>
              <div style={titleStyles}>{title}</div>
              <div style={descriptionStyles}>{description}</div>
            </div>
          </div>
          
          {/* Área del botón */}
          <div style={buttonAreaStyles}>
            <ButtonPrimary
              size={sizeConfig.buttonSize}
              rightIcon="arrowRightLong"
              onClick={onButtonClick}
            >
              {buttonText}
            </ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHorizontal;