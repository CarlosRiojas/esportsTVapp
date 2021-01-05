const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const userSchema = new Schema(
  {

    email: {
      type: String,
      unique: true,
      require:true,
    },
    name:{
      type:String,
      default:"newUser"
    },
    streams:{
      type:Schema.Types.ObjectId
    }
  },

  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.plugin(PLM, { usernameField: 'email' });

module.exports = model('User', userSchema);
