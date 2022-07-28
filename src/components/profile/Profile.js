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
      <h2>My Rockets</h2>
      <ul className="rocket-items">
        <li>Rocket 1</li>
        <li>Rocket 2</li>
      </ul>
    </div>
    <ReservedRockets />
  </div>
);

export default Profile;
