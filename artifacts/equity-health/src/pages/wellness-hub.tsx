import { motion } from "framer-motion";
import { HeartPulse } from "lucide-react";
import { wellnessTips } from "@/data/wellness-tips";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

const vp = { once: true, margin: "-100px" as const };

export default function WellnessHub() {
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

      {/* Tips grid */}
      <section className="py-16 md:py-24 bg-bg-surface">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {wellnessTips.map((tip, i) => (
              <motion.article
                key={tip.slug}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                variants={fadeUp}
                className="bg-white rounded-xl shadow-sm overflow-hidden border border-brand-navy-light/10"
              >
                <img
                  src={tip.image}
                  alt={tip.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[16/10] object-cover"
                />
                <div className="p-6 md:p-7">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-brand-red-light text-brand-red text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
                      {tip.category}
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-brand-navy mb-2 leading-snug">
                    {tip.title}
                  </h2>
                  <p className="text-text-muted leading-relaxed">{tip.summary}</p>
                </div>
              </motion.article>
            ))}
          </div>
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
