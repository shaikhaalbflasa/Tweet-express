const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const reviewSchema = new Schema({
  content: String,
  rating: {type: Number, 
    min: 1, 
    max: 5,
    default: 5
  }
}, {
  timestamps: true
})



const TweetSchema = new Schema({
  
  name: String,
  description: String,
  reviews: [reviewSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Tweet', TweetSchema);