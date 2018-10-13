import React, {Component} from 'react'
import { Navbar, Footer } from '/imports/components'
import { Landing, Contact, NotFound, FormAddAssos } from '/imports/pages'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

export default class MainLayout extends Component {
    state = {
        
    }

    render(){
        return(
            <Router>
                <div id="main-layout">
                    <Navbar/>
                    <div className="main-container">
                            <Switch>
                                <Route exact path="/" component={Landing} />
                                <Route exact path="/contact" component={Contact} />
                                <Route exact path="/assos/add" component={FormAddAssos} />
                                <Route path="*" component={NotFound} />
                            </Switch>
                    </div>
                    <Footer/>
                </div>
            </Router>
        )
    }
}