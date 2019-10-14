const prodModel = require('../models/producto.model');
const catModel = require('../models/categoria.model');

module.exports= {

    index: async (req, res) => {
        prodModel.find({})
        .then(productos => catModel.populate(productos, {path: "categoria"})
            .then(productos => res.status(200).json({"Productos": productos}))
            .catch(err => res.json({"message": "Hubo un error", "err": err})))
        .catch(err => res.json({"message": "Hubo un error", "err" : err}));
    },

    getProducto: async (req, res) => {
        const {id} = req.params;
        prodModel.findById(id)
        .then(producto => catModel.populate(producto, {path: "categoria"})
            .then(producto => res.status(200).json(producto))
            .catch(err => res.json({"message": "Hubo un error", "err": err})))
        .catch(err => res.json({"message": "Hubo un error", "err": err}));

    },

    newProducto: async (req, res) => {
        const prodNew = new prodModel(req.body);
        const result = await prodNew.save();
        res.status(201).json(result);
    },

    updateProducto: async (req, res) => {
        const {id} = req.params;
        const updateProd = req.body;
        const oldProd = await prodModel.findByIdAndUpdate(id, updateProd);

        res.json({
            message: `El producto con el id ${id} se ha actualizado exitosamente`
        });
    },

    deleteProducto: async (req, res) => {
        const {id} = req.params;
        const result = await prodModel.findByIdAndDelete(id);

        res.json({
            message: `Producto ${id} eliminado`,
            result
        });
    },

};
