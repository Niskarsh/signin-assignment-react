import React from 'react'
import './index.css'

export const Card = (props) => {
    return (
        <div className="Card">
            <p id="si">SIGN IN</p>
            <p id="wi"> WITH LINKED IN</p>

            <button name="signin" onClick={props.click}>Li</button>
        </div>
    )
}