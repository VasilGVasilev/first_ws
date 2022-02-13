const express = require('express')
const app = express()
const port = 5500
const scrapers = require('./scrapers')

//import 
const bodyParser = require('body-parser');
const scrapeJob = require('./scrapers');

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

//remove get for now
// app.get('/jobs', async (req, res) => {
//     const jobs = [
//         {name:'one', img:'html://'},
//         {name:'two', img:'html://'},
//         {name:'three', img:'html://'}
//     ]
//     //todo: GET from DB
//     res.send(jobs)
// })
//POST needs the body-parser lib
app.post('/jobs', async (req, res) => {
    //console.log(req.body.jobName) //Object.values to exract key:value<-- only
    const jobDB = await scrapers.scrapeJob(req.body.jobName);//dont stringify, but use the value this way
    console.log(jobDB); //but extract the value key:value in this was
    //todo: Add to DB
    res.send(jobDB)
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})