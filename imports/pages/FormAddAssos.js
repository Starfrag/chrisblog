import React, { Component } from 'react'
import Navbar from '/imports/components/Navbar'
import HeaderForm from '/imports/components/HeaderForm'
import FormContentAddAssos from '/imports/components/FormContentAddAssos'
import Footer from '/imports/components/Footer'

export default class FormAddAssos extends Component {

    state = {

    }

    render() {

        return (
            <div>
                <Navbar />
                <HeaderForm />
                <FormContentAddAssos />
                <Footer />
            </div>
        )
    }
}