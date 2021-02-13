import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../views/Home'
import About from '../views/About'
import Navbar from '../components/Navbar';
import Register from '../views/auth/Register';
import Login from '../views/auth/Login';
import Guest from '../middleware/Guest';
import Dashboard from '../views/Dashboard';
import Authenticated from '../middleware/Authenticated';

function Router() {
    return (
        <BrowserRouter>
            <Navbar/>
            <div className="mt-4">
                <Switch>
            
                    <Route exact path="/">                    
                        <Home />
                    </Route>                    
            
                    <Route path="/dashboard">
                        <Authenticated>
                            <Dashboard />
                        </Authenticated>
                    </Route>

                    <Route path="/about">
                        <About/>
                    </Route>
                
                    <Route path="/register">
                        <Guest>
                            <Register />
                        </Guest>
                    </Route>
                
                    <Route path="/login">
                        <Guest>
                            <Login />
                        </Guest>
                    </Route>
                </Switch>    
            </div>
        </BrowserRouter>
    )
}

export default Router;