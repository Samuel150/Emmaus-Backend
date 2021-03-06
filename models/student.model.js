const {Schema,model} = require('mongoose')

const StudentSchema = new Schema({
    names:{
        type:String,
        required:true,
    },
    lastNames:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    telephone:{
        type:Number,
        required:true,
    },
    documentNumber:{
        type:String,
    },
    countryId:{
        type:Schema.ObjectId,
        required:true,
    },
    departmentId:{
        type:Schema.ObjectId,
        required:true,
    },
    cityId:{
        type:Schema.ObjectId,
        required:true,
    },
    churchId:{
        type:Schema.ObjectId,
    },
    email:{
        type:String,
    },
    registerDate:{
        type:Date,
        default:new Date()
    }
},{collection:'student',versionKey:false})

module.exports = model('student', StudentSchema)