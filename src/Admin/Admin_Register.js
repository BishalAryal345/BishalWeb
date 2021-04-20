import { Component } from "react";
import '../Container/Register.css';
import axios from 'axios';

class Adminregister extends Component {
    state = {
        FullName: "",
        Username: "",
        Password: ""
    }
    sendUserData = () => {
        const data = {
            FullName: this.state.FullName,
            Username: this.state.Username,
            Password: this.state.Password
        }
        axios.post("http://localhost:900/admin/insert", data)
            .then()
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        return (
            <div class="contact_form_section">
                <div class="container">
                    <div class="row">
                        <div class="col">

                            <div class="contact_form_container">

                                <h3 className="bg-light p-4" id="projectAnchor">!! Admin Registration Form !!</h3>
                                <form>
                                    
                                    <div class="form-group">
                                        <label>FullName:<input type="text" value={this.state.FullName}
                                            onChange={(event) => { this.setState({ FullName: event.target.value }) }} /></label>
                                    </div>
                                    <div class="form-group">
                                        <label>Username:<input type="text" value={this.state.Username}
                                            onChange={(event) => { this.setState({ Username: event.target.value }) }} /></label>
                                    </div>
                                    <div class="form-group">
                                        <label>Password:<input type="text" value={this.state.Password}
                                            onChange={(event) => { this.setState({ Password: event.target.value }) }} /></label>
                                    </div>
                                    <div class="form-group">
                                        <h3><input type="submit" onClick={this.sendUserData} />  </h3>
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
export default Adminregister