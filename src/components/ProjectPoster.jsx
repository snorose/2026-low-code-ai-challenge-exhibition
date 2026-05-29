import { getAwardLabelKo } from "@/utils/award";

export default function ProjectPoster({
  title,
  award,
  posterSrc,
  posterOrientation,
  placement = "side",
}) {
  if (posterSrc) {
    const frameSize =
      posterOrientation === "portrait" && placement === "side"
        ? "max-w-[220px]"
        : placement === "wide"
          ? "w-[700px] max-w-full"
          : "w-full";
    const imageSize = placement === "wide" ? "max-h-[520px]" : "max-h-[400px]";

    return (
      <figure
        className={`m-0 inline-block max-w-full overflow-hidden rounded-xl border border-slate-200 bg-white p-3 shadow-md ${frameSize}`}
      >
        <img
          src={posterSrc}
          alt={`${title} 포스터`}
          className={`block max-w-full rounded-lg object-contain ${imageSize}`}
        />
      </figure>
    );
  }

  return (
    <div className="relative w-full aspect-4/5 rounded-xl overflow-hidden bg-[#c1d0ff] p-6 flex flex-col justify-between text-left select-none border border-slate-300/40 text-black shadow-md">
      <div className="relative z-1 flex flex-col gap-1">
        <div className="w-[2898px] h-[926px] justify-start text-black text-[512px] font-normal font-['NATS'] leading-[450px]">
          2026 Low-Code AI CHALLENGE
        </div>
        <div className="h-px w-8 bg-black/30 mt-1"></div>
      </div>

      <div className="relative z-1 my-auto pr-3">
        <span className="text-sm font-bold text-slate-700 block mb-1 tracking-wider">
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
          <span className="text-sm font-extrabold text-slate-900 bg-white/70 px-2 py-0.5 rounded">
            {getAwardLabelKo(award)}
          </span>
        </div>
      </div>
    </div>
  );
}
