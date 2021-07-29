const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
//const ObjectId = Schema.ObjectId;

const User = new Schema({
    username: {type: String, required: true},
    email: {type: String, maxLength: 600},
    password: {type: String, maxLength: 255},
    roles: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Role"
        }
      ]
  });

  //add plugins
// mongoose.plugin(slug);
// Course.plugin(mongooseDelete,{
//   deletedAt: true,
//   overrideMethods: 'all',
// });

  module.exports = mongoose.model('Users', User);