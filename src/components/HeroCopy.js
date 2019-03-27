import React from "react"
import '../css/herocopy.css'

const HeroCopy = () => (
    <div className="hero-copy-container">
        <div className="container">
            <h1 className="hero-header">Launch <span class="notbold">(</span>it<span class="notbold">)</span> Here.</h1>
            <div className="button-primary-container">
                <a class="button-primary" href="#site">Build Site</a>
                <a class="button-primary" href="#rig">Build PC</a>
            </div>
        </div>
    </div>
)

export default HeroCopy
