import React from 'react';
import ReviewDetails from './ReviewDetails';

const ReviewList = ({reviews, customers}) => {
  return(
    <ul style= {{listStyle:'none'}}>
      {
        reviews?
          reviews.map((review) => {
            let requiredCustomer;
            customers.map(element => {
              if(element.id === review.customer_id){
                  requiredCustomer = element;
              }
            });
            if(requiredCustomer){
              return (      
                <li key={review.id}>
                  <ReviewDetails
                    id={review.id}
                    customer = {requiredCustomer.first_name}
                    body={review.body}
                    rating={review.rating}
                    created_at={new Date(review.created_at).toDateString() }
                  />
                </li>
              )
            }
          })
        :
        null
      }
    </ul>
  )
}

export default ReviewList;
