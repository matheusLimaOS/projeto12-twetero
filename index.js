import express from 'express'

const app = express();
app.use(express.json())

let users = [];
let tweets = [];
let tweetsCompose = [];

app.post("/sign-up",(req,res)=>{
    let user = {
        username: req.body.username,
        avatar: req.body.avatar
    }
    users.push(user);
    res.status(201);
    res.send('OK');
})

app.post("/tweets",(req,res)=>{
    let tweet = {
        : ,
        : 
    }
    users.push(user);
    res.status(201);
    res.send('OK');
})


app.listen(5000);