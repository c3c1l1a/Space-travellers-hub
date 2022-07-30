import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import MissionItem from './MissionItem';
import { fetchAllMissions } from '../../redux/missions/missions';
import './missions.css';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => async () => {
    if (missions.length === 0) await dispatch(fetchAllMissions());
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

export default Missions;
