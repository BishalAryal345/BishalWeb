import { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Container/login.css';
class Adminlogin extends Component {
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
        axios.post("http://localhost:900/admin/login", this.state)
            .then((response) => {
                console.log(response);
                this.setState({
                    loginChk: true
                })
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('userType', 'admin')
                window.location.href = "/adminArtist"

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

                                <h3 className="bg-light p-4" id="projectAnchor">!! Admin Login !!</h3>
                                <form>
            
                                    <div className="form-group">
                                        <label>Username : <input type="text" value={this.state.Username}
                                            onChange={(event) => { this.setState({ Username: event.target.value }) }} /></label>
                                    </div>
                                    <div className="form-group">
                                        <label>Password : <input type="text" value={this.state.Password}
                                            onChange={(event) => { this.setState({ Password: event.target.value }) }} /></label>
                                    </div>
                                    <div className="form-group">
                                        <h3><input type="submit" onClick={this.sendUserData} />
                                            <Link to={"/adminArtist"}> </Link>  </h3>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Adminlogin