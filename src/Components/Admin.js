import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <div className='container my-5'>
    <div className="row">
    <center>
    <h4 >Admin Page</h4>
    <div className="mt-20"></div>
<div className='border border-2 rounded py-3 '>
<h3> <strong>Add New Students</strong></h3>
<p>Click here to add new students </p>
<Link to="/addstudents" ><button className='btn btn-primary'> Add</button></Link>

</div>
</center>
    </div>

    <div className="row my-3">
    <center>

<div className='border border-2 rounded py-3 '>
<h3> <strong>View Students Details</strong></h3>
<p>Click here to view  students details </p>
<button className='btn btn-primary'>View</button>

</div>
</center>
    </div>
  
    </div>
  )
}

export default Admin