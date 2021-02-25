

import { Component } from "react";

import axios from 'axios';

class register extends Component{
    state ={
        FullName : " ",
        Address : " ",
        PhoneNo : " ",
        Username : " ",
        Password : " "
    }
    sendUserData=()=>{
        const data ={
            FullName : this.state.FullName,
            Address : this.state.Address,
            PhoneNo :this.state.PhoneNo,
            Username :this.state.Username,
            Password :this.state.Password
        }
        axios.post("http://localhost:90/register_insert", data)
        .then()
        .catch(err=>{
            console.log(err)
        })
    }
    render(){
        return(
            
<div>
    <p>FullName : <input type="text" value={this.state.FullName} 
    onChange={(event)=>{this.setState({FullName : event.target.value})}}/></p>
    <p>Address : <input type="text" value={this.state.Address} 
    onChange={(event)=>{this.setState({Address : event.target.value})}}/></p>
    <p>PhoneNo : <input type="text" value={this.state.PhoneNo} 
    onChange={(event)=>{this.setState({PhoneNo : event.target.value})}}/></p>
    <p>Username : <input type="text" value={this.state.Username}
     onChange={(event)=>{this.setState({Username : event.target.value})}}/></p>
    <p>Password : <input type="text" value={this.state.Password} 
    onChange={(event)=>{this.setState({Password : event.target.value})}}/></p>
    <p><input type="submit" onClick={this.sendUserData}/>  </p>
</div>
        )
    }
}
export default register