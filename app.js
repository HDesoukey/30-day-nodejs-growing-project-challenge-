const express = require ('express')
const app = express()
const port = 3000

app.disable('x-powered-by')

app.get('/',(req, res) => {
    res.send("hello world")
})

app.get('/ping',(req, res) => {
    res.json({ok : true})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})