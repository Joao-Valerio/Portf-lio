import './Skills.css';

const skillGroups = [
  {
    category: 'Frontend',
    icon: '▦',
    skills: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
      { name: 'JavaScript', level: 82 },
      { name: 'React', level: 78 },
    ],
  },
  {
    category: 'Backend',
    icon: '⬡',
    skills: [
      { name: 'Python', level: 75 },
      { name: 'Node.js', level: 65 },
      { name: 'REST APIs', level: 72 },
      { name: 'SQL', level: 68 },
    ],
  },
  {
    category: 'Ferramentas',
    icon: '◈',
    skills: [
      { name: 'Git', level: 82 },
      { name: 'GitHub', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Vercel', level: 75 },
    ],
  },
];

const techBadges = [
  'HTML5', 'CSS3', 'JavaScript', 'React', 'Python',
  'Node.js', 'SQL', 'Git', 'GitHub', 'REST API', 'Vercel',
];

export default function Skills() {
  return (
    <section id="habilidades" className="section skills">
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-label">Habilidades</span>
          <h2 className="section-title">Minha Stack Tecnológica</h2>
          <p className="section-description">
            Tecnologias que utilizo para construir aplicações web modernas,
            do front ao back-end.
          </p>
        </div>

        <div className="skills-grid fade-in">
          {skillGroups.map((group) => (
            <div key={group.category} className="skill-group">
              <div className="skill-group-header">
                <span className="skill-group-icon">{group.icon}</span>
                <h3 className="skill-group-title">{group.category}</h3>
              </div>
              <div className="skill-list">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-bg">
                      <div
                        className="skill-bar-fill"
                        style={{ '--width': `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tech-badges fade-in">
          {techBadges.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
