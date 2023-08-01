export default interface Company {
  id: number;
  businessName: string;
  companyRegistrationNumber: string;
  bizType: string;
  bizItem: string;
  invoiceCode: string;
  representative: string;
  address: string;
  phoneNo: string;
  faxNo: string;
  managedById: number | null;
  createdAt: string;
}
