// interface BusinessSignupResponse {}

interface BusinessSignupDTO {
  email: string;
  password: string;
}

interface EmailVerificationDTO {
  email: string;
  token: string;
}

interface UserSignInDTO {
  email: string;
  password: string;
}

interface SignInResponse {
  accessToken: string;
  refreshToken: string;
  user: {
    fullName: string;
    isPhoneNumberVerified: boolean;
    isEmailVerified: boolean;
    email: string;
    userType: 'user' | 'admin';
    role: 'customer' | 'businessOwner';
    status: string;
    avatarURL: string;
    address: string | null;
    mapLongitude: number | null;
    mapLatitude: number | null;
    signInWithGoogle: boolean;
    createdAt: string;
    updatedAt: string;
    id: string;
  };
}

interface ResetPasswordResponse extends EmailVerificationDTO {
  newPassword: string;
  password: string;
}

interface ResetPasswordDTO {
  password: string;
  confirmPassword: string;
}

interface TwoFaCodeSend {
  verificationMethod: string;
  email: string;
}

interface TwoFaCodeConfirm extends TwoFaCodeSend {
  verificationCode: string;
}

interface TwoFaCodeConfirmResponse extends TwoFaCodeSend {
  email: string;
  token: string;
  id: string;
}

interface ChangePasswordDTO {
  currentPassword: string;
  newPassword: string;
}
