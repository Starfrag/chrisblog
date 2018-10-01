import { meteor, Meteor } from 'meteor/meteor'
import React from 'react'
import ReactDOM from 'react-dom'
import Form from '/imports/pages/Form'
import 'semantic-ui-css/semantic.min.css';


Meteor.startup(() => {
    ReactDOM.render(
        <Form />,
        document.getElementById('root')
    )
    console.log('CLIENT: LAUNCH')
})