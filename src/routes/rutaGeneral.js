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
})

rutas.get('/ConsultaId/:id', (request, response) => {
    const {id} = request.params
    let consulta = 'SELECT * FROM DivisionAcademica WHERE id = ?'
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
})

rutas.post('/Insertar', (request, response) => {
    // Nombres iguales al de la tabla
    const {Descripcion} = request.body
    let consulta = "INSERT INTO DivisionAcademica (Descripcion) VALUES ('"+Descripcion+"')"
    baseDatos.query(consulta, (error, filas) => {
        if (!error)
        {
            response.json('Registro insertado con exito')
        }
        else
        {
            console.error(error)
            console.log(request.body)
        }
    })
})

rutas.delete('/EliminarId/:id', (request, response) => {
    const {id} = request.params
    let consulta = 'DELETE FROM DivisionAcademica WHERE id = ?'
    baseDatos.query(consulta,[id], (error, filas) => {
        if (!error)
        {
            response.json('Se ha eliminado el registro')
        }
        else
        {
            console.error(error)
        }
    })
})

rutas.put('/Actualizar/:id', (request, response) => {
    const {id} = request.params
    const {Descripcion} = request.body // Nombres iguales al de la tabla
    let consulta = "UPDATE DivisionAcademica SET Descripcion = '"+Descripcion+"' WHERE id = ?"
    baseDatos.query(consulta,[id], (error, filas) => {
        if (!error)
        {
            response.json('Se ha actualizado el registro')
        }
        else
        {
            console.error(error)
        }
    })
})

module.exports = rutas