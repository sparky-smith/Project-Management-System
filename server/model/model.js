const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    p_no:{
        type: String,
        required:true
    },
    p_name:{
        type: String,
        required:true
    },
    type:{
        type: String,
        required:true
    },
    sanction_date:{
        type: Date,
        required:true
    },
    pdc_o_in_months:{
        type: Number,
        required:true
    },
    cost_o_in_lakhs:{
        type: Number,
        required:true
    },
    pdc_r_in_months:{
        type: Number,
        
    },
    cost_r_in_lakhs:{
        type: Number,
        
    },
    act_exp_in_lakhs:{
        type: Number
        
    },
    status:{
        type: String,
        required:true
    }

});
const Userdb = mongoose.model('projectDb', schema);
module.exports=Userdb;