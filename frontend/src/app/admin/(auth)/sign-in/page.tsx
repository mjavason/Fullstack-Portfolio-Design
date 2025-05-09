'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import signInSchema from './schema';
import { useForm } from 'react-hook-form';
import { useUserSignInMutation } from '@/redux/api/auth';
import { CookieType } from '@/config/enums';
import { getCookieValue, removeCookieValue, setCookieValue } from '@/utils/cookies';
import { toast } from 'react-toastify';
import { Button } from '@heroui/react';
import paths from '@/config/constants/paths';

function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShow = () => setShowPassword(!showPassword);
  const [userSignIn, { isLoading }] = useUserSignInMutation();

  useEffect(() => {
    async function checkExpiryMessage() {
      const expiryMessage = await getCookieValue(CookieType.ExpiryMessage);

      if (expiryMessage) {
        toast.error(expiryMessage);
        removeCookieValue(CookieType.ExpiryMessage);
      }
    }

    checkExpiryMessage();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInSchema),
  });
  const onSubmitHandler = async (data: Omit<UserSignInDTO, 'userRole'>) => {
    await userSignIn({
      ...data,
    })
      .unwrap()
      .then((res) => {
        if (res.data && res.data.accessToken) {
          getCookieValue(CookieType.CurrentUrl)
            .then((currentUrl) => currentUrl ?? null)
            .then((currentUrl) => {
              setCookieValue(CookieType.Token, res.data.accessToken);
              removeCookieValue(CookieType.CurrentUrl);
              window.location.href = currentUrl ?? paths.adminDashboard;
            });
        }
      })
      .catch((err: any) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background-secondary p-4">
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="w-full max-w-md space-y-6 rounded-lg bg-white p-6 border-1"
      >
        <h2 className="text-center text-2xl font-semibold text-primary">Sign In</h2>

        {/* Email Field */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-primary">Email</label>
          <input
            type="email"
            {...register('email', { required: 'Email is required' })}
            className="mt-1 rounded-lg border border-secondary bg-background-secondary px-3 py-2 text-primary focus:border-accent-primary focus:ring-2 focus:ring-accent-primary"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
        </div>

        {/* Password Field */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-primary">Password</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              {...register('password', { required: 'Password is required' })}
              className="mt-1 w-full rounded-lg border border-secondary bg-background-secondary px-3 py-2 text-primary focus:border-accent-primary focus:ring-2 focus:ring-accent-primary"
            />
            <button
              type="button"
              onClick={toggleShow}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-link-primary hover:underline"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>

        <Button isLoading={isLoading} type="submit" className="w-full bg-accent-primary text-white">
          Sign In
        </Button>
      </form>
    </div>
  );
}

export default SignInPage;
