import React from "react";
import { User } from "../requests";

 function SignUpPageForDriver(props) {

  function handleSubmit(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const fD = new FormData(currentTarget);

    const newUser = {
      first_name: fD.get("first_name"),
      last_name: fD.get("last_name"),
      email: fD.get("email"),
      password: fD.get("password"),
      password_confirmation: fD.get("password_confirmation"),
      address:fD.get("address"),
      driver_license_number:fD.get("driver_license_number"),
      description:fD.get("description"),
      phone_number:fD.get("phone_number"),
    };

    User.create(newUser).then(res => {
      if (res.id) {
        props.history.push("/sign_in");
      }
    });
  }
  return (
    <main className='bgImage' id='sign-style'>
      <h5 className='sign-heading'>Sign Up As New Driver</h5>

      <form className='sign-form' onSubmit={handleSubmit}>
        <div className="form-group row">
          <label htmlFor="first_name" className="col-sm-4 col-form-label">First Name*</label>
          <input type="text" name="first_name" required= "required" id="first_name" />
        </div>

        <div className="form-group row">
          <label htmlFor="last_name" className="col-sm-4 col-form-label">Last Name*</label>
          <input type="text" name="last_name" required= "required" id="last_name" />
        </div>

        <div className="form-group row">
          <label htmlFor="address" className="col-sm-4 col-form-label">Address*</label>
          <input type="text" name="address" required= "required" id="address" />
        </div>
        <p><small><b>Note : </b>The address should be in this format, e.g. 2916, McBride Ave/St, Surrey, BC </small></p>

        <div className="form-group row">
          <label htmlFor="phone_number" className="col-sm-4 col-form-label">Phone Number*</label>
          <input type="number" name="phone_number" required= "required" id="phone_number" />
        </div>

        <div className="form-group row">
          <label htmlFor="driver_license_number" className="col-sm-4 col-form-label">Driving License Number*</label>
          <input type="number" name="driver_license_number" required= "required" id="driver_license_number" />
        </div>

        <div className="form-group row">
          <label htmlFor="description" className="col-sm-4 col-form-label">Description*</label>
          <input type="string" name="description" required= "required"  id="description" />
        </div>

        <div className="form-group row">
          <label htmlFor="email" className="col-sm-4 col-form-label">Email*</label>
          <input type="email" name="email" required= "required" id="email" />
        </div>

        <div className="form-group row">
          <label htmlFor="password" className="col-sm-4 col-form-label">Password*</label>
          <input type="password" name="password" required= "required" id="password" />
        </div>

        <div className="form-group row"> 
          <label htmlFor="password_confirmation" className="col-sm-4 col-form-label">Confirm Password*</label>
          <input
            type="password"
            name="password_confirmation"
            required= "required" 
            id="password_confirmation"
          />
        </div>
        
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
    </main>
  );
}
export default SignUpPageForDriver;