import React, { useRef } from 'react';
import { primitiveColors } from '../../../foundations/colors.js';
import { textStyles } from '../../../foundations/typography.js';
import { lightElevation } from '../../../foundations/elevation.js';
import Icon from '../../../foundations/icons/Icon.jsx';

/**
 * ButtonOutlineXl - Botón Outline Extra Large
 * Extrae todos los valores de foundations (sin hardcodeo)
 * Usa el sistema de iconos foundations
 * Colores: Default olive[500], Hover olive[700], Selected olive[500], Disabled olive[300]
 * Fondo transparente con borde
 */
export const ButtonOutlineXl = ({
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

    // Size - XL
    height: '56px',
    padding: '20px 24px',
    minWidth: 'fit-content',

    // Colors from foundations - Outline style
    backgroundColor: 'transparent',
    color: colors.color,
    borderWidth: '1px',
    borderStyle: 'solid', 
    borderColor: colors.borderColor,
    borderRadius: '0', // Rectángulos sin bordes redondeados

    // Typography from foundations
    fontFamily: textStyles.buttonXL.fontFamily,
    fontSize: textStyles.buttonXL.fontSize,
    fontWeight: textStyles.buttonXL.fontWeight,
    lineHeight: textStyles.buttonXL.lineHeight,

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
      buttonRef.current.style.color = primitiveColors.olive[700]; // #4a5c2a
      buttonRef.current.style.borderColor = primitiveColors.olive[700];
    }
  };

  const handleMouseLeave = () => {
    if (!disabled && !selected && buttonRef.current) {
      buttonRef.current.style.color = primitiveColors.olive[500]; // #6b7c3c
      buttonRef.current.style.borderColor = primitiveColors.olive[500];
    }
  };

  const handleClick = (e) => {
    if (!disabled && onClick) onClick(e);
  };

  return (
    <button
      ref={buttonRef}
      className={`btn-outline-xl ${className}`}
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
          size={20}
          color={colors.color}
        />
      )}
      <span>{children}</span>
      {rightIcon && (
        <Icon
          name={rightIcon}
          size={20}
          color={colors.color}
        />
      )}
    </button>
  );
};

export default ButtonOutlineXl;
