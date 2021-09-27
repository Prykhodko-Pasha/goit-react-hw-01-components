import PropTypes from 'prop-types';
import classes from './FriendList.module.css';
import FriendListItem from './FriendListItem';

export default function FriendList({ friends }) {
  return (
    <ul className={classes.friend_list}>
      {friends.map(friend => FriendListItem(friend))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      friend: PropTypes.object,
    }),
  ),
};
