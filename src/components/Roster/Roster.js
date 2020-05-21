import React from 'react';
import './Roster.scss';
import rosterShape from '../../helpers/propz/rosterShape';

class Roster extends React.Component {
  static propTypes = {
    roster: rosterShape.rosterShape,
  }

  render() {
    const { roster } = this.props;

    return (
<div className="Roster col-2">
  <div className="card">
    <div className="card-body">
      <img className="card-img-top portrait" src={roster.imageUrl} alt="Team Portrait" />
      <h5 className='card-title'>{roster.name}</h5>
      <h5 className='card-text'>{roster.position}</h5>
    </div>
  </div>
</div>
    );
  }
}

export default Roster;
