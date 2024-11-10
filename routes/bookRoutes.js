import express from 'express';
import { getBooks, getBook, createBook, updateBook, deleteBook } from '../controllers/bookController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getBooks);
router.get('/:id', getBook);
router.post('/', auth, createBook);
router.put('/:id', auth, updateBook);
router.delete('/:id', auth, deleteBook);

export default router;
