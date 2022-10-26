const mongoose = require('mongoose');
const alumnoSchema = new mongoose.Schema({
    curso: {
        type: String,
    },
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    dni: {
        type: Number,
        required: true
    },
    fechaRegistro: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Alumno', alumnoSchema)