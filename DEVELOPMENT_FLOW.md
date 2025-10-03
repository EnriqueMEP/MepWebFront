# GUÍA DE DESARROLLO - MEP Project

## 📋 Índice
- [Primeros Pasos](#primeros-pasos)
- [Flujo de Trabajo Diario](#flujo-de-trabajo-diario)
- [Creación de Componentes](#creación-de-componentes)
- [Creación de Páginas](#creación-de-páginas)
- [Testing y Quality](#testing-y-quality)
- [Troubleshooting](#troubleshooting)

---

## 🚀 Primeros Pasos

### Setup del Entorno de Desarrollo

#### Prerrequisitos
- Node.js (v16 o superior)
- npm o yarn
- Git
- VS Code (recomendado)

#### Instalación
```bash
# Clonar el repositorio
git clone [url-del-repo]
cd MepWebFront

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

#### Configuración del Editor
1. Instalar extensiones recomendadas:
   - ES7+ React/Redux/React-Native snippets
   - Prettier - Code formatter
   - ESLint
   - Auto Rename Tag
   - Bracket Pair Colorizer

2. Configurar auto-format on save en VS Code

### Estructura del Proyecto (Quick Overview)
```
src/
├── design-system/
│   ├── foundations/     # Tokens, colors, typography, layout
│   └── atoms/          # Componentes básicos + sections
├── PageTemplate.jsx    # Template base para páginas
├── pages/             # Páginas de la aplicación
└── App.jsx           # Componente raíz
```

---

## 📅 Flujo de Trabajo Diario

### 1. Inicio del Día
```bash
# Actualizar repositorio
git pull origin main

# Crear rama para nueva feature
git checkout -b feature/nombre-descriptivo

# Iniciar servidor de desarrollo
npm run dev
```

### 2. Durante el Desarrollo

#### Comandos Frecuentes
```bash
# Ver cambios en tiempo real
npm run dev              # Servidor de desarrollo

# Verificar código
npm run lint             # Chequear errores de sintaxis
npm run format           # Formatear código automáticamente

# Testing (cuando esté configurado)
npm run test             # Ejecutar tests
```

#### Browser DevTools
- **Abrir**: F12 o Ctrl+Shift+I
- **React DevTools**: Para inspeccionar componentes
- **Console**: Para ver logs y errores
- **Network**: Para debuggear requests

### 3. Final del Día
```bash
# Añadir cambios
git add .

# Commit con mensaje descriptivo
git commit -m "feat: agregar componente XYZ"

# Subir cambios
git push origin feature/nombre-rama
```

---

## ⚛️ Creación de Componentes

### Workflow: Nuevo Atom Component

#### 1. Determinar Ubicación
```
¿Es reutilizable en múltiples páginas? → atoms/
¿Es específico de una página? → dentro de la página
¿Es una sección completa? → atoms/sections/
```

#### 2. Crear Archivo Base
```javascript
// src/design-system/atoms/MiComponente/MiComponente.jsx
import React from 'react';
import { useSemanticTokens } from '../../foundations/theme-hooks.js';

const MiComponente = ({ 
  variant = 'primary',
  size = 'md',
  children,
  ...props 
}) => {
  const colors = useSemanticTokens();
  
  const styles = {
    base: {
      // Estilos base del componente
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'all 0.2s ease'
    },
    variants: {
      primary: {
        backgroundColor: colors.surface.primary,
        color: colors.content.onPrimary
      },
      secondary: {
        backgroundColor: colors.surface.secondary,
        color: colors.content.onSecondary
      }
    },
    sizes: {
      sm: {
        padding: '8px 16px',
        fontSize: '14px'
      },
      md: {
        padding: '12px 24px',
        fontSize: '16px'
      },
      lg: {
        padding: '16px 32px',
        fontSize: '18px'
      }
    }
  };

  return (
    <div
      style={{
        ...styles.base,
        ...styles.variants[variant],
        ...styles.sizes[size]
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default MiComponente;
```

#### 3. Crear index.js
```javascript
// src/design-system/atoms/MiComponente/index.js
export { default as MiComponente } from './MiComponente.jsx';
```

#### 4. Actualizar exports principales
```javascript
// src/design-system/atoms/index.js (si existe)
export * from './MiComponente';
```

#### 5. Crear Demo Component (Opcional)
```javascript
// MiComponenteDemo.jsx
import React from 'react';
import { MiComponente } from './MiComponente.jsx';

const MiComponenteDemo = () => (
  <div style={{ padding: '20px' }}>
    <h2>MiComponente Demo</h2>
    
    <h3>Variantes</h3>
    <MiComponente variant="primary">Primary</MiComponente>
    <MiComponente variant="secondary">Secondary</MiComponente>
    
    <h3>Tamaños</h3>
    <MiComponente size="sm">Small</MiComponente>
    <MiComponente size="md">Medium</MiComponente>
    <MiComponente size="lg">Large</MiComponente>
  </div>
);

export default MiComponenteDemo;
```

### Tips para Componentes

#### ✅ Buenas Prácticas
```javascript
// Usar semantic tokens
const colors = useSemanticTokens();

// Props con defaults claros
const MiComponente = ({ 
  variant = 'primary', 
  size = 'md',
  disabled = false 
}) => {
  // ...
};

// Spread props para flexibilidad
<div {...props}>

// Memoization para performance
export default React.memo(MiComponente);
```

#### ❌ Evitar
```javascript
// No usar colores hardcodeados
backgroundColor: '#ff0000'  // ❌

// No props ambiguos
type="big"  // ❌
state="off" // ❌

// No lógica de negocio en atoms
const [userData, setUserData] = useState(); // ❌ en atoms
```

---

## 📄 Creación de Páginas

### Workflow: Nueva Página

#### 1. Crear Archivo de Página
```javascript
// src/pages/MiNuevaPagina.jsx
import React from 'react';
import { PageTemplate } from '../PageTemplate.jsx';
import { 
  HeroSection,
  StatsSection,
  ProjectsSection,
  EmptySpace
} from '../design-system/atoms/sections/';

const MiNuevaPagina = () => {
  // Datos de la página
  const heroData = {
    title: "Título Principal",
    subtitle: "Subtítulo descriptivo",
    description: "Descripción más detallada del contenido de la página...",
    backgroundVideo: "/path/to/video.mp4",
    showShapes: true
  };

  const statsData = {
    title: "Nuestros Números",
    stats: [
      { number: '100+', label: 'Proyectos Completados' },
      { number: '50+', label: 'Clientes Satisfechos' },
      { number: '5+', label: 'Años de Experiencia' }
    ]
  };

  const projectsData = {
    title: "Proyectos Destacados",
    description: "Algunos de nuestros trabajos más recientes",
    cards: [
      {
        imageSrc: "/img/project1.jpg",
        imageAlt: "Proyecto 1",
        category: "Web Development",
        title: "Aplicación Web Corporativa",
        description: "Sistema de gestión empresarial desarrollado con tecnologías modernas.",
        date: "15 Oct 2024"
      }
      // más proyectos...
    ],
    buttonText: "Ver Todos los Proyectos",
    onButtonClick: () => {
      // Navegación o acción
      console.log('Ver más proyectos');
    }
  };

  return (
    <PageTemplate>
      <HeroSection {...heroData} />
      
      <EmptySpace mobile="2rem" desktop="4rem" />
      
      <StatsSection {...statsData} />
      
      <EmptySpace mobile="3rem" desktop="6rem" />
      
      <ProjectsSection {...projectsData} />
      
      <EmptySpace mobile="2rem" desktop="4rem" />
    </PageTemplate>
  );
};

export default MiNuevaPagina;
```

#### 2. Agregar a App.jsx (si usa routing)
```javascript
// App.jsx
import MiNuevaPagina from './pages/MiNuevaPagina.jsx';

// Si usas React Router
<Route path="/mi-nueva-pagina" component={MiNuevaPagina} />

// O para testing temporal
function App() {
  return <MiNuevaPagina />;
}
```

### Personalización de Secciones

#### Estilos Personalizados
```javascript
const customHeroStyles = {
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  minHeight: '80vh'
};

<HeroSection 
  {...heroData}
  customStyles={customHeroStyles}
/>
```

#### Contenido Dinámico
```javascript
// Datos desde API o estado
const [projectsData, setProjectsData] = useState([]);

useEffect(() => {
  fetchProjects().then(setProjectsData);
}, []);

<ProjectsSection 
  cards={projectsData}
  loading={!projectsData.length}
/>
```

---

## 🧪 Testing y Quality

### Linting y Formateo

#### Antes de cada commit
```bash
# Formatear todo el código
npm run format

# Verificar errores de linting
npm run lint

# Fix automático de errores (cuando sea posible)
npm run lint -- --fix
```

#### En VS Code
- **Auto-format on save**: Activar en settings
- **Problems panel**: Ver errores en tiempo real
- **Extensions**: ESLint y Prettier instalados

### Testing Manual

#### Checklist por Componente
```
□ Se renderiza correctamente
□ Props funcionan como esperado
□ Estados hover/active funcionan
□ Responsive design funciona
□ Colores vienen de semantic tokens
□ No hay errores en console
□ Performance aceptable
```

#### Testing de Páginas
```
□ Todos los componentes se cargan
□ Layout responsive funciona
□ Navegación funciona
□ Imágenes se cargan correctamente
□ Videos se reproducen (si aplica)
□ No hay errors 404 en network
□ Page load time < 3 segundos
```

### Browser Testing

#### Browsers Mínimos
- Chrome (última versión)
- Firefox (última versión)
- Safari (si es posible)
- Edge (si es posible)

#### Responsive Testing
```
□ Mobile (360px - 768px)
□ Tablet (768px - 1024px)  
□ Desktop (1024px+)
□ Large Desktop (1440px+)
```

---

## 🔧 Troubleshooting

### Errores Comunes

#### 1. Import Errors
```javascript
// ❌ Error común
import { Component } from './Component';

// ✅ Solución - verificar extensión
import { Component } from './Component.jsx';
import Component from './Component.jsx';
```

#### 2. Styles No Aplicados
```javascript
// ❌ Problema - no usar semantic tokens
const styles = { color: '#333' };

// ✅ Solución - usar tokens
const colors = useSemanticTokens();
const styles = { color: colors.content.text };
```

#### 3. Component No Se Renderiza
```javascript
// Verificar:
□ ¿Está exportado correctamente?
□ ¿Se importa correctamente?
□ ¿Hay errores en console?
□ ¿Todos los props requeridos están presentes?
```

### Performance Issues

#### Síntomas
- Página carga lentamente
- Lag en interacciones
- High memory usage

#### Soluciones
```javascript
// React.memo para componentes puros
export default React.memo(MiComponente);

// useMemo para cálculos costosos
const expensiveValue = useMemo(() => {
  return calculateExpensiveValue(props);
}, [props.dependency]);

// useCallback para funciones estables
const handleClick = useCallback(() => {
  // handler logic
}, [dependency]);
```

### CSS/Styling Issues

#### Debug Process
1. **Inspector**: F12 → Elements → ver CSS aplicado
2. **Console**: Verificar errores JavaScript
3. **Responsive**: Toggle device toolbar
4. **Performance**: Lighthouse audit

#### Fixes Comunes
```javascript
// ❌ CSS conflicts
style={{ marginTop: '20px', marginTop: '30px' }}

// ✅ Usar spread operator correctamente
style={{ 
  ...baseStyles,
  ...overrideStyles 
}}

// ❌ Hardcoded responsive
fontSize: '16px'

// ✅ Usar responsive tokens
fontSize: 'clamp(14px, 1vw, 16px)'
```

### Git Issues

#### Branch Problems
```bash
# Cambiar a main y actualizar
git checkout main
git pull origin main

# Crear nueva rama desde main actualizado
git checkout -b feature/nueva-feature
```

#### Merge Conflicts
```bash
# Ver conflictos
git status

# Editar archivos manualmente
# Buscar markers: <<<<<<< ======= >>>>>>>

# Finalizar merge
git add .
git commit -m "resolve merge conflicts"
```

---

## 📚 Recursos y Referencias

### Documentación Interna
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Arquitectura del proyecto
- [design-system/README.md](./src/design-system/README.md) - Sistema de diseño
- [atoms/README.md](./src/design-system/atoms/README.md) - Componentes
- [foundations/README.md](./src/design-system/foundations/README.md) - Tokens base

### External Resources
- [React Docs](https://react.dev/)
- [Vite Docs](https://vitejs.dev/)
- [MDN Web Docs](https://developer.mozilla.org/)

### Tools
- [React DevTools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Figma](https://figma.com) - Para referencias de diseño
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Performance audit

---

## 🆘 Contacto y Soporte

### Para Dudas Técnicas
1. Revisar esta documentación
2. Buscar en issues del repositorio
3. Preguntar al equipo en Slack/Teams
4. Crear issue en GitHub

### Para Dudas de Diseño
1. Revisar Figma files
2. Consultar design system documentation
3. Preguntar al designer del equipo

---

**Archivo**: `DEVELOPMENT_FLOW.md`  
**Mantenido por**: Equipo MEP  
**Versión**: 1.0  
**Última actualización**: Octubre 2025