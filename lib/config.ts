export const siteConfig = {
  name: "Kiefer Built Contracting",
  tagline: "Building Dreams, Shaping Futures",
  description:
    "Designing and building dream homes in Northern Colorado for over 25 years. Custom home building, renovations, and commercial construction.",
  url: "https://kbuiltco.com",
  contact: {
    address: "35065 County Road 19",
    city: "Windsor",
    state: "CO",
    zip: "80550",
    phone: "970-515-5059",
    email: "info@kbuiltco.com",
  },
  social: {
    facebook: "https://www.facebook.com/kieferbuiltcontracting",
    instagram: "https://www.instagram.com/kieferbuiltcontracting",
  },
  externalLinks: {
    clientPortal: "https://kbuiltco.com/buildertrend/",
    epsHomes: "https://www.epsbuildings.com/",
    flipbook: "https://issuu.com/mantoothmarketingcompany/docs/kbuilt_co_home_book_3-25",
  },
};

export type NavItem = {
  label: string;
  href?: string;
  external?: boolean;
  children?: NavItem[];
};

export const navigation: NavItem[] = [
  {
    label: "About",
    children: [
      { label: "Our Story", href: "/about" },
      { label: "Our Team", href: "/employees" },
      { label: "Accolades", href: "/accolades" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    label: "Service",
    children: [
      { label: "Our Services", href: "/services" },
      { label: "Our Products", href: "/catalogitems" },
      { label: "Our Process", href: "/process" },
      { label: "Home Builds", href: "/services/home-building" },
      {
        label: "EPS Homes",
        href: siteConfig.externalLinks.epsHomes,
        external: true,
      },
    ],
  },
  {
    label: "Our Work",
    children: [
      { label: "Gallery", href: "/gallery" },
      {
        label: "Flipbook",
        href: siteConfig.externalLinks.flipbook,
        external: true,
      },
      { label: "New Builds", href: "/new-builds" },
      { label: "Commercial", href: "/commercial" },
      { label: "Renovations & Additions", href: "/renovations-and-additions" },
      { label: "Testimonials", href: "/testimonials" },
    ],
  },
  {
    label: "Careers",
    href: "/join-our-team",
  },
  {
    label: "Contact Us",
    children: [
      { label: "Contact", href: "/contact" },
      { label: "Vendors", href: "/vendors" },
    ],
  },
  {
    label: "Client Portal",
    href: siteConfig.externalLinks.clientPortal,
    external: true,
  },
];

export const footerNavigation = {
  about: [
    { label: "Our Story", href: "/about" },
    { label: "Our Team", href: "/employees" },
    { label: "Accolades", href: "/accolades" },
    { label: "Careers", href: "/join-our-team" },
  ],
  services: [
    { label: "Home Builds", href: "/services/home-building" },
    { label: "Renovations", href: "/renovations-and-additions" },
    { label: "Commercial", href: "/commercial" },
    { label: "Our Process", href: "/process" },
  ],
  resources: [
    { label: "Gallery", href: "/gallery" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
};
