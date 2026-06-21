import { useState } from "react";
import { useProviders } from "@/hooks/use-api";
import { Search, MapPin, Phone, Building, ChevronLeft, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Providers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [page, setPage] = useState(1);
  const { data } = useProviders(searchTerm, activeCategory, page);

  const providers = data?.data ?? [];
  const totalPages = data?.totalPages ?? 1;
  const total = data?.total ?? 0;

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setPage(1);
  };

  const handleCategory = (cat: string) => {
    setActiveCategory(cat);
    setPage(1);
  };

  return (
    <div className="min-h-[100dvh] w-full bg-bg-surface py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">

        <div className="max-w-3xl mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-brand-navy mb-4">Healthcare Service Providers</h1>
          <p className="text-lg text-text-muted">
            Find hospitals, clinics, and pharmacies in our nationwide network.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-brand-navy-light/10 mb-8 space-y-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
            <Input
              type="text"
              placeholder="Search by facility name or city..."
              className="pl-10 h-12 text-base border-brand-navy-light/20 focus-visible:ring-brand-red"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              data-testid="input-provider-search"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {["All", "Hospital", "Pharmacy", "Dental", "Optical", "Laboratory"].map(cat => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                onClick={() => handleCategory(cat)}
                className={activeCategory === cat ? "bg-brand-navy text-white hover:bg-brand-navy-light" : "text-brand-navy hover:text-brand-red"}
                data-testid={`filter-${cat.toLowerCase()}`}
              >
                {cat}
              </Button>
            ))}
            {total > 0 && (
              <span className="ml-auto text-sm text-text-muted">{total} providers found</span>
            )}
          </div>
        </div>

        {providers.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl border border-brand-navy-light/10 shadow-sm">
            <Building className="w-12 h-12 text-text-muted mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-bold text-brand-navy mb-2">No providers found</h3>
            <p className="text-text-muted">No providers match your search criteria. Try adjusting your filters.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {providers.map(provider => (
                <div key={provider.id} className="bg-white p-6 rounded-xl border border-brand-navy-light/10 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-brand-navy pr-4">{provider.name}</h3>
                    <span className="text-xs font-semibold px-2 py-1 bg-brand-red-light text-brand-red rounded-md shrink-0">
                      {provider.category}
                    </span>
                  </div>
                  <div className="space-y-3 text-sm text-text-muted">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-brand-navy-light" />
                      <span>{provider.address}, <span className="font-semibold">{provider.location}</span></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 shrink-0 text-brand-navy-light" />
                      <span>{provider.phone}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-4 mt-10">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPage(p => p - 1)}
                  disabled={page <= 1}
                  className="text-brand-navy"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" /> Prev
                </Button>

                <span className="text-sm text-text-muted">
                  Page <span className="font-semibold text-brand-navy">{page}</span> of <span className="font-semibold text-brand-navy">{totalPages}</span>
                </span>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPage(p => p + 1)}
                  disabled={page >= totalPages}
                  className="text-brand-navy"
                >
                  Next <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            )}
          </>
        )}

      </div>
    </div>
  );
}
