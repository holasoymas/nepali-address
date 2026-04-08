import { municipalities } from '../data/municipalities.js';
import { districtMap, municipalitiesMapByDistrict, municipalitiesMapByProvince, provinceMap } from '../maps/index.js';
import type { NagarpalikaRecord } from '../types/address.js';

/**
 * Retrieves the complete list of municipalities from the imported JSON file.
 * @returns {NagarpalikaRecord[]} An array of all municipalities.
 */
export function getMunicipalities(): NagarpalikaRecord[] {
  return [...municipalities];
}

/**
 * Retrieves municipalities by the Nepali province name.
 * @param {string} province - The Nepali province name (e.g. "कोशी प्रदेश").
 * @returns {NagarpalikaRecord[]} A list of municipalities in the province.
 */
export function getMunicipalitiesByProvince(province: string): NagarpalikaRecord[] {
  return municipalitiesMapByProvince.get(province) ?? [];
}

/**
 * Retrieves municipalities by province ID.
 * @param {number} provinceId - The numeric province ID.
 * @returns {NagarpalikaRecord[]} A list of municipalities in the province.
 */
export function getMunicipalitiesByProvinceId(provinceId: number): NagarpalikaRecord[] {
  const province = provinceMap.get(provinceId);
  if (!province) {
    return [];
  }
  return getMunicipalitiesByProvince(province.name_ne);
}

/**
 * Retrieves municipalities by the Nepali district name.
 * @param {string} district - The Nepali district name (e.g. "मोरङ").
 * @returns {NagarpalikaRecord[]} A list of municipalities in the district.
 */
export function getMunicipalitiesByDistrict(district: string): NagarpalikaRecord[] {
  return municipalitiesMapByDistrict.get(district) ?? [];
}

/**
 * Retrieves municipalities by district ID.
 * @param {number} districtId - The numeric district ID.
 * @returns {NagarpalikaRecord[]} A list of municipalities in the district.
 */
export function getMunicipalitiesByDistrictId(districtId: number): NagarpalikaRecord[] {
  const district = districtMap.get(districtId);
  if (!district) {
    return [];
  }
  return getMunicipalitiesByDistrict(district.name_ne);
}
