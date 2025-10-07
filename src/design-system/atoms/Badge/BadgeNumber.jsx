import React from 'react';
import { useComponentColors } from '../../foundations/theme-hooks.js';
import { injectResponsiveClasses, getTypographyClass } from '../../foundations/responsive-classes.js';

/**
 * BadgeNumber - Contador numérico dentro del badge
 * 
 * Características:
 * - Badge cuadrado/rectangular con número
 * - 4 tamaños: sm, md, lg, xl con diferentes paddings y fuentes
 * - 3 variantes: primary, secondary, outline
 * - Soporte para light/dark mode automático
 * - ACTUALIZADO: Usa clases CSS escalables como Home para comportamiento de zoom consistente
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
  // Inyectar clases CSS responsivas al montar
  React.useEffect(() => {
    injectResponsiveClasses();
  }, []);

  // Obtener colores del sistema semántico
  const colors = useComponentColors(`badge${variant.charAt(0).toUpperCase() + variant.slice(1)}`);

  // Obtener clases CSS escalables
  const typographyClass = getTypographyClass('badge', size);
  const sizeClass = `badge-size-${size}`;

  // Procesar el número para mostrar
  const displayNumber = typeof children === 'number' && children > 99 ? '99+' : children;

  // Estilos base mínimos (solo colores y propiedades no escalables)
  const badgeStyles = {
    backgroundColor: colors.backgroundColor,
    color: colors.color,
    fontFamily: 'Ubuntu, sans-serif',
    fontWeight: '500',
    textAlign: 'center',
    // Para variante outline
    ...(variant === 'outline' && {
      outline: `1px solid ${colors.borderColor}`,
      outlineOffset: '-1px',
      backgroundColor: 'transparent'
    }),
    ...style
  };

  // Generar className combinando clases escalables
  const combinedClassName = [
    'component-base',
    'component-flex-center',
    'component-no-wrap',
    typographyClass,
    sizeClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <span
      className={combinedClassName}
      style={badgeStyles}
      role="status"
      aria-label={`Count: ${displayNumber}`}
      {...props}
    >
      {displayNumber}
    </span>
  );
};

export default BadgeNumber;