const {request, response} = require("express");
const rutaFormato73 = require('express').Router()
const baseDatos = require('../Configuracion/ConexionBD')

rutaFormato73.get('/Formato73', (request, response) => {
    response.send('Formato FO-TESE-DA-73-PIDT07 Funcionando...')
} )

/*
    http://localhost:3000/api/vFormato73
    Json: {"ClaveProyecto": "Proy-01"}
* */
rutaFormato73.post('/vFormato73', (request, response) => {
    const {ClaveProyecto} = request.body // Nombres iguales al de la tabla
    let querySQL = "SELECT * FROM vFormato73 WHERE ClaveProyecto = '"+ClaveProyecto+"'"
    baseDatos.query(querySQL, (error, filas) => {
        if (!error)
        {
            response.json(filas)
        }
        else
        {
            console.error(error)
        }
    })
})

/*
    http://localhost:3000/api/vFormato73DivisionAcademica
    Json: {"ClaveProyecto": "Proy-01"}
* */
rutaFormato73.post('/vFormato73DivisionAcademica', (request, response) => {
    const {ClaveProyecto} = request.body // Nombres iguales al de la tabla
    let querySQL = "SELECT * FROM vFormato73DivisionAcademica WHERE ClaveProyecto = '"+ClaveProyecto+"'"
    baseDatos.query(querySQL, (error, filas) => {
        if (!error)
        {
            response.json(filas)
        }
        else
        {
            console.error(error)
        }
    })
})

/*
    http://localhost:3000/api/vFormato73ComiteEvaluador
    Json: {"ClaveProyecto": "Proy-01"}
* */
rutaFormato73.post('/vFormato73ComiteEvaluador', (request, response) => {
    const {ClaveProyecto} = request.body // Nombres iguales al de la tabla
    let querySQL = "SELECT * FROM vFormato73ComiteEvaluador WHERE ClaveProyecto = '"+ClaveProyecto+"'"
    baseDatos.query(querySQL, (error, filas) => {
        if (!error)
        {
            response.json(filas)
        }
        else
        {
            console.error(error)
        }
    })
})

module.exports = rutaFormato73