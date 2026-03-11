import type { SkillMetric } from "../app/home-data";

type SkillRadarProps = {
  metrics: SkillMetric[];
};

const CENTER = 180;
const RADIUS = 118;

function getPoint(angle: number, value: number) {
  const radians = ((angle - 90) * Math.PI) / 180;
  const scaledRadius = (value / 100) * RADIUS;
  const x = CENTER + Math.cos(radians) * scaledRadius;
  const y = CENTER + Math.sin(radians) * scaledRadius;

  return `${x.toFixed(1)},${y.toFixed(1)}`;
}

function getLabelPoint(angle: number) {
  const radians = ((angle - 90) * Math.PI) / 180;
  const labelRadius = RADIUS + 38;
  const x = CENTER + Math.cos(radians) * labelRadius;
  const y = CENTER + Math.sin(radians) * labelRadius;

  return { x, y };
}

export function SkillRadar({ metrics }: SkillRadarProps) {
  const angleStep = 360 / metrics.length;
  const polygonPoints = metrics
    .map((metric, index) => getPoint(index * angleStep, metric.score))
    .join(" ");

  return (
    <div className="rounded-[2rem] border border-white/10 bg-[rgba(6,12,26,0.82)] p-6 shadow-[0_32px_80px_rgba(3,8,20,0.28)] sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#4dd4ff]">
        Matriz tecnologica
      </p>
      <div className="mt-6 overflow-x-auto">
        <svg viewBox="0 0 360 360" className="mx-auto h-[20rem] w-[20rem]" aria-hidden="true">
          {[25, 50, 75, 100].map((value) => {
            const ringPoints = metrics
              .map((_, index) => getPoint(index * angleStep, value))
              .join(" ");

            return (
              <polygon
                key={value}
                points={ringPoints}
                fill="none"
                stroke="rgba(173,198,255,0.12)"
                strokeWidth="1"
              />
            );
          })}

          {metrics.map((metric, index) => {
            const angle = index * angleStep;
            const endPoint = getPoint(angle, 100).split(",");
            const labelPoint = getLabelPoint(angle);

            return (
              <g key={metric.label}>
                <line
                  x1={CENTER}
                  y1={CENTER}
                  x2={endPoint[0]}
                  y2={endPoint[1]}
                  stroke="rgba(173,198,255,0.12)"
                  strokeWidth="1"
                />
                <text
                  x={labelPoint.x}
                  y={labelPoint.y}
                  fill="#dceeff"
                  fontSize="11"
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  {metric.label}
                </text>
              </g>
            );
          })}

          <polygon
            points={polygonPoints}
            fill="rgba(45,212,255,0.18)"
            stroke="#4dd4ff"
            strokeWidth="2.5"
          />

          {metrics.map((metric, index) => {
            const point = getPoint(index * angleStep, metric.score).split(",");

            return (
              <circle
                key={`${metric.label}-point`}
                cx={point[0]}
                cy={point[1]}
                r="4"
                fill="#f6b34a"
              />
            );
          })}
        </svg>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-4"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-white">{metric.label}</p>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f6b34a]">
                {metric.score}%
              </span>
            </div>
            <p className="mt-2 text-sm leading-6 text-white/66">{metric.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
