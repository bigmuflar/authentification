var mongoose = require('mongoose');

var heroSchema = mongoose.Schema({
    name : {type : String, required : true},
    costume : {type : String, default : 'Might be naked'},
    powers : {type : Array, default : []},
    facialHair : {type : Boolean, default : false},
    backStory : {type : String, default : 'So mysterious... could be Bruce Valanche'}
    // sidekick : {}
});

module.exports = mongoose.model('Hero', heroSchema, 'heroes');
// db.heroes