import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateReservedState } from '../../redux/missions/missions';

const MissionsItem = (props) => {
  const dispatch = useDispatch();
  const { mission } = props;
  const statusStyle = mission.reserved ? 'member' : 'not-member';
  const statusText = mission.reserved ? 'Active Member' : 'Not A Member';
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
      <td data-label=""><button type="submit" className="join-mission-button" onClick={onClick}>Join mission</button></td>
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
