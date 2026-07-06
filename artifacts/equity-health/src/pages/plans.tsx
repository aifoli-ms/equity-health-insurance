import { Link } from "wouter";
import { motion } from "framer-motion";
import { usePlans } from "@/hooks/use-api";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.07 },
  }),
};

export default function Plans() {
  const { data: plans = [] } = usePlans();

  return (
    <div className="w-full min-h-[100dvh] bg-bg-surface">

      {/* Header */}
      <section className="bg-brand-navy text-white py-10 md:py-14">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-2">Coverage options</p>
              <h1 className="text-3xl md:text-4xl font-bold">Our Plans</h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="text-white/60 text-sm md:text-base max-w-sm md:text-right"
            >
              {plans.length} plans designed for every stage of life and business — from individuals to large enterprises.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Cards grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.slug}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="flex"
              >
                <Card className="w-full flex flex-col bg-white border-brand-navy-light/10 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="mb-2 text-xs font-semibold text-brand-red bg-brand-red-light/30 inline-block px-3 py-1 rounded-full w-fit uppercase tracking-wide">
                      {plan.category}
                    </div>
                    <div className="min-h-[3.5rem]">
                      <CardTitle className="text-lg md:text-xl text-brand-navy leading-snug">{plan.name}</CardTitle>
                    </div>
                    <p className="text-text-muted text-sm">{plan.targetAudience}</p>
                  </CardHeader>
                  <CardContent className="flex-grow pt-0">
                    <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">Plan includes:</p>
                    <ul className="space-y-2">
                      {plan.features.slice(0, 4).map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-brand-navy">
                          <CheckCircle2 className="w-4 h-4 text-whatsapp-green shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                      {plan.features.length > 4 && (
                        <li className="text-sm text-text-muted">+{plan.features.length - 4} more benefits</li>
                      )}
                    </ul>
                  </CardContent>
                  <CardFooter className="pt-4">
                    <Link
                      href={`/plans/${plan.slug}`}
                      className="w-full flex items-center justify-center border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-medium py-3 rounded-md transition-colors group"
                      data-testid={`link-plan-${plan.slug}`}
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
