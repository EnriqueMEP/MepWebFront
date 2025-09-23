/**
 * ThemeContext - Context Provider para el sistema de temas
 * 
 * Gestiona el estado global del tema (light/dark) y proporciona
 * los tokens semánticos apropiados a todos los componentes hijos.
 * 
 * Características:
 * - Persistencia del tema en localStorage
 * - Detección automática de preferencia del sistema
 * - Aplicación automática de variables CSS
 * - Hooks utilitarios para componentes
 * 
 * @fileoverview Context provider para gestión de temas
 * @author MEP Team
 * @version 2.0.0
 */

import React, { createContext, useEffect, useState, useMemo } from 'react';
import { 
  getSemanticTokens, 
  getComponentColors, 
  generateSemanticCSSVariables,
  lightTheme
} from './semantic-colors.js';

/**
 * Contexto del tema
 */
const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
  setTheme: () => {},
  tokens: lightTheme,
  getComponentColors: () => {},
  isDark: false,
  isLight: true
});

/**
 * Provider del contexto de tema
 * 
 * @param {object} props - Props del componente
 * @param {React.ReactNode} props.children - Componentes hijos
 * @param {string} props.defaultTheme - Tema por defecto ('light' | 'dark' | 'system')
 * @param {boolean} props.enableSystemTheme - Habilitar detección automática del tema del sistema
 * @param {string} props.storageKey - Clave para persistir el tema en localStorage
 */
export const ThemeProvider = ({ 
  children, 
  defaultTheme = 'system',
  enableSystemTheme = true,
  storageKey = 'mep-design-system-theme'
}) => {
  // Estado del tema actual
  const [theme, setThemeState] = useState(() => {
    // Intentar recuperar tema del localStorage
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(storageKey);
      if (stored && ['light', 'dark'].includes(stored)) {
        return stored;
      }
    }

    // Si es 'system' o no hay tema guardado, detectar preferencia del sistema
    if (defaultTheme === 'system' && enableSystemTheme && typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    // Fallback al tema por defecto
    return defaultTheme === 'system' ? 'light' : defaultTheme;
  });

  /**
   * Función para cambiar el tema
   */
  const setTheme = useMemo(() => (newTheme) => {
    if (!['light', 'dark'].includes(newTheme)) {
      console.warn(`Tema no válido: ${newTheme}. Usa 'light' o 'dark'.`);
      return;
    }

    setThemeState(newTheme);
    
    // Persistir en localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem(storageKey, newTheme);
    }
  }, [storageKey]);

  /**
   * Función para alternar entre light y dark
   */
  const toggleTheme = useMemo(() => () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme, setTheme]);

  /**
   * Escuchar cambios en la preferencia del sistema
   */
  useEffect(() => {
    if (!enableSystemTheme || typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      // Solo cambiar automáticamente si no hay tema guardado
      const stored = localStorage.getItem(storageKey);
      if (!stored || defaultTheme === 'system') {
        setThemeState(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [enableSystemTheme, storageKey, defaultTheme]);

  /**
   * Aplicar variables CSS cuando cambie el tema
   */
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const cssVariables = generateSemanticCSSVariables(theme);
    const root = document.documentElement;

    // Aplicar todas las variables CSS
    Object.entries(cssVariables).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });

    // Añadir clase al body para CSS adicional si es necesario
    document.body.className = document.body.className.replace(/theme-\w+/g, '');
    document.body.classList.add(`theme-${theme}`);

    // Meta tag para status bar en móviles
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (themeColorMeta) {
      const tokens = getSemanticTokens(theme);
      themeColorMeta.setAttribute('content', tokens.primary.background);
    }

  }, [theme]);

  /**
   * Memoizar valores del contexto para optimizar rendimiento
   */
  const contextValue = useMemo(() => {
    const tokens = getSemanticTokens(theme);
    
    return {
      theme,
      setTheme,
      toggleTheme,
      tokens,
      getComponentColors: (componentRole) => getComponentColors(componentRole, theme),
      isDark: theme === 'dark',
      isLight: theme === 'light'
    };
  }, [theme, setTheme, toggleTheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// Exportaciones principales
export { ThemeContext };
export default ThemeProvider;