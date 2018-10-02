import React, { Component } from 'react'
import { Form, Container } from 'semantic-ui-react'

class FormContentAddUser extends Component {

    state = {

    }

    handleChange = (e, { value }) => this.setState({ value })

    render() {

        return (
            <Container className='formContent_1'>
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Input label='Nom' placeholder='Nom' required />
                        <Form.Input label='Prénom' placeholder='Prénom' required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Input label="Adresse de l'association" placeholder="Adresse de l'association" width={14} required />
                        <Form.Input label='Code Postal' placeholder='Code Postal' width={2} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Input label="Complément d'adresse" placeholder="Complément d'adresse" width={16} />
                    </Form.Group>
                    {/* TODO Country Picker */}
                    <Form.Group>
                        <Form.Input label='Email' placeholder='joe@schmoe.com' width={10} required />
                        <Form.Input label='Téléphone Fixe' placeholder='Téléphone Fixe' width={3} />
                        <Form.Input label='Téléphone Portable' placeholder='Téléphone Portable' width={3} required />
                    </Form.Group>
                    {/* TODO Check password */}
                    <Form.Group widths='equal'>
                        <Form.Input label='Mot de passe' type='password' required />
                        <Form.Input label='Confirmation du mot de passe' type='password' required />
                    </Form.Group>
                    <Form.TextArea label='Présentation' placeholder='Présentez-vous en quelques lignes...' />
                    <Form.Checkbox label="J'accepte les conditions d'utilisation" required />
                    <Form.Button>Submit</Form.Button>
                </Form>
            </Container>
        )
    }
}

export default FormContentAddUser