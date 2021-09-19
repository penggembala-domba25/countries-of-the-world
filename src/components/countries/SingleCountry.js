import React, { Component } from "react";
import { connect } from "react-redux";
import { Accordion, Breadcrumb, Card, Container, Row, Col, Nav, ListGroup, Tab, Spinner } from 'react-bootstrap'

import { withRouter } from 'react-router-dom'
import { initializeCountries, searchCountry } from '../../reducers/countryReducer';

class SingleCountry extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        const { nameCountry } = this.props.match.params

        if(nameCountry) {
            this.props.searchCountry(nameCountry).then(() => {
                this.setState({isLoading: false})
            })
        }

        else {
            this.props.initializeCountries()
        }
    }

    render() {
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

        if(!this.props.countries) {
            return (
                <div variant="primary" className='d-flex justify-content-center'>
                    <p>
                        Country Not Found 
                    </p>
                </div>
            )
        }

        const country = this.props.countries[0] || this.props.countries

        return (
            <div>
                <Breadcrumb
                    className='text-dark'
                >
                    <Breadcrumb.Item href='/'>
                        Search
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>
                        { country.name }
                    </Breadcrumb.Item>
                </Breadcrumb>
                <Container fluid>
                    <Row 
                        sm={1}                                              
                        md={2}
                        className="g-4 justify-content-md-center"
                    >
                        <Col>
                            <Card>  
                                <Card.Body>
                                    <Card.Img variant='top' src={country.flag} />
                                    <Card.Title
                                        className='mt-4'
                                    >
                                        {
                                            country.name
                                        }
                                    </Card.Title>
                                    <Card.Text className='card-text'>
                                        (
                                        { country.nativeName }
                                        )
                                    </Card.Text>
                                </Card.Body>
                                <Card.Body>
                                    <Tab.Container id="left-tabs-example" defaultActiveKey="names">
                                        <Row>
                                            <Col sm="auto">
                                                <Nav variant="pills" className="flex-column">
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="names">Names</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="languages">Languages</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="geography">Geography</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="codes">Codes</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="currencies">Currencies</Nav.Link>
                                                    </Nav.Item>
                                                </Nav>
                                            </Col>
                                            <Col>
                                                <Tab.Content>
                                                    <Tab.Pane eventKey="names">
                                                        <div>
                                                            <ListGroup>
                                                                <ListGroup.Item>
                                                                    <div className="container p-0">
                                                                        <div className="row p-0">
                                                                            <div className="col-auto text-start">
                                                                                Official Name
                                                                            </div>
                                                                            <div className="col text-end">
                                                                                {
                                                                                    country.name || null
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </ListGroup.Item>
                                                                <ListGroup.Item>
                                                                    <div className="container p-0">
                                                                        <div className="row p-0">
                                                                            <div className="col-auto text-start">
                                                                                Native Name
                                                                            </div>
                                                                            <div className="col text-end">
                                                                                {
                                                                                    country.nativeName || null
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </ListGroup.Item>
                                                                <ListGroup.Item>
                                                                    <div className="container p-0">
                                                                        <div className="row p-0">
                                                                            <div className="col-auto text-start">
                                                                                Demonym
                                                                            </div>
                                                                            <div className="col text-end">
                                                                                {
                                                                                    country.demonym || null
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </ListGroup.Item>
                                                                <ListGroup.Item>
                                                                    <div className="container p-0">
                                                                        <div className="row p-0">
                                                                            <div className="col-auto text-start">
                                                                                Alternative Spellings
                                                                            </div>
                                                                            <div className="col text-end">
                                                                                {
                                                                                    country.altSpellings.toString(',') || null
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </ListGroup.Item>
                                                                <ListGroup.Item>
                                                                    <Accordion flush>
                                                                        <Accordion.Item eventKey="0">
                                                                            <Accordion.Header>Translations</Accordion.Header>
                                                                                <Accordion.Body>
                                                                                    {
                                                                                        Object.keys(country.translations).map((key) => (
                                                                                            <ListGroup.Item>
                                                                                                <div className="container p-0">
                                                                                                    <div className="row p-0">
                                                                                                        <div className="col-auto text-start">
                                                                                                            {key}
                                                                                                        </div>
                                                                                                        <div className="col text-end">
                                                                                                            {
                                                                                                                country.translations[key] || null
                                                                                                            }
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </ListGroup.Item>
                                                                                        ))
                                                                                    }
                                                                                </Accordion.Body>
                                                                        </Accordion.Item>
                                                                    </Accordion>
                                                                </ListGroup.Item>
                                                            </ListGroup>
                                                        </div>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="languages">
                                                        <ListGroup>
                                                            {
                                                                country.languages.map((language) => (
                                                                    <ListGroup.Item>
                                                                        <div className="container p-0">
                                                                            <div className="row p-0">
                                                                                <div className="col-auto text-start">
                                                                                    {
                                                                                        language.iso639_2 || null
                                                                                    }
                                                                                </div>
                                                                                <div className="col text-end">
                                                                                    {
                                                                                        language.nativeName || null
                                                                                    }
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </ListGroup.Item>
                                                                ))
                                                            }
                                                        </ListGroup>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="geography">
                                                        <ListGroup>
                                                            <ListGroup.Item>
                                                                <div className="container p-0">
                                                                    <div className="row p-0">
                                                                        <div className="col-auto text-start">
                                                                            Region
                                                                        </div>
                                                                        <div className="col text-end">
                                                                            {
                                                                                country.region || null
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </ListGroup.Item>
                                                            <ListGroup.Item>
                                                                <div className="container p-0">
                                                                    <div className="row p-0">
                                                                        <div className="col-auto text-start">
                                                                            Sub-Region
                                                                        </div>
                                                                        <div className="col text-end">
                                                                            {
                                                                                country.subregion || null
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </ListGroup.Item>
                                                            <ListGroup.Item>
                                                                <div className="container p-0">
                                                                    <div className="row p-0">
                                                                        <div className="col-auto text-start">
                                                                            Capital
                                                                        </div>
                                                                        <div className="col text-end">
                                                                            {
                                                                                country.capital || null
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </ListGroup.Item>
                                                            <ListGroup.Item>
                                                                <div className="container p-0">
                                                                    <div className="row p-0">
                                                                        <div className="col-auto text-start">
                                                                            Lat/Lng
                                                                        </div>
                                                                        <div className="col text-end">
                                                                            <a href={`http://www.openstreetmap.org/#map=5/${country.latlng[0]}/${country.latlng[1]}`}>
                                                                                {
                                                                                    country.latlng.toString(',') || null
                                                                                }
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </ListGroup.Item>
                                                            <ListGroup.Item>
                                                                <div className="container p-0">
                                                                    <div className="row p-0">
                                                                        <div className="col-auto text-start">
                                                                            Area
                                                                        </div>
                                                                        <div className="col text-end">
                                                                            {
                                                                                country.area.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") || null
                                                                            }
                                                                            &nbsp;km²
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </ListGroup.Item>
                                                            <ListGroup.Item>
                                                                <div className="container p-0">
                                                                    <div className="row p-0">
                                                                        <div className="col-auto text-start">
                                                                            Population
                                                                        </div>
                                                                        <div className="col text-end">
                                                                            {
                                                                                country.population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") || null
                                                                            }
                                                                            &nbsp;peoples
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </ListGroup.Item>
                                                            <ListGroup.Item>
                                                                <div className="container p-0">
                                                                    <div className="row p-0">
                                                                        <div className="col-auto text-start">
                                                                            Land Borders
                                                                        </div>
                                                                        <div className="col text-end">
                                                                            {
                                                                                country.borders.map((border, index) => (
                                                                                    <a href={`/country/${border}`}>
                                                                                        {border}
                                                                                        {index + 1 < country.borders.length ? ',' : null}
                                                                                    </a>
                                                                                )) || null
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </ListGroup.Item>
                                                            <ListGroup.Item>
                                                                <div className="container p-0">
                                                                    <div className="row p-0">
                                                                        <div className="col-auto text-start">
                                                                            Timezones
                                                                        </div>
                                                                        <div className="col text-end">
                                                                            {
                                                                                country.timezones.toString(',') || null
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </ListGroup.Item>
                                                        </ListGroup>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="codes">
                                                        <ListGroup.Item>
                                                                <div className="container p-0">
                                                                    <div className="row p-0">
                                                                        <div className="col-auto text-start">
                                                                            ISO 3166-1 alpha-2
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
                                                                        <div className="col-auto text-start">
                                                                            ISO 3166-1 alpha-3
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
                                                                        <div className="col-auto text-start">
                                                                            ISO 3166-1 numeric
                                                                        </div>
                                                                        <div className="col text-end">
                                                                            {
                                                                                country.numericCode || null
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </ListGroup.Item>
                                                            <ListGroup.Item>
                                                                <div className="container p-0">
                                                                    <div className="row p-0">
                                                                        <div className="col-auto text-start">
                                                                            International calling code
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
                                                            <ListGroup.Item>
                                                                <div className="container p-0">
                                                                    <div className="row p-0">
                                                                        <div className="col-auto text-start">
                                                                            ISO 4217 currency code
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
                                                                        <div className="col-auto text-start">
                                                                            Top level domain
                                                                        </div>
                                                                        <div className="col text-end">
                                                                            {
                                                                                country.topLevelDomain.toString(',') || null
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </ListGroup.Item>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="currencies">
                                                        {
                                                            country.currencies.map(curr => (
                                                                <div>
                                                                    <ListGroup>
                                                                        <ListGroup.Item>
                                                                            <div className="container p-0">
                                                                                <div className="row p-0">
                                                                                    <div className="col-auto text-start">
                                                                                        Code
                                                                                    </div>
                                                                                    <div className="col text-end">
                                                                                        {
                                                                                            curr.code || null
                                                                                        }
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </ListGroup.Item>
                                                                        <ListGroup.Item>
                                                                            <div className="container p-0">
                                                                                <div className="row p-0">
                                                                                    <div className="col-auto text-start">
                                                                                        Name
                                                                                    </div>
                                                                                    <div className="col text-end">
                                                                                        {
                                                                                            curr.name || null
                                                                                        }
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </ListGroup.Item>
                                                                        <ListGroup.Item>
                                                                            <div className="container p-0">
                                                                                <div className="row p-0">
                                                                                    <div className="col-auto text-start">
                                                                                        Symbol
                                                                                    </div>
                                                                                    <div className="col text-end">
                                                                                        {
                                                                                            curr.symbol || null
                                                                                        }
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </ListGroup.Item>
                                                                    </ListGroup>
                                                                </div>
                                                            ))
                                                        }
                                                    </Tab.Pane>
                                                </Tab.Content>
                                            </Col>
                                        </Row>
                                    </Tab.Container>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
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

const connectedSingleCountry = withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleCountry))

export default connectedSingleCountry