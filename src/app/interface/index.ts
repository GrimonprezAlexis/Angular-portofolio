export interface ProjectTypes {
  id: string;
  title: string;
  subtitle: string;
  job: string;
  technologies: string[];
  description: string;
  tags: string[];
  icons: string[];
  imagesUrl: string[];
}

export interface CategoryFilters {
  label: string;
  icon: string;
  category: string;
}

interface ModalComponent {
  data?: any;
}

export interface Config {
  PORT: number;
  MONGO_URI: string;
  API_URL: string;
}

//SOON
export interface ProjectsDetails {
  id: number;
  title: string;
  description: string;
  role: string;
  maquetteUrl?: string;
  projectDetails: string;
  objective: string;
  resources?: string[];
  constraints?: string[];
  deliverables?: string[];
  technologies: string[];
  hosting?: string;
  maquetteImage?: File;
}
