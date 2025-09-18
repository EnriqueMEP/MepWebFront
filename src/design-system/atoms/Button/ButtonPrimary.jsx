import React from 'react';
import { primitiveColors } from '../../foundations/colors.js';
import { textStyles } from '../../foundations/typography.js';
import { lightElevation } from '../../foundations/elevation.js';

/**
 * ButtonPrimaryDefaultSm - Botón Primary Small
 * Extrae todos los valores de foundations (sin hardcodeo)
 */
export const ButtonPrimaryDefaultSm = ({ 
  children = 'Button', 
  leftIcon, 
  rightIcon, 
  onClick, 
  disabled = false,
  className = '',
  style = {},
  ...props 
}) => {
  const buttonStyles = {
    // Layout foundations
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    
    // Size - SM
    height: '32px',
    padding: '8px 12px',
    minWidth: 'fit-content',
    
    // Colors from foundations
    backgroundColor: disabled ? primitiveColors.olive[300] : primitiveColors.olive[600],
    color: primitiveColors.neutral[50],
    border: 'none',
    borderRadius: '4px',
    
    // Typography from foundations
    fontFamily: textStyles.labelSmall.fontFamily,
    fontSize: textStyles.labelSmall.fontSize,
    fontWeight: textStyles.labelSmall.fontWeight,
    lineHeight: textStyles.labelSmall.lineHeight,
    
    // Elevation from foundations
    boxShadow: lightElevation.level1,
    
    // Interactions
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease-in-out',
    userSelect: 'none',
    outline: 'none',
    opacity: disabled ? 0.6 : 1,
    
    // Custom styles
    ...style
  };

  const iconStyles = {
    width: '16px',
    height: '16px',
    color: primitiveColors.neutral[50],
    fill: primitiveColors.neutral[50],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const handleMouseEnter = (e) => {
    if (!disabled) e.target.style.backgroundColor = primitiveColors.olive[700];
  };

  const handleMouseLeave = (e) => {
    if (!disabled) e.target.style.backgroundColor = primitiveColors.olive[600];
  };

  const handleClick = (e) => {
    if (!disabled && onClick) onClick(e);
  };

  return (
    <button
      className={`btn-primary-sm ${className}`}
      style={buttonStyles}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      disabled={disabled}
      type="button"
      {...props}
    >
      {leftIcon && <span style={iconStyles}>{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span style={iconStyles}>{rightIcon}</span>}
    </button>
  );
};

/**
 * ButtonPrimaryDefaultMd - Botón Primary Medium
 */
export const ButtonPrimaryDefaultMd = ({ 
  children = 'Button', 
  leftIcon, 
  rightIcon, 
  onClick, 
  disabled = false,
  className = '',
  style = {},
  ...props 
}) => {
  const buttonStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    
    // Size - MD
    height: '40px',
    padding: '8px 16px',
    minWidth: 'fit-content',
    
    // Colors from foundations
    backgroundColor: disabled ? primitiveColors.olive[300] : primitiveColors.olive[600],
    color: primitiveColors.neutral[50],
    border: 'none',
    borderRadius: '4px',
    
    // Typography from foundations
    fontFamily: textStyles.labelMedium.fontFamily,
    fontSize: textStyles.labelMedium.fontSize,
    fontWeight: textStyles.labelMedium.fontWeight,
    lineHeight: textStyles.labelMedium.lineHeight,
    
    // Elevation from foundations
    boxShadow: lightElevation.level1,
    
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease-in-out',
    userSelect: 'none',
    outline: 'none',
    opacity: disabled ? 0.6 : 1,
    
    ...style
  };

  const iconStyles = {
    width: '20px',
    height: '20px',
    color: primitiveColors.neutral[50],
    fill: primitiveColors.neutral[50],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const handleMouseEnter = (e) => {
    if (!disabled) e.target.style.backgroundColor = primitiveColors.olive[700];
  };

  const handleMouseLeave = (e) => {
    if (!disabled) e.target.style.backgroundColor = primitiveColors.olive[600];
  };

  return (
    <button
      className={`btn-primary-md ${className}`}
      style={buttonStyles}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      disabled={disabled}
      type="button"
      {...props}
    >
      {leftIcon && <span style={iconStyles}>{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span style={iconStyles}>{rightIcon}</span>}
    </button>
  );
};

/**
 * ButtonPrimaryDefaultLg - Botón Primary Large
 */
export const ButtonPrimaryDefaultLg = ({ 
  children = 'Button', 
  leftIcon, 
  rightIcon, 
  onClick, 
  disabled = false,
  className = '',
  style = {},
  ...props 
}) => {
  const buttonStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    
    // Size - LG
    height: '48px',
    padding: '8px 20px',
    minWidth: 'fit-content',
    
    // Colors from foundations
    backgroundColor: disabled ? primitiveColors.olive[300] : primitiveColors.olive[600],
    color: primitiveColors.neutral[50],
    border: 'none',
    borderRadius: '4px',
    
    // Typography from foundations
    fontFamily: textStyles.labelLarge.fontFamily,
    fontSize: textStyles.labelLarge.fontSize,
    fontWeight: textStyles.labelLarge.fontWeight,
    lineHeight: textStyles.labelLarge.lineHeight,
    
    // Elevation from foundations
    boxShadow: lightElevation.level1,
    
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease-in-out',
    userSelect: 'none',
    outline: 'none',
    opacity: disabled ? 0.6 : 1,
    
    ...style
  };

  const iconStyles = {
    width: '24px',
    height: '24px',
    color: primitiveColors.neutral[50],
    fill: primitiveColors.neutral[50],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const handleMouseEnter = (e) => {
    if (!disabled) e.target.style.backgroundColor = primitiveColors.olive[700];
  };

  const handleMouseLeave = (e) => {
    if (!disabled) e.target.style.backgroundColor = primitiveColors.olive[600];
  };

  return (
    <button
      className={`btn-primary-lg ${className}`}
      style={buttonStyles}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      disabled={disabled}
      type="button"
      {...props}
    >
      {leftIcon && <span style={iconStyles}>{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span style={iconStyles}>{rightIcon}</span>}
    </button>
  );
};

/**
 * ButtonPrimaryDefaultXl - Botón Primary Extra Large
 */
export const ButtonPrimaryDefaultXl = ({ 
  children = 'Button', 
  leftIcon, 
  rightIcon, 
  onClick, 
  disabled = false,
  className = '',
  style = {},
  ...props 
}) => {
  const buttonStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    
    // Size - XL
    height: '56px',
    padding: '8px 24px',
    minWidth: 'fit-content',
    
    // Colors from foundations
    backgroundColor: disabled ? primitiveColors.olive[300] : primitiveColors.olive[600],
    color: primitiveColors.neutral[50],
    border: 'none',
    borderRadius: '4px',
    
    // Typography from foundations - usando headingSmall para XL
    fontFamily: textStyles.headingSmall.fontFamily,
    fontSize: textStyles.headingSmall.fontSize,
    fontWeight: textStyles.headingSmall.fontWeight,
    lineHeight: textStyles.headingSmall.lineHeight,
    
    // Elevation from foundations
    boxShadow: lightElevation.level2,
    
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease-in-out',
    userSelect: 'none',
    outline: 'none',
    opacity: disabled ? 0.6 : 1,
    
    ...style
  };

  const iconStyles = {
    width: '32px',
    height: '32px',
    color: primitiveColors.neutral[50],
    fill: primitiveColors.neutral[50],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const handleMouseEnter = (e) => {
    if (!disabled) e.target.style.backgroundColor = primitiveColors.olive[700];
  };

  const handleMouseLeave = (e) => {
    if (!disabled) e.target.style.backgroundColor = primitiveColors.olive[600];
  };

  return (
    <button
      className={`btn-primary-xl ${className}`}
      style={buttonStyles}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      disabled={disabled}
      type="button"
      {...props}
    >
      {leftIcon && <span style={iconStyles}>{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span style={iconStyles}>{rightIcon}</span>}
    </button>
  );
};

// Exportaciones por defecto
export default {
  sm: ButtonPrimaryDefaultSm,
  md: ButtonPrimaryDefaultMd,
  lg: ButtonPrimaryDefaultLg,
  xl: ButtonPrimaryDefaultXl
};