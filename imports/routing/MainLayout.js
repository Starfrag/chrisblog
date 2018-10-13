import React, {Component} from 'react'
import { Navbar, Footer } from '/imports/components'

export default class MainLayout extends Component {
    state = {
        
    }

    render(){
        return(
            <div>
                <Navbar/>

                <Footer/>
            </div>
        )
    }
}