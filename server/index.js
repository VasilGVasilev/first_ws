const express = require('express')
const app = express()
const port = 5500

//import 
const bodyParser = require('body-parser');

//create middleware to extract json from the body of our req
app.use(bodyParser.json())

//disable sec rule for local dev
app.use(function(req,res,next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

//check the port number on the IDE
//async for DB, scrapper interaction
app.get('/creators', async (req, res) => {
    const creators = [
        {name:'one', img:'html://'},
        {name:'two', img:'html://'},
        {name:'three', img:'html://'}
    ]
    //todo: GET from DB
    res.send(creators)
})
//POST needs the body-parser lib
app.post('/creators', async (req, res) => {
    console.log(req.body)
    //todo: Scrape channel
    //todo: Add to DB
    res.send("success")
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})