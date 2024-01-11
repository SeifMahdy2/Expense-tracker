const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  Name: String,
  email: String,
  password: String,
});

userSchema.index({_id:1},{unique:true});

userSchema.pre('save', async function (next) {
  try {
    // Hash the password only if it has been modified or is new
    if (this.isModified('password') || this.isNew) {
      const hashedPassword = await bcrypt.hash(this.password, 10);
      this.password = hashedPassword;
    }
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
