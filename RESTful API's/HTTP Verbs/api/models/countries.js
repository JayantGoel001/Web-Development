const mongoose = require('mongoose');
mongoose.set('useCreateIndex',true);

const countrySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    fakeid:{
        type:Number,
        required:true,
        unique:true
    }

});

mongoose.model("Country",countrySchema);
