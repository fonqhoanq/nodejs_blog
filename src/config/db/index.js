const mongoose = require('mongoose');
const db = require("../../app/models");
const Role = db.role;
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        Role.estimatedDocumentCount((err, count) => {
            if (!err && count === 0) {
              new Role({
                name: "user"
              }).save(err => {
                if (err) {
                  console.log("error", err);
                }
                console.log("added 'user' to roles collection");
              });
              new Role({
                name: "moderator"
              }).save(err => {
                if (err) {
                  console.log("error", err);
                }
                console.log("added 'moderator' to roles collection");
              });
              new Role({
                name: "admin"
              }).save(err => {
                if (err) {
                  console.log("error", err);
                }
                console.log("added 'admin' to roles collection");
              });
            }
          });
        console.log('success');

    } catch (error) {
        console.log(falier);
    }
}
module.exports = { connect };