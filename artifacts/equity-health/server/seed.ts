import { db, pool } from "@workspace/db";
import { plansTable, providersTable, faqsTable } from "@workspace/db/schema";

async function seed() {
  console.log("Seeding database...");

  // Clear existing data
  await db.delete(faqsTable);
  await db.delete(providersTable);
  await db.delete(plansTable);

  // Seed plans
  await db.insert(plansTable).values([
    {
      slug: "corporate",
      name: "Corporate Health Plans",
      category: "Corporate",
      tagline: "Comprehensive medical cover for employees and their dependants, flexible and tailored to your workforce",
      monthlyPremium: 850,
      targetAudience: "For businesses & organizations",
      popular: false,
      sortOrder: 1,
      features: [
        "Medical consultations",
        "Laboratory investigations",
        "Medicines and consumables",
        "Infusions (in-hospital use only)",
        "Admissions",
        "Emergency benefits",
        "Maternity benefits",
        "Newborn benefits",
        "Surgery benefits",
        "Dental benefits",
        "Optical / eye care benefits",
        "Rehabilitation benefits",
        "Herbal & alternative medicine",
        "HIV/AIDS management",
      ],
    },
    {
      slug: "ebusua",
      name: "Ebusua Plan",
      category: "Ebusua",
      tagline: "Specifically designed to meet the needs of individuals and families",
      monthlyPremium: 420,
      targetAudience: "For families & individuals",
      sortOrder: 2,
      features: [
        "General consultations",
        "Specialist care",
        "Laboratory tests",
        "Hospitalization",
        "Surgeries",
        "Emergency services",
        "Coverage for family members",
        "Prescription drugs",
      ],
    },
    {
      slug: "daakye-apomuden",
      name: "Daakye Apomuden Plan",
      category: "Daakye Apomuden",
      tagline: "Short-term and lifelong health benefits, providing security and peace of mind",
      monthlyPremium: 350,
      targetAudience: "For long-term security",
      sortOrder: 3,
      features: [
        "Short-term health benefits",
        "Lifelong health coverage",
        "Inpatient & outpatient care",
        "Specialist consultations",
        "Prescription medication",
        "Emergency services",
        "Annual health screening",
      ],
    },
    {
      slug: "retail",
      name: "Retail Health Plans",
      category: "Retail",
      tagline: "Affordable, flexible health insurance for individuals and families",
      monthlyPremium: 180,
      targetAudience: "For individuals & families",
      sortOrder: 4,
      features: [
        "Outpatient consultations",
        "Diagnostic tests",
        "Emergency care",
        "Prescription medication",
        "Flexible plan options",
        "Annual health check",
      ],
    },
    {
      slug: "abs",
      name: "Ayaresabea Banbo Sika (ABS) Plan",
      category: "ABS",
      tagline: "A simple and affordable health plan with three levels of cover",
      monthlyPremium: 120,
      targetAudience: "For budget-conscious individuals",
      sortOrder: 5,
      features: [
        "Three levels of cover",
        "Basic outpatient care",
        "Hospitalization",
        "Emergency services",
        "Prescription medication",
        "Simple enrollment process",
      ],
    },
    {
      slug: "nhis-top-up",
      name: "NHIS Top-Up Plan",
      category: "NHIS Top-Up",
      tagline: "Extra healthcare benefits on top of your existing NHIS cover",
      monthlyPremium: 95,
      targetAudience: "For NHIS cardholders",
      sortOrder: 6,
      features: [
        "Supplements NHIS coverage",
        "Extended outpatient benefits",
        "Additional hospitalization cover",
        "Specialist consultations",
        "Prescription medication top-up",
        "Emergency services",
      ],
    },
    {
      slug: "micro",
      name: "Micro Products",
      category: "Micro",
      tagline: "Low-cost health insurance plans designed for the general public, with special options for C&AGD members",
      monthlyPremium: 80,
      targetAudience: "For the general public",
      sortOrder: 7,
      features: [
        "Primary care",
        "Doctor consultations",
        "Lab tests (primary care only)",
        "Generic medications",
        "Telemedicine consultations",
        "Optical care & aids (up to GHS 300 — 1-year waiting period)",
        "Dental care & procedures (up to GHS 300 — 1-year waiting period)",
        "Surgery (up to GHS 1,500 — 2-year waiting period)",
        "Maternity cover (up to GHS 2,000 — 2-year waiting period)",
        "Outpatient up to GHS 750/month",
        "Inpatient up to GHS 1,300/month",
      ],
    },
  ]);

  // Seed providers
  await db.insert(providersTable).values([
    { name: "Korle Bu Teaching Hospital", category: "Hospital", location: "Accra", address: "Guggisberg Avenue, Korle Bu, Accra", phone: "030 266 5401" },
    { name: "Komfo Anokye Teaching Hospital", category: "Hospital", location: "Kumasi", address: "Bantama, Kumasi", phone: "032 202 2301" },
    { name: "Nyaho Medical Centre", category: "Hospital", location: "Accra", address: "35 Airport Bypass Rd, Accra", phone: "030 277 5341" },
    { name: "Tema General Hospital", category: "Hospital", location: "Tema", address: "Hospital Road, Tema", phone: "030 320 2695" },
    { name: "Ernest Chemists Limited", category: "Pharmacy", location: "Accra", address: "Ring Road Central, Accra", phone: "030 222 8999" },
    { name: "Bedita Pharmacy", category: "Pharmacy", location: "Kumasi", address: "Harper Road, Adum, Kumasi", phone: "032 202 4321" },
    { name: "East Cantonments Pharmacy", category: "Pharmacy", location: "Accra", address: "Cantonments, Accra", phone: "030 277 5163" },
    { name: "Kama Health Services", category: "Pharmacy", location: "Tema", address: "Community 1, Tema", phone: "030 320 4567" },
    { name: "Platinum Orthodontic & Dental Clinic", category: "Dental", location: "Accra", address: "14 Senchi St, Airport Residential Area, Accra", phone: "030 276 8282" },
    { name: "Beaver Clinic Limited", category: "Dental", location: "Accra", address: "Airport Residential Area, Accra", phone: "030 277 1785" },
    { name: "Anidaso Dental Clinic", category: "Dental", location: "Kumasi", address: "Ahodwo, Kumasi", phone: "032 203 1122" },
    { name: "Bethel Dental Clinic", category: "Dental", location: "Tema", address: "Community 11, Tema", phone: "030 320 2211" },
  ]);

  // Seed FAQs
  await db.insert(faqsTable).values([
    { question: "What areas do you cover?", answer: "Our services are available across Ghana, with a strong provider network in major cities like Accra, Kumasi, Takoradi, and Tamale. We also offer international coverage under selected packages.", sortOrder: 1 },
    { question: "Can individuals apply for health insurance?", answer: "Yes. We provide health insurance for individuals, families, students, corporates, and tourists.", sortOrder: 2 },
    { question: "How do I purchase a plan?", answer: "You can contact our Accra office directly, request a quote on our website, or call to speak with one of our sales representatives for guidance.", sortOrder: 3 },
    { question: "Do you cover pre-existing conditions?", answer: "Coverage for pre-existing conditions depends on the selected package and terms. Our team will explain all inclusions and exclusions before enrollment.", sortOrder: 4 },
    { question: "What is included in the Corporate Package?", answer: "It includes outpatient consultations, specialist care, hospitalization, laboratory services, surgeries, dental and optical care, and emergency services for employees.", sortOrder: 5 },
    { question: "Can I upgrade my plan?", answer: "Yes. Clients can upgrade their plans at renewal or mid-term subject to policy terms and conditions.", sortOrder: 6 },
    { question: "How fast are claims processed?", answer: "Most claims are processed within a few business days, thanks to our efficient TPA system.", sortOrder: 7 },
    { question: "How do I contact Equity Health Insurance Ghana?", answer: "Call us, send an email, or visit our head office in Accra. Our friendly support team is always ready to assist you. Call now: +233 501353135.", sortOrder: 8 },
  ]);

  console.log("Seeding complete.");
  await pool.end();
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
