import React, { Component } from 'react'
import Navbar from '/imports/components/Navbar'
import HeaderLanding from '/imports/components/HeaderLanding'
import ContentLanding from '/imports/components/ContentLanding'
import Footer from '/imports/components/Footer'

export default class Landing extends Component {

    state = {

    }

    render() {

        return (
            <div>
                <Navbar />
                <HeaderLanding />
                <ContentLanding />
                <Footer />
            </div>
        )
    }
}