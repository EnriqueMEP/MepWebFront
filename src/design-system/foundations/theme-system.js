/**
 * Theme System - Punto de entrada principal del sistema de temas
 * 
 * Exporta todos los componentes, hooks y utilidades del sistema de temas
 * para facilitar su uso en la aplicación.
 * 
 * @fileoverview Sistema completo de temas
 * @author MEP Team
 * @version 2.0.0
 */

// Context y Provider
export { default as ThemeProvider, ThemeContext } from './ThemeContext.jsx';

// Hooks
export {
  useTheme,
  useComponentColors,
  useThemeStyles,
  useThemeChange,
  useThemeInfo,
  useSemanticTokens
} from './theme-hooks.js';

// HOC
export { withTheme } from './theme-hoc.jsx';

// Tokens y utilidades
export {
  lightTheme,
  darkTheme,
  semanticColors,
  getSemanticTokens,
  getComponentColors,
  generateSemanticCSSVariables,
  componentRoleMapping
} from './semantic-colors.js';

// Re-exportar colores primitivos para compatibilidad
export { primitiveColors } from './colors.js';