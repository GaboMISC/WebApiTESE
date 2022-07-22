const vExpress = require('express')
const vMorgan = require('morgan')
const vCors = require('cors')
const vBodyParser = require('body-parser')

const port = (process.env.port||3000)
const app = vExpress()

app.set('port', port)
app.use(vMorgan())
app.use(vCors())
app.use(vExpress.json())
app.use(vBodyParser.json())

app.use('/api', require('./routes/rutaGeneral'))

app.listen(app.get('port'))

console.log('Api en Funcionamiento en el puerto: ' + port)