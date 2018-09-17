import { meteor, Meteor } from 'meteor/meteor'
import React from 'react'
import ReactDOM from 'react-dom'


Meteor.startup(() => {
    ReactDOM.render(
        <h1>Hello</h1>,
        document.getElementById('root')
    )
    console.log('CLIENT: LAUNCH')
})