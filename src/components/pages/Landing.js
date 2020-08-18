import React from "react";
import axios from "axios";

export default class Landing extends React.Component {
  constructor() {
    super();
    this.state = {
      customers: [],
    };
  }

  componentDidMount() {
    // axios.get()
  }

  render() {
    return (
      <div>
        <table>{}</table>
      </div>
    );
  }
}
