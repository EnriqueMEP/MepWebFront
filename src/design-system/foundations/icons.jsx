/**
 * Sistema de Iconos Universal - MEP Design System
 * Mapeo simplificado para el componente Icon
 * El componente Icon maneja internamente los iconos más comunes
 */

// Mapeo de nombres simplificados (para referencia y expansión futura)
export const lineIcons = {
  // Arrows & Navigation
  arrowDown: 'ri_arrow-down-line.svg',
  arrowDownLong: 'ri_arrow-down-long-line.svg',
  arrowDownS: 'ri_arrow-down-s-line.svg',
  arrowLeft: 'ri_arrow-left-line.svg',
  arrowLeftLong: 'ri_arrow-left-long-line.svg', 
  arrowLeftS: 'ri_arrow-left-s-line.svg',
  arrowRight: 'ri_arrow-right-line.svg',
  arrowRightLong: 'ri_arrow-right-long-line.svg',
  arrowRightS: 'ri_arrow-right-s-line.svg',
  arrowUp: 'ri_arrow-up-line.svg',
  arrowUpLong: 'ri_arrow-up-long-line.svg',
  arrowUpS: 'ri_arrow-up-s-line.svg',
  chevronDown: 'ri_arrow-drop-down-line.svg',
  chevronLeft: 'ri_arrow-drop-left-line.svg',
  chevronRight: 'ri_arrow-drop-right-line.svg',
  chevronUp: 'ri_arrow-drop-up-line.svg',
  
  // Interface
  menu: 'ri_menu-4-fill.svg',
  search: 'ri_search-line.svg',
  
  // Users
  user: 'ri_user-3-line.svg',
  userFollow: 'ri_user-follow-line.svg',
  userForbid: 'ri_user-forbid-line.svg',
  userHeart: 'ri_user-heart-line.svg',
  userLocation: 'ri_user-location-line.svg',
  userMinus: 'ri_user-minus-line.svg',
  userReceived: 'ri_user-received-line.svg',
  userReceived2: 'ri_user-received-2-line.svg',
  userSearch: 'ri_user-search-line.svg',
  userSettings: 'ri_user-settings-line.svg',
  userShared: 'ri_user-shared-line.svg',
  userShared2: 'ri_user-shared-2-line.svg',
  userStar: 'ri_user-star-line.svg',
  userUnfollow: 'ri_user-unfollow-line.svg'
};

export const fillIcons = {
  // Interface
  search: 'ri_search-fill.svg',
  
  // Users
  user: 'ri_user-3-fill.svg',
  userFollow: 'ri_user-follow-fill.svg',
  userForbid: 'ri_user-forbid-fill.svg', 
  userHeart: 'ri_user-heart-fill.svg',
  userLocation: 'ri_user-location-fill.svg',
  userMinus: 'ri_user-minus-fill.svg',
  userReceived: 'ri_user-received-fill.svg',
  userReceived2: 'ri_user-received-2-fill.svg',
  userSearch: 'ri_user-search-fill.svg',
  userSettings: 'ri_user-settings-fill.svg',
  userShared: 'ri_user-shared-fill.svg',
  userShared2: 'ri_user-shared-2-fill.svg',
  userStar: 'ri_user-star-fill.svg',
  userUnfollow: 'ri_user-unfollow-fill.svg'
};

// Exportar todos los iconos disponibles para referencia
export const availableIcons = {
  line: Object.keys(lineIcons),
  fill: Object.keys(fillIcons)
};