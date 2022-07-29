const {request, response} = require("express");
const rutaCatalogos = require('express').Router()
const baseDatos = require('../Configuracion/ConexionBD')

rutaCatalogos.get('/Catalogos', (request, response) => {
    response.send('Catalogos Funcionando...')
} )

rutaCatalogos.get('/DivisionAcademica', (request, response) => {
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
})

rutaCatalogos.get('/Cargo', (request, response) => {
    let consulta = 'SELECT * FROM Cargo'
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
})

rutaCatalogos.get('/LineaInvestigacion', (request, response) => {
    let consulta = 'SELECT * FROM LineaInvestigacion'
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
})

rutaCatalogos.get('/AreaInvestigacion', (request, response) => {
    let consulta = 'SELECT * FROM AreaInvestigacion'
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
})

rutaCatalogos.get('/NivelAcademico', (request, response) => {
    let consulta = 'SELECT * FROM NivelAcademico'
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
})

rutaCatalogos.get('/Prioridad', (request, response) => {
    let consulta = 'SELECT * FROM Prioridad'
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
})

rutaCatalogos.get('/PeriodoEscolar', (request, response) => {
    let consulta = 'SELECT * FROM PeriodoEscolar'
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
})

module.exports = rutaCatalogos