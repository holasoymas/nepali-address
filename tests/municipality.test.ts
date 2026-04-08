import { test, describe } from 'node:test';
import assert from 'node:assert';
import {
  getMunicipalities,
  getMunicipalitiesByDistrict,
  getMunicipalitiesByDistrictId,
  getMunicipalitiesByProvince,
  getMunicipalitiesByProvinceId,
} from '../src/api/municipality-api.js';

describe('Municipality API', () => {
  test('should return municipality list from JSON', () => {
    const items = getMunicipalities();
    assert.ok(items.length > 0, 'Expected at least one municipality record');
  });

  test('should return municipalities for Koshi Province by Nepali name', () => {
    const items = getMunicipalitiesByProvince('कोशी प्रदेश');
    assert.ok(items.length > 0);
    assert.ok(items.some((item) => item.district === 'मोरङ'));
  });

  test('should return municipalities for province ID 1', () => {
    const items = getMunicipalitiesByProvinceId(1);
    assert.ok(items.length > 0);
  });

  test('should return municipalities for district name ताप्लेजुङ', () => {
    const items = getMunicipalitiesByDistrict('ताप्लेजुङ');
    assert.ok(items.length > 0);
    assert.strictEqual(items[0].nagarpalika, 'फुङलिङ नगरपालिका');
  });

  test('should return municipalities for district ID 101', () => {
    const items = getMunicipalitiesByDistrictId(101);
    assert.ok(items.length > 0);
  });
});