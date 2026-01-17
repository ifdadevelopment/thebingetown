import {
  FaCog,
  FaRegCheckCircle,
  FaRecycle,
  FaLightbulb,
  FaUsers,
  FaMapSigns,
} from "react-icons/fa";




// data/services.js
export const services = [
  {
    title: "Private movie screening",
    image: "/images/Luxury_1.jpeg",
  },
  {
    title: "Decoration",
    image: "/images/homeHero.jpeg",
  },
  {
    title: "Snacks and beverages",
    image: "/images/burger.webp",
  },
  {
    title: "Cakes",
    image: "/images/Cake.webp",
  },
  {
    title: "Bouquet and other gifts",
    image: "/images/Gifts.webp",
  },
  {
    title: "Fog entry",
    image: "/images/FogEntry.webp",
    badge: "Best-seller",
  },
  {
    title: "Photoshoot",
    image: "/images/Photoshoot.webp",
    badge: "Best-seller",
  },
  {
    title: "Karaoke",
    image: "/images/Karaoke.jpeg",
    badge: "Best-seller",
  },
];

export const clients = [
  { name: "Acme", logo: "/clients/acme.png" },
  { name: "Hero", logo: "/clients/hero.png" },
  { name: "Mindray", logo: "/clients/mindray.png" },
  { name: "Paytm", logo: "/clients/paytm.png" },
  { name: "Oppo", logo: "/clients/oppo.png" },
  { name: "Concentrix", logo: "/clients/cont.png" },
];
export const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Business Owner",
    heading: "Outstanding Service",
    review:
      "The team delivered beyond expectations. Professional approach, timely delivery, and excellent support throughout the project.",
    rating: 5,
    image: "/images/client1.jpg",
  },
  {
    id: 2,
    name: "Neha Verma",
    role: "Startup Founder",
    heading: "Highly Recommended",
    review:
      "Clean execution and strong technical understanding. The final output was exactly what we needed for our brand.",
    rating: 4,
    image: "/images/client2.jpg",
  },
  {
    id: 3,
    name: "Amit Singh",
    role: "Marketing Manager",
    heading: "Great Experience",
    review:
      "Smooth communication and quality work. Everything was well-structured and delivered on time.",
    rating: 5,
    image: "/images/client3.jpg",
  },
];
export const slides = [
  {
    video: "/videos/slide1.mp4",
    title: "HVACR Engineering Excellence",
    subtitle: "Precision-driven cooling & ventilation systems",
  },
  {
    video: "/videos/slide2.mp4",
    title: "Efficient Cooling Solutions",
    subtitle: "Energy-optimized HVACR for modern infrastructure",
  },
  {
    video: "/videos/slide3.mp4",
    title: "Industrial & Commercial Projects",
    subtitle: "Scalable HVACR systems for large facilities",
  },
];
export const projects = [
  {
    id: 1,
    city: "Chandigarh",
    name: "Grazitti",
    area: "150,000 Sq Ft",
    image: "/projects/Centralized.jpg",
    images: [
      "/projects/Centralized.jpg",
      "/projects/Centralized.jpg",
      "/projects/Centralized.jpg",
      "/projects/Centralized.jpg",
      "/projects/Centralized.jpg",
      "/projects/Centralized.jpg",
      "/projects/Centralized.jpg",
      "/projects/Centralized.jpg",
    ],
    slug: "grazitti-chandigarh",
    systemType: "Centralized HVAC System",
    year: 2022,
    status: "Completed",
    description:
      "Design and execution of a centralized HVAC system for a large corporate workspace, optimized for energy efficiency and uniform cooling.",
  },

  {
    id: 2,
    city: "Hyderabad",
    name: "Technip",
    area: "225,000 Sq Ft",
    image: "/projects/Duct.avif",
    images: [
      "/projects/Duct.avif",
      "/projects/Duct.avif",
      "/projects/Duct.avif",
      "/projects/Duct.avif",
      "/projects/Duct.avif",
      "/projects/Duct.avif",
    ],
    slug: "technip-hyderabad",
    systemType: "Ductable Air Conditioning",
    year: 2023,
    status: "Completed",
    description:
      "High-capacity ductable HVAC system implemented across multiple floors with precision airflow and advanced climate control.",
  },

  {
    id: 3,
    city: "Pune",
    name: "Infosys Campus",
    area: "300,000 Sq Ft",
    image: "/projects/VRV.jpg",
    images: [
      "/projects/VRV.jpg",
      "/projects/VRV.jpg",
      "/projects/VRV.jpg",
      "/projects/VRV.jpg",
      "/projects/VRV.jpg",
    ],
    slug: "infosys-pune",
    systemType: "VRV / VRF System",
    year: 2021,
    status: "Completed",
    description:
      "VRV-based air conditioning system designed for flexible zoning, lower energy consumption, and long-term operational efficiency.",
  },

  {
    id: 4,
    city: "Delhi",
    name: "TCS Office",
    area: "180,000 Sq Ft",
    image: "/projects/HVAC.jpg",
    images: [
      "/projects/HVAC.jpg",
      "/projects/HVAC.jpg",
      "/projects/HVAC.jpg",
      "/projects/HVAC.jpg",
      "/projects/HVAC.jpg",
    ],
    slug: "tcs-delhi",
    systemType: "Integrated HVAC Solution",
    year: 2020,
    status: "Completed",
    description:
      "End-to-end HVAC solution including ventilation, air handling units, and temperature control systems.",
  },

  {
    id: 5,
    city: "Noida",
    name: "Samsung R&D Center",
    area: "250,000 Sq Ft",
    image: "/projects/VRV.png",
    images: [
      "/projects/VRV.png",
      "/projects/VRV.png",
      "/projects/VRV.png",
      "/projects/VRV.png",
      "/projects/VRV.png",
      "/projects/VRV.png",
    ],
    slug: "samsung-noida",
    systemType: "Chiller & Ventilation System",
    year: 2023,
    status: "Completed",
    description:
      "Installation of advanced chiller plant and ventilation systems for high-performance research facilities.",
  },

  {
    id: 6,
    city: "Bengaluru",
    name: "Wipro Tech Park",
    area: "275,000 Sq Ft",
    image: "/projects/Centralized.png",
    images: [
      "/projects/Centralized.png",
      "/projects/Centralized.png",
      "/projects/Centralized.png",
      "/projects/Centralized.png",
    ],
    slug: "wipro-bengaluru",
    systemType: "AMC & Preventive Maintenance",
    year: 2024,
    status: "Ongoing",
    description:
      "Annual Maintenance Contract covering preventive maintenance, performance optimization, and rapid response support.",
  },
];

export const teamMembers = [
  {
    id: 1,
    name: "Deepak Kumar",
    role: "Founder & Director",
    description:
      "Leads the company with strong expertise in HVACR system design and enterprise-level project execution.",
    image: "/team/member1.jpg",
  },
  {
    id: 2,
    name: "Amit Verma",
    role: "Senior HVAC Engineer",
    description:
      "Specialist in industrial air conditioning systems and large-scale refrigeration projects.",
    image: "/team/member2.jpg",
  },
  {
    id: 3,
    name: "Neha Sharma",
    role: "Project Manager",
    description:
      "Ensures smooth execution, timely delivery, and coordination across all HVACR installations.",
    image: "/team/member3.jpg",
  },
  {
    id: 4,
    name: "Rahul Singh",
    role: "Service Head",
    description:
      "Manages service operations with focus on efficiency, maintenance quality, and client satisfaction.",
    image: "/team/member4.jpg",
  },
];
export const TABS = [
  {
    key: "about",
    label: "About Us",
    title: "Who We Are",
    content:
      "GS Refrigeration Enterprises (GSRE) is a closely held HVACR company established by Mr. Deepak Kumar in 2017. We provide reliable and complete air conditioning and refrigeration solutions across all market segments. GSRE is technically and commercially equipped to design even the most complex HVACR systems in the most economical and effective manner, tailored precisely to customer requirements, ensuring long-term performance and satisfaction.",
  },
  {
    key: "vision",
    label: "Our Vision",
    title: "Our Vision",
    content:
      "Our vision is to remain at the edge of delivering ‘better to best’ HVACR services by supporting the growing demand of the air conditioning industry with innovative designs, energy-efficient systems, and dependable service support, while building long-term trust with our clients.",
  },
  {
    key: "mission",
    label: "Our Mission",
    title: "Our Mission",
    content:
      "Our mission is to deliver excellent HVACR products backed by prompt, efficient, and high-quality service support. We strive to design and execute air conditioning and refrigeration systems that achieve optimal performance at the most competitive cost, ensuring complete customer satisfaction through technical excellence and timely execution.",
  },
];

// export const galleryImages = [
//   {
//     src: "/services/VRV.jpg",
//     alt: "VRV Air Conditioning System Installation",
//   },
//   {
//     src: "/services/Duct.avif",
//     alt: "Ductable Air Conditioning System",
//   },
//   {
//     src: "/services/HVAC.jpg",
//     alt: "HVAC System Design and Installation",
//   },
//   {
//     src: "/services/Centralized.jpg",
//     alt: "Centralized Air Conditioning System",
//   },
// ];
export const BRANDS = [
  { name: "O General", src: "/sales/general.png" },
  { name: "Panasonic", src: "/sales/panasonic.png" },
  { name: "Carrier", src: "/sales/carrier.png" },
  { name: "Voltas", src: "/sales/voltas.png" },
  { name: "Mitsubishi Electric", src: "/sales/mitsubi.png" },
  { name: "Hitachi", src: "/sales/hitachi.png" },
  { name: "Daikin", src: "/sales/daikain.png" },
];

export const ServiceObjectives = [
  {
    id: 1,
    icon: <FaCog size={50} />,
    title: "Deliver Quality HVAC Solutions",
    description:
      "To design, install, and maintain high-performance HVAC systems that meet the highest standards of quality, safety, and efficiency.",
  },
  {
    id: 2,
    icon: <FaRegCheckCircle size={50} />,
    title: "Ensure Customer Satisfaction",
    description:
      "To understand each client’s unique needs and provide personalized solutions that exceed expectations in performance, reliability, and support.",
  },
  {
    id: 3,
    icon: <FaRecycle size={50} />,
    title: "Promote Energy Efficiency",
    description:
      "To integrate eco-friendly practices and energy-saving technologies into all projects, reducing environmental impact and operational costs for clients.",
  },
  {
    id: 4,
    icon: <FaLightbulb size={50} />,
    title: "Foster Innovation",
    description:
      "To continuously upgrade our technical knowledge, adopt advanced tools, and explore new HVAC technologies that keep us ahead in the industry.",
  },
  {
    id: 5,
    icon: <FaUsers size={50} />,
    title: "Build a Skilled Workforce",
    description:
      "To invest in training and development of our team, ensuring that they remain competent, certified, and motivated to deliver excellence.",
  },
  {
    id: 6,
    icon: <FaMapSigns size={50} />,
    title: "Expand Our Reach",
    description:
      "To grow our presence across India by building strong partnerships and entering new markets while maintaining our high standards.",
  },
];

export const CITY_DATA = [
  {
    city: "Delhi NCR",
    locations: [
      "Connaught Place",
      "Rajouri Garden",
      "Karol Bagh",
      "Dwarka",
      "Noida Sector 18",
      "Gurugram Cyber Hub",
      "Lajpat Nagar",
      "Saket",
      "Rohini",
      "Pitampura",
    ],
  },
];
export const EVENTS = [
  {
    title: "Birthday Party",
    description:
      "Host an unforgettable birthday celebration with our private theatre experience. Enjoy a personalised movie screening with friends and family in a cozy, exclusive setting.",
    icon: "/images/cake.jpeg",
    href: "/events/private-birthday-party-celebration",
  },
  {
    title: "Anniversary",
    description:
      "Celebrate your special milestone with a romantic and intimate private theatre experience. Create lasting memories with a customised movie night just for the two of you.",
    icon: "/images/ring.jpeg",
    href: "/events/private-anniversary-celebration-venue",
  },
  {
    title: "Party & Events",
    description:
      "From reunions and farewells to casual get-togethers, our private theatres offer a unique and exclusive venue for any special occasion.",
    icon: "/images/party.jpeg",
    href: "/events/private-party-and-event-venues",
  },
];

export const points = [
  {
    title: "Unique & Memorable Experiences",
    text: "We specialize in creating unforgettable celebrations tailored to your needs.",
  },
  {
    title: "Stunning Decorations",
    text: "From elegant balloon setups to themed décor, we bring your vision to life.",
  },
  {
    title: "Premium Quality & Attention to Detail",
    text: "Every event is crafted with precision and top-quality materials.",
  },
  {
    title: "Trusted by Thousands",
    text: "Our happy customers love our seamless service and creative designs.",
  },
  {
    title: "Hassle-Free Booking",
    text: "Quick and easy reservations for birthdays, anniversaries, proposals & more!",
  },
];

export const FAQS = [
  {
    q: "Which movies or shows can we watch? Can we play our own videos?",
    a: "Yes, you can connect your OTT accounts or phone through Chromecast and play content of your choice. We do NOT provide any movies or OTT accounts. Pendrives and laptops are not supported.",
  },
  {
    q: "Illegal/Prohibited contents are not allowed",
    a: "Customers must not stream any content which is illegal as per Indian laws. We will not be liable for any consequences.",
  },
  {
    q: "Refund Policy",
    a: "Full refund of advance payment if slot is cancelled at least 72 hours before the slot time.",
  },
  {
    q: "Technical interruption refund policy",
    a: "In case of failure in projector, sound, or internet, refund will be provided after deducting used time.",
  },
  {
    q: "You are responsible for your belongings",
    a: "We are not responsible for loss of personal belongings. Please take care of your items.",
  },
  {
    q: "Booking period includes setup and checkout time",
    a: "Customers must vacate the theater along with belongings before the end time.",
  },
  {
    q: "Are decorations customizable?",
    a: "Decorations are as shown on the website. Essential personalization like name boards is allowed. Balloon colors are not customizable.",
  },
  {
    q: "Are kids chargeable?",
    a: "Kids above 10 years are fully chargeable, 3–10 years are half chargeable, below 3 years are free.",
  },
];

export const features = [
  {
    title: "Food & Beverages",
    description: "Enjoy delicious in-theatre dining options at affordable prices!",
    icon: "/images/food_and_beverages.svg",
  },
  {
    title: "Screening",
    description: "Watch your favorite movies & shows on big screen!",
    icon: "/images/screening.svg",
  },
  {
    title: "Cakes",
    description: "Discover your ideal celebration cake from our diverse selection.",
    icon: "/images/cakes.svg",
  },
  {
    title: "Bouquets",
    description: "Elevate your celebration with a stunning rose bouquet addition.",
    icon: "/images/bouquets.svg",
  },
  {
    title: "Gifts",
    description: "Pick from several bouquet, chocolate and other gifting options.",
    icon: "/images/gifts.svg",
  },
  {
    title: "Decoration",
    description: "Transform your celebrations with personalized decor and themed setups.",
    icon: "/images/decoration.svg",
  },
  {
    title: "Fog Entry",
    description: "Make a grand entrance with our stunning fog effect!",
    icon: "/images/fog_entry.svg",
  },
  {
    title: "Kids Celebration",
    description: "Customize celebrations with kids standees and car entry add-ons.",
    icon: "/images/kids_celebration.svg",
  },
];
export const cards = [
  {
    title: "The Binge Town - Faq",
    href: "/faqs",
    variant: "white",
    description: "Our FAQs are super detailed and kill 99.99% of doubts :)",
    icon: (
      <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1m-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1" />
    ),
  },
  {
    title: "Chat with The Binge Town on WhatsApp",
    href: "https://wa.me/918618976974",
    variant: "yellow",
    description:
      "Click to connect with our Smart WhatsApp ChatBot and Agents.",
    icon: (
      <path d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2" />
    ),
  },
  {
    title: "The Binge Town - Refund Policy",
    href: "/refund_policy",
    variant: "white",
    description:
      "Worried about change of plans? Our Refund Policy has got you.",
    icon: (
      <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8" />
    ),
  },
  {
    title: "The Binge Town - Pricing",
    href: "/pricing",
    variant: "yellow",
    description: "Confused about pricing? Check out this explainer.",
    icon: (
      <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4" />
    ),
  },
  {
    title: "Call The Binge Town",
    href: "tel:+918618976974",
    variant: "white",
    description:
      "Want to speak with us on call? Just tap here to get connected.",
    icon: (
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02z" />
    ),
  },
];
export const galleryImages = [
  {
    src: "/images/celebration_private_1.webp",
    alt: "The Binge Town Gallery Image 1 - Private Theatre Celebrations",
  },
  {
    src: "/images/celebration_private_2.webp",
    alt: "The Binge Town Gallery Image 2 - Private Theatre Celebrations",
  },
  {
    src: "/images/celebration_private_3.webp",
    alt: "The Binge Town Gallery Image 3 - Private Theatre Celebrations",
  },
  {
    src: "/images/celebration_private_4.webp",
    alt: "The Binge Town Gallery Image 4 - Private Theatre Celebrations",
  },
  {
    src: "/images/celebration_private_5.webp",
    alt: "The Binge Town Gallery Image 5 - Private Theatre Celebrations",
  },
  {
    src: "/images/celebration_private_6.webp",
    alt: "The Binge Town Gallery Image 6 - Private Theatre Celebrations",
  },
  {
    src: "/images/celebration_private_7.webp",
    alt: "The Binge Town Gallery Image 7 - Private Theatre Celebrations",
  },
  {
    src: "/images/celebration_private_8.webp",
    alt: "The Binge Town Gallery Image 8 - Private Theatre Celebrations",
  },
];
// data/instagramPosts.js
export const instagramPosts = [
  "https://www.instagram.com/reel/DTDmKUdDz2z/",
  "https://www.instagram.com/reel/DR6sLq_EWKc/",
  "https://www.instagram.com/reel/DSpFL6JCY32/",
  "https://www.instagram.com/reel/DSpFL6JCY32/",
  "https://www.instagram.com/reel/DSpFL6JCY32/",
];
export const bannerConfig = {
  "private-birthday-party-celebration": {
    title: "Grand Birthday Celebration in Private Theatre",
    image: "/events/bg.jpg",
    description:
      "Celebrate birthdays in a luxury private theatre with personalized decor, food and entertainment.",
  },

  "private-anniversary-celebration-venue": {
    title: "Romantic Anniversary Celebration in Private Theatre",
    image: "/events/anniversary.jpg",
    description:
      "Create unforgettable anniversary moments in a romantic private theatre setting.",
  },

  "private-party-and-event-venues": {
    title: "Dream Proposal Experience in Private Theatre",
    image: "/events/event.webp",
    description:
      "Plan the perfect proposal with cinematic visuals and a private luxury ambience.",
  },
};

export const eventFeaturesConfig = {
  "private-birthday-party-celebration": {
    title: "Plan a memorable birthday party with us",
    subtitle:
      "Book a hassle-free, premium and budget-friendly birthday celebration in just a few clicks",
    features: [
      { title: "Grand Decoration", image: "/events/homeHero.jpeg" },
      { title: "Food & Beverages", image: "/events/burger.webp" },
      { title: "Cakes & Gifts", image: "/events/Cake.webp" },
      { title: "Photoshoot", image: "/events/Photoshoot.webp" },
    ],
  },
  "private-anniversary-celebration-venue": {
    title: "Plan a memorable anniversary party with us",
    subtitle:
      "Book a hassle-free, premium and budget-friendly anniversary celebration in just few clicks",
    features: [
      { title: "Grand Decoration", image: "/events/homeHero.jpeg" },
      { title: "Food & Beverages", image: "/events/burger.webp" },
      { title: "Cakes & Gifts", image: "/events/Cake.webp" },
      { title: "Photoshoot", image: "/events/Photoshoot.webp" },
    ],
  },
  "private-party-and-event-venues": {
    title: "Plan unforgettable parties and events with us",
    subtitle:
      "Book a hassle-free, premium and budget-friendly party in just few clicks",
    features: [
      { title: "Grand Decoration", image: "/events/homeHero.jpeg" },
      { title: "Food & Beverages", image: "/events/burger.webp" },
      { title: "Cakes & Gifts", image: "/events/Cake.webp" },
      { title: "Photoshoot", image: "/events/Photoshoot.webp" },
    ],
  }
};
export const eventSectionsConfig = {
  "private-anniversary-celebration-venue": {
    title: "Types of Anniversaries You can Celebrate",
    subtitle:
      "Perfect venues for all types of anniversary celebrations - for couples, families, friends & partners",
    items: [
      {
        title: "Romantic Marriage Anniversary",
        description:
          "Romantic anniversary celebrations with cozy setups and personalized messages",
      },
      {
        title: "Love Anniversary",
        description:
          "Love themed with roses and romantic movies to make the day memorable for your relationship.",
      },
      {
        title: "Parents' Wedding Anniversary",
        description:
          "Private, safe and perfect spot for families to celebrate and make memories",
      },
      {
        title: "Friendship Anniversary",
        description:
          "Dance, sing & celebrate your friendship! The kind of vibe you would fall in love with :)",
      },
    ],
  }, "private-party-and-event-venues": {
    title: "Types of Parties and Events you can book",
    subtitle:
      "Perfect venues for all types of parties & events - for kids, families, friends & partners",
    items: [
      {
        title: "Romantic Date",
        description:
          "Romantic movie date with cozy decoration and personalized messages",
      },
      {
        title: "Bride-to-be Celebration",
        description:
          "Gift your bestie a bachelorette bash she will remember forever!.",
      },
      {
        title: "Love or Marriage Proposals",
        description:
          "The perfect spot to plan a private, romantic and memorable proposal.",
      },
      {
        title: "Kitty Parties",
        description:
          "Dance, Sing & Play! The perfect vibe for a fun get together :)",
      },
    ],
  },
  "private-birthday-party-celebration": {
    title: "Types of Birthdays You can Celebrate",
    subtitle:
      "Perfect venues for all types of birthday celebrations - for kids, families, friends & partners",
    items: [
      {
        title: "Couple Birthday Celebration",
        description:
          "Romantic birthday celebrations with cozy setups and personalized messages",
      },
      {
        title: "Kid's Birthday Parties",
        description:
          "Fun themed with cartoons and animated movies to make the day memorable for your champ.",
      },
      {
        title: "Family Birthday Bash",
        description:
          "Private, Safe and Perfect spot for families to celebrate and make memories.",
      },
      {
        title: "Friends Birthday Celebration",
        description:
          "Dance, Sing & Enjoy! The kind of space you would fall in love with :)",
      },
    ],
  },
}
export const eventStepsConfig = {
  "private-anniversary-celebration-venue": {
    title: "Book your anniversary celebration in just few steps",
    features: [
      { title: "Select Your City", image: "/events/click.svg" },
      { title: "Choose Your Location", image: "/events/location.svg" },
      { title: "Confirm Date & Time", image: "/events/calender.svg" },
      { title: "Secure Your Slot", image: "/events/tick.svg" },
    ],
  }, "private-party-and-event-venues": {
    title: "Book your event in just few steps",
    features: [
      { title: "Select Your City", image: "/events/click.svg" },
      { title: "Choose Your Location", image: "/events/location.svg" },
      { title: "Confirm Date & Time", image: "/events/calender.svg" },
      { title: "Secure Your Slot", image: "/events/tick.svg" },
    ],
  },
  "private-birthday-party-celebration": {
    title: "Book your anniversary celebration in just few steps",
    features: [
      { title: "Select Your City", image: "/events/click.svg" },
      { title: "Choose Your Location", image: "/events/location.svg" },
      { title: "Confirm Date & Time", image: "/events/calender.svg" },
      { title: "Secure Your Slot", image: "/events/tick.svg" },
    ],
  },
}
export const cities = [
  {
    name: "Bengaluru",
    href: "/private-celebration-theatres-in-bangalore",
    image: "/images/bengaluruBg.jpeg",
    title:
      "The Binge Town - Private Theatres in Bangalore - Private Celebration Theatres In Bangalore",
  },
  {
    name: "Delhi NCR",
    href: "/private-celebration-theatres-in-delhi",
    image: "/images/delhiBg.jpeg",
    title:
      "The Binge Town - Private Theatres in Delhi - Private Celebration Theatres In Delhi",
  },
  {
    name: "Hyderabad",
    href: "/private-celebration-theatres-in-hyderabad",
    image: "/images/hyderabadBg.jpeg",
    title:
      "The Binge Town - Private Theatres in Hyderabad - Private Celebration Theatres In Hyderabad",
  },
  {
    name: "Mumbai (MMR)",
    href: "/private-celebration-theatres-in-mumbai",
    image: "/images/mumbaiBg.jpeg",
    title:
      "The Binge Town - Private Theatres in Mumbai - Private Celebration Theatres In Mumbai",
  },
  {
    name: "Chennai",
    href: "/private-celebration-theatres-in-chennai",
    image: "/images/chennaiBg.jpeg",
    title:
      "The Binge Town - Private Theatres in Chennai - Private Celebration Theatres In Chennai",
  },
];

// data/quickLinksData.js
export const quickLinksData = [
  {
    city: "Bengaluru",
    links: [
      {
        label: "Private theatre Bangalore",
        href: "/private-celebration-theatres-in-bangalore",
        title:
          "The Binge Town - Private theatre Bangalore - Private Celebration Theatres In Bangalore",
      },
      {
        label: "Private theatre for couples in Bangalore",
        href: "/private-celebration-theatres-in-bangalore",
        title:
          "The Binge Town - Private theatre for couples in Bangalore",
      },
      {
        label: "Birthday party places Bangalore",
        href: "/private-celebration-theatres-in-bangalore",
        title: "Birthday party places Bangalore",
      },
      {
        label: "Anniversary celebration Bangalore",
        href: "/private-celebration-theatres-in-bangalore",
        title: "Anniversary celebration Bangalore",
      },
      {
        label: "Romantic date Night Bangalore",
        href: "/private-celebration-theatres-in-bangalore",
        title: "Romantic date Night Bangalore",
      },
    ],
  },

  {
    city: "Hyderabad",
    links: [
      {
        label: "Private theatre Hyderabad",
        href: "/private-celebration-theatres-in-hyderabad",
        title: "Private theatre Hyderabad",
      },
      {
        label: "Birthday party places Hyderabad",
        href: "/private-celebration-theatres-in-hyderabad",
        title: "Birthday party places Hyderabad",
      },
      {
        label: "Anniversary celebration Hyderabad",
        href: "/private-celebration-theatres-in-hyderabad",
        title: "Anniversary celebration Hyderabad",
      },
    ],
  },

  {
    city: "Delhi NCR",
    links: [
      {
        label: "Private theatre Delhi NCR",
        href: "/private-celebration-theatres-in-delhi",
        title: "Private theatre Delhi NCR",
      },
      {
        label: "Birthday celebration places Noida",
        href: "/private-celebration-theatres-in-delhi",
        title: "Birthday celebration places Noida",
      },
      {
        label: "Anniversary celebration Gurgaon",
        href: "/private-celebration-theatres-in-delhi",
        title: "Anniversary celebration Gurgaon",
      },
    ],
  },

  {
    city: "Mumbai",
    links: [
      {
        label: "Private theatre Mumbai",
        href: "/private-celebration-theatres-in-mumbai",
        title: "Private theatre Mumbai",
      },
      {
        label: "Birthday party places Mumbai",
        href: "/private-celebration-theatres-in-mumbai",
        title: "Birthday party places Mumbai",
      },
    ],
  },

  {
    city: "Other Important Links",
    links: [
      {
        label: "birthday party places near me",
        href: "/events/private-birthday-party-celebration",
        title: "birthday party places near me",
      },
      {
        label: "anniversary celebration near me",
        href: "/events/private-anniversary-celebration-venue",
        title: "anniversary celebration near me",
      },
      {
        label: "Events & Parties venue near me",
        href: "/events/private-party-and-event-venues",
        title: "Events & Parties venue near me",
      },
    ],
  },
];
export const stats = [
  {
    value: "5,00,000+",
    label: "Delighted guests have enjoyed unforgettable experiences",
  },
  {
    value: "8 Cities",
    label: "Bangalore, Delhi NCR, Mumbai (MMR), Chennai & Hyderabad",
  },
  {
    value: "4.9/5",
    label: "Average Google rating from verified reviews",
  },
  {
    value: "6,000+",
    label: "Monthly celebrations for every occasion",
  },
];
export const franchiseSystemConfig = {
  title: "A Franchise System Built for Speed & Simplicity",
  steps: [
    {
      title: "Space Fitment & Layout Support",
      description:
        "Optimized layouts designed for maximum revenue and experience.",
    },
    {
      title: "Decor, Branding & Setup Manual",
      description:
        "Complete brand guidelines with execution support.",
    },
    {
      title: "Online Booking System Integration",
      description:
        "Seamless booking, payments & operations platform.",
    },
    {
      title: "Launch with Digital Marketing Boost",
      description:
        "Go live with strong brand visibility and demand.",
    },
  ],
};
