const express = require("express")
const router = express.Router()
const { getBooks, getBookById, createBook, updateBook, deleteBook } = require("../controllers/booksController")
const { authMiddleware } = require("../middlewares")
const { validateBody } = require("../middlewares")
const { bookSchema } = require("../schemas")


router.get("/", getBooks)
router.get("/:id", getBookById)
router.post("/", authMiddleware, validateBody(bookSchema), createBook)
router.put("/:id", authMiddleware, validateBody(bookSchema), updateBook)
router.delete("/:id", authMiddleware, deleteBook)


module.exports = router