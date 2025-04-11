import PropTypes from "prop-types";
import "./UsesCard.css"; // optional if you want to add overrides, otherwise inline styles below

const UsesCard = ({ title, description }) => {
  return (
    <div>
      <h3 className="text-sm font-semibold text-zinc-900 dark:text-white mb-1">{title}</h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
    </div>
  );
};

UsesCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default UsesCard;
