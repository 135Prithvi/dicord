const mongoose = require('mongoose')
const messages = new mongoose.Schema({
    content:String,
    name:String,
},{
    timestamps:true,
});
module.exports = mongoose.models.Message || mongoose.model('Message', messages)
export default module.exports 