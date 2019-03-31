import React, { Component } from 'react'
import '../css/footer.css'


class signup extends Component {

    componentDidMount () {
        console.log('Mounted NewsletterSignup')
    }

    render () {
        return (
            <div className="signup">
                <form className="signup-form" id="newsletter">
                    <input required id="email" type="email" placeholder="Your e-mail"/>
                    <button form="newsletter" type="submit" className="signup-button"><i class="fas fa-2x fa-arrow-right"></i></button>
                </form>
            </div>
        )
    }
}

export default signup