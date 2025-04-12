/**
 * Formats a Date object or date string to "DD MMMM YYYY" format (e.g., "06 April 2025").
 * @param {Date | string} inputDate - The date to format.
 * @returns {string} - Formatted date string.
 */
export function formatLongDate(inputDate: Date | string) {
  const date = new Date(inputDate);
  if (isNaN(date.getTime())) throw new Error('Invalid date');

  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(date);
}
