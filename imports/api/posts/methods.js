import {Meteor} from 'meteor/meteor'
import Posts from '/imports/db/posts'; // or, as it's on github, for simplicity, import {Posts} from '/db';

Meteor.methods({
    'post.create'(post) {
        Posts.insert(post);
    }
});