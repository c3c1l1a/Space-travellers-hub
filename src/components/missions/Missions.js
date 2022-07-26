import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import MissionItem from './MissionItem';
import { fetchAllMissions } from '../../redux/missions/missions';
import './missions.css';

const Missions = () => {
  const dispatch = useDispatch();

  useEffect(() => async () => {
    await dispatch(fetchAllMissions());
  }, []);

  return (
    <div className="missionsPage">
      <table className="missions-table">
        <tr className="missions-table-head">
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th>-</th>
        </tr>
        <MissionItem />
        <MissionItem />
        <MissionItem />

      </table>
    </div>
  );
};
export default Missions;
