function findAuthorById(authors, id) 
{
  return authors.find((author) => author.id == id);
}

function findBookById(books, id)
{
  return books.find((book) => book.id == id);
}

function partitionBooksByBorrowedStatus(books)
{
  const organizedBooks = [[], []];

  organizedBooks[0] = books.filter((book) => book.borrows[0].returned === false);
  organizedBooks[1] = books.filter((book) => book.borrows[0].returned === true);

  return organizedBooks;
}

function getBorrowersForBook(book, accounts)
{
  let borrowers = [];

  book.borrows.forEach((borrow) => 
    {
      let newBorrow = accounts.find((account) => account.id == borrow.id);

      newBorrow["returned"] = borrow.returned;
      borrowers.push(newBorrow);
    });

    return borrowers.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
