import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card } from 'antd';
import SpeechChatBot from 'components/SpeechChatBot';
// import PhotoGallery from "components/PhotoGallery";

// import { Portfolio, Button } from 'reactstrap';

// import LinkList from '../../components/LinkList';

import './style.css';

// import connect from './store';
// https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    // const installBootstrap = () => {
    //   const elem = document.createElement("link");
    //   elem.rel = "stylesheet";
    //   elem.href =
    //     "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css";
    //   elem.async = true;
    //   elem.defer = true;
    //   document.body.insertBefore(elem, document.body.firstChild);
    // };
    // installBootstrap();
  }
  render() {
    return (
      <div className="section-portfolio">
        <h1>Projects</h1>
        <br />
        <Row gutter={8}>
          <Col xs={{ span: 24, offset: 0 }} lg={{ span: 6, offset: 0 }}>
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://res.cloudinary.com/seunghunlee/image/upload/v1514197260/Screen_Shot_2017-11-21_at_11.41.15_AM_d7bspt.png"
                />
              }
              onClick={() =>
                window.open('https://www.photospellgifts.com', '_blank')
              }
            >
              <Card.Meta
                title="React Redux Firebase Cloud Functions photo selling platform"
                description="www.photospellgifts.com"
              />
            </Card>
          </Col>
          <Col xs={{ span: 24, offset: 0 }} lg={{ span: 6, offset: 0 }}>
            <Card>
              <SpeechChatBot />
              <Card.Meta
                title="Online Store Service Agent AI Chatbot(Robot)"
                description="https://github.com/SeunghunSunmoonLee/React.ai"
              />
            </Card>
          </Col>
          <Col xs={{ span: 24, offset: 0 }} lg={{ span: 6, offset: 0 }}>
            <Card>
              <iframe
                width="auto"
                height="500px"
                src="https://console.dialogflow.com/api-client/demo/embedded/e18ff2d1-ac24-4382-b18d-f5399ca701f1"
              />
              <Card.Meta
                title="Online Store Service Agent AI Chatbot(Robot)"
                description="https://github.com/SeunghunSunmoonLee/React.ai"
              />
            </Card>
          </Col>
          <Col xs={{ span: 24, offset: 0 }} lg={{ span: 6, offset: 0 }}>
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://res.cloudinary.com/seunghunlee/image/upload/v1514359321/Screen_Shot_2017-12-27_at_4.21.22_PM_hhxfba.png"
                />
              }
              onClick={() => window.open('https://bjj.co.kr', '_blank')}
            >
              <Card.Meta
                title="Wordpress Ecommerce CMS for Small Business"
                description="www.bjj.co.kr"
              />
            </Card>
          </Col>
        </Row>
        <br />
        <Row gutter={8}>
          <Col xs={{ span: 24, offset: 0 }} lg={{ span: 6, offset: 0 }}>
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://res.cloudinary.com/seunghunlee/image/upload/v1514197262/Screen_Shot_2017-11-25_at_9.03.20_PM_ymkoc4.png"
                />
              }
            >
              <Card.Meta
                title="Grocery Delivery App React Native"
                description="In Progress"
              />
            </Card>
          </Col>
          <Col xs={{ span: 24, offset: 0 }} lg={{ span: 6, offset: 0 }}>
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://res.cloudinary.com/seunghunlee/image/upload/v1514172263/Screen_Shot_2017-09-11_at_10.17.43_PM_mtmhmw.png"
                />
              }
            >
              <Card.Meta
                title="React E-commerce JiuJitsu Store"
                description="In Progress"
              />
            </Card>
          </Col>
          <Col xs={{ span: 24, offset: 0 }} lg={{ span: 6, offset: 0 }}>
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://res.cloudinary.com/seunghunlee/image/upload/v1514196942/Screen_Shot_2017-08-16_at_6.06.01_PM_hu4fzo.png"
                />
              }
            >
              <Card.Meta
                title="Keystone.js CMS Custom Design Website "
                description="E-commerce Business CMS"
              />
            </Card>
          </Col>
          <Col xs={{ span: 24, offset: 0 }} lg={{ span: 6, offset: 0 }}>
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://res.cloudinary.com/seunghunlee/image/upload/v1514172265/Screen_Shot_2017-09-11_at_10.31.05_PM_zpl2kg.png"
                />
              }
            >
              <Card.Meta
                title="Previous Portfolio Website"
                description="www.seunghun-lee.com"
              />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

Portfolio.defaultProps = {
  authenticated: false,
};

Portfolio.propTypes = {
  authenticated: PropTypes.bool,
};

export default Portfolio;
