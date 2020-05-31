import React from 'react';
import './RosterContainer.scss';

import rosterData from '../../helpers/data/rosterData';
import authData from '../../helpers/data/authData';

import Player from '../Player/Player';
import CreatePlayerForm from '../CreatePlayerForm/CreatePlayerForm';

class RosterContainer extends React.Component {
state = {
  editAPlayer: {},
  roster: [],
  CreatePlayerFormVisible: false,
  userEnteredPlayerName: '',
  userEnteredPlayerPosition: '',
  userEnteredPlayerImage: '',
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

saveNewPlayer = (newPlayer) => {
  rosterData.savePlayer(newPlayer)
    .then(() => {
      this.getInfo();
      this.setState({ CreatePlayerFormVisible: false });
    })
    .catch((err) => console.error('cannot save new player', err));
}

editAPlayer = (player) => {
  this.setState({ CreatePlayerFormVisible: true, editAPlayer: player });
  console.error('you just ran your editAPlayer function inside RosterContainer');
}


render() {
  const { roster, CreatePlayerFormVisible } = this.state;
  const makeRoster = roster.map((player) => <Player key={player.id} player={player} removePlayer={this.removePlayer} editAPlayer={this.editAPlayer}/>);

  return (
    <div className="RosterContainer">
      <button className="btn btn-dark add-player-button" onClick={() => this.setState({ CreatePlayerFormVisible: true }) }>Add Player</button>
      { CreatePlayerFormVisible ? <CreatePlayerForm saveNewPlayer={this.saveNewPlayer} player={this.editAPlayer} /> : '' }
      <div className="d-flex flex-wrap">
        {makeRoster}
      </div>
    </div>
  );
}
}

export default RosterContainer;
