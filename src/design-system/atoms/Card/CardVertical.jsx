import React, { useEffect } from 'react';
import { useComponentColors } from '../../foundations/theme-hooks.js';
import { injectResponsiveClasses, getTypographyClass } from '../../foundations/responsive-classes.js';
import ButtonPrimary from '../Button/ButtonPrimary.jsx';
import BadgeText from '../Badge/BadgeText.jsx';

const SIZES = {
  sm: {
    width: 'clamp(140px, 11.11vw, 11.11vw)',
    imageAspectRatio: '3/2',
    contentPadding: 'clamp(10px, 0.83vw, 0.83vw)',
    titleTypography: {
      fontFamily: 'Ubuntu, sans-serif',
      fontSize: 'clamp(11px, 0.83vw, 0.83vw)',
      fontWeight: 700,
      lineHeight: '1.33'
    },
    descriptionTypography: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: 'clamp(10px, 0.69vw, 0.69vw)',
      fontWeight: 400,
      lineHeight: '1.33'
    },
    buttonSize: 'sm'
  },
  md: {
    width: 'clamp(160px, 12.5vw, 12.5vw)',
    imageAspectRatio: '3/2',
    contentPadding: 'clamp(12px, 1.11vw, 1.11vw)',
    titleTypography: {
      fontFamily: 'Ubuntu, sans-serif',
      fontSize: 'clamp(11px, 0.83vw, 0.83vw)',
      fontWeight: 700,
      lineHeight: '1.33'
    },
    descriptionTypography: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: 'clamp(10px, 0.69vw, 0.69vw)',
      fontWeight: 400,
      lineHeight: '1.33'
    },
    buttonSize: 'sm'
  },
  lg: {
    width: 'clamp(180px, 13.89vw, 13.89vw)',
    imageAspectRatio: '3/2',
    contentPadding: 'clamp(14px, 1.25vw, 1.25vw)',
    titleTypography: {
      fontFamily: 'Ubuntu, sans-serif',
      fontSize: 'clamp(11px, 0.83vw, 0.83vw)',
      fontWeight: 700,
      lineHeight: '1.33'
    },
    descriptionTypography: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: 'clamp(10px, 0.69vw, 0.69vw)',
      fontWeight: 400,
      lineHeight: '1.33'
    },
    buttonSize: 'sm'
  },
  xl: {
    width: 'clamp(200px, 16.67vw, 16.67vw)',
    imageAspectRatio: '3/2',
    contentPadding: 'clamp(16px, 1.39vw, 1.39vw)',
    titleTypography: {
      fontFamily: 'Ubuntu, sans-serif',
      fontSize: 'clamp(13px, 0.97vw, 0.97vw)',
      fontWeight: 700,
      lineHeight: '1.43'
    },
    descriptionTypography: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: 'clamp(11px, 0.83vw, 0.83vw)',
      fontWeight: 400,
      lineHeight: '1.33'
    },
    buttonSize: 'sm'
  }
};

export const CardVertical = ({
  size = 'md',
  image = 'https://placehold.co/180x120',
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

  const titleTypographyClass = getTypographyClass('card', size);
  const sizeClass = `card-size-${size}`;

  const articleStyles = {
    width: sizeConfig.width,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    ...style
  };

  const figureStyles = {
    position: 'relative',
    width: '100%',
    aspectRatio: sizeConfig.imageAspectRatio,
    margin: 0,
    padding: 0,
    overflow: 'hidden'
  };

  const imageStyles = {
    width: '100%',
    height: '100%',
    display: 'block',
    objectFit: 'cover'
  };

  const contentWrapperStyles = {
    display: 'flex',
    width: '100%',
    alignItems: 'flex-start',
    gap: 'clamp(8px, 0.69vw, 0.69vw)',
    padding: sizeConfig.contentPadding,
    position: 'relative',
    backgroundColor: cardColors.background,
    borderTop: `1px solid ${cardColors.border}`,
    flexDirection: 'column',
    minHeight: 'clamp(100px, 8.33vw, 8.33vw)'
  };

  const contentInnerStyles = {
    display: 'flex',
    alignItems: 'flex-end',
    gap: 'clamp(12px, 1.11vw, 1.11vw)',
    flex: '1 1 0',
    alignSelf: 'stretch',
    flexDirection: 'column',
    position: 'relative'
  };

  const textOuterStyles = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 'clamp(6px, 0.56vw, 0.56vw)',
    flex: '1 1 0',
    alignSelf: 'stretch',
    width: '100%',
    flexDirection: 'column',
    position: 'relative'
  };

  const textInnerStyles = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 'clamp(2px, 0.14vw, 0.14vw)',
    alignSelf: 'stretch',
    width: '100%',
    flexDirection: 'column',
    position: 'relative'
  };

  const titleStyles = {
    alignSelf: 'stretch',
    fontFamily: sizeConfig.titleTypography.fontFamily,
    fontWeight: sizeConfig.titleTypography.fontWeight,
    fontSize: sizeConfig.titleTypography.fontSize,
    color: cardColors.text,
    lineHeight: sizeConfig.titleTypography.lineHeight,
    wordWrap: 'break-word',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical'
  };

  const descriptionStyles = {
    alignSelf: 'stretch',
    fontFamily: sizeConfig.descriptionTypography.fontFamily,
    fontWeight: sizeConfig.descriptionTypography.fontWeight,
    fontSize: sizeConfig.descriptionTypography.fontSize,
    color: cardColors.text,
    lineHeight: sizeConfig.descriptionTypography.lineHeight,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    wordWrap: 'break-word'
  };

  const buttonContainerStyles = {
    display: 'flex',
    alignSelf: 'flex-end'
  };

  const combinedClassName = [
    'component-base',
    sizeClass,
    `card-vertical-${size}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <article
      className={combinedClassName}
      style={articleStyles}
      {...props}
    >
      <figure style={figureStyles}>
        <img
          style={imageStyles}
          alt={title}
          src={image}
        />
      </figure>

      <div style={contentWrapperStyles}>
        <BadgeText variant="outline" size="sm">
          {badgeText}
        </BadgeText>

        <div style={contentInnerStyles}>
          <div style={textOuterStyles}>
            <div style={textInnerStyles}>
              <h2 style={titleStyles}>
                {title}
              </h2>

              {description && (
                <p style={descriptionStyles}>
                  {description}
                </p>
              )}
            </div>
          </div>

          <div style={buttonContainerStyles}>
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