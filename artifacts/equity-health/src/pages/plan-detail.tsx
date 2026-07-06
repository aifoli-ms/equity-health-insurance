import { useParams, Link } from "wouter";
import { usePlan } from "@/hooks/use-api";
import { CheckCircle2, ArrowLeft, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function PlanDetail() {
  const params = useParams();
  const { data: plan, isLoading } = usePlan(params.slug || "");

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-bg-surface">
        <Loader2 className="w-8 h-8 animate-spin text-brand-red" />
      </div>
    );
  }

  if (!plan) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-bg-surface px-4 text-center">
        <h1 className="text-4xl font-bold text-brand-navy mb-4">Plan Not Found</h1>
        <p className="text-text-muted mb-8">The health insurance plan you are looking for does not exist.</p>
        <Link href="/" className="inline-flex items-center text-brand-red font-medium hover:underline">
          <ArrowLeft className="w-4 h-4 mr-2" /> Return to Home
        </Link>
      </div>
    );
  }

  const midpoint = Math.ceil(plan.features.length / 2);
  const featuresCol1 = plan.features.slice(0, midpoint);
  const featuresCol2 = plan.features.slice(midpoint);

  return (
    <div className="w-full min-h-[100dvh] bg-bg-surface">
      {/* Header */}
      <section className="relative text-white py-16 md:py-24 overflow-hidden">
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
          <Link href="/plans" className="inline-flex items-center text-brand-red-light hover:text-white mb-8 text-sm font-medium transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Plans
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="inline-block bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-wider uppercase">
                {plan.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{plan.name}</h1>
              <p className="text-white/70 text-lg md:text-xl">{plan.tagline}</p>
            </div>
            <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-white/15 w-full md:w-auto md:shrink-0 md:min-w-[280px]">
              <Link href="/contact" className="w-full inline-flex justify-center items-center bg-brand-red hover:bg-brand-red/90 text-white font-semibold py-3 rounded-md transition-colors" data-testid={`button-enroll-${plan.slug}`}>
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-brand-navy mb-10 border-b border-brand-navy-light/10 pb-4">Coverage & Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-5">
              <ul className="space-y-5">
                {featuresCol1.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-whatsapp-green shrink-0 mt-0.5" />
                    <span className="text-brand-navy font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-5">
                {featuresCol2.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-whatsapp-green shrink-0 mt-0.5" />
                    <span className="text-brand-navy font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>


    </div>
  );
}
