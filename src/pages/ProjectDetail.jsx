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

function getYoutubeEmbedUrl(url) {
  if (!url) return null;
  const match = url.match(/youtu\.be\/([^?&]+)/);
  if (match) return `https://www.youtube.com/embed/${match[1]}`;
  const watchMatch = url.match(/[?&]v=([^&]+)/);
  if (watchMatch) return `https://www.youtube.com/embed/${watchMatch[1]}`;
  return null;
}

function ProjectDetail({ project, onBack }) {
  const titleWords = project.title.split(" ");
  const isLandscapePoster = project.posterOrientation === "landscape";
  const embedUrl = getYoutubeEmbedUrl(project.demo?.url);

  const sections = [
    {
      eyebrow: "Project Introduction",
      title: "프로젝트 소개",
      icon: <BookOpen className="h-5 w-5 text-indigo-500" />,
      body: project.intro,
      bgClass: "bg-white",
    },
    {
      eyebrow: "Problem Statement",
      title: "문제 정의",
      icon: <AlertCircle className="h-5 w-5 text-rose-500" />,
      body: project.problem,
      bgClass: "bg-white",
    },
    {
      eyebrow: "Proposed Solution",
      title: "해결 방안",
      icon: <Sparkles className="h-5 w-5 text-emerald-500" />,
      body: project.solution,
      bgClass: "bg-white",
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
            className="neo-btn-secondary mb-4 py-1.5 text-sm flex cursor-pointer items-center gap-1.5"
            onClick={onBack}
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            목록으로 가기
          </button>
          <div
            className={`relative z-1 grid grid-cols-1 gap-8 ${
              isLandscapePoster
                ? ""
                : "min-[901px]:grid-cols-[1.35fr_0.65fr] min-[901px]:items-center"
            }`}
          >
            <div className="max-w-none">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-sm min-[901px]:text-base font-bold ${getAwardStyle(project.award)}`}
                >
                  {getAwardLabelKo(project.award)}
                </span>
                {project.teamName ? (
                  <span className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm min-[901px]:text-base font-semibold text-indigo-800">
                    {project.teamName} 팀
                  </span>
                ) : null}
              </div>
              <h1
                id="project-title"
                className="mt-4 mb-3 text-3xl font-extrabold leading-[1.12] text-(--text-h) min-[561px]:text-4xl min-[901px]:text-5xl min-[901px]:leading-[1.08]"
              >
                {titleWords.map((word, index) => (
                  <span
                    className={`inline-block ${
                      index < titleWords.length - 1 ? "mr-[0.22em]" : ""
                    }`}
                    key={`${word}-${index}`}
                  >
                    {word}
                  </span>
                ))}
              </h1>
              <p className="m-0 mb-3 text-base font-bold leading-[1.45] text-indigo-600 min-[561px]:text-lg">
                {project.subtitle}
              </p>
              <p className="max-w-210 text-sm leading-[1.75] text-(--text) break-keep wrap-normal">
                {project.summary}
              </p>
              {isLandscapePoster && project.posterSrc ? (
                <div className="mt-4 flex w-full justify-start">
                  <ProjectPoster
                    title={project.title}
                    award={project.award}
                    posterSrc={project.posterSrc}
                    posterOrientation={project.posterOrientation}
                    placement="wide"
                  />
                </div>
              ) : null}
            </div>

            {!isLandscapePoster ? (
              <div className="flex justify-center min-[901px]:justify-end">
                <div className="relative flex w-full max-w-[36rem] justify-center min-[901px]:justify-end">
                  <ProjectPoster
                    title={project.title}
                    award={project.award}
                    posterSrc={project.posterSrc}
                    posterOrientation={project.posterOrientation}
                  />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section
        className="box-border border-b border-(--border) bg-slate-50/30 py-6 min-[561px]:py-10 min-[901px]:py-14"
        aria-label="프로젝트 핵심 설명"
      >
        <div className="mx-auto w-full max-w-(--layout-max-width) px-5 min-[561px]:px-8 min-[901px]:px-10">
          <span className="text-sm font-bold tracking-wider text-indigo-500 uppercase">
            Project Overview
          </span>
          <h2 className="m-0 mt-1.5 mb-8 text-2xl font-bold text-(--text-h) min-[561px]:text-3xl flex items-center gap-2.5">
            <BookOpen
              className="h-7 w-7 text-indigo-500 shrink-0"
              aria-hidden="true"
            />
            프로젝트 개요
          </h2>

          <div className="grid grid-cols-1 gap-6 min-[901px]:grid-cols-3">
            {sections.map((section) => (
              <article
                className={`box-border flex flex-col rounded-xl border border-slate-100 p-6 shadow-sm transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-md ${section.bgClass}`}
                key={section.title}
              >
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h3 className="m-0 text-lg font-bold text-(--text-h)">
                    {section.title}
                  </h3>
                  <span className="flex items-center" aria-hidden="true">
                    {section.icon}
                  </span>
                </div>
                <p className="text-sm leading-[1.7] text-(--text) break-keep wrap-normal">
                  {section.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="box-border border-b border-(--border) py-6 min-[561px]:py-10 min-[901px]:py-14"
        aria-labelledby="features-title"
      >
        <div className="mx-auto w-full max-w-(--layout-max-width) px-5 min-[561px]:px-8 min-[901px]:px-10">
          <span className="text-sm font-bold tracking-wider text-indigo-500 uppercase">
            Core Features
          </span>
          <h2
            id="features-title"
            className="m-0 mt-1.5 mb-8 text-2xl font-bold text-(--text-h) min-[561px]:text-3xl flex items-center gap-2.5"
          >
            <Cpu
              className="h-7 w-7 text-indigo-500 shrink-0"
              aria-hidden="true"
            />
            프로젝트 주요 기능
          </h2>
          <div className="grid grid-cols-1 gap-6 min-[901px]:grid-cols-2">
            {project.features.map((feature, idx) => (
              <article
                className="group box-border rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-md"
                key={feature.title}
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#c1d0ff]/70 text-sm font-bold text-indigo-950">
                    {idx + 1}
                  </span>
                  <h3 className="m-0 text-base font-bold text-(--text-h) transition-colors duration-500 ease-out group-hover:text-indigo-500">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm leading-[1.65] text-(--text) break-keep wrap-normal">
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
            <span className="text-sm font-bold tracking-wider text-indigo-500 uppercase">
              Demo Video
            </span>
            <h2
              id="demo-title"
              className="m-0 mt-1.5 mb-4 text-2xl font-bold text-(--text-h) min-[561px]:text-3xl flex items-center gap-2.5"
            >
              <PlayCircle
                className="h-7 w-7 text-indigo-500 shrink-0"
                aria-hidden="true"
              />
              데모 영상
            </h2>
            {embedUrl ? (
              <a
                href={project.demo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-500 hover:text-indigo-400 transition-colors"
              >
                YouTube에서 보기
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            ) : (
              <div className="mt-5 flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-red-600"></span>
                <span className="text-sm font-bold text-slate-500">
                  데모 영상 준비 중
                </span>
              </div>
            )}
          </div>

          <div className="group relative w-full overflow-hidden rounded-2xl border border-slate-700 bg-[#090a0f] shadow-2xl">
            {embedUrl ? (
              <iframe
                className="aspect-video w-full"
                src={embedUrl}
                title={`${project.title} 데모 영상`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div
                className="relative flex aspect-video flex-col items-center justify-center gap-3.5 bg-[linear-gradient(135deg,#0c0d15_0%,#191b29_100%)] p-6 text-center text-white"
                role="img"
                aria-label="데모 영상 준비 중"
              >
                <div className="grid h-14 w-14 place-items-center rounded-full bg-white/10 text-white">
                  <span className="ml-1 h-0 w-0 border-y-8 border-y-transparent border-l-12 border-l-white/60"></span>
                </div>
                <strong className="text-base font-bold tracking-tight text-slate-300">
                  데모 영상 준비 중
                </strong>
              </div>
            )}
          </div>
        </div>
      </section>

      <section
        className="box-border border-b border-(--border) py-6 min-[561px]:py-10 min-[901px]:py-14"
        aria-labelledby="team-title"
      >
        <div className="mx-auto w-full max-w-(--layout-max-width) px-5 min-[561px]:px-8 min-[901px]:px-10">
          <span className="text-sm font-bold tracking-wider text-indigo-500 uppercase">
            Team Members
          </span>
          <h2
            id="team-title"
            className="m-0 mt-1.5 mb-8 text-2xl font-bold text-(--text-h) min-[561px]:text-3xl flex items-center gap-2.5"
          >
            <Users
              className="h-7 w-7 text-indigo-500 shrink-0"
              aria-hidden="true"
            />
            팀원 소개
          </h2>
          <div className="grid grid-cols-1 gap-6 min-[561px]:grid-cols-2">
            {project.members.map((member) => (
              <article
                className="box-border flex flex-col items-start gap-2 rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-md"
                key={member.name}
              >
                <div className="flex items-center gap-2">
                  <h3 className="m-0 text-base font-bold text-(--text-h)">
                    {member.name}
                  </h3>
                  {member.role ? (
                    <span className="inline-block mt-0.5 rounded-full border border-indigo-200 bg-indigo-50 px-2 py-0.5 text-xs font-semibold text-indigo-800 shadow-[0_1px_0_rgba(79,70,229,0.08)]">
                      {member.role}
                    </span>
                  ) : null}
                </div>
                {member.description ? (
                  <p className="text-sm leading-[1.6] text-(--text) break-keep wrap-normal">
                    {member.description}
                  </p>
                ) : null}
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
          <span className="text-sm font-bold tracking-wider text-indigo-500 uppercase">
            Project Materials
          </span>
          <h2
            id="references-title"
            className="m-0 mt-1.5 mb-6 text-2xl font-bold text-(--text-h) min-[561px]:text-3xl flex items-center gap-2.5"
          >
            <FolderHeart
              className="h-7 w-7 text-indigo-500 shrink-0"
              aria-hidden="true"
            />
            프로젝트 자료
          </h2>
          <div className="mt-5 grid grid-cols-1 gap-4 min-[561px]:grid-cols-2 min-[901px]:grid-cols-3">
            <a
              href={project.references?.ppt || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-md hover:border-indigo-200"
            >
              <div className="flex items-center gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-orange-50 text-orange-500 transition-transform duration-500 ease-out group-hover:scale-[1.03]">
                  <Presentation className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="m-0 text-md font-bold text-(--text-h) transition-colors duration-500 ease-out group-hover:text-indigo-500">
                    발표 자료
                  </h3>
                </div>
              </div>
              <ExternalLink className="h-4 w-4 text-slate-400 transition-transform duration-500 ease-out group-hover:translate-x-0.5" />
            </a>

            <a
              href={project.references?.deploy || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-md hover:border-indigo-200"
            >
              <div className="flex items-center gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-50 text-indigo-500 transition-transform duration-500 ease-out group-hover:scale-[1.03]">
                  <Globe className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="m-0 text-md font-bold text-(--text-h) transition-colors duration-500 ease-out group-hover:text-indigo-500">
                    서비스 링크
                  </h3>
                </div>
              </div>
              <ExternalLink className="h-4 w-4 text-slate-400 transition-transform duration-500 ease-out group-hover:translate-x-0.5" />
            </a>

            {project.posterSrc ? (
              <a
                href={project.posterSrc}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-md hover:border-indigo-200"
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-16 shrink-0 place-items-center overflow-hidden rounded-lg border border-slate-200 bg-white p-1">
                    <img
                      src={project.posterSrc}
                      alt=""
                      className="max-h-full max-w-full object-contain"
                    />
                  </span>
                  <div>
                    <h3 className="m-0 text-md font-bold text-(--text-h) transition-colors duration-500 ease-out group-hover:text-indigo-500">
                      포스터 이미지
                    </h3>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 text-slate-400 transition-transform duration-500 ease-out group-hover:translate-x-0.5" />
              </a>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProjectDetail;
