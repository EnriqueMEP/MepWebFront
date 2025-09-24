# MepWebFront - Design System

Un sistema de diseño moderno con soporte para modo claro/oscuro y componentes atómicos reutilizables construido con React + Vite.

## 🎯 Descripción General

Este proyecto implementa un **Design System completo** siguiendo la metodología de Atomic Design con un sistema de tokens semánticos que soporta múltiples temas de manera automática.

### Características Principales:
- ✅ **Atomic Design**: Estructura organizada en atoms, molecules, organisms
- ✅ **Design Tokens**: Sistema semántico de colores adaptativos
- ✅ **Tema Dinámico**: Soporte automático para Light/Dark mode
- ✅ **Componentes React**: Botones con estados completos y variantes
- ✅ **Iconografía**: Sistema unificado de iconos SVG con Remix Icons
- ✅ **TypeScript Ready**: Estructura preparada para migración a TS

## 🏗️ Arquitectura del Proyecto

```
src/
├── design-system/           # 🎨 Sistema de Diseño Principal
│   ├── foundations/         # 🏛️ Fundamentos del Design System
│   │   ├── colors.js        # Paleta base de colores
│   │   ├── semantic-colors.js # Tokens semánticos adaptativos
│   │   ├── theme-hooks.js   # Hooks para consumir tokens
│   │   ├── typography.js    # Sistema tipográfico
│   │   ├── elevation.js     # Sombras y elevaciones
│   │   └── icons/          # Sistema de iconografía
│   │       ├── Icon.jsx    # Componente base de iconos
│   │       ├── svg-imports.js # Importaciones dinámicas SVG
│   │       ├── Fill/       # Iconos rellenos
│   │       └── Line/       # Iconos de línea
│   └── atoms/              # ⚛️ Componentes Atómicos
│       └── Button/         # Sistema completo de botones
│           ├── Primary/    # Botones primarios (4 tamaños)
│           ├── Secondary/  # Botones secundarios (4 tamaños)
│           ├── Outline/    # Botones outline (4 tamaños)
│           └── Ghost/      # Botones ghost (4 tamaños)
├── App.jsx                 # 🚀 Demo navegable del sistema
└── main.jsx               # ⚡ Entry point
```

## 🎨 Sistema de Design Tokens

### Filosofía de Tokens Semánticos
En lugar de usar colores directos (`blue[500]`), utilizamos **tokens semánticos** que se adaptan automáticamente al tema:

```javascript
// ❌ Antiguo - Colores hardcodeados
background: blue[500]
hover: blue[700]

// ✅ Nuevo - Tokens semánticos
background: useComponentColors('buttonPrimary').backgroundColor
hover: useComponentColors('buttonPrimaryHover').backgroundColor
```

### Beneficios del Sistema:
1. **Automatismo**: Un solo token funciona en light y dark mode
2. **Consistencia**: Todos los componentes usan la misma fuente de verdad
3. **Mantenibilidad**: Cambios centralizados en `semantic-colors.js`
4. **Escalabilidad**: Fácil agregar nuevos temas o variantes

### Estructura de Tokens por Componente:

```javascript
// Ejemplo: Botones Primary
buttonPrimary: {
  backgroundColor: colors.blue[500],
  color: colors.white,
  borderColor: colors.blue[500]
},
buttonPrimaryHover: {
  backgroundColor: colors.blue[700],  // Más oscuro en hover
  color: colors.white,
  borderColor: colors.blue[700]
},
buttonPrimarySelected: {
  backgroundColor: colors.blue[800],  // Aún más oscuro para selected
  color: colors.white,
  borderColor: colors.blue[800]
},
buttonPrimaryDisabled: {
  backgroundColor: colors.neutral[300], // Gris neutro
  color: colors.neutral[500],
  borderColor: colors.neutral[300]
}
```

## 🔧 Sistema de Componentes

### Botones (16 Variantes Total)
Cada tipo de botón incluye 4 tamaños: **Sm**, **Md**, **Lg**, **Xl**

#### 1. **Primary Buttons** (4 componentes)
- **Uso**: Acciones principales del usuario
- **Estados**: Normal, Hover, Selected, Disabled
- **Tokens**: `buttonPrimary*`
- **Color**: Azul con variaciones

#### 2. **Secondary Buttons** (4 componentes) 
- **Uso**: Acciones secundarias importantes
- **Estados**: Normal, Hover, Selected, Disabled
- **Tokens**: `buttonSecondary*`
- **Color**: Verde con variaciones

#### 3. **Outline Buttons** (4 componentes)
- **Uso**: Acciones con menos peso visual
- **Estados**: Normal, Hover, Selected, Disabled
- **Tokens**: `buttonOutline*`
- **Estilo**: Borde azul, fondo transparente

#### 4. **Ghost Buttons** (4 componentes)
- **Uso**: Acciones sutiles o navegación
- **Estados**: Normal, Hover, Selected, Disabled  
- **Tokens**: `buttonGhost*`
- **Estilo**: Sin borde, solo texto y hover

### Características Técnicas de los Botones:

```javascript
// Props unificadas en todos los botones
{
  children,           // Texto del botón
  leftIcon,          // Icono izquierdo (string)
  rightIcon,         // Icono derecho (string)
  onClick,           // Handler de click
  disabled,          // Estado deshabilitado
  selected,          // Estado seleccionado
  className,         // CSS adicional
  style,             // Estilos inline
  ...props           // Resto de props HTML
}
```

### Estados Interactivos:
- **Normal**: Estado base del componente
- **Hover**: Mouse sobre el elemento (`!disabled && !selected`)
- **Selected**: Estado activo/seleccionado (persiste)
- **Disabled**: No interactivo, colores neutrales

## 🎭 Sistema de Iconografía

### Componente Base: `Icon.jsx`
Sistema unificado que carga iconos SVG dinámicamente:

```jsx
<Icon 
  name="ri_search-line"    // Nombre del archivo SVG
  size={20}                // Tamaño en píxeles
  color="currentColor"     // Color (puede ser token)
/>
```

### Organización de Iconos:
- **`/Fill/`**: Iconos rellenos (ri_*-fill.svg)
- **`/Line/`**: Iconos de línea (ri_*-line.svg)
- **`svg-imports.js`**: Importaciones dinámicas centralizadas

### Fuente: Remix Icons
- Librería completa y consistente
- Variantes Fill y Line de cada icono
- Nomenclatura estándar `ri_nombre-variant`

## 🛠️ Herramientas de Desarrollo

### Scripts Disponibles:

```bash
# Desarrollo local
npm run dev          # Inicia servidor en localhost:3001

# Build de producción  
npm run build        # Genera build optimizado
npm run preview      # Preview del build

# Linting
npm run lint         # ESLint con reglas React
```

### Script de Actualización Git:
```bash
# Uso básico
./update-repo.bat

# Con mensaje personalizado
./update-repo.bat "feat: nuevo sistema de botones"
```

El script automáticamente:
1. Verifica el estado del repositorio
2. Añade todos los cambios (`git add .`)
3. Crea commit con mensaje
4. Sube a GitHub (main/master)

## 🎯 Demo Interactiva

La aplicación incluye una **demo navegable** que muestra:

### Secciones del Demo:
1. **🎨 Foundations**: Showcase de foundations (colores, tipografía, iconos)
2. **🔥 Components**: Navegación entre tipos de botones
   - Primary Buttons
   - Secondary Buttons  
   - Outline Buttons
   - Ghost Buttons

### Cada Demo de Botón Incluye:
- **4 Tamaños**: Sm, Md, Lg, Xl lado a lado
- **Todos los Estados**: Normal, Disabled, Selected
- **Con/Sin Iconos**: Variantes con iconos izquierdo/derecho
- **Interactividad**: Click y hover reales

## 🔄 Flujo de Trabajo de Desarrollo

### 1. Agregar Nuevo Componente:
```javascript
// 1. Definir tokens en semantic-colors.js
nuevoComponente: {
  backgroundColor: colors.purple[500],
  color: colors.white
},

// 2. Crear hook de consumo
const { backgroundColor, color } = useComponentColors('nuevoComponente');

// 3. Implementar componente
const NuevoComponente = ({ children, ...props }) => {
  return (
    <div style={{ backgroundColor, color }}>
      {children}
    </div>
  );
};
```

### 2. Modificar Tema:
```javascript
// Solo editar semantic-colors.js
buttonPrimary: {
  backgroundColor: colors.green[500], // Cambio global
  // ...resto igual
}
```

### 3. Agregar Nuevo Icono:
```bash
# 1. Descargar SVG de Remix Icons
# 2. Colocar en /icons/Fill/ o /icons/Line/
# 3. Usar inmediatamente:
<Icon name="ri_nuevo-icono-line" size={20} />
```

## 📊 Métricas del Proyecto

### Cobertura de Componentes:
- ✅ **16 Botones**: Completamente implementados
- 🔄 **Foundations**: Sistema base establecido
- 📋 **Pendiente**: Inputs, Cards, Navigation, etc.

### Tokens Semánticos:
- **12 Button Tokens**: Primary, Secondary, Outline, Ghost
- **4 Estados**: Normal, Hover, Selected, Disabled  
- **3 Propiedades**: backgroundColor, color, borderColor

### Iconografía:
- **Base Establecida**: Sistema Icon.jsx funcional
- **Remix Icons**: Librería completa disponible
- **Importación Dinámica**: Optimización automática

## 🚀 Próximos Pasos

### Roadmap Técnico:
1. **📝 Input Components**: TextInput, Select, Checkbox, Radio
2. **🃏 Card System**: Card básica con variantes
3. **🧭 Navigation**: Navbar, Sidebar, Breadcrumbs
4. **📱 Layout**: Grid system, Container, Spacing
5. **🎨 Advanced Theming**: Múltiples temas personalizados

### Roadmap de Infraestructura:
1. **📘 TypeScript**: Migración completa con tipos
2. **🧪 Testing**: Jest + React Testing Library
3. **📚 Storybook**: Documentación interactiva
4. **🔧 Build Optimization**: Bundle analysis y tree-shaking

## 🤝 Contribución

### Estructura de Commits:
```bash
feat: nueva funcionalidad
fix: corrección de bug  
docs: actualización documentación
style: cambios de formato
refactor: refactoring de código
test: agregar tests
```

### Antes de Commitear:
1. Ejecutar `npm run lint`
2. Verificar que el demo funciona
3. Actualizar este README si es necesario
4. Usar `./update-repo.bat "mensaje descriptivo"`

---

## 📞 Información de Contacto

**Proyecto**: MepWebFront Design System  
**Repositorio**: https://github.com/EnriqueMEP/MepWebFront  
**Demo Local**: http://localhost:3001  

**Tecnologías**: React 18 + Vite + ESLint + Design Tokens + Atomic Design

---

*Última actualización: 23 de septiembre de 2025*
