import React , {Component} from 'react';
import {Session, RideRequest, Customer} from '../requests';
import Table from 'react-bootstrap/Table'

class DriverRideRequestPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {},
      ride_requests: [],
      customers: []
    }
    this.acceptRequest = this.acceptRequest.bind(this);
  }

  componentDidMount() {
    Session.currentUser()
      .then((user) => {
        this.setState((state) => {
            return {
              user: user
            }})
          RideRequest.show(user)
            .then(ride_requests => {
              this.setState((state) => {
                return {
                  ride_requests: ride_requests
                }
              })
              ride_requests.map(ride_request => {   
                Customer.show(ride_request.customer_id)
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
  
  acceptRequest(id, status){
    const actionParms = {
      id : id,
      status: status
    }
    RideRequest.update(actionParms)
      .then( () => {
        window.location.reload(true);
      })
  }
 
  render(){
    const {ride_requests, customers} = this.state;
    return(
      <main className='bgImage'>
        <h3 className='headerStyle'>Ride Requests Information</h3>        
       
        <div className='tableStyle'>
          <h5 className='title'><u>Ride Requests Pending List</u></h5>
          <Table striped bordered hover variant="dark">
            <thead className='tableList'>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>Destination Address</th>
                <th>Ride Date</th>
                <th>Ride Time</th>
                <th>Accept</th>
                <th>Decline</th>
              </tr>
            </thead>

            <tbody className='tableList'> 
              {ride_requests
                .filter(a => a.status === '')
                  .map(ride_request => {  
                    let requiredCustomer;
                    {customers.map(customer => {
                      if(customer.id === ride_request.customer_id) {
                        requiredCustomer = customer;
                      }
                    })}
                    if(requiredCustomer){ 
                      return(
                        <tr key={ride_request.id}>
                          <td>{requiredCustomer.first_name}</td>
                          <td>{requiredCustomer.last_name}</td>
                          <td>{requiredCustomer.address}</td>
                          <td>{requiredCustomer.destination_address}</td>
                          <td>{ride_request.ride_date}</td>
                          <td>{ride_request.ride_time.substring(11,16)}</td>
                          <td><button onClick={() => this.acceptRequest(ride_request.id, 'accepted')} className= 'btn btn-success btn-sm'>Accept</button></td>
                          <td><button onClick={() => this.acceptRequest(ride_request.id , 'declined')} className= 'btn btn-danger btn-sm'>Decline</button></td>           
                        </tr>
                      )
                    }
              })}       
            </tbody>
          </Table>                     
          <br/>
          <h5 className='title'><u>Ride Requests Accepted List</u></h5>
          <Table striped bordered hover variant="dark">
            <thead className='tableList'>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>Destination Address</th>
                <th>Ride Date</th>
                <th>Ride Time</th>
              </tr>
            </thead>
            <tbody className='tableList'> 
              {ride_requests
                .filter(a => a.status === 'accepted')
                  .map(ride_request => {  
                  let requiredCustomer;
                  {customers.map(customer => {
                    if(customer.id === ride_request.customer_id) {
                      requiredCustomer = customer;
                    }
                  })}
                  if(requiredCustomer){ 
                    return(
                      <tr key={ride_request.id}>
                        <td>{requiredCustomer.first_name}</td>
                        <td>{requiredCustomer.last_name}</td>
                        <td>{requiredCustomer.address}</td>
                        <td>{requiredCustomer.destination_address}</td>
                        <td>{ride_request.ride_date}</td>
                        <td>{ride_request.ride_time.substring(11,16)}</td>        
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
 
export default DriverRideRequestPage;