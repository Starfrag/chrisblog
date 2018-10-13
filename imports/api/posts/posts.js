// imports/db/posts/collection.js
import { Mongo } from 'meteor/mongo';

const Posts = new Mongo.Collection('posts');

export default Posts;