// import React from 'react';
// import PropTypes from 'prop-types';
// // import { Jumbotron, Button } from 'reactstrap';
//
// // import LinkList from '../../components/LinkList';
// import {
//   Header as StyledHeader,
//   Img,
//   Jumbotron as StyledJumbotron,
//   JumbotronHeader,
//   JumbotronText
// } from './styles';
// import connect from './store';
// // https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css
//
// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   componentDidMount() {
//     const installBootstrap = () => {
//       const elem = document.createElement('link');
//       elem.rel = 'stylesheet';
//       elem.href =
//         '';
//       elem.async = true;
//       elem.defer = true;
//       document.body.insertBefore(elem, document.body.firstChild);
//     };
//     installBootstrap();
//   }
//   render() {
//     return (
//       <div>
//         section about
//       </div>
//     );
//   }
// }
//
// Header.defaultProps = {
//   authenticated: false
// };
//
// Header.propTypes = {
//   pathname: PropTypes.string.isRequired,
//   authenticated: PropTypes.bool,
//   actions: PropTypes.shape({
//     logout: PropTypes.func.isRequired
//   }).isRequired
// };
//
// export default connect(Header);
