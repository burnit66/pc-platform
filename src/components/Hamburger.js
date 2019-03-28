import React, { Component } from 'react'
import '../css/sidebar.css'

class Hamburger extends Component {

    constructor (props) {
        super(props)
        this.state = {
            
        }
    }

    componentDidMount () {
        console.log('Mounted Hamburger')
    }

    toggleNav() {
        document.getElementsByClassName("main-menu")[0].classList.toggle("openNav")
        document.getElementsByClassName("home-container")[0].classList.toggle("shiftRight")
    }

    render () {
        return (
            <div>
                <div className="navHamburger" onClick={this.toggleNav}>
                    <div className="toggle-icon">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hamburger