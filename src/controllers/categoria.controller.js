const catModel = require('../models/categoria.model');

//  categoria/
module.exports = {
    index: async (req, res) => {
        const result = await catModel.find({});
        res.status(200).json({"Categorias": result});
    },

    getCategoria: async (req, res) => {
        const {id} = req.params;
        const result = await catModel.findById(id);
        res.json(result);//sin status ??
    },

    newCategoria: async (req, res) => {
        const catNew = new catModel(req.body);
        const result = await catNew.save();
        res.status(201).json(result);
    },

    updateCategoria: async (req, res) => {
        const {id} = req.params;
        const updateCategoria = req.body;
        const oldCat = await catModel.findByIdAndUpdate(id, updateCategoria);

        res.json({
            message: `La categoria con el id ${id} se ha actualizado exitosamente`
        });
    },

    deleteCategoria: async (req, res) => {
        const {id} = req.params;
        const result = await catModel.findByIdAndDelete(id);

        res.json({
            message: `Categoria ${id} eliminada`,
            result
        });
    },
};
