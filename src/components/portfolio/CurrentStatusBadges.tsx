import { motion } from "framer-motion";
import type { CurrentStatusEntry } from "@/data/types";

interface CurrentStatusBadgesProps {
  entries: CurrentStatusEntry[];
}

const colorMap: Record<
  CurrentStatusEntry["color"],
  { bg: string; border: string; text: string; dot: string; pulse: string }
> = {
  emerald: {
    bg: "bg-emerald-500/8",
    border: "border-emerald-500/20",
    text: "text-emerald-700 dark:text-emerald-400",
    dot: "bg-emerald-500",
    pulse: "bg-emerald-400",
  },
  blue: {
    bg: "bg-blue-500/8",
    border: "border-blue-500/20",
    text: "text-blue-700 dark:text-blue-400",
    dot: "bg-blue-500",
    pulse: "bg-blue-400",
  },
  violet: {
    bg: "bg-violet-500/8",
    border: "border-violet-500/20",
    text: "text-violet-700 dark:text-violet-400",
    dot: "bg-violet-500",
    pulse: "bg-violet-400",
  },
  amber: {
    bg: "bg-amber-500/8",
    border: "border-amber-500/20",
    text: "text-amber-700 dark:text-amber-400",
    dot: "bg-amber-500",
    pulse: "bg-amber-400",
  },
};

export default function CurrentStatusBadges({ entries }: CurrentStatusBadgesProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.85 }}
      className="flex flex-wrap items-center justify-center gap-3"
    >
      {entries.map((entry, i) => {
        const c = colorMap[entry.color];
        const isActive = entry.status === "active";

        return (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.9 + i * 0.1 }}
            className={`inline-flex items-start gap-2.5 px-3.5 py-2.5 rounded-xl border ${c.bg} ${c.border} backdrop-blur-sm`}
          >
            {/* pulse dot */}
            <span className="relative flex items-center mt-0.5 shrink-0">
              <span className={`w-2 h-2 rounded-full ${c.dot}`} />
              {isActive && (
                <span
                  className={`absolute inset-0 rounded-full ${c.pulse} animate-ping opacity-60`}
                />
              )}
            </span>

            <div className="text-left">
              <span className={`block text-[10px] font-semibold uppercase tracking-widest ${c.text} opacity-70`}>
                {entry.label}{entry.status === "upcoming" ? " · Soon" : ""}
              </span>
              <span className={`block text-xs font-semibold ${c.text} leading-snug`}>
                {entry.role}
              </span>
              <span className="block text-[11px] text-muted-foreground leading-snug mt-0.5 max-w-[160px]">
                {entry.since ? `${entry.since} · ` : ""}{entry.description}
              </span>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
