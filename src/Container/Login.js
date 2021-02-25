import { Component } from "react";

class Login extends Component{
    render(){
        return(
<form>
    <p>Username : <input type="text" name="username"/></p>
    <p>Password : <input type="password" name="password"></input></p>
   <p><input type="submit"/> </p>
</form>
        )
    }
}
export default Login