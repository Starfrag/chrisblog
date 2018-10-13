import React, {Component} from 'react'
import { Navbar, Footer } from '/imports/components'
import { Landing, Contact } from '/imports/pages'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

export default class MainLayout extends Component {
    state = {
        
    }

    render(){
        return(
            <div id="main-layout">
                <Navbar/>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Landing} />
                            <Route exact path="/contact" component={Contact} />
                        </Switch>
                    </Router>
                <Footer/>
            </div>
        )
    }
}