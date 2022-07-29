const {request, response} = require("express");
const rutaFormato69 = require('express').Router()
const baseDatos = require('../Configuracion/ConexionBD')

rutaFormato69.get('/Formato69', (request, response) => {
    response.send('Formato FO-TESE-DA-69-PIDT03 Funcionando...')
} )

/*
    http://localhost:3000/api/EvaluadoresProyecto
    Json: {"ClaveProyecto": "Proy-01"}
* */
rutaFormato69.post('/EvaluadoresProyecto', (request, response) => {
    const {ClaveProyecto} = request.body // Nombres iguales al de la tabla
    let querySQL = "SELECT * FROM vEvaluadoresProyecto WHERE ClaveProyecto = '"+ClaveProyecto+"'"
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
    http://localhost:3000/api/vFormato69
    Json: {"ClaveProyecto": "Proy-01"}
* */
rutaFormato69.post('/vFormato69', (request, response) => {
    const {ClaveProyecto} = request.body // Nombres iguales al de la tabla
    let querySQL = "SELECT * FROM vFormato69 WHERE ClaveProyecto = '"+ClaveProyecto+"'"
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
    http://localhost:3000/api/vFormato69HojaAnalisisProyecto
    Json: {"ClaveProyecto": "Proy-01"}
* */
rutaFormato69.post('/vFormato69HojaAnalisisProyecto', (request, response) => {
    const {ClaveProyecto} = request.body // Nombres iguales al de la tabla
    let querySQL = "SELECT * FROM vFormato69HojaAnalisisProyecto WHERE ClaveProyecto = '"+ClaveProyecto+"'"
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
    http://localhost:3000/api/vFormato69PuntuacionCriteriosGeneralesEvaluacion
    Json: {"ClaveProyecto": "Proy-01"}
* */
rutaFormato69.post('/vFormato69PuntuacionCriteriosGeneralesEvaluacion', (request, response) => {
    const {ClaveProyecto} = request.body // Nombres iguales al de la tabla
    let querySQL = "SELECT * FROM vFormato69PuntuacionCriteriosGeneralesEvaluacion WHERE ClaveProyecto = '"+ClaveProyecto+"'"
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

rutaFormato69.post('/InsertarCalificacionHojaAnalisis', (request, response) => {
    const {ClaveProyecto, cAntecedentesJustificacion, cMetodologia, cObjetivos, cImpacto, cSectorPublico, cFormacionRH, cInfraestructura, cActividades, cRH, cProgramacion, cPresupuesto} = request.body // Nombres iguales a parametros SP
    baseDatos.query(
        "CALL  pInsertarHojaAnalisis(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, @res)",
        [ClaveProyecto, cAntecedentesJustificacion, cMetodologia, cObjetivos, cImpacto, cSectorPublico, cFormacionRH, cInfraestructura, cActividades, cRH, cProgramacion, cPresupuesto],
        function (error, resultado) {
            if (error)
            {
                console.error("Error: ", error);
            }
            else
            {
                //console.log(resultado[0][0].ret_value1);
                response.json(resultado);
            }
    });
})

module.exports = rutaFormato69