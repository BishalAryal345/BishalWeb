import { Component } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../Container/login.css';
class Adminlogin extends Component{
    state={
        Username : "",
        Password : ""
    }
    sendUserData=(e)=>{
        e.preventDefault();
        // const data = {
        //     Username :this.state.Username,
        //     Password :this.state.Password
        // }
        axios.post("http://localhost:900/admin/login", this.state)
        .then((response)=>{
            console.log(response);
            this.setState({
                loginChk: true
            })
            localStorage.setItem('token' , response.data.token)
            localStorage.setItem('userType', 'admin')
            window.location.href="/adminArtist"
        
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }
    render(){
        return(     
            <div className="registration-form">
                   <form>
                       <div className="form-icon">
                           <span><i className="icon icon-user"></i></span>
                           <h4>Admin Login Here !!</h4>
                       </div>
                       <div className="form-group">
                       <p>Username : <input type="text" value={this.state.Username}
            onChange={(event)=>{this.setState({Username : event.target.value})}}/></p>
                       </div>
                       <div className="form-group">
                       <p>Password : <input type="text" value={this.state.Password} 
           onChange={(event)=>{this.setState({Password : event.target.value})}}/></p>
                       </div>
                       <div className="form-group">
                       <p><input type="submit" onClick={this.sendUserData}/>
                       <Link to={"/adminArtist"}> </Link>  </p>
                       </div>
                   </form>
                   <div className="social-media">
                       <h5>Sign up with social media</h5>
                       <div class="social-icons">
                           <a href="#"><i className="icon-social-facebook" title="Facebook"></i></a>
                           <a href="#"><i className="icon-social-google" title="Google"></i></a>
                           <a href="#"><i className="icon-social-twitter" title="Twitter"></i></a>
                       </div>
                   </div>
               </div>     
           
         
        )
    }
}
export default Adminlogin