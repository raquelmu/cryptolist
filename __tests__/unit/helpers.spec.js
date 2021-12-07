import {prettyNumber} from '../../src/helpers';

describe('prettyNumber', () => {
    it('prettyNumber with large numbers', () => {
        expect(prettyNumber(1000000000000)).toBe('1,000,000,000,000');
        expect(prettyNumber(10000)).toBe('10,000');
    });
    it('prettyNumber with decimals', () => {
        expect(prettyNumber(5.835718212)).toBe('5.84');
        expect(prettyNumber(0.3611)).toBe('0.36');
    });
    it('prettyNumber with a string', () => {
        expect(prettyNumber("not_a_number")).toBe('not_a_number');
    })
  });