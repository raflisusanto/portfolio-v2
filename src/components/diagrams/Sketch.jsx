/**
 * Tiny kit for hand-drawn (tldraw / FigJam style) diagrams as inline SVG.
 * Shapes get a slight wobble from an SVG displacement filter; text stays crisp.
 */
import { createContext, useContext, useId } from "react";

const SketchIds = createContext(null);

const palette = {
  blue: { stroke: "#4465e9", fill: "#dce1f8" },
  green: { stroke: "#099268", fill: "#d3e9e3" },
  violet: { stroke: "#ae3ec9", fill: "#ecdcf2" },
  orange: { stroke: "#e16919", fill: "#f8e2d4" },
  red: { stroke: "#e03131", fill: "#f4dadb" },
  grey: { stroke: "#5c5f66", fill: "#ffffff" },
};

const INK = "#1d1d1d";
const FONT = "'Shantell Sans', 'Comic Sans MS', cursive";

export const Canvas = ({ width, height, label, caption, children }) => {
  const id = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const ids = { wobble: `wobble-${id}`, arrow: `arrow-${id}`, dots: `dots-${id}`, shadow: `shadow-${id}` };

  return (
    <SketchIds.Provider value={ids}>
      <figure className="overflow-hidden rounded-xl border border-white/10 bg-[#f8f9fa] shadow-2xl shadow-black/40">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          role="img"
          aria-label={label}
          className="block h-auto w-full select-none"
          style={{ fontFamily: FONT }}
        >
          <defs>
            <pattern id={ids.dots} width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="#d4d6db" />
            </pattern>
            {/* userSpaceOnUse so perfectly straight lines don't get a zero-size filter region */}
            <filter id={ids.wobble} filterUnits="userSpaceOnUse" x="0" y="0" width={width} height={height}>
              <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="7" />
              <feDisplacementMap in="SourceGraphic" scale="3.2" />
            </filter>
            <filter id={ids.shadow} x="-20%" y="-20%" width="140%" height="150%">
              <feDropShadow dx="1" dy="3" stdDeviation="2.5" floodColor="#000" floodOpacity="0.16" />
            </filter>
            <marker
              id={ids.arrow}
              viewBox="0 0 12 12"
              refX="10"
              refY="6"
              markerWidth="9"
              markerHeight="9"
              orient="auto-start-reverse"
            >
              <path d="M1 1.5 L10.5 6 L1 10.5" fill="none" stroke={INK} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </marker>
          </defs>
          <rect width={width} height={height} fill={`url(#${ids.dots})`} />
          {children}
        </svg>
        {caption && (
          <figcaption className="border-t border-black/10 bg-white/70 px-4 py-2 text-xs text-[#5c5f66]">
            {caption}
          </figcaption>
        )}
      </figure>
    </SketchIds.Provider>
  );
};

/** Centered multi-line text. First line can be bold (a title). */
export const Label = ({ x, y, lines, size = 15, bold = true, color = INK, anchor = "middle", rotate }) => {
  const lineHeight = size * 1.3;
  const top = y - ((lines.length - 1) * lineHeight) / 2;
  return (
    <text
      x={x}
      y={top}
      textAnchor={anchor}
      dominantBaseline="central"
      fontSize={size}
      fill={color}
      transform={rotate ? `rotate(${rotate} ${x} ${y})` : undefined}
    >
      {lines.map((line, i) => (
        <tspan
          key={line}
          x={x}
          dy={i === 0 ? 0 : lineHeight}
          fontWeight={bold && i === 0 ? 600 : 400}
          fontSize={i === 0 ? size : size - 2}
          fillOpacity={i === 0 ? 1 : 0.8}
        >
          {line}
        </tspan>
      ))}
    </text>
  );
};

export const Box = ({ x, y, w, h, color = "grey", lines = [], size, dashed, children }) => {
  const ids = useContext(SketchIds);
  const c = palette[color];
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="10"
        fill={c.fill}
        stroke={c.stroke}
        strokeWidth="2.2"
        strokeDasharray={dashed ? "7 6" : undefined}
        filter={`url(#${ids.wobble})`}
      />
      {lines.length > 0 && <Label x={x + w / 2} y={y + h / 2} lines={lines} size={size} />}
      {children}
    </g>
  );
};

/** Yellow sticky note, slightly rotated. */
export const Sticky = ({ x, y, w, h, lines, rotate = -2, size = 13 }) => {
  const ids = useContext(SketchIds);
  const cx = x + w / 2;
  const cy = y + h / 2;
  return (
    <g transform={`rotate(${rotate} ${cx} ${cy})`}>
      <rect x={x} y={y} width={w} height={h} rx="3" fill="#fef3bd" filter={`url(#${ids.shadow})`} />
      <Label x={cx} y={cy} lines={lines} size={size} bold={false} />
    </g>
  );
};

/**
 * Arrow along a path. Pass `d` (SVG path) or `points` ([[x,y], ...]).
 * `label` is drawn at `labelAt` ([x,y]) on a canvas-colored backdrop.
 */
export const Arrow = ({ d, points, label, labelAt, labelSize = 12, dashed, both }) => {
  const ids = useContext(SketchIds);
  const path = d ?? points.map(([px, py], i) => `${i === 0 ? "M" : "L"}${px} ${py}`).join(" ");
  return (
    <g>
      <path
        d={path}
        fill="none"
        stroke={INK}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={dashed ? "6 6" : undefined}
        markerEnd={`url(#${ids.arrow})`}
        markerStart={both ? `url(#${ids.arrow})` : undefined}
        filter={`url(#${ids.wobble})`}
      />
      {label && (
        <text
          x={labelAt[0]}
          y={labelAt[1]}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={labelSize}
          fill="#5c5f66"
          stroke="#f8f9fa"
          strokeWidth="5"
          paintOrder="stroke"
        >
          {label}
        </text>
      )}
    </g>
  );
};
