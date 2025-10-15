# 🏢 MEP Web Frontend - Sitio Corporativo

## 📋 Índice
- [🚀 Introducción](#-introducción)
- [🏗️ Arquitectura](#️-arquitectura)
- [📚 Documentación Específica](#-documentación-específica)
- [⚙️ Setup y Desarrollo](#️-setup-y-desarrollo)
- [🎨 Sistema de Diseño](#-sistema-de-diseño)
- [📱 Características](#-características)
- [🤝 Contribución](#-contribución)

## 🚀 Introducción

**MEP Web Frontend** es el sitio web corporativo oficial de MEP Engineering, construido con tecnologías modernas y un sistema de diseño completo. La aplicación implementa un enfoque de atomic design con componentes reutilizables, responsive design avanzado, y un sistema de plantillas para desarrollo rápido.

### 🛠️ Stack Tecnológico
- **⚛️ React 18** - Biblioteca principal con Hooks
- **⚡ Vite** - Build tool ultra-rápido
- **🎨 CSS-in-JS** - Estilos dinámicos y temáticos  
- **📐 Design System** - Sistema atómico modular
- **📱 Responsive VW** - Escalado consistente con zoom
- **🌙 Dark/Light Mode** - Temas adaptativos

## 🏗️ Arquitectura

### 📁 Estructura del Proyecto
```
MepWebFront/
├── 📄 Documentación Principal
│   ├── README.md                        # Este archivo
│   ├── ARCHITECTURE.md                  # Arquitectura detallada
│   ├── DEVELOPMENT_FLOW.md              # Flujo de desarrollo
│   ├── DEPLOY_README.md                 # Guía de deployment
│   ├── TYPOGRAPHY_SYSTEM_GUIDE.md       # Sistema tipográfico
│   ├── TEMPLATE_SYSTEM_README.md        # Sistema de plantillas
│   └── URL_STRUCTURE.md                 # Estructura de URLs
│
├── 🌐 Aplicación
│   ├── public/                          # Assets estáticos
│   │   ├── img/                        # Imágenes (logos, fotos)
│   │   └── video/                      # Videos corporativos
│   └── src/
│       ├── 🎨 design-system/           # SISTEMA DE DISEÑO
│       │   ├── foundations/            # 🏛️ Fundamentos
│       │   │   ├── colors.js          # Paletas de colores
│       │   │   ├── semantic-colors.js  # Tokens semánticos  
│       │   │   ├── typography.js       # Sistema tipográfico
│       │   │   ├── responsive-classes.js # Sistema VW responsive
│       │   │   ├── theme-hooks.js      # Hooks de tema
│       │   │   ├── layout.js           # Layouts y spacing
│       │   │   └── icons/              # Iconografía SVG
│       │   └── atoms/                  # ⚛️ Componentes Atómicos
│       │       ├── PageTemplate.jsx   # Plantilla base
│       │       ├── Header/             # Navegación principal
│       │       ├── Footer/             # Pie de página
│       │       ├── Button/             # Sistema de botones
│       │       ├── Badge/              # Badges y etiquetas
│       │       ├── Card/               # Tarjetas de contenido
│       │       └── sections/           # Secciones reutilizables
│       │           ├── HeroSection.jsx       # Hero principal
│       │           ├── StatsSection.jsx     # Estadísticas
│       │           ├── ProjectsSection.jsx  # Proyectos
│       │           └── BlogSection.jsx      # Blog/Noticias
│       └── 📄 pages/                   # Páginas del Sitio
│           ├── Home.jsx                # Página principal
│           ├── Servicios.jsx           # Servicios de ingeniería  
│           ├── Proyectos.jsx           # Portfolio de proyectos
│           ├── Nosotros.jsx            # Sobre la empresa
│           ├── Contacto.jsx            # Información de contacto
│           └── NotFound.jsx            # Página 404
│   │   └── ExamplePage.jsx        # Ejemplo de nueva página
│   ├── App.jsx                     # Componente principal
│   └── main.jsx                    # Punto de entrada
├── package.json                    # Dependencias y scripts
├── vite.config.js                 # Configuración de Vite
└── README.md                      # Este archivo
```

## 📚 Documentación Específica

### 🔧 Para Desarrolladores
- [**🏗️ Arquitectura Completa**](ARCHITECTURE.md) - Visión detallada del proyecto
- [**📝 Sistema de Plantillas**](TEMPLATE_SYSTEM_README.md) - Crear páginas rápidamente  
- [**🎨 Design System**](src/design-system/foundations/README.md) - Fundamentos del sistema
- [**📐 Sistema Tipográfico**](TYPOGRAPHY_SYSTEM_GUIDE.md) - **⭐ Cambiar tamaños de texto**
- [**🎯 Flujo de Desarrollo**](DEVELOPMENT_FLOW.md) - Metodología de trabajo

### 🎨 Para Diseñadores  
- [**🌈 Sistema de Colores**](src/design-system/foundations/COLORES-README.md) - Paletas y tokens
- [**📱 Responsive System**](src/design-system/foundations/responsive-classes.js) - Sistema VW
- [**🔗 Iconografía**](src/design-system/foundations/icons/README.md) - Librería de iconos

### 📋 Para Project Managers
- [**🚀 Deployment**](DEPLOY_README.md) - Guía de publicación
- [**🔗 URLs y Routing**](URL_STRUCTURE.md) - Estructura de navegación
- [**📊 Métricas del Proyecto**](#-métricas-actuales) - Estado y progreso

## ⚙️ Setup y Desarrollo

### 📋 Requisitos
- **Node.js 18+** (recomendado LTS)
- **npm 9+** o **yarn 3+**
- **Git** para control de versiones

### 🚀 Instalación Rápida
```bash
# 1. Clonar repositorio
git clone https://github.com/EnriqueMEP/MepWebFront.git
cd MepWebFront

# 2. Instalar dependencias  
npm install

# 3. Iniciar desarrollo
npm run dev
# 🌐 Abrir: http://localhost:5173
```

### 🛠️ Scripts Disponibles
```bash
# 🔧 Desarrollo
npm run dev         # Servidor desarrollo (puerto 5173)
npm run build       # Build producción optimizado  
npm run preview     # Preview del build local
npm run lint        # Linter ESLint + correcciones

# 📦 Utilidades
./home.bat          # Abrir en navegador (Windows)
./update-repo.bat   # Git add + commit + push automático
```

### 🌐 URLs del Proyecto
- **Desarrollo**: http://localhost:5173
- **Producción**: https://mep-web-frontend.vercel.app
- **Repositorio**: https://github.com/EnriqueMEP/MepWebFront

## 🎨 Sistema de Diseño

### ⚡ Cambios Rápidos y Comunes

#### � **Cambiar Tamaños de Texto**
**Archivo**: [`TYPOGRAPHY_SYSTEM_GUIDE.md`](TYPOGRAPHY_SYSTEM_GUIDE.md) 
```javascript
// responsive-classes.js - Títulos Hero
.text-display-large { font-size: 1.75rem; }     // Móvil
@media (min-width: 768px) { font-size: 1.8vw; } // Desktop
```

#### 🌈 **Cambiar Colores**  
**Archivo**: [`COLORES-README.md`](src/design-system/foundations/COLORES-README.md)
```javascript
// semantic-colors.js - Botones principales
buttonPrimary: { backgroundColor: colors.blue[500] }
```

#### 📱 **Comportamiento Responsive**
**Archivo**: `responsive-classes.js` - Sistema VW que escala con zoom
- **Móvil**: Tamaños fijos en `rem`
- **Desktop**: Escalado proporcional con `vw`

### 🏗️ Crear Nueva Página
```jsx
import PageTemplate from '../design-system/atoms/PageTemplate.jsx';
import { HeroSection, StatsSection } from '../design-system/atoms/sections/index.js';

const NuevaPagina = () => (
  <PageTemplate>
    <HeroSection 
      title="Nueva Página"
      description="Descripción de la página"
    />
    <StatsSection stats={misDatos} />
  </PageTemplate>
);
```

### ⚛️ Atomic Design Structure
```
🏛️ Foundations → ⚛️ Atoms → 🧬 Molecules → 🦠 Organisms → 📄 Pages
     Tokens        Components     Sections       Templates      Routes
```

## 📱 Características

### ✅ **Sistema Responsive Avanzado**
- 🎯 **Sistema VW**: Escalado consistente con zoom del navegador
- 📱 **Mobile-First**: Optimizado para dispositivos móviles
- 🔄 **Breakpoints**: Tablet (768px) y Desktop automáticos
- 📐 **Clamp()**: Fluidez entre tamaños mínimos y máximos

### ✅ **Design System Completo**  
- 🎨 **Tokens Semánticos**: Colores que se adaptan a light/dark mode
- ⚛️ **Componentes Atómicos**: Button, Badge, Card, Header, Footer
- 📄 **Sistema de Plantillas**: Creación rápida de páginas consistentes
- 🔤 **Tipografía Escalable**: Sistema VW integrado con clases CSS

### ✅ **Experiencia de Desarrollo**
- ⚡ **Vite HMR**: Hot Module Replacement ultra-rápido
- 🔧 **Scripts Automatizados**: Git, build y deploy simplificados  
- 📚 **Documentación Completa**: Guías específicas para cada área
- 🎯 **Cambios Centralizados**: Un archivo para cambios globales

### ✅ **Performance & SEO**
- 📦 **Bundle Optimizado**: Tree-shaking y code splitting
- 🏷️ **Meta Tags Dinámicos**: SEO configurado por página
- 🚀 **Deploy Vercel**: CI/CD automático desde GitHub
- 📊 **Lighthouse Score**: Optimizado para Core Web Vitals

## � Métricas Actuales

### 🏗️ **Estado del Desarrollo**
- ✅ **5 Páginas Principales**: Home, Servicios, Proyectos, Nosotros, Contacto
- ✅ **Sistema de Design**: Foundations + Atoms completamente implementado
- ✅ **Responsive System**: VW scaling + zoom consistency aplicado  
- ✅ **Theme System**: Light/Dark mode funcional con hooks
- 🔄 **Molecules & Organisms**: En desarrollo para Q1 2026

### ⚛️ **Componentes Disponibles**
```
✅ PageTemplate      # Plantilla base con Header/Footer
✅ HeroSection       # Hero principal con video/imagen  
✅ StatsSection      # Estadísticas con números y métricas
✅ ProjectsSection   # Grid de proyectos con modal
✅ BlogSection       # Artículos y noticias expandibles
✅ Button System     # Primary, Secondary, Outline, Ghost
✅ Badge System      # Text y Number badges
✅ Card System       # Vertical cards con responsive clamp()
```

### 📝 **Documentación Disponible**
- 📄 **8 README Files**: Cobertura completa del proyecto
- 🎯 **Guías Específicas**: Para cada rol (dev, designer, PM)
- 🔧 **Quick Start Guide**: Setup en < 5 minutos
- 📚 **Troubleshooting**: Soluciones a problemas comunes

## 🤝 Contribución

### 📋 **Antes de Contribuir**
1. 📖 **Leer**: [`DEVELOPMENT_FLOW.md`](DEVELOPMENT_FLOW.md) para metodología
2. 🎨 **Revisar**: [`ARCHITECTURE.md`](ARCHITECTURE.md) para entender la estructura  
3. 🔧 **Setup**: Seguir la [instalación rápida](#️-setup-y-desarrollo)

### � **Flujo de Trabajo**
```bash
# 1. Crear rama feature
git checkout -b feature/nueva-funcionalidad

# 2. Desarrollar siguiendo patrones existentes
# 3. Usar las guías de documentación específicas

# 4. Commit con ./update-repo.bat
./update-repo.bat "feat: descripción del cambio"

# 5. Crear Pull Request con descripción clara
```

### 📐 **Convenciones**
- **Commits**: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`
- **Componentes**: PascalCase + JSDoc completo
- **Archivos**: camelCase para JS, kebab-case para assets
- **CSS**: Usar sistema de tokens, no valores hardcoded

---

## � Información de Contacto

**🏢 Proyecto**: MEP Engineering - Sitio Web Corporativo  
**🔗 Repositorio**: https://github.com/EnriqueMEP/MepWebFront  
**🌐 Producción**: https://mep-web-frontend.vercel.app  
**💻 Desarrollo**: http://localhost:5173  

### 🛠️ **Stack Completo**
React 18 • Vite 5 • JavaScript ES2024 • CSS-in-JS • Atomic Design • VW Responsive System • Vercel Deploy

### 📅 **Versión & Mantenimiento**
- **Versión Actual**: `v2.1.0` (Octubre 2025)
- **Próxima Release**: `v2.2.0` (Q1 2026) - Molecules & Testing
- **Mantenido por**: [Equipo MEP](mailto:dev@mepengineering.com)

---
*⚡ Desarrollado con pasión por la ingeniería y el código limpio* 🚀
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
