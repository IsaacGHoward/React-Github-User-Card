import React from 'react';
import './App.css';
import UserCard from './UserCard';
class App extends React.Component {
  constructor(){
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <UserCard/>
      </div>
      
        
    );
  }
}

export default App;
