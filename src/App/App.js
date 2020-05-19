import React from 'react';
import MyNavbar from '../components/MyNavbar/MyNavbar';
import RosterContainer from '../components/RosterContainer/RosterContainer';
import Auth from '../components/Auth/Auth';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MyNavbar />
        <Auth />
        <RosterContainer />
      </div>
    );
  }
}

export default App;
