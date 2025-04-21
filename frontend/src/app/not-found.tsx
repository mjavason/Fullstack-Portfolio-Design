'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// This component handles the 404 Not Found page by redirecting to the home page.
// It was created because of a strange bug, where when logged in as admin, and you leave the active tab, then return much later when your token has expired, the app throws a notfound error for the sign-in page, which actually exist. Its very frustrating. Hopefully this holds things together
export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, [router]);

  return null;
}
