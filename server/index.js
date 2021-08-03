const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./user/authRouter.js');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use('/auth',authRouter);


const start = async () => {
    try{
        await mongoose.connect(`mongodb+srv://user:qweqwe67@cluster0.l9rkq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,{useUnifiedTopology: true,useNewUrlParser: true});
        app.listen(PORT, () => {
            console.log('server started on port:' + PORT);
    });
    } catch(err){
        console.log(err);
    }
}

start();