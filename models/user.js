const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const _ = require('lodash');
const Schema = mongoose.Schema;

let UserSchema = new mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  password: {type: String, required: true},
  email: {type: String, required: true, unique: true},

  poos: [{
    type: Schema.Types.ObjectId,
    ref: 'poo'
  }],
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }]
});

UserSchema.methods.toJSON = function () {
  let user = this;
  let userObject = user.toObject();

  return _.pick(userObject, ['_id', 'email']);

};

UserSchema.pre('remove', function(next) {
  const Poos = mongoose.model('poo');

  Poos.remove({ _id: {$in : this.poos}})
    .then(() => next());
});

UserSchema.virtual('pooCount').get(function() {
  return this.poos.length;
});

UserSchema.methods.generateAuthTokens = function () {
  let user = this;
  let access = 'auth';
  let token = jwt.sign(
    {_id: user._id.toHexString(), access},
    process.env.JWT_SECRET);
  user.tokens.push({
    access,
    token
  });
  return user.save().then(() => {
    return token;
  });
};

UserSchema.methods.removeToken = function (token) {
  let user = this;

  return user.update({
    $pull: {
      tokens: {token}
    }
  });
};

UserSchema.statics.findByToken = function (token) {
  let User = this;
  let decoded;

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (e) {
    return Promise.reject();
  }

  return User.findOne({
    _id: decoded._id,
    'tokens.token': token,
    'tokens.access': 'auth'
  });
};

UserSchema.statics.findByCredentials = function (email, password) {
  let User = this;
  return User.findOne({email})
    .then((user) => {
      if (!user) {

        return Promise.reject();
      }

      return new Promise((resolve, reject) => {
        bcrypt.compare(password, user.password, (err, res) => {
          console.log(res);
          if (res) {
            resolve(user);
          } else {
            reject("Wrong Password or username");
          }
        })
      });
    });
};

UserSchema.pre('save', function (next) {
  let user = this;
  if (user.isModified('password')) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash;
        next();
      })
    });
  } else {
    next();
  }
});

let User = mongoose.model('user', UserSchema);

module.exports = {
  User
};
