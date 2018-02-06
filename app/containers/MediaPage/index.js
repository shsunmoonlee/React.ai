/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  Button,
  Icon,
  Input,
  AutoComplete,
  Row,
  Col,
  Card,
  Avatar,
} from 'antd';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
// import H2 from 'components/H2';
import Jumbotron from 'components/Jumbotron';
import SpeechChatBot from 'components/SpeechChatBot';
// import PhotoGallery from 'components/PhotoGallery';
// import ReposList from 'components/ReposList';
// import AtPrefix from './AtPrefix';
// import CenteredSection from './CenteredSection';
// import Form from './Form';
// import Input from './Input';
// import Section from './Section';
// import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import './style.css';
// import { Layout, Menu, Breadcrumb, Icon } from 'antd';
// const { SubMenu } = Menu;
// const { Header, Content, Sider } = Layout;
// import 'antd/lib/button/style';
const Option = AutoComplete.Option;
const OptGroup = AutoComplete.OptGroup;
const dataSource = [
  {
    title: '话题',
    children: [
      {
        title: 'AntDesign',
        count: 10000,
      },
      {
        title: 'AntDesign UI',
        count: 10600,
      },
    ],
  },
  {
    title: '问题',
    children: [
      {
        title: 'AntDesign UI 有多好',
        count: 60100,
      },
      {
        title: 'AntDesign 是啥',
        count: 30010,
      },
    ],
  },
  {
    title: '文章',
    children: [
      {
        title: 'AntDesign 是一个设计语言',
        count: 100000,
      },
    ],
  },
];
function renderTitle(title) {
  return (
    <span>
      {title}
      <a
        style={{ float: 'right' }}
        href="https://www.google.com/search?q=antd"
        target="_blank"
        rel="noopener noreferrer"
      >
        更多
      </a>
    </span>
  );
}
const options = dataSource
  .map(group => (
    <OptGroup key={group.title} label={renderTitle(group.title)}>
      {group.children.map(opt => (
        <Option key={opt.title} value={opt.title}>
          {opt.title}
          <span className="certain-search-item-count">{opt.count} 人 关注</span>
        </Option>
      ))}
    </OptGroup>
  ))
  .concat([
    <Option disabled key="all" className="show-all">
      <a
        href="https://www.google.com/search?q=antd"
        target="_blank"
        rel="noopener noreferrer"
      >
        查看所有结果
      </a>
    </Option>,
  ]);
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
    <div className="ant-card-meta-description">
      <h3>
        FullStack Web/App Development Service - React, React Native, Machine
        Learning{' '}
      </h3>
      <p style={{ fontSize: '1.2em', fontFamily: 'Roboto, sans-serif' }}>
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
      <p style={{ fontSize: '1.2em', fontFamily: 'Roboto, sans-serif' }}>
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

export class HomePage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  state = {
    key: 'tab1',
    noTitleKey: 'article',
  };
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }
  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };
  render() {
    // const { loading, error, repos } = this.props;
    // const reposListProps = {
    //   loading,
    //   error,
    //   repos,
    // };

    return (
      <div>
        <Helmet />
        <div className="section-introduction">
          {/*
            <CenteredSection>
              <H2>
                <FormattedMessage {...messages.startProjectHeader} />
              </H2>
              <p>
                <FormattedMessage {...messages.startProjectMessage} />
              </p>
            </CenteredSection>
          */}
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
          <div className="section-portfolio">
            <h1>Projects</h1>
            <br />
            <br />
            <Row gutter={8}>
              <Col span={6}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt="example"
                      src="https://res.cloudinary.com/seunghunlee/image/upload/v1514197260/Screen_Shot_2017-11-21_at_11.41.15_AM_d7bspt.png"
                    />
                  }
                  onClick={() =>
                    window.open(
                      'https://www.instagram.com/seunghun.sunmoon.lee/',
                      '_blank'
                    )
                  }
                >
                  <Card.Meta
                    title="React Redux Firebase Cloud Functions photo selling platform"
                    description="www.photospellgifts.com"
                  />
                </Card>
              </Col>
              <Col span={6}>
                <Card title="Customer Service Agent AI Robot Chatbot">
                  <SpeechChatBot />
                  <Card.Meta
                    title="Previous Portfolio Website"
                    description="www.seunghun-lee.com"
                  />
                </Card>
              </Col>
              <Col span={6}>
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
                    title="Europe Street beat"
                    description="www.instagram.com"
                  />
                </Card>
              </Col>
              <Col span={6}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt="example"
                      src="https://res.cloudinary.com/seunghunlee/image/upload/v1514359321/Screen_Shot_2017-12-27_at_4.21.22_PM_hhxfba.png"
                    />
                  }
                >
                  <Card.Meta
                    title="Wordpress Ecommerce CMS for Small Business"
                    description="www.bjj.co.kr"
                  />
                </Card>
              </Col>
            </Row>
            <Row gutter={8}>
              <Col span={6}>
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
                    title="Previous Portfolio Website"
                    description="www.seunghun-lee.com"
                  />
                </Card>
              </Col>
              <Col span={6}>
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
                    title="React Redux Firebase Cloud Functions photo selling platform"
                    description="www.photospellgifts.com"
                  />
                </Card>
              </Col>
              <Col span={6}>
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
                    description="Design heavy project"
                  />
                </Card>
              </Col>
              <Col span={6}>
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
        </div>
        <Jumbotron />
        <Row gutter={16} type="flex" justify="space-around" align="middle">
          <Col className="gutter-row" span={6}>
            <div className="gutter-box">col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="gutter-box">col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="gutter-box">col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="gutter-box">
              <div
                className="certain-category-search-wrapper"
                style={{ width: 250 }}
              >
                <AutoComplete
                  className="certain-category-search"
                  dropdownClassName="certain-category-search-dropdown"
                  dropdownMatchSelectWidth={false}
                  dropdownStyle={{ width: 300 }}
                  size="large"
                  style={{ width: '100%' }}
                  dataSource={options}
                  placeholder="input here"
                  optionLabelProp="value"
                >
                  <Input
                    suffix={
                      <Icon type="search" className="certain-category-icon" />
                    }
                  />
                </AutoComplete>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

HomePage.propTypes = {
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(withReducer, withSaga, withConnect)(HomePage);
