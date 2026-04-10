# 🇳🇵 nepali-address
The definitive, type-safe dataset and utility library for Nepal's administrative divisions. Built with TypeScript for modern Node.js environments.

---
<p align="center">
    <a href="https://www.npmjs.com/package/nepali-address">
        <img src="https://img.shields.io/npm/v/nepali-address?color=brightgreen&label=npm%20package" alt="npm version">
    </a>
    <a href="https://github.com/holasoymas/nepali-address/actions/workflows/publish.yml">
        <img src="https://github.com/holasoymas/nepali-address/actions/workflows/publish.yml/badge.svg" alt="build status">
    </a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="license">
    </a>
    <img src="https://img.shields.io/npm/dm/nepali-address.svg" alt="downloads">
</p>

---

## 🚀 Installation

Install the package using your preferred package manager:

```bash
# npm
npm install nepali-address

# pnpm
pnpm add nepali-address

# yarn
yarn add nepali-address

# bun
bun add nepali-address
```

---

# 📖 Usage

### Provinces
Retrieve all provinces or find a specific one by its ID or ISO code.

```javascript
import { getProvinces, getProvinceByISOCode } from 'nepali-address';

// Get all provinces
const provinces = getProvinces();

// Get Lumbini Province by ISO code
const lumbini = getProvinceByISOCode('NP-P5');
console.log(lumbini.name_ne); // लुम्बिनी
```

### Districts
Filter districts by their parent province or lookup by Postcode/ID.

```javascript
import { getDistrictsByProvince, getDistrictByPostcode } from 'nepal-address';

// Get all districts in Bagmati (Province ID: 3)
const bagmatiDistricts = getDistrictsByProvince(3);

// Find a district by Postcode
const kathmandu = getDistrictByPostcode("44600");
console.log(kathmandu.name); // Kathmandu
```

### LocalLevel
Retrieve all local levels or find a specific one by its ID, `district_id`, `type` or more.

```javascript
import { getLocalLevels, getLocalLevelById, getLocalLevelsByType } from 'nepali-address';

const districts = getLocalLevels();
// → [{ id: 10101, name: 'Phaktanglung', ... }, ...]

const district = getLocalLevelById(10101);
// → { id: 10101, name: 'Phaktanglung', ... }

const missing = getLocalLevelById(1999);
// → undefined

const district = getLocalLevelsByType('rular-municipality');
// → [{ id: 10101, name: 'Phaktanglung', ... }, ...]
```
