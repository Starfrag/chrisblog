import React, {Component} from 'react'
import { Navbar, Footer } from '/imports/components'
import { Landing } from '/imports/pages'

export default class MainLayout extends Component {
    state = {
        
    }

    render(){
        return(
            <div>
                <Navbar/>
                    <Landing />
                <Footer/>
            </div>
        )
    }
}