import express from 'express';
import bookRoutes from './routes/bookRoutes.js';
import errorHandler from './middleware/errorHandler.js';
import { sequelize } from './models/Book.js';

const app = express();

app.use(express.json());

app.use('/books', bookRoutes);
app.use(errorHandler);

sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
});