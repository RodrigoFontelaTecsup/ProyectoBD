const express = require('express');
const mongoose = require('mongoose');
const Alumno = require('./models/Alumno');
const alumnoRouter = require('./routes/alumnos');
const methodOverride = require('method-override');
const app = express()

// Conexion con MongoDB
mongoose.connect('mongodb://localhost/alumnos')

// Motor de vista y en que formato se mostrara nuestras vistas
app.set('view engine', 'ejs')

// Acceder a los parametros del formulario
app.use(express.urlencoded({ extended: false }))

app.use(methodOverride('_method'))

// Uso del enrutador
// app.use('/alumnos', alumnoRouter)

// Enviar solicitud y dar respuesta
app.get('/', async (req, res) => {
    const alumnos = await Alumno.find().sort({ fechaRegistro: 'desc' })
    res.render('alumnos/index', { alumnos: alumnos })
})

app.use('/alumnos', alumnoRouter)

// Indicamos el puerto
app.listen(3000)