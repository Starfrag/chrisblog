import { meteor, Meteor } from 'meteor/meteor'
import React from 'react'
import ReactDOM from 'react-dom'
import FormAddAssos from '/imports/pages/FormAddAssos'
import 'semantic-ui-css/semantic.min.css';


Meteor.startup(() => {
    ReactDOM.render(
        <FormAddAssos />,
        document.getElementById('root')
    )
    console.log('CLIENT: LAUNCH')
})