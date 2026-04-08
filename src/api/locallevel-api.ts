import { ALL_LOCAL_LEVELS } from '../data/locallevel/index.js';
import {
  localLevelMap,
  localLevelsMapByName,
  localLevelsMapByDistrict,
  localLevelsMapByType,
} from '../maps/index.js';
import type { LocalLevel, LocalLevelType } from '../types/address.js';
import { normalize } from '../utils/helpers.js';

/**
 * Retrieves the complete list of all municipalities in Nepal.
 *
 * @returns An array of all 753 local bodies objects.
 *
 * @example
 * ```ts
 * import { getLocalLevels } from 'nepali-address';
 *
 * const districts = getLocalLevels();
 * // → [{ id: 10101, name: 'Phaktanglung', ... }, ...]
 * ```
 *
 * @category LocalLevel
 */
export function getLocalLevels(): LocalLevel[] {
  return ALL_LOCAL_LEVELS;
}

/**
 * Finds a specific local level by its unique ID.
 *
 * @param id - The unique ID of the local level.
 * @returns The local level object if found, otherwise undefined.
 *
 * @example
 * ```ts
 * import { getLocalLevelById } from 'nepali-address';
 *
 * const district = getLocalLevelById(10101);
 * // → { id: 10101, name: 'Phaktanglung', ... }
 *
 * const missing = getLocalLevelById(1999);
 * // → undefined
 * ```
 *
 * @category LocalLevel
 */
export function getLocalLevelById(id: number): LocalLevel | undefined {
  return localLevelMap.get(id);
}

/**
 * Finds a specific local level by its unique ID.
 *
 * @param localLevel - The name of the local level.
 * @returns The local level object if found, otherwise undefined.
 *
 * @example
 * ```ts
 * import { getLocalLevelById } from 'nepali-address';
 *
 * const district = getLocalLevelById(10101);
 * // → { id: 10101, name: 'Phaktanglung', ... }
 *
 * const missing = getLocalLevelById(1999);
 * // → undefined
 * ```
 *
 * @category LocalLevel
 */
export function getLocalLevelByName(
  localLevel: string,
): LocalLevel | undefined {
  return localLevelsMapByName.get(normalize(localLevel));
}

/**
 * Retrieves the complete list of all local level by its type in Nepal.
 *
 * @param type - type of local level.
 * @returns The array of all local level of that type , otherwise undefined.
 *
 * @example
 * ```ts
 * import { getLocalLevelsByType } from 'nepali-address';
 *
 * const district = getLocalLevelsByType('rular-municipality');
 * // → [{ id: 10101, name: 'Phaktanglung', ... }, ...]
 * ```
 *
 * @category LocalLevel
 */

export function getLocalLevelsByType(
  type: LocalLevelType,
): LocalLevel[] | undefined {
  return localLevelsMapByType.get(type);
}

/**
 * Retrieves all local levels belonging to a specific district.
 *
 * @param districtId - The unique ID of the district.
 * @returns Array of local levels in that districts, or empty array if not found.
 *
 * @example
 * ```ts
 * import { getLocalLevelsByDistrict } from 'nepali-address';
 *
 * const districts = getLocalLevelsByDistrict(101);
 * // → [{ id: 10101, name: 'Phaktanglung', ... }, ...]
 * ```
 *
 * @category LocalLevel
 */
export function getLocalLevelsByDistrict(districtId: number): LocalLevel[] {
  return localLevelsMapByDistrict.get(districtId) ?? [];
}
