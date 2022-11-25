const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  name: String,
  passwordHash: String,
  birthday: String,
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
    },
  ],
});

userSchema.set('toJson', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    // The password shouldn't be revealed
    delete returnedObject.passwordHash;
  },
});

const user = mongoose.model('User', userSchema);

module.exports = user;
