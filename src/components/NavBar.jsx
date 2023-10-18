import './NavBar.css'

function NavBar({ skillsList, onSkillChange }) {
  return (
    <div className = 'NavContainer'>
      <ul>
        {skillsList.map((skill, index) => (
          <li key={index}>
            <button onClick={() => onSkillChange(index)}>{skill.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavBar;