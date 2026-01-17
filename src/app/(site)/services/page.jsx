import Image from "next/image";
import Link from "next/link";
const services = [
  {
    id: "private-screening",
    title: "Private movie screening",
    image: "/images/Luxury_1.jpeg",
    description:
      "You can book our private theaters for watching your favorite movies and shows on the big HD screen with surround sound and comfortable sittings. Our screen sizes vary from 135 inch to 180 inch and speakers vary from 600 W to 1000 W. Customers have to use their own OTT accounts or downloaded files to stream the content. We support all major OTT Apps and help in setting things up for you. Please note that we do not support Pen Drives/Hard Disks.",
    reverse: true,
  },
  {
    id: "decoration",
    title: "Decoration",
    image: "/images/homeHero.jpeg",
    description:
      "All our Private theaters are decorated to make them a great place for celebrations of special events like Birthdays, anniversaries, bride to be, romantic date, etc. Each and every private theater of The Binge Town has a different and unique theme of decoration. In some theatres decorations is mandatory and included in pricing while in others we provide without decoration pricing options also. Decorations are as per reference images with slight customizations specific to the event.",
  },
  {
    id: "snacks-beverages",
    title: "Snacks and beverages",
    image: "/images/burger.webp",
    description:
      "A celebration is incomplete without delectable food, and at The Binge Town, we take pride in offering a diverse and mouthwatering menu at all our branches. Menu varies from branch to branch. Some of the most commmonly available items in our menu are: French fries, Pizza, Soft drinks, Nuggets, Milk Shakes, etc. Customers can also order food from outside. Please note that Snacks and beverages are not included in the booking and have to be ordered separately at the theater.",
    reverse: true,
  },
  {
    id: "cakes",
    title: "Cakes",
    image: "/images/Cake.webp",
    description:
      "No need to hassle for arranging that perfect cake for your birthday, anniversary or any other event. We provide a diverse range of cake options that are tasty as well as economical. After your celebration, we also pack your cake properly for you to carry. Cakes can be added to your event while booking from the website with extra charges depending on the flavour",
  },
  {
    id: "gifts",
    title: "Bouquet and other gifts",
    image: "/images/Gifts.webp",
    description:
      "Want to make your special ones feel even more special by gifting them? We provide bouquet, photo frames, soft toys, showpieces, and many more gifting options in our website and at the theater for you to select the perfect gift for your loved ones. Kindly note that some gifts can be added directly from the website while some options are available only at the theater and can be purchased there directly",
    reverse: true,
  },
  {
    id: "fog-entry",
    title: "Fog entry",
    image: "/images/FogEntry.webp",
    badge: "Best Seller",
    description:
      "Begin your event with a dreamy entry which feels like walking over the clouds. We use dry ice to fill the theater with cloud like Fog during the entry which makes it really heavenly and magical. Then gas is completely safe and non-suffocation, so even kids can enjoy it freely. Pricing for Fog entry starts at RS.350 and you can add multiple Fog entries in your event as per your requirement.",
  },
  {
    id: "photoshoot",
    title: "Photoshoot",
    image: "/images/Photoshoot.webp",
    badge: "Best Seller",
    description:
      "Who does not want to record beautiful memories of special days in form of high quality photos which can also be shared with friends and family on social media? Almost all our branches offer DSLR photography service for as low as RS.300 for 15 minutes. We share the soft copy of the photos within 12 hrs through Google drive link.",
    reverse: true,
  },
  {
    id: "karaoke",
    title: "Karaoke",
    image: "/images/Karaoke.jpeg",
    badge: "Best Seller",
    description:
      "Add a musical twist to your celebration with our Karaoke setup! Whether you’re a bathroom singer or a born performer, this is your moment to take the stage. Sing your heart out with friends and family for just ₹300 per hour, and turn your celebration into an unforgettable concert of laughter, music, and memories.",
  },
];
export default function OurServices() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 md:py-20 ">
      <h1 className="text-4xl  lg:text-5xl font-semibold text-center py-4 mb-10 md:mb-16">
        The Binge Town – Services
      </h1>

      <div className="space-y-16 md:space-y-24">
        {services.map((service) => (
          <div
            key={service.id}
            id={`service-${service.id}`}
            className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
              service.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full md:w-1/2 relative h-60 sm:h-72 md:h-80 lg:h-96 rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={service.badge === "Best Seller"}
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3">
                {service.title}
                {service.badge && (
                  <span className="ml-3 inline-block bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full align-middle">
                    {service.badge}
                  </span>
                )}
              </h2>

              <p className="text-sm font-medium md:text-lg text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-16">
        <Link href="/book-now">
          <button className="px-8 py-3 rounded-full bg-black text-white font-semibold hover:opacity-90 transition">
            Book Now
          </button>
        </Link>
      </div>
    </section>
  );
}
