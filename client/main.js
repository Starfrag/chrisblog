import { meteor, Meteor } from 'meteor/meteor'
import React from 'react'
import ReactDOM from 'react-dom'
// Ci-dessous, lien de la page à charger après éxécution de la commande >meteor<
import Landing from '/imports/pages/Landing'
import 'semantic-ui-css/semantic.min.css';


Meteor.startup(() => {
    ReactDOM.render(
        // Page à charger au lancement du server
        <Landing />,
        document.getElementById('root')
    )
    console.log('CLIENT: LAUNCH')
})