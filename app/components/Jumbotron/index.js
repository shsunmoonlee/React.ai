import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'antd';
import PhotoGallery from 'components/PhotoGallery';

// import { Jumbotron, Button } from 'reactstrap';

// import LinkList from '../../components/LinkList';
import {
  Jumbotron as StyledJumbotron,
  JumbotronHeader,
  JumbotronText,
} from './styles';
import './style.css';

// import connect from './store';
// https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css

class Jumbotron extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const installBootstrap = () => {
      const elem = document.createElement('link');
      elem.rel = 'stylesheet';
      elem.href =
        'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css';
      elem.async = true;
      elem.defer = true;
      document.body.insertBefore(elem, document.body.firstChild);
    };
    installBootstrap();
  }
  render() {
    return (
      <div>
        <Carousel autoplay>
          <div
            style={{
              backgroundImage:
                'url(https://firebasestorage.googleapis.com/v0/b/next-js-react-wordpress.appspot.com/o/images%2FWeb-Development-1920-1280-6.jpeg?alt=media&token=fcd02e5d-072b-41bb-b007-0b3108a9b927)',
            }}
          >
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <img
              alt="example"
              src="https://res.cloudinary.com/seunghunlee/image/upload/v1514172265/Screen_Shot_2017-09-11_at_10.31.05_PM_zpl2kg.png"
            />
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Carousel>
        <StyledJumbotron
          style={{
            backgroundImage:
              'url(https://firebasestorage.googleapis.com/v0/b/next-js-react-wordpress.appspot.com/o/images%2FWeb-Development-1920-1280-6.jpeg?alt=media&token=fcd02e5d-072b-41bb-b007-0b3108a9b927)',
          }}
        >
          <JumbotronHeader>Turn your business into Art</JumbotronHeader>
          <JumbotronText>React, React Native, Machine Learning</JumbotronText>
        </StyledJumbotron>
      </div>
    );
  }
}

Jumbotron.defaultProps = {
  authenticated: false,
};

Jumbotron.propTypes = {
  authenticated: PropTypes.bool,
};

export default Jumbotron;
