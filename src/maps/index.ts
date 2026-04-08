import { DISTRICTS } from '../data/districts.js';
import { ALL_LOCAL_LEVELS } from '../data/locallevel/index.js';
import { PROVINCES } from '../data/provinces.js';
import { createLookupMap, createNameLookup, groupBy } from '../utils/maps.js';

//======================================================
//=================PROVINCE MAP=========================
//======================================================

/**
 * A map of provinces by their ID.
 * @internal
 */
export const provinceMap = createLookupMap(PROVINCES, 'id');

/**
 * A map of provinces by their name.
 * @internal
 */
export const provinceMapByName = createNameLookup(PROVINCES);

/**
 * A map of provinces by their ISO code.
 * @internal
 */
export const provinceMapByISOCode = createLookupMap(PROVINCES, 'iso_code');

//======================================================
//=================DISTRICT MAP=========================
//======================================================

/**
 * A map of districts by their ID.
 * @internal
 */
export const districtMap = createLookupMap(DISTRICTS, 'id');

/**
 * A map of districts by their name (both nepali and english).
 * @internal
 */
export const districtMapByName = createNameLookup(DISTRICTS);

/**
 * A map of districts by their postcode.
 * @internal
 */
export const districtMapByPostcode = createLookupMap(DISTRICTS, 'postcode');

/**
 * A map of districts group by their province id.
 * @internal
 */
export const districtsMapByProvince = groupBy(DISTRICTS, 'province_id');

//======================================================
//==============LOCAL LEVEL MAP=========================
//======================================================

/**
 * A map of LocalLevel by their ID.
 * @internal
 */
export const localLevelMap = createLookupMap(ALL_LOCAL_LEVELS, 'id');

/**
 * A map of LocalLevel by their name(both nepali and english).
 * @internal
 */
export const localLevelsMapByName = createNameLookup(ALL_LOCAL_LEVELS);

/**
 * A map of LocalLevel group by their district id.
 * @internal
 */
export const localLevelsMapByDistrict = groupBy(
  ALL_LOCAL_LEVELS,
  'district_id',
);

/**
 * A map of LocalLevel group by their type.
 * @internal
 */
export const localLevelsMapByType = groupBy(ALL_LOCAL_LEVELS, 'type');
