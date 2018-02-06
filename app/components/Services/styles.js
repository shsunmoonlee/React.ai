import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Header = styled.header`
  margin-bottom: 5px;
  padding: 10px;
  border-bottom: 2px solid #e94fc3;
`;

export const Img = styled.img`
  width: 100px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 15px;
`;

export const Jumbotron = styled.div`
  background-image: url(https://firebasestorage.googleapis.com/v0/b/next-js-react-wordpress.appspot.com/o/images%2FWeb-Development-1920-1280-6.jpeg?alt=media&token=fcd02e5d-072b-41bb-b007-0b3108a9b927);
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover !important;
  padding-top: 10rem;
  padding-bottom: 13rem;
  box-sizing: border-box;
  font-size: 66px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  max-height: 400px;
`;
export const Video = styled.div`
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    z-index: 1
    min-width: 100%
    min-height: 100%
    width: auto
    height: auto
    background: transparent
`;
export const JumbotronHeader = styled.div`
  max-width: 48rem;
  display: block;
  margin: 0 auto;
  text-align: center;
  @import url('https://fonts.googleapis.com/css?family=Abel');
  font-family: 'Abel', sans-serif;
  font-size: 66px;
  font-weight: 400;
  line-height: 1.5;
  color: white;
`;
export const JumbotronText = styled.div`
  max-width: 48rem;
  display: block;
  margin: 0 auto;
  text-align: center;
  @import url('https://fonts.googleapis.com/css?family=Abel');
  font-family: 'Abel', sans-serif;
  font-size: 0.5em;
  font-weight: 400;
  line-height: 1.5;
  color: white;
  z-index: 2
  position: relative
  background: rgba(0,0,0,0.4)
  top: 0
  bottom: 0
  left: 0
  right: 0
  margin-left: 330px
  margin-top: 0
  width: 320px
  padding: 0 10px
  box-sizing: border-box
  @media(max-width: 640px)
    width: auto
`;
