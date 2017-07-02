import Summator from './sumator';
import { assert } from 'chai';

describe("Summator", function() {
  it("computes the sum of numbers", () => {
    const summator = new Summator([1, 2, 3]);
    assert.equal(summator.sum(), 6);
  });

  it("computes the squared sum of numbers", () => {
    const summator = new Summator([1, 2, 3]);
    assert.equal(summator.sumSquared(), 14);
  });
});
