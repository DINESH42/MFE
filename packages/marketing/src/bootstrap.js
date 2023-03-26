import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const Marketing = (ele) => {
  ReactDOM.render(<App />, ele);
  //   ele.innerHTML = "Hi There";
};

if (process.env.NODE_ENV === "development") {
  const ele = document.querySelector("#dev-marketing");
  if (ele) {
    Marketing(ele);
  }
}

export { Marketing };
