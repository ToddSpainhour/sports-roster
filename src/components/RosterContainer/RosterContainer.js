import React from 'react';
import './RosterContainer.scss';

import rosterData from '../../helpers/data/rosterData';
import authData from '../../helpers/data/authData';

import Roster from '../Roster/Roster';

class RosterContainer extends React.Component {
state = {
  roster: [],
}


getInfo = () => {
  rosterData.getRosterByUid(authData.getUid())
    .then((roster) => this.setState({ roster }))
    .catch((err) => console.error('unable to get roster', err));
}

componentDidMount() {
  this.getInfo();
}


removePlayer = (playerId) => {
  rosterData.deletePlayer(playerId)
    .then(() => this.getInfo())
    .catch((err) => console.error('cannot delete player;', err));
}


render() {
  const { roster } = this.state;
  const makeRoster = roster.map((player) => <Roster key={player.id} roster={player} removePlayer={this.removePlayer}/>);

  return (
    <div className="RosterContainer">
      <div className="d-flex flex-wrap">
        {makeRoster}
      </div>
    </div>
  );
}
}

export default RosterContainer;
