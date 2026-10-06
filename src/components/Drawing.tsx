// A flange in front view, drawn like a technical drawing. Purely decorative.

const C = 210 // centre
const R_OUTER = 150
const R_BORE = 50
const R_PCD = 105 // pitch circle for the bolt holes
const R_HOLE = 14

const holes = Array.from({ length: 6 }, (_, i) => {
  const a = ((i * 60 + 30) * Math.PI) / 180
  return { x: C + R_PCD * Math.cos(a), y: C + R_PCD * Math.sin(a) }
})

export function Drawing({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 420 470" className={`draw ${className}`} aria-hidden fill="none" strokeLinecap="round">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 1 L10 5 L0 9" fill="none" stroke="currentColor" strokeWidth="1.2" />
        </marker>
      </defs>

      {/* Centre lines (dash-dot) */}
      <g className="text-accent" stroke="currentColor" strokeWidth="0.8" strokeDasharray="14 4 2 4">
        <line x1={C - R_OUTER - 25} y1={C} x2={C + R_OUTER + 25} y2={C} style={{ strokeDasharray: '14 4 2 4', animation: 'none' }} />
        <line x1={C} y1={C - R_OUTER - 25} x2={C} y2={C + R_OUTER + 25} style={{ strokeDasharray: '14 4 2 4', animation: 'none' }} />
        <circle cx={C} cy={C} r={R_PCD} style={{ strokeDasharray: '14 4 2 4', animation: 'none' }} />
      </g>

      {/* Visible outlines */}
      <g stroke="currentColor" strokeWidth="1.6">
        <circle cx={C} cy={C} r={R_OUTER} />
        <circle cx={C} cy={C} r={R_BORE} />
        <circle cx={C} cy={C} r={R_BORE + 8} strokeWidth="0.8" />
        {holes.map((h, i) => (
          <circle key={i} cx={h.x} cy={h.y} r={R_HOLE} className="late" />
        ))}
      </g>

      {/* Dimensions */}
      <g stroke="currentColor" strokeWidth="0.8" className="text-muted">
        {/* overall diameter, below the part */}
        <line x1={C - R_OUTER} y1={C + 20} x2={C - R_OUTER} y2={C + R_OUTER + 62} className="late" />
        <line x1={C + R_OUTER} y1={C + 20} x2={C + R_OUTER} y2={C + R_OUTER + 62} className="late" />
        <line
          x1={C - R_OUTER}
          y1={C + R_OUTER + 52}
          x2={C + R_OUTER}
          y2={C + R_OUTER + 52}
          markerStart="url(#arrow)"
          markerEnd="url(#arrow)"
          className="late"
        />
        {/* leader to bolt hole */}
        <path d={`M${holes[5].x + 10} ${holes[5].y - 10} L${holes[5].x + 50} ${holes[5].y - 60} L${holes[5].x + 95} ${holes[5].y - 60}`} markerStart="url(#arrow)" className="late" />
        {/* leader to bore */}
        <path d={`M${C - 36} ${C - 36} L${C - 120} ${C - 150} L${C - 175} ${C - 150}`} markerStart="url(#arrow)" className="late" />
      </g>

      <g className="fade-late fill-muted font-mono" fontSize="12" stroke="none">
        <text x={C} y={C + R_OUTER + 46} textAnchor="middle">
          Ø300
        </text>
        <text x={holes[5].x + 56} y={holes[5].y - 66}>
          6× Ø28
        </text>
        <text x={C - 175} y={C - 156}>
          Ø100 H7
        </text>
      </g>
    </svg>
  )
}
