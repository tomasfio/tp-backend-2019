import { Router } from "express";
import multer from "../lib/multer";
const router = Router();

const producto = require('../controllers/producto.controller');

router.get('/', producto.index);
router.post('/', multer.single('image'), producto.newProducto);

router.get('/:id',producto.getProducto);
router.put('/:id',producto.updateProducto);
router.delete('/:id',producto.deleteProducto);

router.get("/categoria/:id", producto.getProductoByCategoria);

export default router;
