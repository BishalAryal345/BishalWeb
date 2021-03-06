import { Component } from "react";
import axios from 'axios';
import {Route, Link} from 'react-router-dom';
class Artist extends Component{
    state ={
        artist: [] ,
        config : {
            headers: {'authorization' : `Bearer ${localStorage.getItem('token')}`}
        }
        } 
        componentDidMount(){
            axios.get("http://localhost:90/artist/show")
       .then((response)=>{
           console.log(response.data)
            this.setState({
                artist : response.data
            })

       })
       .catch()     
    }
deleteArtist=(aid)=>{
    axios.delete("http://localhost:90/artist/delete/" + aid, this.state.config )
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
                
     <h4 className="bg-light p-4" id="projectAnchor">!! Pick Up The Suitable And Best Artists From Here !!</h4>
            <div className="card-deck p-2">               
       
                {
                    this.state.artist.map((myartist)=>{
                        return(
                            // <p>{myartist.FullName}</p>
                            <div className="col-md-4 p-3">
                            <div className="card">
                               
                            <div className="card-body p-0 ">
                            <img src={"http://localhost:90/" + myartist.Pimage} />
                            <h4 className="card-title p-2">{myartist.Profession}</h4>
                            <h3 className="card-title p-2">{myartist.FullName}</h3>
                            <h6 className="card-text p-3">
                       {myartist.Description}
                    </h6>
                    
                    <div className="text-center p-0">
                        {/* <p class="gold-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star black-star" aria-hidden="true"></i>
                        </p> */}
                        <h4>${myartist.PriceRate} per day</h4>
                      
                  
                    
                           <p> <a className="btn btn-sm btn-dark p-3" href="/Aboutus">Learn More</a>
                            <a className="btn btn-outline-info p-3" href="#">!! Hire Now !!</a>
                           </p>
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
export default Artist