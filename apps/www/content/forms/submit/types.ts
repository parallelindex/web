export interface SubmitProps {
  logo: any[];
  name: string;
  description: string;
  category: number;
  images?: any[];
  website: string;
  gab?: string;
  email?: string;
  phone?: string;
  notes?: string;
}

export type SubmitValidation = {
  logo: any[];
  name: string;
  description: string;
  category: number;
  images?: any[];
  website: string;
  email?: string;
  phone?: string;
  notes?: string;
};
