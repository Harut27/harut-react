import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Loader from "../../loader";

import "./style.scss";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true
    };
  }

  componentDidMount() {
    this.axiosCancelSource = axios.CancelToken.source();
    axios
      .get("https://jsonplaceholder.typicode.com/posts", {
        cancelToken: this.axiosCancelSource.token
      })
      .then(res => {
        console.log(res, "res");
        let users = res.data;
        this.setState({ users, loading: false });
      })
      .catch(err => {
        this.setState({
          loading: false
        });
      });
  }

  componentWillUnmount() {
    this.axiosCancelSource.cancel("Component unmounted.");
  }

  render() {
    const { users } = this.state;
    const { loading } = this.state;

    if (loading) return <Loader />;
    if (!users.length)
      return (
        <div>
          <span>No users found</span>
        </div>
      );
    return (
      <div className="user-carts">
        <span className="total-user-info">Users Count: {users.length}</span>
        {users.map((user, id) => {
          return (
            <div className="user-cart" key={id}>
              <span className="post-id">Post id {user.id}</span>
              <span className="user-title">User Title - {user.title}</span>
              <span className="user-body">User Body - {user.body}</span>
              <span className="user-id">
                <Link className="user-id" to={`user/${user.userId}/posts`}>
                  User Number #{user.userId}
                </Link>
              </span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Posts;

// class Posts extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }

//   // LIFECYCLES

//   componentDidMount() {               //  WORKS WHEN COMPONENT IS READY TO USE
//     console.log("component is mounted");
//     axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
//       console.log(res.data, "res");
//     });
//   }
//   componentWillUpdate() {
//     console.log("component will be updated");
//   }
//   componentDidUpdate() {  //  WORKS WHEN STATE OR PROPS IS CHANGED
//     console.log("component is updated");
//   }

//   componentWillUnmount() {   // WORKS WHEN COMPONENT IS DEAD
//     console.log("component is dead");
//     window.addEventListener("click", this.sayWow);

//     // window.removeEventListener("click", this.sayWow);
//   }

//   componentWillReceiveProps(nextProps) {
//     console.log(nextProps, this.props);
//   }

//   sayWow = () => {
//     // alert("Do You want leave this page?");
//   };

//   handleCountChanage = () => {
//     this.setState(     // stipuma noric rend lini u poxi state @  ( ev kara noric rend lini erb ira papai props@ poxvi)
//       {
//         count: this.state.count + 1
//       },
//       () => {
//         // CALLBACK FUNCTION FOR GETTING CHANGED STATE VALUE
//         console.log(this.state.count);
//       }
//     );
//   };

//   render() {
//     const { count } = this.state;
//     return (
//       <div>
//         <span>{count}</span>

//         <button onClick={this.handleCountChanage}>Click</button>
//       </div>
//     );
//   }
// }

// export default Posts;
