import {
  signup,
  signin
} from './user.controller';
const passportService = require('../services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = (app) => {
  app.post('/api/signup', signup);
  app.post('/api/signin', requireSignin, signin);
  app.get('/api/stuff', requireAuth, function (req, res) {
    res.send({secret: "shhhhh"});
  });
};
