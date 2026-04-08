import { districts } from '../data/districts.js';
import { municipalities } from '../data/municipalities.js';
import { provinces } from '../data/provinces.js';
import { createLookupMap, groupBy } from '../utils/maps.js';

/**
 * A map of provinces by their ID.
 */
export const provinceMap = createLookupMap(provinces, 'id');

/**
 * A map of provinces by their ISO code.
 */
export const provinceMapByISOCode = createLookupMap(provinces, 'iso_code');

/**
 * A map of districts by their ID.
 */
export const districtMap = createLookupMap(districts, 'id');

/**
 * A map of districts by their postcode.
 */
export const districtMapByPostcode = createLookupMap(districts, 'postcode');

/**
 * A map of districts grouped by their province id.
 */
export const districtsMapByProvince = groupBy(districts, 'province_id');

/**
 * A map of municipalities grouped by Nepali province name.
 */
export const municipalitiesMapByProvince = groupBy(municipalities, 'province');

/**
 * A map of municipalities grouped by Nepali district name.
 */
export const municipalitiesMapByDistrict = groupBy(municipalities, 'district');
