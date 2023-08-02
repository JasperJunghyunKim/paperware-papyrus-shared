import Company from './company';
import UserMenu from './user-menu';

export default interface User {
  id: number;
  company: Company;
  username: string;
  name: string;
  email: string | null;
  phoneNo: string | null;
  birthDate: string | null;
  isActivated: boolean;
  isAdmin: boolean;
  menu: UserMenu | null;
}
