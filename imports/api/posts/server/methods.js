import {Meteor} from 'meteor/meteor'
import Posts from '../posts'

Meteor.methods({
    'posts.create'(post) {
        Posts.insert(post)
    }
});