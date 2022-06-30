const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  let f = +req.query.f
  let o = req.query.o
  let s = +req.query.s
  var r = 0
  
  switch(o) {
    case 'add':
      r = f + s
      break
    case 'minus':
      r = f - s
      break
    case 'multiply':
      r = f*s
      break
    case 'divide':
      r = f / s
      break
    default:
      break
  }
  console.log(r)
  
  res.json({res: r.toString()})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
