/**
 * Theme Hooks - Hooks utilitarios para el sistema de temas
 * 
 * Conjunto de hooks personalizados para trabajar con el sistema de temas
 * de manera eficiente y consistente en todos los componentes.
 * 
 * @fileoverview Hooks utilitarios para temas
 * @author MEP Team
 * @version 2.0.0
 */

import { useContext, useMemo, useEffect } from 'react';
import { ThemeContext } from './ThemeContext.jsx';

/**
 * Hook para usar el contexto de tema
 * 
 * @returns {object} Objeto con propiedades y métodos del tema
 * @throws {Error} Si se usa fuera del ThemeProvider
 * 
 * @example
 * const { theme, toggleTheme, tokens, getComponentColors } = useTheme();
 * 
 * // Obtener colores para un componente específico
 * const buttonColors = getComponentColors('buttonPrimary');
 * 
 * // Usar tokens directos
 * const primaryColors = tokens.primary;
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  
  if (!context) {
    throw new Error('useTheme debe usarse dentro de un ThemeProvider');
  }
  
  return context;
};

/**
 * Hook específico para obtener colores de componentes
 * 
 * @param {string} componentRole - Rol del componente
 * @returns {object} Colores {background, text} para el componente
 * 
 * @example
 * const buttonColors = useComponentColors('buttonPrimary');
 * 
 * const buttonStyle = {
 *   backgroundColor: buttonColors.background,
 *   color: buttonColors.text
 * };
 */
export const useComponentColors = (componentRole) => {
  const { getComponentColors } = useTheme();
  return useMemo(() => getComponentColors(componentRole), [getComponentColors, componentRole]);
};

/**
 * Hook para obtener una función que aplica estilos de tema
 * 
 * @param {string} componentRole - Rol del componente
 * @returns {function} Función que devuelve estilos CSS
 * 
 * @example
 * const getButtonStyles = useThemeStyles('buttonPrimary');
 * 
 * const buttonStyles = getButtonStyles({
 *   padding: '8px 16px',
 *   borderRadius: '4px'
 * });
 */
export const useThemeStyles = (componentRole) => {
  const colors = useComponentColors(componentRole);
  
  return useMemo(() => (additionalStyles = {}) => ({
    backgroundColor: colors.background,
    color: colors.text,
    ...additionalStyles
  }), [colors]);
};

/**
 * Hook para detectar cambios de tema
 * 
 * @param {function} callback - Función que se ejecuta cuando cambia el tema
 * 
 * @example
 * useThemeChange((newTheme) => {
 *   console.log(`Tema cambió a: ${newTheme}`);
 * });
 */
export const useThemeChange = (callback) => {
  const { theme } = useTheme();
  
  useEffect(() => {
    if (callback && typeof callback === 'function') {
      callback(theme);
    }
  }, [theme, callback]);
};

/**
 * Hook para obtener información específica del tema actual
 * 
 * @returns {object} Información del tema
 * 
 * @example
 * const { isDark, isLight, theme } = useThemeInfo();
 */
export const useThemeInfo = () => {
  const { theme, isDark, isLight } = useTheme();
  
  return useMemo(() => ({
    theme,
    isDark,
    isLight,
    themeName: theme.charAt(0).toUpperCase() + theme.slice(1)
  }), [theme, isDark, isLight]);
};

/**
 * Hook para obtener tokens semánticos del tema actual
 * 
 * @returns {object} Tokens semánticos completos
 * 
 * @example
 * const tokens = useSemanticTokens();
 * const primaryBg = tokens.primary.background;
 */
export const useSemanticTokens = () => {
  const { tokens } = useTheme();
  return tokens;
};