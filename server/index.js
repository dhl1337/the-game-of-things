import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
import bodyParser from 'body-parser';
import massive from 'massive';
import cors from 'cors';

const connectionString = "postgress://localhost/gameofthings";

/* eslint-disable no-console */

const massiveServer = massive.connectSync({
  connectionString,
  scripts: "server/db"
});

const port = 3000;
const app = module.exports = express();
const compiler = webpack(config);

app.use(bodyParser.json());

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.set('db', massiveServer);

// User Endpoints
require('./user/user.route')(app);

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
