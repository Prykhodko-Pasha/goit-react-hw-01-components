import PropTypes from 'prop-types';
import classes from './FriendList.module.css';

export default function FriendListItem(friend) {
  const { avatar, name, isOnline, id } = friend;
  return (
    <li className={classes.item} key={id}>
      <span className={classes.status} data-status={isOnline}></span>
      <img className={classes.avatar} src={avatar} alt={name} width="48" />
      <p className={classes.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.string,
};
