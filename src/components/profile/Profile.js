import './profile.css';
import ReservedRockets from './ReservedRockets/ReservedRockets';
import ReservedMissions from './ReservedMissions/ReservedMissions';

const Profile = () => (
  <div className="profile">
    <div className="missions">
      <ReservedMissions />
    </div>
    <div className="rockets">
      <ReservedRockets />
    </div>
  </div>
);

export default Profile;
