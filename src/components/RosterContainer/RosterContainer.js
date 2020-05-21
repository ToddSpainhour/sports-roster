import React from 'react';
import './RosterContainer.scss';

import rosterData from '../../helpers/data/rosterData';
import authData from '../../helpers/data/authData';

import Roster from '../Roster/Roster';

class RosterContainer extends React.Component {
state = {
  roster: [],
}

componentDidMount() {
  rosterData.getRosterByUid(authData.getUid())
    .then((roster) => this.setState({ roster }))
    .catch((err) => console.error('unable to get roster', err));
  console.error('inside your componentDidMount in RosterContainer');
}

render() {
  const { roster } = this.state;
  const makeRoster = roster.map((player) => <Roster key={player.id} roster={player} />); // having player or roster could cause issues...

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
