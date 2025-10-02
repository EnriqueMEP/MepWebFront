import React from 'react';
import { useComponentColors } from '../../foundations/theme-hooks.js';

/**
 * BadgeNumber - Contador numérico dentro del badge
 * 
 * Características:
 * - Badge cuadrado/rectangular con número
 * - 4 tamaños: sm, md, lg, xl con diferentes paddings y fuentes
 * - 3 variantes: primary, secondary, outline
 * - Soporte para light/dark mode automático
 * 
 * Casos de uso:
 * - Indicar cantidad de notificaciones o ítems pendientes
 * - Usar en componentes de navegación o íconos de acción (ej. carrito, bandeja de entrada)
 * - Se recomienda limitar el número de dígitos (ej. 99+) para mantener legibilidad
 * 
 * @param {string|number} children - Número a mostrar (se recomienda 1-2 dígitos)
 * @param {string} variant - Variante del badge: 'primary' | 'secondary' | 'outline'
 * @param {string} size - Tamaño del badge: 'sm' | 'md' | 'lg' | 'xl'
 * @param {string} className - Clases CSS adicionales
 * @param {object} style - Estilos inline adicionales
 * @param {object} props - Props adicionales HTML
 */
const BadgeNumber = ({
  children = '1',
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
      padding: 4,
      fontSize: 10,
      fontWeight: '500',
      lineHeight: '16px',
      minWidth: 16
    },
    md: { 
      height: 20,
      padding: 6,
      fontSize: 12,
      fontWeight: '500',
      lineHeight: '16px',
      minWidth: 20
    },
    lg: { 
      height: 24,
      padding: 8,
      fontSize: 14,
      fontWeight: '500',
      lineHeight: '20px',
      minWidth: 24
    },
    xl: { 
      height: 32,
      padding: 12,
      fontSize: 14,
      fontWeight: '700',
      lineHeight: '20px',
      minWidth: 32
    }
  };

  const currentSize = sizeConfig[size] || sizeConfig.md;

  // Estilos del badge
  const badgeStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: currentSize.height,
    minWidth: currentSize.minWidth,
    padding: currentSize.padding,
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
    gap: 10, // Según especificación
    // Para variante outline
    ...(variant === 'outline' && {
      outline: `1px solid ${colors.borderColor}`,
      outlineOffset: '-1px',
      backgroundColor: 'transparent'
    }),
    ...style
  };

  // Formatear número para mostrar (limitar dígitos)
  const displayNumber = () => {
    const num = parseInt(children, 10);
    if (isNaN(num)) return children;
    return num > 99 ? '99+' : num.toString();
  };

  return (
    <span
      className={`badge-number badge-number-${variant} badge-number-${size} ${className}`}
      style={badgeStyles}
      role="status"
      aria-label={`${displayNumber()} notifications`}
      {...props}
    >
      {displayNumber()}
    </span>
  );
};

export default BadgeNumber;