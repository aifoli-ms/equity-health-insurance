export interface Plan {
  slug: string;
  name: string;
  category: "Corporate" | "Ebusua" | "Retail" | "Daakye Apomuden" | "ABS" | "NHIS Top-Up" | "Micro";
  tagline: string;
  monthlyPremium: number;
  targetAudience: string;
  popular?: boolean;
  features: string[];
}

export interface Provider {
  id: number;
  name: string;
  category: string;
  location: string;
  address: string;
  phone: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
