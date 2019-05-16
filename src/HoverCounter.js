import React from "react";
import UpdatedComponent from "./WithCounter";

class HoverCounter extends React.Component {
  render() {
    const { increamentCount, count } = this.props;
    return (
      <div
        style={{
          backgroundColor: "#f7f7f7",
          marginTop: "50px",
          padding: "20px"
        }}
        onMouseOver={increamentCount}
      >
        Hovered {count} times
      </div>
    );
  }
}
export default UpdatedComponent(HoverCounter);
