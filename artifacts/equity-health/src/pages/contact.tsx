import { useState } from "react";
import { useFaqs, useSubmitContact } from "@/hooks/use-api";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const { data: faqs = [] } = useFaqs();
  const submitContact = useSubmitContact();

  const [form, setForm] = useState({ fullName: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitContact.mutate(form, {
      onSuccess: () => setForm({ fullName: "", email: "", phone: "", message: "" }),
    });
  };

  return (
    <div className="min-h-[100dvh] w-full bg-bg-main">

      {/* Header */}
      <section className="bg-brand-navy text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How can we help you?</h1>
          <p className="text-lg text-text-muted">
            Whether you're looking to enroll, make a claim, or have questions about your coverage, our team is here to assist.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

            {/* Contact Form & Info */}
            <div>
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-brand-navy mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-bg-surface p-3 rounded-full shrink-0">
                      <MapPin className="w-6 h-6 text-brand-red" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy">Head Office</h4>
                      <p className="text-text-muted">Accra, Ghana</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-bg-surface p-3 rounded-full shrink-0">
                      <Phone className="w-6 h-6 text-brand-red" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy">Phone Support</h4>
                      <p className="text-text-muted">0501515122/4<br/>+233 501353135</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-bg-surface p-3 rounded-full shrink-0">
                      <Mail className="w-6 h-6 text-brand-red" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy">Email</h4>
                      <p className="text-text-muted">info@equityhealthinsurance.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-bg-surface p-6 md:p-8 rounded-xl border border-brand-navy-light/10 shadow-sm">
                <h3 className="text-xl font-bold text-brand-navy mb-6">Send a Message</h3>

                {submitContact.isSuccess ? (
                  <div className="text-center py-8">
                    <CheckCircle2 className="w-12 h-12 text-whatsapp-green mx-auto mb-4" />
                    <h4 className="text-lg font-bold text-brand-navy mb-2">Message Sent!</h4>
                    <p className="text-text-muted">We'll get back to you as soon as possible.</p>
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-brand-navy">Full Name</label>
                        <Input id="name" placeholder="John Doe" className="bg-white border-brand-navy-light/20" required value={form.fullName} onChange={(e) => setForm(f => ({ ...f, fullName: e.target.value }))} />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-brand-navy">Phone Number</label>
                        <Input id="phone" placeholder="+233 24..." className="bg-white border-brand-navy-light/20" value={form.phone} onChange={(e) => setForm(f => ({ ...f, phone: e.target.value }))} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-brand-navy">Email Address</label>
                      <Input id="email" type="email" placeholder="john@example.com" className="bg-white border-brand-navy-light/20" required value={form.email} onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))} />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-brand-navy">Message</label>
                      <Textarea id="message" placeholder="How can we help you?" className="min-h-[120px] bg-white border-brand-navy-light/20" required value={form.message} onChange={(e) => setForm(f => ({ ...f, message: e.target.value }))} />
                    </div>
                    <Button type="submit" disabled={submitContact.isPending} className="w-full bg-brand-red hover:bg-brand-red/90 text-white font-semibold h-12 text-base" data-testid="button-submit-contact">
                      {submitContact.isPending ? "Sending..." : "Send Message"}
                    </Button>
                    {submitContact.isError && (
                      <p className="text-sm text-red-500 text-center">Something went wrong. Please try again.</p>
                    )}
                  </form>
                )}
              </div>
            </div>

            {/* FAQs */}
            <div>
              <h2 className="text-2xl font-bold text-brand-navy mb-8">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq) => (
                  <AccordionItem key={faq.id} value={`item-${faq.id}`} className="bg-bg-surface border border-brand-navy-light/10 rounded-lg px-4 shadow-sm data-[state=open]:bg-white transition-colors">
                    <AccordionTrigger className="text-left font-semibold text-brand-navy hover:text-brand-red hover:no-underline py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-text-muted leading-relaxed pb-4 pt-0">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
