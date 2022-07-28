const {request, response} = require("express");
const rutaFormato71 = require('express').Router()
const baseDatos = require('../Configuracion/ConexionBD')

rutaFormato71.get('/Formato71', (request, response) => {
    response.send('Formato FO-TESE-DA-71-PIDT05 Funcionando...')
} )

/*
    http://localhost:3000/api/vFormato71
    Json: {"ClaveProyecto": "Proy-01"}
* */
rutaFormato71.post('/vFormato71', (request, response) => {
    const {ClaveProyecto} = request.body // Nombres iguales al de la tabla
    let querySQL = "SELECT * FROM vFormato71 WHERE ClaveProyecto = '"+ClaveProyecto+"'"
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
    http://localhost:3000/api/vFormato71DivisionAcademica
    Json: {"ClaveProyecto": "Proy-01"}
* */
rutaFormato71.post('/vFormato71DivisionAcademica', (request, response) => {
    const {ClaveProyecto} = request.body // Nombres iguales al de la tabla
    let querySQL = "SELECT * FROM vFormato71DivisionAcademica WHERE ClaveProyecto = '"+ClaveProyecto+"'"
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
    http://localhost:3000/api/vFormato71ComiteEvaluador
    Json: {"ClaveProyecto": "Proy-01"}
* */
rutaFormato71.post('/vFormato71ComiteEvaluador', (request, response) => {
    const {ClaveProyecto} = request.body // Nombres iguales al de la tabla
    let querySQL = "SELECT * FROM vFormato71ComiteEvaluador WHERE ClaveProyecto = '"+ClaveProyecto+"'"
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

module.exports = rutaFormato71