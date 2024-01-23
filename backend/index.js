import cors from 'cors'
import express from 'express';
import mongoose from "mongoose"
import authRouter from './routes/auth.js';
import userRouter from './routes/user.js';
import quizRouter from './routes/quiz.js';

const app = express();
const PORT = 5000;

//middlewares


app.use(cors())
   .use(express.json())
   .use("/auth",authRouter)
   .use("/users",userRouter)
   .use("/quiz",quizRouter)
//    jwt.verify(token, cert, function(err, decoded) {
//     console.log(decoded.foo) // bar
//   });


// Database Connection


main()
    .then((res) => console.log("CodingQuest Database connected successfully"))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://karan:1234@cluster0.acrcrw2.mongodb.net/quest?retryWrites=true&w=majority');
}


// Routes





// Server Listen 


app.listen(PORT, () => {
    console.log(`Server is working at http://localhost:${PORT}`);
})