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

    render () {
        return (
            <div>
                <div className="sidebarContainer">
                    <nav className="main-menu">
                        <div className="profile-pic-container">
                            <a onClick={() => window.location.href = '/profile'}>
                                <img className="profile-pic" src="http://placehold.it/50x50" alt="Profile Pic" />
                            </a>
                        </div>

                        <ul>
                            <li>
                                <a onClick={() => window.location.href = '/home'}>
                                    {/* <i className="fas fa-home fa-2x"></i> */}
                                    <span className="nav-text">Home</span>
                                </a>
                            </li>
                            <li>
                                <a onClick={() => window.location.href = '/products'}>
                                    {/* <i className="fas fa-history fa-2x"></i> */}
                                    <span className="nav-text">Products</span>
                                </a>

                            </li>
                            <li>
                                <a onClick={() => window.location.href = '/About'}>
                                    {/* <i className="fas fa-credit-card fa-2x"></i> */}
                                    <span className="nav-text">About</span>
                                </a>

                            </li>
                            <li>
                                <a onClick={() => window.location.href = '/profile'}>
                                    {/* <i className="fas fa-user-circle fa-2x"></i> */}
                                    <span className="nav-text">Account Info</span>
                                </a>
                            </li>
                        </ul>

                        <ul className="logout">
                            <li>
                                <a>
                                    <i className="fas fa-power-off fa-2x"></i>
                                    <span className="nav-text">Logout</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Sidebar