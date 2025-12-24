export enum SectionId {
  HOME = 'home',
  ABOUT = 'about',
  SERVICES = 'services',
  PROJECTS = 'projects',
  CONTACT = 'contact'
}

export interface NavItem {
  label: string;
  to: SectionId;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

// ChatMessage dihapus karena fitur AI dihilangkan