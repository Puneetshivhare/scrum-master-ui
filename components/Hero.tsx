"use client";

import { motion } from "framer-motion";
import { content } from "@/content";
import AgentNetwork from "./AgentNetwork";
import AnimatedStat from "./AnimatedStat";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="border-b border-line px-6 py-24">
      <div className="mx-auto grid max-w-content gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface1 px-3 py-1"
        >
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-success" />
          <span className="font-mono text-[12px] text-muteStrong">
            {content.icon} {content.status}
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.05 }}
          className="max-w-[720px] text-[44px] font-semibold leading-[1.1] tracking-tight text-ink sm:text-[58px] sm:leading-[1.05] sm:tracking-[-0.02em]"
        >
          {content.tagline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.15 }}
          className="mt-6 max-w-[560px] text-[15px] leading-relaxed text-muteStrong"
        >
          {content.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.25 }}
          className="mt-8 flex flex-wrap gap-2"
        >
          {content.badges.map((b) => (
            <span
              key={b}
              className="rounded-full border border-line bg-surface1 px-3 py-1 text-[12px] text-mute"
            >
              {b}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.32 }}
          className="mt-12 grid grid-cols-3 gap-8 border-t border-line pt-8 sm:max-w-[480px]"
        >
          {content.stats.map((s) => (
            <AnimatedStat key={s.label} value={s.value} label={s.label} />
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease, delay: 0.2 }}
        className="aspect-[21/16] w-full"
      >
        <AgentNetwork />
      </motion.div>
      </div>
    </section>
  );
}
