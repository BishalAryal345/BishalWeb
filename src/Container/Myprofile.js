import { Component } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

class Myprofile extends Component{
    state ={
        profile: [] 
        }
        componentDidMount(){
            axios.get("http://localhost:90/register/show")
       .then((response)=>{
           console.log(response.data)
            this.setState({
                profile : response.data
            })

       })
       .catch()     
    }
    deleteProfile=(aid)=>{
        axios.delete("http://localhost:90/register/delete/" + aid, this.state.config )
        .then((response)=>{
            console.log(response.data.message )
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }


    render(){
        return(
            <div className="container-fluid ">
                
     <h4 className="bg-light p-4" id="projectAnchor">!! Your Profile  !!</h4>
            <div className="card-deck p-2">               
       
                {
                    this.state.profile.map((myprofile)=>{
                        return(
                            // <p>{myartist.FullName}</p>
                            
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img
        src="https://mdbootstrap.com/img/new/standard/city/044.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title"></h5>
        <p class="card-text">
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  </div>
                        
                        )
                    })
                }
                  </div>
               
            </div>
        )
    }
}
export default Myprofile