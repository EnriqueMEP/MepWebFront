# Sistema de Plantillas y Arquitectura del Design System MEP

## 🏗️ Arquitectura General

Este proyecto utiliza una arquitectura modular basada en **Design System Atómico** que permite crear páginas consistentes y escalables para el sitio web de MEP Engineering.

### Estructura del Proyecto
```
src/
├── pages/               # Páginas principales del sitio
│   ├── Home.jsx        # Página de inicio (plantilla base)
│   ├── Servicios.jsx   # Página de servicios
│   ├── Proyectos.jsx   # Página de proyectos
│   ├── Nosotros.jsx    # Página sobre nosotros
│   └── Contacto.jsx    # Página de contacto
├── design-system/
│   ├── atoms/          # Componentes atómicos reutilizables
│   │   ├── PageTemplate.jsx  # Plantilla base para todas las páginas
│   │   ├── sections/   # Secciones modulares
│   │   ├── Button/     # Sistema de botones
│   │   ├── Card/       # Sistema de tarjetas
│   │   ├── Header/     # Cabecera con navegación
│   │   └── Footer/     # Pie de página
│   └── foundations/    # Fundaciones del design system
│       ├── colors.js   # Sistema de colores
│       ├── typography.js # Sistema tipográfico
│       ├── layout.js   # Sistema de layouts y shapes
│       └── responsive-utils.js # Utilidades responsive
```

## 📄 Plantilla Base: PageTemplate

El `PageTemplate.jsx` es el componente fundamental que estructura todas las páginas del sitio:

### Características Principales:
- **Header y Footer consistentes** en todas las páginas
- **Sistema de rutas** integrado
- **Meta tags dinámicos** para SEO
- **Responsive design** automático
- **Integración con el theme system**

### Uso de la Plantilla:
```jsx
import PageTemplate from '../design-system/atoms/PageTemplate';
import HeroSection from '../design-system/atoms/sections/HeroSection';
import StatsSection from '../design-system/atoms/sections/StatsSection';

const NuevaPagina = () => {
  return (
    <PageTemplate
      title="Título de la Página - MEP Engineering"
      description="Descripción SEO de la página"
      currentPage="nueva-pagina"
    >
      {/* Contenido específico de la página */}
      <HeroSection />
      <StatsSection />
      {/* Más secciones... */}
    </PageTemplate>
  );
};

export default NuevaPagina;
```

## 🧩 Sistema de Secciones Modulares

### Secciones Disponibles:
- **HeroSection**: Sección principal con video/imagen y texto principal
- **StatsSection**: Sección de estadísticas con grid responsive
- **ProjectsSection**: Sección de proyectos con cards
- **BlogSection**: Sección de blog/noticias
- **EmptySpace**: Espaciador flexible

### Características de las Secciones:
- **Shapes integrados**: Cada sección puede tener shapes decorativos posicionados
- **Responsive automático**: Adaptación móvil/tablet/desktop
- **Grid systems**: Sistemas de grid configurables
- **Theming**: Integración con el sistema de temas

## 🎨 Design System Foundations

### 1. Sistema de Colores (`colors.js`)
```javascript
// Colores principales MEP
primary: '#1B365D',      // Azul corporativo
secondary: '#E8F4FD',    // Azul claro
accent: '#FF6B35',       // Naranja de acento
```

### 2. Sistema Tipográfico (`typography.js`)
- **Montserrat**: Fuente principal
- **Escalas responsivas**: rem y vw units
- **Jerarquía clara**: H1, H2, H3, body, small

### 3. Sistema de Layout (`layout.js`)
- **Breakpoints**: Mobile (< 768px), Tablet (768px+), Desktop (1024px+)
- **Shapes**: Configuración centralizada de elementos decorativos
- **Grids**: Sistemas de grid predefinidos y reutilizables

### 4. Sistema Responsive (`responsive-utils.js`)
- **Mobile-first approach**
- **Breakpoints consistentes**
- **Utilidades de centrado y posicionamiento**

## 📱 Sistema Responsive

### Breakpoints Principales:
- **Mobile**: `max-width: 767px`
- **Tablet**: `768px - 1023px`
- **Desktop**: `1024px+`

### Patrones Responsive:
```css
/* Mobile First */
.component {
  /* Estilos móvil por defecto */
}

@media (min-width: 768px) {
  .component {
    /* Estilos tablet/desktop */
  }
}
```

## 🚀 Guía para Crear Nuevas Páginas

### Paso 1: Crear el Componente de Página
```jsx
// src/pages/NuevaPagina.jsx
import PageTemplate from '../design-system/atoms/PageTemplate';
import HeroSection from '../design-system/atoms/sections/HeroSection';

const NuevaPagina = () => {
  return (
    <PageTemplate
      title="Nueva Página - MEP Engineering"
      description="Descripción para SEO"
      currentPage="nueva-pagina"
    >
      <HeroSection 
        title="Título Principal"
        subtitle="Subtítulo explicativo"
        videoSrc="/path/to/video.mp4"
      />
      {/* Más secciones según necesidad */}
    </PageTemplate>
  );
};

export default NuevaPagina;
```

### Paso 2: Registrar la Ruta
```jsx
// App.jsx
import { Routes, Route } from 'react-router-dom';
import NuevaPagina from './pages/NuevaPagina';

<Routes>
  <Route path="/nueva-pagina" element={<NuevaPagina />} />
</Routes>
```

### Paso 3: Agregar al Menú de Navegación
```jsx
// design-system/atoms/Header/Header.jsx
const menuItems = [
  { name: 'Nueva Página', path: '/nueva-pagina' }
];
```

## 🎯 Buenas Prácticas

### 1. Consistencia Visual
- Siempre usar `PageTemplate` como wrapper
- Mantener el mismo spacing entre secciones
- Respetar la paleta de colores corporativa

### 2. Performance
- Lazy loading para imágenes grandes
- Optimización de videos (webm/mp4)
- Code splitting por rutas

### 3. SEO
- Titles únicos y descriptivos
- Meta descriptions relevantes
- Estructura de headings jerárquica (H1 > H2 > H3)

### 4. Responsive Design
- Probar en todos los breakpoints
- Asegurar legibilidad en móvil
- Optimizar interacciones táctiles

## 🔄 Flujo de Desarrollo

### Para Replicar el Home en Nueva Página:

1. **Copiar estructura base**:
   ```jsx
   import PageTemplate from '../design-system/atoms/PageTemplate';
   import { secciones necesarias } from '../design-system/atoms/sections';
   ```

2. **Personalizar contenido**:
   - Cambiar textos y títulos
   - Ajustar imágenes/videos específicos
   - Modificar configuración de shapes si es necesario

3. **Configurar SEO**:
   - Title específico de la página
   - Description única y relevante
   - CurrentPage para navegación activa

4. **Testear responsive**:
   - Verificar en móvil, tablet y desktop
   - Comprobar posicionamiento de shapes
   - Validar legibilidad y usabilidad

## 🛠️ Herramientas y Tecnologías

- **React 18**: Framework principal
- **React Router**: Navegación SPA
- **Styled Components**: CSS-in-JS (integrado en foundations)
- **Responsive Design**: Mobile-first con media queries
- **Vite**: Build tool y desarrollo
- **Vercel**: Plataforma de deployment

## 📋 Checklist para Nueva Página

- [ ] Crear componente en `/pages/`
- [ ] Implementar `PageTemplate` wrapper
- [ ] Configurar meta tags (title, description)
- [ ] Agregar secciones necesarias
- [ ] Configurar shapes si se requieren
- [ ] Registrar ruta en `App.jsx`
- [ ] Agregar enlace en navegación
- [ ] Testear responsive en todos los breakpoints
- [ ] Verificar SEO y accesibilidad
- [ ] Optimizar performance (imágenes, videos)

---

Este sistema garantiza consistencia, escalabilidad y mantenibilidad en todo el sitio web de MEP Engineering.