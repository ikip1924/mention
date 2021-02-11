import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../views/Home'
import About from '../views/About'
import Navbar from '../components/Navbar';
import Register from '../views/auth/Register';
import Login from '../views/auth/Login';

function Router() {
    return (
        <BrowserRouter>
            <Navbar/>
            <div className="mt-4">
                   <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                
                 <Route path="/about">
                    <About/>
                </Route>
                <Route path="/register">
                    <Register/>
                </Route>
                
                 <Route path="/login">
                    <Login/>
                </Route>
            </Switch>    
            </div>
        </BrowserRouter>
    )
}

export default Router;