import React from 'react'

/**
 * Reusable Button Component
 * @param {string} variant - 'primary', 'secondary', 'danger', 'outline'
 * @param {string} size - 'small', 'medium', 'large'
 * @param {boolean} fullWidth - Makes button full width
 * @param {boolean} disabled - Disables button
 */
const Button = ({ 
  children, 
  onClick,
  type = 'button',
  variant = 'primary', 
  size = 'medium',
  fullWidth = false,
  disabled = false,
  className = '',
  ...props 
}) => {
  const baseClass = 'btn'
  const variantClass = `btn-${variant}`
  const sizeClass = `btn-${size}`
  const widthClass = fullWidth ? 'btn-full' : ''
  const disabledClass = disabled ? 'btn-disabled' : ''

  // FIX: Use .filter(Boolean) to remove empty strings before joining,
  // preventing multiple spaces in the final className string.
  const combinedClassName = [
    baseClass,
    variantClass,
    sizeClass,
    widthClass,
    disabledClass,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      type={type}
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button

