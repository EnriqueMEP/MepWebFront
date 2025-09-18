/**
 * SEMANTIC COLORS - Sistema de colores semánticos
 * 
 * Este archivo define el mapeo de colores primitivos a roles semánticos
 * basado en la extracción exacta de Figma para temas light y dark.
 * 
 * Estructura:
 * - Cada color semántico mapea a tokens primitivos específicos
 * - Soporte para múltiples temas (light, dark)
 * - Roles semánticos claros para diferentes contextos de uso
 * 
 * @fileoverview Tokens semánticos extraídos de Figma
 * @author Sistema de Diseño MEP
 * @version 1.0.0
 */

import { primitiveColors } from './colors.js';

/**
 * LIGHT THEME - Colores semánticos para tema claro
 * 
 * Mapeo exacto extraído de Figma para el tema light.
 * Cada rol semántico utiliza tokens primitivos específicos.
 */
export const lightTheme = {
  // ==========================================
  // COLORES PRIMARIOS
  // ==========================================
  
  /**
   * Primary - Color principal del sistema
   * Usado para: Botones principales, enlaces importantes, elementos destacados
   */
  primary: primitiveColors.olive[500],        // --dl-color-olive-olive500
  onPrimary: primitiveColors.olive[50],       // --dl-color-olive-olive50

  /**
   * Primary Container - Contenedores con color primario
   * Usado para: Fondos de secciones principales, tarjetas destacadas
   */
  primaryContainer: primitiveColors.olive[300],     // --dl-color-olive-olive300
  onPrimaryContainer: primitiveColors.olive[700],   // --dl-color-olive-olive700

  /**
   * Primary Fixed - Colores primarios fijos (no cambian entre temas)
   * Usado para: Elementos que mantienen consistencia visual entre temas
   */
  primaryFixed: primitiveColors.olive[200],         // --dl-color-olive-olive200
  primaryFixedDim: primitiveColors.olive[300],      // --dl-color-olive-olive300
  onPrimaryFixed: primitiveColors.olive[900],       // --dl-color-olive-olive900
  onPrimaryFixedVariant: primitiveColors.green[700], // --dl-color-green-green700

  // ==========================================
  // COLORES SECUNDARIOS
  // ==========================================
  
  /**
   * Secondary - Color secundario del sistema
   * Usado para: Botones secundarios, elementos de apoyo
   */
  secondary: primitiveColors.green[500],      // rgba(83, 175, 50, 1)
  onSecondary: primitiveColors.green[50],     // --dl-color-green-green50

  /**
   * Secondary Container - Contenedores con color secundario
   * Usado para: Fondos de secciones secundarias, elementos de apoyo
   */
  secondaryContainer: primitiveColors.green[200],   // --dl-color-green-green200
  onSecondaryContainer: primitiveColors.green[700], // --dl-color-green-green700

  /**
   * Secondary Fixed - Colores secundarios fijos
   * Usado para: Elementos secundarios que mantienen consistencia visual
   */
  secondaryFixed: primitiveColors.green[100],       // --dl-color-green-green100
  secondaryFixedDim: primitiveColors.green[300],    // --dl-color-green-green300
  onSecondaryFixed: primitiveColors.green[800],     // --dl-color-green-green800

  // ==========================================
  // COLORES DE SUPERFICIE
  // ==========================================
  
  /**
   * Surface - Colores de superficie y fondos
   * Usado para: Fondos de página, tarjetas, modales
   */
  surfaceDim: primitiveColors.neutral[200],   // rgba(224, 224, 224, 1)
  surface: primitiveColors.neutral[100],      // rgba(245, 245, 245, 1)
  onSurface: primitiveColors.neutral[800],    // rgba(33, 33, 33, 1)

  // ==========================================
  // COLORES DE ESTADO - ERROR
  // ==========================================
  
  /**
   * Error - Colores para estados de error
   * Usado para: Validaciones fallidas, alertas críticas, botones destructivos
   */
  error: primitiveColors.red[500],            // --dl-color-red-red500
  onError: primitiveColors.red[50],           // rgba(254, 242, 242, 1)
  
  /**
   * Error Container - Contenedores con contexto de error
   * Usado para: Fondos de notificaciones de error, secciones de alerta
   */
  errorContainer: primitiveColors.red[100],   // --dl-color-red-red100
  onErrorContainer: primitiveColors.red[800], // rgba(142, 21, 21, 1)

  // ==========================================
  // COLORES DE ESTADO - SUCCESS
  // ==========================================
  
  /**
   * Success - Colores para estados de éxito
   * Usado para: Confirmaciones, procesos completados, feedback positivo
   */
  success: primitiveColors.cactus[500],            // --dl-color-cactus-cactus500
  onSuccess: primitiveColors.cactus[50],           // --dl-color-cactus-cactus50
  
  /**
   * Success Container - Contenedores con contexto de éxito
   * Usado para: Fondos de notificaciones de éxito, secciones de confirmación
   */
  successContainer: primitiveColors.cactus[200],   // --dl-color-cactus-cactus200
  onSuccessContainer: primitiveColors.cactus[800], // --dl-color-cactus-cactus800
};

/**
 * DARK THEME - Colores semánticos para tema oscuro
 * 
 * Mapeo exacto extraído de Figma para el tema dark.
 * Los valores están invertidos respecto al tema light para mejor contraste.
 */
export const darkTheme = {
  // ==========================================
  // COLORES PRIMARIOS
  // ==========================================
  
  /**
   * Primary - Color principal del sistema (tema oscuro)
   */
  primary: primitiveColors.olive[200],        // --dl-color-olive-olive200
  onPrimary: primitiveColors.olive[700],      // --dl-color-olive-olive700

  /**
   * Primary Container - Contenedores con color primario (tema oscuro)
   */
  primaryContainer: primitiveColors.olive[600],     // --dl-color-olive-olive600
  onPrimaryContainer: primitiveColors.olive[100],   // --dl-color-olive-olive100

  /**
   * Primary Fixed - Colores primarios fijos (consistentes entre temas)
   */
  primaryFixed: primitiveColors.green[100],         // rgba(219, 248, 212, 1)
  primaryFixedDim: primitiveColors.green[300],      // rgba(184, 236, 174, 1)
  onPrimaryFixed: primitiveColors.green[800],       // rgba(42, 90, 23, 1)
  onPrimaryFixedVariant: primitiveColors.green[600], // rgba(66, 145, 40, 1)

  // ==========================================
  // COLORES SECUNDARIOS
  // ==========================================
  
  /**
   * Secondary - Color secundario del sistema (tema oscuro)
   */
  secondary: primitiveColors.green[200],      // --dl-color-green-green200
  onSecondary: primitiveColors.green[700],    // --dl-color-green-green700

  /**
   * Secondary Container - Contenedores con color secundario (tema oscuro)
   */
  secondaryContainer: primitiveColors.green[600],   // --dl-color-green-green600
  onSecondaryContainer: primitiveColors.green[100], // --dl-color-green-green100

  /**
   * Secondary Fixed - Colores secundarios fijos (tema oscuro)
   */
  secondaryFixed: primitiveColors.green[300],       // rgba(141, 220, 126, 1)
  secondaryFixedDim: primitiveColors.green[300],    // rgba(141, 220, 126, 1)
  onSecondaryFixed: primitiveColors.green[700],     // rgba(53, 116, 30, 1)

  // ==========================================
  // COLORES DE SUPERFICIE
  // ==========================================
  
  /**
   * Surface - Colores de superficie y fondos (tema oscuro)
   */
  surfaceDim: primitiveColors.neutral[800],   // rgba(33, 33, 33, 1) - Fondo del contenedor principal
  surface: primitiveColors.neutral[800],      // rgba(33, 33, 33, 1)
  onSurface: primitiveColors.neutral[50],     // rgba(250, 250, 250, 1)

  // ==========================================
  // COLORES DE ESTADO - ERROR (mismo que light)
  // ==========================================
  
  /**
   * Error - Colores para estados de error (tema oscuro)
   */
  error: primitiveColors.red[500],            // --dl-color-red-red500
  onError: primitiveColors.red[50],           // rgba(254, 242, 242, 1)
  
  /**
   * Error Container - Contenedores con contexto de error (tema oscuro)
   */
  errorContainer: primitiveColors.red[100],   // --dl-color-red-red100
  onErrorContainer: primitiveColors.red[800], // rgba(142, 21, 21, 1)

  // ==========================================
  // COLORES DE ESTADO - SUCCESS (mismo que light)
  // ==========================================
  
  /**
   * Success - Colores para estados de éxito (tema oscuro)
   */
  success: primitiveColors.cactus[500],            // --dl-color-cactus-cactus500
  onSuccess: primitiveColors.cactus[50],           // --dl-color-cactus-cactus50
  
  /**
   * Success Container - Contenedores con contexto de éxito (tema oscuro)
   */
  successContainer: primitiveColors.cactus[200],   // --dl-color-cactus-cactus200
  onSuccessContainer: primitiveColors.cactus[800], // --dl-color-cactus-cactus800
};

/**
 * SEMANTIC COLORS - Objeto principal de exportación
 * 
 * Contiene todos los temas disponibles para fácil acceso.
 * 
 * @example
 * // Importar tema específico
 * import { lightTheme, darkTheme } from '@design-system/tokens/semantic-colors'
 * 
 * // Usar en componentes
 * const primaryColor = lightTheme.primary
 * const errorColor = lightTheme.error
 * 
 * // Cambio dinámico de tema
 * const currentTheme = isDark ? darkTheme : lightTheme
 * backgroundColor: currentTheme.surface
 */
export const semanticColors = {
  light: lightTheme,
  dark: darkTheme,
};

/**
 * Exportación por defecto
 * Facilita la importación del sistema completo
 */
export default semanticColors;

// Also make available globally for non-module usage
if (typeof window !== 'undefined') {
    window.lightTheme = lightTheme;
    window.darkTheme = darkTheme;
    window.semanticColors = semanticColors;
}