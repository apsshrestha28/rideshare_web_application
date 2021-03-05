import {getDistance} from 'geolib';
import _ from 'lodash';
import {Customer, Session} from '../requests';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Locations extends Component{
  constructor(props){
    super(props);
    this.state = {  
      destinationLat: props.latitude,
      destinationLong: props.longitude,
      distance: []
    }
  }
  componentDidMount(){
    Customer.index()
      .then(
        customers => {
          Session.currentUser()
            .then(current => {
                const currentCustomer = customers.filter(customer => customer.id === current.id)[0];
            
                let dis = getDistance(
                  {latitude: currentCustomer.latitude, longitude: currentCustomer.longitude},
                  {latitude: this.state.destinationLat, longitude: this.state.destinationLong}
                );
                this.setState({
                  distance:  [_.round((dis/1000),1)]
                })
                
              })
        }
      )
  }            
        
  render(){
    const {distance} = this.state;
    const {id, first_name, last_name} = this.props;
    return(  
      <div>
        {distance > 0 && distance < 10 &&
          <li key={id}>
            <u>
              <Link 
                key={id}
                to={`/users/${id}`}
                className='driverName'> 
                {first_name} {last_name}
              </Link>
            </u>
            <p>
              <button>{distance} km away</button>
            </p>
            <br/>
          </li> 
        }     
      </div>      
    );
  }
}
