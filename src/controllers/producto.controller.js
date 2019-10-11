const prodModel = require('../models/producto.model');

module.exports= {

    index: async (req, res) => {
        const result = await prodModel.find({});
        res.status(200).json({"Productos": result});
    },

    getProducto: async (req, res) => {
        const {id} = req.params;
        const result = await prodModel.findById(id);
        res.json(result);//sin status ??
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
            message: `Porducto ${id} eliminado`,
            result
        });
    },

};
