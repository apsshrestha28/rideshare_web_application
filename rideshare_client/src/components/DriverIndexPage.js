import React,{Component} from 'react';
import {User} from '../requests';
import GoogleAPI from './GoogleAPI';

class DriverIndexPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: []
    }    
  }
  componentDidMount() {
    User.index()
      .then((users) => {
        this.setState((state) => {
          return {
           users: users
          }   
        })  
      })    
  }

  render() {
    const {users} = this.state; 
    return ( 
      <main className="bgImage">
        <h3 className='headerStyle'>Drivers Within 10 km :</h3>    
        <ol className='list'>
          {
            users.map(user => {  
              return(   
                <GoogleAPI {...user} />              
              )
            })
          }
        </ol>
      </main>
     );
  }
}
export default DriverIndexPage;
