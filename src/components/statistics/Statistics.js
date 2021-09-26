import PropTypes from 'prop-types';
import classes from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={classes.statistics}>
      {title && <h2 className={classes.title}>{title}</h2>}

      <ul className={classes.stat}>
        {stats.map(item => (
          <li className={classes.item} key={item.id}>
            <span className={classes.label}>{item.label}</span>
            <span className={classes.percentage}>{item.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
};
