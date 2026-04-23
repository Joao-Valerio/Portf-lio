import './Projects.css';

const projects = [
  {
    id: 1,
    name: 'Dev Burguer',
    description:
      'Aplicação de cardápio digital para hamburgueria com sistema de pedidos, interface moderna e experiência de usuário fluída.',
    techs: ['React', 'JavaScript', 'CSS', 'Vercel'],
    liveUrl: 'https://dev-burguer-pi.vercel.app',
    githubUrl: 'https://github.com/Joao-Valerio',
    featured: true,
  },
  {
    id: 2,
    name: 'FinTrack',
    description:
      'Plataforma de controle financeiro pessoal com dashboard de receitas e despesas, autenticação de usuário e relatórios visuais.',
    techs: ['React', 'Python', 'API REST', 'Vercel'],
    liveUrl: 'https://pw26.vercel.app/login/?next=/',
    githubUrl: 'https://github.com/Joao-Valerio',
    featured: true,
  },
  {
    id: 3,
    name: 'FinançasApp',
    description:
      'API de finanças pessoais com endpoints para gestão de transações, categorias e relatórios mensais integrados.',
    techs: ['Python', 'FastAPI', 'SQL', 'Vercel'],
    liveUrl: 'https://finance-api-liart.vercel.app',
    githubUrl: 'https://github.com/Joao-Valerio',
    featured: false,
  },
];

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projetos" className="section projects">
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-label">Projetos</span>
          <h2 className="section-title">O que eu construí</h2>
          <p className="section-description">
            Uma seleção dos meus projetos mais relevantes — cada um com foco
            em entregar valor real ao usuário.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <article
              key={project.id}
              className={`project-card fade-in${project.featured ? ' featured' : ''}`}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              {project.featured && (
                <span className="project-featured-badge">Destaque</span>
              )}

              <div className="project-card-top">
                <div className="project-icon-wrap">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <div className="project-links">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-icon-btn"
                    aria-label="GitHub"
                  >
                    <GitHubIcon />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-icon-btn"
                    aria-label="Ver projeto"
                  >
                    <ExternalIcon />
                  </a>
                </div>
              </div>

              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-techs">
                {project.techs.map((tech) => (
                  <span key={tech} className="project-tech">{tech}</span>
                ))}
              </div>

              <div className="project-footer">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary project-live-btn"
                >
                  Ver projeto
                  <ExternalIcon />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  GitHub
                  <GitHubIcon />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-more fade-in">
          <a
            href="https://github.com/Joao-Valerio"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <GitHubIcon />
            Ver todos no GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
