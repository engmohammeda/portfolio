import React from 'react';
import type { BlueprintKind } from '../data';

/* ------------------------------------------------------------------
   Blueprint engine
   --------------------------------------------------------------
   Hand-drawn SVG schematics in the visual language of engineering
   drawings: hairline geometry, chainage ticks, dimension arrows,
   benchmark triangles, north arrows and a scale bar.
   Colours are bound to CSS variables so every drawing adapts to
   light/dark automatically. All labels stay Latin/mono on purpose —
   that is how the drawings they represent actually read.
   ------------------------------------------------------------------ */

const ACCENT = 'var(--accent)';
const LINE = 'var(--txt-3)';
const STRONG = 'var(--txt)';
const DATA = 'var(--warm)';

const NorthArrow: React.FC<{ x: number; y: number }> = ({ x, y }) => (
  <g transform={`translate(${x} ${y})`} opacity="0.85">
    <path d="M0 12 L0 -10" stroke={LINE} strokeWidth="0.8" />
    <path d="M0 -12 L-3.4 -5 L0 -7 L3.4 -5 Z" fill={STRONG} opacity="0.7" />
    <text x="0" y="19" textAnchor="middle" fontSize="6" fontFamily="monospace" fill={LINE}>
      N
    </text>
  </g>
);

const ScaleBar: React.FC<{ x: number; y: number }> = ({ x, y }) => (
  <g transform={`translate(${x} ${y})`} opacity="0.8">
    <rect x="0" y="0" width="10" height="4" fill={STRONG} opacity="0.55" />
    <rect x="10" y="0" width="10" height="4" fill="none" stroke={LINE} strokeWidth="0.6" />
    <rect x="20" y="0" width="10" height="4" fill={STRONG} opacity="0.55" />
    <text x="0" y="11" fontSize="5.5" fontFamily="monospace" fill={LINE}>
      0
    </text>
    <text x="27" y="11" fontSize="5.5" fontFamily="monospace" fill={LINE}>
      15 m
    </text>
  </g>
);

const Ticks: React.FC = () => (
  <g stroke={LINE} strokeWidth="1" opacity="0.5">
    <path d="M6 6 h14 M6 6 v14" />
    <path d="M314 6 h-14 M314 6 v14" />
    <path d="M6 194 h14 M6 194 v-14" />
    <path d="M314 194 h-14 M314 194 v-14" />
  </g>
);

const Mono: React.FC<{ x: number; y: number; children: React.ReactNode; anchor?: 'start' | 'middle' | 'end'; size?: number; fill?: string; opacity?: number }> = ({
  x, y, children, anchor = 'start', size = 6, fill = LINE, opacity,
}) => (
  <text x={x} y={y} textAnchor={anchor} fontSize={size} fontFamily="monospace" fill={fill} opacity={opacity} letterSpacing="0.4">
    {children}
  </text>
);

/* ---------- individual drawings ---------- */

const Survey: React.FC = () => (
  <>
    {[0, 1, 2].map((i) => (
      <path
        key={i}
        d={`M-10 ${70 + i * 32} C 60 ${44 + i * 32}, 140 ${96 + i * 32}, 210 ${62 + i * 32} S 300 ${86 + i * 32}, 336 ${60 + i * 32}`}
        fill="none"
        stroke={LINE}
        strokeWidth="0.6"
        opacity={0.45}
      />
    ))}
    <path d="M44 44 L250 36 L286 150 L62 164 Z" fill="none" stroke={ACCENT} strokeWidth="1.2" strokeDasharray="7 4" />
    {[
      [70, 62, 'S-01'],
      [148, 52, 'S-02'],
      [238, 60, 'S-03'],
      [96, 140, 'S-04'],
      [214, 146, 'S-05'],
    ].map(([cx, cy, id]) => (
      <g key={id as string}>
        <path d={`M${(cx as number) - 4} ${cy} h8 M${cx} ${(cy as number) - 4} v8`} stroke={STRONG} strokeWidth="0.9" />
        <circle cx={cx as number} cy={cy as number} r="2.6" fill="none" stroke={ACCENT} strokeWidth="0.9" />
        <Mono x={(cx as number) + 6} y={(cy as number) + 2} size={5.6}>{id}</Mono>
      </g>
    ))}
    {/* dimension line */}
    <g>
      <path d="M70 62 L238 60" stroke={LINE} strokeWidth="0.5" opacity="0.7" />
      <path d="M70 56 v12 M238 54 v12" stroke={LINE} strokeWidth="0.6" />
      <Mono x={154} y={54} anchor="middle" size={5.8} fill={STRONG}>84.20 m</Mono>
    </g>
    {/* benchmark */}
    <g transform="translate(272 172)">
      <path d="M0 0 L6 10 L-6 10 Z" fill="none" stroke={ACCENT} strokeWidth="1" />
      <Mono x={10} y={9} size={5.6} fill={ACCENT}>BM 1.250</Mono>
    </g>
    <Mono x={20} y={24} size={6}>TOPOGRAPHIC SURVEY — 1:500</Mono>
  </>
);

const Cadastral: React.FC = () => (
  <>
    <g stroke={STRONG} strokeWidth="0.7" opacity="0.75">
      <rect x="34" y="34" width="252" height="132" fill="none" strokeDasharray="9 4" />
      <path d="M34 78 H286 M34 122 H286 M118 34 V166 M202 34 V166" />
    </g>
    {[
      [40, 40, '01', '312 m²'],
      [124, 40, '02', '298 m²'],
      [208, 40, '03', '305 m²'],
      [40, 84, '04', '311 m²'],
      [124, 84, '05', '300 m²'],
      [208, 84, '06', '296 m²'],
      [40, 128, '07', '318 m²'],
      [124, 128, '08', '302 m²'],
      [208, 128, '09', '309 m²'],
    ].map(([x, y, id, area]) => (
      <g key={id as string}>
        <Mono x={(x as number) + 6} y={(y as number) + 12} size={5.8} fill={STRONG}>PLOT {id}</Mono>
        <Mono x={(x as number) + 6} y={(y as number) + 20} size={5.2}>{area}</Mono>
      </g>
    ))}
    {/* leftover hatched area */}
    <g opacity="0.55">
      <path d="M226 150 L286 150 L286 166 L210 166 Z" fill="none" stroke={LINE} strokeWidth="0.7" />
      {Array.from({ length: 9 }).map((_, i) => (
        <path key={i} d={`M${212 + i * 9} 166 L${224 + i * 9} 150`} stroke={LINE} strokeWidth="0.4" />
      ))}
      <Mono x={232} y={162} size={5.2}>ROAD</Mono>
    </g>
    <g transform="translate(52 158)">
      <path d="M0 0 L8 0" stroke={ACCENT} strokeWidth="1.2" />
      <Mono x={12} y={3} size={5.6} fill={ACCENT}>TOTAL 12,000 m²</Mono>
    </g>
    <Mono x={20} y={24} size={6}>LAND DIVISION — 48 PLOTS</Mono>
    <NorthArrow x={302} y={40} />
  </>
);

const Roads: React.FC = () => (
  <>
    <path d="M8 150 C 70 120, 120 150, 170 118 S 262 74, 312 66" fill="none" stroke={STRONG} strokeWidth="2.4" opacity="0.85" />
    <path d="M8 160 C 70 130, 120 160, 170 128 S 262 84, 312 76" fill="none" stroke={LINE} strokeWidth="0.7" />
    <path d="M8 140 C 70 110, 120 140, 170 108 S 262 64, 312 56" fill="none" stroke={LINE} strokeWidth="0.7" />
    <path d="M170 118 L192 96" stroke={ACCENT} strokeWidth="0.8" strokeDasharray="4 3" />
    <path d="M215 88 L232 76" stroke={ACCENT} strokeWidth="0.8" strokeDasharray="4 3" />
    {[
      [64, 141, 'PC'],
      [168, 116, 'PI'],
      [266, 79, 'PT'],
    ].map(([x, y, id]) => (
      <g key={id as string}>
        <circle cx={x as number} cy={y as number} r="2.4" fill={ACCENT} />
        <Mono x={(x as number) + 5} y={(y as number) - 4} size={5.6} fill={ACCENT}>{id as string}</Mono>
      </g>
    ))}
    <Mono x={196} y={104} size={5.4} fill={ACCENT}>R = 120 m</Mono>
    {/* chainage ticks */}
    {[
      [40, 152, '0+000'],
      [124, 148, '0+250'],
      [216, 106, '0+500'],
      [288, 74, '0+750'],
    ].map(([x, y, id]) => (
      <g key={id as string}>
        <path d={`M${x} ${(y as number) - 6} v10`} stroke={STRONG} strokeWidth="0.8" />
        <Mono x={x as number} y={(y as number) + 16} anchor="middle" size={5.4}>{id}</Mono>
      </g>
    ))}
    {/* cross-section inset */}
    <g transform="translate(18 26)" opacity="0.95">
      <Mono x={0} y={0} size={5.4}>CROSS SECTION A-A</Mono>
      <path d="M0 14 L16 40 L72 40 L88 14" fill="none" stroke={STRONG} strokeWidth="1" />
      <path d="M16 40 L72 40" stroke={ACCENT} strokeWidth="1.6" />
      <path d="M0 14 L16 8 L72 8 L88 14" fill="none" stroke={LINE} strokeWidth="0.6" strokeDasharray="3 2" />
      <Mono x={94} y={30} size={5.2}>2.5%</Mono>
    </g>
    <Mono x={188} y={188} size={6}>ROUTE SETTING-OUT</Mono>
  </>
);

const Quantities: React.FC = () => (
  <>
    <Mono x={20} y={24} size={6}>LAYER TAKE-OFF — BOQ</Mono>
    <g transform="translate(28 46)">
      {/* asphalt */}
      <path d="M0 16 H150 V26 H0 Z" fill={STRONG} opacity="0.75" />
      {/* base course dots */}
      <rect x="0" y="26" width="150" height="24" fill="none" stroke={LINE} strokeWidth="0.7" />
      {Array.from({ length: 26 }).map((_, i) => (
        <circle key={i} cx={(i % 13) * 12 + 6} cy={32 + Math.floor(i / 13) * 12} r="1.1" fill={LINE} opacity="0.7" />
      ))}
      {/* subgrade lines */}
      <rect x="0" y="50" width="150" height="26" fill="none" stroke={LINE} strokeWidth="0.7" />
      {Array.from({ length: 7 }).map((_, i) => (
        <path key={i} d={`M${i * 24} 76 L${i * 24 + 14} 50`} stroke={LINE} strokeWidth="0.4" opacity="0.7" />
      ))}
      {/* dimension */}
      <path d="M156 16 v60 M150 16 h12 M150 76 h12" stroke={LINE} strokeWidth="0.5" />
      <Mono x={164} y={48} size={5.4} fill={STRONG}>0.45 m</Mono>
    </g>
    <g transform="translate(208 52)">
      {[
        ['ASPHALT', '2,100 m²', 0.9],
        ['BASE', '9,400 m²', 0.72],
        ['EXCAVATION', '3,150 m³', 0.58],
        ['BACKFILL', '860 m³', 0.34],
      ].map(([label, value, w], i) => (
        <g key={label as string} transform={`translate(0 ${i * 26})`}>
          <Mono x={0} y={0} size={5.2}>{label as string}</Mono>
          <rect x="0" y="4" width="96" height="4" fill={LINE} opacity="0.25" />
          <rect x="0" y="4" width={(96 * (w as number)).toFixed(0)} height="4" fill={ACCENT} />
          <Mono x={0} y={17} size={5.4} fill={STRONG}>{value as string}</Mono>
        </g>
      ))}
    </g>
    <Mono x={28} y={188} size={6}>VERIFIABLE TAKE-OFF • XLSX + PDF</Mono>
    <ScaleBar x={232} y={176} />
  </>
);

const Cad: React.FC = () => (
  <>
    <Mono x={20} y={24} size={6}>ISSUED DRAWING SET — 1:100</Mono>
    <rect x="64" y="44" width="140" height="92" fill="none" stroke={STRONG} strokeWidth="1.1" />
    <path d="M84 60 h44 v26 h-44 z M148 60 h40 v26 h-40 z M84 96 h104 v26 h-104 z" fill="none" stroke={LINE} strokeWidth="0.7" />
    {/* dimension strings */}
    <g stroke={LINE} strokeWidth="0.5">
      <path d="M64 36 H204 M64 30 v12 M204 30 v12" />
      <path d="M236 44 V136 M230 44 h12 M230 136 h12" />
      <path d="M64 148 H204 M64 142 v12 M204 142 v12" />
    </g>
    <Mono x={134} y={32} anchor="middle" size={5.4} fill={STRONG}>24.00</Mono>
    <Mono x={248} y={92} size={5.4} fill={STRONG}>12.40</Mono>
    <Mono x={134} y={160} anchor="middle" size={5.4} fill={STRONG}>24.00</Mono>
    {/* title block */}
    <g transform="translate(212 138)">
      <rect x="0" y="0" width="92" height="44" fill="none" stroke={STRONG} strokeWidth="0.8" />
      <path d="M0 14 H92 M0 29 H92 M58 14 V44" stroke={LINE} strokeWidth="0.5" />
      <Mono x={4} y={10} size={5}>MAB-PORTFOLIO</Mono>
      <Mono x={4} y={25} size={5}>SHEET 01/09</Mono>
      <Mono x={4} y={40} size={5}>REV 03</Mono>
      <Mono x={62} y={25} size={5}>SCALE</Mono>
      <Mono x={62} y={40} size={5.4} fill={STRONG}>1:100</Mono>
    </g>
    {/* layer legend */}
    <g transform="translate(20 50)">
      {[
        ['0', 'S-BOUNDARY'],
        ['1', 'S-BUILDING'],
        ['2', 'S-DIMENSION'],
        ['3', 'S-TEXT'],
      ].map(([n, name], i) => (
        <g key={n as string} transform={`translate(0 ${i * 12})`}>
          <Mono x={0} y={0} size={5} fill={ACCENT}>{n as string}</Mono>
          <Mono x={8} y={0} size={5}>{name as string}</Mono>
        </g>
      ))}
    </g>
    <Mono x={20} y={188} size={6}>LAYERS · DIMENSIONS · TITLE BLOCK</Mono>
  </>
);

const Gis: React.FC = () => (
  <>
    <Mono x={20} y={24} size={6}>SITE LAYERS — QGIS</Mono>
    <path d="M56 44 L208 38 L236 118 L92 148 Z" fill="none" stroke={STRONG} strokeWidth="1" />
    <path d="M92 62 L196 54 L216 112 L104 132 Z" fill={DATA} opacity="0.13" stroke={DATA} strokeWidth="0.9" />
    <path d="M112 78 L178 70 L192 104 L122 118 Z" fill={ACCENT} opacity="0.16" stroke={ACCENT} strokeWidth="0.9" strokeDasharray="5 3" />
    {[
      [128, 84, 'PT-1'],
      [166, 92, 'PT-2'],
      [150, 112, 'PT-3'],
      [214, 60, 'PT-4'],
    ].map(([x, y, id]) => (
      <g key={id as string}>
        <circle cx={x as number} cy={y as number} r="2.6" fill={STRONG} />
        <Mono x={(x as number) + 5} y={(y as number) - 3} size={5.2}>{id as string}</Mono>
      </g>
    ))}
    <path d="M60 130 C 110 150, 170 150, 232 128" fill="none" stroke={DATA} strokeWidth="1.6" />
    <Mono x={120} y={162} size={5.2} fill={DATA}>CENTERLINE (UTILITY)</Mono>
    {/* legend */}
    <g transform="translate(246 46)">
      {[
        ['SITE BOUNDARY', STRONG, 0],
        ['SURVEY AREA', DATA, 1],
        ['PROJECT ZONE', ACCENT, 2],
      ].map(([label, color, i]) => (
        <g key={label as string} transform={`translate(0 ${(i as number) * 16})`}>
          <rect x="0" y="0" width="8" height="8" fill={color as string} opacity="0.6" />
          <Mono x={12} y={7} size={4.8}>{label as string}</Mono>
        </g>
      ))}
      <Mono x={0} y={62} size={5} fill={ACCENT}>7 LAYERS</Mono>
    </g>
    <Mono x={20} y={188} size={6}>KML · GEOJSON · DASHBOARD</Mono>
  </>
);

const Site: React.FC = () => (
  <>
    <Mono x={20} y={24} size={6}>GRADING CONTROL — SPOT LEVELS</Mono>
    <g stroke={LINE} strokeWidth="0.4" opacity="0.6">
      {Array.from({ length: 7 }).map((_, i) => (
        <path key={`h${i}`} d={`M40 ${36 + i * 22} H284`} />
      ))}
      {Array.from({ length: 9 }).map((_, i) => (
        <path key={`v${i}`} d={`M${40 + i * 30.5} 36 V168`} />
      ))}
    </g>
    {[
      [70, 58, '12.45'],
      [161, 58, '12.40'],
      [252, 58, '12.36'],
      [70, 102, '12.32'],
      [161, 102, '12.28'],
      [252, 102, '12.24'],
      [70, 146, '12.20'],
      [161, 146, '12.16'],
      [252, 146, '12.12'],
    ].map(([x, y, v]) => (
      <g key={`${x}-${y}`}>
        <path d={`M${x} ${(y as number) - 4} h8 M${(x as number) + 4} ${(y as number) - 8} v8`} stroke={ACCENT} strokeWidth="0.7" />
        <Mono x={(x as number) + 8} y={(y as number) + 6} size={5.2} fill={STRONG}>{v as string}</Mono>
      </g>
    ))}
    <path d="M46 176 C 96 162, 168 172, 272 150" fill="none" stroke={DATA} strokeWidth="1.2" strokeDasharray="6 4" />
    <Mono x={96} y={186} size={5.2} fill={DATA}>DIRECTION OF FALL 0.45%</Mono>
    {/* checklist */}
    <g transform="translate(228 24)">
      {[
        ['LEVELS', true],
        ['DIMENSIONS', true],
        ['COMPACTION', false],
      ].map(([label, done], i) => (
        <g key={label as string} transform={`translate(0 ${(i as number) * 13})`}>
          <rect x="0" y="-8" width="9" height="9" fill="none" stroke={done ? ACCENT : LINE} strokeWidth="0.8" />
          {done && <path d="M2 -4 L4 -2 L7.5 -6" fill="none" stroke={ACCENT} strokeWidth="1.1" />}
          <Mono x={13} y={0} size={4.8}>{label as string}</Mono>
        </g>
      ))}
    </g>
    <Mono x={20} y={160} size={6} />
  </>
);

const MAP: Record<BlueprintKind, React.FC> = {
  survey: Survey,
  cadastral: Cadastral,
  roads: Roads,
  quantities: Quantities,
  cad: Cad,
  gis: Gis,
  site: Site,
};

export const Blueprint: React.FC<{ kind: BlueprintKind; className?: string }> = ({ kind, className }) => {
  const Drawing = MAP[kind] ?? Survey;
  return (
    <svg
      viewBox="0 0 320 200"
      className={className}
      role="img"
      aria-label={`${kind} technical drawing`}
      preserveAspectRatio="xMidYMid meet"
    >
      <Ticks />
      <Drawing />
    </svg>
  );
};
