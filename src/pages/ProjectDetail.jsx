import { getAwardStyle, getAwardLabelKo } from "@/utils/award";
import ProjectPoster from "@/components/ProjectPoster";
import {
  ArrowLeft,
  BookOpen,
  AlertCircle,
  Sparkles,
  Cpu,
  PlayCircle,
  Users,
  FolderHeart,
  Presentation,
  Globe,
  ExternalLink,
} from "lucide-react";

function ProjectDetail({ project, onBack }) {
  const sections = [
    {
      eyebrow: "Project Introduction",
      title: "프로젝트 소개",
      icon: (
        <BookOpen className="h-5 w-5 text-indigo-500 dark:text-indigo-400" />
      ),
      body: project.intro,
      bgClass: "bg-white dark:bg-[#14151e]",
    },
    {
      eyebrow: "Problem Statement",
      title: "문제 정의",
      icon: (
        <AlertCircle className="h-5 w-5 text-rose-500 dark:text-rose-400" />
      ),
      body: project.problem,
      bgClass: "bg-white dark:bg-[#14151e]",
    },
    {
      eyebrow: "Proposed Solution",
      title: "해결 방안",
      icon: (
        <Sparkles className="h-5 w-5 text-emerald-500 dark:text-emerald-400" />
      ),
      body: project.solution,
      bgClass: "bg-white dark:bg-[#14151e]",
    },
  ];

  return (
    <main className="mx-auto w-full text-left">
      <section
        className="box-border border-b border-(--border) bg-[linear-gradient(135deg,rgba(193,208,255,0.25)_0%,rgba(245,248,255,0.5)_100%)] py-6 pt-4 min-[561px]:py-10 min-[561px]:pt-6 min-[901px]:py-14 min-[901px]:pt-8"
        aria-labelledby="project-title"
      >
        <div className="mx-auto w-full max-w-(--layout-max-width) px-5 min-[561px]:px-8 min-[901px]:px-10">
          <button
            type="button"
            className="neo-btn-secondary mb-8 py-1.5 px-4 text-xs min-[901px]:text-sm flex items-center gap-1.5"
            onClick={onBack}
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            목록으로 가기
          </button>
          <div className="relative z-1 grid grid-cols-1 gap-8 min-[901px]:grid-cols-[1.15fr_0.85fr] min-[901px]:items-center">
            <div className="max-w-205">
              <span
                className={`inline-flex items-center rounded-full px-3 py-1 text-sm min-[901px]:text-base font-bold ${getAwardStyle(project.award)}`}
              >
                {getAwardLabelKo(project.award)}
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
                    className="inline-flex min-h-8 items-center rounded-full border border-slate-300 bg-slate-50 px-3.5 py-0.5 text-xs min-[901px]:text-sm font-bold text-slate-800 dark:bg-[#1a1c2d] dark:border-slate-700 dark:text-slate-100"
                    key={tag}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-center min-[901px]:justify-end">
              <div className="group relative w-full max-w-72 transform transition-all duration-500 ease-out hover:scale-[1.01]">
                <ProjectPoster
                  title={project.title}
                  award={project.award}
                  tag={project.tags[0]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="box-border border-b border-(--border) bg-slate-50/30 py-5.5 dark:bg-slate-950/10 min-[561px]:py-8"
        aria-label="프로젝트 핵심 설명"
      >
        <div className="mx-auto grid w-full max-w-(--layout-max-width) grid-cols-1 gap-6 px-5 min-[561px]:px-8 min-[901px]:grid-cols-3 min-[901px]:px-10">
          {sections.map((section) => (
            <article
              className={`box-border flex flex-col rounded-xl border border-slate-100 p-6 shadow-sm transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 ${section.bgClass}`}
              key={section.title}
            >
              <div className="mb-3.5 flex items-center justify-between">
                <span className="text-xs min-[901px]:text-sm font-bold tracking-wider text-indigo-500 uppercase dark:text-indigo-400">
                  {section.eyebrow}
                </span>
                <span className="flex items-center" aria-hidden="true">
                  {section.icon}
                </span>
              </div>
              <h2 className="m-0 mb-3 text-lg font-bold text-(--text-h)">
                {section.title}
              </h2>
              <p className="text-[13.5px] min-[901px]:text-sm leading-[1.7] text-(--text)">
                {section.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="box-border border-b border-(--border) py-6 min-[561px]:py-10 min-[901px]:py-14"
        aria-labelledby="features-title"
      >
        <div className="mx-auto w-full max-w-(--layout-max-width) px-5 min-[561px]:px-8 min-[901px]:px-10">
          <span className="text-xs min-[901px]:text-sm font-bold tracking-wider text-indigo-500 uppercase dark:text-indigo-400">
            Core Features
          </span>
          <h2
            id="features-title"
            className="m-0 mt-1.5 mb-8 text-2xl font-bold text-(--text-h) min-[561px]:text-3xl flex items-center gap-2.5"
          >
            <Cpu
              className="h-7 w-7 text-indigo-500 dark:text-indigo-400 shrink-0"
              aria-hidden="true"
            />
            프로젝트 핵심 기능
          </h2>
          <div className="grid grid-cols-1 gap-6 min-[901px]:grid-cols-2">
            {project.features.map((feature, idx) => (
              <article
                className="group box-border rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-md dark:bg-[#14151e] dark:border-slate-800"
                key={feature.title}
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#c1d0ff]/70 text-xs min-[901px]:text-sm font-bold text-indigo-950">
                    {idx + 1}
                  </span>
                  <h3 className="m-0 text-base font-bold text-(--text-h) transition-colors duration-500 ease-out group-hover:text-indigo-500">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-[13.5px] min-[901px]:text-sm leading-[1.65] text-(--text)">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="box-border border-b border-(--border) py-6 min-[561px]:py-10 min-[901px]:py-14"
        aria-labelledby="demo-title"
      >
        <div className="mx-auto grid w-full max-w-(--layout-max-width) grid-cols-1 items-center gap-8 px-5 min-[561px]:px-8 min-[901px]:grid-cols-[0.8fr_1.2fr] min-[901px]:px-10">
          <div>
            <span className="text-xs min-[901px]:text-sm font-bold tracking-wider text-indigo-500 uppercase dark:text-indigo-400">
              Interactive Demo
            </span>
            <h2
              id="demo-title"
              className="m-0 mt-1.5 mb-4 text-2xl font-bold text-(--text-h) min-[561px]:text-3xl flex items-center gap-2.5"
            >
              <PlayCircle
                className="h-7 w-7 text-indigo-500 dark:text-indigo-400 shrink-0"
                aria-hidden="true"
              />
              데모 영상
            </h2>
            <p className="text-sm leading-[1.7] text-(--text)">
              {project.demo.description}
            </p>
            <div className="mt-5 flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-red-600"></span>
              <span className="text-xs min-[901px]:text-sm font-bold text-slate-500">
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
              <small className="text-[11px] min-[901px]:text-sm text-slate-400 max-w-72">
                추후 유튜브 링크 연동 시 실시간 영상 인프라가 배포될 예정입니다.
              </small>

              <div className="absolute bottom-0 inset-x-0 bg-black/85 px-4 py-2 flex items-center gap-3 text-[10px] min-[901px]:text-sm font-mono text-slate-400">
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
        </div>
      </section>

      <section
        className="box-border border-b border-(--border) py-6 min-[561px]:py-10 min-[901px]:py-14"
        aria-labelledby="team-title"
      >
        <div className="mx-auto w-full max-w-(--layout-max-width) px-5 min-[561px]:px-8 min-[901px]:px-10">
          <span className="text-xs min-[901px]:text-sm font-bold tracking-wider text-indigo-500 uppercase dark:text-indigo-400">
            Exhibition Builders
          </span>
          <h2
            id="team-title"
            className="m-0 mt-1.5 mb-8 text-2xl font-bold text-(--text-h) min-[561px]:text-3xl flex items-center gap-2.5"
          >
            <Users
              className="h-7 w-7 text-indigo-500 dark:text-indigo-400 shrink-0"
              aria-hidden="true"
            />
            프로젝트 메이커스
          </h2>
          <div className="grid grid-cols-1 gap-6 min-[561px]:grid-cols-2">
            {project.members.map((member) => (
              <article
                className="box-border flex flex-col items-start gap-4 rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-md dark:bg-[#14151e] dark:border-slate-800"
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
                    <span className="inline-block mt-0.5 rounded bg-indigo-50/50 px-2 py-0.5 text-[10px] min-[901px]:text-sm font-bold text-indigo-700 dark:bg-indigo-950/20 dark:text-indigo-300">
                      {member.role}
                    </span>
                  </div>
                </div>
                <p className="text-[13px] min-[901px]:text-sm leading-[1.6] text-(--text)">
                  {member.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="box-border py-6 min-[561px]:py-10 min-[901px]:py-14"
        aria-labelledby="references-title"
      >
        <div className="mx-auto w-full max-w-(--layout-max-width) px-5 min-[561px]:px-8 min-[901px]:px-10">
          <span className="text-xs min-[901px]:text-sm font-bold tracking-wider text-indigo-500 uppercase dark:text-indigo-400">
            Reference Materials
          </span>
          <h2
            id="references-title"
            className="m-0 mt-1.5 mb-6 text-2xl font-bold text-(--text-h) min-[561px]:text-3xl flex items-center gap-2.5"
          >
            <FolderHeart
              className="h-7 w-7 text-indigo-500 dark:text-indigo-400 shrink-0"
              aria-hidden="true"
            />
            리소스 및 참고 자료
          </h2>
          <div className="mt-5 grid grid-cols-1 gap-4 min-[561px]:grid-cols-2">
            <a
              href={project.references?.ppt || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-md hover:border-indigo-200 dark:bg-[#14151e] dark:border-slate-800 dark:hover:border-indigo-900/50"
            >
              <div className="flex items-center gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-orange-50 text-orange-500 transition-transform duration-500 ease-out group-hover:scale-[1.03] dark:bg-orange-950/20 dark:text-orange-400">
                  <Presentation className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="m-0 text-sm font-bold text-(--text-h) transition-colors duration-500 ease-out group-hover:text-indigo-500 dark:group-hover:text-indigo-400">
                    PPT 발표 자료
                  </h3>
                  <p className="mt-0.5 text-xs min-[901px]:text-sm text-(--text)">
                    기획서 및 프로젝트 핵심 발표 자료
                  </p>
                </div>
              </div>
              <ExternalLink className="h-4 w-4 text-slate-400 transition-transform duration-500 ease-out group-hover:translate-x-0.5 dark:text-slate-500" />
            </a>

            <a
              href={project.references?.deploy || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-md hover:border-indigo-200 dark:bg-[#14151e] dark:border-slate-800 dark:hover:border-indigo-900/50"
            >
              <div className="flex items-center gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-50 text-indigo-500 transition-transform duration-500 ease-out group-hover:scale-[1.03] dark:bg-indigo-950/20 dark:text-indigo-400">
                  <Globe className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="m-0 text-sm font-bold text-(--text-h) transition-colors duration-500 ease-out group-hover:text-indigo-500 dark:group-hover:text-indigo-400">
                    서비스 배포 링크
                  </h3>
                  <p className="mt-0.5 text-xs min-[901px]:text-sm text-(--text)">
                    실제 서비스 데모 및 프로덕션 확인
                  </p>
                </div>
              </div>
              <ExternalLink className="h-4 w-4 text-slate-400 transition-transform duration-500 ease-out group-hover:translate-x-0.5 dark:text-slate-500" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProjectDetail;
