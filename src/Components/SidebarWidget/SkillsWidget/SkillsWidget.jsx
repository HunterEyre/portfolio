import './SkillsWidget.css';
import PropTypes from 'prop-types';

/* TODO:
  Fill out this component according to the README.
*/

const SkillsWidget = ({ title, content, skills }) => {
  return (
    <section data-testid="skillsWidget" className="skills-widget">
      <div className="skills-widget-header">
      <img src="/SkillsIcon.svg" alt="Skills Icon" className="skills-icon"/>
      <h2 data-testid="skillsWidgetTitle">{title}</h2>
      </div>
      <p data-testid="skillsWidgetContent">{content}</p>
      <ul>
        {skills.map((skill, index) => (
          <li key={index} data-testid={`skillsWidgetItem${index}`}>
            <div className="skills-item">
              <img data-testid={`skillsWidgetItemLogo${index}`} src={skill.icon} alt={`${skill.name} Icon`} />
              <div className="skills-item-content">
                <h3 data-testid={`skillsWidgetItemName${index}`}>{skill.name}</h3>
                <div className="skills-item-proficiency">
                  <div
                    data-testid={`skillsWidgetItemProficiency${index}`}
                    className="proficiency-bar"
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

SkillsWidget.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      proficiency: PropTypes.number.isRequired,
    })
  ),
};

SkillsWidget.defaultProps = {
  skills: [],
};

export default SkillsWidget;
