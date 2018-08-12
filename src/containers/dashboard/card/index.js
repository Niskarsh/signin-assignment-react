import React from 'react'
import { Button, Row, Col } from 'antd'
import { Card as CARD } from 'antd'
import './index.css'
export const Card = (props) => {

    return (
        <Row type="flex" justify="space-around" align="middle">
            <Col xs={{ span: 24 }} lg={{ span: 8 }}></Col>
            <Col xs={{ span: 24 }} lg={{ span: 8 }}><CARD title={`Hello ${props.user.lastName}, ${props.user.firstName}`} hoverable={true} className="Card">
                <div>HeadLine : {props.user.headline}</div>
            </CARD></Col>
            <Col xs={{ span: 24 }} lg={{ span: 8 }}></Col>
        </Row>
    )
}