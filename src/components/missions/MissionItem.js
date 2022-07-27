import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Badge from './Badge';
import JoinButton from './JoinButton';
import { updateReservedState } from '../../redux/missions/missions';

const MissionsItem = (props) => {
  const dispatch = useDispatch();
  const { mission } = props;

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
      <Badge reserved={mission.reserved} />
      <td data-label=""><JoinButton onClick={onClick} reserved={mission.reserved} /></td>
    </tr>
  );
};

MissionsItem.defaultProps = {
  mission: {},
};

MissionsItem.propTypes = {
  mission: PropTypes.objectOf(PropTypes.oneOfType(
    [PropTypes.string, PropTypes.number, PropTypes.array, PropTypes.bool],
  )),
};

export default MissionsItem;
