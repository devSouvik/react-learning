import React from "react";
import ReactDOM from "react-dom";

import "./style.css";

function BookList() {
  return (
    <div className="bookList">
      <Book />
    </div>
  );
}

function Book() {
  const price = "Rs. 230";
  const title = "Ikigai: The Japanese secret to a long and happy life";
  const author = "Hector Gracia";
  const sold = "23,998 times sold";
  return (
    <div className="book">
      <img
        id="image-id"
        src="https://images-eu.ssl-images-amazon.com/images/I/51T8OXMiB5L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
        alt="Book image"
      />
      <p>{title}</p>
      <h5>{author}</h5>
      <p>{sold}</p>
      <p id="priceId">{price}</p>
    </div>
  );
}

// function NextPage() {
//   return <a href="next.js">Click here</a>;
// }

ReactDOM.render(<BookList />, document.getElementById("root"));
