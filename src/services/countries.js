import axios from 'axios'

const baseUrl = 'https://restcountries.eu/rest/v2'

const getAllCountries = async() => {
    try {
        const requestGetAll = await axios.get(`${baseUrl}/all`)

        let { data } = requestGetAll
        return data.slice(0, 50)
    } catch (error) {
        return null
    }
}

const getSingleCountry = async(nameCountry) => {
    try {
        let requestGetSingle = await axios.get(`${baseUrl}/name/${nameCountry}`)

        if (nameCountry.length === 3) {
            requestGetSingle = await axios.get(`${baseUrl}/alpha/${nameCountry}`)
        }

        let { data } = requestGetSingle
        return data
    } catch (error) {
        return null
    }
}

const serviceCountries = {
    getAllCountries,
    getSingleCountry
}

export default serviceCountries