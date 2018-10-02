import React, { Component } from 'react'
import Navbar from '/imports/components/Navbar'
import HeaderForm from '/imports/components/HeaderForm'
import FormContentAddUser from '/imports/components/FormContentAddUser'
import Footer from '/imports/components/Footer'

export default class FormAddUser extends Component {

    state = {

    }

    render() {

        return (
            <div>
                <Navbar />
                <HeaderForm />
                <FormContentAddUser />
                <Footer />
            </div>
        )
    }
}