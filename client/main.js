import { meteor, Meteor } from 'meteor/meteor'
import React from 'react'
import ReactDOM from 'react-dom'
import Landing from '/imports/pages/Landing'


Meteor.startup(() => {
    ReactDOM.render(
        <Landing color="blue"/>,
        document.getElementById('root')
    )
    console.log('CLIENT: LAUNCH')
})