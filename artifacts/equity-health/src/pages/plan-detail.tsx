import { useParams, Link } from "wouter";
import { plans } from "@/data/plans";
import { CheckCircle2, XCircle, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function PlanDetail() {
  const params = useParams();
  const planSlug = params.slug;
  const plan = plans.find(p => p.slug === planSlug);

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

  return (
    <div className="w-full min-h-[100dvh] bg-bg-surface">
      {/* Header */}
      <section className="bg-brand-navy text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/" className="inline-flex items-center text-brand-red-light hover:text-white mb-8 text-sm font-medium transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Plans
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="inline-block bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-wider uppercase">
                {plan.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{plan.name}</h1>
              <p className="text-text-muted text-lg md:text-xl">{plan.tagline}</p>
            </div>
            <div className="bg-brand-navy-light p-6 rounded-xl border border-brand-navy shrink-0 min-w-[280px]">
              <div className="text-text-muted text-sm font-medium mb-1">Monthly Premium</div>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold text-white">GH₵{plan.monthlyPremium}</span>
                <span className="text-text-muted ml-2">/mo</span>
              </div>
              <Link href="/contact" className="w-full inline-flex justify-center items-center bg-brand-red hover:bg-brand-red/90 text-white font-semibold py-3 rounded-md transition-colors" data-testid={`button-enroll-${plan.slug}`}>
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-brand-navy mb-8 border-b border-brand-navy-light/10 pb-4">What's Included</h2>
              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-whatsapp-green shrink-0 mt-0.5" />
                    <span className="text-brand-navy font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {plan.notIncluded && plan.notIncluded.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-8 rounded-xl border border-brand-navy-light/10 shadow-sm"
              >
                <h2 className="text-2xl font-bold text-text-muted mb-8 border-b border-brand-navy-light/10 pb-4">Not Included</h2>
                <ul className="space-y-4">
                  {plan.notIncluded.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 opacity-60">
                      <XCircle className="w-6 h-6 text-text-muted shrink-0 mt-0.5" />
                      <span className="text-text-muted line-through">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

          </div>
        </div>
      </section>
    </div>
  );
}
