import PropTypes from 'prop-types';
import './result.scss';

function Result({ title, subtitle, count }) {
  const formattedCount = count !== undefined ? count.toFixed(2) : '0.00';

  return (
    <div className="result">
      <div>
        <div className="result__title">{title}</div>
        <div className="result__subtitle">{subtitle}</div>
      </div>
      <div className="result__count">${formattedCount}</div>
    </div>
  )
}

Result.propTypes = {
  title: PropTypes.string,    
  subtitle: PropTypes.string,
  count: PropTypes.number,
};

export default Result
