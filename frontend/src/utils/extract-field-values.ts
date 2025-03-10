export function extractFieldValues<T extends Record<string, unknown>>(
  array: T[],
  key: keyof T,
): string[] {
  return array.map((item) => String(item[key])); // Extracts only the specified key values and converts them to strings
}
