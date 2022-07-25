import MissionItem from './MissionItem';
import './missions.css';

const Missions = () => (
  <div className="missions">
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

export default Missions;
