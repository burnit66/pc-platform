import React, { Component } from 'react'
import Menu from '../components/Menu'
import HeroBG from '../components/HeroBG'
import Sidebar from '../components/Sidebar'
import Hamburger from '../components/Hamburger'
import ModuleOne from '../components/ModuleOne'
import ModuleTwo from '../components/ModuleTwo'
import Footer from '../components/Footer'

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
                <ModuleTwo/>
                <Footer/>
            </div>
        )
    }
}

export default Home