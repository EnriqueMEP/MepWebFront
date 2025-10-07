# MEP Web Frontend - Documentación Principal

## 📋 Índice
- [Introducción](#introducción)
- [Arquitectura del Proyecto](#arquitectura-del-proyecto)
- [Guías Específicas](#guías-específicas)
- [Configuración y Setup](#configuración-y-setup)
- [Desarrollo](#desarrollo)
- [Contribución](#contribución)

## 🚀 Introducción

MEP Web Frontend es una aplicación React moderna construida con Vite que implementa un sistema de diseño completo y modular. El proyecto utiliza un enfoque de design system con componentes reutilizables, foundations semánticas y un sistema de plantillas para desarrollo rápido.

### Tecnologías principales
- **React 18** - Biblioteca principal
- **Vite** - Build tool y dev server
- **JavaScript ES6+** - Lenguaje principal
- **CSS-in-JS** - Estilos dinámicos
- **Design System** - Sistema de diseño modular

## 🏗️ Arquitectura del Proyecto

```
MepWebFront/
├── public/                          # Archivos estáticos
├── src/
│   ├── design-system/              # Sistema de diseño completo
│   │   ├── foundations/            # Fundamentos del sistema
│   │   │   ├── colors.js           # Colores del sistema
│   │   │   ├── typography.js       # Sistema tipográfico
│   │   │   ├── layout.js           # Layouts y spacing
│   │   │   ├── shapes.js           # Shapes decorativos
│   │   │   ├── theme-hooks.js      # Hooks de tema
│   │   │   ├── responsive-classes.js # Sistema responsive
│   │   │   ├── icons/              # Sistema de iconos
│   │   │   ├── img/                # Imágenes del sistema
│   │   │   └── video/              # Videos del sistema
│   │   ├── atoms/                  # Componentes básicos
│   │   │   ├── Button/             # Componentes de botón
│   │   │   ├── Badge/              # Componentes de badge
│   │   │   ├── Card/               # Componentes de tarjeta
│   │   │   ├── Header/             # Componentes de header
│   │   │   ├── Footer/             # Componentes de footer
│   │   │   ├── sections/           # Secciones reutilizables
│   │   │   └── PageTemplate.jsx    # Plantilla base de página
│   │   └── TEMPLATE_SYSTEM_GUIDE.md # Guía del sistema de plantillas
│   ├── pages/                      # Páginas de la aplicación
│   │   ├── Home.jsx               # Página principal original
│   │   ├── Home_New.jsx           # Página principal con nuevo sistema
│   │   └── ExamplePage.jsx        # Ejemplo de nueva página
│   ├── App.jsx                     # Componente principal
│   └── main.jsx                    # Punto de entrada
├── package.json                    # Dependencias y scripts
├── vite.config.js                 # Configuración de Vite
└── README.md                      # Este archivo
```

## 📚 Guías Específicas

### Para Desarrolladores
- [**Sistema de Diseño**](src/design-system/README.md) - Cómo usar y extender el design system
- [**Sistema de Plantillas**](src/design-system/TEMPLATE_SYSTEM_GUIDE.md) - Crear páginas rápidamente
- [**Componentes**](src/design-system/atoms/README.md) - Documentación de componentes
- [**Foundations**](src/design-system/foundations/README.md) - Fundamentos del sistema

### Para Diseñadores
- [**Colores y Temas**](src/design-system/foundations/COLORS_README.md) - Sistema de colores
- [**Tipografía**](src/design-system/foundations/TYPOGRAPHY_README.md) - Sistema tipográfico
- [**Iconografía**](src/design-system/foundations/icons/README.md) - Sistema de iconos

### Para Project Managers
- [**Estructura del Proyecto**](ARCHITECTURE.md) - Visión general de la arquitectura
- [**Flujo de Desarrollo**](DEVELOPMENT_FLOW.md) - Proceso de desarrollo

## ⚙️ Configuración y Setup

### Requisitos previos
- Node.js 16+ 
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone [repository-url]
cd MepWebFront

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

### Scripts disponibles
```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Preview del build
npm run lint     # Linting del código
```

## 🔧 Desarrollo

### Crear una nueva página
```jsx
import PageTemplate from '../design-system/atoms/PageTemplate.jsx';
import { HeroSection } from '../design-system/atoms/sections/index.js';

const NuevaPagina = () => (
  <PageTemplate>
    <HeroSection title="Mi Página" />
  </PageTemplate>
);
```

### Agregar un nuevo componente
1. Crear en `src/design-system/atoms/[Componente]/`
2. Seguir convenciones del design system
3. Incluir documentación JSDoc
4. Exportar en `index.js`

### Modificar estilos globales
- **Colores**: `src/design-system/foundations/colors.js`
- **Tipografía**: `src/design-system/foundations/typography.js`  
- **Spacing**: `src/design-system/foundations/layout.js`

## 🎯 Características Principales

### ✅ Sistema de Diseño Completo
- Componentes reutilizables y modulares
- Tokens de diseño consistentes
- Sistema de colores semánticos
- Tipografía escalable

### ✅ Sistema de Plantillas
- Creación rápida de páginas nuevas
- Secciones predefinidas configurables
- Layout responsive automático
- Spacing consistente

### ✅ Responsive Design
- Mobile-first approach
- Breakpoints consistentes
- Escalado proporcional con vw
- Clamp() para fluidez

### ✅ Performance
- Lazy loading de componentes
- Optimización de bundle
- CSS-in-JS optimizado
- Hot module replacement

## 🔄 Flujo de Contribución

1. **Fork** del repositorio
2. **Crear rama** para feature/fix
3. **Desarrollar** siguiendo las convenciones
4. **Testear** localmente
5. **Crear PR** con descripción clara
6. **Review** y merge

## 📞 Soporte

Para preguntas o problemas:
- Revisar documentación específica en cada carpeta
- Consultar ejemplos en `ExamplePage.jsx`
- Seguir patrones existentes en el código

## 🔍 Recursos Adicionales

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Design System Principles](https://www.designsystems.com/)

---

**Versión del Proyecto**: 1.0.0  
**Última Actualización**: Octubre 2025  
**Mantenido por**: Equipo MEP
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
