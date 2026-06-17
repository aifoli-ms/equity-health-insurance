import { motion } from "framer-motion";
import { Shield, HeartPulse, Users, Award, Target, Eye, Zap, Heart, Lightbulb, Handshake } from "lucide-react";

const stats = [
  { value: "35+", label: "Years Experience" },
  { value: "682+", label: "Happy Clients" },
  { value: "23+", label: "Staff Members" },
  { value: "Nationwide", label: "Coverage Across Ghana" },
];

const values = [
  {
    icon: Handshake,
    title: "Respect",
    desc: "We value treating everyone with dignity, fairness, and courtesy.",
  },
  {
    icon: Shield,
    title: "Integrity",
    desc: "We uphold the highest ethical standards and maintain transparency.",
  },
  {
    icon: Zap,
    title: "Speed",
    desc: "We provide prompt service to ensure timely assistance.",
  },
  {
    icon: Heart,
    title: "Empathy",
    desc: "We understand and empathize with customers' unique needs.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We seek innovative solutions to enhance the health insurance experience.",
  },
  {
    icon: Users,
    title: "Teamwork",
    desc: "We foster collaboration, communication, and mutual respect among our employees.",
  },
];

const team = [
  { name: "Brig. Gen. (Rtd.) Dr Joseph Mensah Ayettey", role: "Board Chairman", photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&q=80&fit=crop&crop=face" },
  { name: "Dr Elton Fredrick Afari", role: "Chief Executive Officer", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&q=80&fit=crop&crop=face" },
  { name: "Mrs. Acheampomaah Opoku Afari Esq.", role: "Director / Board Secretary", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&q=80&fit=crop&crop=face" },
  { name: "Dr. Ernest Ofori Asamoah", role: "Independent Director", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&q=80&fit=crop&crop=face" },
  { name: "Nathan Kwabena Adisi", role: "Independent Director", photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&q=80&fit=crop&crop=face" },
  { name: "Prosper Atsyor", role: "Chief Finance Officer", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&q=80&fit=crop&crop=face" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

export default function About() {
  return (
    <div className="w-full">

      {/* Hero */}
      <section className="bg-brand-navy text-white py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-3xl"
          >
            <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-4">About Us</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Best Private<br />
              <span className="text-brand-red">Health Insurance in Ghana.</span>
            </h1>
            <p className="text-white/75 text-lg md:text-xl leading-relaxed max-w-2xl">
              Equity Health Insurance Ghana (EHI) is a trusted private health insurance provider,
              registered as a limited liability company and licensed under Act 852 of the National
              Health Insurance Authority (2012). We are committed to delivering comprehensive,
              reliable and affordable health insurance tailored to meet the unique needs of
              individuals, families, and corporate organizations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-brand-red">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="py-8 px-6 text-white"
              >
                <div className="text-3xl md:text-4xl font-bold mb-1">{s.value}</div>
                <div className="text-xs font-semibold uppercase tracking-widest text-white/70">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Objective, Mission & Vision */}
      <section className="py-20 md:py-32 bg-bg-surface">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-brand-red-light text-brand-red p-3 rounded-lg">
                  <Award className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-brand-navy">Our Objective</h2>
              </div>
              <p className="text-text-muted text-lg leading-relaxed">
                To provide fast, quality, reliable and accessible health care in the health
                insurance industry through prompt payment of claims to all our health service
                providers across the country.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-brand-red-light text-brand-red p-3 rounded-lg">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-brand-navy">Our Mission</h2>
              </div>
              <p className="text-text-muted text-lg leading-relaxed">
                To continuously improve healthcare access through excellent customer-centric
                services, in a cost-effective and timely manner.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeUp}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-brand-red-light text-brand-red p-3 rounded-lg">
                  <Eye className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-brand-navy">Our Vision</h2>
              </div>
              <p className="text-text-muted text-lg leading-relaxed">
                To be the leading health insurance company to deliver quality health insurance
                in Ghana and the wider African market.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-32 bg-bg-main">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Our Core Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex gap-5 items-start"
              >
                <div className="bg-brand-red-light text-brand-red p-3 rounded-lg shrink-0">
                  <v.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-navy mb-2">{v.title}</h3>
                  <p className="text-text-muted leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 md:py-32 bg-bg-surface">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Our Leadership</h2>
            <p className="text-text-muted text-lg max-w-xl mx-auto">
              Experienced professionals dedicated to making healthcare accessible for all Ghanaians.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center"
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-28 h-28 rounded-full object-cover mx-auto mb-4 border-2 border-brand-navy-light/20"
                />
                <h3 className="font-bold text-brand-navy">{member.name}</h3>
                <p className="text-sm text-text-muted mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-brand-navy text-white text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="container mx-auto px-4 md:px-6 max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to get covered?</h2>
          <p className="text-white/75 text-lg mb-8">
            Speak with one of our advisors and find the plan that's right for you.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-brand-red hover:bg-brand-red/90 text-white font-semibold h-14 px-10 rounded-md transition-colors"
          >
            Schedule a Consultation
          </a>
        </motion.div>
      </section>

    </div>
  );
}
