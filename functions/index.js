const functions = require('firebase-functions');
const app = require('express')();

const { getAllScreams, postOneScream } = require('./handlers/screams');
const { signup, login, uploadImage } = require('./handlers/users');
const FBAuth = require('./util/fbAuth');

// * `Scream` Routes
/**
 * Route to get `Screams`
 */
app.get('/screams', getAllScreams);

/**
 * Route to post one `Scream`
 */
app.post('/scream', FBAuth, postOneScream);

// * Users Routes
/**
 * Signup Route
 */
app.post('/signup', signup);

/**
 * Route to login
 */
app.post('/login', login);

app.post('/user/image', FBAuth, uploadImage);

exports.api = functions.https.onRequest(app);
