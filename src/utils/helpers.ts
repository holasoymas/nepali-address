/**
 * Normalize the input given by user
 * Useful for getting data that are little bit error like.
 * @internal
 */
export function normalize(input: string): string {
  return input
    .normalize('NFC')
    .toLowerCase()
    .trim()
    .replace(/\bprovince\b/g, '')
    .replace(/प्रदेश/g, '')
    .replace(/\s+/g, ' ');
}
