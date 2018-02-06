// import React from 'react';
// import PropTypes from 'prop-types';
// // import { Jumbotron, Button } from 'reactstrap';
// import Lightbox from 'react-images';
// import ImageGallery from 'react-image-gallery';
// import 'react-image-gallery/styles/css/image-gallery.css';
//
// // import 'node_modules/react-image-gallery/styles/css/image-gallery.css';
// // import LinkList from '../../components/LinkList';
// // import {
// //   Header as StyledHeader,
// //   Img,
// //   Jumbotron as StyledJumbotron,
// //   JumbotronHeader,
// //   JumbotronText
// // } from './styles';
// // import connect from './store';
// // https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css
//
//
//         // <Lightbox
//         //   images={[
//         //     { src: 'https://res.cloudinary.com/seunghunlee/image/upload/v1514359321/Screen_Shot_2017-12-27_at_4.21.22_PM_hhxfba.png', thumbnail: 'https://res.cloudinary.com/seunghunlee/image/upload/v1514359321/Screen_Shot_2017-12-27_at_4.21.22_PM_hhxfba.png' },
//         //     { src: 'https://res.cloudinary.com/seunghunlee/image/upload/v1514197260/Screen_Shot_2017-11-21_at_11.41.15_AM_d7bspt.png' },
//         //     { src: 'https://res.cloudinary.com/seunghunlee/image/upload/v1514172263/Screen_Shot_2017-09-11_at_10.17.43_PM_mtmhmw.png' },
//         //     { src: 'https://lorempixel.com/1000/600/nature/3/' },
//         //     { src: 'https://lorempixel.com/1000/600/nature/3/' },
//         //     { src: 'https://lorempixel.com/1000/600/nature/3/' },
//         //     { src: 'https://lorempixel.com/1000/600/nature/3/' }
//         //   ]}
//         // />
//
// class PhotoGallery extends React.Component {
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
//     // const images = [
//     //   {
//     //     original: 'https://res.cloudinary.com/seunghunlee/image/upload/v1514359321/Screen_Shot_2017-12-27_at_4.21.22_PM_hhxfba.png',
//     //     thumbnail: 'https://res.cloudinary.com/seunghunlee/image/upload/v1514359321/Screen_Shot_2017-12-27_at_4.21.22_PM_hhxfba.png',
//     //   },
//     //   {
//     //     original: 'https://res.cloudinary.com/seunghunlee/image/upload/v1514197260/Screen_Shot_2017-11-21_at_11.41.15_AM_d7bspt.png',
//     //     thumbnail: 'https://res.cloudinary.com/seunghunlee/image/upload/v1514197260/Screen_Shot_2017-11-21_at_11.41.15_AM_d7bspt.png',
//     //   },
//     //   {
//     //     original: 'https://res.cloudinary.com/seunghunlee/image/upload/v1514172263/Screen_Shot_2017-09-11_at_10.17.43_PM_mtmhmw.png',
//     //     thumbnail: 'https://res.cloudinary.com/seunghunlee/image/upload/v1514172263/Screen_Shot_2017-09-11_at_10.17.43_PM_mtmhmw.png',
//     //   },
//     // ];
//     return (
//       <div>
//         <ImageGallery items={this.images} />
//       </div>
//     );
//   }
// }
//
// PhotoGallery.defaultProps = {
//   authenticated: false,
// };
//
// PhotoGallery.propTypes = {
//   pathname: PropTypes.string.isRequired,
//   authenticated: PropTypes.bool,
//   actions: PropTypes.shape({
//     logout: PropTypes.func.isRequired,
//   }).isRequired,
// };
//
// export default PhotoGallery;
