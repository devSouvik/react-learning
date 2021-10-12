import React from "react";
import { Children } from "react";
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
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          facilis sed quisquam illo qui esse obcaecati hic, reiciendis suscipit
          voluptate.
        </p>
      </Book>
      <Book
        price={secondBook.bookprice}
        title={secondBook.booktitle}
        img={secondBook.bookimg}
        author={secondBook.bookauthor}
        sold={secondBook.booksold}
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
          tempore reiciendis sapiente dignissimos nisi eligendi modi facere
          consequatur iusto iure sed fugit, cum ipsa dolores molestias. Vel modi
          a quos!
        </p>
        <input type="button" value="Buy" />
      </Book>
    </div>
  );
}

function Book(props) {
  const { price, title, img, author, sold, children } = props;
  return (
    <div className="book">
      <img id="image-id" src={img} alt="Book image" />
      <h4>{title}</h4>
      {children}
      <h5>by {author}</h5>
      <p>{sold}</p>
      <p id="priceId">{price}</p>
    </div>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
