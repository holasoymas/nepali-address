import { PROVINCES } from '../data/provinces.js';
import { provinceMap, provinceMapByISOCode } from '../maps/index.js';
import type { Province } from '../types/address.js';

/**
 * Retrieves the complete list of provinces in Nepal.
 *
 * @returns An array of all 7 province objects.
 *
 * @example
 * ```ts
 * import { getProvinces } from 'nepali-address';
 *
 * const provinces = getProvinces();
 * // → [{ id: 1, name: 'Koshi Province', ... }, ...]
 * ```
 *
 * @category Province
 */
export function getProvinces(): Province[] {
  return [...PROVINCES];
}

/**
 * Finds a specific province by its unique identifier.
 *
 * @param id - The unique ID of the province (1-7).
 * @returns The province object if found, otherwise undefined.
 *
 * @example
 * ```ts
 * import { getProvinceById } from 'nepali-address';
 *
 * const province = getProvinceById(3);
 * // → { id: 3, name: 'Bagmati Province', ... }
 *
 * const missing = getProvinceById(99);
 * // → undefined
 * ```
 *
 * @category Province
 */
export function getProvinceById(id: number): Province | undefined {
  return provinceMap.get(id);
}

/**
 * Finds a province by its ISO 3166-2:NP code.
 *
 * @param isoCode - The ISO 3166-2:NP code (e.g., "NP-P3").
 * @returns The province object if found, otherwise undefined.
 *
 * @example
 * ```ts
 * import { getProvinceByISOCode } from 'nepali-address';
 *
 * const province = getProvinceByISOCode("NP-P3");
 * // → { id: 3, name: 'Bagmati Province', iso_code: 'NP-P3', ... }
 *
 * const missing = getProvinceByISOCode("NP-P9");
 * // → undefined
 * ```
 *
 * @category Province
 */
export function getProvinceByISOCode(isoCode: string): Province | undefined {
  return provinceMapByISOCode.get(isoCode.toUpperCase());
}
