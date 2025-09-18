# 🎨 Sistema de Iconos MEP Design System

Un sistema de iconos universal, flexible y optimizado para React que se adapta automáticamente al contexto y permite customización individual.

## 📁 Estructura del Proyecto

```
icons/
├── Fill/                    # Iconos con relleno (filled)
│   ├── ri_search-fill.svg
│   ├── ri_user-3-fill.svg
│   └── ...
├── Line/                    # Iconos de línea (outline)
│   ├── ri_search-line.svg
│   ├── ri_user-3-line.svg
│   └── ...
├── Icon.jsx                 # Componente React principal
├── icons.jsx               # Mapeo y configuración de iconos
└── README.md               # Esta documentación
```

## 🚀 Instalación y Uso Básico

### Importar el Componente

```jsx
import Icon from './design-system/foundations/icons/Icon.jsx';
```

### Uso Simple

```jsx
// Icono básico (hereda color del contenedor)
<Icon name="search" />

// Icono con tipo específico
<Icon name="user" type="fill" />

// Icono con tamaño personalizado
<Icon name="heart" size={32} />
```

## 🎯 Tipos de Iconos Disponibles

### **Line Icons (Outline)** - `type="line"` (por defecto)
Iconos de línea, perfectos para interfaces limpias y minimalistas.

**Navegación:**
- `arrowDown`, `arrowUp`, `arrowLeft`, `arrowRight`
- `arrowDownLong`, `arrowUpLong`, `arrowLeftLong`, `arrowRightLong`
- `arrowDownS`, `arrowUpS`, `arrowLeftS`, `arrowRightS`
- `chevronDown`, `chevronUp`, `chevronLeft`, `chevronRight`

**Interfaz:**
- `search` - Búsqueda
- `menu` - Menú hamburguesa

**Usuarios:**
- `user` - Usuario básico
- `userFollow` - Seguir usuario
- `userForbid` - Usuario prohibido
- `userHeart` - Usuario favorito
- `userLocation` - Ubicación de usuario
- `userMinus` - Remover usuario
- `userReceived` - Usuario recibido
- `userReceived2` - Usuario recibido (variante)
- `userSearch` - Buscar usuario
- `userSettings` - Configuración de usuario
- `userShared` - Usuario compartido
- `userShared2` - Usuario compartido (variante)
- `userStar` - Usuario estrella
- `userUnfollow` - Dejar de seguir

### **Fill Icons (Filled)** - `type="fill"`
Iconos con relleno, ideales para estados activos y acciones principales.

**Disponibles:** Mismos nombres que Line, pero con relleno sólido.

## 🎨 Gestión de Colores

### **Herencia Automática (Recomendado)**
Los iconos heredan automáticamente el color del texto del contenedor:

```jsx
// Icono blanco en botón azul
<button style={{ color: 'white', backgroundColor: 'blue' }}>
  <Icon name="search" /> Buscar
</button>

// Icono que se adapta al tema
<div style={{ color: isDarkMode ? 'white' : 'black' }}>
  <Icon name="user" />
</div>

// Icono que hereda el color del CSS
<h2 style={{ color: '#007bff' }}>
  <Icon name="star" /> Título con Icono
</h2>
```

### **Color Personalizado**
Para casos específicos donde necesites un color exacto:

```jsx
// Colores específicos
<Icon name="heart" color="red" />
<Icon name="check" color="green" />
<Icon name="warning" color="#ffa500" />

// Colores predefinidos
<Icon name="error" color="white" />
<Icon name="info" color="black" />
```

## 📏 Tamaños

### **Tamaños Comunes**
```jsx
<Icon name="search" size={16} />  // SM - Pequeño
<Icon name="search" size={20} />  // MD - Mediano  
<Icon name="search" size={24} />  // LG - Grande (por defecto)
<Icon name="search" size={32} />  // XL - Extra Grande
```

### **Tamaños Personalizados**
```jsx
<Icon name="logo" size={48} />    // Custom
<Icon name="hero" size={64} />    // Hero section
```

## 🔧 Propiedades del Componente

| Prop | Tipo | Por Defecto | Descripción |
|------|------|-------------|-------------|
| `name` | `string` | **requerido** | Nombre del icono |
| `type` | `'line' \| 'fill'` | `'line'` | Tipo de icono |
| `size` | `number` | `24` | Tamaño en píxeles |
| `color` | `string` | `undefined` | Color personalizado |
| `className` | `string` | `''` | Clases CSS adicionales |
| `style` | `object` | `{}` | Estilos inline adicionales |

## 💡 Casos de Uso Comunes

### **En Botones**
```jsx
// Botón con icono izquierdo
<button>
  <Icon name="save" /> Guardar
</button>

// Botón con icono derecho
<button>
  Siguiente <Icon name="arrowRight" />
</button>

// Botón solo icono
<button aria-label="Cerrar">
  <Icon name="close" />
</button>
```

### **En Navegación**
```jsx
// Menú lateral
<nav>
  <a href="/dashboard">
    <Icon name="home" /> Inicio
  </a>
  <a href="/users">
    <Icon name="user" /> Usuarios
  </a>
  <a href="/settings">
    <Icon name="userSettings" /> Configuración
  </a>
</nav>
```

### **En Cards**
```jsx
// Card con icono
<div className="card">
  <div className="card-header">
    <Icon name="userStar" type="fill" /> Usuario Premium
  </div>
  <div className="card-content">
    Contenido de la tarjeta...
  </div>
</div>
```

### **En Formularios**
```jsx
// Input con icono
<div className="input-group">
  <Icon name="search" />
  <input type="text" placeholder="Buscar..." />
</div>

// Label con icono
<label>
  <Icon name="userLocation" /> Ubicación
</label>
```

## 🎭 Temas y Modos

### **Adaptación Automática**
Los iconos se adaptan automáticamente al tema actual:

```jsx
// En modo claro - icono oscuro
<div style={{ color: '#1f2937' }}>
  <Icon name="sun" />
</div>

// En modo oscuro - icono claro
<div style={{ color: '#ffffff' }}>
  <Icon name="moon" />
</div>
```

### **Sin Configuración Adicional**
No necesitas pasar props de tema (`isDarkMode`). El sistema es completamente automático.

## 🔍 Depuración

### **Icono No Encontrado**
Si un icono no existe, verás:
- Un cuadrado rojo con "?" en desarrollo
- Warning en la consola con iconos disponibles

```jsx
<Icon name="inexistente" />
// Console: Icon "inexistente" not found in line set. Available icons: [...]
```

### **Verificar Iconos Disponibles**
```jsx
import { availableIcons } from './design-system/foundations/icons.jsx';

console.log('Line icons:', availableIcons.line);
console.log('Fill icons:', availableIcons.fill);
```

## 🛠️ Personalización Avanzada

### **Clases CSS Personalizadas**
```jsx
<Icon 
  name="custom" 
  className="my-custom-icon rotating" 
  style={{ 
    transition: 'transform 0.3s',
    transform: 'rotate(45deg)' 
  }} 
/>
```

### **Animaciones**
```css
.rotating {
  animation: spin 2s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

## 📚 Ejemplos Completos

### **Botón de Acción Primaria**
```jsx
const SaveButton = ({ onClick, loading }) => (
  <button 
    onClick={onClick}
    disabled={loading}
    style={{ 
      backgroundColor: '#007bff',
      color: 'white',
      padding: '8px 16px',
      border: 'none',
      borderRadius: '4px'
    }}
  >
    <Icon name={loading ? "loading" : "save"} />
    {loading ? "Guardando..." : "Guardar"}
  </button>
);
```

### **Lista de Usuarios**
```jsx
const UserList = ({ users }) => (
  <div>
    {users.map(user => (
      <div key={user.id} className="user-item">
        <Icon name="user" type="fill" />
        <span>{user.name}</span>
        <div className="actions">
          <Icon name="userSettings" />
          <Icon name="userHeart" />
          <Icon name="userMinus" color="red" />
        </div>
      </div>
    ))}
  </div>
);
```

## 🚨 Buenas Prácticas

### **✅ Hacer**
- Usar herencia de color cuando sea posible
- Mantener tamaños consistentes en la interfaz
- Usar iconos Fill para estados activos
- Usar iconos Line para acciones secundarias
- Incluir `aria-label` en botones solo-icono

### **❌ Evitar**
- Hardcodear colores innecesariamente
- Usar tamaños inconsistentes
- Mezclar tipos de iconos sin criterio
- Iconos demasiado pequeños (< 16px)
- Iconos demasiado grandes en texto (> 1.2em)

## 📝 Contribuir

### **Agregar Nuevos Iconos**
1. Añadir archivo SVG a `Fill/` o `Line/`
2. Actualizar mapeo en `icons.jsx`
3. Documentar en este README
4. Probar en el showcase

### **Naming Convention**
- Usar camelCase: `userSettings`, `arrowDown`
- Ser descriptivo: `userHeart` mejor que `heart`
- Agrupar por funcionalidad: `user*`, `arrow*`

---

**Versión:** 1.0.0  
**Última actualización:** 17 de septiembre de 2025  
**Maintainer:** MEP Design System Team