export interface CompanyInformation {
  name: string;
  address: string;
  nit: string;
  phone: number;
}
export interface StocktakingFormData extends Omit<FormFields, "images"> {
  images: FileListWithBase64[] | null;
}
export interface StocktakingFormDataFormated
  extends Omit<FormFields, "images"> {
  images: string[] | null;
}

export interface FileListWithBase64 extends FileList {
  base64Image?: string;
}

interface FormFields {
  id: string;
  name: string;
  amount: number;
  price: number;
  description: string;
}

export interface User {
  email: string | null;
  uid: string | null;
}
