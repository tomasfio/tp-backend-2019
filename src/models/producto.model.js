const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    nombre: String,
    descripcion: String,
    precioUnidad: Number
});

module.exports = mongoose.model('producto', productoSchema);
