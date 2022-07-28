import PropTypes from 'prop-types';

const Badge = ({ reserved }) => (
  <>
    {reserved
      ? (<td data-label="Status" className="status"><span className="member">Active Member</span></td>)
      : (<td data-label="Status" className="status"><span className="not-member">Not A Member</span></td>)}
  </>
);

Badge.defaultProps = {
  reserved: false,
};

Badge.propTypes = {
  reserved: PropTypes.bool,
};

export default Badge;
