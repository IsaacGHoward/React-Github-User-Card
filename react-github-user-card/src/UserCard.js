import React from 'react';
import './App.css';

class UserCard extends React.Component {
    constructor(){
      super();
      this.state = {};
    }
    render() {
      return (
        <div className="card">
            <img src={this.props.img} alt="User PFP"/>
            <div className="card-info">
                <h3 className="name">{this.props.name}</h3>
                <p className="username">{this.props.username}</p>
                    <p>Location: {this.props.location}</p>
                    <p>Profile:
                    <a href={this.props.url}>{this.props.url}</a>
                </p>
                <p>Followers: {this.props.followers}</p>
                <p>Following: {this.props.following}</p>
                <p>Bio: {this.props.bio}</p>
            </div>
        </div>
      );
    }
  }
  
  export default UserCard;