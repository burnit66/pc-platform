import React, { Component } from 'react'
import '../css/module.css'


class ModuleOne extends Component {

    componentDidMount () {
        console.log('Mounted ModuleOne')
    }

    render () {
        return (
            <div className="module-one-container">
                <div className="container">
                    <div className="module-one-image">
                        <img src="http://placehold.it/550x250"/>
                    </div>
                    <div className="module-one-copy">
                        <div className="module-one-inner-container">
                            <h2>New Business. Engaged.</h2>
                            <p>
                                Whether you are starting a new home business, looking to build a personal workstation, or build an extreme gaming rig - We have a solution for you.
                            </p>
                        </div>
                        <a className="module-one-cta" href="/products">Get Started</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModuleOne