import React, { useRef } from 'react';
import { primitiveColors } from '../../../foundations/colors.js';
import { textStyles } from '../../../foundations/typography.js';
import { lightElevation } from '../../../foundations/elevation.js';
import Icon from '../../../foundations/icons/Icon.jsx';

/**
 * ButtonOutlineMd - Botón Outline Medium
 * Extrae todos los valores de foundations (sin hardcodeo)
 * Usa el sistema de iconos foundations
 * Colores olive: Default olive[500], Hover olive[700], Selected olive[500], Disabled olive[300]
 * Background transparente, border color igual al texto
 * Border radius: 0 (rectángulos sin bordes redondeados)
 */
export const ButtonOutlineMd = ({
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
    if (disabled) return { color: primitiveColors.olive[300], borderColor: primitiveColors.olive[300] };
    if (selected) return { color: primitiveColors.olive[500], borderColor: primitiveColors.olive[500] };
    return { color: primitiveColors.olive[500], borderColor: primitiveColors.olive[500] };
  };

  const colors = getColors();

  const buttonStyles = {
    // Layout foundations
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',

    // Size - MD
    height: '40px',
    padding: '12px 16px',
    minWidth: 'fit-content',

    // Colors from foundations - Outline style
    backgroundColor: 'transparent',
    color: colors.color,
    borderWidth: '1px',
    borderStyle: 'solid', 
    borderColor: colors.borderColor,
    borderRadius: '0', // Rectángulos sin bordes redondeados

    // Typography from foundations
    fontFamily: textStyles.buttonMedium.fontFamily,
    fontSize: textStyles.buttonMedium.fontSize,
    fontWeight: textStyles.buttonMedium.fontWeight,
    lineHeight: textStyles.buttonMedium.lineHeight,

    // Elevation from foundations
    boxShadow: lightElevation.surface,

    // Interactions
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
      buttonRef.current.style.color = primitiveColors.olive[700];
      buttonRef.current.style.borderColor = primitiveColors.olive[700];
    }
  };

  const handleMouseLeave = () => {
    if (!disabled && !selected && buttonRef.current) {
      buttonRef.current.style.color = primitiveColors.olive[500];
      buttonRef.current.style.borderColor = primitiveColors.olive[500];
    }
  };

  const handleClick = (e) => {
    if (!disabled && onClick) onClick(e);
  };

  return (
    <button
      ref={buttonRef}
      className={`btn-outline-md ${className}`}
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
          color={colors.color}
        />
      )}
      <span>{children}</span>
      {rightIcon && (
        <Icon
          name={rightIcon}
          size={16}
          color={colors.color}
        />
      )}
    </button>
  );
};

export default ButtonOutlineMd;