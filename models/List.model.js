const {Schema, model} = require('mongoose')

const schema = new Schema({
  checked: {type: Boolean, required: true},
  value: {type: String, required: true},
  user: {type: String, required: true},
})

module.exports = model('List', schema)
