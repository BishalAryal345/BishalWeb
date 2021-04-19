import { render } from "@testing-library/react"
import axios from "axios"
import { Component } from "react"

class UpdateMyArtist extends Component{
    state={
        FullName:"",
        Profession:"",
        id: this.props.match.params.id
    }
    componentDidMount(){
        console.log(this.state.id)
        axios.get("http://localhost:900/artist/single/" + this.state.id)
        
        .then((response)=>{
            console.log(response)
            this.setState({
                FullName:response.data.FullName,
                Profession : response.data.Profession,
                PriceRate: response.data.PriceRate
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
    axios.put("http://localhost:900/artist/update", this.state)
    .then((response)=>{
        console.log(response)
    })
    .catch((err)=>{
        console.log(err.response)
    })

}   
 render(){
   
        return(
            <form>
<p>
    Artist Name
    <input type ="text"
    value={this.state.FullName}
    name ="FullName" onChange={this.ChangeHandler}/>
</p>
<p>
   Profession
    <input type ="text"
    value={this.state.Profession}
    name ="Profession" onChange={this.ChangeHandler}/>
</p>
<p>
   PriceRate
    <input type ="text"
    value={this.state.PriceRate}
    name ="Profession" onChange={this.ChangeHandler}/>
</p>
<button type="submit" onClick={this.updateArtist}>Update</button>
</form>

        )
    }
}
export default UpdateMyArtist