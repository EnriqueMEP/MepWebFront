import React, { useEffect } from 'react';
import { useComponentColors } from '../../foundations/theme-hooks.js';
import { injectResponsiveClasses } from '../../foundations/responsive-classes.js';
import ButtonPrimary from '../Button/ButtonPrimary.jsx';
import BadgeText from '../Badge/BadgeText.jsx';

const SIZES = {
  sm: {
    width: '11.11vw',
    height: '16.67vw',
    imageHeight: '5.56vw',
    contentPadding: '0.83vw',
    contentGap: '0.83vw',
    titleTypography: {
      fontFamily: 'Ubuntu, sans-serif',
      fontSize: '0.83vw',
      fontWeight: 700,
      lineHeight: '1.5'
    },
    descriptionTypography: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '0.69vw',
      fontWeight: 400,
      lineHeight: '1.43'
    },
    buttonSize: 'sm'
  },
  md: {
    width: '12.5vw',
    height: '18.06vw',
    imageHeight: '6.25vw',
    contentPadding: '1.11vw',
    contentGap: '1.11vw',
    titleTypography: {
      fontFamily: 'Ubuntu, sans-serif',
      fontSize: '0.97vw',
      fontWeight: 700,
      lineHeight: '1.5'
    },
    descriptionTypography: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '0.83vw',
      fontWeight: 400,
      lineHeight: '1.43'
    },
    buttonSize: 'sm'
  },
  lg: {
    width: '13.89vw',
    height: '19.44vw',
    imageHeight: '6.94vw',
    contentPadding: '1.25vw',
    contentGap: '1.25vw',
    titleTypography: {
      fontFamily: 'Ubuntu, sans-serif',
      fontSize: '1.11vw',
      fontWeight: 700,
      lineHeight: '1.5'
    },
    descriptionTypography: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '0.97vw',
      fontWeight: 400,
      lineHeight: '1.43'
    },
    buttonSize: 'sm'
  },
  xl: {
    width: '16.67vw',
    height: '22.22vw',
    imageHeight: '8.33vw',
    contentPadding: '1.67vw',
    contentGap: '1.67vw',
    titleTypography: {
      fontFamily: 'Ubuntu, sans-serif',
      fontSize: '1.11vw',
      fontWeight: 700,
      lineHeight: '1.5'
    },
    descriptionTypography: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '0.97vw',
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