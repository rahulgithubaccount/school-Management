import React from 'react';
import { Link } from 'react-router-dom';

const Errors = () => {
  return (
    <div className='container my-5'>
<div className="row">
<center>
<h2>Oops!</h2>
<h3>404 Not Found</h3>
<p>Sorry, an error has occured, Requested page not found!</p>

<Link  to = "/"><button className='btn btn-primary'> <i class="fa-solid fa-house"></i> Take Me Home </button></Link>
</center>

</div>    
    </div>
  )
}

export default Errors