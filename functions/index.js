const functions = require('firebase-functions');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, conf: { distDir: 'build' } });
const handle = app.getRequestHandler();

exports.next = functions.https.onRequest((req, res) => {
  const consoleMessage = `File:  ${req.originalUrl}`;
  console.log(consoleMessage); // log the page.js file that is being requested
  return app.prepare().then(() => handle(req, res));
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send('Hello from Firebase!');
// });
