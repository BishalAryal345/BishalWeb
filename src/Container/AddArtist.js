import { Component } from "react";
import './Register.css';
import axios from 'axios';

class addArtist extends Component{
    state ={
        Pimage: "",
        FullName : "",
        Address : "",
        Phone : "",
        Email : "",
        Profession : "",
        Description: "",
        PriceRate : ""
    }
    sendUserData=(e)=>{
        e.preventDefault();
        const data1 ={
            FullName : this.state.FullName,
            Address : this.state.Address,
            Phone :this.state.Phone,
            Email :this.state.Email,
            Profession :this.state.Profession,
            Pimage:this.state.Pimage,
            Description :this.state.Description,
            PriceRate :this.state.PriceRate
        }

        const data= new FormData() 

        data.append ('Pimage', this.state.Pimage)
        data.append ('FullName', this.state.FullName)
        data.append ('Email', this.state.Email)
        data.append ('Address', this.state.Address)
        data.append ('Phone', this.state.Phone)
        data.append ('Profession', this.state.Profession)
        data.append ('Description', this.state.Description)
        data.append ('PriceRate', this.state.PriceRate)
        axios.post("http://localhost:900/artist/insert", data)
        .then((response)=>{
         console.log(response)
         alert(response)
        })
        .catch(err=>{
            console.log(err.response)
            alert(err.response)
        })
    }
    imageHandler=(e)=>{
        this.setState({
            Pimage:e.target.files[0]
        })
    };
    render(){
        return(
            <div class="registration-form">
            <form>
                <div class="form-icon">
                    <span><i class="icon icon-user"></i></span>
                </div>
                <div class="form-group">
                <p>FullName:<input type="text" value={this.state.FullName} 
    onChange={(event)=>{this.setState({FullName:event.target.value})}}/></p>
                </div>

                <div class="form-group">
                    <p>Address:<input type="text" value={this.state.Address} 
    onChange={(event)=>{this.setState({Address:event.target.value})}}/></p>
                </div>
                <div class="form-group">
                <p>Phone:<input type="text" value={this.state.Phone} 
    onChange={(event)=>{this.setState({Phone:event.target.value})}}/></p>
                </div>
                <div class="form-group">
                <p>Email:<input type="text" value={this.state.Email}
     onChange={(event)=>{this.setState({Email:event.target.value})}}/></p>
                </div>
                <div class="form-group">
                <p>Profession:<input type="text" value={this.state.Profession}
     onChange={(event)=>{this.setState({Profession:event.target.value})}}/></p>
                </div>
                <div class="form-group">
                <p>Upload Profile:<input type="file" placeholder="Upload Profile" name="Pimage" 
     onChange={this.imageHandler}/></p>
                </div>
                <div class="form-group">
                <p>Description:<input type="text" value={this.state.Description}
     onChange={(event)=>{this.setState({Description:event.target.value})}}/></p>
                </div>
                <div class="form-group">
                <p>PriceRate:<input type="text" value={this.state.PriceRate} 
    onChange={(event)=>{this.setState({PriceRate:event.target.value})}}/></p>
                </div>
                <div class="form-group">
                <p><input type="submit" onClick={this.sendUserData}/>  </p>
                </div>
            </form>
            <div class="social-media">
                <h5>Sign up with social media</h5>
                <div class="social-icons">
                    <a href="#"><i class="icon-social-facebook" title="Facebook"></i></a>
                    <a href="#"><i class="icon-social-google" title="Google"></i></a>
                    <a href="#"><i class="icon-social-twitter" title="Twitter"></i></a>
                </div>
            </div>
        </div>
            

        )
    }
}
export default addArtist