import express from 'express';
import dotenv from 'dotenv';
import dbConnection from './config/db';
import morgan from 'morgan';

import { notFound, errorHandler } from './middlewares/errorMiddlewares';
import productsRoute from './routes/productRoutes';
import addProductRoute from './routes/addProductRoutes';

//configs
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
dbConnection();
//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}


// routes middlewares
app.use('/api/products', productsRoute);
app.use('/api/add', addProductRoute)

// errors middleware
app.use(notFound);
app.use(errorHandler);

//start:
app.listen(PORT, () => {
  console.log(
    `App running on ${process.env.NODE_ENV} mode at http://localhost:${PORT}`
  );
});
