import React, {Component} from 'react'
import { connect } from 'react-redux';
import { initializeCountries, searchCountry } from '../../reducers/countryReducer';
import { InputGroup, FormControl, Container, Row, Col } from 'react-bootstrap';

class FormSearchCountry extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            searchInput: '',
            countries: null
        }

        this.handleChangeInput = this.handleChangeInput.bind(this)
    }

    handleChangeInput = (event) => {
        event.preventDefault()

        const {value} = event.target

        this.setState({
            searchInput: value
        })

        if(value) {
            this.props.searchCountry(value)
        }
    }

    componentDidMount() {
        const {searchInput} = this.state

        if(searchInput) {
            this.props.searchCountry(searchInput)
        }
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">
                                Country
                            </InputGroup.Text>
                            <FormControl
                                onChange={(event) => this.handleChangeInput(event)}
                                value={this.state.searchInput}
                                placeholder="name"
                                aria-label="countryName"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
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

const connectedFormSearchCountry = connect(mapStateToProps, mapDispatchToProps)(FormSearchCountry)

export default connectedFormSearchCountry