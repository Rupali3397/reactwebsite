import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {Route,Switch,Redirect} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Navbar from './Navbar';
import Services from './Services';
import Footer from './Footer'


const App = () =>{
    return(
        <>
            <Navbar />
            <Switch>
                <Route exact path='/' component = {Home}  />
                <Route exact path='/about' component = {About}  />
                <Route exact path= '/contact' component = {Contact} />
                <Route exact path= '/services' component = { Services } />  
                      
               <Redirect to="/"> </Redirect>
            </Switch>
            <Footer />
             
        </>
    )
};

export default App;


//switch
//<Route component = {Error} />