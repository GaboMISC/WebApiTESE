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
app.use('/api', require('./routes/FO-TESE-DA-69-PIDT03'))
app.use('/api', require('./routes/FO-TESE-DA-70-PIDT04'))
app.use('/api', require('./routes/FO-TESE-DA-71-PIDT05'))
app.use('/api', require('./routes/FO-TESE-DA-72-PIDT06'))
app.use('/api', require('./routes/FO-TESE-DA-73-PIDT07'))

app.listen(app.get('port'))

console.log('Api en Funcionamiento en el puerto: ' + port)