import './profile.css';
import ReservedRockets from './ReservedRockets/ReservedRockets';

const Profile = () => (
  <div className="profile">
    <div className="missions">
      <h2>My missions</h2>
      <ul className="mission-items">
        <li>Mission 1</li>
        <li>Mission 2</li>
        <li>Mission 3</li>
      </ul>
    </div>
    <div className="rockets">
      <ReservedRockets />
    </div>
  </div>
);

export default Profile;
