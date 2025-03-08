import { AccountSection } from '@/app/(dashboard)/account-setup/enum';
import { VerificationStatus } from '@/app/(dashboard)/enum';

export interface IProfile {
  id: string;
  email: string;
  verificationStatus: VerificationStatus;
  personalInformation: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    dateOfBirth: string;
    gender: string;
    occupation: string;
    country: string;
    passportPhotographUrl: string;
    nationalIdentificationNumber: string;
    bankVerificationNumber: string;
  };
  businessInformation: {
    businessName: string;
    businessDescription: string;
    industry: string;
    businessCategory: sting;
    businessType: string;
    staffSize: string;
    websiteUrl: string;
    businessAddress: string;
    state: string;
    zipCode: string;
    incorporationCertificateUrl: string;
    registrationNumber: string;
    utilityBillUrl: string;
    country: string;
    taxIdentificationNumber;
  };
  verificationIssue: {
    reason: string;
    accountSections: AccountSection[];
  };
  hasLinkedAccount: boolean;
  hasTwoFactorEnabled: boolean;
}

export interface IRecentTransaction {
  id: string;
  payerName: string;
  email: string;
  phone: string;
  status: string;
  dateCreated: string;
  datePaid: string;
  amount: number;
  paymentMethod: string;
  collectionName: string;
}
export interface IVerifyPersonalInformation {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: string;
  dateOfBirth: string;
  occupation: string;
  country: string;
  passportPhotographUrl: string;
  nationalIdentificationNumber: string;
  bankVerificationNumber: string;
}

export interface IVerifyBusinessDetails {
  businessName: string;
  businessDescription: string;
  websiteUrl: string;
  industry: string;
  businessCategory: string;
  businessType: string;
  staffSize: string;
  businessAddress: string;
  state: string;
  zipCode: string;
  registrationNumber: string;
  taxIdentificationNumber: string;
  incorporationCertificateUrl: string;
  utilityBillUrl: string;
  country: string;
}
