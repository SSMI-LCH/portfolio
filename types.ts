export interface Tag {
  label: string;
  type: 'domain' | 'tech' | 'industry';
}

export interface Hero {
  headline: string;
  subheadline: string;
  tags: string[];
}

export interface Highlight {
  title: string;
  metric_or_fact: string;
  detail: string;
  icon?: string;
}

export interface FilterState {
  domain: string | null;
  industry: string | null;
  yearRange: [number, number];
  goal: string | null;
}

export interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  domain: string; // Used for filtering
  year: string;
  problem: string;
  approach: string[];
  stack: string[];
  outcomes: string[];
  transferable_assets: string[];
}

export interface TimelineItem {
  period_years: string;
  year_sort: number; // for sorting
  org_or_client: string;
  role: string;
  what_did: string[];
  domain: string;
  industry?: string;
}

export interface CredentialItem {
  type: 'cert' | 'award' | 'publication' | 'patent';
  name: string;
  year: string;
  note: string;
}

export interface QuickAction {
  id: string;
  label: string;
  filterPayload: Partial<FilterState>;
  description: string;
}

export interface PortfolioData {
  hero: Hero;
  highlights: Highlight[];
  filters: {
    domains: string[];
    industries: string[];
    years: [number, number];
  };
  case_studies: CaseStudy[];
  timeline: TimelineItem[];
  credentials: CredentialItem[];
  quick_actions: QuickAction[];
  disclaimer: string;
}