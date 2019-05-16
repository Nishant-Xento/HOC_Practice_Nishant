import React from "react";
import UpdatedComponent from "./WithCounter";

class ClickCounter extends React.Component {
  render() {
    const { increamentCount, count } = this.props;
    return (
      <div>
        <button onClick={increamentCount}>Clicked {count} times</button>
      </div>
    );
  }
}
export default UpdatedComponent(ClickCounter);
