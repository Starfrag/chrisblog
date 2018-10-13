import React, { Component } from 'react'
import { PostForm } from '/imports/components'
import { Container } from 'semantic-ui-react'
import { withTracker } from 'meteor/react-meteor-data'
import Posts from '/imports/api/posts/posts'

class Search extends Component {

    state = {

    }

    render() {

        const {posts, loading} = this.props

        console.log("posts", posts)

        return (
            <div>
                <Container>
                    <h1>Dans l'attente de la fin du site, un formulaire pour créer des posts ! Batard !</h1>
                    <PostForm />
                    {!loading &&
                        <div>
                            {posts.map(p => {
                                return(
                                    <div>
                                        <h2>{p.title}</h2>
                                        <p>{p.content}</p>
                                    </div>
                                )
                            })}
                        </div>
                    }
                </Container>
            </div>
        )
    }
}

export default SearchContainer = withTracker(() => {
    const publication = Meteor.subscribe('posts.all')
    const loading = !publication.ready()
    const posts = Posts.find({}).fetch()
    return {
        loading,
        posts
    }
})(Search)