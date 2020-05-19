import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import fbConnection from '../helpers/data/connection';

import MyNavbar from '../components/MyNavbar/MyNavbar';
import RosterContainer from '../components/RosterContainer/RosterContainer';
import Auth from '../components/Auth/Auth';

import './App.scss';

fbConnection();

class App extends React.Component {
  state = {
    authenticated: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authenticated: true });
      } else {
        this.setState({ authenticated: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authenticated } = this.state;

    const loadComponent = () => {
      let componentToLoad = '';
      if (authenticated) {
        componentToLoad = <RosterContainer />;
      } else {
        componentToLoad = <Auth />;
      }
      return componentToLoad;
    };

    return (
      <div className="App">
        <MyNavbar authenticated={authenticated}/>
        <h1>Sports Roster</h1>
        {loadComponent()}
      </div>
    );
  }
}

export default App;
