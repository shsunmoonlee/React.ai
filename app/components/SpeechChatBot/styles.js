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
  padding-top: 18rem;
  padding-bottom: 18rem;
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
  font-size: 60px;
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
export const ChatbotButton = styled.button`
  display: block;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 200px;
  height: 200px;
  border: 0;
  border-radius: 50%;
  padding: 0.7em 1em;
  margin: 4em auto 3em;
  text-align: center;
  color: #fff;
  background: linear-gradient(180deg, #39c2c9 0%, #3fc8c9 80%, #3fc8c9 100%);
  box-shadow: 2px 5px 30px rgba(63, 200, 201, 0.4);

  will-change: transform, filter;
  transition: all 0.3s ease-out;
  & .fa {
    font-size: 130px;
    line-height: 200px;
    margin: 0;
    text-shadow: 1px 2px 2px #2a8b90;
  }
  &:hover {
    transform: scale(0.92);
  }
  &:active {
    filter: brightness(0.8);
  }
  &:focus {
    outline: 0;
  }
  .fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: 1.3em;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-left: 10px;
  }
  .fa-github::before {
    content: '\f09b';
  }
`;
