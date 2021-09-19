import React, { Component } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

class HeaderPage extends Component {
    render() {
        return(
            <Navbar
                bg="dark"
                variant="dark"
            >
                <Container>
                    <Navbar.Brand>
                        Countries of the World
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link href='/about'>
                            about
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        )
    }
}

export default HeaderPage