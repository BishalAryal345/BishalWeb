import { Component } from "react";
import Register from './Register';
import Login from './Login'
import Artist from './Artist'
import profile from './AddArtist'
import {Route} from 'react-router-dom';
import Myprofile from "./Myprofile";
import Aboutus from "./Aboutus";
import UpdateMyArtist from "../Body/UpdateMyArtist";
import registeruser from "./RegisterUser";
import Adminlogin from "../Admin/Admin_login";
import Adminregister from "../Admin/Admin_Register";
import addArtist from "./AddArtist";
import AdminArtist from "../Admin/Adminartist";

class Container extends Component{
    render(){
        return(
<div>
    
     <Route path="/register" component={Register}/>
     <Route path="/login" component={Login}/>
     <Route exact path="/" component={Login}/>
     <Route path='/artist' component={Artist} />
     <Route path='/myprofile' component={Myprofile} />
     <Route path='/aboutus' component={Aboutus} />
     <Route path='/updateMyArtist/:id' component={UpdateMyArtist}/>
     <Route path='/addArtist' component={addArtist}/>
     <Route path='/user' component={registeruser}/>
     <Route path='/adminlogin' component={Adminlogin}/>
     <Route path='/adminregister' component={Adminregister}/>
     <Route path='/adminArtist' component={AdminArtist}/>
     
</div>
        )
    }
}
export default Container