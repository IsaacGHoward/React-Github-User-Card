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
            <img src={this.props.userdata.img} alt="User PFP"/>
            <div className="card-info">
                <h3 className="name">{this.props.userdata.name}</h3>
                <p className="username">{this.props.userdata.username}</p>
                    <p>Location: {this.props.userdata.location}</p>
                    <p>Profile:
                    <a href={this.props.userdata.url}>{this.props.userdata.url}</a>
                </p>
                <p>Followers: {this.props.userdata.followers}</p>
                <p>Following: {this.props.userdata.following}</p>
                <p>Bio: {this.props.userdata.bio}</p>
            </div>
        </div>
      );
    }
  }
  
  export default UserCard;