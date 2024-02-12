import mongoose,{Schema} from "mongoose";

const optionSchema = new Schema({
    option:{type:String,required:true},
    correct:{type:Boolean,required:true}
})

const questionSchema = new Schema({
    question:{type:String,required:true},
    options:[optionSchema],
    correct_option:{type:Schema.Types.ObjectId,ref:"Option"}
})

const quizSchema= new Schema({
    title:{type:String,required:[true,"Enter Title"],unique:true},
    id:{type:String},
    topic:{type:String,required:[true,"Enter Topic"]},
    startGrade:{type:Number,required:[true,"Enter Start Grade"]},
    endGrade:{type:Number,required:[true,"Enter End Grade"]},
    level:{type:String,required:[true,"Enter Quiz Level"]}, //,enum:["Beginner","Intermediate","Advanced"]
    questions:[questionSchema],
    thumbnail:{ type:String, required:true},
    pointsScored:{type:Number,default:0}
})

export const Option = mongoose.model("Option",optionSchema);
export const Quiz = mongoose.model("Quiz",quizSchema);