import React from "react";
import ReactDom from "react-dom";

function Greetings() {
  return (
    <div>
      <h1>hii all....</h1>
    </div>
  );
}

const Greeting = () => {
  return <div></div>;
};

ReactDom.render(<Greetings />, document.getElementById("root"));
