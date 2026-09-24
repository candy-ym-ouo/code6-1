import assert from 'node:assert/strict';
import { actions, towns } from './content.js';
assert.equal(towns.length,8); assert.equal(actions.length,12); assert.ok(actions.every(a=>a.duration>0&&a.stamina>=0));
console.log('rules smoke tests passed');
