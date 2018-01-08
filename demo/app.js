/*global document:false*/
import React from "react";
import ReactDOM from "react-dom";
import { R0bsonReactComponent } from "../src/index";

class App extends React.Component {
  render() {
    return (
      <div className="demo">
        <R0bsonReactComponent />
      </div>
    );
  }
}

const content = document.getElementById("content");

ReactDOM.render(<App/>, content);
