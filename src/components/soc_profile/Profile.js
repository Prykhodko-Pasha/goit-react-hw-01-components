import PropTypes from 'prop-types';
import classes from './Profile.module.css';

export default function Profile({ name, tag, location, avatar, stats }) {
  const { followers, views, likes } = stats;
  return (
    <div className={classes.profile}>
      <div className={classes.description}>
        <img
          src={avatar}
          alt="Аватар пользователя"
          className={classes.avatar}
        />
        <p className={classes.name}>{name}</p>
        <p className={classes.tag}>@{tag}</p>
        <p className={classes.location}>{location}</p>
      </div>

      <ul className={classes.stats}>
        <li>
          <span className={classes.label}>Followers</span>
          <span className={classes.quantity}>{followers}</span>
        </li>
        <li>
          <span className={classes.label}>Views</span>
          <span className={classes.quantity}>{views}</span>
        </li>
        <li>
          <span className={classes.label}>Likes</span>
          <span className={classes.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
