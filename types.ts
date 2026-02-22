
export interface Project {
  id: string;
  title: string;
  category: string;
  problem: string;
  approach: string;
  outputs: string[];
  results: string;
  nextSteps: string;
  imageUrl: string;
}

export interface Publication {
  id: string;
  type: 'paper' | 'report' | 'presentation' | 'resource';
  title: string;
  summary: string;
  keywords: string[];
  link?: string;
}

export interface Stat {
  label: string;
  value: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  outputs: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  content: string;
  category: string;
  imageUrl?: string;
  comments?: number;
  isNotice?: boolean;
}
