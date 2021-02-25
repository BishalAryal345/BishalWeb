import { Component } from "react";
import axios from 'axios';
class Login extends Component{
    state={
        Username : "",
        Password : ""
    }
    sendUserData=()=>{
        const data = {
            Username :this.state.Username,
            Password :this.state.Password
        }
        axios.post("http://localhost:90/user/login", data)
        .then(response=>{
            console.log(response)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    render(){
        return(
<div>
    <p>Username : <input type="text" value={this.state.Username}
     onChange={(event)=>{this.setState({Username : event.target.value})}}/></p>
    <p>Password : <input type="text" value={this.state.Password} 
    onChange={(event)=>{this.setState({Password : event.target.value})}}/></p>
    <p><input type="submit" onClick={this.sendUserData}/>  </p>
</div>
        )
    }
}
export default Login