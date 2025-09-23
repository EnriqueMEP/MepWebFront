import React, { useRef, useState, useEffect } from 'react';
import { useComponentColors } from '../../../foundations/theme-hooks.js';
import { textStyles } from '../../../foundations/typography.js';
import Icon from '../../../foundations/icons/Icon.jsx';

/**
 * ButtonOutlineLg - Botón Outline Large con sistema semántico
 * Usa tokens semánticos adaptativos para light/dark mode
 * Soporta estados: normal, hover, selected, disabled
 * Background transparente, border color igual al texto
 */
export const ButtonOutlineLg = ({
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

  // Obtener colores semánticos para outline button
  const outlineColors = useComponentColors('buttonOutline');
  const outlineHoverColors = useComponentColors('buttonOutlineHover');
  const outlineSelectedColors = useComponentColors('buttonOutlineSelected');
  const outlineDisabledColors = useComponentColors('buttonOutlineDisabled');

  // Definir colores base según el estado actual (sin hover)
  const getBaseColors = () => {
    if (disabled) {
      // Estado deshabilitado: usar tokens específicos de disabled
      return { 
        color: outlineDisabledColors.text, 
        borderColor: outlineDisabledColors.border,
        backgroundColor: 'transparent'
      };
    }
    if (selected) {
      // Estado seleccionado: usar tokens específicos de selected
      return { 
        color: outlineSelectedColors.text, 
        borderColor: outlineSelectedColors.border,
        backgroundColor: 'transparent'
      };
    }
    // Estado normal: usar colores default
    return { 
      color: outlineColors.text, 
      borderColor: outlineColors.border,
      backgroundColor: 'transparent'
    };
  };

  // Definir colores de hover según el estado actual
  const getHoverColors = () => {
    if (disabled) {
      return getBaseColors(); // Sin cambios si está disabled
    }
    if (selected) {
      return getBaseColors(); // Sin cambios si está selected
    }
    // Estado normal hover: usar tokens específicos de hover
    return {
      color: outlineHoverColors.text,
      borderColor: outlineHoverColors.border,
      backgroundColor: 'transparent'
    };
  };

  const baseColors = getBaseColors();
  const hoverColors = getHoverColors();

  // Estado para color actual del ícono
  const [currentIconColor, setCurrentIconColor] = useState(baseColors.color);

  // Sincronizar color del ícono cuando cambien los props
  useEffect(() => {
    setCurrentIconColor(baseColors.color);
  }, [baseColors.color]);

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

    // Colors from semantic tokens - Outline style
    backgroundColor: baseColors.backgroundColor,
    color: baseColors.color,
    borderWidth: '2px',
    borderStyle: 'solid', 
    borderColor: baseColors.borderColor,
    borderRadius: '0', // Rectángulos sin bordes redondeados

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
      // Aplicar colores de hover según el estado actual
      buttonRef.current.style.color = hoverColors.color;
      buttonRef.current.style.borderColor = hoverColors.borderColor;
      buttonRef.current.style.backgroundColor = hoverColors.backgroundColor;
      setCurrentIconColor(hoverColors.color);
    }
  };

  const handleMouseLeave = () => {
    if (!disabled && !selected && buttonRef.current) {
      // Restaurar colores base según estado actual
      buttonRef.current.style.color = baseColors.color;
      buttonRef.current.style.borderColor = baseColors.borderColor;
      buttonRef.current.style.backgroundColor = baseColors.backgroundColor;
      setCurrentIconColor(baseColors.color);
    }
  };

  const handleClick = (e) => {
    if (!disabled && onClick) onClick(e);
  };

  return (
    <button
      ref={buttonRef}
      className={`btn-outline-lg ${className}`}
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
          color={currentIconColor}
        />
      )}
      <span>{children}</span>
      {rightIcon && (
        <Icon
          name={rightIcon}
          size={20}
          color={currentIconColor}
        />
      )}
    </button>
  );
};

export default ButtonOutlineLg;

