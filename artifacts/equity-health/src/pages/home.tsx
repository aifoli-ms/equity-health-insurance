import { motion } from "framer-motion";
import { Link } from "wouter";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { plans } from "@/data/plans";
import { Shield, Users, Building2, Clock, Award, HeartPulse, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1920&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1920&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551601651-2851e8522bf4?w=1920&q=80&auto=format&fit=crop",
];

export default function Home() {
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveImg((i) => (i + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const id = setInterval(() => emblaApi.scrollNext(), 3000);
    const node = emblaApi.rootNode();
    const pause = () => clearInterval(id);
    node.addEventListener("mouseenter", pause);
    return () => {
      clearInterval(id);
      node.removeEventListener("mouseenter", pause);
    };
  }, [emblaApi]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="flex flex-col min-h-[100dvh] w-full">
      {/* Hero Section */}
      <section className="relative w-full text-white overflow-hidden py-20 md:py-32 lg:py-40">
        {/* Background image carousel */}
        {HERO_IMAGES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
            style={{ opacity: i === activeImg ? 1 : 0 }}
          />
        ))}
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/35" />

        {/* Slide indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveImg(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeImg ? "bg-brand-red w-6" : "bg-white/40 hover:bg-white/70"}`}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="max-w-2xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
                Your Health,<br />
                <span className="text-brand-red">Our Priority</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
                We provide comprehensive, value-for-money and unrivalled healthcare insurance benefits and plans that suit every medical need and pocket through a network of reliable, accredited Health Service Providers across Ghana.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center bg-brand-red hover:bg-brand-red/90 text-white font-semibold h-14 px-8 rounded-md transition-colors" data-testid="button-hero-consultation">
                  Schedule Consultation
                </Link>
                <Link href="/plans" className="inline-flex items-center justify-center bg-brand-navy-light hover:bg-brand-navy-light/80 text-white font-medium h-14 px-8 rounded-md transition-colors border border-brand-navy-light" data-testid="button-hero-plans">
                  Explore Plans
                </Link>
              </div>
            </motion.div>

            {/* Trust panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:shrink-0 lg:w-72 xl:w-80"
            >
              <div className="bg-black/40 backdrop-blur-md rounded-2xl border border-white/15 divide-y divide-white/10 overflow-hidden">
                {[
                  { value: "35+", label: "Combined Years of Experience" },
                  { value: "682+", label: "Trusted Clients" },
                  { value: "23+", label: "Staff Members" },
                  { value: "Nationwide", label: "Coverage Across Ghana" },
                ].map((stat) => (
                  <div key={stat.label} className="px-6 py-4">
                    <div className="text-2xl font-bold text-white mb-0.5">{stat.value}</div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-white/60">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
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

          <div className="relative">
            <div ref={emblaRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
              <div className="-ml-6 flex">
                {plans.map((plan) => (
                  <div
                    key={plan.slug}
                    className="flex-[0_0_25%] min-w-0 pl-6"
                  >
                    <Card className="h-full flex flex-col bg-white border-brand-navy-light/10 shadow-sm hover:shadow-md transition-shadow">
                      <CardHeader>
                        <div className="mb-2 text-sm font-semibold text-brand-red bg-brand-red-light/30 inline-block px-3 py-1 rounded-full w-fit">
                          {plan.category}
                        </div>
                        <CardTitle className="text-xl text-brand-navy leading-snug">{plan.name}</CardTitle>
                        <p className="text-text-muted text-sm mt-1">{plan.targetAudience}</p>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <div className="flex items-baseline mb-5">
                          <span className="text-3xl font-bold text-brand-navy">GH₵{plan.monthlyPremium}</span>
                          <span className="text-text-muted ml-2">/month</span>
                        </div>
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
                      <CardFooter>
                        <Link href={`/plans/${plan.slug}`} className="w-full flex items-center justify-center border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-medium py-3 rounded-md transition-colors group" data-testid={`link-plan-${plan.slug}`}>
                          Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </CardFooter>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Side nav buttons */}
            <button
              onClick={scrollPrev}
              aria-label="Previous plan"
              className="absolute -left-8 top-[45%] -translate-y-1/2 text-brand-navy/30 hover:text-brand-red transition-colors"
            >
              <ChevronLeft className="w-7 h-7" strokeWidth={1.5} />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next plan"
              className="absolute -right-8 top-[45%] -translate-y-1/2 text-brand-navy/30 hover:text-brand-red transition-colors"
            >
              <ChevronRight className="w-7 h-7" strokeWidth={1.5} />
            </button>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {plans.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  aria-label={`Go to plan ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === selectedIndex
                      ? "bg-brand-red w-6"
                      : "bg-brand-navy/25 w-2 hover:bg-brand-navy/50"
                  }`}
                />
              ))}
            </div>
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
              { icon: Shield, title: "Local Expertise, Global Standards", desc: "We combine in-depth knowledge of Ghana's healthcare landscape with world-class best practices in insurance." },
              { icon: Building2, title: "Wide Accredited Network", desc: "Access hospitals, clinics, pharmacies, dental, laboratories, diagnostics and optical centres across the country." },
              { icon: Clock, title: "Fast Claims Processing", desc: "Our claims process is simple, efficient, and technology-driven for quick turnaround." },
              { icon: Users, title: "Customer-Centered Service", desc: "We go beyond insurance to build lasting relationships with our clients." },
              { icon: HeartPulse, title: "Transparent & Affordable Pricing", desc: "No hidden charges — our packages are clear, competitive, and fair." },
              { icon: Award, title: "Award-Winning Company", desc: "Recognized for outstanding service excellence, customer care, and integrity." },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: i * 0.08 } }
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
