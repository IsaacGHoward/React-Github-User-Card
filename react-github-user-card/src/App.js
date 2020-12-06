import React from 'react';
import './App.css';
import UserCard from './UserCard';
import axios from 'axios';
class App extends React.Component {
  constructor(){
    super();
    this.state = { users: [], username:'IsaacGHoward', searchQuery:''};
  }
  makeCalls(){
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
  componentDidMount(){
    this.makeCalls();
  }
  componentDidUpdate(prevProps, prevState){
    if(this.state.username !== prevState.username){
      this.setState({users : []});
      this.makeCalls();
    }
      
  }
  search(){
    this.setState({username: this.state.searchQuery, searchQuery: ''});
  }
  render() {
    return (
      <div className="container">
        <h1>Search a User</h1>
        <input type="text" value={this.state.searchQuery} onChange={(e) => {this.setState({searchQuery: e.target.value})}}></input>
        <button onClick={() => {this.setState({username: this.state.searchQuery, searchQuery: ''})}}>Search!</button>
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
