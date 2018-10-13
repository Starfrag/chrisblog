import React, { Component } from 'react'
import { PostForm } from '/imports/components'
import { Container } from 'semantic-ui-react'

export default class Search extends Component {

    state = {

    }

    render() {

        return (
            <div>
                <Container>
                    <h1>Dans l'attente de la fin du site, un formulaire pour créer des posts ! Batard !</h1>
                    <PostForm />
                </Container>
            </div>
        )
    }
}