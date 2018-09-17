import React, { Component } from 'react'

export default class Navbar extends Component {

    state = {

    }

    render() {
        const {color, backgroundColor, height} = this.props
        return(
            <div className="navbar" style={{color, backgroundColor, height}}>
                <p style={{color}}>NAVBAR</p>
            </div>
        )
    }

}