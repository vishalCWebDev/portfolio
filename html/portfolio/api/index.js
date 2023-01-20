const http = require('http');
const crypto = require('crypto');
// const secret = crypto.randomBytes(16).toString('hex');
const server = http.createServer((req,res)=>{
  try {
      req.on('data',chunk=>{
        res.write(chunk)
      })

      req.on('end', val=>{
        res.write(val)
      })
        
        res.end()
    } catch (error) {
      console.log(error)
    }
    res.end()
})

server.listen('8080')