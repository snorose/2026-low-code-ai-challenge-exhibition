import { getAwardStyle, getAwardLabelKo } from "../utils/award";
import ProjectPoster from "../components/ProjectPoster";

function ProjectDetail({ project, onBack }) {
  const sections = [
    {
      eyebrow: "Project Introduction",
      title: "📌 프로젝트 소개",
      body: project.intro,
      bgClass: "bg-white dark:bg-[#14151e]",
    },
    {
      eyebrow: "Problem Statement",
      title: "🧐 문제 정의",
      body: project.problem,
      bgClass:
        "bg-rose-50/30 border-rose-100 dark:bg-rose-950/5 dark:border-rose-900/10",
    },
    {
      eyebrow: "Proposed Solution",
      title: "💡 해결 방안",
      body: project.solution,
      bgClass:
        "bg-emerald-50/30 border-emerald-100 dark:bg-emerald-950/5 dark:border-emerald-900/10",
    },
  ];

  return (
    <main className="mx-auto w-full text-left">
      <div className="sticky top-0 z-3 border-b border-(--border) bg-white/80 px-4 py-3 backdrop-blur-md dark:bg-[#090a0f]/80 min-[561px]:px-8 flex items-center justify-between">
        <button
          type="button"
          className="neo-btn-secondary py-1.5 px-4 text-xs"
          onClick={onBack}
        >
          ← 목록으로 가기
        </button>
        <span className="hidden sm:inline-block text-xs font-bold text-(--text-h) truncate max-w-100">
          전시작: {project.title}
        </span>
        <span
          className={`text-[11px] font-bold uppercase px-2.5 py-0.5 rounded-full ${getAwardStyle(project.award)}`}
        >
          {getAwardLabelKo(project.award)}
        </span>
      </div>

      <section
        className="box-border border-b border-(--border) bg-[linear-gradient(135deg,rgba(193,208,255,0.25)_0%,rgba(245,248,255,0.5)_100%)] p-6 min-[561px]:p-10 min-[901px]:p-14"
        aria-labelledby="project-title"
      >
        <div className="relative z-1 grid grid-cols-1 gap-8 min-[901px]:grid-cols-[1.15fr_0.85fr] min-[901px]:items-center">
          <div className="max-w-205">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#c1d0ff]/50 px-3 py-0.5 text-xs font-bold text-indigo-950">
              {project.award} Awarded
            </span>
            <h1
              id="project-title"
              className="mt-4 mb-2 text-3xl font-extrabold text-(--text-h) min-[561px]:text-4xl min-[901px]:text-5xl leading-none"
            >
              {project.title}
            </h1>
            <p className="m-0 mb-4 text-base font-bold text-indigo-600 dark:text-indigo-400 min-[561px]:text-lg">
              {project.subtitle}
            </p>
            <p className="max-w-180 text-sm leading-[1.7] text-(--text)">
              {project.summary}
            </p>
            <div
              className="mt-6 flex flex-wrap gap-2"
              aria-label="프로젝트 키워드"
            >
              {project.tags.map((tag) => (
                <span
                  className="inline-flex min-h-8 items-center rounded-full border border-slate-200 bg-white px-3.5 py-0.5 text-xs font-semibold text-(--text-h) dark:bg-[#1a1c2d] dark:border-slate-800"
                  key={tag}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-center min-[901px]:justify-end">
            <div className="group relative w-full max-w-72 transform transition-all duration-500 hover:scale-102">
              <ProjectPoster
                title={project.title}
                award={project.award}
                tag={project.tags[0]}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="box-border grid grid-cols-1 border-b border-(--border) p-5.5 gap-6 bg-slate-50/30 dark:bg-slate-950/10 min-[561px]:p-8 min-[901px]:grid-cols-3"
        aria-label="프로젝트 핵심 설명"
      >
        {sections.map((section) => (
          <article
            className={`box-border flex flex-col rounded-xl border border-slate-100 p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-800 ${section.bgClass}`}
            key={section.title}
          >
            <div className="mb-3.5 flex items-center justify-between">
              <span className="text-xs font-bold tracking-wider text-indigo-500 uppercase dark:text-indigo-400">
                {section.eyebrow}
              </span>
              <span className="text-xl" role="img" aria-hidden="true">
                {section.icon}
              </span>
            </div>
            <h2 className="m-0 mb-3 text-lg font-bold text-(--text-h)">
              {section.title}
            </h2>
            <p className="text-[13.5px] leading-[1.7] text-(--text)">
              {section.body}
            </p>
          </article>
        ))}
      </section>

      <section
        className="box-border border-b border-(--border) p-6 min-[561px]:p-10 min-[901px]:p-14"
        aria-labelledby="features-title"
      >
        <span className="text-xs font-bold tracking-wider text-indigo-500 uppercase dark:text-indigo-400">
          Core Features
        </span>
        <h2
          id="features-title"
          className="m-0 mt-1.5 mb-8 text-2xl font-bold text-(--text-h) min-[561px]:text-3xl"
        >
          ⚙️ 프로젝트 핵심 기능
        </h2>
        <div className="grid grid-cols-1 gap-6 min-[901px]:grid-cols-2">
          {project.features.map((feature, idx) => (
            <article
              className="group box-border rounded-xl border border-slate-100 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:bg-[#14151e] dark:border-slate-800 shadow-sm"
              key={feature.title}
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#c1d0ff]/70 text-xs font-bold text-indigo-950">
                  {idx + 1}
                </span>
                <h3 className="m-0 text-base font-bold text-(--text-h) group-hover:text-indigo-500 transition-colors">
                  {feature.title}
                </h3>
              </div>
              <p className="text-[13.5px] leading-[1.65] text-(--text)">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="box-border grid grid-cols-1 items-center gap-8 border-b border-(--border) p-6 min-[561px]:p-10 min-[901px]:grid-cols-[0.8fr_1.2fr] min-[901px]:p-14"
        aria-labelledby="demo-title"
      >
        <div>
          <span className="text-xs font-bold tracking-wider text-indigo-500 uppercase dark:text-indigo-400">
            Interactive Demo
          </span>
          <h2
            id="demo-title"
            className="m-0 mt-1.5 mb-4 text-2xl font-bold text-(--text-h) min-[561px]:text-3xl"
          >
            🎬 데모 영상
          </h2>
          <p className="text-sm leading-[1.7] text-(--text)">
            {project.demo.description}
          </p>
          <div className="mt-5 flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-red-600"></span>
            <span className="text-xs font-bold text-slate-500">
              YouTube Embed Placeholder Mode
            </span>
          </div>
        </div>

        <div className="group relative w-full overflow-hidden rounded-2xl border border-slate-700 bg-[#090a0f] shadow-2xl">
          <div
            className="relative flex aspect-video flex-col items-center justify-center gap-3.5 bg-[linear-gradient(135deg,#0c0d15_0%,#191b29_100%)] p-6 text-center text-white"
            role="img"
            aria-label="데모 영상 유튜브 링크가 들어갈 자리"
          >
            <button
              type="button"
              className="grid h-14 w-14 place-items-center rounded-full bg-white text-black shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <span className="ml-1 h-0 w-0 border-y-8 border-y-transparent border-l-12 border-l-black"></span>
            </button>
            <strong className="text-base font-bold tracking-tight">
              {project.demo.title}
            </strong>
            <small className="text-[11px] text-slate-400 max-w-72">
              추후 유튜브 링크 연동 시 실시간 영상 인프라가 배포될 예정입니다.
            </small>

            <div className="absolute bottom-0 inset-x-0 bg-black/85 px-4 py-2 flex items-center gap-3 text-[10px] font-mono text-slate-400">
              <span>▶</span>
              <div className="h-1 flex-1 rounded bg-slate-700 overflow-hidden">
                <div className="h-full w-1/3 bg-[#c1d0ff] rounded"></div>
              </div>
              <span>00:45 / 03:00</span>
              <span>🔊</span>
              <span>[CC]</span>
              <span>⛶</span>
            </div>
          </div>
        </div>
      </section>

      <section
        className="box-border border-b border-(--border) p-6 min-[561px]:p-10 min-[901px]:p-14"
        aria-labelledby="team-title"
      >
        <span className="text-xs font-bold tracking-wider text-indigo-500 uppercase dark:text-indigo-400">
          Exhibition Builders
        </span>
        <h2
          id="team-title"
          className="m-0 mt-1.5 mb-8 text-2xl font-bold text-(--text-h) min-[561px]:text-3xl"
        >
          👥 프로젝트 메이커스
        </h2>
        <div className="grid grid-cols-1 gap-6 min-[561px]:grid-cols-2">
          {project.members.map((member) => (
            <article
              className="box-border flex flex-col items-start gap-4 rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:bg-[#14151e] dark:border-slate-800"
              key={member.name}
            >
              <div className="flex items-center gap-4">
                <div
                  className="grid h-10 w-10 place-items-center rounded-full bg-[#c1d0ff]/70 text-sm font-bold text-indigo-950"
                  aria-hidden="true"
                >
                  {member.name.slice(0, 1)}
                </div>
                <div>
                  <h3 className="m-0 text-base font-bold text-(--text-h)">
                    {member.name}
                  </h3>
                  <span className="inline-block mt-0.5 rounded bg-indigo-50/50 px-2 py-0.5 text-[10px] font-bold text-indigo-700 dark:bg-indigo-950/20 dark:text-indigo-300">
                    {member.role}
                  </span>
                </div>
              </div>
              <p className="text-[13px] leading-[1.6] text-(--text)">
                {member.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="box-border p-6 min-[561px]:p-10 min-[901px]:p-14"
        aria-labelledby="references-title"
      >
        <span className="text-xs font-bold tracking-wider text-indigo-500 uppercase dark:text-indigo-400">
          Reference Materials
        </span>
        <h2
          id="references-title"
          className="m-0 mt-1.5 mb-6 text-2xl font-bold text-(--text-h) min-[561px]:text-3xl"
        >
          💾 리소스 및 참고 자료
        </h2>
        <ul className="mt-5 grid grid-cols-1 gap-4 p-0 list-none min-[561px]:grid-cols-2">
          {project.references.map((reference) => (
            <li
              className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-4 font-semibold text-(--text-h) shadow-sm dark:bg-[#14151e] dark:border-slate-800"
              key={reference}
            >
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#c1d0ff]/60 text-sm">
                📁
              </span>
              <span className="text-[13.5px] tracking-tight">{reference}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default ProjectDetail;
