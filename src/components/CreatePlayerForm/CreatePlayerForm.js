import React from 'react';

import authData from '../../helpers/data/authData';

import './CreatePlayerForm.scss';

class CreatePlayerForm extends React.Component {
  state = {
    userEnteredPlayerName: '',
    userEnteredPlayerPosition: '',
    userEnteredPlayerImage: '',
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
  const newPlayer = {
    imageUrl: userEnteredPlayerImage,
    name: userEnteredPlayerName,
    position: userEnteredPlayerPosition,
    uid: authData.getUid(),
  };
  console.error('your new player object looks like this... ', newPlayer);
}

render() {
  const { userEnteredPlayerName, userEnteredPlayerPosition, userEnteredPlayerImage } = this.state;

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
<button className="btn btn-dark" onClick={this.savePlayer}>Save New Player</button>
</form>
  );
}
}

export default CreatePlayerForm;
