import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateReservedState } from '../../redux/missions/missions';

const MissionsItem = (props) => {
  const dispatch = useDispatch();
  const { mission } = props;
  const statusStyle = mission.reserved === 'true' ? 'member' : 'not-member';
  const statusText = mission.reserved === 'true' ? 'Active Member' : 'Not A Member';
  const buttonText = mission.reserved === 'true' ? 'Leave mission' : 'Join Mission';
  const buttonStyle = mission.reserved === 'true' ? 'leave' : 'join';
  const onClick = (e) => {
    e.preventDefault();
    dispatch(updateReservedState(mission.mission_id));
  };

  return (
    <tr className="mission-item">
      <td data-label="Mission" className="mission">{mission.mission_name}</td>
      <td data-label="Description" className="description">
        <p>
          {mission.description}
        </p>
      </td>
      <td data-label="Status" className="status"><span className={statusStyle}>{statusText}</span></td>
      <td data-label=""><button type="submit" className={buttonStyle} onClick={onClick}>{buttonText}</button></td>
    </tr>
  );
};

MissionsItem.defaultProps = {
  mission: {},
};

MissionsItem.propTypes = {
  mission: PropTypes.objectOf(PropTypes.oneOfType(
    [PropTypes.string, PropTypes.number, PropTypes.array],
  )),
};

export default MissionsItem;
