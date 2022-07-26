import PropTypes from 'prop-types';

const MissionsItem = (props) => {
  const { mission } = props;

  return (
    <tr className="mission-item">
      <td data-label="Mission">{mission.mission_name}</td>
      <td data-label="Description">
        <p>
          {mission.description}
        </p>
      </td>
      <td data-label="Status"><span>Not a member</span></td>
      <td data-label=""><button type="submit" className="join-mission-button">Join mission</button></td>
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
