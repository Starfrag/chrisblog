import React, { Component } from 'react'
import Navbar from '/imports/components/Navbar'
import Header from '/imports/components/Header'
import Footer from '/imports/components/Footer'

export default class Landing extends Component {

    state = {

    }

    render() {

        return (
            <div>
                <Navbar />
                <Header />
                <Footer />
            </div>
        )
    }
}