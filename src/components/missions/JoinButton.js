import PropTypes from 'prop-types';

const JoinButton = ({ onClick, reserved }) => (
  <>
    {reserved
      ? (<button type="submit" onClick={onClick} className="leave">Leave Mission</button>)
      : (<button type="submit" onClick={onClick} className="join">Join Mission</button>)}
  </>
);

JoinButton.defaultProps = {
  reserved: false,
};

JoinButton.propTypes = {
  reserved: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default JoinButton;
