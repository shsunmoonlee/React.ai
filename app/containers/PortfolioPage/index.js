/*
 * PortfolioPage
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
import Portfolio from 'components/Portfolio';
import Services from 'components/Services';
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

export class PortfolioPage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    // if (this.props.username && this.props.username.trim().length > 0) {
    //   this.props.onSubmitForm();
    // }
    // const installGoogleAds = () => {
    //   const elem = document.createElement("script");
    //   // elem.rel = "stylesheet";
    //   elem.src =
    //     "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    //   elem.async = true;
    //   elem.defer = true;
    //   document.body.insertBefore(elem, document.body.firstChild);
    // };
    // installGoogleAds();
    // (adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <div>
        <Helmet>
          {/*
      		<link rel="apple-touch-icon" sizes="180x180" href="/safari-pinned-tab3.png">
      		<link rel="icon" type="image/png" href="/safari-pinned-tab3.png" sizes="32x32">
      		<link rel="icon" type="image/png" href="/safari-pinned-tab3.png" sizes="16x16">
      		<link rel="manifest" href="/manifest.json">
      		<link rel="mask-icon" href="/safari-pinned-tab3.png" color="#ff4400">
      		<meta name="theme-color" content="#fff">

      		<meta property="og:type" content="business.business">
      		<meta property="og:title" content="LeeArt | Purpose driven Web development & design">
      		<meta property="og:url" content="/">
      		<meta property="og:image" content="/og-image.svg">

      		<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      		<script>
      		  (adsbygoogle = window.adsbygoogle || []).push({
      		    google_ad_client: "ca-pub-2151301166105861",
      		    enable_page_level_ads: true
      		  });
      		</script>
        */}
        </Helmet>
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
        <Services />
        <Portfolio />
      </div>
    );
  }
}

PortfolioPage.propTypes = {
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

export default compose(withReducer, withSaga, withConnect)(PortfolioPage);
