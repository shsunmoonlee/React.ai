// import io from 'socket.io-client';
// import React from 'react';
// import VoicePlayer from 'components/react-voice-components/VoicePlayer';
// import VoiceRecognition from 'components/react-voice-components/VoiceRecognition';
//
// // import { Link } from '../../routes';
// // import PostUpvoter from '../PostUpvoter';
// import { ChatbotButton } from './styles';
// // import connect from './store';
//
// class SpeechChatBot extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { start: false, stop: false };
//   }
//   componentDidMount() {
//     const installFontAwesome = () => {
//       const elem = document.createElement('link');
//       elem.rel = 'stylesheet';
//       elem.href =
//         'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
//       elem.async = true;
//       elem.defer = true;
//       document.body.insertBefore(elem, document.body.firstChild);
//     };
//     installFontAwesome();
//     let DialogFlowReplyText = '';
//
//     const socket = io('http://localhost:5000');
//     socket.on('now', data => {
//       this.setState({
//         hello: data.message
//       });
//     });
//     const outputYou = document.querySelector('.output-you');
//     const outputBot = document.querySelector('.output-bot');
//
//     // const SpeechRecognition =
//     //   window.SpeechRecognition || window.webkitSpeechRecognition;
//     // const recognition = new SpeechRecognition();
//     //
//     // recognition.lang = 'en-US';
//     // recognition.interimResults = false;
//     // recognition.maxAlternatives = 1;
//
//     // document.querySelector('button').addEventListener('click', () => {
//     //   recognition.start();
//     // });
//     //
//     // recognition.addEventListener('speechstart', () => {
//     //   console.log('Speech has been detected.');
//     // });
//     //
//     // recognition.addEventListener('result', e => {
//     //   console.log('Result has been detected.');
//     //
//     //   const last = e.results.length - 1;
//     //   const text = e.results[last][0].transcript;
//     //
//     //   outputYou.textContent = text;
//     //   console.log(`Confidence: ${e.results[0][0].confidence}`);
//     //
//     //   socket.emit('chat message', text);
//     // });
//     //
//     // recognition.addEventListener('speechend', () => {
//     //   recognition.stop();
//     // });
//     //
//     // recognition.addEventListener('error', e => {
//     //   outputBot.textContent = `Error: ${e.error}`;
//     // });
//     socket.on('bot reply', replyText => {
//       this.synthVoice(replyText);
//       this.DialogFlowReplyText = replyText;
//       if (replyText === '') {
//         outputBot.textContent = '(No answer...)';
//       }
//       outputBot.textContent = replyText;
//     });
//   }
//   componentWillUnmount() {}
//
//   synthVoice(text) {
//     const synth = window.speechSynthesis;
//     const utterance = new SpeechSynthesisUtterance();
//     utterance.text = text;
//     synth.speak(utterance);
//   }
//   onStart = () => {
//     this.setState({ start: true, stop: false });
//     console.log('Speech has been detected.');
//   }
//   onEnd = () => {
//     this.setState({ start: false, stop: false });
//   }
//
//   onResult = ({ e, finalTranscript }) => {
//     const result = finalTranscript
//     const last = e.results.length - 1;
//     const text = e.results[last][0].transcript;
//
//     outputYou.textContent = text;
//     console.log(`Confidence: ${e.results[0][0].confidence}`);
//
//     socket.emit('chat message', text);
//     this.setState({ start: false })
//   }
//   onError = (e) => {
//     this.outputBot.textContent = `Error: ${e.error}`;
//   }
//
//
//   render() {
//     return (
//       <section>
//         <h1>{this.state.hello}</h1>
//         <h1>Simple AI Bot</h1>
//         <h2>with Web Speech API</h2>
//
//         <ChatbotButton>
//           <i className="fa fa-microphone" />
//         </ChatbotButton>
//
//         <div>
//           <p>
//             You said: <em className="output-you">...</em>
//           </p>
//           <p>
//             Bot replied: <em className="output-bot">...</em>
//           </p>
//           <button onClick={() => this.setState({ start: true })}>start</button>
//           <button onClick={() => this.setState({ stop: true })}>stop</button>
//           {this.state.start && (
//             <VoiceRecognition
//               onStart={() => this.onStart()}
//               onResult={() => this.onResult()}
//               continuous={true}
//               lang="en-US"
//               stop={this.state.stop}
//             />
//           )}
//           <VoicePlayer
//             play
//             text={this.DialogFlowReplyText || 'Hi, Welcome To LeeArt!'}
//           />
//         </div>
//       </section>
//     );
//   }
// }
//
// SpeechChatBot.propTypes = {
//   // data: PropTypes.object.isRequired,
//   // loadMorePosts: PropTypes.func.isRequired
// };
//
// export default SpeechChatBot;
