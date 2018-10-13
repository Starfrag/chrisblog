import React, {Component} from 'react'
import { Navbar, Footer } from '/imports/components'
import { Landing, Contact, NotFound } from '/imports/pages'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

export default class MainLayout extends Component {
    state = {
        
    }

    render(){
        return(
            <div id="main-layout">
                <Navbar/>
                <div className="main-container">
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Landing} />
                            <Route exact path="/contact" component={Contact} />
                            <Route path="*" component={NotFound} />
                        </Switch>
                    </Router>
                </div>
                <Footer/>
            </div>
        )
    }
}