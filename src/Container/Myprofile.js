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
            <div className="container">
            <div className="row">
       
                {
                    this.state.profile.map((myprofile)=>{
                        return(
                            // <p>{myartist.FullName}</p>
                            <div className="col-md-3">
                        
                                <h2>{myprofile.FullName}</h2>
                                <p>{myprofile.Address}</p>
                                <p>{myprofile.PhoneNo}</p>
                         
                                <button onClick={this.deleteProfile.bind(this, myprofile._id)}>Delete</button>
                                <p><Link to={"/updateMyArtist/:id/" + myprofile._id}>Update</Link></p>
 
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