/**
 * Theme HOC - Higher Order Component para inyectar props de tema
 * 
 * Componente de orden superior que inyecta todas las propiedades
 * del tema como props en el componente envuelto.
 * 
 * @fileoverview HOC para inyección de props de tema
 * @author MEP Team
 * @version 2.0.0
 */

import React from 'react';
import { useTheme } from './theme-hooks.js';

/**
 * Componente HOC para inyectar props de tema
 * 
 * @param {React.Component} WrappedComponent - Componente a envolver
 * @returns {React.Component} Componente con props de tema inyectadas
 * 
 * @example
 * const ButtonWithTheme = withTheme(Button);
 * 
 * // El componente Button recibirá props: theme, tokens, getComponentColors, etc.
 */
export const withTheme = (WrappedComponent) => {
  const WithThemeComponent = (props) => {
    const themeProps = useTheme();
    return <WrappedComponent {...props} {...themeProps} />;
  };
  
  WithThemeComponent.displayName = `withTheme(${WrappedComponent.displayName || WrappedComponent.name})`;
  return WithThemeComponent;
};

export default withTheme;