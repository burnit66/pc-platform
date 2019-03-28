import React, { Component } from 'react'
import '../css/menu.css'
import logo from '../assets/images/logo.svg'
import Sidebar from '../components/Sidebar'

const scrollMenu = () => {
    var nav = document.getElementById('nav')
    window.addEventListener('scroll', function(event) { 
        event.preventDefault()
        if (window.scrollY >= 50) {
            nav.style.backgroundColor = '#111'
        } else {
            nav.style.backgroundColor = 'transparent'
        }
    })
}

class Menu extends Component {

    constructor (props) {
        super(props)
        this.state = {
            active: false
        }
    }

    componentDidMount () {
        console.log('Mounted Menu')
        scrollMenu()
    }

    render () {
        return (
            <div className="menu-container" id="nav">
                <Sidebar/>
                <div className="container">
                    <img className="menu-logo" alt="logo" src={ logo }/>
                    <ul className="menu-item-container">
                        <li className="menu-item active"><a className="menu-link" href="/">Home</a></li>
                        <li className="menu-item"><a className="menu-link" href="/store">Store</a></li>
                        <li className="menu-item"><a className="menu-link" href="/cart">Cart</a></li>
                        <li className="menu-item"><a className="menu-link" href="/account">My Account</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Menu