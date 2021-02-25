import { Component } from "react";

class register extends Component{
    render(){
        return(
<form>
<p>Full Name : <input type="text" name="Full Name"/></p>
    <p>Username : <input type="text" name="username"/></p>
    <p>Password : <input type="text" name="password"></input></p>
    <p><input type="submit"/>  </p>
</form>
        )
    }
}
export default register