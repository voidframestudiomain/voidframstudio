// Navigation Links
export const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#process', label: 'Process' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

// Services Data
export const services = [
  {
    icon: 'lucide:monitor',
    title: 'Web Design',
    description: 'Aesthetics that capture attention and build immediate trust.',
  },
  {
    icon: 'lucide:code-2',
    title: 'Web Development',
    description: 'Pixel-perfect implementation with blazingly fast performance.',
  },
  {
    icon: 'lucide:layers',
    title: 'Branding',
    description: 'Identity systems that position you as the market leader.',
  },
  {
    icon: 'lucide:bar-chart-2',
    title: 'SEO',
    description: 'Strategic optimization to dominate search results organically.',
  },
  {
    icon: 'lucide:smartphone',
    title: 'Social Media Handling',
    description: 'Community management that fosters loyalty and engagement.',
  },
  {
    icon: 'lucide:pen-tool',
    title: 'Social Post Creation',
    description: 'Scroll-stopping content designed for maximum virality.',
  },
];

// Trusted By Brands
export const trustedBrands = [
  { icon: 'lucide:hexagon', name: 'ACME' },
  { icon: 'lucide:triangle', name: 'Vertex' },
  { icon: 'lucide:circle', name: 'Orbit' },
  { icon: 'lucide:square', name: 'Boxed' },
  { icon: 'lucide:aperture', name: 'Focus' },
  { icon: 'lucide:command', name: 'Command' },
];

// Case Studies / Work
export const caseStudies = [
  {
    category: 'Branding • Website',
    title: 'Lumina Financial',
    description: 'Complete rebrand and digital overhaul for a fintech unicorn, resulting in higher trust scores and user retention.',
    metrics: [
      { value: '+120%', label: 'Qualified Leads' },
      { value: '3.5x', label: 'ROI in 3 Months' },
    ],
    gradient: 'from-neutral-200 via-neutral-100 to-white',
  },
  {
    category: 'SEO • Content',
    title: 'Apex Architecture',
    description: 'Strategic SEO campaign and content architecture to capture high-value commercial intent keywords.',
    metrics: [
      { value: 'Page 1', label: 'For Main Keywords' },
      { value: '+85%', label: 'Organic Traffic' },
    ],
    gradient: 'from-neutral-200 via-neutral-100 to-white',
    reverse: true,
  },
  {
    category: 'Social • Growth',
    title: 'Velvet Apparel',
    description: 'Viral social media strategy combined with paid acquisition to launch a new luxury clothing line.',
    metrics: [
      { value: '50k+', label: 'New Followers' },
      { value: '6x', label: 'ROAS' },
    ],
    gradient: 'from-neutral-200 via-neutral-100 to-white',
  },
];

// Process Steps
export const processSteps = [
  {
    number: '01',
    title: 'Strategy & Discovery',
    description: 'We audit your current position and map out a precise roadmap to your goals.',
    active: true,
  },
  {
    number: '02',
    title: 'Design & Brand System',
    description: 'Creating the visual language and user experience that sets you apart.',
    active: false,
  },
  {
    number: '03',
    title: 'Development & Launch',
    description: 'Building the asset with clean code and rigorous testing before going live.',
    active: false,
  },
  {
    number: '04',
    title: 'SEO + Social Growth',
    description: 'Ongoing optimization and content scaling to dominate your niche.',
    active: false,
  },
];

// Why Choose Us Features
export const whyChooseUs = [
  {
    title: 'Design that feels premium',
    description: 'Elevate your perceived value instantly with world-class aesthetics.',
  },
  {
    title: 'Built to convert, not just look good',
    description: 'Every pixel is placed with a psychological purpose to drive action.',
  },
  {
    title: 'Creative consistency across platforms',
    description: 'Unified messaging and visuals from your website to your social feed.',
  },
  {
    title: 'Fast execution with detail obsession',
    description: 'Speed wins, but precision retains. We deliver both.',
  },
];

// Testimonials
export const testimonials = [
  {
    quote: '"The level of detail VoidFrame puts into their work is unmatched. Our rebrand instantly allowed us to double our pricing without pushback."',
    author: 'Sarah Jenkins',
    role: 'CEO, Modern Living',
  },
  {
    quote: '"VoidFrame transformed our scattered digital presence into a coherent, high-converting machine. The SEO results speak for themselves."',
    author: 'David Ross',
    role: 'Founder, TechFlow',
  },
  {
    quote: '"Professional, timely, and incredibly talented. They understood our luxury positioning perfectly and executed flawlessly."',
    author: 'Elena V.',
    role: 'Director, Atelier',
  },
];

// Social Links
export const socialLinks = [
  { icon: 'lucide:twitter', href: '#' },
  { icon: 'lucide:instagram', href: '#' },
  { icon: 'lucide:linkedin', href: '#' },
];

// Footer Links
export const footerLinks = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
];

// Site Configuration
export const siteConfig = {
  name: 'VoidFrame',
  logo: 'https://images.mastersunion.link/uploads/11022026/v1/Asset22x.webp',
  tagline: 'Premium Digital Growth.',
  title: 'VoidFrame | Premium Digital Agency',
  description: 'Premium web design, development, branding, SEO & social media — crafted to convert attention into revenue.',
  hero: {
    badge: 'Accepting New Clients',
    heading: 'We build brands that look expensive and sell smarter.',
    description: 'Premium web design, development, branding, SEO & social media — crafted to convert attention into revenue.',
    ctaPrimary: 'Book a Free Strategy Call',
    ctaSecondary: 'View Our Work',
    features: [
      'Premium design systems',
      'Conversion-first build',
      'Brand + growth together',
    ],
  },
  services: {
    heading: 'Capabilities',
    description: 'Comprehensive digital solutions designed to elevate your brand authority and market position.',
  },
  work: {
    heading: 'Selected Work',
    description: 'Results-driven projects for ambitious companies.',
  },
  process: {
    heading: 'Our Process',
  },
  whyChooseUs: {
    heading: 'Why VoidFrame?',
    description: "We don't just deliver services; we partner with you to engineer predictable growth through premium execution.",
  },
  contact: {
    heading: 'Ready to build a premium brand presence?',
    cta: 'Book a Free Strategy Call',
    subtitle: 'No pressure • Clear roadmap • Quick audit included',
  },
  growthResults: {
    heading: 'Proven Growth Results',
    description: 'Real metrics from real campaigns. See how we drive measurable impact.',
  },
  whatWeDo: {
    heading: 'What We Do',
    subheading: 'Transforming Brands Into Market Leaders',
    description: 'We combine premium design, strategic thinking, and data-driven execution to build brands that command attention and drive revenue.',
  },
};

// What We Do - Service Highlights
export const whatWeDoServices = [
  {
    icon: 'lucide:sparkles',
    title: 'Brand Identity & Design',
    description: 'We craft visual identities that make your brand instantly recognizable and premium. Every color, font, and element is chosen to elevate your perceived value and build trust with your audience.',
    benefit: 'Stand out in a crowded market',
  },
  {
    icon: 'lucide:rocket',
    title: 'Digital Presence & Websites',
    description: 'We build websites that don\'t just look beautiful—they convert visitors into customers. Fast, responsive, and optimized for every device and search engine.',
    benefit: 'Turn visitors into customers',
  },
  {
    icon: 'lucide:search',
    title: 'SEO & Content Strategy',
    description: 'We help you dominate search results organically. Our strategic approach to SEO and content ensures your brand appears when your customers are searching.',
    benefit: 'Get found by your ideal customers',
  },
  {
    icon: 'lucide:megaphone',
    title: 'Social Media & Growth',
    description: 'We create scroll-stopping content and manage your social presence to build a loyal community that engages, shares, and converts.',
    benefit: 'Build a loyal following',
  },
];

// Growth Results Metrics
export const growthMetrics = [
  {
    icon: 'lucide:trending-up',
    value: '+245%',
    label: 'SEO Traffic Increase',
    description: 'Organic search growth',
    color: '#22c55e',
  },
  {
    icon: 'lucide:dollar-sign',
    value: '+180%',
    label: 'Sales Revenue',
    description: 'Year-over-year growth',
    color: '#3b82f6',
  },
  {
    icon: 'lucide:users',
    value: '+320%',
    label: 'Social Reach',
    description: 'Audience expansion',
    color: '#8b5cf6',
  },
  {
    icon: 'lucide:mouse-pointer-click',
    value: '+156%',
    label: 'Conversion Rate',
    description: 'Click-through improvement',
    color: '#f59e0b',
  },
  {
    icon: 'lucide:bar-chart-3',
    value: '+92%',
    label: 'Brand Awareness',
    description: 'Market visibility boost',
    color: '#ef4444',
  },
  {
    icon: 'lucide:zap',
    value: '4.2x',
    label: 'ROI Average',
    description: 'Return on investment',
    color: '#06b6d4',
  },
];

