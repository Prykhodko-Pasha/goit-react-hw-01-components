import PropTypes from 'prop-types';
import classes from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={classes.friend_list}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={classes.item} key={id}>
          <span className={classes.status} data-status={isOnline}></span>
          <img className={classes.avatar} src={avatar} alt={name} width="48" />
          <p className={classes.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    }),
  ),
};
