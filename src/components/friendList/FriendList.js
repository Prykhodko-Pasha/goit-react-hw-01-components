import PropTypes from 'prop-types';
import classes from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={classes.friend_list}>
      {friends.map(item => FriendListItem(item))}
    </ul>
  );
}

function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <li className={classes.item} key={id}>
      <span className={classes.status} data-status={isOnline}></span>
      <img className={classes.avatar} src={avatar} alt={name} width="48" />
      <p className={classes.name}>{name}</p>
    </li>
  );
}

FriendList.propTypes = {
  title: PropTypes.string,
  friends: PropTypes.array,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.string,
};
