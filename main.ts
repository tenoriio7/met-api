import * as restify from 'restify'

const server  = restify.createServer({
    name: 'meat-api',
    version: '1.0.0'
})

server.get('/hello', (reaq, resp , next)=>{
    resp.json({message: 'hello'})
    return next ()
})

server.listen(3000,()=>{
    
})