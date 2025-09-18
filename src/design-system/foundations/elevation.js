/**
 * Elevation Design System Tokens
 * 
 * Extracted from Figma design system
 * Contains box-shadow definitions for different elevation levels
 * 
 * Usage:
 * import { elevation } from './tokens/elevation.js';
 * 
 * // Use in CSS-in-JS
 * const styles = {
 *   card: {
 *     boxShadow: elevation.surface
 *   }
 * };
 * 
 * // Use with CSS custom properties
 * element.style.boxShadow = elevation.level1;
 */

// Light theme elevation tokens
// Each level represents a different elevation with corresponding box-shadow
export const lightElevation = {
  // Surface level - base elevation for cards and panels
  surface: '0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24)',
  
  // Level 1 - Slightly raised elements
  level1: '0px 2px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.24)',
  
  // Level 2 - Moderate elevation for important elements
  level2: '0px 4px 8px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.24)',
  
  // Level 3 - Higher elevation for floating elements
  level3: '0px 8px 16px rgba(0, 0, 0, 0.12), 0px 4px 8px rgba(0, 0, 0, 0.24)',
  
  // Level 4 - High elevation for modals and overlays
  level4: '0px 12px 24px rgba(0, 0, 0, 0.12), 0px 8px 16px rgba(0, 0, 0, 0.24)',
  
  // Level 5 - Maximum elevation for top-level overlays
  level5: '0px 16px 32px rgba(0, 0, 0, 0.12), 0px 12px 24px rgba(0, 0, 0, 0.24)'
};

// Dark theme elevation tokens (intensified shadows for dark mode)
export const darkElevation = {
  // Surface level - base elevation for cards and panels in dark mode
  surface: 'none',
  
  // Level 1 - Slightly raised elements in dark mode
  level1: '0px 1px 3px 0px rgba(0, 0, 0, 0.3), 0px 1px 2px 0px rgba(0, 0, 0, 0.2)',
  
  // Level 2 - Moderate elevation in dark mode
  level2: '0px 4px 6px -1px rgba(0, 0, 0, 0.3), 0px 2px 4px -1px rgba(0, 0, 0, 0.2)',
  
  // Level 3 - Higher elevation in dark mode
  level3: '0px 10px 15px -3px rgba(0, 0, 0, 0.3), 0px 4px 6px -2px rgba(0, 0, 0, 0.15)',
  
  // Level 4 - High elevation in dark mode
  level4: '0px 20px 25px -5px rgba(0, 0, 0, 0.3), 0px 10px 10px -5px rgba(0, 0, 0, 0.12)',
  
  // Level 5 - Maximum elevation in dark mode
  level5: '0px 25px 50px -12px rgba(0, 0, 0, 0.5)'
};

// Default elevation (light theme)
export const elevation = lightElevation;

// Alternative naming convention for semantic usage
export const elevationTokens = {
  none: 'none',
  surface: lightElevation.surface,
  raised: lightElevation.level1,
  elevated: lightElevation.level2,
  floating: lightElevation.level3,
  modal: lightElevation.level4,
  overlay: lightElevation.level5
};

// Elevation levels as CSS custom properties
export const elevationCSSProperties = {
  '--elevation-none': 'none',
  '--elevation-surface': lightElevation.surface,
  '--elevation-level1': lightElevation.level1,
  '--elevation-level2': lightElevation.level2,
  '--elevation-level3': lightElevation.level3,
  '--elevation-level4': lightElevation.level4,
  '--elevation-level5': lightElevation.level5,
  '--elevation-raised': lightElevation.level1,
  '--elevation-elevated': lightElevation.level2,
  '--elevation-floating': lightElevation.level3,
  '--elevation-modal': lightElevation.level4,
  '--elevation-overlay': lightElevation.level5,
  
  // Dark theme CSS custom properties
  '--elevation-dark-none': 'none',
  '--elevation-dark-surface': darkElevation.surface,
  '--elevation-dark-level1': darkElevation.level1,
  '--elevation-dark-level2': darkElevation.level2,
  '--elevation-dark-level3': darkElevation.level3,
  '--elevation-dark-level4': darkElevation.level4,
  '--elevation-dark-level5': darkElevation.level5,
  '--elevation-dark-raised': darkElevation.level1,
  '--elevation-dark-elevated': darkElevation.level2,
  '--elevation-dark-floating': darkElevation.level3,
  '--elevation-dark-modal': darkElevation.level4,
  '--elevation-dark-overlay': darkElevation.level5
};

// Dark theme semantic tokens
export const darkElevationTokens = {
  none: 'none',
  surface: darkElevation.surface,
  raised: darkElevation.level1,
  elevated: darkElevation.level2,
  floating: darkElevation.level3,
  modal: darkElevation.level4,
  overlay: darkElevation.level5
};

// Export all elevation systems
export default {
  light: lightElevation,
  dark: darkElevation,
  tokens: elevationTokens,
  darkTokens: darkElevationTokens,
  cssProperties: elevationCSSProperties
};

// Also make available globally for non-module usage
if (typeof window !== 'undefined') {
    window.lightElevation = lightElevation;
    window.darkElevation = darkElevation;
    window.elevationTokens = elevationTokens;
    window.darkElevationTokens = darkElevationTokens;
}