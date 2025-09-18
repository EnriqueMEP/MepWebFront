/**
 * Design System Color Tokens - MEP Frontend
 * 
 * Colores primitivos extraídos exactamente de Figma Design System
 * Valores sin modificaciones, convertidos directamente de rgba() a hex
 * 
 * @fileoverview Tokens de color para el sistema de diseño
 * @author MEP Team
 * @version 1.0.0
 */

/**
 * Colores primitivos - Paleta PRIMARY (Olive)
 * 
 * Paleta principal del sistema de diseño extraída de Figma.
 * Usada para elementos primarios, CTAs principales, navegación principal.
 * 
 * Uso recomendado:
 * - olive.50-200: Fondos sutiles, estados hover suaves
 * - olive.300-500: Elementos interactivos, botones secundarios
 * - olive.600-700: Botones primarios, elementos de navegación activos
 * - olive.800-900: Textos sobre fondos claros, elementos de alta importancia
 * 
 * @example
 * // Importar en componentes
 * import { primitiveColors } from '@design-system/tokens/colors'
 * 
 * // Usar en CSS-in-JS
 * backgroundColor: primitiveColors.olive[600]
 * 
 * // Usar como variable CSS
 * background-color: var(--color-olive-600);
 */
export const primitiveColors = {
  olive: {
    50:  '#f2f8f0',  // rgba(242, 248, 240, 1) - Fondo más claro
    100: '#ddeeda',  // rgba(221, 238, 216, 1) - Fondo sutil
    200: '#bbddb1',  // rgba(187, 221, 177, 1) - Fondo suave
    300: '#92c482',  // rgba(146, 196, 130, 1) - Elementos sutiles
    400: '#629d54',  // rgba(98, 157, 84, 1)  - Elementos interactivos
    500: '#3f762f',  // rgba(63, 118, 47, 1)  - Color base
    600: '#356028',  // rgba(53, 96, 40, 1)   - Botones primarios
    700: '#294a20',  // rgba(41, 74, 32, 1)   - Estados hover/activo
    800: '#1D3518',  // rgba(29, 53, 24, 1)   - Textos importantes
    900: '#12210f',  // rgba(18, 33, 15, 1)   - Textos de máximo contraste
  },

  /**
   * Paleta SECONDARY (Green)
   * 
   * Paleta secundaria del sistema de diseño extraída de Figma.
   * Usada para elementos secundarios, acciones de apoyo, estados de éxito.
   * 
   * Uso recomendado:
   * - green.50-200: Fondos de notificaciones positivas, estados sutiles
   * - green.300-500: Badges, elementos de éxito, indicadores positivos
   * - green.600-700: Botones secundarios, enlaces importantes
   * - green.800-900: Textos sobre fondos claros en contextos de éxito
   */
  green: {
    50:  '#f3faf0',  // rgba(243, 250, 240, 1) - Fondo más claro
    100: '#def2da',  // rgba(222, 242, 218, 1) - Fondo sutil
    200: '#bee6b5',  // rgba(190, 230, 181, 1) - Fondo suave
    300: '#97d28c',  // rgba(151, 210, 140, 1) - Elementos sutiles
    400: '#6fbc5e',  // rgba(111, 188, 94, 1)  - Elementos interactivos
    500: '#53af32',  // rgba(83, 175, 50, 1)   - Color base
    600: '#44962a',  // rgba(68, 150, 42, 1)   - Botones secundarios
    700: '#367b23',  // rgba(54, 123, 35, 1)   - Estados hover/activo
    800: '#285e1a',  // rgba(40, 94, 26, 1)    - Textos importantes
    900: '#1b4012',  // rgba(27, 64, 18, 1)    - Textos de máximo contraste
  },

  /**
   * Paleta ERROR (Red)
   * 
   * Paleta de error del sistema de diseño extraída de Figma.
   * Usada para estados de error, validaciones fallidas, alertas críticas.
   * 
   * Uso recomendado:
   * - red.50-200: Fondos de notificaciones de error, estados sutiles
   * - red.300-500: Badges de error, botones destructivos
   * - red.600-700: Botones de acción crítica, estados de peligro
   * - red.800-900: Textos sobre fondos claros en contextos de error
   */
  red: {
    50:  '#fef2f2',  // rgba(254, 242, 242, 1) - Fondo más claro
    100: '#fde0e0',  // rgba(253, 224, 224, 1) - Fondo sutil
    200: '#f9bdbb',  // rgba(249, 189, 187, 1) - Fondo suave
    300: '#f28b82',  // rgba(242, 139, 130, 1) - Elementos sutiles
    400: '#ec6259',  // rgba(236, 98, 89, 1)   - Elementos interactivos
    500: '#e53935',  // rgba(229, 57, 53, 1)   - Color base
    600: '#c62828',  // rgba(198, 40, 40, 1)   - Botones de error
    700: '#b71c1c',  // rgba(183, 28, 28, 1)   - Estados hover/activo
    800: '#8e1515',  // rgba(142, 21, 21, 1)   - Textos importantes
    900: '#610e0e',  // rgba(97, 14, 14, 1)    - Textos de máximo contraste
  },

  /**
   * Paleta SUCCESS (Cactus)
   * 
   * Paleta de éxito del sistema de diseño extraída de Figma.
   * Usada para estados de éxito, confirmaciones, procesos completados.
   * 
   * Uso recomendado:
   * - cactus.50-200: Fondos de notificaciones de éxito, estados sutiles
   * - cactus.300-500: Badges de éxito, botones de confirmación
   * - cactus.600-700: Botones de acción positiva, estados de progreso
   * - cactus.800-900: Textos sobre fondos claros en contextos de éxito
   */
  cactus: {
    50:  '#f0fdf4',  // rgba(240, 253, 244, 1) - Fondo más claro
    100: '#dcfce7',  // rgba(220, 252, 231, 1) - Fondo sutil
    200: '#bbf7d0',  // rgba(187, 247, 208, 1) - Fondo suave
    300: '#86efac',  // rgba(134, 239, 172, 1) - Elementos sutiles
    400: '#4ade80',  // rgba(74, 222, 128, 1)  - Elementos interactivos
    500: '#22c55e',  // rgba(34, 197, 94, 1)   - Color base
    600: '#16a34a',  // rgba(22, 163, 74, 1)   - Botones de éxito
    700: '#15803d',  // rgba(21, 128, 61, 1)   - Estados hover/activo
    800: '#166534',  // rgba(22, 101, 52, 1)   - Textos importantes
    900: '#145329',  // rgba(20, 83, 45, 1)    - Textos de máximo contraste
  },

  /**
   * Paleta WARNING (Orange)
   * 
   * Paleta de warning del sistema de diseño extraída de Figma.
   * Usada para estados de advertencia, alertas informativas, precauciones.
   * 
   * Uso recomendado:
   * - orange.50-200: Fondos de notificaciones de warning, estados sutiles
   * - orange.300-500: Badges de advertencia, botones informativos
   * - orange.600-700: Botones de precaución, estados de atención
   * - orange.800-900: Textos sobre fondos claros en contextos de warning
   */
  orange: {
    50:  '#fffbea',  // rgba(255, 251, 234, 1) - Fondo más claro
    100: '#fff3c4',  // rgba(255, 243, 196, 1) - Fondo sutil
    200: '#ffe68a',  // rgba(255, 230, 138, 1) - Fondo suave
    300: '#ffd54f',  // rgba(255, 213, 79, 1)  - Elementos sutiles
    400: '#fbc02d',  // rgba(251, 192, 45, 1)  - Elementos interactivos
    500: '#f9a825',  // rgba(249, 168, 37, 1)  - Color base
    600: '#f57f17',  // rgba(245, 127, 23, 1)  - Botones de warning
    700: '#e65100',  // rgba(230, 81, 0, 1)    - Estados hover/activo
    800: '#bf360c',  // rgba(191, 54, 12, 1)   - Textos importantes
    900: '#872500',  // rgba(135, 37, 0, 1)    - Textos de máximo contraste
  },

  /**
   * Paleta NEUTRAL
   * 
   * Paleta neutral del sistema de diseño extraída de Figma.
   * Usada para textos, bordes, fondos neutros, elementos estructurales.
   * 
   * Uso recomendado:
   * - neutral.50-200: Fondos de página, fondos sutiles
   * - neutral.300-400: Bordes, divisores, elementos deshabilitados
   * - neutral.500-600: Textos secundarios, placeholders
   * - neutral.700-900: Textos primarios, encabezados, elementos de alto contraste
   */
  neutral: {
    50:  '#fafafa',  // rgba(250, 250, 250, 1) - Fondo más claro
    100: '#f5f5f5',  // rgba(245, 245, 245, 1) - Fondo sutil
    200: '#e5e5e5',  // rgba(229, 229, 229, 1) - Fondo suave
    300: '#d4d4d4',  // rgba(212, 212, 212, 1) - Elementos sutiles
    400: '#a3a3a3',  // rgba(163, 163, 163, 1) - Elementos deshabilitados
    500: '#737373',  // rgba(115, 115, 115, 1) - Textos secundarios
    600: '#525252',  // rgba(82, 82, 82, 1)    - Textos importantes
    700: '#404040',  // rgba(64, 64, 64, 1)    - Textos primarios
    800: '#262626',  // rgba(38, 38, 38, 1)    - Encabezados
    900: '#171717',  // rgba(23, 23, 23, 1)    - Textos de máximo contraste
  },
};

/**
 * Exportación por defecto
 * Estructura simplificada para fácil importación
 * 
 * @example
 * // Importar paletas específicas
 * import { primitiveColors } from '@design-system/tokens/colors'
 * const primaryColor = primitiveColors.olive[600]
 * const secondaryColor = primitiveColors.green[500]
 * const errorColor = primitiveColors.red[500]
 * const successColor = primitiveColors.cactus[500]
 * const warningColor = primitiveColors.orange[500]
 * const neutralColor = primitiveColors.neutral[600]
 * 
 * // Importar todo
 * import colors from '@design-system/tokens/colors'
 * const primaryColor = colors.olive[600]
 * const errorColor = colors.red[500]
 * 
 * // Paletas disponibles:
 * // - olive (primary): Paleta principal del sistema
 * // - green (secondary): Paleta secundaria
 * // - red (error): Estados de error y alertas críticas
 * // - cactus (success): Estados de éxito y confirmaciones
 * // - orange (warning): Estados de advertencia y precauciones
 * // - neutral: Textos, bordes y elementos estructurales
 */

// Export for ES6 modules
export default primitiveColors;

// Also make available globally for non-module usage
if (typeof window !== 'undefined') {
    window.primitiveColors = primitiveColors;
}
