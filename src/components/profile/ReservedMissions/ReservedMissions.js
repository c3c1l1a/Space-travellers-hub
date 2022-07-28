import React from 'react';
import { useSelector } from 'react-redux';

const ReservedMissions = () => {
  const reservedMissions = useSelector((state) => (
    state.missions.filter((mission) => mission.reserved)
  ));

  return (
    <div className="missions">
      <h2>My missions</h2>
      <ul className="mission-items">
        {reservedMissions.length > 0
          ? reservedMissions.map((mission) => (
            <li className="list-item" key={mission.mission_id}>
              {mission.mission_name}
            </li>
          ))
          : 'You have no reserved rockets'}

      </ul>
    </div>

  );
};

export default ReservedMissions;
