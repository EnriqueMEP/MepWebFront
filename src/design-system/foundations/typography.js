/**
 * TYPOGRAPHY TOKENS - Sistema tipográfico completo
 * 
 * Este archivo define todos los tokens tipográficos del sistema de diseño
 * basado en la extracción exacta de Figma.
 * 
 * Incluye:
 * - Estilos baseline: Versiones estándar de todos los estilos tipográficos
 * - Estilos emphasis: Variantes con mayor peso para destacar contenido importante
 * 
 * Estructura:
 * - Font families: Familias tipográficas del sistema
 * - Font weights: Pesos tipográficos disponibles
 * - Font sizes: Escalas de tamaños
 * - Line heights: Alturas de línea optimizadas
 * - Text styles: Estilos completos listos para usar (baseline + emphasis)
 * 
 * @fileoverview Tokens tipográficos extraídos de Figma (baseline + emphasis)
 * @author Sistema de Diseño MEP
 * @version 1.1.0
 */

/**
 * FONT FAMILIES - Familias tipográficas del sistema
 * 
 * Sistema unificado basado en Ubuntu como fuente principal:
 * - Ubuntu: Para todos los elementos (displays, headings, títulos, labels, botones y contenido)
 * - Se mantiene la semántica pero con una sola familia tipográfica
 */
export const fontFamilies = {
  /**
   * Ubuntu - Tipografía principal para displays
   * Uso: Display Large, Display Medium, Display Small
   */
  display: 'Ubuntu, sans-serif',
  
  /**
   * Ubuntu - Tipografía para estructura y UI
   * Uso: Headings, Titles, Labels, Buttons
   */
  heading: 'Ubuntu, sans-serif',
  
  /**
   * Ubuntu - Tipografía para contenido
   * Uso: Body text, párrafos, contenido extenso
   */
  body: 'Ubuntu, sans-serif',
};

/**
 * FONT WEIGHTS - Pesos tipográficos
 * 
 * Definición de pesos exactos extraídos de Figma
 */
export const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
};

/**
 * FONT SIZES - Escala de tamaños tipográficos
 * 
 * Valores exactos en píxeles extraídos de Figma
 */
export const fontSizes = {
  // Display sizes (Ubuntu)
  display: {
    large: '28px',    // Display Large - tamaño más pequeño para títulos
    medium: '45px',   // Display Medium  
    small: '36px',    // Display Small
  },
  
  // Heading sizes (Ubuntu)
  heading: {
    large: '32px',    // Heading Large
    medium: '28px',   // Heading Medium
    small: '24px',    // Heading Small
  },
  
  // Title sizes (Ubuntu)
  title: {
    large: '16px',    // Title Large (reducido de 22px)
    medium: '16px',   // Title Medium
    small: '14px',    // Title Small
  },
  
  // Label sizes (Ubuntu)
  label: {
    large: '14px',    // Label Large
    medium: '12px',   // Label Medium
    small: '11px',    // Label Small
  },
  
  // Button sizes (Ubuntu)
  button: {
    xl: '18px',       // Button Extra Large
    large: '16px',    // Button Large
    medium: '14px',   // Button Medium
    small: '12px',    // Button Small
  },
  
  // Body sizes (Ubuntu)
  body: {
    large: '16px',    // Body Large
    medium: '14px',   // Body Medium
    small: '12px',    // Body Small
  },
};

/**
 * LINE HEIGHTS - Alturas de línea optimizadas
 * 
 * Valores exactos extraídos de Figma para óptima legibilidad
 */
export const lineHeights = {
  // Display line heights
  display: {
    large: '64px',    // 57/64
    medium: '52px',   // 45/52
    small: '44px',    // 36/44
  },
  
  // Heading line heights
  heading: {
    large: '40px',    // 32/40
    medium: '36px',   // 28/36
    small: '32px',    // 24/32
  },
  
  // Title line heights
  title: {
    large: '28px',    // 22/28
    medium: '24px',   // 16/24
    small: '20px',    // 14/20
  },
  
  // Label line heights
  label: {
    large: '20px',    // 14/20
    medium: '16px',   // 12/16
    small: '16px',    // 11/16
  },
  
  // Button line heights
  button: {
    xl: '28px',       // 18/28
    large: '24px',    // 16/24
    medium: '20px',   // 14/20
    small: '16px',    // 12/16
  },
  
  // Body line heights
  body: {
    large: '24px',    // 16/24
    medium: '20px',   // 14/20
    small: '16px',    // 12/16
  },
};

/**
 * TEXT STYLES - Estilos tipográficos completos
 * 
 * Cada estilo combina font-family, font-size, font-weight y line-height
 * según las especificaciones exactas de Figma
 */
export const textStyles = {
  // ==========================================
  // DISPLAY STYLES (Ubuntu)
  // ==========================================
  
  /**
   * Display Large - Títulos principales y hero text
   * Ubuntu 57/64 Regular
   */
  displayLarge: {
    fontFamily: fontFamilies.display,
    fontSize: fontSizes.display.large,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.display.large,
    letterSpacing: '0em',
  },
  
  /**
   * Display Medium - Subtítulos importantes
   * Ubuntu 45/52 Regular
   */
  displayMedium: {
    fontFamily: fontFamilies.display,
    fontSize: fontSizes.display.medium,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.display.medium,
    letterSpacing: '0em',
  },
  
  /**
   * Display Small - Títulos de sección
   * Ubuntu 36/44 Regular
   */
  displaySmall: {
    fontFamily: fontFamilies.display,
    fontSize: fontSizes.display.small,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.display.small,
    letterSpacing: '0em',
  },

  // ==========================================
  // HEADING STYLES (Ubuntu)
  // ==========================================
  
  /**
   * Heading Large - Encabezados principales
   * Ubuntu 32/40 Regular
   */
  headingLarge: {
    fontFamily: fontFamilies.heading,
    fontSize: fontSizes.heading.large,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.heading.large,
    letterSpacing: '0em',
  },
  
  /**
   * Heading Medium - Encabezados secundarios
   * Ubuntu 28/36 Regular
   */
  headingMedium: {
    fontFamily: fontFamilies.heading,
    fontSize: fontSizes.heading.medium,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.heading.medium,
    letterSpacing: '0em',
  },
  
  /**
   * Heading Small - Encabezados de subsección
   * Ubuntu 24/32 Regular
   */
  headingSmall: {
    fontFamily: fontFamilies.heading,
    fontSize: fontSizes.heading.small,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.heading.small,
    letterSpacing: '0em',
  },

  // ==========================================
  // TITLE STYLES (Ubuntu)
  // ==========================================
  
  /**
   * Title Large - Títulos de componentes
   * Ubuntu 22/28 Regular
   */
  titleLarge: {
    fontFamily: fontFamilies.heading,
    fontSize: fontSizes.title.large,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.title.large,
    letterSpacing: '0em',
  },
  
  /**
   * Title Medium - Títulos de tarjetas
   * Ubuntu 16/24 Medium
   */
  titleMedium: {
    fontFamily: fontFamilies.heading,
    fontSize: fontSizes.title.medium,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.title.medium,
    letterSpacing: '0em',
  },
  
  /**
   * Title Small - Títulos menores
   * Ubuntu 14/20 Medium
   */
  titleSmall: {
    fontFamily: fontFamilies.heading,
    fontSize: fontSizes.title.small,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.title.small,
    letterSpacing: '0em',
  },

  // ==========================================
  // LABEL STYLES (Ubuntu)
  // ==========================================
  
  /**
   * Label Large - Labels principales
   * Ubuntu 14/20 Medium
   */
  labelLarge: {
    fontFamily: fontFamilies.heading,
    fontSize: fontSizes.label.large,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.label.large,
    letterSpacing: '0em',
  },
  
  /**
   * Label Medium - Labels estándar
   * Ubuntu 12/16 Medium
   */
  labelMedium: {
    fontFamily: fontFamilies.heading,
    fontSize: fontSizes.label.medium,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.label.medium,
    letterSpacing: '0em',
  },
  
  /**
   * Label Small - Labels pequeños
   * Ubuntu 11/16 Medium
   */
  labelSmall: {
    fontFamily: fontFamilies.heading,
    fontSize: fontSizes.label.small,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.label.small,
    letterSpacing: '0em',
  },

  // ==========================================
  // BUTTON STYLES (Ubuntu)
  // ==========================================
  
  /**
   * Button Extra Large - Botones hero
   * Ubuntu 18/28 Bold
   */
  buttonXL: {
    fontFamily: fontFamilies.heading,
    fontSize: fontSizes.button.xl,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.button.xl,
    letterSpacing: '0em',
  },
  
  /**
   * Button Large - Botones principales
   * Ubuntu 16/24 Medium
   */
  buttonLarge: {
    fontFamily: fontFamilies.heading,
    fontSize: fontSizes.button.large,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.button.large,
    letterSpacing: '0em',
  },
  
  /**
   * Button Medium - Botones estándar
   * Ubuntu 14/20 Medium
   */
  buttonMedium: {
    fontFamily: fontFamilies.heading,
    fontSize: fontSizes.button.medium,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.button.medium,
    letterSpacing: '0em',
  },
  
  /**
   * Button Small - Botones pequeños
   * Ubuntu 12/16 Medium
   */
  buttonSmall: {
    fontFamily: fontFamilies.heading,
    fontSize: fontSizes.button.small,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.button.small,
    letterSpacing: '0em',
  },

  // ==========================================
  // BODY STYLES (Roboto)
  // ==========================================
  
  /**
   * Body Large - Texto principal
   * Roboto 16/24 Regular
   */
  bodyLarge: {
    fontFamily: fontFamilies.body,
    fontSize: fontSizes.body.large,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.body.large,
    letterSpacing: '0em',
  },
  
  /**
   * Body Medium - Texto secundario
   * Roboto 14/20 Regular
   */
  bodyMedium: {
    fontFamily: fontFamilies.body,
    fontSize: fontSizes.body.medium,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.body.medium,
    letterSpacing: '0em',
  },
  
  /**
   * Body Small - Texto auxiliar
   * Roboto 12/16 Regular
   */
  bodySmall: {
    fontFamily: fontFamilies.body,
    fontSize: fontSizes.body.small,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.body.small,
    letterSpacing: '0em',
  },

  // ==========================================
  // EMPHASIS VARIANTS - Variantes de énfasis
  // ==========================================
  
  /**
   * DISPLAY EMPHASIS STYLES
   * Versiones con mayor peso tipográfico para mayor prominencia
   */
  
  /**
   * Display Large Emphasis - Máximo impacto visual
   * Reckless 57/64 Medium
   */
  displayLargeEmphasis: {
    fontFamily: fontFamilies.display,
    fontSize: fontSizes.display.large,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.display.large,
    letterSpacing: '0em',
  },
  
  /**
   * Display Medium Emphasis - Gran impacto
   * Reckless 45/52 Medium  
   */
  displayMediumEmphasis: {
    fontFamily: fontFamilies.display,
    fontSize: fontSizes.display.medium,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.display.medium,
    letterSpacing: '0em',
  },
  
  /**
   * Display Small Emphasis - Impacto destacado
   * Reckless 36/44 Medium
   */
  displaySmallEmphasis: {
    fontFamily: fontFamilies.display,
    fontSize: fontSizes.display.small,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.display.small,
    letterSpacing: '0em',
  },

  /**
   * HEADING EMPHASIS STYLES  
   * Encabezados con mayor peso para destacar jerarquía
   */
  
  /**
   * Heading Large Emphasis - Encabezado principal destacado
   * Ubuntu 32/40 Medium
   */
  headingLargeEmphasis: {
    fontFamily: fontFamilies.heading,
    fontSize: fontSizes.heading.large,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.heading.large,
    letterSpacing: '0em',
  },
  
  /**
   * Heading Medium Emphasis - Encabezado secundario destacado
   * Ubuntu 28/36 Medium
   */
  headingMediumEmphasis: {
    fontFamily: fontFamilies.heading,
    fontSize: fontSizes.heading.medium,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.heading.medium,
    letterSpacing: '0em',
  },
  
  /**
   * Heading Small Emphasis - Encabezado menor destacado
   * Ubuntu 24/32 Medium
   */
  headingSmallEmphasis: {
    fontFamily: fontFamilies.heading,
    fontSize: fontSizes.heading.small,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.heading.small,
    letterSpacing: '0em',
  },

  /**
   * TITLE EMPHASIS STYLES
   * Títulos con mayor prominencia visual
   */
  
  /**
   * Title Large Emphasis - Título principal destacado
   * Ubuntu 22/28 Medium
   */
  titleLargeEmphasis: {
    fontFamily: fontFamilies.heading,
    fontSize: fontSizes.title.large,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.title.large,
    letterSpacing: '0em',
  },
  
  /**
   * Title Medium Emphasis - Título de tarjeta destacado
   * Ubuntu 16/24 Bold
   */
  titleMediumEmphasis: {
    fontFamily: fontFamilies.heading,
    fontSize: fontSizes.title.medium,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.title.medium,
    letterSpacing: '0em',
  },
  
  /**
   * Title Small Emphasis - Título menor destacado
   * Ubuntu 14/20 Bold
   */
  titleSmallEmphasis: {
    fontFamily: fontFamilies.heading,
    fontSize: fontSizes.title.small,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.title.small,
    letterSpacing: '0em',
  },

  /**
   * LABEL EMPHASIS STYLES
   * Labels con mayor peso para destacar información importante
   */
  
  /**
   * Label Large Emphasis - Label principal destacado
   * Ubuntu 14/20 Bold
   */
  labelLargeEmphasis: {
    fontFamily: fontFamilies.heading,
    fontSize: fontSizes.label.large,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.label.large,
    letterSpacing: '0em',
  },
  
  /**
   * Label Medium Emphasis - Label estándar destacado
   * Ubuntu 12/16 Bold
   */
  labelMediumEmphasis: {
    fontFamily: fontFamilies.heading,
    fontSize: fontSizes.label.medium,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.label.medium,
    letterSpacing: '0em',
  },
  
  /**
   * Label Small Emphasis - Label pequeño destacado
   * Ubuntu 11/16 Bold
   */
  labelSmallEmphasis: {
    fontFamily: fontFamilies.heading,
    fontSize: fontSizes.label.small,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.label.small,
    letterSpacing: '0em',
  },

  /**
   * BODY EMPHASIS STYLES
   * Texto de contenido con mayor peso para destacar partes importantes
   */
  
  /**
   * Body Large Emphasis - Texto principal destacado
   * Roboto 16/24 Medium
   */
  bodyLargeEmphasis: {
    fontFamily: fontFamilies.body,
    fontSize: fontSizes.body.large,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.body.large,
    letterSpacing: '0em',
  },
  
  /**
   * Body Medium Emphasis - Texto secundario destacado
   * Roboto 14/20 Medium
   */
  bodyMediumEmphasis: {
    fontFamily: fontFamilies.body,
    fontSize: fontSizes.body.medium,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.body.medium,
    letterSpacing: '0em',
  },
  
  /**
   * Body Small Emphasis - Texto auxiliar destacado
   * Roboto 12/16 Medium
   */
  bodySmallEmphasis: {
    fontFamily: fontFamilies.body,
    fontSize: fontSizes.body.small,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.body.small,
    letterSpacing: '0em',
  },
};

/**
 * TYPOGRAPHY - Objeto principal de exportación
 * 
 * Contiene todos los tokens tipográficos organizados para fácil acceso
 * Incluye tanto estilos baseline como emphasis variants
 * 
 * @example
 * // Usar familias tipográficas
 * import { fontFamilies } from '@design-system/tokens/typography'
 * fontFamily: fontFamilies.heading
 * 
 * // Usar estilos baseline
 * import { textStyles } from '@design-system/tokens/typography'
 * const titleStyle = textStyles.headingLarge
 * 
 * // Usar estilos emphasis
 * const emphasizedTitle = textStyles.headingLargeEmphasis
 * 
 * // Usar tokens individuales
 * import { fontSizes, lineHeights } from '@design-system/tokens/typography'
 * fontSize: fontSizes.heading.large
 * lineHeight: lineHeights.heading.large
 */
export const typography = {
  fontFamilies,
  fontWeights,
  fontSizes,
  lineHeights,
  textStyles,
};

/**
 * Exportación por defecto
 * Facilita la importación del sistema tipográfico completo
 * Incluye estilos baseline y emphasis variants
 */
export default typography;

// Also make available globally for non-module usage
if (typeof window !== 'undefined') {
    window.textStyles = textStyles;
    window.typography = typography;
}