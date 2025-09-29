/**
 * SEMANTIC COLORS - Sistema de colores se  // ==========================================
  // 3. SECONDARY - Elementos secundarios del sistema
  // ==========================================
  secondary: {
    background: primitiveColors.green[500], // #44962a (corregido según semantica)
    text: primitiveColors.green[50],        // #f0faf0 (corregido según semantica)
  }, adaptativo
 * 
 * Sistema de colores semánticos que mapea roles de UI a colores específicos
 * con soporte automático para light/dark mode.
 * 
 * Basado en la especificación del archivo 'semantica' del design system.
 * Permite que los componentes usen significado semántico en lugar de colores primitivos.
 * 
 * Estructura:
 * - Cada color semántico mapea background y text específicos
 * - Soporte completo para múltiples temas (light, dark)
 * - Funciones utilitarias para componentes
 * - Mapeo de roles de componentes a tokens semánticos
 * - Generación automática de variables CSS
 * 
 * @fileoverview Tokens semánticos adaptativos para light/dark mode
 * @author MEP Team
 * @version 2.0.0
 */

import { primitiveColors } from './colors.js';

/**
 * LIGHT THEME - Tokens semánticos para tema claro
 * 
 * Cada token incluye background y text según especificación del archivo 'semantica'.
 * Mapeo exacto de la especificación semántica del design system.
 */
export const lightTheme = {
  // ==========================================
  // 1. PRIMARY - Elementos principales del sistema
  // ==========================================
  primary: {
    background: primitiveColors.olive[500], // #3f762f
    text: primitiveColors.olive[50],        // #f2f8f0
  },

  // ==========================================
  // 2. ON PRIMARY - Contenido sobre elementos primary
  // ==========================================
  onPrimary: {
    background: primitiveColors.olive[50],  // #f2f8f0
    text: primitiveColors.olive[500],       // #3f762f
  },

  // ==========================================
  // 3. SECONDARY - Elementos secundarios del sistema
  // ==========================================
  secondary: {
    background: primitiveColors.green[500], // #53af32
    text: primitiveColors.green[50],        // #f3faf0
  },

  // ==========================================
  // 4. ON SECONDARY - Contenido sobre elementos secondary
  // ==========================================
  onSecondary: {
    background: primitiveColors.green[50],  // #f3faf0
    text: primitiveColors.green[500],       // #53af32
  },

  // ==========================================
  // 5. PRIMARY CONTAINER - Versión container de primary
  // ==========================================
  primaryContainer: {
    background: primitiveColors.olive[300], // #92c482
    text: primitiveColors.olive[700],       // #294a20
  },

  // ==========================================
  // 6. ON PRIMARY CONTAINER - Contenido sobre primary container
  // ==========================================
  onPrimaryContainer: {
    background: primitiveColors.olive[600], // #356028
    text: primitiveColors.olive[300],       // #92c482
  },

  // ==========================================
  // 7. SECONDARY CONTAINER - Versión container de secondary
  // ==========================================
  secondaryContainer: {
    background: primitiveColors.green[200], // #bee6b5
    text: primitiveColors.green[700],       // #367b23
  },

  // ==========================================
  // 8. ON SECONDARY CONTAINER - Contenido sobre secondary container
  // ==========================================
  onSecondaryContainer: {
    background: primitiveColors.green[700], // #367b23
    text: primitiveColors.green[200],       // #bee6b5
  },

  // ==========================================
  // 9. PRIMARY FIXED - Elemento primary fijo
  // ==========================================
  primaryFixed: {
    background: primitiveColors.olive[200], // #bbddb1
    text: primitiveColors.olive[700],       // #294a20
  },

  // ==========================================
  // 10. PRIMARY FIXED DIM - Versión atenuada de primary fixed
  // ==========================================
  primaryFixedDim: {
    background: primitiveColors.olive[300], // #92c482
    text: primitiveColors.green[700],       // #367b23
  },

  // ==========================================
  // 11. SECONDARY FIXED - Elemento secondary fijo
  // ==========================================
  secondaryFixed: {
    background: primitiveColors.green[100], // #def2da
    text: primitiveColors.green[800],       // #285e1a
  },

  // ==========================================
  // 12. SECONDARY FIXED DIM - Versión atenuada de secondary fixed
  // ==========================================
  secondaryFixedDim: {
    background: primitiveColors.green[300], // #97d28c
    text: primitiveColors.green[700],       // #367b23
  },

  // ==========================================
  // 13. ON PRIMARY FIXED - Contenido sobre primary fixed
  // ==========================================
  onPrimaryFixed: {
    background: primitiveColors.olive[900], // #12210f - usando olive 90 como olive[900]
    text: primitiveColors.olive[200],       // #bbddb1
  },

  // ==========================================
  // 14. ON PRIMARY FIXED VARIANT - Variante de contenido sobre primary fixed
  // ==========================================
  onPrimaryFixedVariant: {
    background: primitiveColors.green[700], // #367b23
    text: primitiveColors.neutral[50],      // neutral-50
  },

  // ==========================================
  // 15. ON SURFACE - Contenido principal sobre superficies
  // ==========================================
  onSurface: {
    background: primitiveColors.neutral[900], // #171717 (corregido según semantica)
    text: primitiveColors.neutral[50],        // #fafafa (corregido según semantica)
  },

  // ==========================================
  // 16. ON SURFACE VARIANT - Variante de contenido sobre superficies
  // ==========================================
  onSurfaceVariant: {
    background: primitiveColors.green[600], // #44962a
    text: primitiveColors.neutral[50],      // neutral-50
  },

  // ==========================================
  // 17. SURFACE DIM - Superficie atenuada
  // ==========================================
  surfaceDim: {
    background: primitiveColors.neutral[300], // neutral-300
    text: primitiveColors.neutral[900],       // neutral-900
  },

  // ==========================================
  // 18. SURFACE - Superficie base
  // ==========================================
  surface: {
    background: primitiveColors.neutral[100], // neutral-100
    text: primitiveColors.neutral[900],       // neutral-900
  },

  // ==========================================
  // 19. ON SURFACE BASE - Contenido base sobre superficie
  // ==========================================
  onSurfaceBase: {
    background: primitiveColors.neutral[900], // neutral-900
    text: primitiveColors.neutral[50],        // neutral-50
  },

  // ==========================================
  // 20. ERROR - Estados de error
  // ==========================================
  error: {
    background: primitiveColors.red[500],   // #e53935
    text: primitiveColors.olive[50],        // #f2f8f0
  },

  // ==========================================
  // 21. ON ERROR - Contenido sobre error
  // ==========================================
  onError: {
    background: primitiveColors.red[900],   // #610e0e
    text: primitiveColors.red[50],          // #fef2f2
  },

  // ==========================================
  // 22. ERROR CONTAINER - Container de error
  // ==========================================
  errorContainer: {
    background: primitiveColors.red[100],   // #fde0e0
    text: primitiveColors.red[800],         // #8e1515
  },

  // ==========================================
  // 23. ON ERROR CONTAINER - Contenido sobre error container
  // ==========================================
  onErrorContainer: {
    background: primitiveColors.red[800],   // #8e1515
    text: primitiveColors.red[100],         // #fde0e0
  },

  // ==========================================
  // 24. SUCCESS - Estados de éxito
  // ==========================================
  success: {
    background: primitiveColors.green[600], // #44962a
    text: primitiveColors.neutral[50],      // neutral-50
  },

  // ==========================================
  // 25. ON SUCCESS - Contenido sobre success
  // ==========================================
  onSuccess: {
    background: primitiveColors.green[600], // #44962a
    text: primitiveColors.neutral[50],      // neutral-50
  },

  // ==========================================
  // 26. SUCCESS CONTAINER - Container de success
  // ==========================================
  successContainer: {
    background: primitiveColors.green[600], // #44962a
    text: primitiveColors.neutral[50],      // neutral-50
  },

  // ==========================================
  // 27. ON SUCCESS CONTAINER - Contenido sobre success container
  // ==========================================
  onSuccessContainer: {
    background: primitiveColors.green[600], // #44962a
    text: primitiveColors.neutral[50],      // neutral-50
  },

  // ==========================================
  // 28. BUTTON PRIMARY - Botón primario con estados
  // ==========================================
  buttonPrimaryDefault: {
    background: primitiveColors.olive[500], // #3f762f
    text: primitiveColors.neutral[50],      // #fafafa (EXACTO como raíz)
    border: 'transparent'
  },
  buttonPrimaryHover: {
    background: primitiveColors.olive[700], // #294a20
    text: primitiveColors.neutral[50],      // #fafafa (EXACTO como raíz)
    border: 'transparent'
  },
  buttonPrimarySelected: {
    background: primitiveColors.olive[700], // #294a20
    text: primitiveColors.neutral[50],      // #fafafa (EXACTO como raíz)
    border: 'transparent'
  },
  buttonPrimaryDisabled: {
    background: primitiveColors.olive[300], // #92c482
    text: primitiveColors.neutral[50],      // #fafafa (EXACTO como raíz)
    border: 'transparent',
    opacity: 0.6 // EXACTO como raíz
  },

  // ==========================================
  // 29. BUTTON SECONDARY - Botón secundario con estados
  // ==========================================
  buttonSecondaryDefault: {
    background: primitiveColors.green[500], // #53af32
    text: primitiveColors.neutral[50],      // #fafafa
    border: 'transparent'
  },
  buttonSecondaryHover: {
    background: primitiveColors.green[700], // #367b23
    text: primitiveColors.neutral[50],      // #fafafa
    border: 'transparent'
  },
  buttonSecondarySelected: {
    background: primitiveColors.green[500], // #53af32
    text: primitiveColors.neutral[50],      // #fafafa
    border: 'transparent'
  },
  buttonSecondaryDisabled: {
    background: primitiveColors.green[400], // #6fbc5e
    text: primitiveColors.neutral[50],      // #fafafa
    border: 'transparent',
    opacity: 0.6
  },

  // ==========================================
  // 30. BUTTON GHOST - Botón fantasma con estados
  // ==========================================
  buttonGhostDefault: {
    background: 'transparent',
    text: primitiveColors.olive[500],       // #3f762f
    border: 'transparent'
  },
  buttonGhostHover: {
    background: 'transparent',
    text: primitiveColors.olive[700],       // #294a20
    border: 'transparent'
  },
  buttonGhostSelected: {
    background: 'transparent',
    text: primitiveColors.olive[500],       // #3f762f
    border: primitiveColors.olive[500]      // #3f762f (borde inferior)
  },
  buttonGhostDisabled: {
    background: 'transparent',
    text: primitiveColors.olive[300],       // #92c482
    border: 'transparent',
    opacity: 0.6 // EXACTO como raíz (cambiado de 1 a 0.6)
  },

  // ==========================================
  // 31. BUTTON OUTLINE - Botón con borde con estados
  // ==========================================
  buttonOutlineDefault: {
    background: 'transparent',
    text: primitiveColors.olive[500],       // #3f762f
    border: primitiveColors.olive[500]      // #3f762f
  },
  buttonOutlineHover: {
    background: 'transparent',
    text: primitiveColors.olive[700],       // #294a20
    border: primitiveColors.olive[700]      // #294a20
  },
  buttonOutlineSelected: {
    background: 'transparent',
    text: primitiveColors.olive[500],       // #3f762f
    border: primitiveColors.olive[500]      // #3f762f
  },
  buttonOutlineDisabled: {
    background: 'transparent',
    text: primitiveColors.olive[300],       // #92c482
    border: primitiveColors.olive[300],     // #92c482
    opacity: 1 // Outline no usa opacity
  },

  // ==========================================
  // 32. BADGE PRIMARY - Badge primario con estados
  // ==========================================
  badgePrimary: {
    backgroundColor: primitiveColors.olive[500], // #3f762f
    color: primitiveColors.olive[50],            // #f2f8f0
    borderColor: 'transparent'
  },

  // ==========================================
  // 33. BADGE SECONDARY - Badge secundario con estados
  // ==========================================
  badgeSecondary: {
    backgroundColor: primitiveColors.green[500], // #53af32
    color: primitiveColors.green[50],            // #f1fdf0
    borderColor: 'transparent'
  },

  // ==========================================
  // 34. BADGE WARNING - Badge de advertencia
  // ==========================================
  badgeWarning: {
    backgroundColor: primitiveColors.red[500],   // #e53935
    color: primitiveColors.red[50],              // #fff5f5
    borderColor: 'transparent'
  },

  // ==========================================
  // 35. BADGE OUTLINE - Badge con borde sin fondo
  // ==========================================
  badgeOutline: {
    backgroundColor: 'transparent',
    color: primitiveColors.olive[500],           // #3f762f
    borderColor: primitiveColors.olive[500]      // #3f762f
  },

  // ==========================================
  // 36. CARD - Tarjetas de contenido
  // ==========================================
  cardDefault: {
    background: primitiveColors.olive[300],      // #92c482
    text: primitiveColors.olive[700],            // #294a20
    border: primitiveColors.olive[600]           // #356028
  },

  // ==========================================
  // 37. CONTENT - Contenido general (texto negro sobre fondo blanco)
  // ==========================================
  content: {
    background: primitiveColors.neutral[0],      // #ffffff (fondo blanco)
    text: primitiveColors.neutral[900],          // #171717 (texto negro)
  }
};

/**
 * DARK THEME - Tokens semánticos para tema oscuro
 * 
 * Mapeo basado en la especificación del archivo 'semantica' para dark mode.
 * Los valores están adaptados para mantener contraste y jerarquía visual.
 */
export const darkTheme = {
  // ==========================================
  // 1. PRIMARY - En dark mode usamos tonos más claros
  // ==========================================
  primary: {
    background: primitiveColors.olive[200], // #bbddb1
    text: primitiveColors.olive[700],       // #294a20
  },

  // ==========================================
  // 2. ON PRIMARY - Contenido sobre primary en dark mode
  // ==========================================
  onPrimary: {
    background: primitiveColors.olive[700], // #294a20
    text: primitiveColors.olive[200],       // #bbddb1
  },

  // ==========================================
  // 3. SECONDARY - En dark mode usamos tonos más claros
  // ==========================================
  secondary: {
    background: primitiveColors.green[200], // #bee6b5
    text: primitiveColors.green[700],       // #367b23
  },

  // ==========================================
  // 4. ON SECONDARY - Contenido sobre secondary en dark mode
  // ==========================================
  onSecondary: {
    background: primitiveColors.green[700], // #367b23
    text: primitiveColors.green[100],       // #def2da
  },

  // ==========================================
  // 5. PRIMARY CONTAINER - Container adaptado para dark mode
  // ==========================================
  primaryContainer: {
    background: primitiveColors.olive[600], // #356028
    text: primitiveColors.olive[100],       // #ddeeda
  },

  // ==========================================
  // 6. ON PRIMARY CONTAINER - Contenido sobre container en dark mode
  // ==========================================
  onPrimaryContainer: {
    background: primitiveColors.olive[100], // #ddeeda
    text: primitiveColors.olive[600],       // #356028
  },

  // ==========================================
  // 7. SECONDARY CONTAINER - Container secundario en dark mode
  // ==========================================
  secondaryContainer: {
    background: primitiveColors.green[600], // #44962a
    text: primitiveColors.green[100],       // #def2da
  },

  // ==========================================
  // 8. ON SECONDARY CONTAINER - Contenido sobre secondary container en dark mode
  // ==========================================
  onSecondaryContainer: {
    background: primitiveColors.green[100], // #def2da
    text: primitiveColors.green[600],       // #44962a
  },

  // ==========================================
  // 9. PRIMARY FIXED - En dark mode cambia según especificación
  // ==========================================
  primaryFixed: {
    background: primitiveColors.green[100], // #def2da
    text: primitiveColors.green[800],       // #285e1a
  },

  // ==========================================
  // 10. PRIMARY FIXED DIM - Mantiene configuración según semantica
  // ==========================================
  primaryFixedDim: {
    background: primitiveColors.olive[300], // #92c482
    text: primitiveColors.green[700],       // #367b23
  },

  // ==========================================
  // 11. SECONDARY FIXED - Elemento secondary fijo en dark mode
  // ==========================================
  secondaryFixed: {
    background: primitiveColors.green[100], // #def2da
    text: primitiveColors.green[800],       // #285e1a
  },

  // ==========================================
  // 12. SECONDARY FIXED DIM - Versión atenuada en dark mode
  // ==========================================
  secondaryFixedDim: {
    background: primitiveColors.green[300], // #97d28c
    text: primitiveColors.green[700],       // #367b23
  },

  // ==========================================
  // 13. ON PRIMARY FIXED - Contenido sobre primary fixed en dark mode
  // ==========================================
  onPrimaryFixed: {
    background: primitiveColors.olive[900], // #12210f
    text: primitiveColors.olive[200],       // #bbddb1
  },

  // ==========================================
  // 14. ON PRIMARY FIXED VARIANT - Variante en dark mode
  // ==========================================
  onPrimaryFixedVariant: {
    background: primitiveColors.green[700], // #367b23
    text: primitiveColors.neutral[50],      // neutral-50
  },

  // ==========================================
  // 15. ON SURFACE - Contenido sobre superficies en dark mode
  // ==========================================
  onSurface: {
    background: primitiveColors.neutral[800], // #2d2d2d - fondo sutil para dark
    text: primitiveColors.neutral[200],       // #e5e5e5 - texto claro visible
  },

  // ==========================================
  // 16. ON SURFACE VARIANT - Variante en dark mode
  // ==========================================
  onSurfaceVariant: {
    background: primitiveColors.green[600], // #44962a
    text: primitiveColors.neutral[50],      // neutral-50
  },

  // ==========================================
  // 17. SURFACE DIM - Superficie atenuada en dark mode
  // ==========================================
  surfaceDim: {
    background: primitiveColors.neutral[800], // neutral-800 para dark
    text: primitiveColors.neutral[100],       // neutral-100 para dark
  },

  // ==========================================
  // 18. SURFACE - Superficie base en dark mode
  // ==========================================
  surface: {
    background: primitiveColors.neutral[900], // neutral-900 para dark
    text: primitiveColors.neutral[100],       // neutral-100 para dark
  },

  // ==========================================
  // 19. ON SURFACE BASE - Contenido base sobre superficie en dark mode
  // ==========================================
  onSurfaceBase: {
    background: primitiveColors.neutral[100], // neutral-100 para dark
    text: primitiveColors.neutral[900],       // neutral-900 para dark
  },

  // ==========================================
  // 20. ERROR - Estados de error (adaptado para dark mode)
  // ==========================================
  error: {
    background: primitiveColors.red[400],   // Más claro para dark mode
    text: primitiveColors.red[50],          // #fef2f2
  },

  // ==========================================
  // 21. ON ERROR - Contenido sobre error en dark mode
  // ==========================================
  onError: {
    background: primitiveColors.red[900],   // #610e0e
    text: primitiveColors.red[50],          // #fef2f2
  },

  // ==========================================
  // 22. ERROR CONTAINER - Container de error en dark mode
  // ==========================================
  errorContainer: {
    background: primitiveColors.red[800],   // Más oscuro para dark mode
    text: primitiveColors.red[100],         // #fde0e0
  },

  // ==========================================
  // 23. ON ERROR CONTAINER - Contenido sobre error container en dark mode
  // ==========================================
  onErrorContainer: {
    background: primitiveColors.red[100],   // #fde0e0
    text: primitiveColors.red[800],         // #8e1515
  },

  // ==========================================
  // 24. SUCCESS - Estados de éxito en dark mode
  // ==========================================
  success: {
    background: primitiveColors.green[500], // Mantener en dark
    text: primitiveColors.neutral[50],      // neutral-50
  },

  // ==========================================
  // 25. ON SUCCESS - Contenido sobre success en dark mode
  // ==========================================
  onSuccess: {
    background: primitiveColors.green[600], // #44962a
    text: primitiveColors.neutral[50],      // neutral-50
  },

  // ==========================================
  // 26. SUCCESS CONTAINER - Container de success en dark mode
  // ==========================================
  successContainer: {
    background: primitiveColors.green[600], // #44962a
    text: primitiveColors.neutral[50],      // neutral-50
  },

  // ==========================================
  // 27. ON SUCCESS CONTAINER - Contenido sobre success container en dark mode
  // ==========================================
  onSuccessContainer: {
    background: primitiveColors.green[600], // #44962a
    text: primitiveColors.neutral[50],      // neutral-50
  },

  // ==========================================
  // 28. BUTTON PRIMARY - Botón primario con estados (dark mode)
  // ==========================================
  buttonPrimaryDefault: {
    background: primitiveColors.olive[200], // #bbddb1 - más brillante en dark
    text: primitiveColors.olive[700],        // #294a20
    border: 'transparent'
  },
  buttonPrimaryHover: {  
    background: primitiveColors.olive[700], // #294a20
    text: primitiveColors.olive[50],        // #f2f8f0
    border: 'transparent'
  },
  buttonPrimarySelected: {
    background: primitiveColors.olive[700], // #294a20
    text: primitiveColors.olive[50],        // #f2f8f0
    border: 'transparent'
  },
  buttonPrimaryDisabled: {
    background: primitiveColors.olive[400], // #6ca35c - más visible en dark
    text: primitiveColors.olive[100],       // #dcefd7
    border: 'transparent',
    opacity: 0.6
  },

  // ==========================================
  // 29. BUTTON SECONDARY - Botón secundario con estados (dark mode)
  // ==========================================
  buttonSecondaryDefault: {
    background: primitiveColors.green[600], // #44962a - más brillante en dark
    text: primitiveColors.neutral[50],      // #fafafa
    border: 'transparent'
  },
  buttonSecondaryHover: {
    background: primitiveColors.green[700], // #367b23
    text: primitiveColors.neutral[50],      // #fafafa
    border: 'transparent'
  },
  buttonSecondarySelected: {
    background: primitiveColors.green[600], // #44962a
    text: primitiveColors.neutral[50],      // #fafafa
    border: 'transparent'
  },
  buttonSecondaryDisabled: {
    background: primitiveColors.green[500], // #53af32 - más visible en dark
    text: primitiveColors.neutral[100],     // #f5f5f5
    border: 'transparent',
    opacity: 0.6
  },

  // ==========================================
  // 30. BUTTON GHOST - Botón fantasma con estados (dark mode)
  // ==========================================
  buttonGhostDefault: {
    background: 'transparent',
    text: primitiveColors.olive[400],       // #6ca35c - más brillante en dark
    border: 'transparent'
  },
  buttonGhostHover: {
    background: 'transparent',
    text: primitiveColors.olive[300],       // #92c482 - más brillante en dark
    border: 'transparent'
  },
  buttonGhostSelected: {
    background: 'transparent',
    text: primitiveColors.olive[400],       // #6ca35c
    border: primitiveColors.olive[400]      // #6ca35c (borde inferior)
  },
  buttonGhostDisabled: {
    background: 'transparent',
    text: primitiveColors.olive[600],       // #356028 - más tenue en dark
    border: 'transparent',
    opacity: 1 // Ghost no usa opacity
  },

  // ==========================================
  // 31. BUTTON OUTLINE - Botón con borde con estados (dark mode)
  // ==========================================
  buttonOutlineDefault: {
    background: 'transparent',
    text: primitiveColors.olive[400],       // #6ca35c - más brillante en dark
    border: primitiveColors.olive[400]      // #6ca35c
  },
  buttonOutlineHover: {
    background: 'transparent',
    text: primitiveColors.olive[300],       // #92c482 - más brillante en dark
    border: primitiveColors.olive[300]      // #92c482
  },
  buttonOutlineSelected: {
    background: 'transparent',
    text: primitiveColors.olive[400],       // #6ca35c
    border: primitiveColors.olive[400]      // #6ca35c
  },
  buttonOutlineDisabled: {
    background: 'transparent',
    text: primitiveColors.olive[600],       // #356028 - más tenue en dark
    border: primitiveColors.olive[600],     // #356028
    opacity: 1 // Outline no usa opacity
  },

  // ==========================================
  // 32. BADGE PRIMARY - Badge primario (dark mode)
  // ==========================================
  badgePrimary: {
    backgroundColor: primitiveColors.olive[600], // #356028 - más brillante en dark
    color: primitiveColors.olive[50],            // #f2f8f0
    borderColor: 'transparent'
  },

  // ==========================================
  // 33. BADGE SECONDARY - Badge secundario (dark mode)
  // ==========================================
  badgeSecondary: {
    backgroundColor: primitiveColors.green[600], // #44962a - más brillante en dark
    color: primitiveColors.green[50],            // #f1fdf0
    borderColor: 'transparent'
  },

  // ==========================================
  // 34. BADGE WARNING - Badge de advertencia (dark mode)
  // ==========================================
  badgeWarning: {
    backgroundColor: primitiveColors.red[600],   // #d32f2f - más brillante en dark
    color: primitiveColors.red[50],              // #fff5f5
    borderColor: 'transparent'
  },

  // ==========================================
  // 35. BADGE OUTLINE - Badge con borde (dark mode)
  // ==========================================
  badgeOutline: {
    backgroundColor: 'transparent',
    color: primitiveColors.olive[400],           // #6ca35c - más brillante en dark
    borderColor: primitiveColors.olive[400]      // #6ca35c
  },

  // ==========================================
  // 36. CARD - Tarjetas de contenido (dark mode)
  // ==========================================
  cardDefault: {
    background: primitiveColors.olive[600],      // #356028 - más oscuro en dark
    text: primitiveColors.olive[200],            // #bbddb1 - más claro en dark
    border: primitiveColors.olive[500]           // #3f762f
  },

  // ==========================================
  // 37. CONTENT - Contenido general (texto claro sobre fondo oscuro en dark mode)
  // ==========================================
  content: {
    background: primitiveColors.neutral[900],    // #171717 (fondo oscuro)
    text: primitiveColors.neutral[50],           // #fafafa (texto claro)
  }
};

/**
 * Mapeo de roles de componentes a tokens semánticos
 * 
 * Define qué token semántico debe usar cada tipo de componente.
 * Esto permite que los componentes se declaren por su rol
 * en lugar de por colores específicos.
 */
export const componentRoleMapping = {
  // Botones Primary con estados
  buttonPrimary: 'buttonPrimaryDefault',
  buttonPrimaryDefault: 'buttonPrimaryDefault',
  buttonPrimaryHover: 'buttonPrimaryHover',
  buttonPrimarySelected: 'buttonPrimarySelected',
  buttonPrimaryDisabled: 'buttonPrimaryDisabled',
  
  // Botones Secondary con estados
  buttonSecondary: 'buttonSecondaryDefault',
  buttonSecondaryDefault: 'buttonSecondaryDefault',
  buttonSecondaryHover: 'buttonSecondaryHover',
  buttonSecondarySelected: 'buttonSecondarySelected',
  buttonSecondaryDisabled: 'buttonSecondaryDisabled',
  
  // Botones Ghost con estados
  buttonGhost: 'buttonGhostDefault',
  buttonGhostDefault: 'buttonGhostDefault',
  buttonGhostHover: 'buttonGhostHover',
  buttonGhostSelected: 'buttonGhostSelected',
  buttonGhostDisabled: 'buttonGhostDisabled',
  
  // Botones Outline con estados
  buttonOutline: 'buttonOutlineDefault',
  buttonOutlineDefault: 'buttonOutlineDefault',
  buttonOutlineHover: 'buttonOutlineHover',
  buttonOutlineSelected: 'buttonOutlineSelected',
  buttonOutlineDisabled: 'buttonOutlineDisabled',

  // Badge con variantes
  badgePrimary: 'badgePrimary',
  badgeSecondary: 'badgeSecondary',
  badgeWarning: 'badgeWarning',
  badgeOutline: 'badgeOutline',

  // Card con variantes
  card: 'cardDefault',
  cardDefault: 'cardDefault',
  
  // Header con variante
  header: 'primaryContainer',
  headerDefault: 'primaryContainer',
  
  // Footer con variante
  footer: 'primaryContainer',
  footerDefault: 'primaryContainer',
  
  // Estados especiales de botones (legacy)
  buttonPrimaryContainer: 'primaryContainer',
  buttonSecondaryContainer: 'secondaryContainer',
  
  // Elementos de navegación
  navigationPrimary: 'primary',
  navigationSecondary: 'secondary',
  
  // Estados de feedback
  buttonError: 'error',
  buttonSuccess: 'success',
  alertError: 'errorContainer',
  alertSuccess: 'successContainer',
  
  // Superficies
  cardSurface: 'surface',
  modalSurface: 'surface',
  headerSurface: 'primary',
  sidebarSurface: 'surfaceDim',
  
  // Contenido general
  content: 'content'
};

/**
 * Hook personalizado para obtener tokens semánticos según el tema actual
 * 
 * @param {string} theme - 'light' o 'dark'
 * @returns {object} Tokens semánticos para el tema especificado
 */
export const getSemanticTokens = (theme = 'light') => {
  return theme === 'dark' ? darkTheme : lightTheme;
};

/**
 * Función utilitaria para obtener colores de botón con estado
 * 
 * @param {string} buttonType - Tipo de botón ('primary', 'secondary', 'ghost', 'outline')
 * @param {object} state - Estado del botón {hover, selected, disabled}
 * @param {string} theme - 'light' o 'dark'
 * @returns {object} Colores {background, text, border, opacity} para el botón
 */
export const getButtonColors = (buttonType, state = {}, theme = 'light') => {
  const { hover, selected, disabled } = state;
  
  // Determinar el estado actual
  let stateKey = 'Default';
  if (disabled) stateKey = 'Disabled';
  else if (selected) stateKey = 'Selected';
  else if (hover) stateKey = 'Hover';
  
  // Construir la clave del componente
  const componentKey = `button${buttonType.charAt(0).toUpperCase() + buttonType.slice(1)}${stateKey}`;
  
  // Obtener los tokens del tema
  const tokens = getSemanticTokens(theme);
  const colors = tokens[componentKey];
  
  if (!colors) {
    console.warn(`Token de botón no encontrado: ${componentKey}`);
    return tokens.primary; // Fallback
  }
  
  return colors;
};

/**
 * Función utilitaria para obtener colores de un componente específico
 * 
 * @param {string} componentRole - Rol del componente (ej: 'buttonPrimary')
 * @param {string} theme - 'light' o 'dark'
 * @returns {object} Colores {background, text} para el componente
 */
export const getComponentColors = (componentRole, theme = 'light') => {
  const semanticRole = componentRoleMapping[componentRole];
  if (!semanticRole) {
    console.warn(`Rol de componente no encontrado: ${componentRole}`);
    return getSemanticTokens(theme).primary; // Fallback
  }
  
  return getSemanticTokens(theme)[semanticRole];
};

/**
 * Función para generar variables CSS dinámicas
 * 
 * @param {string} theme - 'light' o 'dark'
 * @returns {object} Variables CSS con prefijo --semantic-
 */
export const generateSemanticCSSVariables = (theme = 'light') => {
  const tokens = getSemanticTokens(theme);
  const cssVariables = {};
  
  Object.entries(tokens).forEach(([role, colors]) => {
    cssVariables[`--semantic-${role}-background`] = colors.background;
    cssVariables[`--semantic-${role}-text`] = colors.text;
  });
  
  return cssVariables;
};

/**
 * SEMANTIC COLORS - Objeto principal de exportación mejorado
 * 
 * Contiene todos los temas y funciones utilitarias para fácil acceso.
 * 
 * @example
 * // Importar tema específico
 * import { lightTheme, darkTheme, getComponentColors } from '@design-system/foundations/semantic-colors'
 * 
 * // Usar en componentes con roles
 * const buttonColors = getComponentColors('buttonPrimary', 'light')
 * backgroundColor: buttonColors.background
 * color: buttonColors.text
 * 
 * // Cambio dinámico de tema
 * const currentTheme = isDark ? darkTheme : lightTheme
 * backgroundColor: currentTheme.surface.background
 */
export const semanticColors = {
  light: lightTheme,
  dark: darkTheme,
  getTokens: getSemanticTokens,
  getComponentColors,
  componentRoles: componentRoleMapping,
  generateCSSVariables: generateSemanticCSSVariables
};

/**
 * Exportación por defecto mejorada
 * Facilita la importación del sistema completo con utilidades
 */
export default semanticColors;

// Make available globally for non-module usage
if (typeof window !== 'undefined') {
    window.lightTheme = lightTheme;
    window.darkTheme = darkTheme;
    window.semanticColors = semanticColors;
    window.getComponentColors = getComponentColors;
    window.getSemanticTokens = getSemanticTokens;
}