/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';

// import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { Layout, Menu, Icon, AutoComplete, Input } from 'antd';
import { Link } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import PortfolioPage from 'containers/PortfolioPage/Loadable';
import MediaPage from 'containers/MediaPage/Loadable';
import ContactPage from 'containers/ContactPage/Loadable';
// import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import './style.css';

const { SubMenu } = Menu;
// const { Header, Sider, Content } = Layout;

// const AppWrapper = styled.div`
//   max-width: 100%;
//   // max-width: calc(768px + 16px * 2);
//   margin: 0 auto;
//   display: flex;
//   min-height: 100%;
//   // padding: 0 16px;
//   flex-direction: column;
// `;
// const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;

export default class App extends React.Component {
  state = {
    collapsed: true,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const Option = AutoComplete.Option;
    const OptGroup = AutoComplete.OptGroup;
    const dataSource = [
      {
        title: 'Projects',
        children: [
          {
            title: 'bjj.co.kr',
            count: 10000,
          },
          {
            title: 'photospellgifts.com',
            count: 10600,
          },
        ],
      },
      {
        title: 'Media',
        children: [
          {
            title: 'Instagram',
            count: 60100,
          },
          {
            title: 'YouTube',
            count: 30010,
          },
        ],
      },
      {
        title: 'Consulting',
        children: [
          {
            title: 'Programming, Tech Seminar',
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
            href="https://www.google.com/search?q=leeart.co"
            target="_blank"
            rel="noopener noreferrer"
          >
            link
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
              <span className="certain-search-item-count">
                {opt.count} 人 关注
              </span>
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
    return (
      <Layout>
        <Helmet
          titleTemplate="LeeArt Web, App Development - %s"
          defaultTitle="LeeArt Web, App Development"
        >
          <meta
            name="description"
            content="React, React Native, Machine Learning, Wordpress for Web, Mobile, Ecommerce, SEO"
          />

          <meta
            property="og:image"
            content="https://res.cloudinary.com/seunghunlee/image/upload/v1514172269/Web-Development-1920-1280-7_orpskh.jpg"
          />
          <meta
            property="og:title"
            content="LeeArt Web, App Development. React, React Native, Machine Learning"
          />
          <meta property="og:url" content="http://www.leeart.co" />
          <meta property="og:site_name" content="LeeArt" />
          <meta property="og:type" content="website" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@seunghunSunmoon" />
          <meta
            name="twitter:title"
            content="LeeArt Web, App Development. React, React Native, Machine Learning"
          />
          <meta
            name="twitter:description"
            content="React, React Native, Machine Learning, Wordpress for Web, Mobile, Ecommerce, SEO"
          />
          <meta
            name="twitter:image"
            content="https://res.cloudinary.com/seunghunlee/image/upload/v1514172269/Web-Development-1920-1280-7_orpskh.jpg"
          />

          <base target="_blank" href="http://leeart.co" />

          <link rel="canonical" href="http://leeart.co" />
          <link
            rel="apple-touch-icon"
            href="https://res.cloudinary.com/seunghunlee/image/upload/v1515485736/safari-pinned-tab2_xdrpuz.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="https://res.cloudinary.com/seunghunlee/image/upload/v1515485736/safari-pinned-tab2_xdrpuz.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="https://res.cloudinary.com/seunghunlee/image/upload/v1515485736/safari-pinned-tab2_xdrpuz.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="https://res.cloudinary.com/seunghunlee/image/upload/v1515485736/safari-pinned-tab2_xdrpuz.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="167x167"
            href="https://res.cloudinary.com/seunghunlee/image/upload/v1515485736/safari-pinned-tab2_xdrpuz.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="https://res.cloudinary.com/seunghunlee/image/upload/v1515485736/safari-pinned-tab2_xdrpuz.png"
          />

          <link
            rel="icon"
            href="https://res.cloudinary.com/seunghunlee/image/upload/v1515485736/safari-pinned-tab2_xdrpuz.png"
          />
        </Helmet>
        <Header
          toggle={this.toggle}
          collapsed={this.state.collapsed}
          className="header"
        />
        <Layout>
          <Layout.Sider
            breakpoint="sm"
            collapsedWidth="0"
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
            defaultCollapsed
            trigger={null}
            style={{ background: '#fff' }}
            collapsible
            collapsed={this.state.collapsed}
          >
            <Menu theme="light" mode="inline" defaultSelectedKeys={['home']}>
              <Menu.Item key="logo">
                <div className="logo" />
              </Menu.Item>
              <Menu.Item key="search">
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
              </Menu.Item>
              <Menu.Item key="home">
                <Link to="/">Home</Link>
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
                <Menu.Item key="4-2">
                  <Link to="/media">Youtube</Link>
                </Menu.Item>
              </Menu.SubMenu>
              <Menu.Item key="contact">
                <Link to="/contact">contact</Link>
              </Menu.Item>
              <Menu.Item key="trigger" style={{ maxHeight: '59px' }}>
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
                />
              </Menu.Item>
            </Menu>
          </Layout.Sider>
          <Layout>
            <Layout.Content className="app-layout-content">
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/portfolio" component={PortfolioPage} />
                <Route path="/media" component={MediaPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="" component={NotFoundPage} />
              </Switch>
            </Layout.Content>
          </Layout>
        </Layout>
        <Footer />
      </Layout>
    );
  }
}
