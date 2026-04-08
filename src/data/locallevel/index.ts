import type { LocalLevel } from '../../types/address.js';
import { PROVINCE_1_LOCAL_LEVELS } from './province1.js';
import { PROVINCE_2_LOCAL_LEVELS } from './province2.js';
import { PROVINCE_3_LOCAL_LEVELS } from './province3.js';
import { PROVINCE_4_LOCAL_LEVELS } from './province4.js';

export const ALL_LOCAL_LEVELS: LocalLevel[] = [
  ...PROVINCE_1_LOCAL_LEVELS,
  ...PROVINCE_2_LOCAL_LEVELS,
  ...PROVINCE_3_LOCAL_LEVELS,
  ...PROVINCE_4_LOCAL_LEVELS,
];
