import { motion } from "framer-motion";
import { Link } from "wouter";
import { plans } from "@/data/plans";
import { Shield, Users, Building2, Clock, Award, HeartPulse, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="flex flex-col min-h-[100dvh] w-full">
      {/* Hero Section */}
      <section className="relative w-full bg-brand-navy text-white overflow-hidden py-20 md:py-32 lg:py-40">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Your Health,<br />
              <span className="text-brand-red">Our Priority</span>
            </h1>
            <p className="text-lg md:text-xl text-text-muted mb-8 max-w-2xl leading-relaxed">
              Ghana's most trusted, NIC-regulated health insurance provider. We offer comprehensive, affordable coverage tailored for individuals, families, and growing businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center bg-brand-red hover:bg-brand-red/90 text-white font-semibold h-14 px-8 rounded-md transition-colors" data-testid="button-hero-consultation">
                Schedule Consultation
              </Link>
              <Link href="/plans/corporate" className="inline-flex items-center justify-center bg-brand-navy-light hover:bg-brand-navy-light/80 text-white font-medium h-14 px-8 rounded-md transition-colors border border-brand-navy-light" data-testid="button-hero-plans">
                Explore Plans
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 md:py-32 bg-bg-surface w-full">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Our Plans</h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Coverage designed for every stage of life and business. Find the perfect plan that fits your budget and health needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.slug}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } }
                }}
              >
                <Card className="h-full flex flex-col bg-white border-brand-navy-light/10 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="mb-2 text-sm font-semibold text-brand-red bg-brand-red-light/30 inline-block px-3 py-1 rounded-full w-fit">
                      {plan.category}
                    </div>
                    <CardTitle className="text-xl md:text-2xl text-brand-navy">{plan.name}</CardTitle>
                    <CardDescription className="text-text-muted min-h-[40px]">{plan.tagline}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex items-baseline mb-6">
                      <span className="text-3xl font-bold text-brand-navy">GH₵{plan.monthlyPremium}</span>
                      <span className="text-text-muted ml-2">/month</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/plans/${plan.slug}`} className="w-full flex items-center justify-center border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-medium py-3 rounded-md transition-colors group" data-testid={`link-plan-${plan.slug}`}>
                      Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 bg-bg-main w-full">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Why Choose Us</h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              We stand out by providing reliable, fast, and accessible healthcare solutions across Ghana.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {[
              { icon: Shield, title: "Regulated & Trusted", desc: "Fully licensed by the National Insurance Commission (NIC) of Ghana." },
              { icon: Building2, title: "Wide Provider Network", desc: "Access to top hospitals, clinics, and pharmacies nationwide." },
              { icon: Clock, title: "Fast Claim Processing", desc: "Cashless service at most facilities and quick reimbursement turnaround." },
              { icon: Users, title: "Family & Corporate Focused", desc: "Tailored plans that scale from individuals to large enterprises." },
              { icon: HeartPulse, title: "Comprehensive Coverage", desc: "From routine checkups to specialist care and emergencies." },
              { icon: Award, title: "Award-Winning Service", desc: "Recognized for outstanding customer support and care management." },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, delay: i * 0.1 } }
                }}
                className="flex gap-4 items-start"
              >
                <div className="bg-brand-red-light text-brand-red p-3 rounded-lg shrink-0">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-navy mb-2">{feature.title}</h3>
                  <p className="text-text-muted">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
