const { body, validationResult } = require('express-validator')
const express = require ('express')
const app = express()
const port = 3000

app.use(express.json())
app.disable('x-powered-by')

app.get('/',(req, res) => {
    res.send("hello world")
})

app.post('/login',(req, res) => {
    res.send("login successful")
})

app.post('/submit', [
    body('email').isEmail(),
    body('password').isLength({min : 6}),
], (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()})
    }
    res.send('Valid input')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})