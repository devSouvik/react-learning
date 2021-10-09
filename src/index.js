import React from "react";
import ReactDOM from "react-dom";

function BookList() {
  return (
    <div>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </div>
  );
}

function Book() {
  return (
    <div align="center">
      <Image />
      <BookName />
      <Author />
      <TimesSold />
      <Price />
    </div>
  );
}

function Image() {
  return (
    <div>
      <img
        src="https://images-eu.ssl-images-amazon.com/images/I/51T8OXMiB5L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
        alt="Book image"
      />
    </div>
  );
}

function BookName() {
  return <p>Ikigai: The Japanese secret to a long and happy life</p>;
}

function Author() {
  return <h5>Hector Gracia</h5>;
}

function TimesSold() {
  return <p>23,998 times sold</p>;
}

function Price() {
  return <p>Rs. 230</p>;
}

// const Greeting = () => {
//   return document, createElement("h1", {}, "hello world");
// };

ReactDOM.render(<BookList />, document.getElementById("root"));
