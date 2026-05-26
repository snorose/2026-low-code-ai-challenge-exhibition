import { getAwardStyle, getAwardLabelKo } from "../utils/award";
import snoroseLogo from "../assets/snorose-logo.svg";
import upstageLogo from "../assets/upstage-logo.svg";

function ProjectList({ projects, onSelectProject }) {
  return (
    <main className="mx-auto w-full text-left relative overflow-hidden">
      <section className="relative overflow-hidden border-b border-(--border) bg-[#c1d0ff] text-black p-8 py-16 min-[561px]:p-16 min-[561px]:py-22 min-[901px]:p-20 min-[901px]:py-26 flex flex-col justify-center select-none">
        <div className="relative z-10 max-w-220 flex flex-col items-start gap-5">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/60 px-3.5 py-1 text-xs font-bold tracking-widest text-slate-800 uppercase">
            2026 LOW-CODE AI CHALLENGE EXHIBITION
          </span>

          <h1 className="m-0 text-5xl font-black tracking-tighter text-black min-[561px]:text-6xl min-[901px]:text-7xl leading-none font-nats">
            2026 Low-Code <br />
            <span className="uppercase block mt-1 tracking-tight">
              AI CHALLENGE
            </span>
          </h1>

          <p className="max-w-175 text-sm leading-[1.7] text-slate-800 font-medium word-break-keep-all">
            저코드(Low-Code)와 최신 AI 기술을 결합하여 창의적인 디지털 혁신을
            보여준 수상 팀들의 프로젝트 전시관입니다. 카드를 선택해 상세한 문제
            정의와 기술적 해결 방안, 데모 영상과 팀원들의 이야기를 확인해보세요.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-5 sm:gap-6">
            <img
              src={snoroseLogo}
              alt="스노로즈 로고"
              className="h-5 min-[561px]:h-6 w-auto object-contain brightness-95 contrast-125 select-none"
            />
            <div className="h-3 w-px bg-black/20 self-center"></div>
            <img
              src={upstageLogo}
              alt="업스테이지 로고"
              className="h-5 min-[561px]:h-6 w-auto object-contain select-none"
            />
          </div>
        </div>
      </section>

      <section
        className="box-border p-5 min-[561px]:p-8 min-[901px]:p-12"
        aria-label="프로젝트 전시회 라인업"
      >
        <div className="mb-6 flex flex-col gap-1.5">
          <h2 className="m-0 text-2xl font-bold text-(--text-h) min-[561px]:text-3xl">
            프로젝트 라인업
          </h2>
          <p className="text-xs text-(--text)">
            카드 상세보기를 클릭하여 팀 프로젝트의 자세한 여정을 살펴보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 min-[561px]:grid-cols-2 min-[901px]:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col rounded-xl border border-slate-100 bg-white p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-[#14151e] shadow-sm"
            >
              <div className="mb-3.5 flex flex-wrap items-center justify-between gap-2">
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold ${getAwardStyle(project.award)}`}
                >
                  {getAwardLabelKo(project.award)}
                </span>
                <span className="rounded-full bg-slate-50 px-2 py-0.5 text-xs font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                  {project.tags[0]}
                </span>
              </div>

              <h3 className="m-0 mb-2.5 text-lg font-bold leading-[1.3] text-(--text-h) group-hover:text-(--accent) transition-colors">
                {project.title}
              </h3>
              <p className="mb-5 text-[13.5px] leading-[1.6] text-(--text) line-clamp-3">
                {project.summary}
              </p>

              <div className="mt-auto flex flex-wrap gap-1.5">
                {project.tags.slice(1, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-indigo-500 font-semibold dark:text-indigo-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <button
                type="button"
                onClick={() => onSelectProject(project.slug)}
                className="mt-4 flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 py-2.5 text-sm font-semibold text-(--text-h) transition-all group-hover:bg-[#c1d0ff] group-hover:text-black group-hover:border-[#c1d0ff] focus:outline-none dark:bg-[#1a1c2d] dark:border-slate-800"
              >
                상세 보기{" "}
                <span className="transform transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default ProjectList;
