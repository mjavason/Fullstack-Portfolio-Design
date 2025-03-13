import { BASE_URL } from '@/config/constants';

interface UploadImageType {
  success: boolean;
  url: string | null;
  error: string | null;
}

export const uploadImage = async (file: File, token: string): Promise<UploadImageType> => {
  const formData = new FormData();
  formData.append('uploadedFile', file);

  try {
    const response = await fetch(`${BASE_URL}/bucket/upload`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await response.json();
    if (!response.ok) {
      return { success: false, url: null, error: data.message };
    }

    return { success: true, url: data.data, error: null };
  } catch (error: unknown) {
    if (error instanceof Error) return { success: false, url: null, error: error.message };

    return { success: false, url: null, error: 'Image upload failed' };
  }
};
