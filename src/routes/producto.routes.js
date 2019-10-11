import { Router } from "express";
const router = Router();

const producto = require('../controllers/producto.controller');

router.get('/',producto.index);
router.post('/',producto.newProducto);

router.get('/:id',producto.getProducto);
router.put('/:id',producto.updateProducto);
router.delete('/:id',producto.deleteProducto);

export default router;
