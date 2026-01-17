export default function FranchiseSystemSection({
  title = "A Franchise System Built for Speed & Simplicity",
  steps = [],
}) {
  return (
    <section className="px-4 md:px-8 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-left md:text-center flex flex-col items-start md:items-center"
            >
              <div
                className="w-10 h-10 rounded-full text-white flex items-center justify-center
                font-semibold mb-4
                bg-[linear-gradient(36deg,_#1A2A6C_8.48%,_#B21F1F_55.8%,_#FDBB2D_98.44%)]"
              >
                {index + 1}
              </div>
              <h4 className="font-bold text-gray-900 text-sm md:text-md">
                {step.title}
              </h4>
              <p className="text-sm font-medium text-gray-600 mt-2 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
