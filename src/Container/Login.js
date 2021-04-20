import { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import './login.css';
import '../styles/contact_styles.css'
import '../styles/contact_responsive.css'
import '../plugins/font-awesome-4.7.0/css/font-awesome.min.css'

class Login extends Component {
    state = {
        Username: "",
        Password: ""

    }
    sendUserData = (e) => {
        e.preventDefault();
        // const data = {
        //     Username :this.state.Username,
        //     Password :this.state.Password
        // }
        axios.post("http://localhost:900/user/login", this.state)
            .then((response) => {
                console.log(response);
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('userType', 'artist')
                window.location.href = "/artist";
                this.setState({
                    loginChk: true
                })

            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    render() {
        return (
            <div class="contact_form_section">
                <div class="container">
                    <div class="row">
                        <div class="col">

                            <div class="contact_form_container">

                                <h3 className="bg-light p-4" id="projectAnchor">!! Login Form !!</h3>
                                <form >
                                    <div className="form-icon">
                                        <span><i className="icon icon-user"></i></span>
                                    </div>
                                    <div className="form-group">
                                        <label>Username : <input type="text" value={this.state.Username}
                                            onChange={(event) => { this.setState({ Username: event.target.value }) }} /></label>
                                    </div>
                                    <div className="form-group">
                                        <label>Password : <input type="password" value={this.state.Password}
                                            onChange={(event) => { this.setState({ Password: event.target.value }) }} /></label>
                                    </div>
                                    <div className="form-group">
                                        <h3><button onClick={this.sendUserData} href="/artist">
                                            Login</button>
                                        </h3>
                                    </div>
                                    <h3>Do Not Have an Accout ?<Link to="/register">Signup</Link></h3>
                                </form>

                            </div>

                        </div>
                    </div>
                </div>
            </div>







            //     <div className="registration-form">
            //            <form>
            //                <div className="form-icon">
            //                    <span><i className="icon icon-user"></i></span>
            //                </div>
            //                <div className="form-group">
            //                <p>Username : <input type="text" value={this.state.Username}
            //     onChange={(event)=>{this.setState({Username : event.target.value})}}/></p>
            //                </div>
            //                <div className="form-group">
            //                <p>Password : <input type="text" value={this.state.Password} 
            //    onChange={(event)=>{this.setState({Password : event.target.value})}}/></p>
            //                </div>
            //                <div className="form-group">
            //                <p><input type="submit" onClick={this.sendUserData}/>
            //                <Link to ={"/artist"}></Link>
            //                  </p>
            //                </div>
            //            </form>
            //            <div className="social-media">
            //                <h5>Sign up with social media</h5>
            //                <div class="social-icons">
            //                    <a href="#"><i className="icon-social-facebook" title="Facebook"></i></a>
            //                    <a href="#"><i className="icon-social-google" title="Google"></i></a>
            //                    <a href="#"><i className="icon-social-twitter" title="Twitter"></i></a>
            //                </div>
            //            </div>
            //        </div>     


        )
    }
}
export default Login