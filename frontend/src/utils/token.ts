import { JwtPayload } from 'jwt-decode';

export const isExpiredToken = (decodedToken: JwtPayload) => {
  const currentTime = new Date().getTime();
  const tokenExpiryTime = (decodedToken?.exp ?? 0) * 1000;
  return currentTime > tokenExpiryTime;
};
