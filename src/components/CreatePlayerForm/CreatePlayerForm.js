import React from 'react';
import PropTypes from 'prop-types';

import authData from '../../helpers/data/authData';

import './CreatePlayerForm.scss';

class CreatePlayerForm extends React.Component {
  static propTypes = {
    saveNewPlayer: PropTypes.func.isRequired,

  }

  state = {
    userEnteredPlayerName: '',
    userEnteredPlayerPosition: '',
    userEnteredPlayerImage: '',
    isEditing: false,
  }

  componentDidMount() {
    const { player } = this.props;
    if (player.name) {
      this.setState({
        userEnteredPlayerName: player.name,
        userEnteredPlayerPosition: player.position,
        userEnteredPlayerImage: player.imageUrl,
        isEditing: true,
      });
    }
  }


playerNameChange = (e) => {
  e.preventDefault();
  this.setState({ userEnteredPlayerName: e.target.value });
}


playerPositionChange = (e) => {
  e.preventDefault();
  this.setState({ userEnteredPlayerPosition: e.target.value });
}


playerImageChange = (e) => {
  e.preventDefault();
  this.setState({ userEnteredPlayerImage: e.target.value });
}

savePlayer = (e) => {
  e.preventDefault();
  const { userEnteredPlayerName, userEnteredPlayerPosition, userEnteredPlayerImage } = this.state;
  const { saveNewPlayer } = this.props;
  const newPlayer = {
    imageUrl: userEnteredPlayerImage,
    name: userEnteredPlayerName,
    position: userEnteredPlayerPosition,
    uid: authData.getUid(),
  };
  saveNewPlayer(newPlayer);
}

updatePlayer = (e) => {
  e.preventDefault();
  const { player, putPlayer } = this.props;
  const { userEnteredPlayerName, userEnteredPlayerPosition, userEnteredPlayerImage } = this.state;
  const updatedPlayer = {
    name: userEnteredPlayerName,
    position: userEnteredPlayerPosition,
    imageUrl: userEnteredPlayerImage,
    uid: authData.getUid(),
  };
  putPlayer(player.id, updatedPlayer);
}


render() {
  const {
    userEnteredPlayerName,
    userEnteredPlayerPosition,
    userEnteredPlayerImage,
    isEditing,
  } = this.state;

  return (

      <form className="create-player-form col-6 offset-3">
        <div className="form-group">
          <label htmlFor="user-entered-player-name">Name</label>
            <input
              type="text"
              className="form-control"
              id="user-entered-player-name"
              placeholder="Enter Player Name Here"
              value={userEnteredPlayerName}
              onChange={this.playerNameChange}
            />
        </div>

        <div className="form-group">
          <label htmlFor="user-entered-player-position">Position</label>
            <input
              type="text"
              className="form-control"
              id="user-entered-player-position"
              placeholder="Enter Player Position Here"
              value={userEnteredPlayerPosition}
              onChange={this.playerPositionChange}
            />
        </div>

        <div className="form-group">
          <label htmlFor="user-entered-player-image">Image Url</label>
            <input
              type="text"
              className="form-control"
              id="user-entered-player-image"
              placeholder="Enter Player image url Here"
              value={userEnteredPlayerImage}
              onChange={this.playerImageChange}
            />
        </div>
        {
          isEditing
            ? <button className="btn btn-dark" onClick={this.updatePlayer}>Update Player</button>
            : <button className="btn btn-dark" onClick={this.savePlayer}>Save New Player</button>
}
</form>
  );
}
}

export default CreatePlayerForm;
