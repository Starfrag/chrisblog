import React, {Component} from 'react'
import { Form, Button } from 'semantic-ui-react'

export default class PostForm extends Component {
    state = {
        post: {}
    }


    handleChange = (e, {name, value}) => {
        const {post} = this.state
        post[name] = value
        this.setState({post})
    }

    submitPost = (e) => {
        e.preventDefault()
        const {post} = this.state
        Meteor.call('posts.create', post, (error, result) => {
            if(error){
                alert('erreur de création de post')
            }else{
                alert("Le post a bien été créé !")
            }
        } )
    }

    render(){

        const {post} = this.state

        return(
            <Form onSubmit={this.submitPost} >
                <Form.Group widths='equal'>
                    <Form.Input
                        label='Titre du post'
                        onChange={this.handleChange}
                        value={post.title}
                        name='title'
                    />
                    <Form.Input
                        label='Contenu du post'
                        onChange={this.handleChange}
                        value={post.content}
                        name='content'
                    />
                </Form.Group>
                <Button color="blue">CREER LE POST</Button>
            </Form>
        )
    }
}