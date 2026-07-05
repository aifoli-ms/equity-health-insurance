import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Briefcase, GraduationCap, Award } from "lucide-react";
import { findMemberBySlug, allMembers } from "@/data/team";

function stripHonorifics(name: string): string[] {
  let cleaned = name.replace(/\s+Esq\.?\s*$/i, "");
  const prefix = /^(Brig\.?\s*Gen\.?\s*(\(Rtd\.?\)\s*)?|Mrs\.?|Mr\.?|Ms\.?|Dr\.?)\s*/i;
  while (prefix.test(cleaned)) cleaned = cleaned.replace(prefix, "");
  return cleaned.trim().split(/\s+/).filter(Boolean);
}

function getInitials(parts: string[]): string {
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

const vp = { once: true, margin: "-60px" as const };

export default function TeamMember() {
  const [, params] = useRoute("/team/:slug");
  const member = params?.slug ? findMemberBySlug(params.slug) : undefined;

  if (!member) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl font-bold text-brand-navy mb-4">Member Not Found</h1>
        <p className="text-text-muted mb-8">The team member you're looking for doesn't exist.</p>
        <Link href="/about" className="inline-flex items-center gap-2 text-brand-red hover:text-brand-red/80 font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to About
        </Link>
      </div>
    );
  }

  const parts = stripHonorifics(member.name);
  const initials = getInitials(parts);

  const otherMembers = allMembers
    .filter((m) => m.slug !== member.slug && m.group === member.group)
    .slice(0, 4);

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-brand-navy text-white pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/about" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to About Us
          </Link>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-col md:flex-row items-start gap-8 md:gap-12"
          >
            {member.photo ? (
              <img
                src={member.photo}
                alt={member.name}
                fetchPriority="high"
                decoding="async"
                className="w-36 h-36 md:w-44 md:h-44 rounded-2xl object-cover border-4 border-white/20 shrink-0"
              />
            ) : (
              <div
                className="w-36 h-36 md:w-44 md:h-44 rounded-2xl flex items-center justify-center text-white text-4xl font-bold shrink-0 border-4 border-white/20"
                style={{ backgroundColor: "var(--color-brand-navy-light, hsl(200 55% 22%))" }}
              >
                {initials}
              </div>
            )}
            <div>
              <div className="inline-block bg-brand-red/20 text-brand-red text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                {member.group === "board" ? "Board of Directors" : "Management Team"}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-3">{member.name}</h1>
              <p className="text-xl md:text-2xl text-white/70">{member.role}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 md:py-20 bg-bg-surface">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main bio */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              variants={fadeUp}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl font-bold text-brand-navy mb-6">About</h2>
              <p className="text-text-muted text-lg leading-relaxed">{member.bio}</p>
            </motion.div>

            {/* Sidebar */}
            <div className="space-y-8">
              {member.qualifications && member.qualifications.length > 0 && (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={vp}
                  custom={1}
                  variants={fadeUp}
                  className="bg-white rounded-xl p-6 border border-brand-navy-light/10 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-brand-red-light text-brand-red p-2 rounded-lg">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-brand-navy">Qualifications</h3>
                  </div>
                  <ul className="space-y-2">
                    {member.qualifications.map((q) => (
                      <li key={q} className="text-text-muted text-sm flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-red mt-1.5 shrink-0" />
                        {q}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {member.expertise && member.expertise.length > 0 && (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={vp}
                  custom={2}
                  variants={fadeUp}
                  className="bg-white rounded-xl p-6 border border-brand-navy-light/10 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-brand-red-light text-brand-red p-2 rounded-lg">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-brand-navy">Areas of Expertise</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((e) => (
                      <span
                        key={e}
                        className="text-xs font-medium bg-brand-navy/5 text-brand-navy px-3 py-1.5 rounded-full"
                      >
                        {e}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Other team members */}
      {otherMembers.length > 0 && (
        <section className="py-14 md:py-20 bg-bg-main">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              variants={fadeUp}
              className="mb-10"
            >
              <h2 className="text-2xl font-bold text-brand-navy">
                Other {member.group === "board" ? "Board Members" : "Management Team Members"}
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {otherMembers.map((m, i) => {
                const mParts = stripHonorifics(m.name);
                const mInitials = getInitials(mParts);
                return (
                  <motion.div
                    key={m.slug}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={vp}
                    variants={fadeUp}
                  >
                    <Link href={`/team/${m.slug}`} className="block text-center group">
                      {m.photo ? (
                        <img
                          src={m.photo}
                          alt={m.name}
                          loading="lazy"
                          decoding="async"
                          className="w-24 h-24 rounded-full object-cover mx-auto mb-3 border-2 border-brand-navy-light/20 group-hover:border-brand-red transition-colors"
                        />
                      ) : (
                        <div
                          className="w-24 h-24 rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-3 border-2 border-transparent group-hover:border-brand-red transition-colors"
                          style={{ backgroundColor: "var(--color-brand-navy)" }}
                        >
                          {mInitials}
                        </div>
                      )}
                      <h3 className="font-bold text-brand-navy text-sm group-hover:text-brand-red transition-colors">{m.name}</h3>
                      <p className="text-xs text-text-muted mt-1">{m.role}</p>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
