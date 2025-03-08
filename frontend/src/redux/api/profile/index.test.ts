import { BASE_URL } from '@/config';
import { makeStore } from '@/redux/store';
import { profileApi } from './index';

// Mock axios
jest.mock('axios');
const mockAxios = jest.requireMock('axios') as jest.Mock;

describe('profileApi', () => {
  const store = makeStore();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('getProfileDetails should trigger the correct API call', async () => {
    const mockResponse = {
      success: true,
      data: { name: 'John Doe', email: 'john@example.com' },
    };

    mockAxios.mockResolvedValueOnce({ data: mockResponse });

    const result = await store.dispatch(profileApi.endpoints.getProfileDetails.initiate());

    expect(mockAxios).toHaveBeenCalledWith(
      expect.objectContaining({
        url: `${BASE_URL}/account-setup`,
        method: 'GET',
      }),
    );
    expect(result.data).toEqual(mockResponse);
  });

  it('verifyPersonalInformation should trigger the correct API call', async () => {
    const mockResponse = { success: true, data: { verified: true } };
    const personalInfoData = {
      firstName: 'Ifenna',
      lastName: 'Ifenna',
      phoneNumber: '09012121121',
      gender: 'Male',
      dateOfBirth: '02/21/22',
      occupation: 'Developer',
      country: 'Nigeria',
      passportPhotographUrl: 'https://tpp-admin.netlify.app/sign-in',
      nationalIdentificationNumber: '12312424222',
      bankVerificationNumber: '221321212322',
    };

    mockAxios.mockResolvedValueOnce({ data: mockResponse });

    const result = await store.dispatch(
      profileApi.endpoints.verifyPersonalInformation.initiate(personalInfoData),
    );

    expect(mockAxios).toHaveBeenCalledWith(
      expect.objectContaining({
        url: `${BASE_URL}/account-setup/personal-information`,
        method: 'PUT',
        data: personalInfoData,
      }),
    );
    expect(result.data).toEqual(mockResponse);
  });

  it('verifyBusinessInformation should trigger the correct API call', async () => {
    const mockResponse = { success: true, data: { verified: true } };
    const businessInfoData = {
      businessName: 'businessName',
      businessDescription: 'businessDescription',
      websiteUrl: 'https://tpp-admin.netlify.app/',
      industry: 'business',
      businessCategory: 'Tech',
      businessType: 'Tech',
      staffSize: '10',
      businessAddress: '10 Ani street',
      state: 'Enugu',
      zipCode: '042',
      registrationNumber: '123456002123422',
      taxIdentificationNumber: '2312332323',
      incorporationCertificateUrl: 'https://tpp-admin.netlify.app/',
      utilityBillUrl: 'https://tpp-admin.netlify.app/',
      country: 'Nigeria',
    };

    mockAxios.mockResolvedValueOnce({ data: mockResponse });

    const result = await store.dispatch(
      profileApi.endpoints.verifyBusinessInformation.initiate(businessInfoData),
    );

    expect(mockAxios).toHaveBeenCalledWith(
      expect.objectContaining({
        url: `${BASE_URL}/account-setup/business-information`,
        method: 'PUT',
        data: businessInfoData,
      }),
    );
    expect(result.data).toEqual(mockResponse);
  });

  it('merchantRecentTransaction should trigger the correct API call', async () => {
    const mockResponse = {
      success: true,
      data: [
        { id: 1, amount: 100.0, transactionDate: '2023-11-20' },
        { id: 2, amount: 50.0, transactionDate: '2023-11-19' },
      ],
    };

    mockAxios.mockResolvedValueOnce({ data: mockResponse });

    const result = await store.dispatch(profileApi.endpoints.merchantRecentTransaction.initiate());

    expect(mockAxios).toHaveBeenCalledWith(
      expect.objectContaining({
        url: `${BASE_URL}/reports/analytics/recent-paid-transactions`,
        method: 'GET',
      }),
    );
    expect(result.data).toEqual(mockResponse);
  });
});
