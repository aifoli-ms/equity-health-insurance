import { useQuery, useMutation } from "@tanstack/react-query";

interface Plan {
  id: number;
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string | null;
  monthlyPremium: number;
  targetAudience: string;
  popular: boolean | null;
  features: string[];
  sortOrder: number;
}

interface Provider {
  id: number;
  name: string;
  category: string;
  location: string;
  address: string;
  phone: string;
}

interface FAQ {
  id: number;
  question: string;
  answer: string;
  sortOrder: number;
}

interface ContactInput {
  fullName: string;
  email: string;
  phone?: string;
  message: string;
}

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}`);
  return res.json();
}

export function usePlans() {
  return useQuery<Plan[]>({
    queryKey: ["plans"],
    queryFn: () => fetchJson("/api/plans"),
  });
}

export function usePlan(slug: string) {
  return useQuery<Plan>({
    queryKey: ["plans", slug],
    queryFn: () => fetchJson(`/api/plans/${slug}`),
    enabled: !!slug,
  });
}

interface PaginatedProviders {
  data: Provider[];
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}

export function useProviders(search?: string, category?: string, page = 1) {
  const params = new URLSearchParams();
  if (search) params.set("search", search);
  if (category && category !== "All") params.set("category", category);
  params.set("page", String(page));
  const qs = params.toString();

  return useQuery<PaginatedProviders>({
    queryKey: ["providers", search, category, page],
    queryFn: () => fetchJson(`/api/providers?${qs}`),
    placeholderData: (prev) => prev,
  });
}

export function useFaqs() {
  return useQuery<FAQ[]>({
    queryKey: ["faqs"],
    queryFn: () => fetchJson("/api/faqs"),
  });
}

export function useSubmitContact() {
  return useMutation({
    mutationFn: async (data: ContactInput) => {
      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Failed to submit");
      }
      return res.json();
    },
  });
}
