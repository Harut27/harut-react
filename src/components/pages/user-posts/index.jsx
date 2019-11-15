import React, { useEffect, useState, useCallback, useRef } from "react";
import Axios from "axios";
import Loader from "../../loader";
import "./style.scss";

const UserPosts = ({ match }) => {
  //  COMPONENTDIDMOUNT
  // useEffect(() => {
  //   getSinglePost();
  // },[]);

  //  COMPONENTDIDUPDATE
  // useEffect(() => {
  //   getSinglePost();
  // });

  //  COMPONENTWILLUNMOUNT
  // useEffect(() => {
  //   getSinglePost();
  //   return () => {
  //    console.log('yes')
  //   }
  // });

  const [userInfo, setUserInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const userInfoContainer = useRef(null); // erb uzumem vercnem konkret element
  useEffect(() => {
    getSinglePost();
  }, []);

  useEffect(() => {
    if (userInfoContainer.current) {
      console.log(userInfoContainer.current.getBoundingClientRect());
    }
  });
  function getSinglePost() {
    const { id } = match.params;
    Axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        console.log("here");
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }

  if (loading) return <Loader />;
  if (!Object.keys(userInfo).length) return <div>Files Note Found</div>;
  return (
    <div className="userInfoList" ref={userInfoContainer}>
      <span>{userInfo.name}</span>
      <span>{userInfo.phone}</span>
      <span>{userInfo.website}</span>
      <span>ID {userInfo.id}</span>
      <span>{userInfo.address && userInfo.address.city}</span>
      <span>{userInfo.address && userInfo.address.suite}</span>
      <span>{userInfo.address && userInfo.address.zipcode}</span>
      <span>{userInfo.company && userInfo.company.catchPhrase}</span>
      <span>{userInfo.address && userInfo.address.suite}</span>
    </div>
  );
};
export default UserPosts;
