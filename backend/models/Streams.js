const { Schema, model } = require("mongoose")

const streamSchema = new Schema({
  title: String,
  link: String
},
  {
    timestamps: true
  }
)

module.exports = model("Streams", streamSchema)
