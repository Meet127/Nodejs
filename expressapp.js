const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World3!')
})
app.get('/about', (req, res) => {
    res.send('This is an about page!')
  })
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})