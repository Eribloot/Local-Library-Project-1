function getTotalBooksCount(books) 
{
  return books.length;
}

function getTotalAccountsCount(accounts)
{
  return accounts.length;
}

function getBooksBorrowedCount(books)
{
  let totalBorrowed = 0;

 books.forEach((book) => 
 {
  book.borrows[0].returned == false ? totalBorrowed++ : totalBorrowed += 0;
 });
 
  return totalBorrowed;
}

function getMostCommonGenres(books)
{
  let genresObj = {};
  let genres = books.map((book) => book.genre);

  for(const book of books)
  {
    genresObj[book.genre] ? (genresObj[book.genre] += 1) : (genresObj[book.genre] = 1);
  }

  let genresList = [];

  for(let i = 0; i < Object.keys(genresObj).length; i++)
  {
    genresList.push({name: Object.keys(genresObj)[i], count: Object.values(genresObj)[i]});
  }

 return genresList.sort((genreA, genreB) => (genreA.count > genreB.count ? -1 : +1)).slice(0,5);

 
}

function getMostPopularBooks(books)
{
  const topBooks = [];
  const bNames = books.map((book) => book.title);
  const bCount = books.map((book) => book.borrows.length);

  for(let i = 0; bNames.length > i; i++)
  {
    topBooks.push({name: bNames[i], count: bCount[i]});
  };

  return topBooks.sort((bookA, bookB) => (bookA.count > bookB.count ? -1 : 1)).slice(0, 5);
}

function getMostPopularAuthors(books, authors)
{
  const topAuthors = [];

  authors.forEach((author) => 
  {
    let num = 0;
    books.forEach((book) => 
    {
      if(book.authorId === author.id)
        num += book.borrows.length;
    });

    topAuthors.push({name: `${author.name.first} ${author.name.last}`, count: num});
  });

  topAuthors.sort((authorA, authorB) => authorB.count - authorA.count);
  
  return topAuthors.slice(0,5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
