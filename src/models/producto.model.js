const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    nombre: String,
    descripcion: String,
    precioUnidad: Number,
    imagePath: String,
    categoria: {type: mongoose.Schema.Types.ObjectId , ref: 'categoria'}
});

module.exports = mongoose.model('producto', productoSchema);
