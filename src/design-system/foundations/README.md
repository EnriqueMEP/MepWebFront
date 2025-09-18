# Design System Foundations - Guía de Uso

## 📋 Índice
- [Introducción](#introducción)
- [Estructura de Foundations](#estructura-de-foundations)
- [Colores](#colores)
- [Tipografía](#tipografía)
- [Elevación](#elevación)
- [Colores Semánticos](#colores-semánticos)
- [Ejemplos de Uso](#ejemplos-de-uso)
- [Mejores Prácticas](#mejores-prácticas)

## 🎨 Introducción

Este design system utiliza foundations (elementos fundamentales) de diseño para mantener consistencia visual en toda la aplicación. Las foundations son valores nombrados que representan decisiones de diseño reutilizables.

### Importación de Foundations

```javascript
// Importar foundations específicas
import { primitiveColors } from './design-system/foundations/colors.js';
import { lightTheme, darkTheme } from './design-system/foundations/semantic-colors.js';
import { textStyles } from './design-system/foundations/typography.js';
import { lightElevation, darkElevation } from './design-system/foundations/elevation.js';

// Importar todas las foundations
import * as colors from './design-system/foundations/colors.js';
import * as semanticColors from './design-system/foundations/semantic-colors.js';
import * as typography from './design-system/foundations/typography.js';
import * as elevation from './design-system/foundations/elevation.js';
```

## 🌈 Colores

### Colores Primitivos

Los colores primitivos son la base del sistema de colores. Cada color tiene una paleta de 10 tonos (50-900).

```javascript
import { primitiveColors } from './colors.js';

// Uso de colores primitivos
const styles = {
  backgroundColor: primitiveColors.olive[500],    // Color principal
  borderColor: primitiveColors.olive[200],       // Color claro
  textColor: primitiveColors.neutral[800],       // Texto oscuro
};
```

#### Paletas Disponibles:
- **Olive**: `olive[50]` a `olive[900]`
- **Green**: `green[50]` a `green[900]`
- **Red**: `red[50]` a `red[900]`
- **Cactus**: `cactus[50]` a `cactus[900]`
- **Orange**: `orange[50]` a `orange[900]`
- **Neutral**: `neutral[50]` a `neutral[900]`

### Ejemplo de Uso de Colores Primitivos

```javascript
// Componente con colores primitivos
const Button = ({ variant = 'primary' }) => {
  const getButtonStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: primitiveColors.olive[600],
          color: primitiveColors.neutral[50],
          borderColor: primitiveColors.olive[700],
        };
      case 'secondary':
        return {
          backgroundColor: primitiveColors.green[500],
          color: primitiveColors.neutral[50],
          borderColor: primitiveColors.green[600],
        };
      case 'danger':
        return {
          backgroundColor: primitiveColors.red[500],
          color: primitiveColors.neutral[50],
          borderColor: primitiveColors.red[600],
        };
      default:
        return {};
    }
  };

  return <button style={getButtonStyles()}>Button</button>;
};
```

## 🎯 Colores Semánticos

Los colores semánticos proporcionan significado contextual y soporte para temas claro/oscuro.

```javascript
import { lightTheme, darkTheme } from './semantic-colors.js';

// Uso de colores semánticos
const Card = ({ theme = 'light' }) => {
  const colors = theme === 'light' ? lightTheme : darkTheme;
  
  return (
    <div style={{
      backgroundColor: colors.surface,
      color: colors.onSurface,
      borderColor: colors.outline,
    }}>
      <h2 style={{ color: colors.primary }}>Título</h2>
      <p style={{ color: colors.onSurfaceVariant }}>Contenido</p>
    </div>
  );
};
```

#### Colores Semánticos Disponibles:

**Principales:**
- `primary` - Color principal de la marca
- `onPrimary` - Texto sobre color principal
- `primaryContainer` - Contenedor del color principal
- `onPrimaryContainer` - Texto sobre contenedor principal

**Secundarios:**
- `secondary` - Color secundario
- `onSecondary` - Texto sobre color secundario
- `secondaryContainer` - Contenedor del color secundario
- `onSecondaryContainer` - Texto sobre contenedor secundario

**Superficies:**
- `surface` - Color de superficie base
- `onSurface` - Texto sobre superficie
- `surfaceVariant` - Variante de superficie
- `onSurfaceVariant` - Texto sobre variante de superficie

**Otros:**
- `outline` - Color de bordes
- `background` - Color de fondo general
- `onBackground` - Texto sobre fondo

## ✍️ Tipografía

El sistema tipográfico incluye tres familias de fuentes y múltiples estilos predefinidos.

```javascript
import { textStyles, fontFamilies, fontWeights } from './typography.js';

// Uso de estilos tipográficos
const Heading = ({ level = 'large', emphasis = false }) => {
  const styleKey = `heading${level.charAt(0).toUpperCase() + level.slice(1)}${emphasis ? 'Emphasis' : ''}`;
  const style = textStyles[styleKey];
  
  return <h1 style={style}>Título</h1>;
};
```

### Familias de Fuentes

```javascript
// Familias disponibles
fontFamilies.display    // "Reckless TRIAL" - Para títulos grandes
fontFamilies.heading    // "Ubuntu" - Para encabezados
fontFamilies.body       // "Roboto" - Para texto de cuerpo
```

### Estilos de Texto Disponibles

#### Display (Reckless TRIAL)
- `displayLarge` / `displayLargeEmphasis`
- `displayMedium` / `displayMediumEmphasis`
- `displaySmall` / `displaySmallEmphasis`

#### Heading (Ubuntu)
- `headingLarge` / `headingLargeEmphasis`
- `headingMedium` / `headingMediumEmphasis`
- `headingSmall` / `headingSmallEmphasis`

#### Title (Ubuntu)
- `titleLarge` / `titleLargeEmphasis`
- `titleMedium` / `titleMediumEmphasis`
- `titleSmall` / `titleSmallEmphasis`

#### Body (Roboto)
- `bodyLarge` / `bodyLargeEmphasis`
- `bodyMedium` / `bodyMediumEmphasis`
- `bodySmall` / `bodySmallEmphasis`

#### Label (Roboto)
- `labelLarge` / `labelLargeEmphasis`
- `labelMedium` / `labelMediumEmphasis`
- `labelSmall` / `labelSmallEmphasis`

### Ejemplo de Uso Tipográfico

```javascript
const TypographyExample = () => {
  return (
    <div>
      <h1 style={textStyles.displayLarge}>Título Principal</h1>
      <h2 style={textStyles.headingLarge}>Encabezado</h2>
      <h3 style={textStyles.titleMedium}>Subtítulo</h3>
      <p style={textStyles.bodyLarge}>
        Este es un párrafo con texto de cuerpo grande.
      </p>
      <span style={textStyles.labelMedium}>Etiqueta</span>
    </div>
  );
};
```

## 📐 Elevación

El sistema de elevación crea jerarquía visual mediante sombras.

```javascript
import { lightElevation, darkElevation } from './elevation.js';

// Uso de elevaciones
const Modal = ({ theme = 'light' }) => {
  const elevation = theme === 'light' ? lightElevation : darkElevation;
  
  return (
    <div style={{
      boxShadow: elevation.level4,
      backgroundColor: 'white',
      borderRadius: '8px',
      padding: '24px'
    }}>
      Contenido del modal
    </div>
  );
};
```

### Niveles de Elevación Disponibles

- `level0` - Sin sombra (superficie base)
- `level1` - Sombra muy sutil (cards básicas)
- `level2` - Sombra ligera (botones elevados)
- `level3` - Sombra media (modales, dropdowns)
- `level4` - Sombra prominente (navigation drawer)
- `level5` - Sombra máxima (elementos flotantes)

## 💡 Ejemplos de Uso Completos

### Componente Card con Foundations

```javascript
import { primitiveColors } from './foundations/colors.js';
import { lightTheme } from './foundations/semantic-colors.js';
import { textStyles } from './foundations/typography.js';
import { lightElevation } from './foundations/elevation.js';

const Card = ({ title, content, variant = 'default' }) => {
  const getCardStyles = () => {
    const baseStyles = {
      backgroundColor: lightTheme.surface,
      color: lightTheme.onSurface,
      borderRadius: '12px',
      padding: '16px',
      boxShadow: lightElevation.level2,
    };

    if (variant === 'primary') {
      return {
        ...baseStyles,
        borderLeft: `4px solid ${primitiveColors.olive[500]}`,
      };
    }

    if (variant === 'warning') {
      return {
        ...baseStyles,
        backgroundColor: primitiveColors.orange[50],
        borderLeft: `4px solid ${primitiveColors.orange[500]}`,
      };
    }

    return baseStyles;
  };

  return (
    <div style={getCardStyles()}>
      <h3 style={{
        ...textStyles.titleMedium,
        color: lightTheme.primary,
        marginBottom: '8px'
      }}>
        {title}
      </h3>
      <p style={{
        ...textStyles.bodyMedium,
        color: lightTheme.onSurfaceVariant,
        margin: 0
      }}>
        {content}
      </p>
    </div>
  );
};
```

### Sistema de Botones con Foundations

```javascript
const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  disabled = false 
}) => {
  const getButtonStyles = () => {
    const baseStyles = {
      border: 'none',
      borderRadius: '8px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'all 0.2s ease',
      fontFamily: textStyles.labelMedium.fontFamily,
      fontWeight: textStyles.labelMedium.fontWeight,
    };

    // Variantes de color
    const colorStyles = {
      primary: {
        backgroundColor: primitiveColors.olive[600],
        color: primitiveColors.neutral[50],
        boxShadow: lightElevation.level1,
      },
      secondary: {
        backgroundColor: primitiveColors.neutral[100],
        color: primitiveColors.neutral[800],
        border: `1px solid ${primitiveColors.neutral[300]}`,
      },
      danger: {
        backgroundColor: primitiveColors.red[500],
        color: primitiveColors.neutral[50],
        boxShadow: lightElevation.level1,
      }
    };

    // Tamaños
    const sizeStyles = {
      small: {
        padding: '6px 12px',
        fontSize: textStyles.labelSmall.fontSize,
        lineHeight: textStyles.labelSmall.lineHeight,
      },
      medium: {
        padding: '8px 16px',
        fontSize: textStyles.labelMedium.fontSize,
        lineHeight: textStyles.labelMedium.lineHeight,
      },
      large: {
        padding: '12px 24px',
        fontSize: textStyles.labelLarge.fontSize,
        lineHeight: textStyles.labelLarge.lineHeight,
      }
    };

    return {
      ...baseStyles,
      ...colorStyles[variant],
      ...sizeStyles[size],
      opacity: disabled ? 0.6 : 1,
    };
  };

  return (
    <button 
      style={getButtonStyles()}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
```

## 🎯 Mejores Prácticas

### 1. Usa Foundations Semánticas Cuando Sea Posible
```javascript
// ✅ Recomendado
backgroundColor: lightTheme.surface

// ❌ Evitar (excepto casos específicos)
backgroundColor: primitiveColors.neutral[50]
```

### 2. Crea Funciones Helper para Temas
```javascript
const useTheme = (isDark = false) => {
  return {
    colors: isDark ? darkTheme : lightTheme,
    elevation: isDark ? darkElevation : lightElevation,
  };
};
```

### 3. Usa Constantes para Valores Repetidos
```javascript
const SPACING = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
};
```

### 4. Mantén Consistencia en Componentes
```javascript
// ✅ Usa el mismo sistema de elevación
const components = {
  card: { boxShadow: lightElevation.level1 },
  modal: { boxShadow: lightElevation.level4 },
  tooltip: { boxShadow: lightElevation.level3 },
};
```

### 5. Documenta Casos de Uso Específicos
```javascript
// Para casos especiales, documenta el motivo
const SpecialComponent = () => (
  <div style={{
    // Usamos color primitivo para coincidir con branding específico
    backgroundColor: primitiveColors.olive[500], 
  }}>
    Contenido especial
  </div>
);
```

## 🔧 Utilidades Auxiliares

### Hook para Tema Dinámico
```javascript
import { useState, useEffect } from 'react';

export const useDesignFoundations = () => {
  const [isDark, setIsDark] = useState(false);

  const theme = {
    colors: isDark ? darkTheme : lightTheme,
    elevation: isDark ? darkElevation : lightElevation,
    typography: textStyles,
    primitives: primitiveColors,
  };

  const toggleTheme = () => setIsDark(!isDark);

  return { theme, isDark, toggleTheme };
};
```

### Función de Utilidad para Espaciado
```javascript
export const spacing = (multiplier = 1) => `${8 * multiplier}px`;

// Uso: spacing(2) = "16px", spacing(0.5) = "4px"
```

---

## 📊 Live Preview

Para ver todas las foundations en acción, visita el **Design Foundations Live Viewer** ejecutando la aplicación y navegando a la página principal.

El viewer muestra:
- ✨ Todos los colores primitivos organizados por familia
- 🎨 Colores semánticos en temas claro y oscuro
- 📝 Ejemplos tipográficos con todas las variantes
- 📐 Niveles de elevación en contextos claro y oscuro
- 💻 Código JSON exportable de todas las foundations

---

*Última actualización: Septiembre 2025*