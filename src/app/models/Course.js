const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
//const ObjectId = Schema.ObjectId;

const Course = new Schema({
    name: {type: String, required: true},
    description: {type: String, maxLength: 600},
    img: {type: String, maxLength: 255},
    videoId: {type: String, required: true},
    level: {type: String, maxLength: 255},
    slug: {type: String, slug: 'name', unique: true},
  }, {
    timestamps: true,
  });

  //add plugins
mongoose.plugin(slug);
Course.plugin(mongooseDelete,{
  deletedAt: true,
  overrideMethods: 'all',
});

  module.exports = mongoose.model('Courses', Course);