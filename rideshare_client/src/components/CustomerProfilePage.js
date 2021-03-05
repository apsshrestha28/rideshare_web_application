import React , {Component} from 'react';
import {Session, RideRequest, User} from '../requests';
import Table from 'react-bootstrap/Table'
import { BiCurrentLocation, BiEnvelope, BiPhoneCall, BiMap} from "react-icons/bi";

class CustomerProfilePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      customer: {},
      ride_requests: [],
      users: []
    }
  }
  componentDidMount() {
    Session.currentUser()
      .then((customer) => {
        this.setState((state) => {
           return {
             customer: customer
           }})
        RideRequest.index()
          .then(ride_requests => {       
            this.setState((state) => {
              return{
                ride_requests: ride_requests.filter(a => a.customer_id ===  customer.id)        
              }   
            })
            this.state.ride_requests.map(ride_request => {
              User.show(ride_request.user_id)
                .then(user => {
                  this.setState(previousState => {
                    return {
                      users : [...previousState.users, user]
                    }
                  })
                })
            })
          })   
      })
  }
  render(){
    const {customer, ride_requests, users} = this.state;

    return(   
      <main className='bgImage'>     
        <h3 className='headerStyle'>Your Profile Page</h3>   
        <div className='pfList'>
          <p key={customer.id}> </p>
          <h5 className= 'pfName'> {customer.first_name} {customer.last_name}</h5>
          <p><BiCurrentLocation /> {customer.address}</p>
          <p><BiMap /> {customer.destination_address}</p>
          <p><BiEnvelope /> {customer.email}</p> 
          <p><BiPhoneCall/>  {customer.phone_number}</p>  
        </div>

        <div className='tableStyle'>
          <h5 className='title'><u>Ride Request List</u></h5>
          <Table striped bordered hover variant="dark">
            <thead className='tableList'>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>Ride Date</th>
                <th>Ride Time</th>
                <th>Status</th>     
              </tr>
            </thead>
            <tbody className='tableList'> 
              {ride_requests.map((ride_request) => {
                let requiredUser;
                {users.map(element => {
                  if(element.id === ride_request.user_id) {
                    requiredUser = element;
                  }
                })}
                if(requiredUser) {
                  return (
                    <tr key={ride_request.id}>
                      <td>{requiredUser.first_name}</td>
                      <td>{requiredUser.last_name}</td>
                      <td>{requiredUser.address} </td>
                      <td>{ride_request.ride_date}</td>
                      <td>{ride_request.ride_time.substring(11,16)}</td>
                      <td>{ride_request.status}</td>         
                    </tr>
                  )
                }
              })}
            </tbody>
          </Table>  
        </div>
      </main>
    )
  }
}

export default CustomerProfilePage;