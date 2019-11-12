const prodModel = require('../models/producto.model');
const catModel = require('../models/categoria.model');

import path from "path";

const fs = require('fs');

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
        const newProd = new prodModel(req.body);
        
        if(req.file !== undefined){
            newProd.imagePath = req.file.path;
        }
        const prodNew = new prodModel(newProd);
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
        const prodDelete = await prodModel.findById(id);

        if(prodDelete.imagePath !== undefined){
            fs.unlink(path.resolve(prodDelete.imagePath), (err) => {
                if(err){
                    res.status(400).json({"message": "Hubo un error al intentar eliminar la imagen", "err" : err});
                }
            });
        }

        const result = await prodModel.findByIdAndDelete(id);

        res.json({
            message: `Producto ${id} eliminado`,
            result
        });
    },

    getProductoByCategoria: async (req,res) => {
        const {id} = req.params;
        prodModel.find({categoria: id})
        .then(productos =>  catModel.populate(productos, {path:"categoria"})
            .then(productos => res.status(200).json({"Productos": productos}))
            .catch(err => res.json({"message": "Hubo un error", "err": err})))
        .catch(err => res.json({"message": "Hubo un error", "err": err}));
    }

};
