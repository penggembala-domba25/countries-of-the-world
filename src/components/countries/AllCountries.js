import React, { Component } from 'react'
import { Container, Row, Col, Card, ListGroup, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import FormSearchCountry from '../form/FormSearchCountry';
import { initializeCountries, searchCountry } from '../../reducers/countryReducer';


class AllCountries extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: true
        }
    }
    componentDidMount() {
        this.props.initializeCountries().then(() => {
            this.setState({
                isLoading: false
            })
        })
    }

    render() {
        const { countries } = this.props
        const { isLoading } = this.state

        if(isLoading) {
            return (
                <div variant="primary" className='d-flex justify-content-center'>
                    <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        />
                        &nbsp;
                        Loading...
                </div>
            )
        }

        return (
            <div>
                <FormSearchCountry />
                {
                    !countries 
                    ? 
                    <p>not found...</p>
                    :
                    <div>
                        <Container fluid>
                            <Row 
                                xs={1}
                                sm={2}
                                md={3}
                                xl={4}
                                className="g-4"
                            >
                                {
                                    countries.map((country) => (
                                        <Col>
                                            <Link 
                                                to={`/country/${country.name}`} 
                                                style={{textDecoration: 'none', color: 'black'}}
                                            >
                                                <Card
                                                    className='hover-card'
                                                >
                                                    <Card.Header className='p-4'>
                                                        <Card.Title>
                                                            {
                                                                country.name
                                                            }
                                                        </Card.Title>
                                                        <Card.Text className='card-text'>
                                                            (
                                                            { country.nativeName }
                                                            )
                                                        </Card.Text>
                                                    </Card.Header>
                                                    <ListGroup variant="flush">
                                                        <ListGroup.Item>
                                                            <div className="container p-0">
                                                                <div className="row p-0">
                                                                    <div className="col-8 text-start">
                                                                        Country Code (Alpha 2)
                                                                    </div>
                                                                    <div className="col text-end">
                                                                        {
                                                                            country.alpha2Code || null
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item>
                                                            <div className="container p-0">
                                                                <div className="row p-0">
                                                                    <div className="col-8 text-start">
                                                                        Country Code (Alpha 3)
                                                                    </div>
                                                                    <div className="col text-end">
                                                                        {
                                                                            country.alpha3Code || null
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item>
                                                            <div className="container p-0">
                                                                <div className="row p-0">
                                                                    <div className="col-8 text-start">
                                                                        Currency
                                                                    </div>
                                                                    <div className="col text-end">
                                                                        {
                                                                            country.currencies[0].code || null
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item>
                                                            <div className="container p-0">
                                                                <div className="row p-0">
                                                                    <div className="col-8 text-start">
                                                                        Int. dial code
                                                                    </div>
                                                                    <div className="col text-end">
                                                                        +
                                                                        {
                                                                            country.callingCodes.toString(',') || null
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </ListGroup.Item>
                                                    </ListGroup>
                                                </Card>                                    
                                            </Link>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </Container>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        countries: state.countries
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        initializeCountries: () => dispatch(initializeCountries()),
        searchCountry: (nameCountry) => dispatch(searchCountry(nameCountry)),
    }
}

const connectedAllCountries = connect(mapStateToProps, mapDispatchToProps)(AllCountries)

export default connectedAllCountries