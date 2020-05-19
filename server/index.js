const express = require('express')
const ctrl = require('./controllers/messages_controller')
const app = express()
const SERVER_PORT = 3001

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))

app.get('/api/messages', ctrl.read)

app.post('/api/messages', ctrl.create)

app.put('/api/messages/:msg_id', ctrl.update)

app.delete('/api/messages/:msg_id', ctrl.delete)

app.listen(SERVER_PORT, () => console.log(`Server listening on port: ${SERVER_PORT}`))
