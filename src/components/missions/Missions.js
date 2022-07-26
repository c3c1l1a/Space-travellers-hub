import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import MissionItem from './MissionItem';
import { fetchAllMissions } from '../../redux/missions/missions';
import './missions.css';

const Missions = ({ missions }) => {
  const dispatch = useDispatch();

  useEffect(() => async () => {
    await dispatch(fetchAllMissions());
  }, []);

  return (
    <div className="missionsPage">
      <table className="missions-table">
        <thead>
          <tr className="missions-table-head">
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>-</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <MissionItem key={mission.mission_id} mission={mission} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

Missions.defaultProps = {
  missions: [],
};

Missions.propTypes = {
  missions: PropTypes.arrayOf(PropTypes.oneOfType(
    [PropTypes.object],
  )),
};
export default Missions;
