import React,{Component} from "react";
import Axios from "axios";



class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      userInfos: []
    }
  }



  componentDidMount(){
    Axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res=>{
        let userInfos = res.data;
        this.setState({userInfos})
    })
  }

  render(){
    const { userInfos } = this.state;
    
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



// const Home = props => {
//   return <section>HOME</section>;
// };

export default Home;
