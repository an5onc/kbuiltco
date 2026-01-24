import { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name}. Learn how we collect, use, and protect your personal information.`,
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        subtitle="Legal"
        description={`Last updated: ${new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}`}
      />

      <section className="section-padding bg-white">
        <div className="container-site">
          <ScrollReveal>
            <div className="prose prose-lg mx-auto max-w-3xl">
              {/* TODO: Replace with actual privacy policy content reviewed by legal */}
              <p className="lead">
                {siteConfig.name} ("we," "our," or "us") is committed to
                protecting your privacy. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                visit our website or use our services.
              </p>

              <h2>Information We Collect</h2>
              <p>
                We may collect personal information that you voluntarily provide
                to us when you:
              </p>
              <ul>
                <li>Fill out a contact form on our website</li>
                <li>Request a consultation or estimate</li>
                <li>Subscribe to our newsletter</li>
                <li>Apply for employment or vendor partnership</li>
              </ul>
              <p>
                This information may include your name, email address, phone
                number, mailing address, and project details.
              </p>

              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Respond to your inquiries and requests</li>
                <li>Provide and improve our services</li>
                <li>Send you updates about your project</li>
                <li>
                  Send marketing communications (with your consent, where
                  required)
                </li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2>Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to
                third parties. We may share your information with:
              </p>
              <ul>
                <li>Service providers who assist in our operations</li>
                <li>
                  Professional advisors (lawyers, accountants) as needed
                </li>
                <li>
                  Government authorities when required by law
                </li>
              </ul>

              <h2>Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction.
              </p>

              <h2>Cookies and Tracking</h2>
              <p>
                Our website may use cookies and similar tracking technologies to
                enhance your browsing experience and analyze website traffic. You
                can control cookie settings through your browser preferences.
              </p>

              <h2>Your Rights</h2>
              <p>Depending on your location, you may have the right to:</p>
              <ul>
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications</li>
              </ul>

              <h2>Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 18.
                We do not knowingly collect personal information from children.
              </p>

              <h2>Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any material changes by posting the new policy on
                this page and updating the "Last updated" date.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or our privacy
                practices, please contact us at:
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
