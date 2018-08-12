import React from 'react'
import { Button, Row, Col } from 'antd'
import { Card as CARD } from 'antd'
import './index.css'
export const Card = (props) => {

    // const style = {
    //     background : "../"
    // }



    return (


        <Row type="flex" justify="space-around" align="middle">
            <Col xs={{span:24}} lg={{span:8}}></Col>
            <Col xs={{span:24}} lg={{span:8}}><CARD title="Sign in with" hoverable={true} className="Card">
                <Button className="button" type="primary" href={`https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_AUTHENTICATE_CALLBACK}&state=${process.env.REACT_APP_STATE}&scope=${process.env.REACT_APP_SCOPE}`} name="signin" disabled={props.disabled} onClick={props.click} />
            </CARD></Col>
            <Col xs={{span:24}} lg={{span:8}}></Col>
        </Row>




        // <div className="Card">
        //     <p id="si">SIGN IN</p>
        //     <p id="wi"> WITH LINKED IN</p>
        //     {/* <a href={``}> */}
        //     <Button className="button" type="primary" href={`https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=http://localhost:3000/authenticate&state=${process.env.REACT_APP_STATE}&scope=${process.env.REACT_APP_SCOPE}`} name="signin" disabled={props.disabled} onClick={props.click} />
        // </div>
    )
}