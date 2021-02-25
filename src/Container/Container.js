import { Component } from "react";
import Register from './Register';
import Login from './Login'
import {Route} from 'react-router-dom';

class Container extends Component{
    render(){
        return(
<div>
    
     <Route path="/register" component={Register}/>
     <Route path="/login" component={Login}/>
     
</div>
        )
    }
}
export default Container