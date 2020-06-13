import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleLogin } from './Store/Actions/Login';
import './App.css';

class App extends Component {
  state = {
    data: null
  }
  handleLogin = () => {
    this.props.handleLogin();
  }
  render() {
    console.log(this.props.data);
    return (
      <div>
        <h1>Hello welcome to REACT JS</h1>
        <button onClick={this.handleLogin}>GetData</button>
        {this.props.data !== null && this.props.data.map(d => (
          <div className="my_card" key={d.id}>
            <span>{d.title}</span>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.auth.user
})

export default connect(mapStateToProps, { handleLogin })(App);