import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-106381386-1');
ReactGA.pageview(window.location.pathname + window.location.search);

// import A from './A';
// import Img from './Img';
// import NavBar from './NavBar';
// import HeaderLink from './HeaderLink';
// import Banner from './banner.jpg';
import messages from './messages';
// const { Header, Content, Footer } = Layout;
import './style.css';

// Header.propTypes = {
//   toggle: PropTypes.func.isRequired,
//   collapsed: PropTypes.bool.isRequired
// };

export default class Header extends React.PureComponent {
  componentDidMount() {
    const installGoogleAds = () => {
      const elem = document.createElement('script');
      // elem.rel = "stylesheet";
      elem.src = '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
      elem.async = true;
      elem.defer = true;
      document.body.insertBefore(elem, document.body.firstChild);
    };
    installGoogleAds();
    // (adsbygoogle = window.adsbygoogle || []).push({});
    (window.adsbygoogle = window.adsbygoogle || []).push({
      google_ad_client: 'ca-pub-2151301166105861',
      enable_page_level_ads: true,
    });
  }
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <Layout.Header className="header">
        <a href={`${window.location.protocol}//${window.location.host}`}>
          <div className="logo" />
        </a>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['home']}
          className="header-menu"
        >
          <Menu.Item key="home">
            <Link to="/">
              <FormattedMessage {...messages.home} />
            </Link>
          </Menu.Item>
          <Menu.Item key="portfolio">
            <Link to="/portfolio">Portfolio</Link>
          </Menu.Item>
          <Menu.SubMenu
            key="media"
            title={
              <span>
                <Icon type="heart-o" />Media
              </span>
            }
          >
            <Menu.Item key="4-1">
              <Link to="/media">Instagram</Link>
            </Menu.Item>
            <Menu.Item key="4-1">
              <Link to="/media">Youtube</Link>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="contact">
            <Link to="/contact">contact</Link>
          </Menu.Item>
          <Menu.Item key="3" style={{ maxHeight: '59px' }}>
            <Icon
              className="trigger"
              type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.props.toggle}
            />
          </Menu.Item>
        </Menu>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['home']}
          className="mobile-menu"
        >
          <Menu.Item key="3" style={{ maxHeight: '59px' }}>
            <Icon
              className="trigger"
              type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.props.toggle}
            />
          </Menu.Item>
        </Menu>
      </Layout.Header>
    );
  }
}
