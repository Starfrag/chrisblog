import React, { Component } from 'react'
import {ContentLanding, HeaderLanding} from '/imports/components'

export default class Landing extends Component {

    state = {

    }

    render() {

        return (
            <div>
                <HeaderLanding />
                <ContentLanding />
            </div>
        )
    }
}