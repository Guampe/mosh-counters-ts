import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value
    //en tutorial en lugar count ponen value
  };

  //  constructor() {
  //    super();
  //    this.handleIncrement = this.handleIncrement.bind(this);
  //  }
  // Todo esto lo reemplaza el arrow funtion del handleIncrement

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
    //...................en tutorial en lugar count ponen value
    //obj.method();
    //function();
  };

  render() {
    return (
      <div>
        <h4>{this.props.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          + Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero Pollitos" : count;
  }
}

export default Counter;
