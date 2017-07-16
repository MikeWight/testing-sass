const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PooSchema = new Schema({
    size: {
        type: Number,
      required: true
    },
    smell: {
        type: Number,
      required: true
    },
    dateAndTime: {
        type: Date,
        default: new Date()
    },
    _creator: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
});

let Poo = mongoose.model('poo', PooSchema);

module.exports = {Poo};
