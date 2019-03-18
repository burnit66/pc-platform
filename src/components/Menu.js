import React, { Component } from 'react'

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
                <div>
                    <img src="http://placehold.it/200x50"/>
                    <ul>
                        <li>Home</li>
                        <li>Store</li>
                        <li>Cart</li>
                        <li>My Account</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Menu