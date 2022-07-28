const {request, response} = require("express");
const rutaFormato70 = require('express').Router()
const baseDatos = require('../Configuracion/ConexionBD')

rutaFormato70.get('/Formato70', (request, response) => {
    response.send('Formato FO-TESE-DA-70-PIDT04 Funcionando...')
} )

/*
    http://localhost:3000/api/vFormato70
    Json: {"ClavePrograma": "MISC-02"}
* */
rutaFormato70.post('/vFormato70', (request, response) => {
    const {ClavePrograma} = request.body // Nombres iguales al de la tabla
    let querySQL = "SELECT * FROM vFormato70 WHERE ClavePrograma = '"+ClavePrograma+"'"
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
    http://localhost:3000/api/vFormato70ProyectosPrograma
    Json: {"ClavePrograma": "MISC-02"}
* */
rutaFormato70.post('/vFormato70ProyectosPrograma', (request, response) => {
    const {ClavePrograma} = request.body // Nombres iguales al de la tabla
    let querySQL = "SELECT * FROM vFormato70ProyectosPrograma WHERE ClavePrograma = '"+ClavePrograma+"'"
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
    http://localhost:3000/api/vFormato70CalificacionesProyecto
    Json: {"ClaveProyecto": "Proy-01"}
* */
rutaFormato70.post('/vFormato70CalificacionesProyecto', (request, response) => {
    const {ClaveProyecto} = request.body // Nombres iguales al de la tabla
    let querySQL = "SELECT * FROM vFormato70CalificacionesProyecto WHERE ClaveProyecto = '"+ClaveProyecto+"'"
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
    http://localhost:3000/api/vFormato70CalculosProyecto
    Json: {"ClaveProyecto": "Proy-01"}
* */
rutaFormato70.post('/vFormato70CalculosProyecto', (request, response) => {
    const {ClaveProyecto} = request.body // Nombres iguales al de la tabla
    let querySQL = "SELECT * FROM vFormato70CalculosProyecto WHERE ClaveProyecto = '"+ClaveProyecto+"'"
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
    http://localhost:3000/api/vFormato70CriteriosAceptacion
    Json: {"ClavePrograma": "MISC-02"}
* */
rutaFormato70.post('/vFormato70CriteriosAceptacion', (request, response) => {
    const {ClavePrograma} = request.body // Nombres iguales al de la tabla
    let querySQL = "SELECT * FROM vFormato70CriteriosAceptacion WHERE ClavePrograma = '"+ClavePrograma+"'"
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
    http://localhost:3000/api/vFormato70EvaluadoresPrograma
    Json: {"ClaveProyecto": "Proy-01"}
* */
rutaFormato70.post('/vFormato70EvaluadoresPrograma', (request, response) => {
    const {ClaveProyecto} = request.body // Nombres iguales al de la tabla
    let querySQL = "SELECT * FROM vFormato70EvaluadoresPrograma WHERE ClaveProyecto = '"+ClaveProyecto+"'"
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
    http://localhost:3000/api/vFormato70Personas
    Json: {"ClavePrograma": "MISC-02"}
* */
rutaFormato70.post('/vFormato70Personas', (request, response) => {
    const {ClavePrograma} = request.body // Nombres iguales al de la tabla
    let querySQL = "SELECT * FROM vFormato70Personas WHERE ClavePrograma = '"+ClavePrograma+"'"
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

module.exports = rutaFormato70