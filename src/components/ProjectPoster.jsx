import { getAwardLabelKo } from "../utils/award";

export default function ProjectPoster({ title, award, tag }) {
  return (
    <div className="relative w-full aspect-4/5 rounded-xl overflow-hidden bg-[#c1d0ff] p-6 flex flex-col justify-between text-left select-none border border-slate-300/40 dark:border-slate-800 text-black shadow-md">
      <svg
        viewBox="0 0 4961 2780"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-[0.14] dark:opacity-[0.25] text-black dark:text-white"
        style={{ overflow: "visible" }}
      >
        <path
          d="M3955 934.5C4388.39 934.5 4739.5 1267.72 4739.5 1678.5C4739.5 2089.28 4388.39 2422.5 3955 2422.5C3521.61 2422.5 3170.5 2089.28 3170.5 1678.5C3170.5 1267.72 3521.61 934.5 3955 934.5Z"
          stroke="currentColor"
          strokeWidth="5"
        />
        <g>
          <rect
            x="-850"
            y="330"
            width="2800"
            height="800"
            rx="400"
            stroke="currentColor"
            strokeWidth="5"
          />
          <rect
            x="3717.5"
            y="1000"
            width="2000"
            height="1500"
            rx="750"
            stroke="currentColor"
            strokeWidth="5"
          />
          <rect
            x="3491.5"
            y="-2357.5"
            width="2596"
            height="2873"
            rx="1012.5"
            stroke="currentColor"
            strokeWidth="5"
          />
        </g>
      </svg>

      <div className="relative z-1 flex flex-col gap-1">
        <span className="text-[10px] font-black tracking-widest text-slate-800 uppercase">
          2026 Low-Code AI Challenge
        </span>
        <div className="h-px w-8 bg-black/30 mt-1"></div>
      </div>

      <div className="relative z-1 my-auto pr-3">
        <span className="text-[10px] font-bold text-slate-700 block mb-1 tracking-wider">
          PROJECT TEAM
        </span>
        <h2
          className="m-0 text-2xl font-black text-black leading-[1.2] uppercase tracking-tight break-keep"
          style={{ fontFamily: "var(--heading)" }}
        >
          {title}
        </h2>
      </div>

      <div className="relative z-1 flex flex-col gap-2">
        <div className="h-px w-full bg-black/10"></div>
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-extrabold text-slate-900 bg-white/70 px-2 py-0.5 rounded">
            {getAwardLabelKo(award)}
          </span>
          <span className="text-[10px] font-bold text-slate-600">#{tag}</span>
        </div>
      </div>
    </div>
  );
}
