import React, { Component } from 'react'
import NewsletterSignup from './newsletterSignup'
import '../css/footer.css'


class Footer extends Component {

    componentDidMount () {
        console.log('Mounted Footer')
    }

    render () {
        return (
        <div className="footer">
            <div className="contain container">
                <div className="col">
                    <h1>Company</h1>
                    <ul>
                    <li>About</li>
                    <li>Mission</li>
                    <li>Services</li>
                    <li>Social</li>
                    <li>Get in touch</li>
                    </ul>
                </div>

                <div className="col">
                    <h1>Products</h1>
                    <ul>
                    <li>About</li>
                    <li>Mission</li>
                    <li>Services</li>
                    <li>Social</li>
                    <li>Get in touch</li>
                    </ul>
                </div>

                <div className="col">
                    <h1>Support</h1>
                    <ul>
                    <li>Contact us</li>
                    <li>Web chat</li>
                    <li>Open ticket</li>
                    </ul>
                </div>

                <div className="col">
                    <h1>Join our Newsletter!</h1>
                    <NewsletterSignup/>
                </div>

                <div className="col social">
                    <ul>
                        <li><img className="logo-footer" src="http://placehold.it/250x40"/></li>
                        <li><img src="http://placehold.it/50x50"/></li>
                        <li><img src="http://placehold.it/50x50"/></li>
                        <li><img src="http://placehold.it/50x50"/></li>
                    </ul>
                </div>

                <div className="col legal">
                    <ul>
                        <li>Terms of Use</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Policy</li>
                    </ul>
                    <span>Copyright &copy;2019 SitesScriptsAndRigs</span>
                </div>

                <div className="clearfix">&nbsp;</div>
            </div>
        </div>
        )
    }
}

export default Footer