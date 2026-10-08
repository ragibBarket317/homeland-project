export interface NavItem {
  label: string;
  href: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface FooterColumn {
  title: string;
  links: NavItem[];
}
