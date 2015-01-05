var mongoose = require('mongoose');

var userlistSchema = new mongoose.Schema({
  name: String,
  country: String,
  state: String,
  age: String,
  addr: {
        lat: {
            type: String,
            "default": '',
            trim: true
        },
        long: {
            type: String,
            "default": '',
            trim: true
        }
    }
});

mongoose.model('userlist', userlistSchema);