import { Router } from "express";
const router = Router();

const {
    index,
    getCategoria,
    newCategoria,
    updateCategoria,
    deleteCategoria
} = require('../controllers/categoria.controller');

router.get('/',index);
router.post('/',newCategoria);

router.get('/:id',getCategoria);
router.put('/:id',updateCategoria);
router.delete('/:id',deleteCategoria);

export default router;
