import { getAwardStyle, getAwardLabelKo } from "@/utils/award";
import snoroseLogo from "@/assets/snorose-logo.svg";
import upstageLogo from "@/assets/upstage-logo.svg";
import { ArrowRight } from "lucide-react";

function ProjectList({ projects, onSelectProject }) {
  const handleProjectCardKeyDown = (event, slug) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelectProject(slug);
    }
  };

  return (
    <main className="mx-auto w-full text-left relative">
      <section className="full-bleed relative overflow-hidden border-b border-(--border) bg-[#c1d0ff] text-black pt-18 pb-10 min-[561px]:pt-24 min-[561px]:pb-14 min-[901px]:pt-30 min-[901px]:pb-16 flex flex-col justify-center select-none">
        <div className="relative z-10 mx-auto flex w-full max-w-(--layout-max-width) flex-col items-start gap-5 px-5 min-[561px]:px-8 min-[901px]:px-10">
          <h1 className="m-0 max-w-250 text-[clamp(2.1rem,6.2vw,4.75rem)] font-black tracking-tighter text-black leading-[1.08] font-nats [word-break:keep-all] [overflow-wrap:normal]">
            2026 Low-Code AI CHALLENGE
          </h1>

          <p className="text-base min-[901px]:text-lg leading-[1.7] text-slate-800 font-medium word-break-keep-all">
            Low-Code와 최신 AI 기술을 결합하여 창의적인 디지털 혁신을 보여준
            수상 팀들의 프로젝트 전시관입니다.
            <br />
            프로젝트를 선택해 상세한 문제 정의와 기술적 해결 방안, 데모 영상과
            팀원들의 이야기를 확인해보세요.
          </p>

          <div className="flex flex-wrap items-start min-[561px]:items-center gap-8 sm:gap-12 border-t border-black/10 pt-5 w-full">
            <div className="flex flex-col gap-1 text-left">
              <span className="text-sm min-[901px]:text-base font-bold tracking-wider text-slate-700/60 uppercase select-none">
                주관
              </span>
              <span className="text-sm min-[901px]:text-base font-bold text-slate-800">
                숙명여자대학교 SW중심대학사업단
              </span>
            </div>
            <div className="flex flex-col gap-1 text-left">
              <span className="text-sm min-[901px]:text-base font-bold tracking-wider text-slate-700/60 uppercase select-none">
                파트너
              </span>
              <div className="flex items-center gap-4">
                <img
                  src={upstageLogo}
                  alt="업스테이지 로고"
                  className="h-7 w-auto object-contain select-none"
                />
                <div className="h-3 w-px bg-black/10"></div>
                <img
                  src={snoroseLogo}
                  alt="스노로즈 로고"
                  className="h-4.5 w-auto object-contain brightness-95 contrast-125 select-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="box-border py-5 min-[561px]:py-8 min-[901px]:py-12"
        aria-label="수상 프로젝트 목록"
      >
        <div className="mx-auto w-full max-w-(--layout-max-width) px-5 min-[561px]:px-8 min-[901px]:px-10">
          <div className="mb-6 flex flex-col gap-1.5">
            <h2 className="m-0 text-2xl font-bold text-(--text-h) min-[561px]:text-3xl">
              수상 프로젝트
            </h2>
            <p className="text-sm min-[901px]:text-base text-(--text)">
              프로젝트 카드를 선택하여 상세 페이지로 이동해보세요.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 min-[561px]:grid-cols-2 min-[901px]:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.id}
                role="button"
                tabIndex={0}
                aria-label={`${project.title} 상세 페이지로 이동`}
                onClick={() => onSelectProject(project.slug)}
                onKeyDown={(event) =>
                  handleProjectCardKeyDown(event, project.slug)
                }
                className="group flex cursor-pointer flex-col rounded-xl border border-slate-100 bg-white p-6 text-left shadow-sm transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#879cff] focus-visible:ring-offset-2 focus-visible:ring-offset-(--bg) dark:border-slate-800 dark:bg-[#14151e]"
              >
                <div className="mb-3.5 flex flex-wrap items-center justify-between gap-2">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-sm font-bold ${getAwardStyle(project.award)}`}
                  >
                    {getAwardLabelKo(project.award)}
                  </span>
                  {project.teamName ? (
                    <span className="rounded-full border border-indigo-200 bg-indigo-50 px-2.5 py-0.5 text-sm font-semibold text-indigo-800 dark:border-indigo-800/70 dark:bg-indigo-950/40 dark:text-indigo-200">
                      {project.teamName} 팀
                    </span>
                  ) : null}
                </div>

                <h3 className="m-0 mb-2.5 text-xl font-bold leading-[1.3] text-(--text-h) transition-colors duration-500 ease-out group-hover:text-(--accent)">
                  {project.title}
                </h3>
                <p className="mb-5 text-sm leading-[1.6] text-(--text) line-clamp-3 [word-break:keep-all] [overflow-wrap:normal]">
                  {project.summary}
                </p>

                <div className="mt-auto flex w-full items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 py-2.5 text-sm font-semibold text-(--text-h) transition-all duration-500 ease-out group-hover:border-[#c1d0ff] group-hover:bg-[#c1d0ff] group-hover:text-black dark:border-slate-800 dark:bg-[#1a1c2d]">
                  상세 보기
                  <ArrowRight className="h-4 w-4 transform transition-transform duration-500 ease-out group-hover:translate-x-0.5" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProjectList;
