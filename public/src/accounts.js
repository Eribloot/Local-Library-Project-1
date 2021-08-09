function findAccountById(accounts, id)
{
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts)
{
  return accounts.sort((accountA, accountB) => 
  {
    const lastA = accountA.name.last.toLowerCase();
    const lastB = accountB.name.last.toLowerCase();

    return lastA.localeCompare(lastB);

  });

}

function getTotalNumberOfBorrows(account, books)
{
  const id = account.id;
  let totalBorrows = 0;

  books.forEach((book) => 
  {
    const currentBorrows = book.borrows;

    currentBorrows.forEach((borrow) => 
    {
      if(borrow.id === id)
        totalBorrows++;
    });
  });
 
  return totalBorrows;
}

function getBooksPossessedByAccount(account, books, authors)
{


  let rentedBooks = books.filter(book => book.borrows.find(borrowedBook => borrowedBook.returned == false && borrowedBook.id == account.id))
  rentedBooks.map(book =>
    {
    book.author = authors.find(a => a.id == book.authorId)
    return book;
    });

 return rentedBooks;


}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
