import { Component } from "react";
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
class Myprofile extends Component {
    state = {
        FullName: "",
        Address: "",
        PhoneNo: "",
        Username: "",
        Password: "",
        id: this.props.match.params.id,
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }
    componentDidMount() {
        console.log(this.state.id)
        axios.get("http://localhost:900/artist/single/" + this.state.id)

            .then((response) => {
                console.log(response)
                this.setState({
                    FullName: response.data.FullName,
                    Address: response.data.Address,
                    PhoneNo: response.data.PhoneNo,
                    Username: response.data.Username,
                    Password: response.data.Password,
                })

            })
            .catch((err) => {

            })

    }

    render() {
        return (
            <div class="contact_form_section">
                <div class="container">
                    <div class="row">
                        <div class="col">

                            <div class="contact_form_container">

                                <h3 className="bg-light p-4" id="projectAnchor">!! My Profile !!</h3>
                                <form>

                                    <label>
                                        User Name
    <input type="text"
                                            value={this.state.FullName}
                                            name="FullName" />
                                    </label>
                                    <label>
                                        Address
    <input type="text"
                                            value={this.state.Address}
                                            name="Address" />
                                    </label>
                                    <label>
                                        Phone Number
    <input type="text"
                                            value={this.state.PhoneNo}
                                            name="PhoneNo" />
                                    </label>
                                    <label>
                                        Username
    <input type="text"
                                            value={this.state.Username}
                                            name="Username" />
                                    </label>
                                    <label>
                                        Password
    <input type="text"
                                            value={this.state.Password}
                                            name="Password" />
                                    </label>
                                    <button type="submit" onClick={this.updateArtist}>Update</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Myprofile