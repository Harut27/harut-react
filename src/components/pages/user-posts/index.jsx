import React, { Component } from "react";
import Axios from "axios";
import Loader from "../../loader";
import "./style.scss"

class UserPosts extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userInfo: null,
      loading: true
    }
  }

  componentDidMount() {

    const { id } = this.props.match.params;

    Axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => {
        let userInfo = res.data;
        this.setState({
          userInfo,
          loading: false
        })
      }).catch(() => {
        this.setState({
          loading: false
        })
      })
  }


  render() {
    const { userInfo, loading } = this.state;

    if (loading) return (<Loader />)
    if (null == userInfo) return (
      <div>
        Files Note Found
      </div>
    )

    return (

      <div className="userInfoList">
        <span>
          {userInfo.name}
        </span>
        <span>
          {userInfo.phone}
        </span>
        <span>
          {userInfo.website}
        </span>
        <span>
          ID {userInfo.id}
        </span>
        <span>
          {userInfo.address.city}
        </span>
        <span>
          {userInfo.address.suite}
        </span>
        <span>
          {userInfo.address.zipcode}
        </span>
        <span>
          {userInfo.company.catchPhrase}
        </span>
        <span>
          {userInfo.address.suite}
        </span>
      </div>
    );
  };

}
export default UserPosts;












// export const getAllUsers = () => {
//   //axios
// };
// export const getUserPosts = (userID) => {
//   //axios
// };
