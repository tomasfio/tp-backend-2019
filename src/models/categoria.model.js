const mongoose = require("mongoose");

const categoriaSchema = new mongoose.Schema({
    nombre: String,
    descripcion: String
});

module.exports = mongoose.model('categoria', categoriaSchema);