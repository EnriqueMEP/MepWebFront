# 🎨 Guía de Gestión de Colores - Sistema de Diseño MEP

Esta guía te explica **exactamente dónde y cómo modificar los colores** del sistema de diseño para cambiarlos fácilmente.

## 📁 Estructura del Sistema de Colores

```
src/design-system/foundations/
├── colors.js              ← 🔹 COLORES PRIMITIVOS (paletas base)
├── semantic-colors.js     ← 🔸 TOKENS SEMÁNTICOS (roles de UI)
├── ThemeContext.jsx       ← 🔹 Proveedor de tema global
├── theme-hooks.js         ← 🔸 Hooks para usar colores en componentes
└── semantica              ← 📋 Especificación de referencia
```

---

## 🎯 **¿Dónde Cambiar Cada Tipo de Color?**

### 1. 🔹 **Colores Primitivos** → `colors.js`
**¿Cuándo usar?** Para cambiar paletas completas de colores base.

```javascript
// src/design-system/foundations/colors.js

export const primitiveColors = {
  olive: {
    50:  '#f2f8f0',  // ← Cambiar aquí para nuevos tonos olive
    100: '#ddeeda',
    200: '#bbddb1',
    300: '#92c482',
    400: '#629d54',
    500: '#3f762f',  // ← Color base olive
    600: '#356028',
    700: '#294a20',
    800: '#1D3518',
    900: '#12210f',
  },
  
  green: {
    50:  '#f0faf0',  // ← Cambiar aquí para nuevos tonos green
    100: '#dcf4dc',
    200: '#b8e8b8',
    300: '#8dd88d',
    400: '#5cb85c',
    500: '#44962a',  // ← Color base green
    // ... más tonos
  },
  
  // ✨ AGREGAR NUEVA PALETA
  blue: {           // ← Agregar completamente nuevas paletas aquí
    50:  '#eff6ff',
    500: '#3b82f6',
    900: '#1e3a8a',
  }
};
```

**Ejemplo: Cambiar el color olive principal**
```javascript
// Cambiar de verde oliva a azul
olive: {
  500: '#3b82f6',  // Era '#3f762f'
}
```

---

### 2. 🔸 **Tokens Semánticos** → `semantic-colors.js`
**¿Cuándo usar?** Para cambiar qué color primitivo usa cada rol (primary, secondary, etc.).

```javascript
// src/design-system/foundations/semantic-colors.js

export const lightTheme = {
  // CAMBIAR COLOR PRIMARY
  primary: {
    background: primitiveColors.olive[500], // ← Cambiar a olive[600] para más oscuro
    text: primitiveColors.olive[50],        // ← Color del texto sobre primary
  },

  // CAMBIAR COLOR SECONDARY  
  secondary: {
    background: primitiveColors.green[500], // ← Cambiar a blue[500] para azul
    text: primitiveColors.green[50],
  },

  // AGREGAR NUEVO TOKEN SEMÁNTICO
  tertiary: {                              // ← Nuevo token
    background: primitiveColors.blue[500],
    text: primitiveColors.blue[50],
  },
};

export const darkTheme = {
  // MISMO PATRÓN PARA TEMA OSCURO
  primary: {
    background: primitiveColors.olive[400], // ← Más claro en dark mode
    text: primitiveColors.olive[900],
  },
};
```

**Ejemplos comunes:**

```javascript
// 🔄 Cambiar primary de olive a green
primary: {
  background: primitiveColors.green[500], // Era olive[500]
  text: primitiveColors.green[50],
},

// 🔄 Hacer secondary más oscuro
secondary: {
  background: primitiveColors.green[600], // Era green[500]
  text: primitiveColors.green[50],
},

// ➕ Agregar nuevo color "accent"
accent: {
  background: primitiveColors.blue[500],
  text: primitiveColors.blue[50],
},
```

---

## 🚀 **Casos de Uso Frecuentes**

### **Cambiar Color de Botones Principales**
```javascript
// src/design-system/foundations/semantic-colors.js

// Para cambiar TODOS los botones primary
primary: {
  background: primitiveColors.blue[500], // ← Nuevo color de fondo
  text: primitiveColors.blue[50],        // ← Color de texto compatible
},
```

### **Cambiar Color de Botones Secundarios**
```javascript
// Para cambiar TODOS los botones secondary
secondary: {
  background: primitiveColors.purple[500],
  text: primitiveColors.purple[50],
},
```

### **Agregar Nuevos Colores de Marca**
```javascript
// 1. Agregar paleta en colors.js
export const primitiveColors = {
  // ... colores existentes
  brand: {
    50:  '#fef2f2',
    500: '#ef4444',
    900: '#7f1d1d',
  }
};

// 2. Crear token semántico en semantic-colors.js
export const lightTheme = {
  // ... tokens existentes
  brand: {
    background: primitiveColors.brand[500],
    text: primitiveColors.brand[50],
  },
};
```

---

## 🔧 **Cómo Probar los Cambios**

### 1. **Modificar el archivo correspondiente**
- Colores primitivos → `colors.js`
- Tokens semánticos → `semantic-colors.js`

### 2. **Los cambios se aplican automáticamente**
- El sistema usa `ThemeContext` que se actualiza automáticamente
- Los componentes usan hooks que detectan cambios en tiempo real

### 3. **Verificar en el navegador**
```bash
npm run dev
```
- Los botones y componentes mostrarán los nuevos colores inmediatamente

---

## 📋 **Checklist de Cambios de Color**

- [ ] **¿Cambio una paleta completa?** → Editar `colors.js`
- [ ] **¿Cambio qué color usa primary/secondary?** → Editar `semantic-colors.js`
- [ ] **¿Agrego un color completamente nuevo?** → Editar ambos archivos
- [ ] **¿Verifico que funcione en light Y dark mode?** → Probar ambos temas
- [ ] **¿El contraste texto/fondo es adecuado?** → Verificar legibilidad

---

## ⚠️ **Consideraciones Importantes**

### **Contraste y Accesibilidad**
```javascript
// ✅ BUENO - Alto contraste
primary: {
  background: primitiveColors.olive[600], // Oscuro
  text: primitiveColors.olive[50],        // Claro
},

// ❌ MALO - Bajo contraste
primary: {
  background: primitiveColors.olive[300], // Claro
  text: primitiveColors.olive[400],       // También claro
},
```

### **Consistencia entre Temas**
```javascript
// ✅ BUENO - Lógica consistente
lightTheme.primary.background = primitiveColors.olive[600]; // Oscuro en light
darkTheme.primary.background = primitiveColors.olive[400];  // Claro en dark

// ❌ MALO - Lógica inconsistente
lightTheme.primary.background = primitiveColors.olive[600];
darkTheme.primary.background = primitiveColors.olive[800]; // También oscuro
```

---

## 🎯 **Ejemplos Prácticos Completos**

### **Ejemplo 1: Cambiar de Verde a Azul**
```javascript
// 1. Agregar paleta azul en colors.js
blue: {
  50:  '#eff6ff',
  500: '#3b82f6',
  600: '#2563eb',
  900: '#1e3a8a',
},

// 2. Cambiar tokens en semantic-colors.js
primary: {
  background: primitiveColors.blue[500], // Era olive[500]
  text: primitiveColors.blue[50],
},
```

### **Ejemplo 2: Crear Tema Corporativo**
```javascript
// 1. Agregar colores corporativos en colors.js
corporate: {
  50:  '#fafafa',
  500: '#0066cc',
  900: '#003366',
},

// 2. Mapear en semantic-colors.js
primary: {
  background: primitiveColors.corporate[500],
  text: primitiveColors.corporate[50],
},
```

---

## 🆘 **Resolución de Problemas**

### **"No se ven los cambios"**
1. Verificar que modificaste el archivo correcto
2. Verificar sintaxis JavaScript (comas, llaves)
3. Recargar completamente el navegador (Ctrl+F5)

### **"Los colores no contrastan bien"**
1. Usar herramientas de contraste online
2. Seguir el patrón: fondo oscuro → texto claro, fondo claro → texto oscuro

### **"Solo funciona en light mode"**
1. Verificar que modificaste también `darkTheme` en `semantic-colors.js`

---

## 📞 **¿Necesitas Ayuda?**

- **Cambios simples**: Usa esta guía
- **Cambios complejos**: Revisar el archivo `semantica` para especificaciones
- **Dudas sobre accesibilidad**: Verificar contraste con herramientas online

---

**🎨 ¡Listo! Con esta guía puedes cambiar cualquier color del sistema fácilmente.**

---

## 🟦 Cómo funcionan los colores en los componentes (ejemplo: Botones)

Los **componentes** (como los botones) NO usan colores directos, sino **tokens semánticos** definidos en `semantic-colors.js`. Así, si cambias el color en los tokens, todos los botones que usan ese rol se actualizan automáticamente.

### ¿Dónde se conecta?
- Los botones usan hooks como `useComponentColors` o acceden al contexto de tema (`ThemeContext`) para obtener los colores semánticos.
- Ejemplo de uso en un botón:

```jsx
// Dentro de un componente de botón
const { primary, onPrimary, secondary } = useComponentColors();

// Usar en estilos:
style={{
  backgroundColor: primary.background, // ← Viene de semantic-colors.js
  color: primary.text,
}}
```

### ¿Cómo cambiar el color de TODOS los botones primary?
1. Ve a `src/design-system/foundations/semantic-colors.js`
2. Cambia el valor de `primary.background` y `primary.text` en el tema correspondiente (lightTheme/darkTheme)

```javascript
primary: {
  background: primitiveColors.blue[500], // Cambia aquí el fondo
  text: primitiveColors.blue[50],        // Cambia aquí el texto
},
```

### ¿Cómo personalizar SOLO un botón específico?
- Si quieres que un botón tenga un color diferente solo en un caso especial, puedes pasarle un estilo inline o una prop `style`:

```jsx
<ButtonPrimary style={{ backgroundColor: '#ff0000', color: '#fff' }}>
  Botón Rojo
</ButtonPrimary>
```
- **Recomendado:** Si el cambio es global para una variante, usa los tokens semánticos. Si es solo para un caso puntual, usa la prop `style`.

### ¿Cómo agregar una nueva variante de color para botones?
1. Agrega un nuevo token en `semantic-colors.js` (por ejemplo, `accent`)
2. Modifica el componente para aceptar una prop `variant` y usar el token correspondiente:

```jsx
// En el componente
const { accent, primary } = useComponentColors();
const colors = variant === 'accent' ? accent : primary;

// Usar en estilos
style={{ backgroundColor: colors.background, color: colors.text }}
```

3. Ahora puedes usar:
```jsx
<ButtonPrimary variant="accent">Botón Accent</ButtonPrimary>
```

---

**Resumen:**
- Cambia los colores globales de los botones editando los tokens en `semantic-colors.js`.
- Los componentes siempre usan esos tokens, así que el cambio es automático y consistente.
- Para personalizaciones puntuales, usa la prop `style` en el componente.
- Para nuevas variantes, agrega un nuevo token y ajusta el componente para soportarlo.