import { motion } from "framer-motion";
import { HeartPulse } from "lucide-react";
import { useEffect, useState } from "react";
import { wellnessTips } from "@/data/wellness-tips";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

const vp = { once: true, margin: "-100px" as const };

export default function WellnessHub() {
  const [activeTip, setActiveTip] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setActiveTip((i) => (i + 1) % wellnessTips.length);
    }, 3000);
    return () => clearInterval(id);
  }, [isPaused]);

  return (
    <div className="w-full">

      {/* Hero */}
      <section className="bg-brand-navy text-white pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-3xl"
          >
            <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-4">Wellness Hub</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Health Tips<br />
              <span className="text-brand-red">For a Healthier You.</span>
            </h1>
            <p className="text-white/75 text-lg md:text-xl leading-relaxed max-w-2xl">
              A space where the Equity Health Insurance team shares simple, practical tips to
              help you and your family stay healthy every day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tips rotator */}
      <section className="py-16 md:py-24 bg-bg-surface">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            variants={fadeUp}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="relative bg-white rounded-2xl shadow-sm overflow-hidden border border-brand-navy-light/10 max-w-4xl mx-auto"
          >
            <div className="relative aspect-[16/9] md:aspect-[21/9]">
              {wellnessTips.map((tip, i) => (
                <img
                  key={tip.slug}
                  src={tip.image}
                  alt={tip.title}
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                  style={{ opacity: i === activeTip ? 1 : 0 }}
                />
              ))}
            </div>
            <div className="p-6 md:p-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-brand-red-light text-brand-red text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
                  {wellnessTips[activeTip].category}
                </span>
              </div>
              <h2 className="text-xl md:text-3xl font-bold text-brand-navy mb-3 leading-snug">
                {wellnessTips[activeTip].title}
              </h2>
              <p className="text-text-muted text-base md:text-lg leading-relaxed">
                {wellnessTips[activeTip].summary}
              </p>
            </div>

            {/* Slide indicators */}
            <div className="flex justify-center gap-2 pb-6 md:pb-8">
              {wellnessTips.map((tip, i) => (
                <button
                  key={tip.slug}
                  onClick={() => setActiveTip(i)}
                  aria-label={`Show tip: ${tip.title}`}
                  className={`h-2 rounded-full transition-all duration-300 ${i === activeTip ? "bg-brand-red w-6" : "bg-brand-navy-light/20 hover:bg-brand-navy-light/40 w-2"}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 bg-brand-navy text-white text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          variants={fadeUp}
          className="container mx-auto px-4 md:px-6 max-w-2xl"
        >
          <HeartPulse className="w-10 h-10 text-brand-red mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your health, our priority.</h2>
          <p className="text-white/75 text-lg mb-8">
            Explore our plans and find the cover that keeps you and your family protected.
          </p>
          <a
            href="/plans"
            className="inline-flex items-center justify-center bg-brand-red hover:bg-brand-red/90 text-white font-semibold h-14 px-10 rounded-md transition-colors"
          >
            View Our Plans
          </a>
        </motion.div>
      </section>

    </div>
  );
}
