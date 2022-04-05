import React from 'react'

const AddAcademic = () => {
  return (
    <div className='my-5'>
    <h2 className="text-center">
    <strong> Academic Details </strong>
  </h2>
    <table class="table my-5 ">
  <thead className=' bg-dark' style={{color:"#fff"}}>
    <tr>
      <th scope="col">Subjects<br/> (All) </th>
      <th scope="col">First Unit Test <br/>Full Marks 100</th>
      <th scope="col">Second Unit Test <br/>Full Marks 100</th>
      <th scope="col">Anual Unit Test <br/>Full Marks 100</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>English</td>
      <td> <input
      type="text"
      required
      placeholder="First Name"
      name="fname"
      className="form-control2"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    /></td>
      <td> <input
      type="text"
      required
      placeholder="First Name"
      name="fname"
      className="form-control2"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    /></td>
      <td> <input
      type="text"
      required
      placeholder="First Name"
      name="fname"
      className="form-control2"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    /> </td>
    
    </tr>
    <tr>
    <td>Hindi</td>
      <td> <input
      type="text"
      required
      placeholder="First Name"
      name="fname"
      className="form-control2"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    /></td>
      <td> <input
      type="text"
      required
      placeholder="First Name"
      name="fname"
      className="form-control2"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    /></td>
      <td> <input
      type="text"
      required
      placeholder="First Name"
      name="fname"
      className="form-control2"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    /></td>
    </tr>
    <tr>
    <td>Math</td>
      <td > <input
      type="text"
      required
      placeholder="First Name"
      name="fname"
      className="form-control2"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    /></td>
      <td> <input
      type="text"
      required
      placeholder="First Name"
      name="fname"
      className="form-control2"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    /></td>
    <td> <input
    type="text"
    required
    placeholder="First Name"
    name="fname"
    className="form-control2"
    id="exampleInputEmail1"
    aria-describedby="emailHelp"
  /></td>
    </tr>
    <tr>
    <td>Science </td>
      <td> <input
      type="text"
      required
      placeholder="First Name"
      name="fname"
      className="form-control2"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    /></td>
      <td> <input
      type="text"
      required
      placeholder="First Name"
      name="fname"
      className="form-control2"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    /></td>
    <td> <input
    type="text"
    required
    placeholder="First Name"
    name="fname"
    className="form-control2"
    id="exampleInputEmail1"
    aria-describedby="emailHelp"
  /></td>
    </tr>
    <tr>
    <td>History</td>
      <td> <input
      type="text"
      required
      placeholder="First Name"
      name="fname"
      className="form-control2"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    /></td>
      <td> <input
      type="text"
      required
      placeholder="First Name"
      name="fname"
      className="form-control2"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    /></td>
    <td> <input
    type="text"
    required
    placeholder="First Name"
    name="fname"
    className="form-control2"
    id="exampleInputEmail1"
    aria-describedby="emailHelp"
  /></td>
    </tr>
    <tr>
    <td>Geography</td>
      <td > <input
      type="text"
      required
      placeholder="First Name"
      name="fname"
      className="form-control2"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    /></td>
    <td> <input
    type="text"
    required
    placeholder="First Name"
    name="fname"
    className="form-control2"
    id="exampleInputEmail1"
    aria-describedby="emailHelp"
  /></td>
     
    <td> <input
    type="text"
    required
    placeholder="First Name"
    name="fname"
    className="form-control2"
    id="exampleInputEmail1"
    aria-describedby="emailHelp"
  /></td>
    </tr>
  </tbody>
</table>
    
<button className='btn btn-primary'> Submit</button>
    </div>
  )
}

export default AddAcademic