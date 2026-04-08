import { test, describe } from 'node:test';
import assert from 'node:assert';
import {
  getProvinceById,
  getProvinceByISOCode,
  getProvinces,
} from '../src/api/province-api.js';

describe('Province API', () => {
  test('should return an array', () => {
    const result = getProvinces();
    assert.ok(Array.isArray(result));
  });

  test('should return all 7 provinces', () => {
    const result = getProvinces();
    assert.strictEqual(result.length, 7);
  });

  test('should return provinces with correct shape', () => {
    const result = getProvinces();
    result.forEach((province) => {
      assert.ok('id' in province);
      assert.ok('name' in province);
      assert.ok('name_ne' in province);
      assert.ok('headquarter' in province);
      assert.ok('headquarter_ne' in province);
      assert.ok('total_districts' in province);
      assert.ok('iso_code' in province);
    });
  });

  test('should return Bagmati for ID 3', () => {
    const province = getProvinceById(3);
    assert.strictEqual(province?.name, 'Bagmati Province');
  });

  test('should return undefined for invalid ID', () => {
    const province = getProvinceById(99);
    assert.strictEqual(province, undefined);
  });

  test('should return Lumbini for ISO code NP-P5', () => {
    const province = getProvinceByISOCode('NP-P5');
    assert.strictEqual(province?.name, 'Lumbini Province');
  });

  test('should return undefined for ISO code NP-P8', () => {
    const province = getProvinceByISOCode('NP-P8');
    assert.strictEqual(province?.name, undefined);
  });
});
