export interface ProjectTypes {
  _id: string;
  title: string;
  subtitle: string;
  job: string;
  technologies: string[];
  icons: string[];
  imageUrl: string;
  imagesUrl: string[];
  imageName: string; //hard fix
  description: string;
  tags: string[];
  links: {
    repository: string;
    maquette: string;
    app_link: string;
  };
}

interface ModalComponent {
  data?: any;
}

export interface Config {
  PORT: number;
  MONGO_URI: string;
  API_URL: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data: ProjectTypes;
}

//SOON ..
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

export interface TechnologyWithIcons {
  technologie: string;
  icon: string;
}

export interface Alert {
  type: 'success' | 'error' | '';
  msg: string;
}
