import React from 'react';
import { useComponentColors } from '../../foundations/theme-hooks.js';

/**
 * BadgeText - Etiqueta con texto corto, útil para clasificar o resaltar
 * 
 * Características:
 * - Etiqueta rectangular con texto
 * - 4 tamaños: sm, md, lg, xl con diferentes paddings y fuentes
 * - 3 variantes: primary, secondary, outline
 * - Soporte para light/dark mode automático
 * 
 * Casos de uso:
 * - Mostrar categorías o estados nominales (ej. Beta, Nuevo, Activo)
 * - Resaltar prioridad o etiquetas contextuales
 * - Usar tamaño sm para tablas, md o lg en contextos destacados
 * 
 * @param {string} children - Texto del badge
 * @param {string} variant - Variante del badge: 'primary' | 'secondary' | 'outline'
 * @param {string} size - Tamaño del badge: 'sm' | 'md' | 'lg' | 'xl'
 * @param {string} className - Clases CSS adicionales
 * @param {object} style - Estilos inline adicionales
 * @param {object} props - Props adicionales HTML
 */
const BadgeText = ({
  children = 'Label',
  variant = 'primary',
  size = 'md',
  className = '',
  style = {},
  ...props
}) => {
  // Obtener colores del sistema semántico
  const colors = useComponentColors(`badge${variant.charAt(0).toUpperCase() + variant.slice(1)}`);

  // Configuración de tamaños siguiendo la especificación exacta
  const sizeConfig = {
    sm: { 
      height: 16,
      paddingX: 6,
      paddingY: 2,
      fontSize: 10,
      fontWeight: '500',
      lineHeight: '16px'
    },
    md: { 
      height: 20,
      paddingX: 12,
      paddingY: 4,
      fontSize: 10,
      fontWeight: '700',
      lineHeight: '16px'
    },
    lg: { 
      height: 24,
      paddingX: 16,
      paddingY: 4,
      fontSize: 12,
      fontWeight: '700',
      lineHeight: '16px'
    },
    xl: { 
      height: 32,
      paddingX: 20,
      paddingY: 4,
      fontSize: 14,
      fontWeight: '700',
      lineHeight: '20px'
    }
  };

  const currentSize = sizeConfig[size] || sizeConfig.md;

  // Estilos del badge
  const badgeStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: currentSize.height,
    paddingLeft: currentSize.paddingX,
    paddingRight: currentSize.paddingX,
    paddingTop: currentSize.paddingY,
    paddingBottom: currentSize.paddingY,
    backgroundColor: colors.backgroundColor,
    color: colors.color,
    borderRadius: 2,
    fontSize: currentSize.fontSize,
    fontWeight: currentSize.fontWeight,
    lineHeight: currentSize.lineHeight,
    fontFamily: 'Ubuntu, sans-serif',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    userSelect: 'none',
    // Para variante outline
    ...(variant === 'outline' && {
      outline: `1px solid ${colors.borderColor}`,
      outlineOffset: '-1px',
      backgroundColor: 'transparent'
    }),
    ...style
  };

  return (
    <span
      className={`badge-text badge-text-${variant} badge-text-${size} ${className}`}
      style={badgeStyles}
      role="status"
      aria-label={`Badge ${variant}: ${children}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default BadgeText;