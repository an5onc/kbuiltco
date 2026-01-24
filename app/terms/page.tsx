import { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${siteConfig.name}. Read our terms and conditions for using our website and services.`,
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        title="Terms of Service"
        subtitle="Legal"
        description={`Last updated: ${new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}`}
      />

      <section className="section-padding bg-white">
        <div className="container-site">
          <ScrollReveal>
            <div className="prose prose-lg mx-auto max-w-3xl">
              {/* TODO: Replace with actual terms of service content reviewed by legal */}
              <p className="lead">
                Welcome to {siteConfig.name}. By accessing our website or using
                our services, you agree to be bound by these Terms of Service.
                Please read them carefully.
              </p>

              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using our website and services, you acknowledge
                that you have read, understood, and agree to be bound by these
                Terms of Service and our Privacy Policy.
              </p>

              <h2>2. Services Description</h2>
              <p>
                {siteConfig.name} provides custom home building, renovation, and
                commercial construction services in Northern Colorado. Our
                website provides information about our services and allows
                visitors to contact us regarding potential projects.
              </p>

              <h2>3. Use of Website</h2>
              <p>You agree to use our website only for lawful purposes and in a way that does not:</p>
              <ul>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Interfere with or disrupt the website's functionality</li>
                <li>Attempt to gain unauthorized access to our systems</li>
              </ul>

              <h2>4. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos,
                images, and software, is the property of {siteConfig.name} or
                its content suppliers and is protected by intellectual property
                laws. You may not reproduce, distribute, or create derivative
                works without our express written permission.
              </p>

              <h2>5. User Submissions</h2>
              <p>
                When you submit information through our contact forms, you grant
                us the right to use that information to respond to your inquiry
                and provide our services. You are responsible for ensuring the
                accuracy of any information you provide.
              </p>

              <h2>6. Disclaimer of Warranties</h2>
              <p>
                Our website is provided "as is" without warranties of any kind,
                either express or implied. We do not warrant that the website
                will be uninterrupted, error-free, or free of viruses or other
                harmful components.
              </p>

              <h2>7. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, {siteConfig.name} shall
                not be liable for any indirect, incidental, special,
                consequential, or punitive damages arising from your use of our
                website or services.
              </p>

              <h2>8. Construction Services</h2>
              <p>
                Any construction services provided by {siteConfig.name} are
                subject to separate written contracts and agreements. The terms
                of those agreements supersede these Terms of Service regarding
                the provision of construction services.
              </p>

              <h2>9. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are
                not responsible for the content or practices of these websites
                and encourage you to review their terms and privacy policies.
              </p>

              <h2>10. Modifications</h2>
              <p>
                We reserve the right to modify these Terms of Service at any
                time. Changes will be effective immediately upon posting to the
                website. Your continued use of the website after any
                modifications constitutes acceptance of the updated terms.
              </p>

              <h2>11. Governing Law</h2>
              <p>
                These Terms of Service shall be governed by and construed in
                accordance with the laws of the State of Colorado, without
                regard to its conflict of law provisions.
              </p>

              <h2>12. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please
                contact us at:
              </p>
              <p>
                <strong>{siteConfig.name}</strong>
                <br />
                {siteConfig.contact.address}
                <br />
                {siteConfig.contact.city}, {siteConfig.contact.state}{" "}
                {siteConfig.contact.zip}
                <br />
                Email:{" "}
                <a href={`mailto:${siteConfig.contact.email}`}>
                  {siteConfig.contact.email}
                </a>
                <br />
                Phone:{" "}
                <a href={`tel:${siteConfig.contact.phone}`}>
                  {siteConfig.contact.phone}
                </a>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
