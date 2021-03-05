import React from 'react';
import {BsPersonSquare} from "react-icons/bs";
import StarRating from './StarRating';

const ReviewDetails = ({body, created_at, customer, rating})=>{
  
  return(
    <div className='padding-10'>
      <BsPersonSquare className='reviewIcon'/>
      <span className='reviewPerson'>
        <u>{customer}</u> 
      </span>
      <small className='reviewDate'>{created_at.toLocaleString()}</small>
      <p className='ratingStyle'><StarRating max={5} current={rating} /></p>
      <p className='reviewBody'>{body}</p>
   
    </div>
  )
}
export default ReviewDetails;