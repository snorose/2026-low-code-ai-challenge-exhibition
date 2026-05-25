function ProjectDetail({ project, onBack }) {
  const sections = [
    { eyebrow: 'Overview', title: '📌 프로젝트 소개', body: project.intro },
    { eyebrow: 'Problem', title: '🧐 문제 정의', body: project.problem },
    { eyebrow: 'Solution', title: '💡 문제 해결', body: project.solution },
  ]

  return (
    <main className="project-page">
      <div className="detail-toolbar">
        <button type="button" className="back-button" onClick={onBack}>
          목록으로
        </button>
      </div>
      <section className="project-hero" aria-labelledby="project-title">
        <div className="project-hero__content">
          <p className="project-kicker">2026 Low-Code AI Challenge Exhibition</p>
          <h1 id="project-title">{project.title}</h1>
          <p className="project-subtitle">{project.subtitle}</p>
          <p className="project-summary">{project.summary}</p>
          <div className="project-tags" aria-label="프로젝트 키워드">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="project-section-grid" aria-label="프로젝트 핵심 설명">
        {sections.map((section) => (
          <article className="project-section" key={section.title}>
            <p className="section-eyebrow">{section.eyebrow}</p>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </article>
        ))}
      </section>

      <section className="project-section project-section--full" aria-labelledby="features-title">
        <p className="section-eyebrow">Features</p>
        <h2 id="features-title">⚙️ 핵심 기능</h2>
        <div className="feature-grid">
          {project.features.map((feature) => (
            <article className="feature-item" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="project-section project-section--full demo-section" aria-labelledby="demo-title">
        <div>
          <p className="section-eyebrow">Demo</p>
          <h2 id="demo-title">🎬 데모 영상</h2>
          <p>{project.demo.description}</p>
        </div>
        <div className="demo-placeholder" role="img" aria-label="데모 영상 유튜브 링크가 들어갈 자리">
          <span className="play-icon" aria-hidden="true"></span>
          <strong>{project.demo.title}</strong>
          <small>YouTube URL Placeholder</small>
        </div>
      </section>

      <section className="project-section project-section--full" aria-labelledby="team-title">
        <p className="section-eyebrow">Team</p>
        <h2 id="team-title">👥 팀원 소개</h2>
        <div className="team-grid">
          {project.members.map((member) => (
            <article className="team-member" key={member.name}>
              <div className="member-avatar" aria-hidden="true">
                {member.name.slice(0, 1)}
              </div>
              <div>
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p>{member.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="project-section project-section--full" aria-labelledby="references-title">
        <p className="section-eyebrow">Resources</p>
        <h2 id="references-title">💾 참고 자료</h2>
        <ul className="reference-list">
          {project.references.map((reference) => (
            <li key={reference}>{reference}</li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default ProjectDetail
