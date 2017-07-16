let mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PooSchema = new Schema('poo', {
    size: {
        type: Number
    },
    smell: {
        type: Number
    },
    dateAndTime: {
        type: Date,
        default: new Date()
    },
    _creator: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
});

let Poo = mongoose.model('poo', PooSchema);

module.exports = {Poo};
