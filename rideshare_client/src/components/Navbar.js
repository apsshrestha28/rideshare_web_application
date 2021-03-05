import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaCar} from 'react-icons/fa';

const Navbar =(props) =>{
  function handleSignOutButtonClick() {
    props.destroySession();
    window.location = '/';
  }
  return (
    <nav className="navbar navbar-dark bg-dark" >
      <span>       
        <FaCar className= 'carIcon'/>
        <span className= 'appName'>Ride share</span> 
      </span>
      <span className='navStyle'>
        <NavLink to ='/'><button className="btn btn-primary btn-sm" type="button">Home</button></NavLink>
        {
        props.currentUser ?
          (  <>
              {
                props.currentUser.driver_license_number ?
                ( 
                  <>
                    <NavLink to ='/driver'><button className ="btn btn-primary btn-sm" type="button" id='buttonSpace'>Driver</button></NavLink>
                    <NavLink to ='/ride_requests'><button className ="btn btn-primary btn-sm" type="button" id='buttonSpace'>Ride Requests List</button></NavLink>
                  </>
                ):  
                ( <>
                    <NavLink to ='/users'><button className ="btn btn-primary btn-sm" type="button" id='buttonSpace'>Drivers List</button></NavLink>
                    <NavLink to ='/customer'><button className ="btn btn-primary btn-sm" type="button" id='buttonSpace'>Customer</button></NavLink>
                  </>
                )
              }
              <span className='username'>Hello! {props.currentUser.first_name} {props.currentUser.last_name}</span>
              <button onClick={handleSignOutButtonClick} className="btn btn-danger btn-sm" id='buttonSpace'>Sign Out
              </button>  
            </>
          ):
          (
            <>
              <NavLink to='/sign_in'><button className="btn btn-primary btn-sm" type="button" id='buttonSpace'>SignIn</button></NavLink>
              <NavLink to='/sign_up/driver'> <button className="btn btn-primary btn-sm" type="button" id='buttonSpace'>SignUp As Driver</button></NavLink>
              <NavLink to='/sign_up/customer'><button className="btn btn-primary btn-sm" type="button" id='buttonSpace'>SignUp As Customer</button></NavLink>
            </>
          )
        }
      </span>
    </nav>
  );
}
export default Navbar;