import React, { useEffect } from 'react';
import { useComponentColors } from '../../foundations/theme-hooks.js';
import { injectResponsiveClasses } from '../../foundations/responsive-classes.js';
import ButtonPrimary from '../Button/ButtonPrimary.jsx';
import BadgeText from '../Badge/BadgeText.jsx';

const SIZES = {
  sm: {
    width: 'clamp(140px, 11.11vw, 11.11vw)',
    height: 'clamp(200px, 16.67vw, 16.67vw)',
    imageHeight: 'clamp(70px, 5.56vw, 5.56vw)',
    contentPadding: 'clamp(10px, 0.83vw, 0.83vw)',
    contentGap: 'clamp(10px, 0.83vw, 0.83vw)',
    titleTypography: {
      fontFamily: 'Ubuntu, sans-serif',
      fontSize: 'clamp(11px, 0.83vw, 0.83vw)',
      fontWeight: 700,
      lineHeight: '1.5'
    },
    descriptionTypography: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: 'clamp(10px, 0.69vw, 0.69vw)',
      fontWeight: 400,
      lineHeight: '1.43'
    },
    buttonSize: 'sm'
  },
  md: {
    width: 'clamp(160px, 12.5vw, 12.5vw)',
    height: 'clamp(220px, 18.06vw, 18.06vw)',
    imageHeight: 'clamp(80px, 6.25vw, 6.25vw)',
    contentPadding: 'clamp(12px, 1.11vw, 1.11vw)',
    contentGap: 'clamp(12px, 1.11vw, 1.11vw)',
    titleTypography: {
      fontFamily: 'Ubuntu, sans-serif',
      fontSize: 'clamp(12px, 0.97vw, 0.97vw)',
      fontWeight: 700,
      lineHeight: '1.5'
    },
    descriptionTypography: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: 'clamp(11px, 0.83vw, 0.83vw)',
      fontWeight: 400,
      lineHeight: '1.43'
    },
    buttonSize: 'sm'
  },
  lg: {
    width: 'clamp(180px, 13.89vw, 13.89vw)',
    height: 'clamp(240px, 19.44vw, 19.44vw)',
    imageHeight: 'clamp(90px, 6.94vw, 6.94vw)',
    contentPadding: 'clamp(14px, 1.25vw, 1.25vw)',
    contentGap: 'clamp(14px, 1.25vw, 1.25vw)',
    titleTypography: {
      fontFamily: 'Ubuntu, sans-serif',
      fontSize: 'clamp(13px, 1.11vw, 1.11vw)',
      fontWeight: 700,
      lineHeight: '1.5'
    },
    descriptionTypography: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: 'clamp(12px, 0.97vw, 0.97vw)',
      fontWeight: 400,
      lineHeight: '1.43'
    },
    buttonSize: 'sm'
  },
  xl: {
    width: 'clamp(200px, 16.67vw, 16.67vw)',
    height: 'clamp(280px, 22.22vw, 22.22vw)',
    imageHeight: 'clamp(100px, 8.33vw, 8.33vw)',
    contentPadding: 'clamp(16px, 1.67vw, 1.67vw)',
    contentGap: 'clamp(16px, 1.67vw, 1.67vw)',
    titleTypography: {
      fontFamily: 'Ubuntu, sans-serif',
      fontSize: 'clamp(14px, 1.11vw, 1.11vw)',
      fontWeight: 700,
      lineHeight: '1.5'
    },
    descriptionTypography: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: 'clamp(13px, 0.97vw, 0.97vw)',
      fontWeight: 400,
      lineHeight: '1.43'
    },
    buttonSize: 'md'
  }
};

export const CardVertical = ({
  size = 'md',
  image = 'https://placehold.co/240x120',
  badgeText = 'Badge',
  title = 'Title',
  description = '',
  buttonText = 'Button',
  buttonSelected = false,
  onButtonClick,
  className = '',
  style = {},
  ...props
}) => {
  const sizeConfig = SIZES[size] || SIZES.md;
  const cardColors = useComponentColors('cardDefault');

  useEffect(() => {
    injectResponsiveClasses();
  }, []);

  const cardStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0px',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexShrink: 0,
    width: sizeConfig.width,
    height: sizeConfig.height,
    position: 'relative',
    ...style
  };

  const imgStyles = {
    flexShrink: 0,
    // width quitado - será manejado por CSS para igualar con contenido
    height: sizeConfig.imageHeight,
    position: 'relative',
    objectFit: 'cover',
    display: 'block'
  };

  const oContainerStyles = {
    background: cardColors.background,
    borderStyle: 'solid',
    borderColor: cardColors.border,
    borderWidth: '1px 0px 0px 0px',
    padding: sizeConfig.contentPadding,
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: '1',
    width: sizeConfig.width,
    position: 'relative'
  };

  const oContainer2Styles = {
    display: 'flex',
    flexDirection: 'column',
    gap: sizeConfig.contentGap,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
    flex: '1',
    position: 'relative'
  };

  const oContainer3Styles = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'clamp(4px, 0.28vw, 0.28vw)',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
    flex: '1',
    position: 'relative'
  };

  const oContainer4Styles = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'clamp(2px, 0.14vw, 0.14vw)',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
    flexShrink: 0,
    position: 'relative'
  };

  const titleStyles = {
    color: cardColors.text,
    textAlign: 'left',
    fontFamily: sizeConfig.titleTypography.fontFamily,
    fontSize: sizeConfig.titleTypography.fontSize,
    lineHeight: sizeConfig.titleTypography.lineHeight,
    fontWeight: sizeConfig.titleTypography.fontWeight,
    position: 'relative',
    alignSelf: 'stretch',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start'
  };

  const bodySmallStyles = {
    color: cardColors.text,
    textAlign: 'left',
    fontFamily: sizeConfig.descriptionTypography.fontFamily,
    fontSize: sizeConfig.descriptionTypography.fontSize,
    lineHeight: sizeConfig.descriptionTypography.lineHeight,
    fontWeight: sizeConfig.descriptionTypography.fontWeight,
    position: 'relative',
    alignSelf: 'stretch',
    flex: '1',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical'
  };

  const oContainer5Styles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
    flexShrink: 0,
    position: 'relative'
  };

  return (
    <article
      className={`card-vertical-${size} ${className}`}
      style={cardStyles}
      {...props}
    >
      {/* Imagen */}
      <img 
        className="img" 
        style={imgStyles} 
        src={image} 
        alt={title} 
      />
      
      {/* Contenedor principal */}
      <div className="o-container" style={oContainerStyles}>
        <div className="o-container2" style={oContainer2Styles}>
          
          {/* Contenedor de badge y texto */}
          <div className="o-container3" style={oContainer3Styles}>
            
            {/* Badge */}
            <div className="badge-text">
              <BadgeText variant="outline" size="sm">
                {badgeText}
              </BadgeText>
            </div>
            
            {/* Contenedor de título y descripción */}
            <div className="o-container4" style={oContainer4Styles}>
              <div className="title-small-emphasis" style={titleStyles}>
                {title}
              </div>
              {description && (
                <div className="body-small" style={bodySmallStyles}>
                  {description}
                </div>
              )}
            </div>
          </div>
          
          {/* Contenedor del botón */}
          <div className="o-container5" style={oContainer5Styles}>
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
    </article>
  );
};

export default CardVertical;