import React , {Component} from 'react';
import {Session, Customer, Review} from '../requests';
import ReviewList from './ReviewList';
import { BiCurrentLocation, BiEnvelope, BiPhoneCall} from "react-icons/bi";
import {IoCardSharp } from "react-icons/io5";

class DriverProfilePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {},
      customers: [],
      reviews: []
    }
  }

  componentDidMount() {
    Session.currentUser()
      .then((user) => {
        this.setState((state) => {
            return {
              user: user
            }})
          Review.show(user)
            .then(reviews => {
              this.setState((state) => {
                return {
                  reviews: reviews
                }
              })
              reviews.map(reviews => {
                Customer.show(reviews.customer_id)
                  .then(customer => {
                    this.setState(previousState => {
                      return {
                        customers: [...previousState.customers, customer]
                      }    
                    });        
                  })  
              })  
            })
      })   
  }
  
  render(){
    const {user, reviews, customers} = this.state;
    return(
      <main className='bgImage'>
        <h3 className='headerStyle'>Your Profile Page</h3>   
        <div className='pfList'>
            <h5 className='pfName'> {user.first_name} {user.last_name}</h5>
            <p> {user.description} </p>
            <p><BiCurrentLocation /> {user.address} </p>
            <p><BiEnvelope /> {user.email}</p> 
            <p><BiPhoneCall/> {user.phone_number} </p>       
            <p>< IoCardSharp/> {user.driver_license_number} </p>
        </div>

        <div className='reviewList'>
          <h5 className='title'><u>Reviews</u></h5>
            <ReviewList reviews={reviews} customers={customers}/>
        </div>   
      </main>
    )
  }
}
 
export default DriverProfilePage;