import { Book } from '../models/Book.js';

export const getBooks = async (req, res, next) => {
  const { page = 1, limit = 10 } = req.query;
  const offset = (page - 1) * limit;
  try {
    const books = await Book.findAndCountAll({ limit, offset });
    res.json({ data: books.rows, total: books.count, page, totalPages: Math.ceil(books.count / limit) });
  } catch (err) { next(err); }
};

export const getBook = async (req, res, next) => {
  try {
    const book = await Book.findByPk(req.params.id);
    book ? res.json(book) : res.status(404).json({ error: 'Book not found' });
  } catch (err) { next(err); }
};

export const createBook = async (req, res, next) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (err) { next(err); }
};

export const updateBook = async (req, res, next) => {
  try {
    const [updated] = await Book.update(req.body, { where: { id: req.params.id } });
    updated ? res.json({ message: 'Book updated' }) : res.status(404).json({ error: 'Book not found' });
  } catch (err) { next(err); }
};

export const deleteBook = async (req, res, next) => {
  try {
    const deleted = await Book.destroy({ where: { id: req.params.id } });
    deleted ? res.json({ message: 'Book deleted' }) : res.status(404).json({ error: 'Book not found' });
  } catch (err) { next(err); }
};
