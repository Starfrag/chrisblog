import React, { Component } from 'react'
import Navbar from '/imports/components/Navbar'
import Header from '/imports/components/Header'
import LandingContent from '/imports/components/LandingContent'
import Footer from '/imports/components/Footer'

export default class Landing extends Component {

    state = {

    }

    render() {

        return (
            <div>
                <Navbar />
                <Header />
                <LandingContent />
                <Footer />
            </div>
        )
    }
}