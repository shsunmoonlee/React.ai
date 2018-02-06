import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card, Icon, Avatar, Button } from 'antd';
import ImageGallery from 'react-image-gallery';

// import SpeechChatBot from "components/SpeechChatBot";
// import PhotoGallery from "components/PhotoGallery";

// import { Services, Button } from 'reactstrap';

// import LinkList from '../../components/LinkList';

import './style.css';

// import connect from './store';
// https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css
const tabList = [
  {
    key: 'tab1',
    tab: 'programming',
  },
  {
    key: 'tab2',
    tab: 'music',
  },
];

const contentList = {
  tab1: (
    <div>
      <h3>
        FullStack Web/App Development Service - React, React Native, Machine
        Learning{' '}
      </h3>
      <p style={{ fontSize: '1.4em', fontFamily: 'Roboto, sans-serif' }}>
        LeeArt specialize in providing uniquely designed websites that best meet
        your business’ goals. Using our knowledge of up-to-date technologies.
        we’re able to create applications that fully fit your needs, be it
        e-commerce or food delivery. We pride ourselves in our ability to
        optimize our client’s ROI (Return on Investment) through an in-depth
        analysis of your business model and plans for growth. By focusing on
        innovative solutions, we alleviate the stress of technological
        improvement, allowing you to focus on your business while we handle
        developing your business for the modern era.
      </p>
      <h3>SEO, E-commerce, Wordpress, Design, Illustrations</h3>
      <p style={{ fontSize: '1.4em', fontFamily: 'Roboto, sans-serif' }}>
        Need more exposure to customers? LeeArt promises successful advertising
        with Search Engine Optimization. Need to get started with online store?
        LeeArt delivers the best value E-commerce web/app development service.
        Need Wordpress website? LeeArt combines Wordpress with React to make the
        difference. Need designs that works? LeeArt will communicate with you
        until we both are satisfied.
      </p>
    </div>
  ),
  tab2: (
    <div className="ant-card-meta-description">
      <h3>Music Related Web/Mobile App Development</h3>
      <p style={{ fontSize: '1.2em', fontFamily: 'Roboto, sans-serif' }}>
        LeeArt loves to work with Music related businesses.
      </p>
      <h3>Seunghun Lee&apos;s Music</h3>
      <p style={{ fontSize: '1.5em', fontFamily: 'Roboto, sans-serif' }}>
        <Button
          type="primary"
          onClick={() =>
            window.open(
              'https://www.instagram.com/seunghun.sunmoon.lee/',
              '_blank'
            )
          }
        >
          <Icon type="link" />Instagram
        </Button>
        <br />
        <br />
        <Button
          type="primary"
          onClick={() =>
            window.open(
              'https://www.youtube.com/channel/UCnlUnsWJZGmWgNCbh3W6VAw',
              '_blank'
            )
          }
        >
          <Icon type="link" />Youtube
        </Button>
      </p>
    </div>
  ),
};
class Services extends React.Component {
  state = {
    key: 'tab1',
    noTitleKey: 'article',
  };
  componentDidMount() {
    this._imageGallery.play();

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
  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };
  render() {
    return (
      <div>
        <Row
          style={{
            background:
              'linear-gradient(to right, rgba(255, 254, 155, 0.2), rgba(255, 254, 155, 0.6))',
          }}
        >
          <Col xs={{ span: 24, offset: 0 }} lg={{ span: 6, offset: 0 }}>
            <div className="jumbotron-left-text">
              <h2>Welcome To LeeArt Web Application Development Services</h2>
              <br />
              <Card.Meta
                avatar={
                  <Avatar src="https://res.cloudinary.com/seunghunlee/image/upload/v1514787494/jaehwan_park_otuz18.jpg" />
                }
                title="Software Developer at Naver.com"
                description="Lee is a man of possiblities. His passion towards computer programming inspires many people, including me. Jaehwan Park - Software Developer at Naver"
              />
              <br />
              <Card.Meta
                avatar={
                  <Avatar src="https://res.cloudinary.com/seunghunlee/image/upload/v1514795950/18056322_1535492686514889_5384877063413826421_o_lkcr0i.jpg" />
                }
                title="bjj.co.kr jiujitsu academy"
                description="Seunghun genuinely cared about our business and helped us getting more students by providing SEO, Web development, photography, social media marketing service. I would highly recommend him for any business. HeeSung Lee - bjj.co.kr jiujitsu academy"
              />
              <br />
              <Card.Meta
                avatar={
                  <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
                }
                title="photospellgifts.com programmer"
                description="Seunghun's pretty good at front end development. He solved graphic related project with react.js, firebase, express.js on his own. Kazi - photospellgifts.com programmer"
              />
            </div>
          </Col>
          <Col xs={{ span: 24, offset: 0 }} lg={{ span: 18, offset: 0 }}>
            <ImageGallery
              ref={i => (this._imageGallery = i)}
              items={[
                {
                  original:
                    'https://res.cloudinary.com/seunghunlee/image/upload/v1514359321/Screen_Shot_2017-12-27_at_4.21.22_PM_hhxfba.png',
                  thumbnail:
                    'https://res.cloudinary.com/seunghunlee/image/upload/v1514359321/Screen_Shot_2017-12-27_at_4.21.22_PM_hhxfba.png',
                },
                {
                  original:
                    'https://res.cloudinary.com/seunghunlee/image/upload/v1514197260/Screen_Shot_2017-11-21_at_11.41.15_AM_d7bspt.png',
                  thumbnail:
                    'https://res.cloudinary.com/seunghunlee/image/upload/v1514197260/Screen_Shot_2017-11-21_at_11.41.15_AM_d7bspt.png',
                },
                {
                  original:
                    'https://res.cloudinary.com/seunghunlee/image/upload/v1514172263/Screen_Shot_2017-09-11_at_10.17.43_PM_mtmhmw.png',
                  thumbnail:
                    'https://res.cloudinary.com/seunghunlee/image/upload/v1514172263/Screen_Shot_2017-09-11_at_10.17.43_PM_mtmhmw.png',
                },
              ]}
              autoplay={true}
            />
          </Col>
        </Row>
        <div className="section-introduction">
          <h1>What LeeArt Does</h1>
          <br />
          <Row gutter={8}>
            <Col xs={{ span: 24, offset: 0 }} lg={{ span: 6, offset: 0 }}>
              <Card
                style={{}}
                cover={
                  <img
                    alt="example"
                    src="https://res.cloudinary.com/seunghunlee/image/upload/v1514201553/1512875028854_mabxj2.jpg"
                  />
                }
                actions={[
                  <Icon
                    type="mail"
                    onClick={() =>
                      window.open('mailto:markandsh@gmail.com', '_blank')
                    }
                  />,
                  <Icon
                    type="github"
                    onClick={() =>
                      window.open(
                        'https://github.com/SeunghunSunmoonLee',
                        '_blank'
                      )
                    }
                  />,
                  <Icon
                    type="linkedin"
                    onClick={() =>
                      window.open(
                        'https://www.linkedin.com/in/seunghunsunmoonlee',
                        '_blank'
                      )
                    }
                  />,
                  <Icon type="skype" />,
                  <Icon
                    type="medium"
                    onClick={() =>
                      window.open(
                        'https://medium.com/@seunghunsunmoonlee',
                        '_blank'
                      )
                    }
                  />,
                ]}
              >
                <Card.Meta
                  avatar={
                    <Avatar src="https://res.cloudinary.com/seunghunlee/image/upload/v1514201553/1512875028854_mabxj2.jpg" />
                  }
                  title="Seunghun Sunmoon Lee"
                  description="www.leeart.co Freelance Full Stack JavaScript developer - React.js, React Native, Machine Learning B.S Computer Science, San Francisco State University, USA"
                />
              </Card>
            </Col>
            <Col xs={{ span: 24, offset: 0 }} lg={{ span: 18, offset: 0 }}>
              <Card
                style={{ width: '100%' }}
                title="Our Services"
                extra={<a href="/services">More</a>}
                tabList={tabList}
                onTabChange={key => {
                  this.onTabChange(key, 'key');
                }}
              >
                {contentList[this.state.key]}
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

Services.defaultProps = {
  authenticated: false,
};

Services.propTypes = {
  authenticated: PropTypes.bool,
};

export default Services;
