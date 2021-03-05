import React from 'react';
import {RideRequest} from '../requests';
import {toast} from 'react-toastify';

const RideRequestPage = (props) => {
  function handleSubmit(event) {
    event.preventDefault();
    const {currentTarget} = event;
    const fD = new FormData(currentTarget);

    const newRideRequest = {
      ride_date: fD.get("ride_date"),
      ride_time: fD.get("ride_time"),
      status: "",
      user_id: props.match.params.id  
    };

    RideRequest.create(newRideRequest)
      .then(res => {
       
        toast.success(`Ride request 🚗 🚗 created ! `);
        setTimeout(function(){ 
          window.location.reload(true);}, 3000);
      })
     
  }
  return (
    <main className='bgImage' style={{color:'white'}}>
      <h3 className='headerStyle'>Create A Ride Request</h3>

      <form className= 'rideRequestForm' onSubmit={handleSubmit}>   
        <div className="form-group row">
          <label htmlFor="ride_date" className="col-sm-3 col-form-label">Select Day*</label>
          <input type="date" name="ride_date" required= "required" />
        </div>

        <div className="form-group row">
          <label htmlFor="ride_time" className="col-sm-3 col-form-label">Select Time*</label>
          <input type="time" name="ride_time" required= "required" />
        </div>
       
        <button type="submit" className="btn btn-primary" >Submit Ride Request</button>
        
      </form>
    </main>
    ); 
}
 
export default RideRequestPage;