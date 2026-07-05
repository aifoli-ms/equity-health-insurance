export interface WellnessTip {
  slug: string;
  title: string;
  summary: string;
  image: string;
  category: string;
  date: string;
}

export const wellnessTips: WellnessTip[] = [
  {
    slug: "preventive-care",
    title: "Make preventive care part of your lifestyle",
    summary: "Regular check-ups can help detect concerns early and support better outcomes.",
    image: "/wellnesstips/preventive-care.jpg",
    category: "Preventive Care",
    date: "2026-07-05",
  },
  {
    slug: "daily-habits",
    title: "Good health starts with simple daily habits",
    summary: "Drink enough water, protect your skin outdoors, and listen to your body.",
    image: "/wellnesstips/daily-habits.jpg",
    category: "Healthy Habits",
    date: "2026-07-05",
  },
  {
    slug: "mental-wellbeing",
    title: "Your mental wellbeing matters",
    summary: "Take time to pause, breathe, rest, and speak to someone you trust.",
    image: "/wellnesstips/mental-wellbeing.jpg",
    category: "Mental Health",
    date: "2026-07-05",
  },
  {
    slug: "healthy-eating",
    title: "Healthy eating does not have to be complicated",
    summary: "Add fruits and vegetables, reduce excess sugar and salt, and choose balanced portions.",
    image: "/wellnesstips/healthy-eating.jpg",
    category: "Nutrition",
    date: "2026-07-05",
  },
];
