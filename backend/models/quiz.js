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
    grade:{type:Number,required:[true,"Enter Grade"]},
    level:{type:String,required:[true,"Enter Quiz Level"]}, //,enum:["Beginner","Intermediate","Advanced"]
    questions:[questionSchema]
})

export const Quiz = mongoose.model("Quiz",quizSchema);