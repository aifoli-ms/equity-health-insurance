export interface TeamMember {
  name: string;
  role: string;
  slug: string;
  photo?: string;
  group: "board" | "management";
  bio: string;
  qualifications?: string[];
  expertise?: string[];
}

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[().,]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export const board: TeamMember[] = [
  {
    name: "Brig. Gen. (Rtd.) Dr Joseph Mensah Ayettey",
    role: "Board Chairman",
    slug: toSlug("Joseph Mensah Ayettey"),
    photo: "https://www.equityhealthinsurance.com/wp-content/uploads/2023/12/Brigadier-Joseph.jpg",
    group: "board",
    bio: "Brigadier General (Rtd.) Dr. Joseph Mensah Ayettey is a retired senior military officer and surgical specialist with a career spanning over four decades. At the early stage of his medical practice, he worked at the Korle-Bu Teaching Hospital and Effia-Nkwanta Government Hospital as a Medical Officer. He held numerous roles within the Ghana Armed Forces including Director General of Medical Services, Commanding Officer of the Military Hospital, and Senior Medical Officer. He also served in ECOWAS (GHANCON) and UN (UNIFIL) missions abroad between 1980 and 1993. He has attended extensive training and courses on health management and leadership both in Ghana and abroad, and currently serves as a director at Adenta Clinic in Accra. He brings to the Board a wealth of knowledge and experience in the field of medicine and leadership.",
    qualifications: ["Surgical Specialist", "Military Medical Leadership", "Health Management Training"],
    expertise: ["Strategic Leadership", "Healthcare Administration", "Military Medical Services", "Corporate Governance"],
  },
  {
    name: "Dr Elton Fredrick Afari",
    role: "Chief Executive Officer",
    slug: toSlug("Elton Fredrick Afari"),
    photo: "/images/ceo.jpeg",
    group: "board",
    bio: "Dr Elton Fredrick Afari is synonymous with innovation and excellence in the Ghanaian healthcare landscape. As CEO of Equity Health Insurance, he has spearheaded the company's remarkable growth and solidified its position as a leading provider of accessible and quality healthcare solutions. He began his career in media and telecommunications as a producer for Joy FM (Multimedia Group) and in customer service at Vodafone Ghana, before transitioning to health insurance as Head of Sales at Acacia Health Insurance and Director of Marketing and Strategy at Cosmopolitan Health Insurance, where he pioneered retail health insurance on the Vodafone Ghana GSM platform. His vision extends beyond traditional health insurance — he is driving strategic growth across the healthcare value chain through companies in pharmaceuticals (Acheampomaah Pharmaceuticals & Medpure Pharmaceutical), clinics (Medcare Plus Group of Clinics & Mini Clinic), facility management (UJS Facility Management), and pensions (Shield Pension Trust). Recent accolades include CEO of the Year at the Ghana CEOs Excellence Awards 2025, CEO of the Year and Best Growing Company at the Ghana Insurance Awards 2024, and World Leader Business Person at The BIZZ Hybrid Awards 2023. He has been inducted into the Corporate Ghana Hall of Fame.",
    qualifications: [
      "DBA in Marketing — NIBS / IPAG Business School, France",
      "Strategy & Marketing — Harvard Business School",
      "MBA in Marketing — University of Ghana Business School",
      "BSc (Hons) Marketing — Central University College",
    ],
    expertise: ["Executive Leadership", "Health Insurance", "Business Development", "Strategic Planning", "Marketing"],
  },
  {
    name: "Mr Nathan Kwabena Anokye Adisi",
    role: "Independent Director",
    slug: toSlug("Nathan Kwabena Adisi"),
    photo: "https://www.equityhealthinsurance.com/wp-content/uploads/2025/07/Nathan-Kwabena-Adisi.jpg",
    group: "board",
    bio: "Mr Nathan Kwabena Anokye Adisi is a distinguished Ghanaian radio and television personality and entrepreneur, currently serving as the CEO of the EIB Network Group and Empire Entertainment. He was the first African to host the iconic BBC Radio show \"Top of the Pops\" and hosted Joy FM's Drive Time Show for over a decade, solidifying his status as a key figure in Ghana's media landscape. His experience in establishing the EIB Network Group and overseeing the acquisition of multiple media outlets demonstrates his strategic acumen and entrepreneurial spirit. His extensive accolades, including the RTP Personality of the Decade and various other awards, reflect his commitment to excellence and community impact, making him a valuable asset to EHI's board as it strives to enhance its outreach and services in the health sector.",
    qualifications: [
      "MBA in Global Business & Sustainability — Catholic University of the Sacred Heart of Milan",
      "BSc in Business Administration — Central University",
      "Diploma in Public Administration — University of Ghana Business School",
    ],
    expertise: ["Media & Broadcasting", "Entrepreneurship", "Business Strategy", "Public Relations", "Community Engagement"],
  },
  {
    name: "Mr Michael Tetteh-Voetagbe",
    role: "Director",
    slug: toSlug("Michael Tetteh-Voetagbe"),
    group: "board",
    bio: "",
  },
  {
    name: "Acheampomaah Opoku Afari, Esq.",
    role: "Director / Board Secretary",
    slug: toSlug("Acheampomaah Opoku Afari"),
    photo: "https://www.equityhealthinsurance.com/wp-content/uploads/2025/07/acheampomaa-2.jpg",
    group: "board",
    bio: "Mrs. Acheampomaah Opoku Afari is a seasoned legal professional and HR expert serving as Director and Board Secretary of Equity Health Insurance. After obtaining her LLB from GIMPA Law School and being called to the Ghana Bar, she gained extensive experience as a Private HR Consultant, recruiting high-end talent and developing training materials for various reputable firms. Her diverse legal expertise, combined with her HR background, positions her uniquely to excel as Board Secretary. Her in-depth knowledge of Labour Law, Compensation, and Corporate and Commercial Law enhances her ability to navigate complex legal frameworks and ensure compliance within the organisation. Her skills in litigation, contract negotiation, and drafting further support her role, enabling her to provide valuable insights and effective governance.",
    qualifications: [
      "LLB — GIMPA Law School (Called to the Ghana Bar)",
      "MBA in Human Resources — University of Ghana Business School",
      "BA in Political Science & Theatre Arts — University of Ghana",
    ],
    expertise: ["Corporate & Commercial Law", "Labour Law", "Litigation", "Contract Negotiation", "HR Consulting", "Board Governance"],
  },
  {
    name: "Professor Ernest Ofori Asamoah",
    role: "Independent Director",
    slug: toSlug("Ernest Ofori Asamoah"),
    photo: "https://www.equityhealthinsurance.com/wp-content/uploads/2023/12/Dr.-Ernest.jpg",
    group: "board",
    bio: "Professor Ernest Ofori Asamoah is a seasoned Management and Financial Consultant with over seventeen years of experience. Holding dual doctorate degrees in Business Administration (Strategic Management) and Diplomacy and International Relations, as well as multiple master's degrees, he brings a wealth of knowledge to the board. Having consulted extensively across various sectors including financial services, agribusiness, and renewable energy, he leverages his diverse expertise to enhance EHI's strategic initiatives. His experience with organisations such as KPMG and World Vision International, coupled with his roles as an adjunct lecturer and visiting professor, positions him to provide valuable insights into best practices and innovative solutions. His involvement in scholarly activities and professional organisations further enriches his contributions to shaping the company's future in the health insurance landscape.",
    qualifications: [
      "Doctorate in Business Administration (Strategic Management)",
      "Doctorate in Diplomacy & International Relations",
      "Multiple Master's Degrees",
    ],
    expertise: ["Management Consulting", "Financial Consulting", "Strategic Decision-Making", "Agribusiness", "Renewable Energy"],
  },
];

export const management: TeamMember[] = [
  {
    name: "Dr Joseph Wesley Ansah",
    role: "Chief Operations Officer",
    slug: toSlug("Joseph Wesley Ansah"),
    group: "management",
    bio: "Dr. Joseph Wesley Ansah is a Public Health Specialist and Registered Medical Practitioner with extensive experience in healthcare management and health insurance. He has held leadership roles as Medical Superintendent at Cosmopolitan Medical Centre and 3M&C Medical Centre, and has also served with the West African Rescue Association (WARA) in Ghana. As Chief Operations Officer at Equity Health Insurance, Dr. Ansah oversees operations, ensuring integrity-driven claims management and customer-focused service delivery. He also serves as Medical Director of Medcare Plus Clinic, a subsidiary of Equity Health Insurance. His career reflects a strong commitment to advancing healthcare standards and improving lives across Ghana.",
    qualifications: ["Public Health Specialist", "Registered Medical Practitioner"],
    expertise: ["Healthcare Management", "Health Insurance Operations", "Claims Management", "Medical Administration"],
  },
  {
    name: "Maureen Pentsil",
    role: "Chief Marketing and Customer Experience Officer",
    slug: toSlug("Maureen Pentsil"),
    photo: "/images/cmo.jpeg",
    group: "management",
    bio: "",
  },
  {
    name: "Mr Prosper Atsyor",
    role: "Finance Manager",
    slug: toSlug("Prosper Atsyor"),
    group: "management",
    bio: "Mr. Prosper Atsyor is an accomplished finance professional with over twelve years of experience in accounting, financial analysis, and management across banking, healthcare, and the insurance industry. At Equity Health Insurance, he provides strategic oversight of the company's financial operations, ensuring robust analysis, sound planning, and sustainable growth. His career journey has included roles such as Finance and Administrative Director, Branch Manager, Head of Internal Audit, and Accountant, reflecting his steady progression in leadership and technical expertise. Known for his integrity, innovation, and collaborative leadership style, Prosper is committed to excellence in financial management and continues to make a significant impact in advancing the organization's goals while mentoring and inspiring his team.",
    qualifications: [
      "Chartered Accountant — Institute of Chartered Accountants Ghana",
      "MPhil in Finance — University of Ghana Business School",
      "BSc in Accounting & Finance",
      "HND in Accountancy — Cape Coast Technical University",
    ],
    expertise: ["Financial Analysis", "Strategic Financial Planning", "Budget Management", "Financial Reporting", "Banking & Insurance Finance"],
  },
  {
    name: "Mr Eric N.K Addae",
    role: "Head of Risk",
    slug: toSlug("Eric NK Addae"),
    group: "management",
    bio: "Mr. Eric N.K. Addae is the Head of Risk at Equity Health Insurance, where he oversees all risk-related functions of the company. With over a decade of expertise spanning IT systems deployment, monitoring, and security, he ensures the stability and resilience of EHI's operations. Before joining EHI, he served as Director of Information Technology at Cosmopolitan Health Insurance for six years, leading key innovations such as Cosmo Care and Cosmo Vodafone Mobile Health. His career also includes leadership and technical roles at Bell Global Management Services, the National Youth Employment Programme, Update Systems Limited, and Orchid Soft Systems in India. Eric's vast technical expertise, leadership acumen, and risk management skills make him a key pillar in safeguarding EHI's systems, ensuring operational excellence and innovation.",
    qualifications: [
      "MSc in Information Technology — Sikkim Manipal University, India",
      "BSc in Computer Application — Bangalore University, India",
      "Professional Training: IT Audit, Oracle & SQL Database Administration, Java, Computer Networks, Information Security, ITIL Foundation, AWS Foundation",
    ],
    expertise: ["IT Risk Management", "IT Systems Deployment & Security", "Information Security", "Cloud & Database Administration", "Operational Resilience"],
  },
  {
    name: "Genevieve Aba Esaaba Otoo",
    role: "Claims Manager",
    slug: toSlug("Genevieve Aba Esaaba Otoo"),
    group: "management",
    bio: "Genevieve Aba Esaaba Otoo is the Head of Claims at Equity Health Insurance, where she leads with strategic oversight to ensure efficient claims processing and timely payments to healthcare providers. With extensive experience in Ghana's private health insurance sector, she previously held key roles at Cosmopolitan Health Insurance and Nationwide Medical Insurance, contributing to the successful management of stakeholder relations. Known for her assertive and proactive approach, Genevieve brings deep expertise and commitment to strengthening operational excellence and client service at Equity Health Insurance.",
    qualifications: [
      "Master's in Enterprise Risk Management",
      "Master's in International Relations & Diplomacy",
      "Professional Training: Marketing Research, Negotiation, Strategic Leadership, Client Success, Insurance Fraud Management",
    ],
    expertise: ["Claims Processing & Management", "Stakeholder Relations", "Enterprise Risk Management", "Insurance Fraud Prevention", "Client Service"],
  },
  {
    name: "Mr Isaac Kankam-Okyere",
    role: "Health Service Provider Manager",
    slug: toSlug("Isaac Kankam-Okyere"),
    group: "management",
    bio: "Mr. Isaac Kankam-Okyere is the Health Service Provider Manager at Equity Health Insurance, where he leads provider engagement and relationship management to ensure quality service delivery across the healthcare network. He previously served as Head of the Member Care and Case Management Unit at Apex Health Insurance, with earlier roles spanning client membership, health service management, and relations. Known for his strong communication and problem-solving skills, Isaac is committed to building sustainable provider partnerships, enhancing client satisfaction, and driving operational excellence in healthcare service delivery.",
    qualifications: [
      "BSc in Human Resource Management — Pentecost University College",
      "Professional Training: Leadership, Teamwork, Emotional Intelligence, Corporate Communications, Workplace Ethics",
    ],
    expertise: ["Provider Network Management", "Healthcare Partnerships", "Client Satisfaction", "Case Management", "Stakeholder Relations"],
  },
  {
    name: "Rudolf Kwami Akutu",
    role: "Head of Internal Audit",
    slug: toSlug("Rudolf Kwami Akutu"),
    group: "management",
    bio: "Rudolf Kwami Akutu serves as the Head of Internal Audit at Equity Health Insurance, where he provides strategic oversight on compliance, internal controls, and financial risk management. With over nine years of professional experience, he has built a strong track record in financial management across both public and private sectors. Before joining Equity, Rudolf worked as a Senior Accountant at the Ghana Health Service, overseeing budgetary controls, donor fund management, and financial reporting for key national health programs. He began his career at ETC Agro Ghana Limited and later advanced to leadership roles at DIMD Ghana Limited, where he championed operational efficiency and team development. His leadership at Equity has strengthened internal controls, minimized fraud, and enhanced regulatory compliance, ensuring that financial operations align with the company's long-term strategic goals.",
    qualifications: [
      "Chartered Accountant — Institute of Chartered Accountants, Ghana",
      "Bachelor of Commerce — University of Cape Coast",
      "MBA in Finance (in progress) — University of Cape Coast",
    ],
    expertise: ["Regulatory Compliance", "Fraud Detection & Prevention", "Internal Controls", "Budget Oversight", "Financial Risk Management", "Strategic Planning"],
  },
  {
    name: "Anthony Baiden Danyie",
    role: "Chief Information Technology Officer",
    slug: toSlug("Anthony Baiden Danyie"),
    photo: "/images/cto.jpeg",
    group: "management",
    bio: "Godfred Akoto is the Head of IT at Equity Health Insurance, where he leads the company's technological strategy and digital transformation agenda. He is responsible for ensuring the stability, security, and scalability of the organization's IT infrastructure, while driving innovation to enhance client services and internal operations. With a proven ability to simplify systems and implement cost-effective solutions, Godfred has successfully consolidated departmental IT platforms, reduced infrastructure expenses, and introduced digital products that improve client engagement and retention. He has also overseen the implementation of disaster recovery and business continuity frameworks to safeguard operational resilience. He continues to advance his expertise in IT governance, health tech systems, and cloud security, keeping Equity aligned with best practices and emerging technologies.",
    qualifications: [
      "BSc in Information Technology — Ghana Communication Technology University",
      "Certifications in Cloud Computing, Cybersecurity, and Product Management",
    ],
    expertise: ["IT Strategy & Governance", "Digital Transformation", "Cloud Computing & Security", "Disaster Recovery", "Health Tech Systems"],
  },
];

export const allMembers = [...board, ...management];

export function findMemberBySlug(slug: string): TeamMember | undefined {
  return allMembers.find((m) => m.slug === slug);
}
