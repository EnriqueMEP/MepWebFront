import React, { useEffect } from 'react';
import { useComponentColors } from '../../foundations/theme-hooks.js';
import { textStyles } from '../../foundations/typography.js';
import { injectResponsiveClasses } from '../../foundations/responsive-classes.js';
import ButtonPrimary from '../Button/ButtonPrimary.jsx';
import BadgeText from '../Badge/BadgeText.jsx';

/**
 * CardVertical - Tarjeta vertical con imagen, badge, título, descripción y botón
 * 
 * Estructura:
 * - Imagen en la parte superior
 * - Contenido con badge, título, descripción y botón primary con icono arrowRightLong
 * 
 * Tamaños: sm, md, lg, xl
 * Usa colores semánticos adaptativos para light/dark mode
 * ACTUALIZADO: Usa clases CSS escalables para comportamiento de zoom consistente
 */

const SIZES = {
  sm: {
    contentPadding: '12px',
    titleTypography: { ...textStyles.buttonMedium, fontWeight: 700 },
    descriptionTypography: textStyles.captionRegular,
    buttonSize: 'sm'
  },
  md: {
    contentPadding: '16px',
    titleTypography: { ...textStyles.buttonMedium, fontWeight: 700 },
    descriptionTypography: textStyles.captionRegular,
    buttonSize: 'sm'
  },
  lg: {
    contentPadding: '18px',
    titleTypography: { ...textStyles.buttonMedium, fontWeight: 700 },
    descriptionTypography: textStyles.captionRegular,
    buttonSize: 'sm'
  },
  xl: {
    contentPadding: '20px',
    titleTypography: { ...textStyles.buttonLarge, fontWeight: 700 },
    descriptionTypography: textStyles.buttonMedium,
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

  // Inyectar clases CSS responsivas al montar
  useEffect(() => {
    injectResponsiveClasses();
  }, []);

  // Obtener clase CSS escalable para la card
  const sizeClass = `card-size-${size}`;

  const cardStyles = {
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    display: 'inline-flex',
    overflow: 'hidden',
    ...style
  };

  const imageStyles = {
    alignSelf: 'stretch',
    objectFit: 'cover',
    display: 'block',
    margin: 0,
    padding: 0
  };

  const contentStyles = {
    alignSelf: 'stretch',
    flex: '1 1 0',
    padding: sizeConfig.contentPadding,
    backgroundColor: cardColors.background,
    borderTop: `1px solid ${cardColors.border}`,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '8px',
    display: 'flex',
    flexDirection: 'column'
  };

  const contentInnerStyles = {
    flex: '1 1 0',
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    gap: '16px',
    display: 'flex'
  };

  const textAreaStyles = {
    alignSelf: 'stretch',
    flex: '1 1 0',
    flexShrink: 0,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '8px',
    display: 'flex'
  };

  const titleStyles = {
    alignSelf: 'stretch',
    color: cardColors.text,
    ...sizeConfig.titleTypography,
    lineHeight: size === 'sm' ? '1.2' : '1.3',
    wordBreak: 'break-word',
    overflowWrap: 'break-word',
    hyphens: 'auto',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: size === 'sm' ? 2 : size === 'md' ? 2 : 3,
    WebkitBoxOrient: 'vertical'
  };

  const descriptionStyles = {
    alignSelf: 'stretch',
    flex: '1 1 0',
    color: cardColors.text,
    ...sizeConfig.descriptionTypography,
    lineHeight: '1.4',
    opacity: 0.8,
    wordBreak: 'break-word',
    overflowWrap: 'break-word',
    hyphens: 'auto',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: size === 'sm' ? 3 : size === 'md' ? 4 : size === 'lg' ? 5 : 6,
    WebkitBoxOrient: 'vertical'
  };

  const buttonAreaStyles = {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    gap: '10px',
    display: 'flex',
    flexShrink: 0
  };

  // Combinar clases CSS escalables
  const combinedClassName = [
    'component-base',
    sizeClass,
    `card-vertical-${size}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div
      className={combinedClassName}
      style={cardStyles}
      {...props}
    >
      {/* Imagen pegada al borde */}
      <img className="card-image" style={imageStyles} src={image} alt={title} />
      
      {/* Contenido */}
      <div style={contentStyles}>
        {/* Badge ANTES del título */}
        <BadgeText variant="outline" size="sm">
          {badgeText}
        </BadgeText>

        <div style={contentInnerStyles}>
          {/* Área de texto */}
          <div style={textAreaStyles}>
            {/* Título con tipografía del SIZES */}
            <div style={titleStyles}>
              {title}
            </div>
            <div style={descriptionStyles}>{description}</div>
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
    </div>
  );
};

export default CardVertical;