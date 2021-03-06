const userCtrl = require('./userCtrl');
const passport = require( 'passport' );

module.exports = app => {

app.get( `/api/user/:id`, userCtrl.getUser );
app.get( '/api/users/email/:email', userCtrl.getUserByEmail );
app.get( `/api/user`, userCtrl.getAuthUser );
app.post( `/api/user`, userCtrl.createUser );

// Authentication
app.get( '/callback', passport.authenticate( 'auth0', { failureRedirect: '/' } ), userCtrl.getAuth );
app.get('/api/logout', userCtrl.logout );
app.get( '/api/lock', userCtrl.openLock );

// Story Statistics
app.post( '/api/userStory/:id', userCtrl.getStats );
app.post( '/api/shortUrl', userCtrl.getShortUrl );


};
