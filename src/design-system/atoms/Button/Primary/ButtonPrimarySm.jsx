import React, { useRef } from 'react';
import { lightTheme } from '../../../foundations/semantic-colors.js';
import { textStyles } from '../../../foundations/typography.js';
import Icon from '../../../foundations/icons/Icon.jsx';

/**
 * ButtonPrimarySm - Botón Primary Small
 * EXACTAMENTE igual al estilo de la raíz pero con semantic-colors
 * Usa el sistema de iconos foundations
 */
export const ButtonPrimarySm = ({
  children = 'Button',
  leftIcon,  // Nombre del icono (string) o null
  rightIcon, // Nombre del icono (string) o null
  onClick,
  disabled = false,
  selected = false,
  className = '',
  style = {},
  ...props
}) => {
  const buttonRef = useRef(null);

  const getColors = () => {
    if (disabled) return lightTheme.buttonPrimaryDisabled;
    if (selected) return lightTheme.buttonPrimarySelected;
    return lightTheme.buttonPrimaryDefault;
  };

  const colors = getColors();

  const buttonStyles = {
    // Layout foundations
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',

    // Size - SM
    height: '32px',
    padding: '8px 12px',
    minWidth: 'fit-content',

    // Colors from foundations (EXACTO como raíz)
    backgroundColor: colors.background,
    color: colors.text,
    border: 'none',
    borderRadius: '0',

    // Typography from foundations
    fontFamily: textStyles.buttonSmall.fontFamily,
    fontSize: textStyles.buttonSmall.fontSize,
    fontWeight: textStyles.buttonSmall.fontWeight,
    lineHeight: textStyles.buttonSmall.lineHeight,

    // Interactions (EXACTO como raíz)
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease-in-out',
    userSelect: 'none',
    outline: 'none',
    opacity: disabled ? 0.6 : 1,

    // Custom styles
    ...style
  };

  const handleMouseEnter = () => {
    if (!disabled && !selected && buttonRef.current) {
      buttonRef.current.style.backgroundColor = lightTheme.buttonPrimaryHover.background;
    }
  };

  const handleMouseLeave = () => {
    if (!disabled && !selected && buttonRef.current) {
      buttonRef.current.style.backgroundColor = lightTheme.buttonPrimaryDefault.background;
    }
  };

  const handleClick = (e) => {
    if (!disabled && onClick) onClick(e);
  };

  return (
    <button
      ref={buttonRef}
      className={`btn-primary-sm ${className}`}
      style={buttonStyles}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      disabled={disabled}
      type="button"
      {...props}
    >
      {leftIcon && (
        <Icon
          name={leftIcon}
          size={16}
          color={colors.text}
        />
      )}
      <span>{children}</span>
      {rightIcon && (
        <Icon
          name={rightIcon}
          size={16}
          color={colors.text}
        />
      )}
    </button>
  );
};

export default ButtonPrimarySm;