import PropTypes from "prop-types";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import "./Dropdown.css";

export default function Dropdown({ options }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown">
      <button className="menu-button" onClick={toggleDropdown}>
        Menu <FaChevronDown className="chevron-icon" />
      </button>

      {isOpen && (
        <div className="dropdown-panel">
          <ul className="dropdown-list">
            {options.map((option, index) => (
              <li key={index}>
                <a href={option.path} className="dropdown-link">
                  {option.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};
