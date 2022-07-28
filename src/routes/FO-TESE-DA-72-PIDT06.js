const {request, response} = require("express");
const rutaFormato72 = require('express').Router()
const baseDatos = require('../Configuracion/ConexionBD')

rutaFormato72.get('/Formato72', (request, response) => {
    response.send('Formato FO-TESE-DA-72-PIDT06 Funcionando...')
} )

/*
    http://localhost:3000/api/vFormato72
    Json: {"ClaveProyecto": "Proy-01"}
* */
rutaFormato72.post('/vFormato72', (request, response) => {
    const {ClaveProyecto} = request.body // Nombres iguales al de la tabla
    let querySQL = "SELECT * FROM vFormato72 WHERE ClaveProyecto = '"+ClaveProyecto+"'"
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
    http://localhost:3000/api/vFormato72CronogramaProyecto
    Json: {"ClaveProyecto": "Proy-01"}
* */
rutaFormato72.post('/vFormato72CronogramaProyecto', (request, response) => {
    const {ClaveProyecto} = request.body // Nombres iguales al de la tabla
    let querySQL = "SELECT * FROM vFormato72CronogramaProyecto WHERE ClaveProyecto = '"+ClaveProyecto+"'"
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
    http://localhost:3000/api/vFormato72Personas
    Json: {"DivisionAcademica": "División de Ingeniería en Sistemas Computacionales"}
* */
rutaFormato72.post('/vFormato72Personas', (request, response) => {
    const {DivisionAcademica} = request.body // Nombres iguales al de la tabla
    let querySQL = "SELECT * FROM vFormato72Personas WHERE DivisionAcademica = '"+DivisionAcademica+"'"
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
    http://localhost:3000/api/vFormato72PersonaOpcion2
    Json: {"ClaveProyecto": "Proy-01"}
* */
rutaFormato72.post('/vFormato72PersonaOpcion2', (request, response) => {
    const {ClaveProyecto} = request.body // Nombres iguales al de la tabla
    let querySQL = "SELECT * FROM vFormato72PersonaOpcion2 WHERE ClaveProyecto = '"+ClaveProyecto+"'"
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

module.exports = rutaFormato72