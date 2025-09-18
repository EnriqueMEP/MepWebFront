import React, { useRef } from 'react';
import { primitiveColors } from '../../../foundations/colors.js';
import { textStyles } from '../../../foundations/typography.js';
import Icon from '../../../foundations/icons/Icon.jsx';

/**
 * ButtonGhostLg - Botón Ghost Large
 * Fondo y borde transparente por defecto
 * Solo muestra borde inferior cuando está seleccionado
 * Usa el sistema de iconos foundations
 * Colores olive: Default olive[500], Hover olive[700], Selected olive[500], Disabled olive[300]
 */
export const ButtonGhostLg = ({
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
    if (disabled) return { color: primitiveColors.olive[300] };
    if (selected) return { color: primitiveColors.olive[500] };
    return { color: primitiveColors.olive[500] };
  };

  const colors = getColors();

  const buttonStyles = {
    // Layout foundations
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',

    // Size - LG
    height: '48px',
    padding: '16px 20px',
    minWidth: 'fit-content',

    // Colors from foundations - Ghost style
    backgroundColor: 'transparent',
    color: colors.color,
    border: 'none',
    borderRadius: '0',

    // Borde inferior solo cuando está seleccionado
    borderBottom: selected ? `2px solid ${colors.color}` : '2px solid transparent',

    // Typography from foundations
    fontFamily: textStyles.buttonLarge.fontFamily,
    fontSize: textStyles.buttonLarge.fontSize,
    fontWeight: textStyles.buttonLarge.fontWeight,
    lineHeight: textStyles.buttonLarge.lineHeight,

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
    }
  };

  const handleMouseLeave = () => {
    if (!disabled && !selected && buttonRef.current) {
      buttonRef.current.style.color = primitiveColors.olive[500];
    }
  };

  const handleClick = (e) => {
    if (!disabled && onClick) onClick(e);
  };

  return (
    <button
      ref={buttonRef}
      className={`btn-ghost-lg ${className}`}
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

export default ButtonGhostLg;
