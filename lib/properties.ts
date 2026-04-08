export type Property = {
  slug: string;
  name: string;
  tagline: string;
  location: string;
  locationSlug: string;
  beds: number | string;
  baths: number | string;
  address: string;
  description: string;
  features: string[];
  image: string;
  images: string[];
  guestyBookingUrl: string;
};

// Helper to build a full-res Wix image URL
const wix = (id: string, w = 1200, h = 800) =>
  `https://static.wixstatic.com/media/${id}/v1/fill/w_${w},h_${h},al_c,q_90/${id}`;

export const LOGO_URL =
  "https://static.wixstatic.com/media/51ee30_0f79b52be3424a13b81584fedc0f0925~mv2.jpg/v1/crop/x_94,y_102,w_464,h_464/fill/w_200,h_200,al_c,q_90/WrightLuxStays.jpg";

export const properties: Property[] = [
  {
    slug: "acacia-farmhouse",
    name: "The Acacia Farmhouse",
    tagline: "Wine Country Elegance in the Heart of Sonoma Valley",
    location: "Sonoma, CA",
    locationSlug: "sonoma",
    beds: 4,
    baths: 3,
    address: "Sonoma, CA",
    description:
      "Step into The Acacia Farmhouse — where rustic farmhouse charm meets modern luxury in the heart of Sonoma Valley. This stunning 4-bedroom, 3-bath retreat is the property that started it all for Wright Lux Stays, and it remains a guest favorite. Surrounded by the rolling vineyards and golden hills of Sonoma, it's the perfect base for wine tasting, farm-to-table dining, and relaxing in pure California style.",
    features: [
      "4 Bedrooms / 3 Bathrooms",
      "Fully equipped gourmet kitchen",
      "Spacious outdoor living & dining",
      "Wine country views",
      "High-speed WiFi",
      "Smart TV in every room",
      "Private parking",
      "Minutes to Cornerstone Gardens & top wineries",
    ],
    image: wix("51ee30_f091860c7687488c918d92d68067f7ec~mv2.jpg"),
    images: [
      wix("51ee30_f091860c7687488c918d92d68067f7ec~mv2.jpg"),
      wix("51ee30_2337bc5eb9354c71947468cde73d468d~mv2.jpg"),
      wix("51ee30_25519d951d77434494d70e9a1c5b888f~mv2.jpg"),
    ],
    guestyBookingUrl: "https://app.guesty.com/booking-widget/YOUR_PROPERTY_ID",
  },
  {
    slug: "palmer-farmhouse",
    name: "The Palmer Farmhouse",
    tagline: "Grand Sonoma Estate — Space, Style & Wine Country Bliss",
    location: "Sonoma, CA",
    locationSlug: "sonoma",
    beds: 5,
    baths: 5,
    address: "Sonoma, CA",
    description:
      "The Palmer Farmhouse is Sonoma luxury at its finest. This expansive 5-bedroom, 5-bath estate is perfect for larger groups and family gatherings seeking a premium Wine Country experience. With generous indoor and outdoor living spaces, every detail has been curated for comfort and elegance.",
    features: [
      "5 Bedrooms / 5 Bathrooms",
      "Resort-style outdoor entertaining",
      "Gourmet chef's kitchen",
      "Wine country views",
      "Multiple living areas",
      "High-speed WiFi",
      "Private parking",
      "Close to Sonoma Plaza & top wineries",
    ],
    image: wix("51ee30_2337bc5eb9354c71947468cde73d468d~mv2.jpg"),
    images: [
      wix("51ee30_2337bc5eb9354c71947468cde73d468d~mv2.jpg"),
      wix("51ee30_f091860c7687488c918d92d68067f7ec~mv2.jpg"),
      wix("51ee30_25519d951d77434494d70e9a1c5b888f~mv2.jpg"),
    ],
    guestyBookingUrl: "https://app.guesty.com/booking-widget/YOUR_PROPERTY_ID",
  },
  {
    slug: "broadway-farmhouse",
    name: "The Broadway Farmhouse",
    tagline: "Sonoma's Premier Group Retreat",
    location: "Sonoma, CA",
    locationSlug: "sonoma",
    beds: 5,
    baths: 5,
    address: "Sonoma, CA",
    description:
      "The Broadway Farmhouse brings the best of Sonoma living together under one spectacular roof. With 5 bedrooms and 5 bathrooms, this luxury farmhouse is designed for those who want to gather, celebrate, and savor every moment in Wine Country.",
    features: [
      "5 Bedrooms / 5 Bathrooms",
      "Entertainer's kitchen",
      "Al fresco dining & lounge areas",
      "Wine country setting",
      "High-speed WiFi",
      "Smart TVs throughout",
      "Private parking",
    ],
    image: wix("51ee30_25519d951d77434494d70e9a1c5b888f~mv2.jpg"),
    images: [
      wix("51ee30_25519d951d77434494d70e9a1c5b888f~mv2.jpg"),
      wix("51ee30_f091860c7687488c918d92d68067f7ec~mv2.jpg"),
    ],
    guestyBookingUrl: "https://app.guesty.com/booking-widget/YOUR_PROPERTY_ID",
  },
  {
    slug: "walnut-kansas-city",
    name: "Walnut Kansas City",
    tagline: "Upscale Urban Living in Kansas City",
    location: "Kansas City",
    locationSlug: "kansas-city",
    beds: 5,
    baths: 3.5,
    address: "Kansas City, MO",
    description:
      "Experience Kansas City's vibrant culture and hospitality from the comfort of this beautifully appointed 5-bedroom, 3.5-bath home. Perfect for families and groups, the Walnut property is ideally located to explore everything Kansas City has to offer — from world-famous BBQ to live jazz, art galleries, and sports.",
    features: [
      "5 Bedrooms / 3.5 Bathrooms",
      "Open-concept living & dining",
      "Fully equipped modern kitchen",
      "Outdoor patio space",
      "High-speed WiFi",
      "Smart TVs in all rooms",
      "Private parking",
      "Close to top KC attractions",
    ],
    image: wix("51ee30_f05c1ea063914c409616f1b7e803d53b~mv2.jpg"),
    images: [
      wix("51ee30_f05c1ea063914c409616f1b7e803d53b~mv2.jpg"),
      wix("51ee30_c6808f45667c4d12a2deaf58686001f8~mv2.jpg"),
      wix("51ee30_448e3bff657040228babdcd2893ebe67~mv2.jpg"),
    ],
    guestyBookingUrl: "https://app.guesty.com/booking-widget/YOUR_PROPERTY_ID",
  },
  {
    slug: "32nd-street-kansas-city",
    name: "32nd Street Kansas City",
    tagline: "Designer Home in the Heart of KC",
    location: "Kansas City",
    locationSlug: "kansas-city",
    beds: 5,
    baths: 4,
    address: "Kansas City, MO",
    description:
      "The 32nd Street home is a stunning 5-bedroom, 4-bathroom Kansas City retreat blending sophisticated design with all the comforts of home. Whether you're visiting for a family reunion, corporate retreat, or a memorable group getaway, this property has everything you need to make memories.",
    features: [
      "5 Bedrooms / 4 Bathrooms",
      "Designer interiors throughout",
      "Chef's kitchen",
      "Backyard entertaining space",
      "High-speed WiFi",
      "Dedicated workspace",
      "Private parking",
    ],
    image: wix("51ee30_b0d42b2174a847a6901d79e2d5ddfb19~mv2.jpg"),
    images: [
      wix("51ee30_b0d42b2174a847a6901d79e2d5ddfb19~mv2.jpg"),
      wix("51ee30_a0d561cbacf44ba6b3819908996a7211~mv2.jpg"),
      wix("51ee30_448e3bff657040228babdcd2893ebe67~mv2.jpg"),
    ],
    guestyBookingUrl: "https://app.guesty.com/booking-widget/YOUR_PROPERTY_ID",
  },
  {
    slug: "armadillo-zen-den",
    name: "The Armadillo Zen Den",
    tagline: "Designer Retreat in Travis Heights — Cowboy Pool & More",
    location: "Austin, TX",
    locationSlug: "austin",
    beds: 3,
    baths: 2,
    address: "1912 Fairlawn Lane, Unit B, Austin, TX 78704",
    description:
      "Experience Austin like a local at this head-to-toe remodeled designer home in the heart of Travis Heights. With bold, colorful interiors and the perfect mix of cozy and funky, this home captures the true Austin vibe. Walk to South Congress (SoCo), Lady Bird Lake, Big Stacy Park, and Blunn Creek Greenbelt — plus, you're just a short drive to Downtown Austin and the University of Texas. Step outside to your private backyard oasis complete with a cowboy pool, large entertainment deck, mini putt-putt course, and cornhole setup — ideal for laid-back fun with friends or family.",
    features: [
      "3 Bedrooms / 2 Bathrooms",
      "Cowboy pool & entertainment deck",
      "Mini putt-putt course & cornhole",
      "Head-to-toe designer renovation",
      "Open-concept fully stocked kitchen",
      "Walk to SoCo, Lady Bird Lake & Big Stacy Park",
      "High-speed WiFi",
      "In-home hair & beauty services available",
    ],
    image: wix("51ee30_4c53474ba5ef42dcabd7e27fe3e9f992~mv2.jpg"),
    images: [
      wix("51ee30_4c53474ba5ef42dcabd7e27fe3e9f992~mv2.jpg"),
      wix("51ee30_ade521b69d7d4db384d436bc85f31a8e~mv2.jpg"),
      wix("51ee30_98f332f98b0f43f8983e3db1e86b4ba2~mv2.jpg"),
      wix("51ee30_ea9048a335b4481e94dbdf8c4f77052a~mv2.jpg"),
    ],
    guestyBookingUrl: "https://app.guesty.com/booking-widget/YOUR_PROPERTY_ID",
  },
  {
    slug: "pointe-of-view-carmel",
    name: "The Pointe of View",
    tagline: "Intimate Coastal Retreat in Scenic Carmel-by-the-Sea",
    location: "Carmel, CA",
    locationSlug: "carmel",
    beds: "Studio",
    baths: 1,
    address: "Carmel-by-the-Sea, CA",
    description:
      "Nestled in the enchanting village of Carmel-by-the-Sea, The Pointe of View is an intimate studio retreat for those seeking coastal charm, tranquility, and beauty. Steps from world-class galleries, boutique shops, and the famous white-sand beach, this property is perfect for a romantic escape or solo adventure.",
    features: [
      "Studio / 1 Bathroom",
      "Charming Carmel-by-the-Sea location",
      "Steps from the beach & village",
      "Cozy, curated interiors",
      "High-speed WiFi",
      "Kitchenette",
      "Walking distance to galleries & dining",
    ],
    image: wix("51ee30_2fcc9b217cde41c989358fe3c033d37c~mv2.jpg"),
    images: [
      wix("51ee30_2fcc9b217cde41c989358fe3c033d37c~mv2.jpg"),
      wix("51ee30_71b50eb2af004023b10b743b52043452~mv2.jpg"),
      wix("51ee30_381e0551342f472dbfc3c78c2e311311~mv2.jpg"),
      wix("51ee30_a79fa0677e2d451c9254713a4af05674~mv2.jpg"),
      wix("51ee30_21b26c3731424b81987c2385220de656~mv2.jpg"),
      wix("51ee30_bee6e4e5ac414e6882f4b65073928994~mv2.jpg"),
    ],
    guestyBookingUrl: "https://app.guesty.com/booking-widget/YOUR_PROPERTY_ID",
  },
];

export const locations = [
  {
    slug: "sonoma",
    name: "Sonoma, CA",
    tagline: "Wine Country Escapes",
    description:
      "Experience the magic of California Wine Country with our curated collection of luxury Sonoma Valley farmhouses. Sip award-winning wines, explore the iconic Sonoma Plaza, and unwind in vineyard surroundings.",
    image: wix("51ee30_f091860c7687488c918d92d68067f7ec~mv2.jpg"),
  },
  {
    slug: "kansas-city",
    name: "Kansas City",
    tagline: "BBQ, Jazz & Urban Luxury",
    description:
      "Discover Kansas City's soulful charm from one of our beautifully appointed group homes. World-famous BBQ, live jazz, top sports, and Midwest hospitality await.",
    image: wix("51ee30_f05c1ea063914c409616f1b7e803d53b~mv2.jpg"),
  },
  {
    slug: "austin",
    name: "Austin, TX",
    tagline: "Keep It Weird, Keep It Luxurious",
    description:
      "Live music, incredible food, Lady Bird Lake, and South Congress — Austin has it all. Stay in our designer Travis Heights retreat and experience the real Austin.",
    image: wix("51ee30_4c53474ba5ef42dcabd7e27fe3e9f992~mv2.jpg"),
  },
  {
    slug: "carmel",
    name: "Carmel, CA",
    tagline: "Coastal Serenity",
    description:
      "The storybook village of Carmel-by-the-Sea offers white sand beaches, world-class art galleries, and Michelin-starred restaurants — all at your doorstep.",
    image: wix("51ee30_2fcc9b217cde41c989358fe3c033d37c~mv2.jpg"),
  },
];
