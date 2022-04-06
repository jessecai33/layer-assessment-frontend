import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

function AppHeader() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          Layer Library
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default AppHeader