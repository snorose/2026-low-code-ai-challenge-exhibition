import heroImg from "../assets/hero.png";

function ProjectDetail({ project, onBack }) {
  const sections = [
    {
      eyebrow: "Project Detail",
      title: "📌 프로젝트 상세",
      body: project.intro,
    },
    { eyebrow: "Problem", title: "🧐 문제 정의", body: project.problem },
    { eyebrow: "Solution", title: "💡 해결", body: project.solution },
  ];

  return (
    <main className="mx-auto w-full max-w-[1126px] text-left">
      <div className="sticky top-0 z-[2] border-b border-[var(--border)] bg-white/90 px-5 py-3 backdrop-blur-xl min-[561px]:px-8 min-[561px]:py-3.5 dark:bg-[#16171d]/90">
        <button
          type="button"
          className="min-h-[38px] cursor-pointer rounded-lg border border-[var(--border)] bg-white px-3.5 text-[15px] font-bold text-[var(--text-h)] hover:border-blue-600 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-blue-600/35 dark:bg-[#1f2028]"
          onClick={onBack}
        >
          목록으로
        </button>
      </div>
      <section
        className="box-border flex min-h-[430px] items-end border-b border-[var(--border)] bg-slate-50 px-5 pt-11 pb-9 bg-[position:center_top_28px] bg-[length:150px_auto] min-[561px]:min-h-[480px] min-[561px]:px-7 min-[561px]:pt-14 min-[561px]:pb-11 min-[561px]:bg-[length:190px_auto] min-[901px]:min-h-[520px] min-[901px]:px-14 min-[901px]:pt-[72px] min-[901px]:pb-16 min-[901px]:bg-[position:center_top_36px] min-[901px]:bg-[length:240px_auto] dark:bg-[#16171d]"
        aria-labelledby="project-title"
        style={{
          backgroundImage: `linear-gradient(color-mix(in srgb, var(--bg) 74%, transparent), color-mix(in srgb, var(--bg) 94%, transparent)), url(${heroImg})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-[820px]">
          <p className="mb-3 text-sm leading-[1.3] font-bold tracking-normal text-teal-700 uppercase">
            2026 Low-Code AI Challenge Exhibition
          </p>
          <h1 id="project-title">{project.title}</h1>
          <p className="m-0 max-w-[760px] text-xl leading-[1.45] font-semibold text-[var(--text-h)] min-[561px]:text-2xl">
            {project.subtitle}
          </p>
          <p className="mt-[18px] max-w-[760px] text-base leading-[1.7] min-[561px]:text-lg">
            {project.summary}
          </p>
          <div
            className="mt-7 flex flex-wrap gap-2.5"
            aria-label="프로젝트 키워드"
          >
            {project.tags.map((tag) => (
              <span
                className="inline-flex min-h-[34px] items-center rounded-full border border-[#b7ded8] bg-emerald-50 px-3 text-sm font-semibold text-teal-800 dark:border-teal-800 dark:bg-teal-500/10 dark:text-teal-200"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        className="grid grid-cols-1 border-b border-[var(--border)]"
        aria-label="프로젝트 핵심 설명"
      >
        {sections.map((section, index) => (
          <article
            className={`box-border border-b border-[var(--border)] px-5 py-7 min-[561px]:px-6 min-[561px]:py-8 min-[901px]:px-8 min-[901px]:py-10 ${
              index === sections.length - 1 ? "border-b-0" : ""
            }`}
            key={section.title}
          >
            <p className="mb-3 text-sm leading-[1.3] font-bold tracking-normal text-teal-700 uppercase">
              {section.eyebrow}
            </p>
            <h2>{section.title}</h2>
            <p className="leading-[1.75]">{section.body}</p>
          </article>
        ))}
      </section>

      <section
        className="box-border border-b border-[var(--border)] px-5 py-7 min-[561px]:px-6 min-[561px]:py-8 min-[901px]:px-8 min-[901px]:py-10"
        aria-labelledby="features-title"
      >
        <p className="mb-3 text-sm leading-[1.3] font-bold tracking-normal text-teal-700 uppercase">
          Features
        </p>
        <h2 id="features-title">⚙️ 핵심 기능</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 min-[901px]:grid-cols-2">
          {project.features.map((feature) => (
            <article
              className="box-border rounded-lg border border-[var(--border)] bg-white p-[22px] dark:bg-[#1f2028]"
              key={feature.title}
            >
              <h3 className="m-0 mb-2.5 text-[19px] leading-[1.35] text-[var(--text-h)]">
                {feature.title}
              </h3>
              <p className="leading-[1.75]">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="box-border grid grid-cols-1 items-center gap-7 border-b border-[var(--border)] px-5 py-7 min-[561px]:px-6 min-[561px]:py-8 min-[901px]:grid-cols-[minmax(0,0.82fr)_minmax(320px,1.18fr)] min-[901px]:px-8 min-[901px]:py-10"
        aria-labelledby="demo-title"
      >
        <div>
          <p className="mb-3 text-sm leading-[1.3] font-bold tracking-normal text-teal-700 uppercase">
            Demo
          </p>
          <h2 id="demo-title">🎬 데모 영상</h2>
          <p className="leading-[1.75]">{project.demo.description}</p>
        </div>
        <div
          className="flex aspect-video flex-col items-center justify-center gap-2.5 rounded-lg border border-indigo-200 bg-slate-50 bg-[linear-gradient(135deg,rgba(15,118,110,0.08),rgba(37,99,235,0.11))] text-center text-[var(--text-h)] dark:bg-[#1f2028] dark:bg-[linear-gradient(135deg,rgba(20,184,166,0.16),rgba(96,165,250,0.14))]"
          role="img"
          aria-label="데모 영상 유튜브 링크가 들어갈 자리"
        >
          <span
            className="grid h-[58px] w-[58px] place-items-center rounded-full bg-blue-600"
            aria-hidden="true"
          >
            <span className="ml-1 h-0 w-0 border-y-[12px] border-l-[18px] border-y-transparent border-l-white"></span>
          </span>
          <strong className="text-xl">{project.demo.title}</strong>
          <small className="text-sm text-[var(--text)]">
            YouTube URL Placeholder
          </small>
        </div>
      </section>

      <section
        className="box-border border-b border-[var(--border)] px-5 py-7 min-[561px]:px-6 min-[561px]:py-8 min-[901px]:px-8 min-[901px]:py-10"
        aria-labelledby="team-title"
      >
        <p className="mb-3 text-sm leading-[1.3] font-bold tracking-normal text-teal-700 uppercase">
          Team
        </p>
        <h2 id="team-title">👥 팀원 소개</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 min-[901px]:grid-cols-2">
          {project.members.map((member) => (
            <article
              className="box-border grid grid-cols-1 gap-4 rounded-lg border border-[var(--border)] bg-white p-[22px] min-[561px]:grid-cols-[54px_minmax(0,1fr)] dark:bg-[#1f2028]"
              key={member.name}
            >
              <div
                className="grid h-[54px] w-[54px] place-items-center rounded-full bg-sky-100 font-extrabold text-sky-800 dark:bg-sky-500/20 dark:text-sky-200"
                aria-hidden="true"
              >
                {member.name.slice(0, 1)}
              </div>
              <div>
                <h3 className="m-0 mb-2.5 text-[19px] leading-[1.35] text-[var(--text-h)]">
                  {member.name}
                </h3>
                <p className="mb-2 font-bold text-blue-600">{member.role}</p>
                <p className="leading-[1.75]">{member.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="box-border border-b border-[var(--border)] px-5 py-7 min-[561px]:px-6 min-[561px]:py-8 min-[901px]:px-8 min-[901px]:py-10"
        aria-labelledby="references-title"
      >
        <p className="mb-3 text-sm leading-[1.3] font-bold tracking-normal text-teal-700 uppercase">
          Resources
        </p>
        <h2 id="references-title">💾 참고 자료</h2>
        <ul className="mt-5 grid list-none gap-3 p-0">
          {project.references.map((reference) => (
            <li
              className="rounded-lg border border-[var(--border)] bg-white px-[18px] py-4 text-[var(--text-h)] dark:bg-[#1f2028]"
              key={reference}
            >
              {reference}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default ProjectDetail;
