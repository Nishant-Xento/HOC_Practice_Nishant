import React from "react";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";

class App extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <ClickCounter />
        <HoverCounter />
      </div>
    );
  }
}

export default App;
