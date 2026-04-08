import type { NagarpalikaRecord } from '../types/address.js';
import municipalityData from '../../nagarpalika.json' with { type: 'json' };

export const municipalities: NagarpalikaRecord[] = municipalityData;