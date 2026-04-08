import { normalize } from '../utils/helpers.js';
import { DISTRICTS } from '../data/districts.js';
import {
  districtsMapByProvince,
  districtMap,
  districtMapByPostcode,
  districtMapByName,
} from '../maps/index.js';
import type { District } from '../types/address.js';

/**
 * Retrieves the complete list of districts in Nepal.
 *
 * @returns An array of all 77 district objects.
 *
 * @example
 * ```ts
 * import { getDistricts } from 'nepali-address';
 *
 * const districts = getDistricts();
 * // → [{ id: 101, name: 'Taplejung', ... }, ...]
 * ```
 *
 * @category District
 */
export function getDistricts(): District[] {
  return [...DISTRICTS];
}

/**
 * Finds a specific district by its unique ID.
 *
 * @param id - The unique ID of the district.
 * @returns The district object if found, otherwise undefined.
 *
 * @example
 * ```ts
 * import { getDistrictById } from 'nepali-address';
 *
 * const district = getDistrictById(306);
 * // → { id: 306, name: 'Kathmandu', ... }
 *
 * const missing = getDistrictById(999);
 * // → undefined
 * ```
 *
 * @category District
 */
export function getDistrictById(id: number): District | undefined {
  return districtMap.get(id);
}

/**
 * Finds a specific district by its name.
 *
 * @param district - The name of the district.
 * @returns The district object if found, otherwise undefined.
 *
 * @example
 * ```ts
 * import { getDistrictByName } from 'nepali-address';
 *
 * const district = getDistrictByName('Kathmandu');
 * // → { id: 306, name: 'Kathmandu', ... }
 *
 * const missing = getDistrictById('Unknown District');
 * // → undefined
 * ```
 *
 * @category District
 */

export function getDistrictByName(district: string): District | undefined {
  return districtMapByName.get(normalize(district));
}

/**
 * Retrieves all districts belonging to a specific province.
 *
 * @param provinceId - The unique ID of the province (1-7).
 * @returns Array of districts in that province, or empty array if not found.
 *
 * @example
 * ```ts
 * import { getDistrictsByProvince } from 'nepali-address';
 *
 * const districts = getDistrictsByProvince(3);
 * // → [{ id: 306, name: 'Kathmandu', ... }, ...]
 * ```
 *
 * @category District
 */
export function getDistrictsByProvince(provinceId: number): District[] {
  return districtsMapByProvince.get(provinceId) ?? [];
}

/**
 * Retrieves a district by its 5-digit post code.
 *
 * @param postcode - The 5-digit postal code (e.g., "44600").
 * @returns The district object if found, otherwise undefined.
 *
 * @example
 * ```ts
 * import { getDistrictByPostcode } from 'nepali-address';
 *
 * const district = getDistrictByPostcode("44600");
 * // → { id: 306, name: 'Kathmandu', ... }
 *
 * const missing = getDistrictByPostcode("00000");
 * // → undefined
 * ```
 *
 * @category District
 */
export function getDistrictByPostcode(postcode: string): District | undefined {
  return districtMapByPostcode.get(postcode);
}
