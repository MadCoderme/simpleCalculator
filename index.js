const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  let f = req.query.f
  let o = req.query.o
  let s = req.query.s
  var res = 0
  
  switch(o) {
    case 'add':
      res = f + s
      break
    case 'minus':
      res = f - s
      break
    default:
      break
  }
  
  res.send(res)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
