const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send(req.query.f + ' ' + req.query.o + ' ' + req.query.s)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
