export interface Plan {
  slug: string;
  name: string;
  category: "Corporate" | "Ebusua" | "Retail" | "Daakye Apomuden" | "ABS" | "NHIS Top-Up" | "Micro";
  tagline: string;
  monthlyPremium: number;
  features: string[];
}

export interface Provider {
  id: string;
  name: string;
  category: "Hospital" | "Pharmacy" | "Dental";
  location: string;
  address: string;
  phone: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
