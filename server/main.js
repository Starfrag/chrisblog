import { meteor, Meteor } from 'meteor/meteor'
import "/imports/api/posts/server/methods"
import "/imports/api/posts/server/publications"


Meteor.startup(() => {
    console.log('SERVER: LAUNCH')
})