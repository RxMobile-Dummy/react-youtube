import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Categoriesbar from '../../components/categoriesBar/Categoriesbar'
import Video from '../../components/video/Video'
const HomeScreen = () => {
        return (
                <Container>
                        <Categoriesbar />
                        <Row>

                                {
                                        [...Array(20)].map(() => <Col lg={3} md={4}>
                                                <Video></Video>
                                        </Col>)}
                        </Row>


                </Container>
        )
}

export default HomeScreen