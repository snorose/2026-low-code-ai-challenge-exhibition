import { getAwardStyle, getAwardLabelKo } from "@/utils/award";
import snoroseLogo from "@/assets/snorose-logo.svg";
import upstageLogo from "@/assets/upstage-logo.svg";
import { ArrowRight } from "lucide-react";

function ProjectList({ projects, onSelectProject }) {
  return (
    <main className="mx-auto w-full text-left relative">
      <section className="full-bleed relative overflow-hidden border-b border-(--border) bg-[#c1d0ff] text-black py-16 min-[561px]:py-22 min-[901px]:py-26 flex flex-col justify-center select-none">
        <div className="relative z-10 mx-auto flex w-full max-w-(--layout-max-width) flex-col items-start gap-5 px-5 min-[561px]:px-8 min-[901px]:px-10">
          <h1 className="m-0 whitespace-nowrap text-[clamp(2.35rem,7.4vw,6rem)] font-black tracking-tighter text-black leading-none font-nats">
            2026 Low-Code AI CHALLENGE
          </h1>

          <p className="text-base min-[901px]:text-lg leading-[1.7] text-slate-800 font-medium word-break-keep-all">
            Low-Code와 최신 AI 기술을 결합하여 창의적인 디지털 혁신을 보여준
            수상 팀들의 프로젝트 전시관입니다.
            <br />
            카드를 선택해 상세한 문제 정의와 기술적 해결 방안, 데모 영상과
            팀원들의 이야기를 확인해보세요.
          </p>

          <div className="mt-6 flex flex-wrap items-start min-[561px]:items-center gap-8 sm:gap-12 border-t border-black/10 pt-5 w-full">
            <div className="flex flex-col gap-1 text-left">
              <span className="text-xs min-[901px]:text-base font-bold tracking-wider text-slate-700/60 uppercase select-none">
                주관
              </span>
              <span className="text-sm min-[901px]:text-base font-bold text-slate-800">
                숙명여자대학교 SW중심대학사업단
              </span>
            </div>
            <div className="flex flex-col gap-1 text-left">
              <span className="text-xs min-[901px]:text-base font-bold tracking-wider text-slate-700/60 uppercase select-none">
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
        aria-label="프로젝트 전시회 라인업"
      >
        <div className="mx-auto w-full max-w-(--layout-max-width) px-5 min-[561px]:px-8 min-[901px]:px-10">
          <div className="mb-6 flex flex-col gap-1.5">
            <h2 className="m-0 text-2xl font-bold text-(--text-h) min-[561px]:text-3xl">
              프로젝트 라인업
            </h2>
            <p className="text-sm min-[901px]:text-base text-(--text)">
              카드 상세보기를 클릭하여 팀 프로젝트의 자세한 여정을 살펴보세요.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 min-[561px]:grid-cols-2 min-[901px]:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col rounded-xl border border-slate-100 bg-white p-6 text-left shadow-sm transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-lg dark:border-slate-800 dark:bg-[#14151e]"
              >
                <div className="mb-3.5 flex flex-wrap items-center justify-between gap-2">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs min-[901px]:text-sm font-bold ${getAwardStyle(project.award)}`}
                  >
                    {getAwardLabelKo(project.award)}
                  </span>
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs min-[901px]:text-sm font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                    {project.tags[0]}
                  </span>
                </div>

                <h3 className="m-0 mb-2.5 text-lg font-bold leading-[1.3] text-(--text-h) transition-colors duration-500 ease-out group-hover:text-(--accent)">
                  {project.title}
                </h3>
                <p className="mb-5 text-[13.5px] min-[901px]:text-sm leading-[1.6] text-(--text) line-clamp-3">
                  {project.summary}
                </p>

                <div className="mt-auto flex flex-wrap gap-1.5">
                  {project.tags.slice(1, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs min-[901px]:text-sm text-indigo-700 font-bold dark:text-indigo-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => onSelectProject(project.slug)}
                  className="mt-4 flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 py-2.5 text-sm font-semibold text-(--text-h) transition-all duration-500 ease-out group-hover:bg-[#c1d0ff] group-hover:text-black group-hover:border-[#c1d0ff] focus:outline-none dark:bg-[#1a1c2d] dark:border-slate-800"
                >
                  상세 보기
                  <ArrowRight className="h-4 w-4 transform transition-transform duration-500 ease-out group-hover:translate-x-0.5" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProjectList;
