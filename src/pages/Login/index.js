import React, { useContext ,useState} from 'react'
import Button from '../../components/Button/Button'
import { UserContext } from '../../context/UserContext'
import {useHistory} from 'react-router-dom'


function Login() {

  let {user} = useContext(UserContext);
  const [username, setUsername] = useState("")
  const [first_name, setFirstname] = useState("")
  const [last_name,setLastname] = useState("")
  const history = useHistory();


  const handleOnChangeFirstname = (e) => setFirstname(e.target.value)
  const handleOnChangeLastname = (e) => setLastname(e.target.value)
  const handleOnChangeUsername = (e) => setUsername(e.target.value)
    
  const handleSubmit = (e) => {    
    e.preventDefault();   
    if(username){ 
        
      localStorage.setItem("username", JSON.stringify(username));

      user = {
        first_name : first_name,
        last_name:last_name,
        username:username,
        id : 1
      }
      
      history.push({
        pathname : "/chat",
      })

    }else{
       alert("this form required")
     }    

  }
  return (
    <form className="login-form">
        <input placeholder="User Name" name = "username" className ="login-input"onChange={handleOnChangeUsername}></input>
        <br></br>
        <input placeholder ="First Name" name="firstname" className ="login-input" onChange={handleOnChangeFirstname}></input>
        <br></br>
        <input placeholder = "Last Name" name ="lastname" className ="login-input" onChange={handleOnChangeLastname}></input>
        <br></br> 
        <Button type="login" onclick={handleSubmit}></Button>
        <br></br>   
              
    </form>
  )
}

export default Login

/*
class Login extends React.Component {
    constructor(props){
      super(props)
      this.state = {               
        user : [{
          username : "",
          firstname : "",
          lastname : ""
        }],
        redirect : false             
      }       
    }


    
    handleOnChangeUsername = (e) => {
      this.setState({
        [e.target.name] : e.target.value
      })
    }     
    
  
    handleSubmit = (e) => {
      
    e.preventDefault();   
    let {user} = this.state
    if(this.state.username){ 
      
      
      localStorage.setItem("username", JSON.stringify(this.state.username));
      user.push({username : this.state.user.username,firstname:this.state.user.firstname})
      
      this.props.history.push({
        pathname : "/chat",
        state: {username : this.state.username}
      })

    }else{
       alert("this form required")
     }    
    }
    render(){
        
        return(
          <form className="login-form">
            <input placeholder="User Name" name = "username" className ="login-input"onChange={this.handleOnChangeUsername}></input>
            <br></br>
            <input placeholder ="First Name" name="firstname" className ="login-input" onChange={this.handleOnChangeUsername}></input>
            <br></br>
            <input placeholder = "Last Name" name ="lastname" className ="login-input" onChange={this.handleOnChangeUsername}></input>
            <br></br> 
            <Button type="login" onclick={this.handleSubmit}></Button>
            <br></br>   
              
          </form>
        )
       
       
    } 
}

export default Login
*/