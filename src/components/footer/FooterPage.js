import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

class FooterPage extends Component {
    render() {
        return (
            <div
                id="footer"
                className='bg-dark text-white py-3'
            >
                <Container
                    className='d-flex justify-content-end'
                >
                    <Row>
                        <Col>
                            <p
                                className='m-0'
                            >
                                &copy;
                                {
                                    new Date().getFullYear() === 2021 ? `2021` : `2021 - ${new Date().getFullYear()}`
                                }
                                &nbsp;
                                <a href="https://github.com/penggembala-domba25/countries-of-the-world.git">
                                    penggembala-domba25 
                                </a>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default FooterPage