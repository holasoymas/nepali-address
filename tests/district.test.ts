import { test, describe } from 'node:test';
import assert from 'node:assert';
import {
  getDistrictById,
  getDistrictByName,
  getDistrictByPostcode,
  getDistricts,
  getDistrictsByProvince,
} from '../src/index.js';

describe('District API', () => {
  test('should return an array of districts', () => {
    const result = getDistricts();
    assert.ok(Array.isArray(result));
  });

  test('should return all 77 districts', () => {
    const result = getDistricts();
    assert.strictEqual(result.length, 77);
  });

  test('should return district with correct shape', () => {
    const result = getDistricts();
    result.forEach((district) => {
      assert.ok('id' in district);
      assert.ok('name' in district);
      assert.ok('name_ne' in district);
      assert.ok('headquarter' in district);
      assert.ok('headquarter_ne' in district);
      assert.ok('postcode' in district);
      assert.ok('total_local_levels' in district);
    });
  });

  test('should return Kathmandu for ID 306', () => {
    const district = getDistrictById(306);
    assert.strictEqual(district?.name, 'Kathmandu');
  });

  test('should return undefined for invalid ID', () => {
    const district = getDistrictById(99);
    assert.strictEqual(district, undefined);
  });

  test('Lalitpur - English', () => {
    const district = getDistrictByName('Lalitpur');
    assert.strictEqual(district?.name, 'Lalitpur');
  });

  test('Kathmandu - Nepali correct', () => {
    const district = getDistrictByName('काठमाडौँ');
    assert.strictEqual(district?.name_ne, 'काठमाडौँ');
  });

  test('Invalid random string', () => {
    const district = getDistrictByName('abcdef');
    assert.strictEqual(district, undefined);
  });

  test('Kathmandu - Nepali with space issue', () => {
    const district = getDistrictByName('का ठ मा ण्डौ');
    assert.strictEqual(district, undefined);
  });

  test('should return Kathmandu for postcode 44600', () => {
    const ktm = getDistrictByPostcode('44600');
    assert.strictEqual(ktm?.name, 'Kathmandu');
  });

  test('should return all the districts of Karnali province', () => {
    const result = getDistrictsByProvince(6);
    assert.strictEqual(result.length, 10);

    const allKarnaliDistrict = result.every((d) => d.province_id === 6);
    assert.strictEqual(allKarnaliDistrict, true);

    const hasSurkhet = result.some((d) => d.name === 'Surkhet');
    assert.strictEqual(
      hasSurkhet,
      true,
      'Surkhet should be present in the Karnali list',
    );
  });
});
