const mongoose = require("mongoose");
const { Schema, models, model } = mongoose;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    //bookmarks:[
//{type:Schema.Types.ObjectId,
//ref:'Property' /*Property is the model name and thats how we connect two models*/
//}
//]
},{timestamps:true})

module.exports = models.Blog || model("Blog", blogSchema);
