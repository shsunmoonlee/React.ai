import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Layout, Menu, Icon, AutoComplete, Input } from 'antd';
import { Link } from 'react-router-dom';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';
import './style.css';

const { SubMenu } = Menu;

export default class Footer extends React.Component {
  componentDidMount() {
    // const installGoogleAds = () => {
    //   const elem = document.createElement('script');
    //   // elem.rel = "stylesheet";
    //   elem.src = '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    //   elem.async = true;
    //   elem.defer = true;
    //   document.body.insertBefore(elem, document.body.firstChild);
    // };
    // installGoogleAds();
    // (adsbygoogle = window.adsbygoogle || []).push({});
    // (window.adsbygoogle = window.adsbygoogle || []).push({
    //   google_ad_client: "ca-pub-2151301166105861",
    //   enable_page_level_ads: true
    // });
  }
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
                {opt.count} Followers
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
            See All
          </a>
        </Option>,
      ]);
    return (
      <Layout.Footer className="footer" style={{ textAlign: 'center' }}>
        <Wrapper>
          <a href={`${window.location.protocol}//${window.location.host}`}>
            <div className="footer-logo" />
          </a>
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
          <Link to="/">Home</Link>
          <Link to="/portfolio">Portfolio</Link>

          <Link to="/media">Instagram</Link>
          <Link to="/media">Youtube</Link>
          <Link to="/contact">contact</Link>
        </Wrapper>
        <Wrapper>
          <section>
            <p>Business Registration Number(South Korea): 334-34-00418</p>
          </section>
          <section>
            <LocaleToggle />
          </section>
          <section>
            <FormattedMessage
              {...messages.authorMessage}
              values={{
                author: (
                  <A href="https://www.leeart.co">Seunghun Sunmoon Lee</A>
                ),
              }}
            />
          </section>
        </Wrapper>
        <Wrapper>
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-format="fluid"
            data-ad-layout-key="-8i+1w-dq+e9+ft"
            data-ad-client="ca-pub-2151301166105861"
            data-ad-slot="1728881543"
          />
        </Wrapper>
      </Layout.Footer>
    );
  }
}
