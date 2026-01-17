import Image from "next/image";

export default function DynamicBanner({ title, image }) {
  return (
    <section className="relative w-full h-[220px] sm:h-[280px] md:h-[600px] overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover scale-105 animate-zoomSlow"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex h-full items-center justify-center px-4 text-center">
        <h1 className="text-white font-bold
          text-2xl md:text-3xl
          max-w-4xl leading-tight"
        >
          {title}
        </h1>
      </div>
    </section>
  );
}
