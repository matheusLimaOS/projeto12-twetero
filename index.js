import express from 'express'

const app = express();
app.use(express.json())

let users = [];
let tweets = [];

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
    let avate = getAvatar(req.body.username);
    let tweetCompose = {
        username: req.body.username,
        tweet: req.body.tweet,
        avatar: avate
    }
    tweets.push(tweetCompose);
    res.status(201);
    res.send('OK');
})

app.get("/tweets",(req,res)=>{
    let lastTen = [];
    if(tweets.length < 10){
        res.status(200);
        res.send(tweets);
    }
    else{
        let i;
        for(i=1;i<=10;i++){
            lastTen.push(tweets[tweets.length-i]);
        }

        res.status(200);
        res.send(lastTen);
    }
})


function getAvatar(username){
    let avatar;
    users.forEach((user)=>{
        if(user.username === username){
            avatar = user.avatar;
        }
    })

    return avatar;
}

app.listen(5000);