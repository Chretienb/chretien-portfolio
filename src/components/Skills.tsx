const skillGroups = [
  {
    title: 'Programming',
    items: ['TypeScript', 'Rust', 'Python', 'SQL', 'Flutter'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Full-Stack Web', 'Expo'],
  },
  {
    title: 'Backend',
    items: ['REST API', 'JWT Auth', 'Node.js'],
  },
  {
    title: 'Data',
    items: ['PostgreSQL', 'Supabase', 'Data Modeling', 'Visualization'],
  },
  {
    title: 'Tools',
    items: ['Git/GitHub', 'Vite', 'Excel'],
  },
]

function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skillGroups.map((g) => (
          <div key={g.title} className="skill-group">
            <h3 className="skill-title">{g.title}</h3>
            <ul className="skill-list">
              {g.items.map((item) => (
                <li key={item} className="mono">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
