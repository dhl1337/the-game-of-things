import bcrypt from 'bcrypt-nodejs';
const app = require('../index');
const jwt = require('jwt-simple');
import config from '../config';

const db = app.get('db');

function tokenForUser(personId) {
  const timestamp = new Date().getTime();
  return jwt.encode({sub: personId, iat: timestamp}, config.secret);
}

module.exports = {
  signup(req, res, next) {

    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
      return res.status(422).send({error: "You must provide email and password"});
    }

    db.get_existing_person([req.body.email], function (err, person) {
      if (err) {
        return next(err);
      }

      if (person.length == 1) {
        return res.status(422).send({error: 'Email is in use'});
      }

      bcrypt.genSalt(10, function (err, salt) {
        if (err) {
          return next(err);
        }

        bcrypt.hash(password, salt, null, function (err, hash) {
          if (err) {
            return next(err);
          }

          db.insert_new_person([email, hash], function (err, newPerson) {
            if (err) {
              return next(err);
            }

            res.send({token: tokenForUser(newPerson[0].id)});
          });
        });
      });
    });
  },

  signin(req, res) {
    res.send({token: tokenForUser(req.user)});
  }
};
