export interface PortfolioTypes {
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
