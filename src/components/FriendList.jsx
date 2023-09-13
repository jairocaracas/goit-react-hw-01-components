import PropTypes from 'prop-types';
import css from './Friends.module.css';

export const FriendList = ({ friends }) => (
  <ul className={css.friednList}>
    {friends.map(friend => (
      <li className={css.item} key={friend.id}>
        <span
          className={css.status}
          style={{ backgroundColor: friend.isOnline ? 'green' : 'red' }}
        ></span>
        <img
          className="avatar"
          src={friend.avatar}
          alt="User avatar"
          width="48"
        />
        <p className={css.name}>{friend.name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
