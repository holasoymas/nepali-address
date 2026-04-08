import { test, describe } from 'node:test';
import assert from 'node:assert';
import {
  getLocalLevelById,
  getLocalLevels,
  getLocalLevelsByDistrict,
  getLocalLevelsByType,
} from '../src/index.js';

describe('LocalLevel API', () => {
  test('should return an array of localLevel', () => {
    const result = getLocalLevels();
    assert.ok(Array.isArray(result));
  });

  test('should return all 753 local bodies', () => {
    const result = getLocalLevels();
    assert.strictEqual(result.length, 137);
  });

  test('should return LocalLevel with correct shape', () => {
    const result = getLocalLevels();
    result.forEach((localLevel) => {
      assert.ok('id' in localLevel);
      assert.ok('name' in localLevel);
      assert.ok('name_ne' in localLevel);
      assert.ok('district_id' in localLevel);
      assert.ok('type' in localLevel);
      assert.ok('total_wards' in localLevel);
    });
  });

  test('should return Phaktanglung for ID 10101', () => {
    const ll = getLocalLevelById(10101);
    assert.strictEqual(ll?.name, 'Phaktanglung');
  });

  test('should return undefined for invalid ID', () => {
    const ll = getLocalLevelById(99);
    assert.strictEqual(ll, undefined);
  });

  test('should return all local level of that type', () => {
    const metros = getLocalLevelsByType('metropolitan');
    const subMetros = getLocalLevelsByType('sub-metropolitan');
    const muni = getLocalLevelsByType('municipality');
    const rularMuni = getLocalLevelsByType('rural-municipality');

    const allMetros = metros?.every((ll) => ll.type === 'metropolitan');
    assert.strictEqual(allMetros, true);

    const allSubMetros = subMetros?.every(
      (ll) => ll.type === 'sub-metropolitan',
    );
    assert.strictEqual(allSubMetros, true);

    const allMuni = muni?.every((ll) => ll.type === 'municipality');
    assert.strictEqual(allMuni, true);

    const allRularMuni = rularMuni?.every(
      (ll) => ll.type === 'rural-municipality',
    );
    assert.strictEqual(allRularMuni, true);
  });

  test('should return all the local bodies of Taplejung district', () => {
    const result = getLocalLevelsByDistrict(101);
    assert.strictEqual(result.length, 9);

    const allTaplejungLl = result.every((ll) => ll.district_id === 101);
    assert.strictEqual(allTaplejungLl, true);

    const hasPhaktanglungBody = result.some((d) => d.name === 'Phaktanglung');
    assert.strictEqual(
      hasPhaktanglungBody,
      true,
      'Phaktanglung local body should be present in the Taplejung district',
    );
  });
});
