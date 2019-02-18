import { Component } from 'react'

export class Logout extends Component {
  
  componentWillMount(){
      localStorage.removeItem('auth-token');
      
  }

  render() {
    return null;
  }
}

export default Logout
