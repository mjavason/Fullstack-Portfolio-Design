'use server';

export const logout = () => {
  try {
    // Remove token from localStorage
    localStorage.removeItem('token');

    // Optionally, remove token from cookies if stored there
    // document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  } catch (error) {
    console.error('Logout failed', error);
    // Handle error if needed
  }
};
