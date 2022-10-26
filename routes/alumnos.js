const express = require('express');
const Alumno = require('./../models/Alumno');
// Enrutador para obtener las vistas 
const router = express.Router();

router.get('/nuevo', (req, res) => {
    res.render('alumnos/nuevo', { alumno: new Alumno() })
})

router.get('/:id', async (req, res) => {
    const alumno = await Alumno.findById(req.params.id)
    if (alumno == null) res.redirect('/')
    res.render('alumnos/mostrar', { alumno: alumno })
})

router.post('/', async (req, res) => {
    let alumno = new Alumno({
        curso: req.body.curso,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        dni: req.body.dni
    })
    try {
        alumno = await alumno.save()
        res.redirect(`/alumnos/${alumno.id}`)
    } catch (e) {
        res.render('alumnos/nuevo', { alumno: alumno })
    }


})

router.delete('/:id', async (req, res) => {
    await Alumno.findByIdAndDelete(req.params.id)
    res.redirect('/')
})

module.exports = router;