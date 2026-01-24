"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const tradeTypes = [
  "General Contractor",
  "Electrical",
  "Plumbing",
  "HVAC",
  "Roofing",
  "Flooring",
  "Painting",
  "Landscaping",
  "Masonry",
  "Drywall",
  "Insulation",
  "Windows & Doors",
  "Cabinetry",
  "Concrete",
  "Excavation",
  "Other",
];

export function VendorForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch("/api/vendor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          hasInsurance: formData.get("hasInsurance") === "on",
        }),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || "Something went wrong");
      }

      setIsSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <div className="rounded-2xl border border-border bg-white p-8 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="mt-4 text-xl font-semibold">Application Submitted!</h3>
        <p className="mt-2 text-muted">
          Thank you for your interest in partnering with Kiefer Built. We'll review your application and reach out if there's a fit.
        </p>
        <Button
          onClick={() => setIsSuccess(false)}
          variant="outline"
          className="mt-6"
        >
          Submit Another Application
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-white p-8"
    >
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid gap-6 md:grid-cols-2">
        {/* Company Name */}
        <div className="md:col-span-2">
          <label htmlFor="company" className="block text-sm font-medium">
            Company Name <span className="text-brand">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            className="mt-1 block w-full rounded-lg border border-border bg-paper px-4 py-3 text-ink placeholder:text-muted focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            placeholder="ABC Construction LLC"
          />
        </div>

        {/* Contact Name */}
        <div>
          <label htmlFor="contactName" className="block text-sm font-medium">
            Contact Name <span className="text-brand">*</span>
          </label>
          <input
            type="text"
            id="contactName"
            name="contactName"
            required
            className="mt-1 block w-full rounded-lg border border-border bg-paper px-4 py-3 text-ink placeholder:text-muted focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            placeholder="John Smith"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email <span className="text-brand">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full rounded-lg border border-border bg-paper px-4 py-3 text-ink placeholder:text-muted focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            placeholder="contact@abcconstruction.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium">
            Phone <span className="text-brand">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="mt-1 block w-full rounded-lg border border-border bg-paper px-4 py-3 text-ink placeholder:text-muted focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            placeholder="(555) 123-4567"
          />
        </div>

        {/* Trade */}
        <div>
          <label htmlFor="trade" className="block text-sm font-medium">
            Trade / Specialty <span className="text-brand">*</span>
          </label>
          <select
            id="trade"
            name="trade"
            required
            className="mt-1 block w-full rounded-lg border border-border bg-paper px-4 py-3 text-ink focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
          >
            <option value="">Select a trade</option>
            {tradeTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Insurance */}
        <div className="md:col-span-2">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="hasInsurance"
              className="h-5 w-5 rounded border-border text-brand focus:ring-brand"
            />
            <span className="text-sm">
              I confirm that my company carries general liability insurance
            </span>
          </label>
        </div>

        {/* Message */}
        <div className="md:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium">
            Additional Information
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="mt-1 block w-full rounded-lg border border-border bg-paper px-4 py-3 text-ink placeholder:text-muted focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand resize-none"
            placeholder="Tell us about your company, experience, and why you'd like to work with Kiefer Built..."
          />
        </div>
      </div>

      {error && (
        <div className="mt-4 rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="mt-6 w-full"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Submit Application
          </>
        )}
      </Button>
    </form>
  );
}
