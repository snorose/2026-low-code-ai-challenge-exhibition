function ProjectList({ projects, onSelectProject }) {
  return (
    <main className="project-list-page">
      <section className="list-hero">
        <p className="project-kicker">2026 Low-Code AI Challenge Exhibition</p>
        <h1>프로젝트 목록</h1>
        <p>
          전시 프로젝트를 선택하면 상세 페이지에서 소개, 문제 정의, 해결 방식,
          핵심 기능, 데모 영상, 팀원, 참고 자료를 확인할 수 있습니다.
        </p>
      </section>

      <section className="project-list" aria-label="프로젝트 목록">
        {projects.map((project) => (
          <button
            className="project-card"
            key={project.id}
            type="button"
            onClick={() => onSelectProject(project.slug)}
          >
            <span className="project-card__meta">
              {[project.award, ...project.tags.slice(0, 1)].join(" / ")}
            </span>
            <strong>{project.title}</strong>
            <span>{project.summary}</span>
            <span className="project-card__link">상세 보기</span>
          </button>
        ))}
      </section>
    </main>
  );
}

export default ProjectList;
