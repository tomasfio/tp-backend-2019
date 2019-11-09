import express, {json} from 'express';
import morgan from 'morgan';

const mongoose = require('mongoose');

const app = express();

//  Import Routes
import CategoriaRouter from "./routes/categoria.routes";
import ProductoRouter from "./routes/producto.routes";

//  Database
mongoose.connect('mongodb://localhost/node-restapi',{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(db=>console.log('db is connected'))
    .catch(err => console.log(err));

//  Settings
app.set('port', process.env.PORT || 3000);

//  Middlerware
app.use(morgan('dev'));
app.use(json());

//  Router
app.use('/categoria',CategoriaRouter);
app.use('/producto',ProductoRouter);

//  Muestra el siguiente mensaje para todas la rutas no definidas
app.use('*', function(req, res,){
    res.status(404).json({
        message: "La ruta ingresada no existe"
    });
});

export default app;
