let express = require("express");
let cors = require("cors");
const app = express();

app.use(express.json())
app.use(cors())

let users = [];
let tweets = [];

app.post("/sign-up",(req,res)=>{
    if(req.body.username === "" || req.body.username === undefined || req.body.avatar ==="" || req.body.avatar === undefined){
        res.status(400)
        res.send("Todos os campos são obrigatórios!");
    }
    else{
        let user = {
            username: req.body.username,
            avatar: req.body.avatar
        }
        users.push(user);
        res.status(201);
        res.send('OK');
    }
})

app.post("/tweets",(req,res)=>{
    if(req.body.username === "" || req.body.username === undefined || req.body.tweet ==="" || req.body.tweet === undefined){
        res.status(400)
        res.send("Todos os campos são obrigatórios!");
    }
    else{
        let avate = getAvatar(req.body.username);
        let tweetCompose = {
            username: req.body.username,
            tweet: req.body.tweet,
            avatar: avate
        }
        tweets.push(tweetCompose);
        res.status(201);
        res.send('OK');
    }
})

app.get("/tweets",(req,res)=>{
    let lastTen = [];
    if(tweets.length < 10){
        let i;
        for(i=tweets.length-1;i>=0;i--){
            lastTen.push(tweets[i]);
        }
        res.status(200);
        res.send(lastTen);
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