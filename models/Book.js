import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

const Book = sequelize.define('Book', {
  title: { type: DataTypes.STRING, allowNull: false },
  author: { type: DataTypes.STRING, allowNull: false },
  publishedYear: DataTypes.INTEGER,
  isbn: { type: DataTypes.STRING, unique: true },
  genre: DataTypes.STRING,
  language: DataTypes.STRING,
});

export { Book, sequelize };
