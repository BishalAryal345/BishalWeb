import { render } from "@testing-library/react"
import axios from "axios"
import { Component } from "react"
import '../styles/contact_styles.css'
import '../styles/contact_responsive.css'
import '../plugins/font-awesome-4.7.0/css/font-awesome.min.css'

class Updateprofile extends Component{
    state={
        FullName:"",
        Address:"",
        PhoneNo:"",
        Username:"",
        Password:"",
        Uimage:"",
        id: this.props.match.params.id
    }
    componentDidMount(){
        console.log(this.state.id)
        axios.get("http://localhost:900/register/single/" + this.state.id)
        
        .then((response)=>{
            console.log(response)
            this.setState({
                FullName:response.data.FullName,
                Address : response.data.Address,
                PhoneNo: response.data.PhoneNo,
                Username:response.data.Username,
                Password : response.data.Password,
                Uimage: response.data.Uimage
            })

        })
        .catch((err)=>{

        })
        
    }
    ChangeHandler =(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    updateArtist=(e)=>
{
    e.preventDefault()
    axios.put("http://localhost:900/register/update", this.state)
    .then((response)=>{
        console.log(response)
    })
    .catch((err)=>{
        console.log(err.response)
    })

}   
 render(){
   
        return(
            <div class="contact_form_section">
            <div class="container">
                <div class="row">
                    <div class="col">

                        <div class="contact_form_container">
                            <div class="contact_title text-center">User Update</div>
            <form>
              
<p>
    User Name
    <input type ="text"
    value={this.state.FullName}
    name ="FullName" onChange={this.ChangeHandler}/>
</p>
<p>
   Address
    <input type ="text"
    value={this.state.Address}
    name ="Address" onChange={this.ChangeHandler}/>
</p>
<p>
   Phone Number
    <input type ="text"
    value={this.state.PhoneNo}
    name ="PhoneNo" onChange={this.ChangeHandler}/>
</p>
<p>
   Username
    <input type ="text"
    value={this.state.Username}
    name ="Username" onChange={this.ChangeHandler}/>
</p>
<p>
   Password
    <input type ="text"
    value={this.state.Password}
    name ="Password" onChange={this.ChangeHandler}/>
</p>
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
export default Updateprofile