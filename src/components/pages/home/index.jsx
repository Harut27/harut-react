import React,{Component} from "react";
import Axios from "axios";
import Loader from "../../loader"

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      userInfos: [],
      loading: true
    }
  }



  componentDidMount(){
    Axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res=>{
        let userInfos = res.data;
        this.setState({userInfos, loading: false})
    })
    .catch(err=>{
      this.setState({
        loading: false
      });
    })
    
  }
  render(){
    const {loading} = this.state;
    const { userInfos } = this.state;

    if (loading) return(<Loader/>);
    if (!userInfos.length) return (
      <div>
        <span>No Users Found </span>
      </div>
    )

    // console.log(users)
    
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

}




export default Home;
