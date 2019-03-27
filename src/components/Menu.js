import React, { Component } from 'react'
import '../css/menu.css'
import logo from '../assets/images/logo.svg'

class Menu extends Component {

    constructor (props) {
        super(props)
        this.state = {
            active: false
        }
    }

    componentDidMount () {
        console.log('Mounted Menu')
    }

    render () {
        return (
            <div className="menu-container">
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