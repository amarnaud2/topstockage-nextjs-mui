export interface Product {
  id: number;
  asin: string;
  category: string;
  capacity: string;
  warranty: string;
  title: string;
  price: number;
  pricePerTb: number;
  formFactor: string;
  currency: string;
  features: string[];
  amazonLink: string;
}

export interface ProductFilters {
  priceRange: [number, number];
  pricePerTbRange: [number, number];
  formFactors: string[];
  categories: string[];
  capacityRange: [string, string];
}
