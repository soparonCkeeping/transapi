const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const translate = require('@iamtraction/google-translate')
const { json } = require('body-parser')
const axios = require('axios')


require('dotenv').config()


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//automatic language ditection to English
app.get('/api/auto', (req, res, next) => {
    console.log(req.query.to)
    console.log(req.query.text)

    translate(req.query.text, { to: req.query.to }).then(data => {
        res.json({
            text: data.text,
            from: data.from,
            raw: data.raw
        })    
    }).catch(err => {
        res.json({
            error: err
        })
    });

})

app.get('/api/tar', (req, res, next) => {   

    translate(req.query.text, { from: req.query.from , to: req.query.to }).then(data => {
        res.json({
            text: data.text,
            from: data.from,
            raw: data.raw
        })
      }).catch(err => {
        res.json({
            error: err
        })
      });
})



app.post('/cors-everywhere',(req, res, next) => {
    requestURL = req.body.requestURL
    console.log(requestURL)
    axios.get(requestURL)
        .then((data) => {
            console.log(data)
            res.json(data)
        })
        .catch((err) => {
            res.json(err)
        })  
})

let port = parseInt(process.env.PORT) || 8000

app.listen(port, () => {
    console.log('app is on ', port)
})