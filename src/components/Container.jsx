import React from 'react'

export default function Container({children, className, id = ""}) {
  return (
    <div id={id} className={`container mx-auto px-5 sm:px-10 2xl:max-w-7xl ${className}`}>{children}</div>
  )
}
