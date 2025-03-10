export function extractFieldValues<T extends Record<string, any>>(
  array: T[],
  key: keyof T,
): string[] {
  return array.map((item) => item[key]); // Extracts only the specified key values
}
