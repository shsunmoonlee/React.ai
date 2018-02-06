import io from 'socket.io-client';
import React from 'react';
// import annyang from 'annyang';
import { ChatbotButton } from './styles';

class SpeechChatBot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: '',
      start: false,
      stop: false,
      input: '...',
      ouput: '...',
    };
  }
  componentDidMount() {
    const installFontAwesome = () => {
      const elem = document.createElement('link');
      elem.rel = 'stylesheet';
      elem.href =
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
      elem.async = true;
      elem.defer = true;
      document.body.insertBefore(elem, document.body.firstChild);
    };
    installFontAwesome();

    // const installAnnyang = () => {
    //   const elem = document.createElement('script');
    //   elem.src = "https://cdnjs.cloudflare.com/ajax/libs/annyang/2.6.0/annyang.min.js";
    //   document.body.insertBefore(elem, document.body.firstChild);
    // };
    // installAnnyang();
    //
    // if (annyang) {
    //   // Let's define a command.
    //   var commands = {
    //     'hello': () => {window.alert("hello!")}
    //   };
    //
    //   // Add our commands to annyang
    //   annyang.addCommands(commands);
    //
    //   // Start listening.
    //   annyang.start();
    // }

    let DialogFlowReplyText = '';

    // window.location.protocol + '//' + window.location.hostname

    // const socket = io("http://localhost:8000");
    // const socket = io(
    //   `${window.location.protocol}//${window.location.hostname}:8000`
    // );
    // const socket = io(`${window.location.protocol}//localhost:8000`);
    const socket = io();
    socket.on('now', data => {
      this.setState({
        hello: data.message,
      });
    });
    // const outputYou = document.querySelector(".output-you");
    // const outputBot = document.querySelector(".output-bot");

    // if (!('webkitSpeechRecognition' in window)) {
    //   upgrade();
    // } else {
    //   var recognition = new webkitSpeechRecognition();
    //
    // }

    this.recognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition ||
      window.mozSpeechRecognition ||
      window.msSpeechRecognition)();
    this.recognition.lang = 'en-US';
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 1;

    // document.querySelector("button").addEventListener("click", () => {
    //   this.recognition.start();
    // });

    this.recognition.onstart = () => {
      // this.setState({start: true});
      console.log('Speech has been detected.');
    };

    this.recognition.onresult = (e) => {
      // this.setState({stop: true});
      // this.setState({start: false});

      console.log('Result has been detected.');

      const last = e.results.length - 1;
      const text = e.results[0][0].transcript;

      // outputYou.textContent = text;
      this.setState({ input: text });
      console.log(`Confidence: ${e.results[0][0].confidence}`);

      socket.emit('chat message', text);
    };
    this.recognition.onend = () => {
      this.recognition.stop();
    }
    // this.recognition.addEventListener('speechend', () => {
    //   this.recognition.stop();
    // });

    this.recognition.onerror = e => {
      // outputBot.textContent = `Error: ${e.error}`;
      this.setState({ output: e.error });
    };

    socket.on('bot reply', replyText => {
      this.synthVoice(replyText);
      this.DialogFlowReplyText = replyText;
      if (replyText === '') {
        // outputBot.textContent = "(No answer...)";
        this.setState({ output: '(No answer...)' });
      }
      // outputBot.textContent = replyText;
      this.setState({ output: replyText });
    });
    // synth voice
    this.synth = window.speechSynthesis;
    this.utterance = new SpeechSynthesisUtterance();
    this.voice = this.synth.getVoices()[48];
  }
  componentWillUnmount() {}

  synthVoice(text) {
    this.utterance.voice = this.voice;
    this.utterance.text = text;
    this.synth.speak(this.utterance);
  }
  //48 3 female
  // onStart = () => {
  //   this.setState({ start: true, stop: false });
  //   console.log('Speech has been detected.');
  // }
  // onEnd = () => {
  //   this.setState({ start: false, stop: false });
  // }
  //
  // onResult = ({ e, finalTranscript }) => {
  //   const result = finalTranscript
  //   const last = e.results.length - 1;
  //   const text = e.results[last][0].transcript;
  //
  //   outputYou.textContent = text;
  //   console.log(`Confidence: ${e.results[0][0].confidence}`);
  //
  //   socket.emit('chat message', text);
  //   this.setState({ start: false })
  // }
  // onError = (e) => {
  //   this.outputBot.textContent = `Error: ${e.error}`;
  // }

  render() {
    return (
      <section>
        <h3>Talk to Our Chatbot</h3>
        <p>Click the button and ask about shipping or return policy</p>

        <ChatbotButton
          onClick={() => {
            this.recognition.start();
          }}
        >
          <i className="fa fa-microphone" />
        </ChatbotButton>

        <div>
          <p>
            You said: <em className="output-you">{this.state.input}</em>
          </p>
          <p>
            Bot replied: <em className="output-bot">{this.state.output}</em>
          </p>
        </div>
      </section>
    );
  }
}

SpeechChatBot.propTypes = {
  // data: PropTypes.object.isRequired,
  // loadMorePosts: PropTypes.func.isRequired
};

export default SpeechChatBot;
