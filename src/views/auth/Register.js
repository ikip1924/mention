import React, { useState } from 'react'
import axios from 'axios'
function Register() {
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [password_confirmation, setPasswordConfirmation] = useState('')
    
const record =  { name, email, password, password_confirmation }
const store = async (e) => {
    e.preventDefault();
   try {
        let response = await axios.post('http://127.0.0.1:8000/api/register', record)
    setName = ('')
    setEmail = ('')
    setPassword = ('')
    setPasswordConfirmation = ('')
   } catch (e) {
       console.log(e.response);
   }
}

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <div className="card">
                        <div className="card-header">Register</div>
                        <div className="card-body">
                            <form onSubmit={store}>
                                <div className="mb-4">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" onChange={(e)=> setName(e.target.value)} value={name} name="name" id="name" className="form-control"/>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="form-label">email</label>
                                    <input type="email" onChange={(e)=> setEmail(e.target.value)} value={email} name="email" id="email" className="form-control"/>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" onChange={(e)=> setPassword(e.target.value)} value={password} name="password" id="password" className="form-control"/>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="password_confirmation" className="form-label">Confirm Password</label>
                                    <input type="password" onChange={(e)=> setPasswordConfirmation(e.target.value)} value={password_confirmation} name="password_confirmation" id="password_confirmation" className="form-control"/>
                                </div>

                                <button type="submit" className="btn btn-primary">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;