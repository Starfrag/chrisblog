import React, { Component } from 'react'
import Navbar from '/imports/components/Navbar'
import Header from '/imports/components/Header'
//import Search from '/imports/components/Search'

export default class Landing extends Component {

    state = {

    }

    render() {

        return (
            <div>
                <Navbar />
                <Header />
            </div>
        )
    }
}