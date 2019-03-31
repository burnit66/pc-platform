import React, { Component } from 'react'
import '../css/moduletwo.css'


class ModuleTwo extends Component {

    componentDidMount () {
        console.log('Mounted ModuleTwo')
    }

    render () {
        return (
            <div className="module-two-container">
            
                <h2 className="callout-header">Cool Statement</h2>

                <div className="container callout-container">
                    <div className="callout">
                        <h3>We Design.</h3>
                        <img src="http://placehold.it/300x300"/>
                        <p>
                            Your PC is crafted by the our precise and effective Xidax system-builders. Building a Xidax PC isn't merely a matter of assembly, it's a transfer of heart and soul into every build. Xidax is home to some of the most respected PC builders in the nation. Anyone can build a PC, but only a few hand-selected, obsessive, 360-point certified craftsmen can build a Xidax PC.
                        </p>
                    </div>
                    <div className="callout">
                        <h3>We Test.</h3>
                        <img src="http://placehold.it/300x300"/>
                        <p>
                        A PC with amazing hardware is of no use if it's not stable as hell. Xidax PCs are put thru a battery of tests to ensure that when your PC arrives there are no surprises and you can jump right into perfecting your game.
                        </p>
                    </div>
                    <div className="callout">
                        <h3>We Build.</h3>
                        <img src="http://placehold.it/300x300"/>
                        <p>
                        Xidax PCs are hand-tuned to squeeze every additional frame-rate and ounce of performance out of your build. The Xidax process doesn't end at the building of your PC: we make sure your parts are performing at peak levels to provide you every dime of value from the hardware you've selected.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModuleTwo