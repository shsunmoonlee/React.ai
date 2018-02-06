/* eslint consistent-return:0 */

const express = require('express');

var sslRedirect = require('heroku-ssl-redirect');

const logger = require('./logger');

const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok =
  (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel
    ? require('ngrok')
    : false;
const resolve = require('path').resolve;
const app = express();

// heroku enable ssl redirect
app.use(sslRedirect()); //heroku https

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

const dotenv = require('dotenv');

dotenv.config();

// Start your app.
const server = app.listen(port, host, err => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) {
        return logger.error(innerErr);
      }

      logger.appStarted(port, prettyHost, url);
    });
  } else {
    logger.appStarted(port, prettyHost);
  }
});

// SpeechChatBot
// SPEECH CHATBOT stuffs
// chatbot stuffs
// const socketServer = !isDev
//   ? require("https").Server(app)
//   : require("http").Server(app);
// const server = require("http").Server(app);
const io = require('socket.io')(server);
const apiai = require('apiai');

const { APIAI_TOKEN } = process.env;
const { APIAI_SESSION_ID } = process.env;

io.on('connection', socket => {
  console.log('io connected');
  console.log('a user connected');

  socket.emit('now', {
    message: 'zeit',
  });
  socket.on('chat message', text => {
    console.log(`Message: ${text}`);

    // Get a reply from API.ai

    const apiaiReq = apiaiapp.textRequest(text, {
      sessionId: APIAI_SESSION_ID,
    });

    apiaiReq.on('response', response => {
      const aiText = response.result.fulfillment.speech;
      console.log(`Bot reply: ${aiText}`);
      socket.emit('bot reply', aiText);
    });

    apiaiReq.on('error', error => {
      console.log(error);
    });

    apiaiReq.end();
  });
});

// io.on('connection', function(socket){
//   console.log('a user connected');
// });

const apiaiapp = apiai(APIAI_TOKEN);

// io.on("connection", socket => {
//   socket.on("chat message", text => {
//     console.log(`Message: ${text}`);
//
//     // Get a reply from API.ai
//
//     const apiaiReq = apiaiapp.textRequest(text, {
//       sessionId: APIAI_SESSION_ID
//     });
//
//     apiaiReq.on("response", response => {
//       const aiText = response.result.fulfillment.speech;
//       console.log(`Bot reply: ${aiText}`);
//       socket.emit("bot reply", aiText);
//     });
//
//     apiaiReq.on("error", error => {
//       console.log(error);
//     });
//
//     apiaiReq.end();
//   });
// });
