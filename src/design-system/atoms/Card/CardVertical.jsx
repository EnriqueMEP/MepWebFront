import React from 'react';
import { useComponentColors } from '../../foundations/theme-hooks.js';
import { textStyles } from '../../foundations/typography.js';
import ButtonPrimary from '../Button/ButtonPrimary.jsx';
import BadgeText from '../Badge/BadgeText.jsx';

/**
 * CardVertical - Tarjeta vertical con imagen, badge, título, descripción y botón
 * 
 * Estructura:
 * - Imagen en la parte superior
 * - Badge outline absoluto posicionado sobre la imagen
 * - Contenido con título, descripción y botón primary con icono arrowRightLong
 * 
 * Tamaños: sm, md, lg, xl
 * Usa colores semánticos adaptativos para light/dark mode
 */

const SIZES = {
  sm: {
    width: '160px',
    height: '240px',
    imageHeight: '120px',
    contentPadding: '12px',
    badgePosition: { left: '12px', top: '12px' },
    titleTypography: { ...textStyles.buttonMedium, fontWeight: 700 }, // 14px, 700
    descriptionTypography: textStyles.captionRegular, // 12px, 400
    buttonSize: 'sm'
  },
  md: {
    width: '180px',
    height: '260px',
    imageHeight: '120px',
    contentPadding: '16px',
    badgePosition: { left: '12px', top: '12px' },
    titleTypography: { ...textStyles.buttonMedium, fontWeight: 700 }, // 14px, 700
    descriptionTypography: textStyles.captionRegular, // 12px, 400
    buttonSize: 'sm'
  },
  lg: {
    width: '200px',
    height: '280px',
    imageHeight: '140px',
    contentPadding: '18px',
    badgePosition: { left: '16px', top: '16px' },
    titleTypography: { ...textStyles.buttonMedium, fontWeight: 700 }, // 14px, 700
    descriptionTypography: textStyles.captionRegular, // 12px, 400
    buttonSize: 'sm'
  },
  xl: {
    width: '240px',
    height: '320px',
    imageHeight: '149px',
    contentPadding: '20px',
    badgePosition: { left: '20px', top: '20px' },
    titleTypography: { ...textStyles.buttonLarge, fontWeight: 700 }, // 16px, 700
    descriptionTypography: textStyles.buttonMedium, // 14px, 400
    buttonSize: 'sm'
  }
};

export const CardVertical = ({
  size = 'md',
  image = 'https://placehold.co/180x120',
  badgeText = 'Badge',
  title = 'Title',
  description = 'Description',
  buttonText = 'Button',
  buttonSelected = false,
  onButtonClick,
  className = '',
  style = {},
  ...props
}) => {
  const sizeConfig = SIZES[size] || SIZES.md;
  const cardColors = useComponentColors('cardDefault');

  // Generar imagen con dimensiones correctas para el tamaño
  const imageWidth = parseInt(sizeConfig.width);
  const imageHeight = parseInt(sizeConfig.imageHeight);
  const imageSrc = image.includes('placehold.co') 
    ? `https://placehold.co/${imageWidth}x${imageHeight}`
    : image;

  const cardStyles = {
    width: sizeConfig.width,
    height: sizeConfig.height,
    position: 'relative',
    boxShadow: '0px 2px 6px 2px rgba(0, 0, 0, 0.15)',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    display: 'inline-flex',
    ...style
  };

  const imageStyles = {
    alignSelf: 'stretch',
    height: sizeConfig.imageHeight,
    objectFit: 'cover'
  };

  const contentStyles = {
    alignSelf: 'stretch',
    flex: '1 1 0',
    padding: sizeConfig.contentPadding,
    backgroundColor: cardColors.background,
    borderTop: `1px solid ${cardColors.border}`,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: size === 'sm' ? '6px' : '10px',
    display: 'inline-flex',
    flexDirection: 'column'
  };

  const contentInnerStyles = {
    flex: '1 1 0',
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    gap: '16px',
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
    minHeight: size === 'sm' ? '60px' : size === 'md' ? '80px' : '100px'
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
    WebkitLineClamp: size === 'sm' ? 2 : size === 'md' ? 2 : 3, // Más líneas para títulos largos
    WebkitBoxOrient: 'vertical',
    lineHeight: size === 'sm' ? '1.2' : '1.3',
    minHeight: size === 'sm' ? '24px' : '32px' // Altura mínima para evitar colapso
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
    WebkitLineClamp: size === 'sm' ? 3 : size === 'md' ? 4 : size === 'lg' ? 5 : 6, // Más líneas para mejor ajuste
    WebkitBoxOrient: 'vertical',
    lineHeight: '1.4',
    opacity: 0.8,
    minHeight: size === 'sm' ? '36px' : '48px' // Altura mínima para evitar colapso
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
      className={`card-vertical-${size} ${className}`}
      style={cardStyles}
      {...props}
    >
      {/* Imagen */}
      <img style={imageStyles} src={imageSrc} alt={title} />
      
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
              selected={buttonSelected}
              onClick={onButtonClick}
            >
              {buttonText}
            </ButtonPrimary>
          </div>
        </div>
      </div>
      
      {/* Badge absoluto */}
      <div style={badgeStyles}>
        <BadgeText variant="outline" size="sm">
          {badgeText}
        </BadgeText>
      </div>
    </div>
  );
};

export default CardVertical;