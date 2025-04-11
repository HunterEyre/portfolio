import PropTypes from "prop-types";
import "./Footer.css"; // Assuming you will add relevant CSS for the footer here

const Footer = ({ options }) => {
  return (
    <footer className="footer">
      <div className="footer-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Links on the left side */}
        <ul className="footer-links flex space-x-6">
          {options.map((option, index) => (
            <li key={index}>
              <a href={option.path} className="footer-link">
                {option.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Rights reserved text on the right side */}
        <div className="footer-rights text-sm">
          <p>© 2025 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Footer;
