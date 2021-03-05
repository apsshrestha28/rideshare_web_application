import React from 'react';
import { BiCurrentLocation, BiEnvelope, BiPhoneCall} from "react-icons/bi";

const DriverDetails = ({ first_name, last_name, description, email, 
 address, phone_number}) => {
   return (
    <div>
      <h5 className='pfName'>{first_name} {last_name}</h5>
      <p> {description} </p>
      <p><BiCurrentLocation /> {address} </p>
      <p><BiEnvelope /> {email}</p> 
      <p><BiPhoneCall/> {phone_number} </p>  
    </div>
   )
 }
 export default DriverDetails;