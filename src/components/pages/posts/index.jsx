import React, { Component } from "react";
import axios from "axios";
class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  // LIFECYCLES
  componentDidMount() {
    //  WORKS WHEN COMPONENT IS READY TO USE
    console.log("component is mounted");
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      console.log(res.data, "res");
    });
    // window.addEventListener("click", this.sayWow);
  }

  componentWillUpdate() {
    console.log("component will be updated");
  }
  componentDidUpdate() {
    //  WORKS WHEN STATE OR PROPS IS CHANGED
    console.log("component is updated");
  }

  componentWillUnmount() {
    // WORKS WHEN COMPONENT IS DEAD
    console.log("component is dead");
    // window.removeEventListener("click", this.sayWow);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps, this.props);
  }

  sayWow = () => {
    alert("wow");
  };

  handleCountChanage = () => {
    this.setState(
      {
        // stipuma noric rend lini u poxi state @  ( ev kara noric rend lini erb ira papai props@ poxvi)
        count: this.state.count + 1
      },
      () => {
        // CALLBACK FUNCTION FOR GETTING CHANGED STATE VALUE
        console.log(this.state.count);
      }
    );
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <span>{count}</span>

        <button onClick={this.handleCountChanage}>Click</button>
      </div>
    );
  }
}

export default Posts;
