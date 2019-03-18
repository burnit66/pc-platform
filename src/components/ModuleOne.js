import React, { Component } from 'react'
import '../css/module.css'

const moduleonestyle = {
    height: 600,
    width: '100%',
    backgroundColor: '#b4da55',
}

class ModuleOne extends Component {

    componentDidMount () {
        console.log('Mounted ModuleOne')
    }

    render () {
        return (
            <div className="module-one-container" style={moduleonestyle}>
                <div className="container">
                    <div>&nbsp;</div>
                </div>
            </div>
        )
    }
}

export default ModuleOne