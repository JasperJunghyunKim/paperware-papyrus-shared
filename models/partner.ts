import PartnerTaxManager from './partner-tax-manager';

export default interface Partner {
  companyId: number;
  companyRegistrationNumber: string;
  partnerNickName: string;
  creditLimit: number;
  memo: string;
}
