import React, { Component } from 'react'
import '../css/sidebar.css'

class Sidebar extends Component {

    constructor (props) {
        super(props)
        this.state = {
            
        }
    }

    componentDidMount () {
        console.log('Mounted Sidebar')
    }

    toggleSidebar() {
        console.log('sidebar')
    }

    render () {
        return (
            <span className="hamburger" onClick={() => this.toggleSidebar()}>
                <i class="fas fa-bars fa-2x"></i>
            </span>
        )
    }
}

export default Sidebar