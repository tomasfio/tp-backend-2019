import { Router } from "express";
const router = Router();

const catModel = require('../models/categoria.model');

//  categoria/
router.get('/', async (req, res) =>{
    const result = await catModel.find({});
    res.status(200).json({"Categorias": result}).status(200);
});

router.get('/:id', async (req,res) => {
    const { id } = req.params;
    const result = await catModel.findById(id);
    res.json(result);
});

router.post('/', async (req,res) => {
    const catNew = new catModel(req.body);
    const result = await catNew.save();
    res.status(201).json(result);
});

router.put('/:id', async (req,res) => {
    const { id } = req.params;
    const updateCategoria = req.body;
    const oldCat = await catModel.findByIdAndUpdate(id, updateCategoria);

    res.json({
        message: `La categoria con el id ${id} se ha actualizado exitosamente`
    });
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const result = await catModel.findByIdAndDelete(id);

    res.json({
        message: `Categora ${id} eliminada`,
        result
    });
});

export default router;