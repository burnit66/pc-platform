import React, { Component } from 'react'
import Menu from '../components/Menu'
import HeroBG from '../components/HeroBG'
import ModuleOne from '../components/ModuleOne'

class Home extends Component {

    componentDidMount () {
        console.log('Mounted Home')
    }

    render () {
        return (
            <div className="home-container">
                <HeroBG/>
                <Menu/>
                <ModuleOne/>
            </div>
        )
    }
}

export default Home