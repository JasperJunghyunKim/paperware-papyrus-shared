import { Company } from '.';

export default interface Warehouse {
  id: number;
  name: string;
  isPublic: boolean;
  company: Company;
  address: string;
}
