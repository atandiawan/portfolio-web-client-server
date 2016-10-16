let express = require('express')
let app = express()

let cors = require('cors')
app.use(cors())

app.use(express.static(__dirname + '/public'))

app.get('/data', function(req,res,next){
  res.json({title: "example", data: "send data from server"})
})

app.listen(3000, function(){
  console.log('listening on 3000')
})
