import { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { ContactForm } from "@/components/forms/contact-form";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Kiefer Built Contracting. Schedule a consultation for your custom home, renovation, or commercial construction project in Northern Colorado.",
};

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: MapPin,
    label: "Address",
    value: `${siteConfig.contact.address}\n${siteConfig.contact.city}, ${siteConfig.contact.state} ${siteConfig.contact.zip}`,
    href: `https://maps.google.com/?q=${encodeURIComponent(
      `${siteConfig.contact.address}, ${siteConfig.contact.city}, ${siteConfig.contact.state} ${siteConfig.contact.zip}`
    )}`,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon-Fri: 8am - 5pm\nSat-Sun: By Appointment",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Get In Touch"
        description="Ready to start your project? We'd love to hear from you. Reach out today to schedule a consultation."
      />

      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <h2 className="text-2xl font-bold">Send Us a Message</h2>
                <p className="mt-2 text-muted">
                  Fill out the form below and we'll get back to you within 1-2
                  business days.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={0.2}>
                <div className="rounded-2xl border border-border bg-paper p-8">
                  <h3 className="text-xl font-semibold">Contact Information</h3>
                  <div className="mt-6 space-y-6">
                    {contactInfo.map((item) => (
                      <div key={item.label} className="flex gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              target={
                                item.label === "Address" ? "_blank" : undefined
                              }
                              rel={
                                item.label === "Address"
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                              className="mt-1 block whitespace-pre-line text-ink hover:text-brand"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="mt-1 whitespace-pre-line text-ink">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Map Placeholder */}
                  <div className="mt-8 aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-ink/5 to-ink/10">
                    <div className="flex h-full items-center justify-center">
                      <div className="text-center">
                        <MapPin className="mx-auto h-8 w-8 text-brand/30" />
                        <p className="mt-2 text-sm text-muted">
                          TODO: Embed Google Map
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
