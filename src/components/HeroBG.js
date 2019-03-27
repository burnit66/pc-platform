import React, { Component } from 'react'
import hero from '../assets/images/cropped-sitebackground.jpg'
import HeroCopy from '../components/HeroCopy'


const vheight = window.innerHeight
const vwidth = window.innerWidth

const BG = 'url(' + hero + ') no-repeat top center fixed'

const overlay = {
    width: vwidth,
    height: vheight,
    position: 'absolute',
    top:0,
    backgroundColor: '#000',
    opacity: 0.5
}

const divStyle = {
    width: vwidth,
    height: vheight,
    background: BG,
    backgroundSize: 'cover',
    top:0
  }

class HeroBG extends Component {

    constructor (props) {
        super(props)
        this.state = {
            viewport: {
                width: vwidth,
                height: vheight
              }
        }
    }

    componentDidMount () {
        console.log('Mounted Hero BG')
    }

    render () {
        return (
            <div className="hero-bg" style={divStyle}>
                <div className="dark-overlay" style={overlay}>
                </div>
                <HeroCopy/>
            </div>
        )
    }
}

export default HeroBG