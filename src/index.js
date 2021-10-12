import React from "react";
import ReactDOM from "react-dom";

import "./style.css";

let firstBook = {
  bookprice: "Rs. 230",
  booktitle: "Ikigai: The Japanese secret to a long and happy life",
  bookimg:
    "https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY327_FMwebp_QL65_.jpg",
  bookauthor: "Hector Gracia",
  booksold: "23,998 times sold",
};

const secondBook = {
  bookprice: "Rs. 160",
  booktitle: "The Psychology of Money",
  bookimg:
    "https://m.media-amazon.com/images/I/81cpDaCJJCL._AC_UY327_FMwebp_QL65_.jpg",
  bookauthor: "Morgan Housel ",
  booksold: "15,000 times sold",
};

function BookList() {
  return (
    <div className="bookList">
      <Book
        price={firstBook.bookprice}
        title={firstBook.booktitle}
        img={firstBook.bookimg}
        author={firstBook.bookauthor}
        sold={firstBook.booksold}
      />
      <Book
        price={secondBook.bookprice}
        title={secondBook.booktitle}
        img={secondBook.bookimg}
        author={secondBook.bookauthor}
        sold={secondBook.booksold}
      />
    </div>
  );
}

function Book(props) {
  return (
    <div className="book">
      <img id="image-id" src={props.img} alt="Book image" />
      <p>{props.title}</p>
      <h5>by {props.author}</h5>
      <p>{props.sold}</p>
      <p id="priceId">{props.price}</p>
    </div>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
