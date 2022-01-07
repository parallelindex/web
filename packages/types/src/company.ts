export type PublishState = 'PUBLISHED' | 'PENDING';

export interface Company {
  id: number;
  uuid: string;
  category: { name: string };
  description: string;
  email?: string;
  gab?: string;
  images?: string[];
  logo: string;
  name: string;
  phone?: string;
  publishState?: PublishState;
  website?: string;
}
