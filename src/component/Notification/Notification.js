import T from 'prop-types';
import '../Notification/Notification.css';

const Notification = ({ message }) => {
  return <p className="message">{message}</p>;
};

Notification.propTypes = {
  message: T.string.isRequired,
};

export default Notification;
