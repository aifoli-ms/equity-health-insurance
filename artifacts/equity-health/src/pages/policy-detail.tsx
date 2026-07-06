import { useParams, Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { findPolicyBySlug } from "@/data/policies";

export default function PolicyDetail() {
  const params = useParams();
  const policy = findPolicyBySlug(params.slug || "");

  if (!policy) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-bg-surface px-4 text-center">
        <h1 className="text-4xl font-bold text-brand-navy mb-4">Policy Not Found</h1>
        <p className="text-text-muted mb-8">The health policy you are looking for does not exist.</p>
        <Link href="/" className="inline-flex items-center text-brand-red font-medium hover:underline">
          <ArrowLeft className="w-4 h-4 mr-2" /> Return to Home
        </Link>
      </div>
    );
  }

  const paragraphs = policy.description.split("\n\n");

  return (
    <div className="w-full min-h-[100dvh] bg-bg-surface">
      {/* Hero */}
      <section className="relative text-white py-16 md:py-28 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=65&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center text-brand-red-light hover:text-white mb-8 text-sm font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
          <div className="max-w-2xl">
            <span className="inline-block bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-wider uppercase">
              {policy.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{policy.name}</h1>
            <p className="text-white/70 text-lg md:text-xl">{policy.tagline}</p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {paragraphs.map((para, i) => {
              const isCallout = i === paragraphs.length - 1;
              return isCallout ? (
                <p key={i} className="text-brand-navy font-semibold text-lg leading-relaxed">
                  {para}
                </p>
              ) : (
                <p key={i} className="text-brand-navy/80 text-base leading-relaxed">
                  {para}
                </p>
              );
            })}

            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red/90 text-white font-semibold px-6 py-3 rounded-md transition-colors group"
              >
                Get in Touch{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
