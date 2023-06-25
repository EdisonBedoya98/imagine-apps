export interface CompanyInformation {
  name: string;
  address: string;
  nit: string;
  phone: number;
}
export interface StocktakingFormData {
  name: string;
  amount: number;
  price: number;
  description: string;
  image: FileList | null;
}
