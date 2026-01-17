"use client";

import Link from "next/link";

const Section = ({ title, children }) => (
  <section className="space-y-4">
    <h2 className="text-xl md:text-2xl font-semibold text-black">
      {title}
    </h2>
    <div className="space-y-4 text-base md:text-lg leading-relaxed text-black/80">
      {children}
    </div>
  </section>
);

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white text-black">
      <div className="mx-auto max-w-6xl md:px-8 px-2 py-10 md:px-12 lg:px-24 md:py-20">
        <header className="max-w-6xl space-y-4 font-medium pb-10 py-4">
          <h1 className="text-2xl md:text-4xl font-semibold leading-tight md:leading-normal">
            Privacy Policy – The Binge Town
          </h1>

          <p>
            At The Binge Town, accessible from{" "}
            <span className="font-medium">thebingetown.com</span>, one of our
            main priorities is the privacy of our visitors. This Privacy Policy
            document contains types of information that is collected and
            recorded by The Binge Town and how we use it.
          </p>

          <p>
            If you have additional questions or require more information about
            our Privacy Policy, do not hesitate to contact us at{" "}
            <a
              href="tel:8618976974"
              className="font-bold underline underline-offset-4 hover:no-underline"
            >
              8618976974
            </a>.
          </p>

          <p>
            This Privacy Policy applies only to our online activities and is
            valid for visitors to our website with regards to the information
            that they shared and/or collect in The Binge Town. This policy is
            not applicable to any information collected offline or via channels
            other than this website.
          </p>
        </header>
        <div className="space-y-12">

          <Section title="Consent">
            <p className="font-medium py-4">
              By using our website, you hereby consent to our Privacy Policy and
              agree to its terms.
            </p>
          </Section>

          <Section title="Information We Collect" className="mb-[12px]">
            <p className="font-medium py-1">
              The personal information that you are asked to provide, and the
              reasons why you are asked to provide it, will be made clear to you
              at the point we ask you to provide your personal information.
            </p>
            <p className="font-medium py-1">
              If you contact us directly, we may receive additional information
              about you such as your name, email address, phone number, the
              contents of the message and/or attachments you may send us, and
              any other information you may choose to provide.
            </p>
            <p className="font-medium py-1">
              When you register for an Account, we may ask for your contact
              information, including items such as name, company name, address,
              email address, and telephone number.
            </p>
          </Section>

          <Section title="How We Use Your Information" className="mb-[12px]">
            <p className="font-medium">We use the information we collect in various ways, including to:</p>
            <ul className="list-disc space-y-2 pl-6 md:pl-8 px-5 font-medium mb-4">
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>
                Communicate with you, either directly or through partners, for
                customer service, updates, marketing, and promotions
              </li>
              <li>Send you emails</li>
              <li>Find and prevent fraud</li>
            </ul>
          </Section>

          <Section title="Log Files" className="mb-[12px]">
            <p className="font-medium mb-4">
              The Binge Town follows a standard procedure of using log files.
              These files log visitors when they visit websites. The information
              collected includes IP addresses, browser type, ISP, date and time
              stamp, referring/exit pages, and possibly the number of clicks.
            </p>
            <p className="font-medium mb-4">
              These are not linked to any information that is personally
              identifiable and are used for analytics and site administration.
            </p>
          </Section>

          <Section title="Google DoubleClick DART Cookie" className="mb-[12px]">
            <p className="font-medium mb-4">
              Google is one of the third-party vendors on our site. It uses
              cookies known as DART cookies to serve ads based on user visits.
            </p>
            <p className="font-medium mb-4">
              Users may decline DART cookies by visiting Google’s Privacy Policy:
              <br />
              <Link
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                className="text-blue-600 hover:underline break-all font-medium mb-4"
              >
                https://policies.google.com/technologies/ads
              </Link>
            </p>
          </Section>

          <Section title="Our Advertising Partners" className="mb-[12px">
            <p className="font-medium mb-4">Some advertisers on our site may use cookies and web beacons.</p>
            <ul className="list-disc space-y-2 pl-6 md:pl-8 px-5 font-medium mb-4">
              <li>Google</li>
              <li>Meta</li>
            </ul>
          </Section>

          <Section title="Advertising Partners Privacy Policies" className="mb-[12px]">
            <p className="font-medium mb-4">
              Third-party ad servers use technologies like cookies, JavaScript,
              or Web Beacons to measure advertising effectiveness and personalize
              content.
            </p>
            <p className="font-medium mb-4">
              The Binge Town has no control over these cookies used by third-party
              advertisers.
            </p>
          </Section>

          <Section title="Third Party Privacy Policies" className="mb-[12px]">
            <p className="font-medium mb-4">
              The Binge Town’s Privacy Policy does not apply to other advertisers
              or websites. You should consult their respective Privacy Policies.
            </p>
            <p className="font-medium mb-4">
              You can disable cookies through your browser settings.
            </p>
          </Section>

          <Section title="CCPA Privacy Rights" className="mb-[12px">
            <ul className="list-disc space-y-2 left-4 pl-6 md:pl-8 px-5 font-medium mb-4">
              <li>Request disclosure of collected personal data</li>
              <li>Request deletion of personal data</li>
              <li>Request that personal data not be sold</li>
            </ul>
            <p  className="font-medium mb-4">We will respond within one month of a request.</p>
          </Section>

          <Section title="GDPR Data Protection Rights" className="mb-[12px">
            <ul className="list-disc space-y-2 pl-6 md:pl-8  px-5 font-medium mb-4">
              <li>Right to access</li>
              <li>Right to rectification</li>
              <li>Right to erasure</li>
              <li>Right to restrict processing</li>
              <li>Right to object to processing</li>
              <li>Right to data portability</li>
            </ul>
            <p>We will respond within one month of a request.</p>
          </Section>

          <Section title="Children’s Information" className="mb-[12px">
            <p className="font-medium mb-4">
              We prioritize protecting children online. The Binge Town does not
              knowingly collect Personal Identifiable Information from children
              under 13.
            </p>
            <p className="font-medium mb-4">
              If such information is found, we will promptly remove it.
            </p>
          </Section>

          <Section title="Changes to This Privacy Policy" className="mb-[12px">
            <p className=" font-medium mb-4">
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page and are effective immediately.
            </p>
          </Section>

          <Section title="Contact Us" className="mb-[12px]">
            <p className=" font-medium mb-4">
              If you have any questions or suggestions, contact us at{" "}
              <a
                href="tel:8618976974"
                className="font-medium underline underline-offset-4 hover:no-underline"
              >
                8618976974
              </a>.
            </p>
          </Section>

        </div>
      </div>
    </main>
  );
}
