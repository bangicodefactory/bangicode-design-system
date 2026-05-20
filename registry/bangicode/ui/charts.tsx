"use client";

import * as React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { cn } from "@/lib/utils";

// ─── Token-mapped palette ─────────────────────────────────────────────────────
// These hex values come directly from DESIGN.md token definitions.
// If tokens change, update both DESIGN.md and this map.
const CHART_COLORS = {
  primary: "#000c2c",       // --color-primary (Primary Navy)
  accent: "#016397",        // --color-secondary / --accent (Ocean Blue)
  sky: "#80c5fe",           // --color-secondary-container (Sky Blue)
  muted: "#444650",         // --color-on-surface-variant
  grid: "#c5c6d1",          // --color-outline-variant
  surface: "#e6e8ee",       // --color-surface-container-high (tooltip bg)
} as const;

export const CHART_PALETTE = [
  CHART_COLORS.primary,
  CHART_COLORS.accent,
  CHART_COLORS.sky,
  CHART_COLORS.muted,
] as const;

// ─── Shared tooltip ───────────────────────────────────────────────────────────

interface TooltipEntry { color?: string; name?: string | number; value?: string | number }
interface ChartTooltipProps { active?: boolean; payload?: TooltipEntry[]; label?: string | number }

function BangicodeTooltip({ active, payload, label }: ChartTooltipProps) {
  if (!active || !payload?.length) return null;
  return (
    <div
      className="rounded-sm border border-border px-3 py-2 shadow-none"
      style={{ backgroundColor: CHART_COLORS.surface }}
    >
      {label !== undefined && (
        <p className="mb-1 font-hanken-grotesk text-xs text-muted-foreground">{String(label)}</p>
      )}
      {payload.map((entry: TooltipEntry, i: number) => (
        <p key={i} className="font-jetbrains-mono text-xs tabular-nums" style={{ color: entry.color }}>
          {String(entry.name)}: {String(entry.value)}
        </p>
      ))}
    </div>
  );
}

// ─── Shared axis / grid defaults ──────────────────────────────────────────────

const axisStyle = {
  fontFamily: "var(--font-hanken-grotesk)",
  fontSize: 11,
  fill: CHART_COLORS.muted,
} as const;

// ─── Props ────────────────────────────────────────────────────────────────────

interface BaseChartProps {
  data: Record<string, unknown>[];
  /** Key for X axis */
  xKey: string;
  /** Keys for data series */
  series: { key: string; label?: string; color?: string }[];
  height?: number;
  showGrid?: boolean;
  showLegend?: boolean;
  className?: string;
}

// ─── LineChart wrapper ────────────────────────────────────────────────────────

function BangicodeLineChart({
  data,
  xKey,
  series,
  height = 300,
  showGrid = true,
  showLegend = false,
  className,
}: BaseChartProps) {
  return (
    <div className={cn("w-full", className)}>
      <ResponsiveContainer width="100%" height={height}>
        <LineChart data={data} margin={{ top: 4, right: 4, bottom: 0, left: 0 }}>
          {showGrid && (
            <CartesianGrid stroke={CHART_COLORS.grid} strokeDasharray="4 2" vertical={false} />
          )}
          <XAxis dataKey={xKey} tick={axisStyle} axisLine={false} tickLine={false} />
          <YAxis tick={axisStyle} axisLine={false} tickLine={false} width={40} />
          <Tooltip content={<BangicodeTooltip />} />
          {showLegend && (
            <Legend
              iconType="plainline"
              iconSize={16}
              wrapperStyle={{ fontFamily: "var(--font-hanken-grotesk)", fontSize: 12 }}
            />
          )}
          {series.map((s, i) => (
            <Line
              key={s.key}
              type="monotone"
              dataKey={s.key}
              name={s.label ?? s.key}
              stroke={s.color ?? CHART_PALETTE[i % CHART_PALETTE.length]}
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, strokeWidth: 0 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

// ─── BarChart wrapper ─────────────────────────────────────────────────────────

function BangicodeBarChart({
  data,
  xKey,
  series,
  height = 300,
  showGrid = true,
  showLegend = false,
  className,
}: BaseChartProps) {
  return (
    <div className={cn("w-full", className)}>
      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={data} margin={{ top: 4, right: 4, bottom: 0, left: 0 }} barCategoryGap="30%">
          {showGrid && (
            <CartesianGrid stroke={CHART_COLORS.grid} strokeDasharray="4 2" vertical={false} />
          )}
          <XAxis dataKey={xKey} tick={axisStyle} axisLine={false} tickLine={false} />
          <YAxis tick={axisStyle} axisLine={false} tickLine={false} width={40} />
          <Tooltip content={<BangicodeTooltip />} cursor={{ fill: CHART_COLORS.grid, opacity: 0.4 }} />
          {showLegend && (
            <Legend
              wrapperStyle={{ fontFamily: "var(--font-hanken-grotesk)", fontSize: 12 }}
            />
          )}
          {series.map((s, i) => (
            <Bar
              key={s.key}
              dataKey={s.key}
              name={s.label ?? s.key}
              fill={s.color ?? CHART_PALETTE[i % CHART_PALETTE.length]}
              radius={[2, 2, 0, 0]}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// ─── AreaChart wrapper ────────────────────────────────────────────────────────

function BangicodeAreaChart({
  data,
  xKey,
  series,
  height = 300,
  showGrid = true,
  showLegend = false,
  className,
}: BaseChartProps) {
  return (
    <div className={cn("w-full", className)}>
      <ResponsiveContainer width="100%" height={height}>
        <AreaChart data={data} margin={{ top: 4, right: 4, bottom: 0, left: 0 }}>
          <defs>
            {series.map((s, i) => {
              const color = s.color ?? CHART_PALETTE[i % CHART_PALETTE.length];
              return (
                <linearGradient key={s.key} id={`grad-${s.key}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={color} stopOpacity={0.15} />
                  <stop offset="95%" stopColor={color} stopOpacity={0} />
                </linearGradient>
              );
            })}
          </defs>
          {showGrid && (
            <CartesianGrid stroke={CHART_COLORS.grid} strokeDasharray="4 2" vertical={false} />
          )}
          <XAxis dataKey={xKey} tick={axisStyle} axisLine={false} tickLine={false} />
          <YAxis tick={axisStyle} axisLine={false} tickLine={false} width={40} />
          <Tooltip content={<BangicodeTooltip />} />
          {showLegend && (
            <Legend
              wrapperStyle={{ fontFamily: "var(--font-hanken-grotesk)", fontSize: 12 }}
            />
          )}
          {series.map((s, i) => {
            const color = s.color ?? CHART_PALETTE[i % CHART_PALETTE.length];
            return (
              <Area
                key={s.key}
                type="monotone"
                dataKey={s.key}
                name={s.label ?? s.key}
                stroke={color}
                strokeWidth={2}
                fill={`url(#grad-${s.key})`}
                dot={false}
              />
            );
          })}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

// ─── PieChart wrapper ─────────────────────────────────────────────────────────

interface PieChartProps {
  data: { name: string; value: number; color?: string }[];
  height?: number;
  innerRadius?: number;
  showLegend?: boolean;
  className?: string;
}

function BangicodePieChart({
  data,
  height = 300,
  innerRadius = 60,
  showLegend = true,
  className,
}: PieChartProps) {
  return (
    <div className={cn("w-full", className)}>
      <ResponsiveContainer width="100%" height={height}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={innerRadius}
            outerRadius={innerRadius + 48}
            dataKey="value"
            paddingAngle={2}
          >
            {data.map((entry, i) => (
              <Cell
                key={`cell-${i}`}
                fill={entry.color ?? CHART_PALETTE[i % CHART_PALETTE.length]}
                stroke="none"
              />
            ))}
          </Pie>
          <Tooltip content={<BangicodeTooltip />} />
          {showLegend && (
            <Legend
              wrapperStyle={{ fontFamily: "var(--font-hanken-grotesk)", fontSize: 12 }}
            />
          )}
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export {
  BangicodeLineChart,
  BangicodeBarChart,
  BangicodeAreaChart,
  BangicodePieChart,
  BangicodeTooltip,
  CHART_COLORS,
  type BaseChartProps,
  type PieChartProps,
};
