import passport from 'passport';
import config from '../config';
import {Strategy, ExtractJwt} from 'passport-jwt';
import LocalStrategy from 'passport-local';
import bcrypt from 'bcrypt-nodejs';

const app = require('../index');

const db = app.get('db');

function comparePassword(personPassword, dbPassword, callback) {
  bcrypt.compare(personPassword, dbPassword, (err, isMatch) => {
    if (err) {
      return callback(err);
    }

    callback(null, isMatch);
  });
}

// Create local strategy
const localOptions = {usernameField: 'email'};
const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  // Verify this email and password, call done with the user
  // if it is the correct email and password
  // otherwise, call done with false

  db.get_existing_person([email], (err, person) => {
    if (err) {
      return done(err);
    }

    if (person.length == 0) {
      return done(null, false);
    }

    comparePassword(password, person[0].password, (err, isMatch) => {
      if (err) {
        return done(err);
      }

      if (!isMatch) {
        return done(null, false);
      }

      return done(null, person);
    });
  });
});

// Setup options for JWT Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};

// Create JWT strategy
const jwtLogin = new Strategy(jwtOptions, (payload, done) => {
  // See if the user ID in the payload exists in our database
  // If it does, call 'done' with that other
  // otherwise, call done without a user object

  db.find_person_by_id([payload.sub], (err, person) => {
    if (err) {
      return done(err, false);
    }

    if (person[0]) {
      done(null, person[0]);
    } else {
      done(null, false);
    }
  });
});

// Tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);
