import React, { Component } from 'react'
import Navbar from '/imports/components/Navbar'
import FormContent from '/imports/components/FormContent'
import Footer from '/imports/components/Footer'

export default class Form extends Component {

    state = {

    }

    render() {

        return (
            <div>
                <Navbar />
                <FormContent />
                <Footer />
            </div>
        )
    }
}