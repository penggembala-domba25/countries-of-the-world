import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Notification from '../notification/Notification'
import About from '../about.js/About';
import AllCountries from '../countries/AllCountries'
import SingleCountry from '../countries/SingleCountry'

class Content extends Component {
    render() {
        return (
            <div className='mx-3 my-4 fullscreen'>
                <Notification />
                
                <Switch>
                    <Route path='/about' component={About} />
                    <Route path='/country/:nameCountry'>
                        <SingleCountry />
                    </Route>
                    <Route path='/' component={AllCountries} />
                </Switch>
            </div>
        )
    }
}

export default Content