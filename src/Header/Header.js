import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';
import FormControl from 'react-bootstrap/FormControl';


class Header extends Component{
  logout=()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    window.location.href ='/login'
  }
    render (){
      if(localStorage.getItem('token')&& localStorage.getItem('userType')=='admin'){
        var menu =
        <>
        <Nav.Link href="/adminArtist">Admin Artist</Nav.Link>
        <Nav.Link href="/artist">Home</Nav.Link>
      <Nav.Link href="/register">Register</Nav.Link>
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/addArtist">Add Profile</Nav.Link>
      <Nav.Link href="/myprofile">My Profile</Nav.Link>
      <Nav.Link href="/aboutus">About Us</Nav.Link>
      <Nav.Link href='/' onClick={this.logout}>Log Out</Nav.Link>
        </>
      }
      else if (localStorage.getItem('token')&& localStorage.getItem('userType')=='artist'){
        var menu=
        <>
        <Nav.Link href="/artist">Home</Nav.Link>
      <Nav.Link href="/addArtist">Add Profile</Nav.Link>
      <Nav.Link href="/myprofile">My Profile</Nav.Link>
      <Nav.Link href="/aboutus">About Us</Nav.Link>
      <Nav.Link href='/' onClick={this.logout}>Log Out</Nav.Link>
        </>
      }
      else if(localStorage.getItem('token')&&localStorage.getItem('userType')=='user'){
        var menu =
        <>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href='/' onClick={this.logout}>Log Out</Nav.Link>
        
        </>
      }
      else {
        var menu=
        <>
        <Nav.Link href="/register">Register</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/aboutus">About Us</Nav.Link>
       
        </>
      }
      
        return(
   
            <div className="header">
  <br />
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="/aboutus"><img style={{width:"80px", outerHeight:"80"}} src="logoapun.png"></img></Navbar.Brand>
    <Nav className="mr-auto">
      {menu}
      {/* <Nav.Link href="/UpdateMyArtist">Update</Nav.Link> */}
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-4" style={{width:"500px", Height:"80"}} />
      {/* <Button variant="outline-light">Search</Button> */}
    </Form>
  </Navbar>

  <br />
  
            </div>
            
        )
    }
}
export default Header
