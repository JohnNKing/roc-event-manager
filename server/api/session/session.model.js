'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var SessionSchema = new mongoose.Schema({
  speaker: String,
  title: String,
  abstract: String,
  bio: String
});

export default mongoose.model('EventSession', SessionSchema);
