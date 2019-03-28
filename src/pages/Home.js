import React, { Component } from 'react'
import Menu from '../components/Menu'
import HeroBG from '../components/HeroBG'
import ModuleOne from '../components/ModuleOne'
import Sidebar from '../components/Sidebar'
import Hamburger from '../components/Hamburger'

class Home extends Component {

    componentDidMount () {
        console.log('Mounted Home')
    }

    render () {
        return (
            <div className="home-container">
                <HeroBG/>
                <Hamburger/>
                <Sidebar/>
                <Menu/>
                <ModuleOne/>
            </div>
        )
    }
}

export default Home