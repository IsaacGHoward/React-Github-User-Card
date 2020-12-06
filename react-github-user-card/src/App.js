import React from 'react';
import './App.css';
import UserCard from './UserCard';
import axios from 'axios';
class App extends React.Component {
  constructor(){
    super();
    this.state = { users: [], username:'IsaacGHoward'};
  }
  componentDidMount(){
    axios.get(`https://api.github.com/users/${this.state.username}`)
    .then(res => {
      console.log(res);
      this.setState({users: [...this.state.users, {img: res.data.avatar_url, name: res.data.name, username: res.data.login, location: res.data.location, url: res.data.html_url, followers: res.data.followers, following: res.data.following, bio: res.data.bio }]});
    })
    .then(
      axios.get(`https://api.github.com/users/${this.state.username}/following`)
      .then(res => {
        for( let user in res.data){
          axios.get(`https://api.github.com/users/${res.data[user].login}`)
          .then(res => {
            this.setState({users: [...this.state.users, {img: res.data.avatar_url, name: res.data.name, username: res.data.login, location: res.data.location, url: res.data.html_url, followers: res.data.followers, following: res.data.following, bio: res.data.bio }]});
          })
        }
      })
    )
  }
  render() {
    return (
      <div className="container">
        {
          this.state.users.map( user => {
            return <UserCard userdata={user}/>
          })
        }
      </div>
      
        
    );
  }
}

export default App;
