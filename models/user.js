const mongoose = require('mongoose');
const validator = require('validator');

const _ = require('lodash');
const Schema = mongoose.Schema;

let UserSchema = new mongoose.Schema({
  username: {
    type: String
  },
  nickname: {
    type: String
  },
  poos: [{
    type: Schema.Types.ObjectId,
    ref: 'poo'
  }]
});

UserSchema.pre('remove', function(next) {
  const Poos = mongoose.model('poo');

  Poos.remove({ _id: {$in : this.poos}})
    .then(() => next());
});

UserSchema.virtual('pooCount').get(function() {
  return this.poos.length;
});

let User = mongoose.model('user', UserSchema);

module.exports = {
  User
};
