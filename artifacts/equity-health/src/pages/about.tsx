import { motion } from "framer-motion";
import { Link } from "wouter";
import { Shield, Users, Award, Target, Eye, Zap, Heart, Lightbulb, Handshake } from "lucide-react";
import { board, management } from "@/data/team";

const stats = [
  { value: "35+", label: "Years Experience" },
  { value: "682+", label: "Happy Clients" },
  { value: "Nationwide", label: "Coverage Across Ghana" },
];

const values = [
  {
    icon: Handshake,
    title: "Respect",
    desc: "We value treating everyone with dignity, fairness, and courtesy.",
    color: "red",
  },
  {
    icon: Shield,
    title: "Integrity",
    desc: "We uphold the highest ethical standards and maintain transparency.",
    color: "navy",
  },
  {
    icon: Zap,
    title: "Speed",
    desc: "We provide prompt service to ensure timely assistance.",
    color: "red",
  },
  {
    icon: Heart,
    title: "Empathy",
    desc: "We understand and empathize with customers' unique needs.",
    color: "navy",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We seek innovative solutions to enhance the health insurance experience.",
    color: "red",
  },
  {
    icon: Users,
    title: "Teamwork",
    desc: "We foster collaboration, communication, and mutual respect among our employees.",
    color: "navy",
  },
];


function stripHonorifics(name: string): string[] {
  let cleaned = name.replace(/\s+Esq\.?\s*$/i, "");
  const prefix = /^(Brig\.?\s*Gen\.?\s*(\(Rtd\.?\)\s*)?|Mrs\.?|Mr\.?|Ms\.?|Dr\.?)\s*/i;
  while (prefix.test(cleaned)) cleaned = cleaned.replace(prefix, "");
  return cleaned.trim().split(/\s+/).filter(Boolean);
}

function getDefaultInitials(parts: string[]): string {
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function nameHash(name: string): number {
  let h = 0;
  for (let i = 0; i < name.length; i++) {
    h = name.charCodeAt(i) + ((h << 5) - h);
  }
  return Math.abs(h);
}

const AVATAR_COLORS = [
  "var(--color-brand-navy)",
  "hsl(358 70% 38%)",
  "hsl(200 55% 22%)",
  "hsl(270 45% 28%)",
  "hsl(160 50% 22%)",
];

function resolveAvatars(members: { name: string }[]) {
  const entries = members.map((m) => {
    const parts = stripHonorifics(m.name);
    return { name: m.name, parts, initials: getDefaultInitials(parts) };
  });

  const countByInitials = new Map<string, string[]>();
  for (const e of entries) {
    const list = countByInitials.get(e.initials) ?? [];
    list.push(e.name);
    countByInitials.set(e.initials, list);
  }

  const result = new Map<string, { initials: string; bg: string }>();

  for (const e of entries) {
    const colliders = countByInitials.get(e.initials)!;
    if (colliders.length <= 1) {
      result.set(e.name, { initials: e.initials, bg: AVATAR_COLORS[0] });
      continue;
    }

    if (e.parts.length > 2) {
      const threeChar = (e.parts[0][0] + e.parts[1][0] + e.parts[e.parts.length - 1][0]).toUpperCase();
      result.set(e.name, { initials: threeChar, bg: AVATAR_COLORS[0] });
    } else {
      const colorIdx = nameHash(e.name) % (AVATAR_COLORS.length - 1) + 1;
      result.set(e.name, { initials: e.initials, bg: AVATAR_COLORS[colorIdx] });
    }
  }

  return result;
}

const managementAvatars = resolveAvatars(management);
const boardAvatars = resolveAvatars(board);

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

const vp = { once: true, margin: "-100px" as const };

function IconBadge({ icon: Icon, color }: { icon: typeof Award; color: "red" | "navy" }) {
  return (
    <div className="relative shrink-0">
      <div
        className={`absolute inset-0 rounded-2xl blur-lg opacity-30 transition-opacity duration-300 group-hover:opacity-60 ${
          color === "red" ? "bg-brand-red" : "bg-brand-navy"
        }`}
      />
      <div
        className={`relative w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md transition-transform duration-300 ease-out group-hover:scale-110 ${
          color === "red"
            ? "bg-gradient-to-br from-brand-red to-brand-red/70"
            : "bg-gradient-to-br from-brand-navy-light to-brand-navy"
        }`}
      >
        <Icon className="w-7 h-7" />
      </div>
    </div>
  );
}

export default function About() {
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
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-x-0 sm:divide-x divide-white/20">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
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
      <section className="py-14 md:py-20 bg-bg-surface">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              variants={fadeUp}
            >
              <div className="group flex items-center gap-4 mb-6">
                <IconBadge icon={Award} color="red" />
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
              viewport={vp}
              custom={1}
              variants={fadeUp}
            >
              <div className="group flex items-center gap-4 mb-6">
                <IconBadge icon={Target} color="navy" />
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
              viewport={vp}
              custom={2}
              variants={fadeUp}
            >
              <div className="group flex items-center gap-4 mb-6">
                <IconBadge icon={Eye} color="red" />
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
      <section className="py-16 md:py-24 bg-bg-main">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={vp}
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
                viewport={vp}
                variants={fadeUp}
                className="group flex gap-5 items-start"
              >
                <IconBadge icon={v.icon} color={v.color as "red" | "navy"} />
                <div>
                  <h3 className="text-lg font-bold text-brand-navy mb-2">{v.title}</h3>
                  <p className="text-text-muted leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-16 md:py-24 bg-bg-surface">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Board of Directors</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
            {board.map((member, i) => {
              const avatar = boardAvatars.get(member.name)!;
              return (
                <motion.div
                  key={member.name}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={vp}
                  variants={fadeUp}
                >
                  <Link href={`/team/${member.slug}`} className="block text-center group cursor-pointer">
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={member.name}
                        loading="lazy"
                        decoding="async"
                        className="w-24 h-24 rounded-full object-cover mx-auto mb-3 border-2 border-brand-navy-light/20 group-hover:border-brand-red transition-colors"
                      />
                    ) : (
                      <div
                        className="w-24 h-24 rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-3 border-2 border-transparent group-hover:border-brand-red transition-colors"
                        style={{ backgroundColor: avatar.bg }}
                      >
                        {avatar.initials}
                      </div>
                    )}
                    <h3 className="font-bold text-brand-navy text-sm group-hover:text-brand-red transition-colors">{member.name}</h3>
                    <p className="text-xs text-text-muted mt-1">{member.role}</p>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Management */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            variants={fadeUp}
            className="text-center mt-20 mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">Executive Management Team</h2>
          </motion.div>

          <div className="flex flex-col items-center gap-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {management.map((member, i) => {
                const avatar = managementAvatars.get(member.name)!;
                return (
                  <motion.div
                    key={member.name}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={vp}
                    variants={fadeUp}
                  >
                    <Link href={`/team/${member.slug}`} className="block text-center group cursor-pointer">
                      {member.photo ? (
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="w-24 h-24 rounded-full object-cover mx-auto mb-3 border-2 border-brand-navy-light/20 group-hover:border-brand-red transition-colors"
                        />
                      ) : (
                        <div
                          className="w-24 h-24 rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-3 border-2 border-transparent group-hover:border-brand-red transition-colors"
                          style={{ backgroundColor: avatar.bg }}
                        >
                          {avatar.initials}
                        </div>
                      )}
                      <h3 className="font-bold text-brand-navy text-sm group-hover:text-brand-red transition-colors">{member.name}</h3>
                      <p className="text-xs text-text-muted mt-1">{member.role}</p>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to get covered?</h2>
          <p className="text-white/75 text-lg mb-8">
            Speak with one of our advisors and find the plan that's right for you.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-brand-red hover:bg-brand-red/90 text-white font-semibold h-14 px-10 rounded-md transition-colors"
          >
            Request a Quote
          </a>
        </motion.div>
      </section>

    </div>
  );
}
