import { Component } from "react";
import { Link } from 'react-router-dom';
import './Register.css';
import axios from 'axios';

class register extends Component {
    state = {
        Uimage: "",
        FullName: "",
        Address: "",
        PhoneNo: "",
        Username: "",
        Password: ""
    }
    sendUserData = () => {
        const data1 = {
            FullName: this.state.FullName,
            Address: this.state.Address,
            PhoneNo: this.state.PhoneNo,
            Username: this.state.Username,
            Password: this.state.Password
        }
        const data = new FormData()

        data.append('Uimage', this.state.Uimage)
        data.append('FullName', this.state.FullName)
        data.append('Address', this.state.Address)
        data.append('PhoneNo', this.state.PhoneNo)
        data.append('Username', this.state.Username)
        data.append('Password', this.state.Password)

        axios.post("http://localhost:900/register/insert", data)
            .then()
            
            .catch(err => {
                console.log(err)
            })
    }
    imageHandler = (e) => {
        this.setState({
            Uimage: e.target.files[0]
        })
    };
    render() {
        return (
            <div class="contact_form_section">
                <div class="container">
                    <div class="row">
                        <div class="col">

                            <div class="contact_form_container">

                                <h3 className="bg-light p-4" id="projectAnchor">!! Registration Form !!</h3>
                                <form>
                                                                     
                                    <div class="form-group">
                                        <label>FullName:<input type="text" value={this.state.FullName}
                                            onChange={(event) => { this.setState({ FullName: event.target.value }) }} /></label>
                                    </div>

                                    <div class="form-group">
                                        <label>Address:<input type="text" value={this.state.Address}
                                            onChange={(event) => { this.setState({ Address: event.target.value }) }} /></label>
                                    </div>
                                    <div class="form-group">
                                        <label>PhoneNo:<input type="text" value={this.state.PhoneNo}
                                            onChange={(event) => { this.setState({ PhoneNo: event.target.value }) }} /></label>
                                    </div>
                                    <div class="form-group">
                                        <label>Username:<input type="text" value={this.state.Username}
                                            onChange={(event) => { this.setState({ Username: event.target.value }) }} /></label>
                                    </div>
                                    <div class="form-group">
                                        <label>Password:<input type="password" value={this.state.Password}
                                            onChange={(event) => { this.setState({ Password: event.target.value }) }} /></label>
                                    </div>
                                    <div class="form-group">
                                        <label>Upload Profile:<input type="file" placeholder="Upload Profile" name="Uimage"
                                            onChange={this.imageHandler} /></label>
                                    </div>
                                    <div class="form-group">
                                        <h3><button onClick={this.sendUserData}>Register</button>
                                                                               
                                </h3>
                                    </div>
                                    <h3>Already Have an Accout ? <Link to="/">Login</Link></h3>
                                </form>
                             
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        )
    }
}
export default register