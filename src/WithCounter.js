import React from "react";

const UpdatedComponent = OriginalComponent => {
  class NewComponent extends React.Component {
    constructor() {
      super();
      this.state = {
        count: 0
      };
      this.increamentCount = this.increamentCount.bind(this);
    }
    increamentCount() {
      this.setState(prevState => ({
        count: prevState.count + 1
      }));
    }
    render() {
      return (
        <OriginalComponent
          increamentCount={this.increamentCount}
          count={this.state.count}
        />
      );
    }
  }
  return NewComponent;
};

export default UpdatedComponent;
