import { motion } from "framer-motion";
import { Link } from "wouter";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { usePlans } from "@/hooks/use-api";
import { Shield, Users, Building2, Clock, Award, HeartPulse, ArrowRight, ChevronLeft, ChevronRight, CheckCircle2, Quote } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const HERO_IMAGES = [
  "/images/hero/consultation-1.jpg",
  "/images/hero/consultation-2.jpg",
  "/images/hero/consultation-3.jpg",
  "/images/hero/presentation.jpg",
];

export default function Home() {
  const { data: plans = [] } = usePlans();
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <div className="flex flex-col min-h-[100dvh] w-full">
      {/* Hero Section */}
      <section className="relative w-full text-white overflow-hidden h-[calc(100dvh-5rem)] flex flex-col justify-center">
        {/* Background image carousel */}
        {HERO_IMAGES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-1000"
            style={{ opacity: i === activeImg ? 1 : 0 }}
          />
        ))}
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-black/70" />

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
                  Request a Quote
                </Link>
                <Link href="/plans" className="inline-flex items-center justify-center bg-brand-navy-light hover:bg-brand-navy-light/80 text-white font-medium h-14 px-8 rounded-md transition-colors border border-brand-navy-light" data-testid="button-hero-plans">
                  Explore Plans
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      {plans.length > 0 && <section className="py-20 md:py-32 bg-bg-surface w-full">
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
                    className="flex-[0_0_85%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] xl:flex-[0_0_25%] min-w-0 pl-6"
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

            {/* Side nav buttons — hidden on mobile where swipe is used */}
            <button
              onClick={scrollPrev}
              aria-label="Previous plan"
              className="hidden md:flex absolute -left-8 top-[45%] -translate-y-1/2 text-brand-navy/30 hover:text-brand-red transition-colors"
            >
              <ChevronLeft className="w-7 h-7" strokeWidth={1.5} />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next plan"
              className="hidden md:flex absolute -right-8 top-[45%] -translate-y-1/2 text-brand-navy/30 hover:text-brand-red transition-colors"
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
      </section>}

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
              { icon: Shield, title: "Local Expertise, Global Standards", desc: "We combine in-depth knowledge of Ghana's healthcare landscape with world-class best practices in insurance.", color: "red" },
              { icon: Building2, title: "Wide Accredited Network", desc: "Access hospitals, clinics, pharmacies, dental, laboratories, diagnostics and optical centres across the country.", color: "navy" },
              { icon: Clock, title: "Prompt Payment of Claims", desc: "Our claims process is simple, efficient, and technology-driven for quick turnaround.", color: "red" },
              { icon: Users, title: "Customer-Centered Service", desc: "We go beyond insurance to build lasting relationships with our clients.", color: "navy" },
              { icon: HeartPulse, title: "Transparent & Affordable Pricing", desc: "No hidden charges — our packages are clear, competitive, and fair.", color: "red" },
              { icon: Award, title: "Award-Winning Company", desc: "Recognized for outstanding service excellence, customer care, and integrity.", color: "navy" },
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
                className="group flex gap-5 items-start"
              >
                <div className="relative shrink-0">
                  <div
                    className={`absolute inset-0 rounded-2xl blur-lg opacity-30 transition-opacity duration-300 group-hover:opacity-60 ${
                      feature.color === "red" ? "bg-brand-red" : "bg-brand-navy"
                    }`}
                  />
                  <div
                    className={`relative w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-6 ${
                      feature.color === "red"
                        ? "bg-gradient-to-br from-brand-red to-brand-red/70"
                        : "bg-gradient-to-br from-brand-navy-light to-brand-navy"
                    }`}
                  >
                    <feature.icon className="w-7 h-7" />
                  </div>
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
      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-bg-surface w-full overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">What Our Clients Say</h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Hear from individuals and businesses who trust Equity Health Insurance for their healthcare needs.
            </p>
          </motion.div>
        </div>

        {(() => {
          const row1 = [
            {
              quote: "Equity Health made the entire process seamless — from enrollment to claims. My family feels secure knowing we have reliable coverage whenever we need it.",
              name: "Akua Mensah",
              role: "Family Plan Member",
              photo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&q=80&fit=crop&crop=face",
            },
            {
              quote: "As an HR manager, finding the right group plan was critical. Equity Health offered us competitive rates and outstanding support for our 120+ employees.",
              name: "Kwame Asante",
              role: "HR Manager, Goldfields Corp.",
              photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&q=80&fit=crop&crop=face",
            },
            {
              quote: "Their claims processing is remarkably fast. I was reimbursed within days, and the customer service team kept me informed every step of the way.",
              name: "Esi Owusu-Adjei",
              role: "Individual Plan Member",
              photo: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=200&h=200&q=80&fit=crop&crop=face",
            },
            {
              quote: "Switching to Equity Health was the best decision for our company. The onboarding was smooth and our staff love the wide network of hospitals available.",
              name: "Nana Yaw Boateng",
              role: "CEO, Ashanti Logistics",
              photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&q=80&fit=crop&crop=face",
            },
          ];
          const row2 = [
            {
              quote: "I never thought health insurance could be this straightforward. The team walked me through every option and I found a plan that fits my budget perfectly.",
              name: "Abena Osei",
              role: "Individual Plan Member",
              photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&q=80&fit=crop&crop=face",
            },
            {
              quote: "We've been with Equity Health for three years now. Their consistency in service delivery and claims handling is unmatched in the Ghanaian market.",
              name: "Dr. Kofi Adjei",
              role: "Medical Director, Cape Coast Clinic",
              photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&q=80&fit=crop&crop=face",
            },
            {
              quote: "What impressed me most is how quickly they handle emergencies. When my daughter needed urgent care, everything was sorted within minutes.",
              name: "Fatima Ibrahim",
              role: "Family Plan Member",
              photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&q=80&fit=crop&crop=face",
            },
            {
              quote: "The digital claims portal saves us hours every month. Our HR team can track everything in real time — no more paperwork headaches.",
              name: "Samuel Tetteh",
              role: "HR Director, Volta Mining",
              photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&q=80&fit=crop&crop=face",
            },
          ];

          const TestimonialCard = ({ t }: { t: typeof row1[0] }) => (
            <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm border border-brand-navy-light/10 flex flex-col w-[260px] sm:w-[320px] md:w-[400px] shrink-0">
              <Quote className="w-8 h-8 text-brand-red/30 mb-4 shrink-0" />
              <p className="text-brand-navy leading-relaxed flex-grow">{t.quote}</p>
              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-brand-navy-light/10">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-red-light"
                />
                <div>
                  <div className="font-bold text-brand-navy text-sm">{t.name}</div>
                  <div className="text-xs text-text-muted">{t.role}</div>
                </div>
              </div>
            </div>
          );

          return (
            <div className="flex flex-col gap-6">
              <div className="marquee-row scroll-left">
                {[...row1, ...row1].map((t, i) => (
                  <TestimonialCard key={i} t={t} />
                ))}
              </div>
              <div className="marquee-row scroll-right">
                {[...row2, ...row2].map((t, i) => (
                  <TestimonialCard key={i} t={t} />
                ))}
              </div>
            </div>
          );
        })()}
      </section>
    </div>
  );
}
