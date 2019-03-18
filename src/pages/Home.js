import React, { Component } from 'react'
import Menu from '../components/Menu'

class Home extends Component {

    componentDidMount () {
        console.log('Mounted Home')
    }

    render () {
        return (
            <div className="home-container">
                <Menu/>
            </div>
        )
    }
}

export default Home