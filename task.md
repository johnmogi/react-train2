1. create db - 15 minutes
2. server: books and ratings - add ratings
3. client restfull CRUD, classic

njoi

missing details for client:

inner join between 2 tables (for exampke fetch book names from id)
insert form
category routing
in on page refresh content

SELECT T.bookID, T.bookName, T.
  FROM Titles as T JOIN userRating as U
  ON E.id = S.employeeID
  WHERE S.employeeID =


INSERT INTO `titles` (`bookID`, `bookName`, `price`, `rating`) VALUES (NULL, 'the Hobbit', '250', '5');

INSERT INTO `userRating` (`reviewID`, `userName`, `review`, `reviewDate`, `bookID`) VALUES (NULL, 'johnmogi', 'absolutely fab, the movie was a downer for this ageless classic.', '2020-08-13', '1');

UPDATE titles SET bookName=[value-2],price=[value-3],rating=[value-4],category=[value-5] WHERE  bookID=[value-1]


INSERT INTO `userRating` (`reviewID`, `userName`, `review`, `reviewDate`, `bookID`) VALUES (NULL, 'johnmogi', 'best book imo', '2020-08-14', '3');
