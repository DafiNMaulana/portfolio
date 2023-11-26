import React from 'react'

export default function BtnPrimary({content, className, onClick, disabled = false}) {
  return (
    <button className={`btn btn-primary ${className}`} onClick={onClick} disabled={disabled}>{content}</button>
  )
}
