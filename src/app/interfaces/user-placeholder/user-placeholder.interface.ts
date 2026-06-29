import { IAddress } from './address.interface';
import { ICompany } from './company.interface';

export interface IUserPlaceholder {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
}
