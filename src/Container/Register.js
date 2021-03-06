import { Component } from "react";
import './Register.css';
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
        axios.post("http://localhost:90/register/insert", data)
        .then()
        .catch(err=>{
            console.log(err)
        })
    }
    render(){
        return(
            <div class="registration-form">
            <form>
                <div class="form-icon">
                    <span><i class="icon icon-user"></i></span>
                </div>
                <div class="form-group">
                <p>FullName:<input type="text" value={this.state.FullName} 
    onChange={(event)=>{this.setState({FullName:event.target.value})}}/></p>
                </div>

                <div class="form-group">
                    <p>Address:<input type="text" value={this.state.Address} 
    onChange={(event)=>{this.setState({Address:event.target.value})}}/></p>
                </div>
                <div class="form-group">    
                <p>PhoneNo:<input type="text" value={this.state.PhoneNo} 
    onChange={(event)=>{this.setState({PhoneNo:event.target.value})}}/></p>
                </div>
                <div class="form-group">
                <p>Username:<input type="text" value={this.state.Username}
     onChange={(event)=>{this.setState({Username:event.target.value})}}/></p>
                </div>
                <div class="form-group">
                <p>Password:<input type="text" value={this.state.Password} 
    onChange={(event)=>{this.setState({Password:event.target.value})}}/></p>
                </div>
                <div class="form-group">
                <p><input type="submit" onClick={this.sendUserData}/>  </p>
                </div>
            </form>
            <div class="social-media">
                <h5>Sign up with social media</h5>
                <div class="social-icons">
                    <a href="#"><i class="icon-social-facebook" title="Facebook"></i></a>
                    <a href="#"><i class="icon-social-google" title="Google"></i></a>
                    <a href="#"><i class="icon-social-twitter" title="Twitter"></i></a>
                </div>
            </div>
        </div>
            

        )
    }
}
export default register