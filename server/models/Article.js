const mongoose = require('mongoose');
const {Schema} = mongoose;

const ArticleSchema = new Schema({
  title: String,
  body: String,
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

const Article = mongoose.model('Article', ArticleSchema);
module.exports = Article;