import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Input from '../../../components/input/input';
import Button from '../../../components/button/button';
import SeatIcon from '../../../assets/images/seatmap_icon.svg';
import SystemIcom from '../../../assets/images/system_icon.svg';
import WaveIcon from '../../../assets/images/wave_square_icon.svg';

const seatAlocationView = (props)=>{
    let seatIcon = [];
    const imageComponent = <Col xs={1}><img src={SeatIcon} /></Col>
    for( let i=0; i<8; i++){
        seatIcon.push(imageComponent)
    }

    return <Row className="seat">
        <Col>
            <Row>
                <Col className="seat__title">
                    Seat Allocation
                </Col>
            </Row>
            <div className="seat__seatrow">
                <Row>
                    <Col xs={2}><img src={SystemIcom} className="seat__system" /></Col>
                    {seatIcon}
                    <Col xs={2} />

                    <Col xs={2} />
                    <Col xs={8}><hr className="seat__hr" /></Col>
                    <Col xs={2} />

                    <Col xs={2} />
                    {seatIcon}
                </Row>

                <Row className="seat__textrow">
                    <Col xs={1}><img src={WaveIcon} /></Col>
                    <Col sx={10} className="seat__title seat__title--text">Unimoni Project</Col>
                    <Col xs={1}><img src={WaveIcon} /></Col>
                </Row>

                <Row>
                    <Col xs={2}><img src={SystemIcom} className="seat__system" /></Col>
                    {seatIcon}
                    <Col xs={2} />

                    <Col xs={2} />
                    <Col xs={8}><hr className="seat__hr" /></Col>
                    <Col xs={2} />

                    <Col xs={2} />
                    {seatIcon}
                </Row>
            </div>

            <Row align="right" className="seat__btnrow--btnallocation">
                <Col xs={11}>
                    <Button name="Done" className="seat__btn" />
                </Col>
            </Row>
        </Col>
    </Row>
}

export default seatAlocationView;