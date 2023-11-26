import Container from '@/components/Container'
import React from 'react'

export default function loading() {
  return (
    <Container className={"pt-28 h-screen grid items-center"}>
      <div className="loading loading-bars loading-lg mx-auto col-span-3"></div>
    </Container>
  )
}
