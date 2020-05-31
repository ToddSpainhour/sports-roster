import React from 'react';
import PropTypes from 'prop-types';
import './Player.scss';
import rosterShape from '../../helpers/propz/rosterShape';

class Player extends React.Component {
  static propTypes = {
    roster: rosterShape.rosterShape,
    removePlayer: PropTypes.func.isRequired,
  }

  deletePlayerEvent = (e) => {
    // console.log('you just deleted a player');
    const { roster, removePlayer } = this.props;
    removePlayer(roster.id);
  }

  updatePlayerEvent = (e) => {
    e.preventDefault();
    console.error('you just fired off your updatePlayerEvent in Roster.js');
  }

  render() {
    const { roster } = this.props;

    return (
<div className="Player col-2">
  <div className="card">
    <div className="card-body">
      <img className="card-img-top portrait" src={roster.imageUrl} alt="Team Portrait" />
      <h5 className='card-title'>{roster.name}</h5>
      <h5 className='card-text'>{roster.position}</h5>
      <button className="btn btn-dark" onClick={this.deletePlayerEvent}><i className="fas fa-user-minus"></i></button>
      <button className="btn btn-dark" onClick={this.updatePlayerEvent}><i className="far fa-edit"></i></button>
    </div>
  </div>
</div>
    );
  }
}

export default Player;
