import React, { Component } from 'react'
import { Breadcrumb } from 'react-bootstrap'

class About extends Component {
    render() {
        return (
            <div>
                <Breadcrumb
                    className='text-dark'
                >
                    <Breadcrumb.Item href='/'>
                        Search
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>
                        About
                    </Breadcrumb.Item>
                </Breadcrumb>
                <h3>
                    About
                </h3>
                <p>
                    This site is made for simple search countries on the world and explore information of them with little detail.
                </p>
                <p>
                    All data is courtesy of <a href="https://restcountries.eu/">restcountries</a>. Personnally, I'm very grateful for the author's API and all that parcipate of this project API.
                </p>
                <p>
                    Site design by&nbsp;
                    <a href="https://github.com/penggembala-domba25/countries-of-the-world.git">
                        penggembala-domba25 
                    </a>. &copy;
                    {
                        new Date().getFullYear() === 2021 ? `2021` : `2021 - ${new Date().getFullYear()}`
                    } 
                </p>
                <p>

                </p>
            </div>
        )
    }
}

export default About