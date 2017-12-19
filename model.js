
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useMongoClient: true });
mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;


var TaskSchema = new Schema({
    timestamp: {
        type: Date,
        required: true,
        default: Date.now
    },
    title: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        default: "<No description>"
    },
    streetAddress: {
        type: String,
        required: true
    },
    lat: {
        type: Number,
        required: true
    },
    lng: {
        type: Number,
        required: true
    },
    author: {
        type: String,
        required: false,
        default: "Annoumousy"
    },
    stars: {
        type: Number,
        required: true
    },
    duplicate: {
        type: String,
        required: false,
        default: ''
    },
    reasons: {
        type: String,
        required: false,
        default: ''
    },
    JSON: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Tasks', TaskSchema);