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
  userRole: 'MERCHANT' | 'ADMIN';
}

interface SignInResponse extends BusinessSignupDTO {
  token: string;
  email: string;
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
