import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { getRandomHexColor } from './getRandomColor';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title !== undefined && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(item => (
          <li
            className={css.item}
            key={item.id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
