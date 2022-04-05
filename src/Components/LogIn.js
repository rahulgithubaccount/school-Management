import React,{useState} from 'react';

import { useNavigate } from 'react-router-dom';

const LogIn = () => {

    const navigate = useNavigate()
    const [inputs,setinputs]=useState({
        email:"",
        password:""
    })
const {email,password} = inputs

function handleChange(evt) {
   
    setinputs({
      ...inputs,
      [evt.target.name]:evt.target.value
    });
  }

const Submits = (e)=>{
    e.preventDefault();
    if(email==="admin@gmail.com" && password=== "admin"){
        navigate('/admin')
    }else{
        navigate("*")
    }
}


  return (
    <div className='container my-5 '>
    <div className="row">
    <div className="col-md-6 mx-auto shadow py-5">
    <form onSubmit={Submits}>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1"  className="form-label">Email address</label>
      <input type="email" required placeholder='email' value={inputs.email} name ="email" onChange={handleChange}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" placeholder='password' required value={inputs.password} name ="password" onChange={handleChange} className="form-control" id="exampleInputPassword1"/>
    </div>
    <div className="mb-3 form-check">
      <input type="checkbox"   onChange={handleChange} required  className="form-check-input" id="exampleCheck1"/>
      <label className="form-check-label"  for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
    </div>
    </div>
   
    </div>
  )
}

export default LogIn