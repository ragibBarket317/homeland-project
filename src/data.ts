// All site text, links and menu items live here.

export type NavItem = {
  label: string
  to: string
  children?: { label: string; to: string }[]
}

export const SITE = {
  name: 'হোমল্যান্ড পূর্বাচল সিটি',
  subName: 'DEVELOPMENT LIMITED · Your Committed Trust',
  phone: '+880 1962-191919',
  phoneHref: 'tel:+8801962191919',
  whatsappHref: 'https://wa.me/8801962191919',
  email: 'info@homelandpurbachalcity.com',
  address: 'Your office address here',
  brochureUrl: '#',
  social: [
    { label: 'Facebook', href: '#' },
    { label: 'Youtube', href: '#' },
    { label: 'Linkedin', href: '#' },
  ],
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'হোম', to: '/' },
  {
    label: 'আমাদের কথা',
    to: '/about',
    children: [
      { label: 'আমাদের সম্পর্কে', to: '/about' },
      { label: 'চেয়ারম্যানের বাণী', to: '/chairman' },
      { label: 'এমডির বাণী', to: '/md' },
    ],
  },
  { label: 'চলমান প্রজেক্ট', to: '/projects' },
  { label: 'গ্যালারি', to: '/gallery' },
  { label: 'ক্যারিয়ার', to: '/career' },
  { label: 'নিউজ এবং ব্লগস', to: '/blogs' },
  { label: 'যোগাযোগ', to: '/contact' },
]

export const FOOTER_LINKS = [
  { label: 'আমাদের সম্পর্কে', to: '/about' },
  { label: 'চলমান প্রজেক্ট', to: '/projects' },
  { label: 'গ্যালারি', to: '/gallery' },
  { label: 'ক্যারিয়ার', to: '/career' },
  { label: 'নিউজ এবং ব্লগস', to: '/blogs' },
]

export const FOOTER_PHONES = [
  '+880 1962-191919',
  '+880 1322-827080',
  '+880 1313-753995',
  '+880 1313-753972',
]

export const HERO = {
  eyebrow: 'পূর্বাচল নিউ টাউনের পাশে',
  titleLine1: 'একখণ্ড জমি,',
  titleLine2: 'একটি স্বপ্নের বাড়ি',
  description:
    'সুপরিকল্পিত আধুনিক নগরী ‘হোমল্যান্ড পূর্বাচল সিটি’ — নিষ্কণ্টক নির্ভেজাল প্লট, সাথে সাথে সাফ কবলা রেজিস্ট্রি। এককালীন ও ৩৬ কিস্তিতে মূল্য পরিশোধের সুবিধা।',
  videoSrc: '/videos/hero.mp4',
}

export const HERO_STATS = [
  { value: '২০০', label: 'মিটার দূরে শীতলক্ষ্যা নদী' },
  { value: '৩', label: 'কিমি — কাঞ্চন ব্রিজ থেকে' },
  { value: '১২০', label: 'ফিট ঢাকা-সিলেট বাইপাস (প্রস্তাবিত)' },
  { value: '৩৬', label: 'কিস্তিতে প্লট কেনার সুবিধা' },
]

export const ABOUT = {
  eyebrow: 'আমাদের সম্পর্কে',
  titleLine1: 'সবুজে ঘেরা, কোলাহল',
  titleLine2: 'মুক্ত স্বপ্নীল আবাসন',
  paragraphs: [
    'অপরূপ প্রাকৃতিক সৌন্দর্যে ভরা আমাদের বাংলাদেশ। এই সৌন্দর্যময়, নিরাপদ ও মনোরম পরিবেশে, সুখে শান্তিতে নিরাপদে আশ্রয়ের জন্য চাই নিষ্কণ্টক একটি ঠিকানা, যেখানে থাকবে প্রাণ খুলে নিঃশ্বাস নেয়ার স্বপ্নীল আবাসন। যা সব ধরণের দূষণ ও কোলাহল মুক্ত, সবুজে ঘেরা, নিরিবিলি সুস্থ সুন্দর ও প্রশান্তিতে ভরা।',
    'আমাদের প্রকল্প হতে শীতলক্ষ্যা নদীর দূরত্ব মাত্র ২০০ মিটার। বসবাসরত ব্যক্তিবর্গ সকাল-সন্ধ্যায় নদী তীরের স্নিগ্ধ বাতাস উপভোগ করতে পারবেন। উল্লেখ্য যে, সরকারী মেগা প্রকল্প নদী তীর ধরে “ওয়াক ওয়ে” ও ‘গ্রীণ জোন’ এর সুবিধাও পাওয়া যাবে।',
  ],
  highlight: 'আপনি হন ঝুঁকি মুক্ত আবাসনের একজন গর্বিত অংশীদার।',
  image: '/images/block-c.jpg',
  badgeTitle: '৩ · ৫ · ১০',
  badgeText: 'কাঠার রেডি প্লট — প্লট ডিমারকেশন ও বাউন্ডারি ওয়াল সম্পন্ন',
}
