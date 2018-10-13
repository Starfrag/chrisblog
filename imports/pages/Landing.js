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
                {/* Affichage des éléments dans la page d'accueil, avec ordre de présentation (haut en bas) */}
                <Navbar />
                <HeaderLanding />
                <ContentLanding />
                <Footer />
            </div>
        )
    }
}