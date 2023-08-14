export interface ProjectTypes {
  id: number;
  title: string;
  description: string;
  image: File;
  link: string;
  icons: string[];
  categories: string[];
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
