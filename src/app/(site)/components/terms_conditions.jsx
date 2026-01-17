export default function TermsAndConditions() {
  return (
    <section className="px-4 sm:px-6 md:px-36 py-10 sm:py-14 md:py-24 text-black">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl leading-tight md:leading-normal pb-4">
          Terms &amp; Conditions – BCKS Franchise LLP
        </h1>

        {/* Last Updated */}
        <p className="text-base sm:text-lg md:text-xl font-medium mt-1 mb-6 text-gray-700">
          Last updated on Apr 26th, 2023
        </p>

        {/* Intro */}
        <div className="space-y-6 text-sm sm:text-base md:text-lg leading-relaxed">
          <p>
            The Website Owner, including subsidiaries and affiliates
            ("Website", "Website Owner", "we", "us", or "our"), provides the
            information contained on this website to visitors ("you", "your")
            subject to these terms and conditions.
          </p>

          <p>
            By continuing to browse and use this website, you agree to comply
            with and be bound by the following terms and conditions of use.
          </p>

          <p>
            The term <strong>"BCKS Franchise LLP"</strong> refers to the owner of
            the website whose registered office is located at Bangalore – 560048.
          </p>

          <h3 className="text-lg sm:text-xl font-semibold pt-4">
            The use of this website is subject to the following terms of use:
          </h3>

          {/* ✅ PROPER ORDERED LIST */}
          <ol
            className="
              list-decimal
              list-outside
              pl-6 sm:pl-7 md:pl-8
              space-y-4
              [&>li::marker]:font-bold
              [&>li::marker]:text-black
            "
          >
            <li>The content of this website is for general information only.</li>

            <li>
              No warranty or guarantee is provided regarding accuracy or
              completeness of information.
            </li>

            <li>
              Use of information on this website is entirely at your own risk.
            </li>

            <li>
              Website materials including design and graphics are owned or
              licensed by us.
            </li>

            <li>
              All trademarks not owned by us are acknowledged on the website.
            </li>

            <li>
              Unauthorized use may give rise to a claim for damages or a criminal
              offense.
            </li>

            <li>
              External links are provided for convenience and do not imply
              endorsement.
            </li>

            <li>
              You may not link to this website without prior written consent.
            </li>

            <li>
              Use of this website is governed by the laws of India.
            </li>

            <li>
              We are not liable for transaction failures due to bank limits.
            </li>

            <li>
              Children above 10 years are fully chargeable; ages 3–10 are half
              chargeable.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
