import heroImg from "../assets/hero.png";

function ProjectList({ projects, onSelectProject }) {
  return (
    <main className="mx-auto w-full max-w-[1126px] text-left">
      <section
        className="border-b border-[var(--border)] bg-slate-50 px-5 pt-11 pb-8 min-[561px]:bg-[position:right_20px_top_24px] min-[561px]:bg-[length:104px_auto] min-[901px]:px-14 min-[901px]:pt-[72px] min-[901px]:pb-11 min-[901px]:bg-[position:right_56px_center] min-[901px]:bg-[length:180px_auto] dark:bg-[#16171d] min-[561px]:px-7 min-[561px]:pt-14 min-[561px]:pb-9 min-[561px]:bg-[position:right_28px_top_28px] min-[561px]:bg-[length:130px_auto]"
        style={{
          backgroundImage: `linear-gradient(color-mix(in srgb, var(--bg) 76%, transparent), color-mix(in srgb, var(--bg) 96%, transparent)), url(${heroImg})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <p className="mb-3 text-sm leading-[1.3] font-bold tracking-normal text-teal-700 uppercase">
          2026 Low-Code AI Challenge Exhibition
        </p>
        <h1>프로젝트 목록</h1>
        <p className="max-w-[720px] text-[19px] leading-[1.7]">
          전시 프로젝트를 선택하면 상세 페이지에서 소개, 문제 정의, 해결 방식,
          핵심 기능, 데모 영상, 팀원, 참고 자료를 확인할 수 있습니다.
        </p>
      </section>

      <section
        className="grid grid-cols-1 gap-[18px] p-5 min-[561px]:p-6 min-[901px]:grid-cols-3 min-[901px]:p-8"
        aria-label="프로젝트 목록"
      >
        {projects.map((project) => (
          <button
            className="flex min-h-0 cursor-pointer flex-col items-start gap-4 rounded-lg border border-[var(--border)] bg-white p-5 text-left font-[inherit] text-[var(--text)] transition duration-200 ease-in-out hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-[var(--shadow)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-blue-600/35 min-[561px]:min-h-[260px] min-[561px]:p-6 dark:bg-[#1f2028]"
            key={project.id}
            type="button"
            onClick={() => onSelectProject(project.slug)}
          >
            <span className="text-sm font-bold text-teal-700">
              {[project.award, ...project.tags.slice(0, 1)].join(" / ")}
            </span>
            <strong className="text-2xl leading-[1.3] text-[var(--text-h)]">
              {project.title}
            </strong>
            <span className="leading-[1.65]">{project.summary}</span>
            <span className="mt-auto font-bold text-blue-600">상세 보기</span>
          </button>
        ))}
      </section>
    </main>
  );
}

export default ProjectList;
