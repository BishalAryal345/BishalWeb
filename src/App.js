import logo from './logo.svg';
import './App.css';
import './Container/login.css';
import {BrowserRouter} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Header from './Header/Header';
// import Footer from './Footer/Footer';
// import Container from './Container/Container';
import Navi from "./Header/Nav";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navi></Navi>      
{/* <Container> </Container>
     <Footer></Footer> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
