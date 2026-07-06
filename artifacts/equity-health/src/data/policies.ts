export interface Policy {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string; // newline-separated paragraphs
}

export const policies: Policy[] = [
  {
    slug: "corporate",
    name: "Corporate Health Policies",
    category: "Corporate",
    tagline: "Tailored medical cover for employees and their dependants",
    description:
      "Our corporate health policies provide tailored medical cover for employees and their dependants, ensuring access to quality healthcare, financial protection, and peace of mind.\n\nDesigned to support healthier and more engaged teams, our flexible benefits, efficient claims management, and dedicated client support help organisations protect their most valuable asset—their people.\n\nPartner with us today to build a healthier, more confident workforce.",
  },
  {
    slug: "family",
    name: "Family Health Policies",
    category: "Family",
    tagline: "Dependable medical cover for the people closest to you",
    description:
      "Our family health policies are created to help you care for the people closest to you, offering dependable medical cover for everyday health needs and unexpected medical situations.\n\nWith flexible plan options, responsive support, and simple access to care, families can enjoy greater reassurance knowing their health and wellbeing are protected.\n\nGive your family the comfort of quality healthcare—choose a plan that keeps them protected.",
  },
  {
    slug: "individual",
    name: "Individual Health Policies",
    category: "Individual",
    tagline: "Medical cover that fits your lifestyle and personal budget",
    description:
      "Our individual health policies give you the freedom to choose medical cover that fits your lifestyle, health priorities, and personal budget.\n\nWhether you are starting out, self-employed, or simply seeking dependable protection, our plans make it easier to access care when you need it without carrying the full financial burden alone.\n\nTake charge of your wellbeing today with a health plan designed around you.",
  },
  {
    slug: "student",
    name: "Student Health Policies",
    category: "Student",
    tagline: "Affordable and dependable medical cover for learners",
    description:
      "Our student health policies are designed to support learners with affordable and dependable medical cover throughout their academic journey.\n\nFrom routine care to unexpected health concerns, our plans help students stay focused on their studies while enjoying easier access to healthcare and the reassurance of timely support.\n\nStay focused on your studies—choose a student health plan that keeps you covered.",
  },
  {
    slug: "retiree",
    name: "Retiree Health Policies",
    category: "Retiree",
    tagline: "Continued medical support after active working life",
    description:
      "Our retiree health policies are thoughtfully designed to provide continued medical support after active working life, helping retirees access care with dignity, comfort, and confidence.\n\nWith benefits that support changing health needs, our plans offer reassurance for routine care, ongoing treatment, and unexpected medical expenses during retirement.\n\nEnjoy retirement with greater peace of mind—choose health cover that supports your next chapter.",
  },
];

export function findPolicyBySlug(slug: string): Policy | undefined {
  return policies.find((p) => p.slug === slug);
}
