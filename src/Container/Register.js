import { event } from "jquery";
import { Component } from "react";
import Container from "./Container";

class register extends Component{
    state ={
        FullName : " ",
        Address : " ",
        PhoneNo : " ",
        Username : " ",
        Password : " "
    }
    render(){
        return(
            
<form>
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
    <p><input type="submit"/>  </p>
</form>
        )
    }
}
export default register