import React,{ useState, useEffect } from "react";
import Axios from "axios";
import Loader from "../../loader"

const Home = ()=>  {


const [userInfos, setUserInfos] = useState([])
const [loading, setLoading] = useState(true)


useEffect(()=>{

    Axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res=>{
        let userInfos = res.data;
        setUserInfos(userInfos)
        setLoading(false)
    })
    .catch(err=>{
      setLoading(false)
    })
  },[])
 

    if (loading) return(<Loader/>);
    if (!userInfos.length) return (
      <div>
        <span>No Users Found </span>
      </div>
    )

    
    return(

      <div className="userInfoContainer">
        {
          userInfos.map((userInfo,id)=>{
            return (
              <div className="userInfoCart" key={id}>
                <span>
                  <strong>User Name:</strong>  {userInfo.name}
                </span>
                <span>
                  <strong>Phone:</strong>     {userInfo.phone}
                </span>
                <span>
                  <strong>Email:</strong>   {userInfo.email}
                </span>
                <span>
                  <strong>Website:</strong>   {userInfo.website}
                </span>
                <span>
                  <strong>Company Name:</strong>  {userInfo.company["name"]}
                </span>
              </div>
            )
          })
        }
      </div>
    )
  

}




export default Home;
