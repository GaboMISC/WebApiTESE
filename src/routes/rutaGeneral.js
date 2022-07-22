const {request, response} = require("express");
const rutas = require('express').Router()
const baseDatos = require('../Configuracion/ConexionBD')

rutas.get('/Home', (request, response) => {
    response.send('Prueba exitosa.')
} )

rutas.get('/DB', (request, response) => {
    let consulta = 'SELECT * FROM DivisionAcademica'
    baseDatos.query(consulta, (error, filas) => {
        if (!error)
        {
            response.json(filas)
        }
        else
        {
            console.error(error)
        }
    })
} )

rutas.get('/ConsultaId/:id', (request, response) => {
    const {id} = request.params
    let consulta = 'SELECT * FROM DivisionAcademica'
    baseDatos.query(consulta,[id], (error, filas) => {
        if (!error)
        {
            response.json(filas)
        }
        else
        {
            console.error(error)
        }
    })
} )

module.exports = rutas