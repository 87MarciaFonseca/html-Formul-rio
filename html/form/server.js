const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios',(req, resp) =>{
    console.log(req.body.nome)
    resp.send('<h1>Parabéns<h1>')
})


app.listen(3003)

console.log('listening on port 3003...')