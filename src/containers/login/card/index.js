import React from 'react'
import './index.css'
export const Card = (props) => {
    return (
        <div className="Card">
            <p id="si">SIGN IN</p>
            <p id="wi"> WITH LINKED IN</p>
            <a href={`https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=http://localhost:3001/authorize&state=${process.env.REACT_APP_STATE}&scope=${process.env.REACT_APP_SCOPE}`}>
            <button name="signin" >LINKED</button></a>
            <p>{props.rec2?props.rec2: null}</p>
        </div>
    )
}