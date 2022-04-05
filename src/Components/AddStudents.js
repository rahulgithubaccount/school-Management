import React from "react";
import AddAcademic from "./AddAcademic";

const AddStudents = () => {
  return (
    <div className="container my-5">
<form onSubmit={""}>
      <div className="row">
      
        <h2 className="text-center">
          <strong> Students Detials </strong>
        </h2>
        <div className="mt-20"></div>
        <div className="col-md-4 ">
          <div className="mb-3 ">
            <label htmlFor="exampleInputEmail1" className="form-label">
              First Name
            </label>
            <input
              type="text"
              required
              placeholder="First Name"
              name="fname"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Middle Name
            </label>
            <input
              type="text"
              required
              placeholder="Middle Name"
              name="mName"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              required
              placeholder="Last Name"
              name="Last Name"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>
      </div>

      <div className="mt-20"></div>
      <div className="row">
        <div className="col-md-2 ">
          <div className="mb-3 ">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Grade{" "}
            </label>
            <select name="gender" className="form-control">
              <option value="none" selected>
                Choose... <i class="fas fa-angle-down"></i>
              </option>
              <option value="male">A+</option>
              <option value="female">B+</option>
              <option value="other">C+</option>
            </select>
          </div>
        </div>
        <div className="col-md-2">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Roll No
            </label>
            <input
              type="text"
              required
              placeholder="Roll No"
              name="rollno"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>
        <div className="col-md-2">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Gender
            </label>
            <select name="gender" className="form-control">
              <option value="none" selected>
                Choose... <i class="fas fa-angle-down"></i>
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">other</option>
            </select>
          </div>
        </div>
        <div className="col-md-2">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Session
            </label>
            <input
              type="text"
              required
              placeholder="Session"
              name="session"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>
        <div className="col-md-2">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Blood Group
            </label>
            <select name="gender" className="form-control">
              <option value="none" selected>
                Choose... <i class="fas fa-angle-down"></i>
              </option>
              <option value="male">A+</option>
              <option value="male">A-</option>
              <option value="female">B+</option>
              <option value="female">B-</option>
              <option value="other">O+</option>
              <option value="other">O-</option>
              <option value="other">AB+</option>
              <option value="other">AB-</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mt-20"></div>

      <div className="row">
        <div className="col-md-6 ">
          <div className="mb-3 ">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Father Name
            </label>
            <input
              type="text"
              required
              placeholder="First Name"
              name="fname"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Mother Name
            </label>
            <input
              type="text"
              required
              placeholder="Middle Name"
              name="mName"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>
      </div>


<AddAcademic/>
</form>

    </div>
  );
};

export default AddStudents;
