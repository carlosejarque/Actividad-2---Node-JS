const { readJSON, writeJSON } = require("../services/fileServices");
const BOOKS_FILE = "./data/books.json";

exports.getBooks = (req, res) => {
  const books = readJSON(BOOKS_FILE);
  res.json(books);
};

exports.getBookById = (req, res) => {
  const books = readJSON(BOOKS_FILE);
  const bookId = parseInt(req.params.id, 10);

  const book = books.find((b) => b.id === bookId);

  if (!book) {
    return res.status(404).json({
      error: "Not Found",
      message: `Book with ID ${bookId} not found`,
    });
  }

  res.json(book);
};

exports.createBook = (req, res) => {
  const books = readJSON(BOOKS_FILE);
  const newBook = req.body;

  newBook.id = books.length ? books[books.length - 1].id + 1 : 1;
  books.push(newBook);

  writeJSON(BOOKS_FILE, books);
  res.status(201).json(newBook);
};

exports.updateBook = (req, res) => {
  const books = readJSON(BOOKS_FILE);
  const bookId = parseInt(req.params.id, 10);
  const bookIndex = books.findIndex((b) => b.id === bookId);

  if (bookIndex === -1) {
    return res.status(404).json({
      error: "Not Found",
      message: `Book with ID ${bookId} not found`,
    });
  }

  const updatedBook = req.body;
  updatedBook.id = bookId;
  books[bookIndex] = updatedBook;

  writeJSON(BOOKS_FILE, books);
  res.json(updatedBook);
};

exports.deleteBook = (req, res) => {
  const books = readJSON(BOOKS_FILE);
  const bookId = parseInt(req.params.id, 10);
  const bookIndex = books.findIndex((b) => b.id === bookId);

  if (bookIndex === -1) {
    return res.status(404).json({
      error: "Not Found",
      message: `Book with ID ${bookId} not found`,
    });
  }

  books.splice(bookIndex, 1);
  writeJSON(BOOKS_FILE, books);
  res.status(200).json({ message: `Book with ID ${bookId} deleted successfully` });
};
