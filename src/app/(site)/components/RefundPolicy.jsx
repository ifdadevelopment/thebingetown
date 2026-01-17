export default function RefundPolicy() {
  return (
    <section className="px-4 sm:px-6 md:px-36 py-10 sm:py-14 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl leading-tight md:leading-normal pb-6 sm:pb-8">
          Refund Policy
        </h1>
        <div className="prose prose-sm sm:prose-base md:prose-lg font-medium max-w-none">
          <ul className="list-disc pl-5 space-y-4">
            <li>
              An advance amount of <strong>Rs 750</strong> is collected for
              reserving a slot.
            </li>

            <li>
              The advance amount is <strong>fully refundable</strong> (excluding
              payment gateway convenience charges, if applicable).
            </li>

            <li>
              To be eligible for a refund, the booking must be cancelled or the
              cancellation must be informed via <strong>WhatsApp chat</strong>{" "}
              at least <strong>72 hours</strong> before the scheduled slot time.
            </li>

            <li>
              Refunds are usually initiated within{" "}
              <strong>24 hours</strong> after cancellation approval.
            </li>

            <li>
              The refunded amount may take up to{" "}
              <strong>3–5 working days</strong> to reflect in your account.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
