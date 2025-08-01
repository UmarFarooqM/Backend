const { getData, addOrUpdatebook } = require("../models/book.model");

const getAllbooks = (req, res) => {
  let books = getData().books;
  res.status(200).json({ msg: "List of books", books });
};

const addbook = (req, res) => {
  let newbook = req.body;
  let data = getData().data;
  let books = getData().books;
  let id = books[books.length - 1].id + 1;
  newbook = { ...newbook, id };
  books.push(newbook);
  data.books = books;
  addOrUpdatebook(data);
  res.status(201).json({ msg: "New book Added" });
};

const updatebookById = (req, res) => {
  let id = req.params.id;
  let updatedbook = req.body;
  let data = getData().data;
  let books = getData().books;
  let index = books.findIndex((book) => book.id == id);
  if (index == -1) {
    res.status(404).json({ msg: "book Not Found" });
  } else {
    let updatedbooks = books.map((el, i) => {
      if (el.id == id) {
        return { ...el, ...updatedbook };
      } else {
        return el;
      }
    });
    data.books = updatedbooks;
    addOrUpdatebook(data);
    res.status(201).json({ msg: "book Updated" });
  }
};

const deletebookById = (req, res) => {
  let id = req.params.id;
  let data = getData().data;
  let books = getData().books;

  let index = books.findIndex((book) => book.id == id);
  if (index == -1) {
    res.status(404).json({ msg: "book Not Found" });
  } else {
    let updatedbooks = books.filter((el, i) => {
      return el.id != id;
    });
    data.books = updatedbooks;
    addOrUpdatebook(data);
    res.status(200).json({ msg: "book Deleted" });
  }
};

const getbookById = (req, res) => {
  let bookId = req.params.bookId;
  let books = getData().books;
  let index = books.findIndex((book) => book.id == bookId);
  if (index == -1) {
    res.status(404).json({ msg: "book Not Found" });
  } else {
    books.forEach((el, id) => {
      if (el.id == bookId) {
        res.status(200).json({ msg: "book Detail", book: el });
      }
    });
  }
};

const getbookByQuery = (req, res) => {
  let title = req.query.title;
  let books = getData().books;
  let flag = true;
  books.forEach((el, i) => {
    if (el.title.includes(title)) {
      flag = false;
      res.json({ msg: "book", book: el });
    }
  });
  if (flag == true) {
    res.status(404).json({ msg: "book Not Found" });
  }
};

module.exports = {
  getAllbooks,
  addbook,
  updatebookById,
  deletebookById,
  getbookById,
  getbookByQuery,
};
