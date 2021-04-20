import React, { Component } from "react";
import axios from "axios";
import Images from "../Images/add.jpg";
class EditProfile extends Component {
    changeHandler = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };
  
    imageHandler = (e) => {
      e.preventDefault();
      let files = e.target.files[0];
      this.setState({ files: files }, () => {
        console.log(this.state.files);
      });
    };
  
    updateProfile = (e) => {
      e.preventDefault();
      const data = new FormData();
  
      data.append("FullName", this.state.FullName);
      data.append("Address", this.state.Address);
      data.append("PhoneNo", this.state.PhoneNo);
      data.append("Username", this.state.Username);
      data.append("Password", this.state.Password);
      data.append("email", this.state.email);
      data.append("Uimage", this.state.files);
  
      axios
        .put("http://localhost:900/register/update" + this.state.id, data)
        .then((response) => {
          console.log(response);
          window.location.replace("/viewProfile");
        })
        .catch((err) => {
          console.log(err.response);
        });
    };
  
    state = {
      FullName: null,
      Address: null,
      PhoneNo: null,
      Username: null,
      Password: null,      
      Uimage: [],
      id: null,
    };
  
    componentDidMount() {
      this.setState({ id: localStorage.getItem("id") }, () => {
        axios
          .get("http://localhost:900/register/single" + this.state.id)
          .then((response) => {
            console.log(response);
            this.setState({
              FullName: response.data.FullName,
              Address: response.data.Address,
              PhoneNo: response.data.PhoneNo,
              Username: response.data.Username,
              Password: response.data.Password,
             
              Uimage: response.data.Uimage,
            });
          })
          .catch((err) => {
            console.log(err.response);
          });
      });
    }
  
    render() {
      return (
        <div class="contact_form_section">
        <div class="container">
            <div class="row">
                <div class="col">

                    <div class="contact_form_container">

                        <h3 className="bg-light p-4" id="projectAnchor">!!Your Profile !!</h3>
                <img
                  src={`http://localhost:900/${this.state.Uimage}`}
                  className="img-fluid rounded-circle hoverable"
                  style={{ height: "100px", width: "100px", objectFit: "cover" }}
                  alt=""
                />
                <br />
                <input
                  type="file"
                  class="form-control"
                  onChange={this.imageHandler.bind(this)}
                />
  
                <br />
                <div className="form-group">
                <label class="form-label">Full Name
                <input
                  type="text"
                  class="form-control text-center"
                  value={this.state.FullName}
                  name="firstName"
                  onChange={this.changeHandler}
                />
               </label>
               </div>
               <div className="form-group">
               <label class="form-label">Address
                <input
                  type="text"
                  class="form-control text-center"
                  value={this.state.Address}
                  name="lastName"
                  onChange={this.changeHandler}
                />
               
            </label>
            </div>
            <div className="form-group">
            <label class="form-label">phone Number
                <input
                  type="number"
                  class="form-control text-center"
                  value={this.state.PhoneNo}
                  name="age"
                  onChange={this.changeHandler}
                />
              </label>
              </div>
              <div className="form-group">
              <label class="form-label">Username
                <input
                  type="text"
                  class="form-control text-center"
                  value={this.state.Username}
                  name="gender"
                  onChange={this.changeHandler}
                />
               </label>
               </div>
               <div className="form-group">
               <label class="form-label">Password
                <input
                  type="number"
                  value={this.state.Password}
                  name="phoneNumber"
                  onChange={this.changeHandler}
                  disable
                  class="form-control text-center"
                />
                </label>
          </div>
                      
                <button
                  type="submit"
                  onClick={this.updateProfile}
                  class="btn btn-info btn-block mb-4"
                >
                  Update Profile
                </button>
           
          </div>
        </div>
        </div>
        </div>
        </div>
        

      );
    }
  }
  
  export default EditProfile;